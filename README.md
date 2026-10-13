# Plumbline Software — Marketing Website

Marketing site for Plumbline Software, a Vancouver-based software
development and technology consulting company. Built with Astro, TypeScript,
and Tailwind CSS; almost entirely static, with one server route for the
contact form. See `PRODUCT_SPEC.md` for the full product spec.

## Project Structure

```text
/
├── public/                  favicons, apple-touch-icon, og.png (social preview)
├── src
│   ├── components/          one Astro component per section/UI piece
│   ├── layouts/Layout.astro SEO meta, global <html> shell
│   ├── styles/global.css    Tailwind entry + color tokens (single light theme)
│   ├── data.ts              shared content: contact, founder, services, stages
│   └── pages/
│       ├── index.astro         home
│       ├── services|approach|about|contact.astro
│       ├── 404.astro           not-found page
│       ├── robots.txt.ts       robots.txt, generated with the live sitemap URL
│       └── api/contact.ts      POST endpoint that sends the contact form via Resend
├── astro.config.mjs         site URL, adapter (Vercel on Vercel, Node elsewhere)
└── vercel.json              security and caching headers
```

## Local Development

```sh
bun install
cp .env.example .env   # then fill in the Resend values, see below
bun dev          # starts the dev server at localhost:4321
```

| Command         | Action                                    |
| :--------------- | :----------------------------------------- |
| `bun install`     | Install dependencies                       |
| `bun dev`         | Start local dev server                     |
| `bun run build`   | Build the site to `./dist/`                |
| `bun preview`     | Preview the production build locally       |
| `bunx astro check`| Type-check `.astro` files                  |

## Contact form (Resend)

The `/contact` page's form posts to `/api/contact`, which sends the message
through the [Resend](https://resend.com) transactional email API (see
`.env.example`):

- `RESEND_API_KEY` — from the Resend dashboard. Never commit this. This is
  the only required variable.
- `RESEND_FROM_EMAIL` — optional. Defaults to Resend's shared test sender
  `onboarding@resend.dev`, which only delivers to the Resend account owner's
  own email — fine for now since Plumbline has no domain yet. Once a domain
  is registered and verified in Resend, set this to an address on it.
- `RESEND_TO_EMAIL` — optional. Defaults to
  `plumbline.software@gmail.com`.

Without `RESEND_API_KEY` set, the form fails gracefully with an inline
"Contact form is not configured yet" message instead of throwing.

Because this one route needs to call an external API with a secret key, it
renders on demand (`export const prerender = false`); every other page builds
fully static. On Vercel the build uses `@astrojs/vercel` (the route becomes a
serverless function); anywhere else it falls back to `@astrojs/node`.

## Deploying to Vercel

1. Push this repo to GitHub, then in Vercel choose **Add New → Project** and
   import it. Vercel detects Astro; keep the defaults.
2. **Settings → Environment Variables**: add `RESEND_API_KEY` (and
   `RESEND_TO_EMAIL` if it isn't the default). Redeploy after adding variables.
3. **Settings → General → Node.js Version**: 22.x or newer (Astro 7 requires it).
4. **Analytics → Enable** to turn on Vercel Web Analytics (free on Hobby,
   cookieless, so no consent banner). The tracking script only loads on Vercel builds.

The site address is the project's default `*.vercel.app` URL. Canonical tags,
the sitemap, `robots.txt` and the social-preview image all pick it up from
Vercel automatically (`VERCEL_PROJECT_PRODUCTION_URL`). To use a custom domain
later, add it in Vercel and set `SITE_URL=https://yourdomain` so those switch over.

## Search engines

**Google Search Console** (free, shows searches, clicks and indexing problems):

1. Go to <https://search.google.com/search-console> and choose **Add property → URL prefix**,
   entering the full `https://<project>.vercel.app` address. (A `.vercel.app` address can't use
   the "Domain" property type, because that needs DNS access.)
2. Pick the **HTML tag** method and copy only the `content="..."` value.
3. Add it in Vercel as `PUBLIC_GOOGLE_SITE_VERIFICATION`, redeploy, then click **Verify**.
4. **Sitemaps** → submit `sitemap-index.xml`.
5. **URL inspection** → paste the homepage → **Request indexing**.

**Bing Webmaster Tools** (also feeds DuckDuckGo and Yahoo): at
<https://www.bing.com/webmasters>, choose **Import from Google Search Console**. It
reuses the verification above, so no code change is needed. To verify separately,
use the meta-tag method with `PUBLIC_BING_SITE_VERIFICATION`.

**Google Business Profile** (local "software developer Vancouver" searches): create
one at <https://business.google.com> as a service-area business (Vancouver, no public
address) and link the site. This is done in Google's UI, not in code.

**Check social previews** after deploying: LinkedIn Post Inspector
(<https://www.linkedin.com/post-inspector/>) re-fetches the `og.png` card.

## Notes

- No database, CMS, or general backend — content lives directly in the
  `.astro` components; the only server code is the contact-form route.
- `src/data.ts` holds the content shared across pages (contact details, founder,
  services, the four stages). Edit it there, not in components.
- Design system: `DESIGN.md`. Product context for design work: `PRODUCT.md`.
