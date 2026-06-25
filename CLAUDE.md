# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev        # Start dev server on :3000
npm run build      # Production build
npm run generate   # Static site generation
npm run preview    # Preview production build
```

Dev server is configured via `.claude/launch.json` — use `preview_start` with name `sjeremic-dev` instead of running `npm run dev` manually in preview sessions.

## Architecture

Nuxt 4 personal portfolio site for Stefan Jeremic. Uses the `app/` directory structure (Nuxt 4 convention — all source lives under `app/`, not the root).

**Stack:** Nuxt 4 · Vue 3 · Tailwind CSS v4 (via `@tailwindcss/vite`) · `@nuxtjs/i18n` v10 · `@nuxt/icon` (Lucide) · `@nuxt/content`

**Pages:** `index` · `about` · `experience` · `projects` · `blog/index` · `blog/[slug]` · `contact`

**Components:** `TheNav` · `TheFooter` · `JobCard` (used in `experience.vue` for each job entry)

## i18n

Two locales: `en` (default, no URL prefix) and `sr` (Serbian Latin, prefix `/sr`). Translation files live in `i18n/locales/en.json` and `i18n/locales/sr.json`.

**Critical rules:**

- `lazy` is set to `false` — do not enable it. Lazy loading caused SSR/client hydration mismatches (`node.parentNode` errors) with this version of `@nuxtjs/i18n`.
- For **array values** in translations (jobs, projects, awards), use `tm()` + `rt()` from `useI18n()`. Always pre-process arrays in `computed()` inside `setup()` — never call `rt()` directly in the template on array items. Reason: `rt(null)` throws when array items have nullable fields (e.g. `client: null` in job entries).
- The `@` character in JSON values (e.g. email placeholders) is parsed as a linked message reference by vue-i18n. Escape it with `{'@'}` syntax or use a unicode workaround.
- All internal links must use `localePath()` to stay within the current locale. Import with `const localePath = useLocalePath()`.
- Language switcher is in `TheNav.vue` — calls `setLocale()` from `useI18n()`.

**Pattern for array translations:**

```ts
const jobs = computed(() =>
  (tm('experience.jobs') as any[]).map((job: any) => ({
    title: rt(job.title),
    client: job.client ? rt(job.client) : null,  // null check required
    bullets: (job.bullets as any[]).map((b: any) => rt(b)),
  }))
)
```

## Tailwind

Tailwind v4 is configured via the Vite plugin (`@tailwindcss/vite`), not a `tailwind.config.js`. CSS theme tokens are in `app/assets/css/main.css` using `@theme {}`.

## Content

`@nuxt/content` is installed but not yet actively used. Blog is a placeholder — no articles exist yet. When adding blog posts, use Markdown files in `content/blog/`.

## Photos & Static Assets

- Profile photo: `public/me.jpg` — used in `pages/index.vue` and `pages/about.vue`
- CV download: `public/cv-stefan-jeremic.pdf` — linked from nav, hero, about sidebar, contact page (file not yet present)
