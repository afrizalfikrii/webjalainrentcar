---
name: JALAN.IN Design System
colors:
  surface: '#fbf8ff'
  surface-dim: '#d5d8f5'
  surface-bright: '#fbf8ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f4f2ff'
  surface-container: '#ececff'
  surface-container-high: '#e5e6ff'
  surface-container-highest: '#dee1fe'
  on-surface: '#161a2f'
  on-surface-variant: '#454655'
  inverse-surface: '#2b2f45'
  inverse-on-surface: '#f0efff'
  outline: '#757687'
  outline-variant: '#c5c5d8'
  surface-tint: '#3a4bdf'
  primary: '#3748dd'
  on-primary: '#ffffff'
  primary-container: '#5364f7'
  on-primary-container: '#fffbff'
  inverse-primary: '#bdc2ff'
  secondary: '#496800'
  on-secondary: '#ffffff'
  secondary-container: '#b9f63e'
  on-secondary-container: '#4e6e00'
  tertiary: '#585c67'
  on-tertiary: '#ffffff'
  tertiary-container: '#707480'
  on-tertiary-container: '#fefcff'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dfe0ff'
  primary-fixed-dim: '#bdc2ff'
  on-primary-fixed: '#000965'
  on-primary-fixed-variant: '#192dc8'
  secondary-fixed: '#b9f63e'
  secondary-fixed-dim: '#9ed81b'
  on-secondary-fixed: '#131f00'
  on-secondary-fixed-variant: '#364e00'
  tertiary-fixed: '#dfe2f0'
  tertiary-fixed-dim: '#c3c6d3'
  on-tertiary-fixed: '#171c25'
  on-tertiary-fixed-variant: '#424752'
  background: '#fbf8ff'
  on-background: '#161a2f'
  surface-variant: '#dee1fe'
typography:
  headline-xl:
    fontFamily: Plus Jakarta Sans
    fontSize: 48px
    fontWeight: '800'
    lineHeight: 56px
    letterSpacing: -0.03em
  headline-xl-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 32px
    fontWeight: '800'
    lineHeight: 40px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 24px
    fontWeight: '700'
    lineHeight: 32px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 24px
    fontWeight: '700'
    lineHeight: 32px
    letterSpacing: -0.015em
  headline-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
    letterSpacing: -0.01em
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-lg:
    fontFamily: DM Sans
    fontSize: 14px
    fontWeight: '700'
    lineHeight: 20px
    letterSpacing: 0.01em
  label-md:
    fontFamily: DM Sans
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.02em
  label-sm:
    fontFamily: DM Sans
    fontSize: 11px
    fontWeight: '500'
    lineHeight: 14px
    letterSpacing: 0.03em
  price-display:
    fontFamily: DM Sans
    fontSize: 22px
    fontWeight: '700'
    lineHeight: 28px
    letterSpacing: -0.02em
rounded:
  sm: 0.5rem
  DEFAULT: 1rem
  md: 1.5rem
  lg: 2rem
  xl: 3rem
  full: 9999px
spacing:
  gutter: 1.25rem
  gutter-desktop: 1.5rem
  margin: 1rem
  margin-tablet: 2rem
  margin-desktop: 3rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
---

## Brand & Style

This design system powers a modern, playful-premium mobility platform designed specifically for Indonesia's next generation of travelers and commuters. The visual direction rejects generic corporate SaaS conventions in favor of a breezy, tropical-urban aesthetic that feels energetic, effortless, and unmistakably welcoming (*ramah, luwes, dan terpercaya*).

### Personality & Emotional Response
- **Fresh & Optimistic:** Clear skies, open toll roads, and frictionless weekend getaways. The UI breathes with expansive whitespace and electric hits of lime.
- **Playful-Premium:** Tactile, pill-shaped interactions and floating 3D-inspired micro-surfaces balanced by pristine typography and rigorous layout alignment.
- **Trustworthy Utility:** Car rental demands operational clarity. Critical pricing, fuel policies, insurance tiers, and vehicle specs remain hyper-legible and unambiguous.

