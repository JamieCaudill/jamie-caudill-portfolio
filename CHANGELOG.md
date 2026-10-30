# Changelog

## 2026-10-29

### Added a direct sponsorship pitch page for Outerknown, compressed carousel images, synced the Contact CTA

New route at `/sponsorship/outerknown`, forked from `SurfriderPitch` with the same
styling/structure but reframed around the trip itself (van, Brisbane, Australia then
New Zealand) rather than wilderness conservation, pitching Outerknown's focus on
quality/sustainability over fast fashion. Adds a short autoplaying, looping history
video and a Waves & Wifi badge alongside the Surfrider/Deep Sea logos in Past
Collaborations; CTA links swapped to Email/Instagram/Substack (dropped WhatsApp to
avoid scraper spam).

`src/index.js:8,19`
```jsx
import OuterknownPitch from './components/OuterknownPitch/OuterknownPitch';
...
<Route path="/sponsorship/outerknown" element={<OuterknownPitch />} />
```

`src/components/OuterknownPitch/OuterknownPitch.js:243`
```jsx
<video src="/videos/outerknown-ok.mp4" poster="/videos/outerknown-ok-poster.jpg" controls loop autoPlay muted playsInline />
```

Bug caught after publishing: the pillars/tone-tile carousel images were raw camera
exports (1080-2000px long edge, 9.2MB combined for 12 files) despite rendering in
~160-320px tiles, making the pitch pages slow to load. Downsized to max 960px long
edge at JPEG quality 68 via `sips`, bringing the total to ~1.0MB (roughly 9x smaller)
with no visible quality loss.

Also replaced the WhatsApp link with Substack in the main site's Contact section
(`src/components/Contact/Contact.js:40`), matching a swap already made on `main`, to
keep this branch in sync.

```jsx
<a className="contact__link" href="https://substack.com/@jamcaudill" target="_blank" rel="noreferrer">Substack</a>
```

### Added a direct sponsorship pitch page for Surfrider Foundation

New route at `/sponsorship/surfrider-foundation`, forked from the generic
`SponsorshipPitch` template into its own `SurfriderPitch` component/stylesheet/data
file so copy, palette, and section order could diverge freely without touching the
other pitch page.

`src/index.js:7,17`
```jsx
import SurfriderPitch from './components/SurfriderPitch/SurfriderPitch';
...
<Route path="/sponsorship/surfrider-foundation" element={<SurfriderPitch />} />
```

The mission copy was reframed from a single feature-length documentary into an
episodic format — one nonprofit per episode, tied together by the end — with the
same format continuing into a New Zealand leg right after Australia.

`src/data/surfrider-pitch.js:8`
```js
"... Rather than one feature-length film, I'm structuring it as a series — three to
four episodes, each centered on a different nonprofit — and tying them together into
a single throughline by the end. Told through the lens of surfing and waterpeople.",
```

The "Our History" section's past-collaboration case studies can now show either a
single static cover image or an auto-rotating Swiper of photos — used for the new
Outdoor Alliance × Surfrider Ocean Beach photoshoot (7 photos, no manual arrows, just
autoplay) alongside the existing Paddle Out for #DefendTheDeep card.

`src/components/SurfriderPitch/SurfriderPitch.js:285-297`
```jsx
{collab.photos ? (
  <Swiper
    className="surfrider-pitch__case-study-image surfrider-pitch__case-study-swiper"
    modules={[Autoplay]}
    loop={true}
    autoplay={{ delay: 2200, disableOnInteraction: false, pauseOnMouseEnter: true }}
  >
    {collab.photos.map((photo, index) => (
      <SwiperSlide key={index}>
        <img src={photo} alt={collab.title} />
      </SwiperSlide>
    ))}
  </Swiper>
) : (
  <img className="surfrider-pitch__case-study-image" src={collab.cover} alt={collab.title} />
)}
```

Also dropped the "Proof of Work" content-numbers section and the Letter of
Invitation/visa ask (tourist visa for now, so no longer the thing to lead with),
reworked the sponsorship asks into Gear & Product / Financial Support / Contacts
(introductions to local wilderness defenders) under a new "The Ask" heading, linked
the Maroon Belles mention to its source article, and removed the "Get in touch if you
would like to collaborate!" line from the shared About Me bio (`src/data/about-me.js`)
used across all three pitch pages.

Bug caught while reviewing the tone-tile carousel: each tile had a `box-shadow` the
pillar tiles didn't, and it bled through the Swiper's clip boundary from the
off-screen looped slide, showing up as a dark smear on the left edge against the
section's white background.

`src/components/SurfriderPitch/SurfriderPitch.scss:298-302`
```scss
.surfrider-pitch__tone-tile {
  position: relative;
  aspect-ratio: 3 / 4;
  overflow: hidden;
  border-radius: 4px;
}
```

A few of these polish passes (trimmed ask copy, "Collaborations" wording, a Swiper
gutter-padding fix so looped slides don't peek into the nav-arrow gutter) were carried
back to the generic `SponsorshipPitch` page as well.

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
