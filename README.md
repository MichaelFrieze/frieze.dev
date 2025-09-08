# Frieze.DEV

My dev blog built with Astro, React, Tailwind, and shadcn/ui.

## Tech stack

- Astro 5 with MDX and React Islands
- Tailwind CSS v4 (via @tailwindcss/vite)
- astro-expressive-code with line numbers and collapsible sections
- Remark + Rehype plugins: math/KaTeX, emoji, pretty-code, external-links, heading ids
- TypeScript

## Local development

Requirements:

- Node 20+
- pnpm (recommended)

Install dependencies:

```bash
pnpm install
```

Start the dev server (hosted on all interfaces, port 1234):

```bash
pnpm dev
```

Other scripts:

- `pnpm build` – Type-checks (`astro check`) then builds the site
- `pnpm preview` – Serves the production build locally
- `pnpm prettier` – Formats `ts`, `tsx`, `css`, and `astro` files

## Project structure

- `src/pages` – Route files for pages (`/`, `/blog`, `/projects`, etc.)
- `src/components` – UI components (Astro + React islands)
- `src/layouts` – Base layouts
- `src/styles` – Global styles and typography
- `src/lib` – Utilities
- `src/content` – Content collections defined by `src/content.config.ts`
  - `blog` – Blog posts (`.md`/`.mdx`)
  - `authors` – Author profiles
  - `projects` – Project entries
- `public` – Static assets (favicons, fonts, manifest, images)

## Authoring content

Content types and schema are defined in `src/content.config.ts` using Astro Content Collections. Files can be Markdown or MDX.

### Blog posts

Location: `src/content/blog/**/index.mdx`

Frontmatter schema:

```yaml
---
title: string
description: string
date: YYYY-MM-DD | date
order: number (optional)
image: path/to/image (optional)
tags: [string] (optional)
authors: [string] (optional)
draft: boolean (optional)
---
```

Tips:

- Use MDX for interactive islands/components
- Code blocks are auto-styled by Expressive Code; bash/terminal blocks hide line numbers
- Math via Remark Math + KaTeX is supported

### Projects

Location: `src/content/projects/*.md`

Schema fields include: `name`, `description`, `tags[]`, `image`, `link`, `startDate?`, `endDate?`.

## Site metadata & SEO

Edit site-wide metadata in `src/consts.ts` (`SITE`, `NAV_LINKS`, `SOCIAL_LINKS`). The head includes RSS, sitemap, manifest, and favicons via `src/components/Head.astro` and `Favicons.astro`.

## Styling

- Tailwind CSS v4 is wired via Vite plugin (`@tailwindcss/vite`)
- Global variables, tokens, and typography live in `src/styles`

## Deployment

The built site is a static output by default. Any static host works (e.g., GitHub Pages, Netlify, Vercel). Typical steps:

```bash
pnpm build
pnpm preview
```

Set the site URL in `astro.config.ts` (`site: 'https://frieze.dev'`) for correct RSS/sitemap URLs.

## Search

Client-side search uses Fuse.js over a generated index. See `src/components/SearchBar.tsx` and related components for implementation details.

## Code fences & math

- Expressive Code themes: GitHub Light/Dark; line numbers enabled by default
- Collapsible sections supported inside code blocks
- KaTeX stylesheet is injected via `rehype-document`

## Favicons & PWA basics

Favicons and web manifest are in `public`. The `<Head>` component preloads variable fonts and includes manifest, RSS, and sitemap. PWA is “basic” (standalone display, icons); there is no service worker.

## Credits

This Astro site was started using the [`astro-erudite`](https://github.com/jktrn/astro-erudite) template by [@jktrn](https://github.com/jktrn). Thank you for the excellent foundation.
