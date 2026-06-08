# PROVE+ — Design System & Brand Guide

This document captures the PROVE+ (พรูฟพลัส) brand and front-end design system: the
visual language, design tokens, component patterns, and structural conventions used
across the marketing site. Use it as the reference when building or reviewing any new
UI so additions stay on-brand.

> **Brand in one line:** a friendly, rounded, pastel wellness brand for gut health —
> clean white cards floating on soft cream→sky gradients, indigo as the voice colour,
> playful organic 3D shapes, and the rounded *FC Orbit Rounded* typeface throughout.

---

## 1. Brand personality

| Trait | How it shows up |
|-------|-----------------|
| **Friendly & approachable** | Rounded typeface, rounded corners everywhere, soft shadows, pill-shaped buttons |
| **Clean & trustworthy** | Generous whitespace, white/glassy cards, restrained palette, real certification logos |
| **Soft & calming** | Pastel gradients (cream, sky blue, lavender), no harsh contrast |
| **Playful & organic** | Signature 3D "blob/knot" shapes and soft colour orbs in section backgrounds |
| **Science-backed wellness** | Indigo authority colour, probiotic/strain language, FDA (อย.) and ISO badges |
| **Thai-first, bilingual** | Default locale is Thai (`th`); English (`en`) is a switch. Copy is warm and casual |

---

## 2. Typography

### Typefaces
- **FC Orbit Rounded** — the primary brand face. Used for **everything** by default
  (headings, body, numerals, Thai + Latin). A rounded, friendly sans. Self-hosted from
  `/public/fonts/fc-orbit-rounded/` in weights **400 / 500 / 600 / 700**.
  - The rounded numerals are a brand signature — keep numbers in this face.
- **Outfit** — a utility fallback exposed via the `.text-outfit` class. **Rarely used**;
  default to FC Orbit Rounded. (Do not reach for `text-outfit` unless there's a reason —
  it makes Latin text feel generic and off-brand.)

```css
/* set globally on <body> */
font-family: "FC Orbit Rounded", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;

/* helpers in globals.css */
.text-fc-orbit { font-family: "FC Orbit Rounded", ...; }
.text-outfit   { font-family: "Outfit", ...; }   /* sparingly */
```

### Type scale (observed, responsive via `clamp`)
| Role | Size | Weight | Colour |
|------|------|--------|--------|
| Page / section H1–H2 | `clamp(1.75rem, 5vw, 2.5rem)` | 600–700 | Indigo `#4554a4` |
| Product title (H1) | `clamp(1.75rem, 5vw, 2.5rem)` | 700 | Ink `#1d2939` |
| Sub-section H3 | ~22px | 700 | Indigo / two-tone |
| Body | 16px / 1.5 | 400 | Ink `#1d2939` |
| Secondary / muted | 14–18px | 400–500 | Muted `#667085` |
| Eyebrow / label | 11–13px, `tracking 0.1em`, uppercase | 600–700 | Muted |

**Two-tone headings** are a recurring device: the same line in two indigo tints, e.g.
*"เรื่องของลำไส้"* (deep) + *"ไว้ใจ prove+"* (lighter), or *"prove+ ช่วยเรื่อง…"*.

---

## 3. Colour

Colours live as HSL CSS variables in `app/globals.css` (`:root`), surfaced through
Tailwind tokens in `tailwind.config.ts`. Many components also use brand hex literals
directly. Both are listed below.

### Core brand (CSS variables)
| Token | HSL | ≈ Hex | Use |
|-------|-----|-------|-----|
| `--primary` | `234 43% 42%` | `#3d4c98` | Primary indigo |
| `--prove-primary` | `234 54% 62%` | `#6678d6` | Brighter indigo |
| `--prove-main` | `234 43% 49%` | `#4757b0` | Main indigo |
| `--prove-secondary` | `227 50% 66%` | `#7b91d3` | Secondary / lighter |
| `--prove-grey` | `0 0% 96%` | `#f5f5f5` | Light grey surface |
| `--muted-foreground` | `215 16% 47%` | `#667085` | Muted text |

### Brand hex literals used in components (source of truth in practice)
| Hex | Name | Where |
|-----|------|-------|
| `#4554a4` | Indigo (headings) | Section/product headings, FDA badge |
| `#4456a6` | Indigo (alt) | Product card name |
| `#5d6fcd` | Indigo button | Order button, active states, selected border |
| `#4a5bb5` | Indigo hover | Button hover |
| `#1d2939` | Ink | Primary text |
| `#667085` | Muted | Secondary text |
| `#616161` | Muted (alt) | Card subtitles |
| `#d0d5dd` | Border | Dividers, chip outlines |
| `#eaecf0` | Pill track | Toggle/tab background |
| `#FDB022` | Star gold | Rating stars |
| `#f5f5f5` | Surface grey | Card bodies |

