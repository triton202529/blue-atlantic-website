# Blue Atlantic Corporate Website — Visual Asset Integration (BA-W-007)

## Phase

**BA-W-007:** Add Blue Atlantic visual asset depth

**Prior phase:** BA-W-006 — Vercel deployment documentation (`ea1c674`)

## Purpose

Add controlled, locally generated visual assets and image treatments so the site feels more premium and less text-heavy, without AI-dashboard styling, external stock images, or flashy effects.

## Visual Issue Addressed

The site was clean and professional but felt plain across homepage sections, About story content, and portfolio/technology pages. This phase adds Atlantic-inspired visuals, branded patterns, and consistent image components while preserving the mature corporate design system.

## Assets Created

| Asset | Path | Use |
|-------|------|-----|
| Atlantic horizon | `public/images/blue-atlantic-horizon.png` | Homepage hero panel, About page |
| Enterprise map | `public/images/blue-atlantic-enterprise-map.png` | About regional visual |
| Systems | `public/images/blue-atlantic-systems.png` | Technology page |
| Portfolio | `public/images/blue-atlantic-portfolio.png` | Homepage and Companies page |
| Pattern | `public/images/blue-atlantic-pattern.png` | Section background texture |
| Research | `public/images/blue-atlantic-research.png` | Capital page (informational) |

Generator: `npm run generate:visuals` → `scripts/generate-visual-assets.mjs`

All assets are generated locally with Sharp and SVG. No external URLs.

## Components Created or Updated

| Component | Change |
|-----------|--------|
| `BrandPattern.tsx` | **Created** — subtle branded background pattern |
| `ImageBand.tsx` | **Created** — full-width image strip with overlay |
| `VisualPanel.tsx` | **Created** — image + text side-by-side panel |
| `PageVisual.tsx` | **Created** — page-level visual with caption |
| `ContentSection.tsx` | Added optional `pattern` prop |
| `CorporateBrandPanel.tsx` | Horizon background in hero panel |
| `CompanyCard.tsx` | Category gradient visual header bands |
| `lib/visual-assets.ts` | **Created** — asset paths and alt text |
| `lib/card-themes.ts` | Category visual header classes |

## Pages Updated

| Page | Visual improvements |
|------|---------------------|
| `/` | Pattern on pillars/Why sections; portfolio ImageBand in ecosystem |
| `/about` | Horizon PageVisual; enterprise map VisualPanel; pattern on story grid |
| `/companies` | Portfolio ImageBand; category visual headers on cards |
| `/technology` | Systems VisualPanel |
| `/capital` | Research PageVisual with informational caption |
| `/newsroom` | Subtle pattern on content section |
| `/contact` | Subtle pattern on inquiry section |
| `/legal` | Subtle pattern on legal section |

## Accessibility Notes

- All meaningful images use descriptive alt text via `visualAssetAlt` or explicit props
- Decorative pattern images use `alt=""` and `aria-hidden`
- Category card headers use `aria-hidden="true"`
- ImageBand overlay text maintains readable contrast on navy overlay
- Focus styles and heading order unchanged

## Performance Notes

- PNG assets generated at moderate sizes (512px to 1200px width)
- Next.js `Image` used with responsive `sizes` attributes
- Display logo source (1.7MB) not used for section visuals
- No external image requests
- Static build remains fully static (15 routes)

## Copy Guardrails Preserved

- No new promotional financial language added
- Capital visual caption reinforces informational-only framing
- No em dashes or en dashes introduced
- No "parent company" phrasing
- Legal disclaimers unchanged in substance

## Validation Results

### `npm run lint`

**Status:** Passed (exit code 0)

### `npm run build`

**Status:** Passed (exit code 0)

## Git Commit Hash

```
(Updated after commit)
```

Commit message: `BA-W-007: add Blue Atlantic visual asset depth`
