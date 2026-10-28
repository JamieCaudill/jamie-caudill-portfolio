# Changelog

## 2026-10-28

### Switched sponsorship pitch carousels to Swiper, fixed a mobile overflow bug, filled in real content

Replaced the hand-rolled `overflow-x: auto` scroll track for the pillars section with
the `swiper` library (added as a dependency), reused the same pattern for the new
Color Palette & Tone section's tone tiles, and added manual prev/next arrows to both
on top of the existing autoplay.

`src/components/SponsorshipPitch/SponsorshipPitch.js:149-169`
```jsx
<Swiper
  className="pitch__pillars"
  modules={[Autoplay, Navigation]}
  spaceBetween={24}
  slidesPerView={4}
  loop={true}
  navigation={true}
  autoplay={{ delay: 2800, disableOnInteraction: false, pauseOnMouseEnter: true }}
  breakpoints={{
    0: { slidesPerView: 2 },
    640: { slidesPerView: 3 },
    900: { slidesPerView: 4 },
  }}
>
  {pillars.map((pillar) => (
    <SwiperSlide className="pitch__pillar" key={pillar.label}>
      <img src={pillar.image} alt={pillar.label} />
      <span className="pitch__pillar-label">{pillar.label}</span>
    </SwiperSlide>
  ))}
</Swiper>
```

The nav arrows are bare chevrons (no circle/background) positioned outside the
carousel images rather than overlapping them, colored per section for contrast —
cream on the coral pillars section, coral on the cream tone-tiles section.

`src/components/SponsorshipPitch/SponsorshipPitch.scss:176-208`
```scss
.pitch__pillars,
.pitch__tone-tiles {
  max-width: 1100px;
  width: 100%;
  padding: 0 2.75rem;
  box-sizing: border-box;

  .swiper-button-next,
  .swiper-button-prev {
    width: 24px;
    height: 24px;
    margin-top: -12px;
    background: none;
    transition: opacity .2s ease-in-out;

    &::after {
      font-size: 1.2rem;
      font-weight: 700;
    }

    &.swiper-button-disabled {
      opacity: .3;
    }
  }

  .swiper-button-prev {
    left: 0;
  }

  .swiper-button-next {
    right: 0;
  }
}
```

Bug caught while testing mobile widths: `html`'s sitewide `display: flex;
justify-content: center;` pattern (`src/App.scss`) means a child's width is
shrink-to-fit rather than pinned to the viewport. That's normally invisible, but the
pillars carousel's real content is wider than the screen, and its unclamped width
bubbled all the way up through `.pitch__about` to `.pitch`, blowing the whole page out
to ~748px on a 390px phone (confirmed directly via `body.scrollWidth`). Fixed by
anchoring `.pitch` to the real viewport instead of a percentage of a shrink-to-fit
ancestor.

`src/components/SponsorshipPitch/SponsorshipPitch.scss:19-22`
```scss
.pitch {
  width: 100vw;
  max-width: 100vw;
}
```

Also filled in real audience numbers and an Instagram insights screenshot (replacing
the `[FOLLOWER COUNT]` / `[REACH]` placeholders and the "drop in a screenshot" note
from the previous entry), added an adventure-section story paragraph, and swapped in
final trip photos for the About/pillars/tone sections.

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
