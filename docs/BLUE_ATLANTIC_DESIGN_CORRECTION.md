# Blue Atlantic Corporate Website — Design Correction (BA-W-002A)

## Phase

**BA-W-002A:** Remove AI-style visuals and refine corporate design

**Prior phase:** BA-W-002 — Brand asset integration (`f083cac277dfa60d2f207accecba3dbe61cfe358`)

## Reason for Correction

The BA-W-001/002 homepage hero introduced an orbit-style ecosystem graphic with floating node labels, grid backgrounds, and a dashboard-style "ecosystem architecture" panel. This read as AI-generated SaaS / command-center design rather than a serious Caribbean-born enterprise group website.

## AI-Looking Elements Removed

| Element | Action |
|---------|--------|
| Orbit-style ecosystem graphic | Removed entirely |
| Floating platform node labels | Removed |
| SVG connection lines / hub diagram | Removed |
| "Ecosystem architecture" dashboard panel | Removed |
| Heavy hero grid background | Removed |
| Glowing seal in circular badge frame | Removed |
| Glass/blur backdrop panels | Removed from hero and partnership CTA |
| Decorative floating circles on pillar cards | Removed |
| Uppercase SaaS-style category pills | Replaced with plain text labels |
| Featured card gradient styling | Removed |
| Full seal in footer (coin-like at small size) | Replaced with BA monogram |

## New Corporate Design Direction

- **Editorial hero:** Strong typography, calm navy gradient, no grid
- **Corporate brand panel:** Seal + statement + simple enterprise areas list
- **Strategy cards:** Number, accent line, heading, body — no feature-card styling
- **Portfolio cards:** Restrained borders, sentence-case metadata, parent-company tone
- **Partnership CTA:** Plain navy block with centered copy — no glass panel
- **Footer:** BA monogram + wordmark, lighter spacing, no seal badge
- **Section labels:** Sentence case instead of all-caps eyebrows

## Files Changed

| File | Change |
|------|--------|
| `components/CorporateBrandPanel.tsx` | **New** — editorial hero panel |
| `components/EcosystemVisual.tsx` | **Deleted** — orbit/dashboard visual |
| `components/HeroSection.tsx` | Soft gradient, grid removed |
| `components/PillarCard.tsx` | Simplified corporate strategy cards |
| `components/CompanyCard.tsx` | Portfolio-style cards, plain labels |
| `components/PartnershipCTA.tsx` | Removed glass/blur panel |
| `components/SectionHeader.tsx` | `label` prop, sentence-case styling |
| `components/GlobalFooter.tsx` | BA monogram instead of seal |
| `app/page.tsx` | CorporateBrandPanel in hero |
| `app/about/page.tsx` | Calmer brand section |
| `app/companies/page.tsx` | Section label update |
| `app/technology/page.tsx` | Section label update |
| `app/capital/page.tsx` | Section label update |
| `app/contact/page.tsx` | Section label update |
| `app/newsroom/page.tsx` | Section label update |
| `app/globals.css` | `section-label` utility |
| `lib/site.ts` | Added `enterpriseAreas` |

## Components Changed or Replaced

| Before | After |
|--------|-------|
| `EcosystemVisual` | `CorporateBrandPanel` |
| Orbit + nodes + grid hero | Editorial two-column hero |
| SaaS pillar cards | Corporate strategy cards |
| Tech-startup company cards | Portfolio company cards |

## Copy Guardrails Preserved

- No licensed bank, broker, or investment adviser claims
- Capital and legal disclaimers unchanged
- Company status labels remain safe (Platform, Future direction, etc.)
- All existing guardrail-safe copy retained

## Validation Results

### `npm run lint`

**Status:** Passed (exit code 0)

### `npm run build`

**Status:** Passed (exit code 0)

## Git Commit Hash

```
c55d0d95106b21bc6db54aad9dc43cdf7f34b049
```

Commit message: `BA-W-002A: remove AI-style visuals and refine corporate design`
