# Product

<!-- impeccable:product-schema 1 -->

> Written 2026-10-12 from PRODUCT_SPEC.md and confirmed conversation with the owner. The init interview round was declined; facts marked *(inferred)* come from the spec and should be confirmed.

## Platform

web

## Users

Organizations looking for an outside engineering partner to build or fix web software: web applications, internal tools, APIs, cloud infrastructure, or a technical second opinion. Secondary audiences named in the spec: enterprise and public-sector stakeholders evaluating an external partner on security, accessibility, documentation and delivery discipline, plus future contractors and developers. *(Primary-audience weighting inferred from spec §3.)*

Their questions, in order: what does Northline do, can it do what I need, how does it work, can I trust it, how do I get in touch.

## Product Purpose

Northline Technologies is a Vancouver, BC software development and technology consulting company. The website is its marketing site, and it succeeds when a qualified visitor sends an inquiry through `/contact`.

## Positioning

Founder-led. Clients work directly with James Yoo, the engineer who scopes and writes the code, with no account managers or handoffs. The work is built to be maintained: tested, typed, documented, and handed over with documentation, not just a repository. Northline runs the same four-stage process (Understand, Plan, Build, Deliver) on every engagement.

## Operating Context

Visitors arrive comparing consultancies, often on a phone first and a desktop later. They usually check the founder on LinkedIn before writing. An inquiry goes to an inbox via the Resend email API. The owner triages it by service and timeline, and a reply is promised within two business days (the owner still has to confirm this commitment).

## Capabilities and Constraints

- Astro + TypeScript + Tailwind CSS v4. Every route is static except `POST /api/contact`, which runs on Node through `@astrojs/node`.
- Minimal client JavaScript. No CMS, accounts, analytics, or booking.
- A single light theme.
- Services: Full-Stack Development, Frontend Engineering, API & Backend Development, Cloud & Infrastructure, Technology Consulting.
- Content shared across pages lives in `src/data.ts` (contact, founder, services, timelines). Full requirements are in `PRODUCT_SPEC.md`.

## Brand Commitments

- Name: Northline Technologies.
- The north-line mark: a single vertical line pointing north.
- Hero headline: "Software that still makes sense in two years."
- Voice: direct, plain, confident, understated. "We" for the company, "I" in the founder section.

## Evidence on Hand

- No Northline client projects, testimonials, case studies, certifications or metrics exist. Never fabricate them.
- Founder experience is real and may be shown as personal experience only: 4+ years as a Software Engineer at Samsung Canada, working on samsungknox.com, partner.samsungknox.com, and an internal gateway service.
- No Samsung logos and no implied affiliation.
- No headshot. LinkedIn: https://www.linkedin.com/jamesyoo (URL unconfirmed). No GitHub yet.

## Product Principles

1. Credibility over hype: every claim is true and checkable.
2. Clarity over complexity: a visitor understands the offer within seconds.
3. The site is the proof: its own engineering quality demonstrates the work.
4. Direct access: the person you talk to is the person who builds it.

## Accessibility & Inclusion

WCAG-conscious throughout: semantic HTML, a logical heading order, keyboard operation, visible focus, sufficient contrast, `prefers-reduced-motion` respected, and meaning never conveyed by colour alone. Public-sector buyers may require accessibility.
