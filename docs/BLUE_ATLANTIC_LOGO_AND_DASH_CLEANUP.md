# Blue Atlantic Corporate Website — Logo and Visible Dash Cleanup (BA-W-003A)

## Phase

**BA-W-003A:** Update About logo and clean visible dash copy

**Prior phase:** BA-W-003 — Corporate story and public copy (`79384f022a29a3d097c6d2d29277908128a4c33e`)

## Purpose

Replace the About page story card placeholder-style mark with the official Blue Atlantic company seal, and remove em dash and en dash punctuation from public-facing copy while preserving mature corporate design and legal guardrails.

## About Page Logo Fix

The About page intro/story card previously displayed the `BrandSeal` component at `size="md"` (96px), which read as a small monogram-style mark in context.

**Changes:**

- Upgraded to `BrandSeal` at `size="lg"` (128px) using the official seal asset
- Wrapped the seal in a premium white panel with border and shadow for intentional corporate presentation
- Updated default alt text to **Blue Atlantic company logo**
- Navbar `BrandMark` monogram unchanged (works better at small size)

## Logo Asset / Component Used

| Item | Value |
|------|-------|
| Component | `components/BrandSeal.tsx` |
| Asset | `public/brand/blue-atlantic-seal.png` |
| Asset config | `lib/brand.ts` → `brandAssets.seal.png` |
| Size on About page | `lg` (128×128 display) |
| Alt text | Blue Atlantic company logo |

## Long Dash Cleanup Summary

Removed all em dash (`—`) and en dash (`–`) punctuation from public-facing source in `app/`, `components/`, and `lib/`. Sentences were rewritten naturally rather than mechanically replaced with commas.

**Examples:**

| Before | After |
|--------|-------|
| `infrastructure — each developed` | `infrastructure, each developed` |
| `capital direction — not a live investment product` | `capital direction and is not a live investment product` |
| `platform design — not live regulated financial services` | `platform design. They do not represent live regulated financial services` |
| `initiatives — including Tropicash` | `initiatives, including Tropicash` |
| `development direction — building payment systems` | `development direction, building payment systems` |

Normal hyphenated compound words preserved: Caribbean-born, long-term, global-standard, research-led, governance-aware, secure-by-design.

## Files Changed

- `components/BrandSeal.tsx` — Added optional `alt` prop; default alt set to "Blue Atlantic company logo"
- `app/about/page.tsx` — Larger seal with premium wrapper panel
- `app/page.tsx` — Homepage section descriptions (2 rewrites)
- `app/companies/page.tsx` — Hero supporting copy
- `app/technology/page.tsx` — Focus area descriptions and footer disclaimer (9 rewrites)
- `app/capital/page.tsx` — Development disclaimer
- `app/legal/page.tsx` — Legal disclaimer sections (2 rewrites)
- `app/layout.tsx` — OG image alt metadata (pipe separator instead of em dash)
- `lib/site.ts` — Company and Why Blue Atlantic copy (6 rewrites)
- `docs/BLUE_ATLANTIC_LOGO_AND_DASH_CLEANUP.md` — This document

## Search Results for Em Dash (`—`)

```powershell
Select-String -Path .\app\**\*.tsx,.\components\**\*.tsx,.\lib\**\*.ts -Pattern "—"
```

**Result:** No matches in public-facing source files.

## Search Results for En Dash (`–`)

```powershell
Select-String -Path .\app\**\*.tsx,.\components\**\*.tsx,.\lib\**\*.ts -Pattern "–"
```

**Result:** No matches in public-facing source files.

Note: Documentation files under `docs/` may still contain em dashes in phase titles and descriptions. These are internal documentation, not visible website copy.

## Copy Guardrails Preserved

- No "parent company" in visible copy
- No licensed bank, broker, or investment manager claims outside legal disclaimers
- No guaranteed returns, FDIC, live trading, or promotional financial language
- Legal disclaimers rewritten without long dashes while retaining protective language
- Capital page remains clearly informational / non-operational
- Technology page continues to qualify secure infrastructure as design intent

## Restricted Term Search Results

```powershell
Select-String -Path .\app\**\*.tsx,.\components\**\*.tsx,.\lib\**\*.ts -Pattern "parent company" -CaseSensitive:$false
Select-String -Path .\app\**\*.tsx,.\components\**\*.tsx,.\lib\**\*.ts -Pattern "guaranteed returns" -CaseSensitive:$false
Select-String -Path .\app\**\*.tsx,.\components\**\*.tsx,.\lib\**\*.ts -Pattern "FDIC" -CaseSensitive:$false
```

**Result:** No matches for any restricted term in public-facing source.

Terms such as "licensed bank" and "investment advice" appear only in legal disclaimer negation context (acceptable).

## Validation Results

### `npm run lint`

**Status:** Passed (exit code 0)

### `npm run build`

**Status:** Passed (exit code 0)

## Git Commit Hash

```
656981b
```

Commit message: `BA-W-003A: update About logo and clean visible dash copy`
