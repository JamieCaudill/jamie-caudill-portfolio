# Changelog

## 2026-10-26

### Added a brand sponsorship pitch page at /sponsorship/:slug

Built on branch `sponsorship-pitch-page` (not merged to `main`, so it won't hit
production). Standalone page, unlinked from the main site, for sending brands a
tailored pitch per upcoming adventure. Reintroduced `react-router-dom` (previously
removed as unused) to give it a real, directly-linkable route; reuses real bio,
portfolio metrics, and brand-partner content from existing data files, with
bracketed placeholders (`[DESTINATION]`, `[DATES]`, `[FOLLOWER COUNT]`, etc.) for
trip specifics and audience numbers that still need to be filled in before sending.

`src/index.js:1-19`
```js
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SponsorshipPitch from './components/SponsorshipPitch/SponsorshipPitch';

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/sponsorship/:slug" element={<SponsorshipPitch />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
```

`src/data/sponsorship-pitches.js:1`
```js
const sponsorshipPitches = [
  {
    slug: "australia",
    destination: "[DESTINATION]",
    dates: "[DATES]",
    storyAngle: "[STORY ANGLE]",
    heroImage: require('../images/DSC04162.jpg'),
    audience: {
      followers: "[FOLLOWER COUNT]",
      platform: "[PRIMARY PLATFORM]",
      reach: "[REACH]",
    },
    contentFormats: [ /* ... */ ],
  },
]
```

New page component + stylesheet: `src/components/SponsorshipPitch/SponsorshipPitch.js`
(256 lines) and `SponsorshipPitch.scss` (572 lines) — 8 sections (hero, bio/content
pillars, audience, the adventure, proof-of-work metrics, deliverables, partnership/ask,
closing CTA), styled with the site's existing Cormorant Garamond + cream/dark palette.

Bug caught during review: the closing CTA section's GSAP scroll-triggered fade-in
never fired because the section was shorter than the viewport's trigger threshold —
fixed by matching `Contact.scss`'s `min-height: 60vh` pattern.

`src/components/SponsorshipPitch/SponsorshipPitch.scss:474-477`
```scss
.pitch__cta {
  min-height: 60vh;
  justify-content: center;
}
```

## 2026-10-24

### Simplified Packages to a single Custom tier

Removed the "Story" and "Signature" tiers, leaving only the custom tier, and added
a layout modifier so the lone card doesn't stretch to the old 3-card width.

`src/data/packages-data.js:1`
```js
const packagesData = [
  {
    id: "1",
    name: "Custom",
    nights: "Flexible",
    custom: true,
    description: "Bigger stay, more content, or something specific in mind? Let's build a package around your space and goals.",
  },
]
```

`src/components/Packages/Packages.js:38`
```jsx
<div className={`packages__cards${packagesData.length === 1 ? " is-single" : ""}`}>
```

`src/components/Packages/Packages.scss:45-47`
```scss
.packages__cards.is-single {
  max-width: 420px;
}
```
