# Blue Atlantic Corporate Website — Brand Asset Integration (BA-W-002)

## Phase

**BA-W-002:** Integrate Blue Atlantic brand assets and metadata

**Prior phases:**
- BA-W-000: Foundation (`cbe210b0e05672d75b4fc50ac1ae3d6d93fe45e5`)
- BA-W-001: Homepage polish (`053ed558501db8dfb2caf837171a3e9dc395d0fc`)

## Purpose

Integrate the Blue Atlantic circular seal into the brand system, improve favicon/metadata/Open Graph presentation, and resolve layout inconsistencies from the BA-W-001 polish pass — while keeping the site static and guardrail-safe.

## Project Path

```
C:\Users\akimw\blueatlantic-website
```

## Asset Files Added

| File | Purpose |
|------|---------|
| `public/brand/blue-atlantic-seal.svg` | Vector master — circular seal |
| `public/brand/blue-atlantic-seal.png` | Optimized seal (400×400) |
| `public/brand/blue-atlantic-seal.webp` | WebP seal variant |
| `public/brand/blue-atlantic-seal-512.png` | High-res seal (512×512) |
| `public/brand/blue-atlantic-mark.svg` | Simplified BA monogram vector |
| `public/brand/blue-atlantic-mark.png` | Simplified mark raster |
| `public/brand/blue-atlantic-og.svg` | Open Graph template vector |
| `public/brand/blue-atlantic-og.png` | Open Graph image (1200×630) |
| `app/icon.png` | Favicon (32×32 BA mark) |
| `app/apple-icon.png` | Apple touch icon (180×180) |
| `scripts/generate-brand-assets.mjs` | Asset generation script |
| `lib/brand.ts` | Brand asset path constants |

**Regenerate assets:** `npm run generate:brand`

**Note:** If the user provides an official seal PNG, replace `public/brand/blue-atlantic-seal.png` and rerun `npm run generate:brand` to regenerate derivatives.

## Where the Seal Is Used

| Location | Size | Component |
|----------|------|-----------|
| Homepage hero ecosystem visual | hero | `EcosystemVisual` → `BrandSeal` |
| Footer brand area | sm | `GlobalFooter` → `BrandSeal` |
| About page brand section | lg | `AboutPage` → `BrandSeal` |
| Open Graph / social preview | — | `public/brand/blue-atlantic-og.png` |

## Where the BA Monogram Is Still Used

| Location | Component |
|----------|-----------|
| Navbar (desktop + mobile) | `GlobalNavigation` → `BrandMark` |
| Favicon | `app/icon.png` (generated from mark) |
| Apple touch icon | `app/apple-icon.png` (generated from mark) |

The full circular seal is **not** used in the navbar to avoid crowding at small sizes.

## Metadata Updates

Updated in `app/layout.tsx` and `lib/site.ts`:

- **Title:** Blue Atlantic | Caribbean Enterprise Infrastructure
- **Description:** Caribbean-born enterprise group copy (guardrail-safe)
- **Keywords:** Enterprise, Caribbean, fintech, workforce, intelligence
- **Open Graph:** site name, type, title, description, OG image
- **Twitter Card:** summary_large_image with OG image
- **metadataBase:** https://blueatlantic.com

## Favicon / Icon Updates

- `app/icon.png` — BA monogram at 32×32
- `app/apple-icon.png` — BA monogram at 180×180
- Auto-served by Next.js App Router file convention

## Layout Fixes

| Area | Fix |
|------|-----|
| Hero sections | Added top padding (`pt-20`/`pt-24`) to clear sticky navbar |
| Headings | `scroll-margin-top` on h1–h3 for anchor/nav clearance |
| Main content | `scroll-smooth` on html, scroll-margin on main |
| Hero visual | Centered seal in glass panel with ecosystem node labels |
| Company cards | Consistent min-height and flex layout for label rows |
| Footer | Seal + wordmark at controlled sm size |

## New Components

| Component | Purpose |
|-----------|---------|
| `BrandSeal.tsx` | Responsive full seal rendering via Next.js Image |

## Files Changed

- `app/layout.tsx` — metadata, OG, Twitter
- `app/about/page.tsx` — brand identity section with seal
- `app/globals.css` — scroll-margin utilities
- `components/BrandSeal.tsx` — new
- `components/EcosystemVisual.tsx` — seal integration
- `components/GlobalFooter.tsx` — seal in brand area
- `components/GlobalNavigation.tsx` — unchanged (BA monogram)
- `components/HeroSection.tsx` — navbar clearance padding
- `components/CompanyCard.tsx` — consistent card heights
- `lib/site.ts` — metadata fields
- `lib/brand.ts` — new asset constants
- `package.json` — generate:brand script, sharp devDependency

## Copy Guardrails Preserved

- No licensed bank, broker, or investment adviser claims
- Capital and legal disclaimers unchanged in substance
- Company status labels remain safe (Platform, Future direction, etc.)

## Validation Results

### `npm run lint`

**Status:** Passed (exit code 0)

### `npm run build`

**Status:** Passed (exit code 0)

All routes static including `/icon.png` and `/apple-icon.png`.

## Git Commit Hash

```
PENDING
```

Commit message: `BA-W-002: integrate Blue Atlantic brand assets and metadata`
