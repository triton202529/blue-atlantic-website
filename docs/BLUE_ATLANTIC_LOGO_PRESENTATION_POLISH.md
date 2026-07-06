# Blue Atlantic Corporate Website — Logo Presentation Polish (BA-W-003C)

## Phase

**BA-W-003C:** Polish Blue Atlantic logo presentation

**Prior phase:** BA-W-003B — Force official Blue Atlantic logo refresh (`52ab930`)

## Purpose

Remove the awkward white square canvas around the official company seal so the logo appears clean, premium, and intentionally integrated on the homepage corporate panel and About page story card.

## Original Logo Issue

The source file `blue-atlantic-company-logo.png` (1024×1024) contained:

- A solid white background with no practical transparency in the visible canvas
- Excess white padding around the circular seal
- A square image area that read as a pasted white box on dark navy and light card backgrounds

## Display Asset Created

| Item | Value |
|------|-------|
| File | `public/brand/blue-atlantic-company-logo-display.png` |
| Dimensions | 516×516 |
| File size | ~124 KB (down from ~1.7 MB source) |
| Generator | `scripts/create-logo-display.mjs` |
| npm script | `npm run generate:logo-display` |

## Transparency and Crop

**Transparency:** Yes. Near-white pixels (RGB ≥ 248) were converted to transparent alpha.

**Crop:** Yes. Sharp `trim()` removed excess canvas after background removal, with 2px edge padding preserved to avoid clipping the gold border.

The full circular seal, gold border, and central trident icon remain intact with no distortion.

## Components Updated

| Component | Change |
|-----------|--------|
| `lib/brand.ts` | Added `companyLogoDisplay`; seal PNG/WebP paths point to display asset |
| `components/BrandSeal.tsx` | Uses display asset; added `default`, `framed`, and `transparent` variants |
| `components/CorporateBrandPanel.tsx` | Uses `transparent` variant with subtle drop shadow on dark panel |
| `app/about/page.tsx` | Uses `framed` variant with circular premium tile (no harsh white square) |

**Unchanged:** Navbar `BrandMark` monogram.

## Pages Affected

| Page / area | Presentation |
|-------------|--------------|
| `/` homepage corporate panel | Transparent seal integrated into dark navy panel |
| `/about` story card | Framed circular logo tile with soft border and surface tint |

## Validation Results

### `npm run lint`

**Status:** Passed (exit code 0)

### `npm run build`

**Status:** Passed (exit code 0)

## Git Commit Hash

```
(Updated after commit)
```

Commit message: `BA-W-003C: polish Blue Atlantic logo presentation`

## Files Changed

- `public/brand/blue-atlantic-company-logo-display.png` — Optimized transparent display asset
- `scripts/create-logo-display.mjs` — Display asset generator
- `lib/brand.ts` — Display logo path in source of truth
- `components/BrandSeal.tsx` — Variants and display asset rendering
- `components/CorporateBrandPanel.tsx` — Dark panel integration
- `app/about/page.tsx` — Framed logo tile
- `package.json` — Added `generate:logo-display` script
- `docs/BLUE_ATLANTIC_LOGO_PRESENTATION_POLISH.md` — This document
