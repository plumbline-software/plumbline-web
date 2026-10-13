import type { APIRoute } from 'astro';
import { SITE, services, timelines } from '../../data';

export const prerender = false;

const MAX_LENGTH = 5000;

function isValidEmail(value: string): boolean {
	return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

const escape = (value: string) =>
	value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

// Email clients ignore <style> and web fonts unevenly, so everything is inline
// styles on a single 560px table — the layout that survives Gmail and Outlook.
function inquiryEmail(fields: Record<'name' | 'email' | 'organization' | 'service' | 'timeline' | 'message', string>): string {
	const f = Object.fromEntries(Object.entries(fields).map(([k, v]) => [k, escape(v)])) as typeof fields;
	const font = "-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif";
	const row = (label: string, value: string) =>
		`<tr><td style="padding:10px 0;border-top:1px solid #d5d7db;width:120px;color:#5a616c;font-size:13px;vertical-align:top">${label}</td><td style="padding:10px 0;border-top:1px solid #d5d7db;color:#10141a;font-size:14px;font-weight:600">${value}</td></tr>`;

	return `<!doctype html><html><body style="margin:0;padding:0;background:#f6f6f5">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f6f6f5;padding:32px 16px;font-family:${font}"><tr><td align="center">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:560px;background:#ffffff;border:1px solid #d5d7db;overflow:hidden">
	<tr><td style="background:#10141a;padding:20px 28px;color:#ffffff;font-size:12px;font-weight:600;letter-spacing:.2em">${escape(SITE.name.toUpperCase())}</td></tr>
	<tr><td style="padding:28px 28px 8px">
		<p style="margin:0;color:#5a616c;font-size:11px;font-weight:600;letter-spacing:.16em;text-transform:uppercase">New project inquiry</p>
		<h1 style="margin:6px 0 0;color:#10141a;font-size:22px;line-height:1.3">${f.name}${f.organization ? ` <span style="color:#5a616c;font-weight:400">from ${f.organization}</span>` : ''}</h1>
	</td></tr>
	<tr><td style="padding:12px 28px 0"><table role="presentation" width="100%" cellpadding="0" cellspacing="0">
		${row('Email', `<a href="mailto:${f.email}" style="color:#10141a">${f.email}</a>`)}
		${row('Service', f.service)}
		${row('Timeline', f.timeline)}
	</table></td></tr>
	<tr><td style="padding:20px 28px 0">
		<p style="margin:0 0 8px;color:#5a616c;font-size:13px">Project details</p>
		<div style="background:#f6f6f5;border:1px solid #d5d7db;padding:16px;color:#10141a;font-size:15px;line-height:1.6">${f.message.replace(/\n/g, '<br>')}</div>
	</td></tr>
	<tr><td style="padding:24px 28px 28px">
		<a href="mailto:${f.email}?subject=${encodeURIComponent('Re: your project inquiry')}" style="display:inline-block;background:#10141a;color:#ffffff;font-size:12px;font-weight:600;letter-spacing:.14em;text-transform:uppercase;text-decoration:none;padding:14px 20px">Reply to ${f.name}</a>
	</td></tr>
</table>
<p style="margin:16px 0 0;color:#5a616c;font-size:12px">Sent from the contact form on the ${escape(SITE.name)} website.</p>
</td></tr></table>
</body></html>`;
}

export const POST: APIRoute = async ({ request }) => {
	let body: Record<string, unknown>;
	try {
		body = await request.json();
	} catch {
		return Response.json({ ok: false, error: 'Invalid request body.' }, { status: 400 });
	}

	const name = String(body.name ?? '').trim();
	const email = String(body.email ?? '').trim();
	const message = String(body.message ?? '').trim();
	const organization = String(body.organization ?? '').trim();
	// Unknown values are dropped rather than rejected — they are only context for the reply.
	const service = services.find((s) => s.slug === body.service)?.name ?? 'Not sure yet';
	const timeline = timelines.find((t) => t === body.timeline) ?? 'No fixed date';
	// Honeypot: real users never fill this hidden field in; bots often do.
	const website = String(body.website ?? '').trim();

	if (website) {
		// Silently succeed so the bot thinks it worked, without sending anything.
		return Response.json({ ok: true });
	}

	if (!name || !email || !message) {
		return Response.json({ ok: false, error: 'Name, email, and message are all required.' }, { status: 400 });
	}
	if (!isValidEmail(email)) {
		return Response.json({ ok: false, error: 'That email address doesn’t look right.' }, { status: 400 });
	}
	if (name.length > 200 || email.length > 200 || organization.length > 200 || message.length > MAX_LENGTH) {
		return Response.json({ ok: false, error: 'One of the fields is too long.' }, { status: 400 });
	}

	const apiKey = import.meta.env.RESEND_API_KEY;
	const fromEmail = import.meta.env.RESEND_FROM_EMAIL || `${SITE.name} <onboarding@resend.dev>`;
	const toEmail = import.meta.env.RESEND_TO_EMAIL || 'plumbline.software@gmail.com';

	if (!apiKey) {
		console.error('Resend env var missing: RESEND_API_KEY');
		return Response.json({ ok: false, error: 'The form is temporarily unavailable.' }, { status: 503 });
	}


	const resendResponse = await fetch('https://api.resend.com/emails', {
		method: 'POST',
		headers: {
			Authorization: `Bearer ${apiKey}`,
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
			from: fromEmail,
			to: [toEmail],
			reply_to: email,
			subject: `New inquiry: ${service} — ${name}${organization ? ` (${organization})` : ''}`.replace(/\s+/g, ' '),
			html: inquiryEmail({ name, email, organization, service, timeline, message }),
			text: `Name: ${name}\nEmail: ${email}\nOrganization: ${organization || '—'}\nService: ${service}\nTimeline: ${timeline}\n\n${message}`,
		}),
	});

	if (!resendResponse.ok) {
		const detail = await resendResponse.text().catch(() => '');
		console.error('Resend API error', resendResponse.status, detail);
		return Response.json({ ok: false, error: 'Could not send your message. Please try again shortly.' }, { status: 502 });
	}

	return Response.json({ ok: true });
};
