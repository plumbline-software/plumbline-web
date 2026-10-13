/// <reference types="astro/client" />

interface ImportMetaEnv {
	readonly RESEND_API_KEY: string;
	readonly RESEND_FROM_EMAIL?: string;
	readonly RESEND_TO_EMAIL?: string;
	readonly PUBLIC_GOOGLE_SITE_VERIFICATION?: string;
	readonly PUBLIC_BING_SITE_VERIFICATION?: string;
	/** Set by Vercel during its builds. */
	readonly VERCEL?: string;
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}
