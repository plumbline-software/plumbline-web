# Product

<!-- impeccable:product-schema 1 -->

> Written 2026-10-12 from PRODUCT_SPEC.md and confirmed conversation with the owner. The init interview round was declined; facts marked *(inferred)* come from the spec and should be confirmed.

## Platform

web

## Users

Organizations looking for an outside engineering partner to build or fix web software: web applications, internal tools, APIs, cloud infrastructure, or a technical second opinion. Secondary audiences named in the spec: enterprise and public-sector stakeholders evaluating an external partner on security, accessibility, documentation and delivery discipline, plus future contractors and developers. *(Primary-audience weighting inferred from spec §3.)*

Their questions, in order: what does Plumbline do, can it do what I need, how does it work, can I trust it, how do I get in touch.

## Product Purpose

Plumbline Software is a Vancouver, BC software development and technology consulting company. The website is its marketing site, and it succeeds when a qualified visitor sends an inquiry through `/contact`.

## Positioning

Founder-led. Clients work directly with the founder (unnamed on the site), the engineer who scopes and writes the code, with no account managers or handoffs. The work is built to be maintained: tested, typed, documented, and handed over with documentation, not just a repository. Plumbline runs the same four-stage process (Understand, Plan, Build, Deliver) on every engagement.

## Operating Context

Visitors arrive comparing consultancies, often on a phone first and a desktop later. They usually check the founder on LinkedIn before writing. An inquiry goes to an inbox via the Resend email API. The owner triages it by service and timeline, and a reply is promised within two business days (the owner still has to confirm this commitment).

## Capabilities and Constraints

- Astro + TypeScript + Tailwind CSS v4. Every route is static except `POST /api/contact`, which runs as a Vercel serverless function (`@astrojs/vercel`; `@astrojs/node` elsewhere). Hosted on Vercel's default `*.vercel.app` address.
- Minimal client JavaScript. No CMS, accounts, or booking. Analytics are limited to cookieless Vercel Web Analytics.
- A single light theme.
- Services: Full-Stack Development, Frontend Engineering, API & Backend Development, Cloud & Infrastructure, Technology Consulting.
- Content shared across pages lives in `src/data.ts` (contact, founder, services, timelines). Full requirements are in `PRODUCT_SPEC.md`.

## Brand Commitments

- Name: Plumbline Software.
- The plumb-line mark: a short bar, a vertical string and a kite-shaped plumb bob (a plumb line finds true vertical, which is the brand promise).
- Contact email: plumbline.software@gmail.com.
- Hero headline: "Software that still makes sense in two years."
- Voice: direct, plain, confident, understated. "We" for the company, "I" in the founder section.

## Evidence on Hand

- No Plumbline client projects, testimonials, case studies, certifications or metrics exist. Never fabricate them.
- Founder experience is real and may be shown as personal experience only, and only in general terms: "a software engineer with 4+ years at Samsung Canada". No specific projects.
- No Samsung logos and no implied affiliation.
- Anonymous by choice: no name, headshot, LinkedIn, GitHub or specific projects on the public site, and no founder in structured data. The one credential is Samsung Canada.

## Product Principles

1. Credibility over hype: every claim is true and checkable.
2. Clarity over complexity: a visitor understands the offer within seconds.
3. The site is the proof: its own engineering quality demonstrates the work.
4. Direct access: the person you talk to is the person who builds it.

## Accessibility & Inclusion

WCAG-conscious throughout: semantic HTML, a logical heading order, keyboard operation, visible focus, sufficient contrast, `prefers-reduced-motion` respected, and meaning never conveyed by colour alone. Public-sector buyers may require accessibility.
