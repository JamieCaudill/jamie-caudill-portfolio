# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

A single-page portfolio site (Create React App / `react-scripts` v5), styled with SASS and animated with GSAP ScrollTrigger. No backend.

**Pivoted from software engineering to content creation.** This was originally a software-engineering portfolio; the owner left that career for content creation (outdoors/adventure/travel niche) and the site was rebuilt from a stripped-down hero outward, one section at a time. The original About/Projects/Contact/Footer sections (and their data files, and the old `Navbar`) were deleted rather than repurposed — don't resurrect that content, copy, or patterns (e.g. don't re-add a `Navbar` or `react-router-dom`/`react-scroll`) unless asked.

## Commands

- `npm start` — run the dev server (CRA, hot reload)
- `npm run build` — production build to `build/`
- `npm test` — run tests via `react-scripts test` (Jest + React Testing Library, watch mode by default)
- `npm test -- --watchAll=false` — run once, non-interactively (e.g. in CI)
- `npm test -- -t "<name>"` — run a single test by name
- `npm run eject` — one-way eject from CRA (avoid unless explicitly requested)

There is currently only one test file, `src/App.test.js`.

## Architecture

**No Navbar — the page is one straight scroll.** `App.js` renders, in order: `Intro` (hero) → `About` → `Portfolio` → `Packages` → `Brands` → `Contact`. There's no nav/header component at all (it was tried, then removed); the only in-page navigation is plain anchor links (e.g. `Packages`'s and `Brands`'s CTA buttons link to `href="#contact"`, and `Contact`'s root div carries `id="contact"`) relying on `scroll-behavior: smooth` set globally on `html` in `App.scss`. No routing or scroll library — don't reach for `react-router-dom`/`react-scroll`, they're intentionally not installed (see below).

**Each section, briefly:**
- `Intro` — full-viewport hero. `<video src="/videos/hero-reel.mp4">` (referenced from `public/`, not `require`d, so a missing file 404s gracefully instead of failing the build) with `background.jpg` as its `poster` fallback, dark gradient overlay, centered name/tagline in Cormorant Garamond. The hover-grows name is `transform: scale()` on `.intro__name`, not a font-size change.
- `About` — photo + bio two-column section, text from `src/data/about-me.js`.
- `Portfolio` — case-study cards from `src/data/portfolio-data.js` (each entry's `cover`/`stills` are local images pulled in via `require()` directly inside the data file, not the component — same pattern to follow for future media-heavy data). Rendering is split into `Portfolio.js` (maps the list) and `PortfolioItem.js` (owns the auto-rotating stills carousel's `useState`/`setInterval` — pulled into its own component specifically so each item gets independent carousel state, since hooks can't be called inside `.map()`).
- `Packages` — tiered pricing-style cards from `src/data/packages-data.js`. A tier with `custom: true` (and a `description` string instead of a `deliverables` array) renders as a free-text card rather than a bullet list — see how `Packages.js` branches on that flag before adding a new tier shape.
- `Brands` — brand-partnership pitch; current sponsor logo is `require()`d directly in `Brands.js` (no data file, it's a single static credit) and run through `filter: invert(1)` in CSS since the source logo is a black-on-transparent PNG and the section background is dark.
- `Contact` — email / Instagram / WhatsApp links, cream background, anchor target for the CTAs above.

**Background alternates cream/dark for rhythm:** About and Packages are cream (`#f7f3ec`); Portfolio and Brands are dark (`#1c1a17` / cream text). Keep this alternation in mind when adding or reordering sections.

**Dependency list was pruned to match actual usage.** `react-router-dom` (its `BrowserRouter` wrapper was a no-op — no `<Route>` was ever rendered), `react-scroll`, and `@react-pdf/renderer` were all removed as unused. Don't assume they're installed.

**GSAP ScrollTrigger animation pattern.** Each section calls `gsap.registerPlugin(ScrollTrigger)` and runs its own fade/slide-in animation in a `useLayoutEffect`, keyed to element class names (e.g. `.intro__name`, `.about__image`, `.portfolio__item`, `.packages__card`). There's no shared animation config — new sections should follow the same per-file `registerPlugin` + `useLayoutEffect` pattern.

**SASS: edit sources, not compiled output.** Every component's styles live in its own `.scss` file, with shared tokens in `src/Styles/_variables.scss` (colors, border) and `src/Styles/_mixins.scss` (currently empty) — in practice, newer sections (About/Portfolio/Packages/Brands) each import the Cormorant Garamond Google Font directly rather than using those shared tokens, so check an existing section's `@import url(...)` line before adding another. CRA compiles `.scss` on the fly via the `sass` devDependency; don't commit compiled `.css`/`.css.map` output (a prior stale set was deleted from this repo).

**`src/images/` holds only what's referenced.** Check actual `require(...)` usage before assuming an image is still needed, and delete the old file when a photo/logo gets swapped out rather than leaving it orphaned — this has come up repeatedly (old portraits, an old Outerknown logo variant).
