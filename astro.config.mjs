// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import node from '@astrojs/node';
import vercel from '@astrojs/vercel';

// On Vercel the production address comes from the platform (e.g. northline-web.vercel.app),
// so canonical URLs, the sitemap and robots.txt follow it with no edits. SITE_URL overrides it,
// for example once a custom domain exists.
const site =
  process.env.SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : 'http://localhost:4321');

// https://astro.build/config
export default defineConfig({
  site,
  // Internal links are written without a trailing slash; canonical URLs and the sitemap match them.
  trailingSlash: 'never',

  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [sitemap()],

  // Vercel runs /api/contact as a serverless function; anywhere else it runs on Node.
  adapter: process.env.VERCEL ? vercel() : node({ mode: 'standalone' }),
});
