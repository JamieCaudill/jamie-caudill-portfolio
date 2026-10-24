# Changelog

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
