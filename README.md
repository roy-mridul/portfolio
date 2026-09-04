# mridulroy.dev

Personal engineering site for Mridul Roy — a static SPA built with Vue 3, TypeScript and Vite, deployed to Cloudflare (Workers static assets).

## Stack

- Vue 3 (Composition API, `<script setup>`)
- TypeScript
- Vue Router 4 (client-side routing, history mode)
- Vite
- Hand-written CSS with design tokens — no CSS framework
- Self-hosted variable fonts ([`@fontsource-variable/inter`](https://fontsource.org), [`@fontsource/space-grotesk`](https://fontsource.org)) — no runtime font requests

No UI kit, state management library, or animation library. The site is content-driven and small enough not to need them.

## Structure

```
src/
  content/       # typed content — edit these to add a project, experiment, role, etc.
  composables/    # useReducedMotion, usePageMeta
  components/
    layout/       # header, footer
    common/       # SectionHeading, PageHeader, TagPill, EngagementBadge, RevealOnScroll
    home/         # one component per homepage section
    work/         # ProjectRow
    experiments/  # ExperimentCard
  views/          # one per route
  router/
  styles/         # tokens.css (design tokens), base.css (reset + utilities)
```

Adding a new project or experiment is a data change, not a component change — see `src/content/types.ts` for the shapes and `src/content/projects.ts` / `src/content/experiments.ts` for where to add entries.

## Development

```bash
pnpm install
pnpm dev       # start the dev server
pnpm build      # type-check (vue-tsc) + production build to dist/
pnpm preview    # preview the production build locally
```

## Deployment (Cloudflare)

This project is connected through Cloudflare's unified Workers/Pages flow, which deploys it as a **Worker serving static assets** rather than classic Pages — so the build produces `dist/`, then `wrangler deploy` uploads it per `wrangler.jsonc`.

- Package manager: pnpm — Cloudflare auto-detects it from `pnpm-lock.yaml`.
- Build command: `pnpm run build`
- Deploy command: `npx wrangler deploy` (this is what the Cloudflare project's "deploy command" setting should be — it's the default it picked when the repo was connected)
- `wrangler.jsonc` points `assets.directory` at `./dist` and sets `not_found_handling: single-page-application`, which handles SPA history-mode routing. There is deliberately no `public/_redirects` file — that's the classic-Pages fallback mechanism, and Cloudflare's Workers-assets engine rejects it alongside `not_found_handling` as a conflicting/looping rule.
- `wrangler` is a committed devDependency (not installed ad-hoc at deploy time) specifically so Cloudflare's build doesn't try to auto-scaffold `wrangler.jsonc` and fetch `wrangler`/`workerd`/`esbuild` on the fly during the deploy step — that ad-hoc install fails non-interactively because pnpm's supply-chain policy blocks their postinstall scripts by default. `pnpm-workspace.yaml`'s `allowBuilds` explicitly allows `esbuild` and `workerd` to run theirs.
- Node version: 22 (see `.node-version` / `engines.node` in `package.json`) — Vite 8 requires Node ^20.19 or >=22.12; if the build image picks an older default, set `NODE_VERSION` explicitly in the project's environment variables.
- `public/robots.txt` and `public/sitemap.xml` assume the production URL `https://mridulroy.dev`.

To sanity-check the deploy config locally without touching production: `npx wrangler deploy --dry-run` (reads `dist/`, validates `wrangler.jsonc`, uploads nothing).

## Known TODOs

Content that was deliberately left as a placeholder rather than invented — see `src/content/*.ts` for the exact locations:

- **`src/content/profile.ts`** — `social.email` (currently `undefined`, so that link doesn't render).
- **`src/content/projects.ts`** — two real entries (App & Service Manager service ownership, and the academic thesis); a production case study for the *current* Software Engineer role needs a concrete system/problem to write about before it can be added honestly. The `prototype`/`research` groups on `/work` are intentionally empty and point to `/experiments` instead — see `WorkView.vue`.
- **"Zeus"** — mentioned as relevant to the offline-first research but not described concretely enough (what it is, public/private, the actual problem) to add without either fabricating detail or duplicating the existing offline-first experiment entry. Needs a real description before it can go anywhere on the site.
- **`index.html`** — `og:image` is commented out; add a 1200×630 social preview image at `public/og.png` and uncomment the tag.