### Aesthetic Foundation
The style mixes soft pill geometry, bento grid modularity, and layered surface translucency. High-contrast deep navy text grounds vibrant soft periwinkle structural elements, while high-voltage lime accents serve strictly as kinetic triggers (primary CTAs, dynamic live-status tags, and spatial map anchors).

## Colors

The color palette is built around airy contrast, using cool tinted surfaces rather than muddy warm tones to reflect modern automotive and tech design.

### Roles & Application
- **Primary (`#5B6CFF` - Periwinkle Blue):** Drives identity, interactive links, selected states, active tab indicators, and brand architecture. Used for structural interaction rather than direct urgency.
- **Accent / Secondary (`#B6F23A` - Fresh Lime Green):** Reserved for high-conversion moments: "Sewa Sekarang" (Book Now) CTAs, interactive map pins, verified vendor tags, and vehicle availability pings. Always paired with `#12162B` text for high-contrast legibility.
- **Tertiary Surface Accents:**
  - Soft Tint Lavender (`#EEF1FF`): Vehicle category pill backgrounds, selected filter tiles, and secondary badge fills.
  - Soft Mint Lime (`#F3FCE0`): Instant promo badges, EV/hybrid indicators, and high-rating banners.
- **Neutrals & Canvas:**
  - Pure White (`#FFFFFF`): Elevated floating cards, input wells, and sheet containers.
  - Cool Grey (`#F5F7FB`): Main app canvas background to allow white cards to lift naturally.
  - Deep Navy (`#12162B`): Primary typography and high-emphasis icons.
  - Slate Grey (`#64748B`): Secondary labels, meta descriptions, and passive metadata.
  - Subtle Border (`#E2E8F0`): Hairline strokes for cards and inputs.

## Typography

The typography system relies on **Plus Jakarta Sans** for expressive, tightly tracked headings and contextual body copy, paired with **DM Sans** for utilitarian micro-labels, technical automotive specifications, and tabular numeric prices.

### Key Rules
- **Headline Tracking:** Headings use tight negative tracking (`-0.01em` to `-0.03em`) to create a cohesive, poster-like graphic impact that matches modern Indonesian mobile app conventions.
- **Pricing & Numbers:** All numeric figures for daily rates (`Rp 450.000 /hari`), odometer counts, and countdown timers must use DM Sans with tabular numerals enabled (`font-variant-numeric: tabular-nums`) to prevent layout shifts.
- **Tone in Type:** Hero messaging employs bold sentence-case treatments (*"Mau jalan ke mana weekend ini?"*) rather than rigid all-caps.

## Layout & Spacing

The layout model pairs a fluid responsive grid with asymmetrical Bento-style modular groupings. Content surfaces rest above the cool grey canvas with deliberate negative space to preserve an uncluttered, high-end travel vibe.

### Grid & Breakpoints
- **Mobile (0 – 639px):** Single-column stack, full-width edge-to-edge cards with `margin: 1rem`, dynamic bottom sheets, and horizontal swipe carousels for car categories.
- **Tablet (640 – 1023px):** 6-column grid with `gutter: 1.25rem` and `margin-tablet: 2rem`. Search panels expand into horizontal filter strips.
- **Desktop (1024px+):** 12-column layout capped at a maximum width of `1280px` with `margin-desktop: 3rem` and `gutter-desktop: 1.5rem`. Bento sections combine 8-column hero vehicle displays with 4-column live trip details.

### Spacing Principles
- Never crowd car photography; vehicle cards require an internal padding of `space-lg` (24px).
- Meta specs (transmission, capacity, fuel) are packaged in tight clusters using `space-xs` and `space-sm` gaps inside nested pill tags.

## Elevation & Depth

Visual hierarchy uses ambient luminescence, layered transparency, and physical surface extrusion rather than traditional heavy dropshadows.

