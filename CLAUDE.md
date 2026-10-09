# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

A single-page portfolio site (Create React App / `react-scripts` v5), styled with SASS and animated with GSAP ScrollTrigger. No backend.

**Mid-rebuild.** This was originally a software-engineering portfolio; the owner left that career for content creation and the site is being rebuilt from a stripped-down hero outward, one section at a time. The old About/Projects/Contact/Footer sections (and their data files) were deleted rather than repurposed — don't resurrect that content or its patterns when adding new sections unless asked.

## Commands

- `npm start` — run the dev server (CRA, hot reload)
- `npm run build` — production build to `build/`
- `npm test` — run tests via `react-scripts test` (Jest + React Testing Library, watch mode by default)
- `npm test -- --watchAll=false` — run once, non-interactively (e.g. in CI)
- `npm test -- -t "<name>"` — run a single test by name
- `npm run eject` — one-way eject from CRA (avoid unless explicitly requested)

There is currently only one test file, `src/App.test.js`.

## Architecture

**Current page is minimal by design.** `App.js` renders `Navbar`, `Intro` (the hero), and `About`. `Navbar` is logo + a "Resume" button (`window.open`s the static PDF at `public/Jamie_Caudill_Resume.pdf`) — no nav links, since there's no multi-section nav yet. `Intro` is a full-viewport hero: a `<video src="/videos/hero-reel.mp4">` (referenced from `public/`, not `require`d, so a missing file 404s gracefully instead of failing the build) with `background.jpg` as its `poster` fallback, a dark gradient overlay, and centered name/tagline text in Cormorant Garamond (the hover-grows-on-hover name is `transform: scale()` on `.intro__name`, not a font-size change). `About` is a photo + bio two-column section pulling text from `src/data/about-me.js`. Each component lives in its own `src/components/<Name>/` folder with a paired `.js`/`.scss` file, no props from `App`.

**Dependency list was pruned to match actual usage.** `react-router-dom` (its `BrowserRouter` wrapper was a no-op — no `<Route>` was ever rendered), `react-scroll`, and `@react-pdf/renderer` were all removed as unused. If same-page scroll nav or routing comes back as new sections are added, re-add the relevant package rather than assuming it's still installed.

**GSAP ScrollTrigger animation pattern.** Each section calls `gsap.registerPlugin(ScrollTrigger)` and runs its own fade/slide-in animation in a `useLayoutEffect`, keyed to element class names (e.g. `.intro__name`, `.about__image`). There's no shared animation config — new sections should follow the same per-file `registerPlugin` + `useLayoutEffect` pattern.

**SASS: edit sources, not compiled output.** Every component's styles live in its own `.scss` file, with shared tokens in `src/Styles/_variables.scss` (colors, border) and `src/Styles/_mixins.scss` (currently empty). CRA compiles `.scss` on the fly via the `sass` devDependency. (The repo used to also have stale, manually-compiled `.css`/`.css.map` duplicates checked into git alongside the `.scss` sources and under `src/sass/` — those have been deleted; don't reintroduce committed compiled output.)

**`src/images/` holds only what's referenced.** Leftover assets from the old software-engineering portfolio (tech-stack icons, old project screenshots, old headshots) were deleted — check actual `require(...)` usage before assuming an image is still needed, and don't leave orphaned image files behind when a photo gets swapped out.
