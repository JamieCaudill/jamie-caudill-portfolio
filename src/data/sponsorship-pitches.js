// Generic, brand-agnostic sponsorship pitch for the Australia road trip —
// lives at /sponsorship as-is, and doubles as the template to fork when
// pitching a specific brand (see ZealOpticsPitch, PatagoniaPitch,
// SunBumPitch, OuterknownPitch, SurfriderPitch for forks).
const sponsorshipPitch = {
  destination: "Australia",
  dates: "December 2026",
  storyAngle: "A van trip from Brisbane down the coast — surfing, camping, and documenting the people and places worth protecting along the way.",
  story: [
    "Fly into Brisbane and work my way down the coast by van, camping and surfing along the way, connecting with the people and places worth protecting, and filming the work it takes to give them a voice. Structured as a documentary series — two to three episodes per country (Australia, New Zealand, and beyond) — tied together into a single throughline by the end.",
  ],
  heroImage: require('../images/IMG_9535.JPG'),
  audience: {
    followers: "22K",
    platform: "Instagram",
    reach: "114K/mo",
  },
  contentFormats: [
    "YouTube — 2 to 3 documentary episodes per country, tied together into one throughline by the end",
    "YouTube Shorts — gear reviews and travel tips",
    "Instagram — short-form content posted the entire trip, in real time",
    "Substack — longer-form written posts and behind-the-scenes from the road",
  ],
}

export default sponsorshipPitch;
