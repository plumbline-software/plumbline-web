// @ts-check
import node from '@astrojs/node';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel';
import sanity from '@sanity/astro';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';

// On Vercel the production address comes from the platform (e.g. plumbline.vercel.app),
// so canonical URLs, the sitemap and robots.txt follow it with no edits. SITE_URL overrides it,
// for example once a custom domain exists.
const site = process.env.SITE_URL || 'https://plumbline-software.vercel.app';

// https://astro.build/config
export default defineConfig({
	site,
	// Internal links are written without a trailing slash; canonical URLs and the sitemap match them.
	trailingSlash: 'never',

	vite: {
		plugins: [tailwindcss()],
	},

	// lastmod tells search engines when pages last changed (each deploy rebuilds them).
	integrations: [
		sitemap({ lastmod: new Date() }),
		react(),
		// Content edited in the standalone Studio (studio-plumbline-software/). Pages are prerendered,
		// so new content goes live on the next deploy.
		sanity({ projectId: '1wwmdgze', dataset: 'production', apiVersion: '2026-10-13', useCdn: false }),
	],

	// Vercel runs /api/contact as a serverless function; anywhere else it runs on Node.
	adapter: process.env.VERCEL ? vercel() : node({ mode: 'standalone' }),
});
