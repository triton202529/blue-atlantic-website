# Blue Atlantic Corporate Website — Official Logo Refresh (BA-W-003B)

## Phase

**BA-W-003B:** Force official Blue Atlantic logo refresh

**Prior phase:** BA-W-003A — Update About logo and clean visible dash copy (`656981b`)

## Purpose

Ensure the About page and large brand display areas show the official Blue Atlantic company seal, not a stale cached or placeholder asset. A new filename was introduced to bust browser and Next.js image cache after the user replaced the logo file.

## Reason for New Filename

The user saved the official company logo over the existing `blue-atlantic-seal.png` file. Because the filename did not change, browsers and Next.js could continue serving a cached version of the old BA placeholder seal.

**Solution:** Store the official logo at a new canonical path:

```
public/brand/blue-atlantic-company-logo.png
```

Update `lib/brand.ts` and `BrandSeal` to reference this path exclusively for large logo displays.

## Logo File Used

| Item | Value |
|------|-------|
| Official asset | `public/brand/blue-atlantic-company-logo.png` |
| Source | Copied from the user-updated `blue-atlantic-seal.png` (official seal saved at 7:17 PM) |
| Alt text | Blue Atlantic company logo |

**Note:** At phase start, `blue-atlantic-company-logo.png` did not exist. It was created from the user's saved official logo content in `blue-atlantic-seal.png` to satisfy the new cache-busting filename requirement.

## Components Updated

| Component | Change |
|-----------|--------|
| `components/BrandSeal.tsx` | Now renders `brandAssets.companyLogo` instead of `brandAssets.seal.png` |
| `lib/brand.ts` | Added `companyLogo`; `seal.png` and `seal.webp` point to company logo path |

**Unchanged:** `BrandMark` (navbar BA monogram) continues to use `blue-atlantic-mark.png`.

## Pages Updated

No page structure changes required. Existing `BrandSeal` usage automatically picks up the new asset:

| Page / area | Component | Size |
|-------------|-----------|------|
| `/about` story card | `BrandSeal` | `lg` |
| `/` homepage corporate panel | `BrandSeal` | `md` |

## Cache Cleanup Performed

```powershell
Remove-Item -Recurse -Force .\.next
```

Fresh production build run after cache removal.

## Search Results

### Old filename (`blue-atlantic-seal.png`) in source

```powershell
Select-String -Path .\app\**\*.tsx,.\components\**\*.tsx,.\lib\**\*.ts -Pattern "blue-atlantic-seal.png" -CaseSensitive:$false
```

**Result:** No matches in `app/`, `components/`, or `lib/`.

Legacy seal PNG remains on disk for script compatibility but is no longer referenced by runtime components.

### New filename (`blue-atlantic-company-logo.png`) in source

```powershell
Select-String -Path .\app\**\*.tsx,.\components\**\*.tsx,.\lib\**\*.ts -Pattern "blue-atlantic-company-logo.png" -CaseSensitive:$false
```

**Result:** Referenced in `lib/brand.ts` as the official company logo source of truth. Consumed by `BrandSeal` via `brandAssets.companyLogo`.

## Validation Results

### `npm run lint`

**Status:** Passed (exit code 0)

### `npm run build`

**Status:** Passed (exit code 0)

## Git Commit Hash

```
52ab930
```

Commit message: `BA-W-003B: force official Blue Atlantic logo refresh`

## Files Changed

- `public/brand/blue-atlantic-company-logo.png` — New official logo asset (cache-busting filename)
- `lib/brand.ts` — Brand asset source of truth updated
- `components/BrandSeal.tsx` — Uses `brandAssets.companyLogo`
- `docs/BLUE_ATLANTIC_LOGO_REFRESH.md` — This document
