# Konstantinos Mavrikas — Portfolio

Personal portfolio and CV for a senior front-end engineer. A single-page site with deep-dive
case-study pages for selected projects.

**Live:** [kmavr.dev](https://kmavr.dev)

## Stack

- **Next.js 16** (App Router) · **React 19** · **TypeScript** (strict)
- **Tailwind CSS v4** — `@theme` token layer, no config file
- **next/font** — Space Grotesk (display) + Geist + Geist Mono
- Deployed on **Vercel**

## Design

Modern-minimal: warm-paper background, warm-grey ink, and a single deep-red accent
(`oklch(42% 0.15 27)`) reserved for CTAs, link-hover, focus rings, and active states. One quiet
motion primitive (card hover-lift); `prefers-reduced-motion` collapses all spatial motion.

All colour, type, spacing, and easing live as tokens in [`app/globals.css`](app/globals.css)
(`@theme`). Components never inline a colour — every class references a token by name, kept in a
`const styles = {}` object at the bottom of each file and composed with `cn()`
([clsx](https://github.com/lukeed/clsx) + [tailwind-merge](https://github.com/dcastil/tailwind-merge)).

## Architecture

Content is **config-driven** — the components are presentational, the data lives in
[`app/config/`](app/config):

| File                | Drives                                              |
| ------------------- | --------------------------------------------------- |
| `projects.ts`       | the Projects grid                                   |
| `projectDetails.ts` | the per-project case-study pages                    |
| `experience.ts`     | the experience timeline                             |
| `skills.ts`         | the skills groups                                   |
| `contact.ts`        | email + social links                                |
| `site.ts`           | site URL + metadata strings (single source for SEO) |

- **Folder-per-component** under [`app/components/`](app/components).
- **Project pages** are a single dynamic route, `app/projects/[slug]`, statically generated via
  `generateStaticParams` with per-page `generateMetadata`.
- **SEO** is fully generated: `opengraph-image.tsx` + `icon.tsx` (`next/og` `ImageResponse`),
  `sitemap.ts`, and `robots.ts`.

## Getting started

Requires **Node 24**.

```bash
npm install
npm run dev      # http://localhost:3000
```

## Scripts

| Script                      | Description                                 |
| --------------------------- | ------------------------------------------- |
| `npm run dev`               | Dev server (Turbopack)                      |
| `npm run build`             | Production build                            |
| `npm run start`             | Serve the production build                  |
| `npm run lint`              | ESLint                                      |
| `npm run typecheck`         | `tsc --noEmit`                              |
| `npm run format`            | Prettier write                              |
| `npm run deps:unmaintained` | Report unmaintained dependencies (advisory) |
| `npm run deps:debt`         | Check dependency-override debt              |

## Quality

ESLint (Next core-web-vitals + TypeScript, plus `import`/`prettier`/component rules) and Prettier
enforce style. The repo also **dogfoods its author's own tools**:

- [`eslint-plugin-tailwind-design-tokens`](https://www.npmjs.com/package/eslint-plugin-tailwind-design-tokens)
  — fails lint on hardcoded colours or default Tailwind palette classes, enforcing the design tokens.
- [`debtctl`](https://www.npmjs.com/package/debtctl) — governs dependency overrides as documented
  debt; runs in the pre-commit hook and CI.
- [`unmaintained`](https://www.npmjs.com/package/unmaintained) — advisory report on abandoned
  dependencies; runs in CI.

A **Husky** + **lint-staged** pre-commit hook runs ESLint, Prettier, and `debtctl check`.
[CI](.github/workflows/ci.yml) runs lint, typecheck, build, `debtctl check --strict`, and the
`unmaintained` report on every push and pull request.

## Deployment

Auto-deployed on **Vercel** on every push to `main` (PRs get preview URLs). The production domain
is set once in [`app/config/site.ts`](app/config/site.ts) (`SITE_URL`), which the sitemap, robots,
and Open Graph tags all derive from.

## Licence

No open-source licence. The code is public for reference; the content — copy, CV, personal and
brand identity — is © Konstantinos Mavrikas, all rights reserved. Please don't redeploy this as
your own site.