### Product accents
Each product carries its own soft tint, repeated in galleries, selector cards, and the
ingredient section:
| Product | Surface tint | Accent (deep) | Flavour |
|---------|-------------|---------------|---------|
| **FLOWPRO** | `#e5ecfe` (lavender) | `#5d6fcd` / `#4554a4` indigo | Pineapple |
| **ALLERPRO** | `#fbf7e2` (cream) | `#c79a3a` / `#b58a2e` gold | Apple |

### Page background gradient (signature)
```css
background: linear-gradient(to bottom, #ffffff 4%, #fef0ca 48%, #8fdafa 100%);
/* white → warm cream → sky blue */
```
Section backgrounds add large, soft pastel **colour orbs** (yellow/peach/blue) behind
content for depth.

### Category colours (ingredient system)
| Category | Colour | Icon |
|----------|--------|------|
| Probiotic | `#5d6fcd` indigo | `Dna` |
| Prebiotic | `#c79318` / `#f2c14e` amber | `Wheat` |
| Vitamin | `#e2683c` orange | `Citrus` |
| Immune (beta-glucan) | `#4f8c4c` green | `ShieldCheck` |

---

## 4. Shape, elevation & spacing

- **Corner radius** — large and soft. Cards `24px`–`32px`; inner panels `18px`; pills /
  tabs / buttons fully rounded (`9999px` / `rounded-full`); base `--radius: 0.5rem`.
- **Shadows** — soft, low-contrast:
  - Card drop: `0px 4px 4px rgba(0,0,0,0.25)`
  - Pill/tab raise: `0 0 3px rgba(16,24,40,0.1), 0 2px 5px rgba(16,24,40,0.06)`
  - Floating elements: `0 8px 30px rgba(16,24,40,0.18)`
- **Glassmorphism** — primary content cards use `bg-white/50 backdrop-blur-sm`, sitting
  on the gradient so the background tint shows through.
- **Layout** — centred, `max-w-[1200px]`, responsive horizontal padding
  `px-4 sm:px-8 md:px-16`. Grids collapse to one column on mobile (`grid-cols-1 lg:grid-cols-2`).
- **Borders** — hairline `#d0d5dd` / `#eef1f5`; dashed dividers in lists.

---

## 5. Iconography & imagery