### The Ambient Layer System
- **Layer 0 (Base Canvas):** Solid `#F5F7FB`. Forms the background surface for all page views.
- **Layer 1 (Card Level):** Pure `#FFFFFF` surfaces featuring soft, tinted ambient shadows: `box-shadow: 0 10px 30px -10px rgba(18, 22, 43, 0.05), 0 2px 6px -1px rgba(18, 22, 43, 0.02)`. Borders use ultra-thin `#E2E8F0` at 1px.
- **Layer 2 (Floating Floating Nav & Bottom Bars):** Glassmorphic treatment with `background: rgba(255, 255, 255, 0.82)`, `backdrop-filter: blur(16px) saturate(180%)`, and a border of `rgba(255, 255, 255, 0.6)`.
- **Layer 3 (Modals, Date Pickers, & Filter Drawers):** Elevated sheets using `box-shadow: 0 24px 48px -12px rgba(18, 22, 43, 0.12)`.
- **Playful 3D Micro-Surfaces:** Active badges, category pills, and promo widgets use a 1.5px bottom edge highlight or subtle dual-offset inner drop shadow (`inset 0 1px 1px rgba(255, 255, 255, 0.8)`) to produce a tactile, soft-molded touch.

## Shapes

The design system embraces an ultra-rounded shape grammar that communicates approachability, speed, and safety. 

### Corner Radius Application
- **Buttons, Badges, Search Bars, & Filters:** Full pill (`roundedness: 3` / 9999px). Buttons feel organic, friendly, and easy to hit on mobile screens.
- **Cards & Bento Units:** Extra-large rounded corners (`rounded-3xl` / 24px to 32px), eliminating sharp technical angles and framing car photos like collectible product cards.
- **Input Wells & Date Selectors:** Pill-shaped or heavily curved containers (`16px` to `24px` radius) with recessed backgrounds.

## Components

### Buttons
- **Primary ("Sewa Sekarang" / Conversion):** High-voltage Lime (`#B6F23A`) fill, Deep Navy (`#12162B`) text, pill-shaped, `DM Sans` 700. Pressed state shows a subtle scale down (`transform: scale(0.98)`).
- **Secondary:** Soft Periwinkle (`#5B6CFF`) fill with white text, or pure white with `#5B6CFF` text and 1px border.
- **Ghost/Tertiary:** Transparent background with deep navy text, shifting to `#EEF1FF` on hover.

### Chips & Filter Pills
- Inactive: Background `#FFFFFF`, border 1px solid `#E2E8F0`, text `#64748B`.
- Active: Background `#5B6CFF`, border 1px solid `#5B6CFF`, text `#FFFFFF`. Includes leading vector icons (e.g., "Lepas Kunci", "Dengan Sopir", "Transmisi Matic").

### Vehicle Cards
- Pure `#FFFFFF` background, `rounded-3xl` (28px), hairline border `#E2E8F0`.
- Top-anchored car photo on clean `#F5F7FB` cutout canvas.
- Top-right 3D-styled floating pill badge (e.g., "⭐ 4.9 (120+ Sewa)" or "⚡ Instant Confirmation" in `#F3FCE0` with `#12162B` text).
- Bottom row featuring tabular daily price in deep navy paired with a compact fresh lime "Pilih" CTA button.

### Bento Quick-Search Bar
- Floating glassmorphic dock sitting over the hero module.
- 4 segments separated by subtle vertical dividers: Lokasi Jemput (Pick-up), Tanggal Sewa (Rental Dates), Waktu (Time), and Layanan (Lepas Kunci / Driver).
- Search execution button styled in vibrant `#B6F23A` with a circular pill profile.

### Checkboxes & Radios
- Radios: Circular pill rings in `#5B6CFF` with a white inner dot.
- Checkboxes: 8px squircle containers with checkmarks in deep navy over lime backgrounds when selected.

### Input Fields
- Height 52px, pill-styled container, background `#FFFFFF` on grey canvas, border 1.5px solid `#E2E8F0`. Focus state: border-color `#5B6CFF` and a diffuse periwinkle outer ring (`0 0 0 4px rgba(91, 108, 255, 0.15)`).