## Development

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)

## UI components

Build UI with shadcn/ui (`npx shadcn@latest add <component>`). Components live in `src/components/ui/` and are restyled to the Plumbline look: square corners, ink/paper tokens, 48px controls, Public Sans text and Big Shoulders headings. See `DESIGN.md`.

- After adding a component, fix its import to `import { cn } from "@/lib/utils"` (the CLI writes `"cn"`), then restyle it to match the existing `button.tsx` / `input.tsx`.
- Render shadcn components statically (no `client:*` directive) so no React reaches the browser. For `<a>` links styled as buttons, use `buttonVariants()` from `@/components/ui/button`.
- Interactive components that would need hydration (Accordion, Sheet, Dialog, Select) need owner approval first. The FAQ uses native `<details>` and the mobile menu uses native `<dialog>`, both with near-zero JavaScript.

## Astro whitespace gotcha

When a line of text in a template ends and the next line starts with an element or expression (`<a …>`, `{…}`), Astro drops the space between them ("or<a>PageSpeed" renders as "orPageSpeed"). Put `{' '}` at the end of the text line, or keep the text and the element on one line.

## Formatting

Prettier formats the code (tabs, single quotes, 120 columns, Tailwind classes sorted). Run `bun run format` after editing and `bun run format:check` before committing. Markdown documents and `.claude/` / `.impeccable/` are excluded (see `.prettierignore`).