- **Icons** — [lucide-react](https://lucide.dev) line icons, `strokeWidth ~2`. **No
  emoji in production UI.**
- **Circular gradient icon badges** — a signature element (homepage *"prove+ ช่วยเรื่อง"*
  benefits row, and the ingredient cards/infographic). A circle with a soft
  `from-[#eaeefe] to-[#f7ebf2]` gradient fill, a thin `ring-[#cdd3f2]` ring, and a
  category-coloured line icon centred inside.
- **Organic 3D shapes** — glossy pastel "blob/knot" renders (orange/yellow/blue) are the
  hero/section signature. Soft blurred colour **orbs** sit behind cards for depth.
- **Photography** — bright lifestyle + product shots featuring brand talent; sachet/box
  product renders on tinted backgrounds.
- **Logo** — lowercase `prove+` wordmark, bold indigo, with a raised `+`. Often paired
  with the tagline *พรูฟแล้วว่าดี*.

---

## 6. Motion

- **Library** — `framer-motion`.
- **Enter animations** — subtle fade + small rise: `opacity 0→1`, `y: 8–20→0`,
  duration `0.25–0.6s`. Used on cards, details, and on variant/tab switches (keyed
  `motion.div`).
- **Scroll reveal** — `ScrollAnimatedElement` fades sections in as they enter the
  viewport (so full-page screenshots taken without scrolling show blanks — scroll to
  trigger).
- **Hover** — buttons scale `~1.02` and deepen colour; cards lift `translateY(-1 to -4px)`
  with a stronger shadow. Tap scales `~0.98`.
- **Carousels** — certification / reviews use circular outline arrow buttons.

---

## 7. Component patterns

### Navigation bar
Floating, fully-rounded **lavender pill** spanning the top, containing the `prove+`
logo, indigo nav links, an **EN / TH** segmented toggle (active = filled indigo circle),
and a `สั่งซื้อ 🛒` (Order) pill CTA.

### Buttons & CTAs
- **Primary**: solid indigo `#5d6fcd`, white text, fully rounded, soft shadow, cart icon.
  Hover → `#4a5bb5` + slight scale.
- **Pill toggles / tabs**: grey `#eaecf0` track, active segment = white with raise shadow
  (or filled indigo for selectors).
- **Floating CTA**: the order button also appears as a floating pill (precedent for the
  ingredient design toggle).

### Cards
- White or `bg-white/50` glassy, `rounded-[24px]`, soft drop shadow.
- Pattern: image/badge on top → bold indigo title → muted meta row.
- Selector cards add a `3px #5d6fcd` border when active and `hover:scale-105`.

### Tags / chips
- **Category/post tags**: small filled **indigo pill** (e.g. `Events`, `Wellness`).
- **Spec chips**: white pill, `#d0d5dd` outline (e.g. food additives `INS 414`).

### Rating
Gold (`#FDB022`) lucide stars + count in medium weight.

### Badges (FDA / certification)
FDA registration shown as a solid accent-coloured rounded badge:
`อย. / FDA No.` label + bold number, in the product's accent colour.

---

## 8. Structure & tech

- **Framework** — Next.js 14 (App Router, `app/`), **static export**
  (`output: 'export'`, `trailingSlash: true`, `images.unoptimized`). Deployed via Netlify
  (`netlify.toml`, `npm run build`).
- **Styling** — Tailwind CSS (`tailwind.config.ts`) + `globals.css` tokens;
  `tailwindcss-animate` and `@tailwindcss/typography` plugins. Components lean on Tailwind
  arbitrary values (`text-[#4554a4]`, `rounded-[32px]`) and inline `style` for dynamic
  accent colours.
- **i18n** — `LocaleProvider` (`app/components/v2/LocaleProvider.tsx`) with
  `i18n/locales/{th,en}.json`. **Default locale: `th`.** Access via `useLocale()` → `t`.
  Translation type is derived from `th.json`, so every key must exist in `th.json`.
- **Component home** — `app/components/v2/` holds the live site components; product
  components in `app/components/v2/product/`.
- **Pages** — `app/page.tsx` (home), `app/products/{flowpro,allerpro}/page.tsx`,
  `app/blog/`, plus legal/contact/about pages.

### Homepage section order (`app/page.tsx`, v2 components)
1. `HeroSection` — poster + 3D blob + headline
2. `BenefitsSection` — *"prove+ ช่วยเรื่อง…"* circular icon-badge row
3. `ProductFeaturesSection` / *"ทำไมต้อง prove+"*
4. `GutSupportSection` / `MicroProbioticSection` — big 3D knot
5. `CertificationSection` — *"เรื่องของลำไส้ ไว้ใจ prove+"* cert carousel
6. `TestimonialsSection` / `SocialReviewCard` — *"รีวิวจาก platforms"*
7. `EventsSection` — *"Posts by Prove+"* blog/news cards
8. `FooterNav` — light-blue footer
   Plus overlays: `PopupModal`, `ShopModalContent`, `WorldMapModal`.

### Product page anatomy
`ProductPageLayout` (gradient bg) wraps:
1. Banner `ProductMainImage`
2. **Product Information** card — gallery (`ProductMainImage` + `ProductThumbnailGrid`)
   left; `ProductDetails` (title, gold rating, order button) + `ProductTabs`
   (description, ingredient badges, flavour, how-to-use) right
3. **Key Ingredients** card — `KeyIngredients` (see §9)
4. Product selector — two `ProductCard`s

---

## 9. Key Ingredients module (design-variant system)

Lives in `app/components/v2/product/ingredients/`. Renders the official per-sachet
ingredient data, food additives (INS), and FDA (อย.) number for each product as an
upfront section on the product page. Five candidate designs were reviewed; the
**spec-sheet table** was chosen as the final design and the others removed.

- **Data** — `ingredientData.ts`: bilingual (`{en, th}`), typed, with category and amount
  in **milligrams** (`amountMg`); plus each product's accent palette.
- **Contract** — the design implements `IngredientVariantProps` (`{ data }`); a shared
  `IngredientFooter` (additives + FDA badge) lives in `shared.tsx`.
- **Registry** — `variants/index.ts` still drives the rendered design via a registry
  (one entry: `table`), so new candidates can be re-introduced later by appending
  entries and restoring a toggle in `KeyIngredients.tsx`.
- **Final design** — `IngredientsTable`: a fully responsive spec-sheet table (accent
  header, zebra rows, per-ingredient category sub-label, milligram amounts) over the
  additives chips + FDA badge. Uses FC Orbit Rounded and the product accent.
- **Responsive** — column widths and paddings scale down for mobile; the amount column
  is fixed-width and `nowrap`, ingredient names wrap. Footer reflows from row to column.

---

## 10. Do / Don't

**Do**
- Default to FC Orbit Rounded; keep numerals in it.
- Use indigo `#4554a4`/`#5d6fcd` as the voice colour; respect per-product accents.
- Reach for large radii, soft shadows, glassy white cards, generous whitespace.
- Use lucide line icons inside circular gradient badges.
- Localise every string (TH + EN); add keys to `th.json` first.

**Don't**
- Don't use emoji as UI icons.
- Don't use hard/saturated bootstrap blues or high-contrast borders.
- Don't introduce square, sharp-cornered components.
- Don't force `.text-outfit` where the brand face belongs.
- Don't rely on full-page screenshots without scrolling (scroll-reveal animations).
