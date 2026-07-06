# Blue Atlantic Corporate Website — Color Depth and Copy Cleanup (BA-W-002B)

## Phase

**BA-W-002B:** Add corporate color depth and clean up company copy

**Prior phase:** BA-W-002A — Design correction (`c55d0d95106b21bc6db54aad9dc43cdf7f34b049`)

## Purpose

Remove the phrase "parent company" from visible copy, add tasteful corporate color depth to cards and sections, and reduce the plain all-white feel while keeping the site institutional — not AI-style, not crypto-like.

## "Parent Company" Removal Summary

| Location | Before | After |
|----------|--------|-------|
| `CorporateBrandPanel.tsx` | Caribbean-born parent company | Caribbean-born company |
| `app/page.tsx` ecosystem copy | A parent company portfolio... | A portfolio of platforms... |
| `app/about/page.tsx` | parent organization behind... | company building an ecosystem that includes... |

Verified: no matches for "parent company" or "parent organization" in `app/`, `components/`, or `lib/`.

## Color-Depth Changes

### New design tokens (`app/globals.css`)

- `brand-surface-blue` — pale Atlantic blue section backgrounds
- `brand-surface-slate` — soft blue-gray panels
- `brand-surface-navy` — navy-tinted surfaces
- Category accent colors for fintech, workforce, intelligence, oversight, capital

### Section surfaces

- `.section-surface-white`, `.section-surface-soft`, `.section-surface-blue`, `.section-surface-slate`
- Alternating backgrounds across homepage and inner pages

## Card Design Changes

### Strategic pillar cards

- Colored top border per pillar (Atlantic blue variations)
- Soft tinted gradient backgrounds
- Number treatment without decorative circles

### Ecosystem/company cards

- Category-specific accent colors by company:
  - Tropicash: fintech / Atlantic blue
  - EliteHire: workforce / blue-gray
  - TRITON: intelligence / deep navy
  - Sentinel: oversight / steel-blue
  - Capital / IRD: capital / muted gold accent
- Header band with category metadata

### Why Blue Atlantic / inner page cards

- Left accent bar with soft tinted backgrounds
- Rotating accent variations for visual rhythm

## Page Background / Section Changes

### Homepage rhythm

| Section | Background |
|---------|------------|
| Hero | Deep navy |
| Strategic pillars | White |
| Ecosystem | Pale blue-gray |
| Why Blue Atlantic | Soft off-white with accented cards |
| Partnership CTA | Deep navy |
| Footer | Deep navy |

### Inner pages

- Alternating `ContentSection` surfaces (blue, soft, white)
- Cards use accent classes instead of plain white grids

## Files Changed

| File | Change |
|------|--------|
| `app/globals.css` | Color tokens, section surfaces, card accent classes |
| `lib/card-themes.ts` | **New** — accent class mappings |
| `lib/site.ts` | Pillar/company accent keys, copy cleanup |
| `components/ContentSection.tsx` | **New** — section wrapper with surface tones |
| `components/PillarCard.tsx` | Colored top border, tinted backgrounds |
| `components/CompanyCard.tsx` | Category accents, header band |
| `components/CorporateBrandPanel.tsx` | Copy cleanup |
| `app/page.tsx` | Section rhythm, copy, accents |
| `app/about/page.tsx` | Copy cleanup, section surfaces |
| `app/companies/page.tsx` | Blue section, company accents |
| `app/technology/page.tsx` | Alternating sections, accented cards |
| `app/capital/page.tsx` | Capital accent cards, sections |
| `app/contact/page.tsx` | Blue/white sections, accented cards |
| `app/newsroom/page.tsx` | Soft section, neutral accent card |
| `app/legal/page.tsx` | Blue section, accented cards |

## Copy Guardrails Preserved

- No licensed bank, broker, or investment adviser claims
- Capital page important notice unchanged in substance
- "Parent company" removed; replaced with company / enterprise group / ecosystem language
- All existing guardrail-safe terminology retained

## Validation Results

### `npm run lint`

**Status:** Passed (exit code 0)

### `npm run build`

**Status:** Passed (exit code 0)

### "Parent company" search

**Status:** No matches in visible copy (`app/`, `components/`, `lib/`)

## Git Commit Hash

```
PENDING
```

Commit message: `BA-W-002B: add corporate color depth and clean up company copy`
