# Blue Atlantic Corporate Website — Brand Identity Unification (BA-W-003D)

## Phase

**BA-W-003D:** Unify Blue Atlantic brand identity

**Prior phase:** BA-W-003C — Polish Blue Atlantic logo presentation (`3750548`)

## Purpose

Eliminate public-facing brand inconsistency where the homepage and About page showed the official company seal while the navbar and footer still used the simplified BA monogram.

## Brand Inconsistency Found

| Area | Before | After |
|------|--------|-------|
| Homepage panel | Official seal | Official seal (unchanged) |
| About story card | Official seal | Official seal (unchanged) |
| Navbar | BA monogram (`BrandMark`) | Official seal + wordmark |
| Footer | Grey BA monogram (`BrandMark`) | Official seal + wordmark |

## Public Logo Rule Adopted

1. **Primary public logo:** Official circular Blue Atlantic company seal (`blue-atlantic-company-logo-display.png`)
2. **Used in:** Navbar, footer, homepage panel, About story card, and all future brand display areas via `BrandLogo`
3. **Simplified BA monogram:** Retained in `BrandMark.tsx` for favicon/internal fallback only; no longer used in public layout components
4. **Favicon:** Continues to use `blue-atlantic-mark.png` via `app/icon.png` (appropriate at tiny size)

## Navbar Update

- Replaced `BrandMark` with `BrandLogo variant="nav"`
- Official seal at 36px with "Blue Atlantic" wordmark
- Mobile navigation unchanged
- Link hover and sticky header behavior preserved

## Footer Update

- Replaced `BrandMark variant="onDark"` with `BrandLogo variant="footer"`
- Official seal at 48px with transparent presentation and subtle drop shadow on navy background
- Footer copy and links unchanged

## Homepage and About Confirmation

| Page | Component | Variant |
|------|-----------|---------|
| `/` corporate panel | `BrandLogo` | `panel` (96px seal, transparent on dark panel) |
| `/about` story card | `BrandLogo` | `story` (128px framed seal) |

Both use `blue-atlantic-company-logo-display.png` through `BrandSeal`.

## Components Changed or Created

| File | Change |
|------|--------|
| `components/BrandLogo.tsx` | **Created** — Unified logo lockup with nav, footer, story, panel, hero, sealOnly variants |
| `components/GlobalNavigation.tsx` | Uses `BrandLogo` nav variant |
| `components/GlobalFooter.tsx` | Uses `BrandLogo` footer variant |
| `components/CorporateBrandPanel.tsx` | Migrated to `BrandLogo` panel variant |
| `app/about/page.tsx` | Migrated to `BrandLogo` story variant |
| `lib/brand.ts` | Added `nav` (36px) and `footer` (48px) seal sizes |
| `components/BrandMark.tsx` | Marked deprecated for public use; retained for favicon fallback |

## BrandMark Usage Status

**Public usage:** None. Removed from `GlobalNavigation` and `GlobalFooter`.

**Retained for:** Favicon generation (`scripts/generate-brand-assets.mjs` → `app/icon.png`) and internal fallback reference only.

## Validation Results

### `npm run lint`

**Status:** Passed (exit code 0)

### `npm run build`

**Status:** Passed (exit code 0)

### Copy guardrail searches

| Pattern | Result |
|---------|--------|
| `parent company` | No matches |
| Em dash `—` | No matches |
| En dash `–` | No matches |

## Git Commit Hash

```
(Updated after commit)
```

Commit message: `BA-W-003D: unify Blue Atlantic brand identity`

## Files Changed

- `components/BrandLogo.tsx`
- `components/GlobalNavigation.tsx`
- `components/GlobalFooter.tsx`
- `components/CorporateBrandPanel.tsx`
- `components/BrandMark.tsx`
- `app/about/page.tsx`
- `lib/brand.ts`
- `docs/BLUE_ATLANTIC_BRAND_IDENTITY_UNIFICATION.md`
