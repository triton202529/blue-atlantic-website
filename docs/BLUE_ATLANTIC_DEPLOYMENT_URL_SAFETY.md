# Blue Atlantic Corporate Website — Deployment URL Safety (BA-W-004A)

## Phase

**BA-W-004A:** Add deployment URL safety configuration

**Prior phase:** BA-W-004 — Finalize Blue Atlantic launch QA and SEO polish (`cfe4580`)

## Reason for Patch

BA-W-004 set `siteConfig.url` to `https://blueatlantic.com`. The domain is planned but not yet purchased. Deploying with that hardcoded URL would produce incorrect metadata, sitemap entries, and robots references until the domain is live.

## Current Temporary Deployment URL Strategy

The active public site URL is resolved at runtime/build time via:

1. `NEXT_PUBLIC_SITE_URL` environment variable (if set)
2. Fallback: `https://blueatlantic-website.vercel.app`

Resolution is centralized in `lib/site.ts` through `getSiteUrl()`. All metadata, sitemap, and robots consumers use `siteConfig.url`, which calls `getSiteUrl()`.

## Future blueatlantic.com Plan

`intendedProductionUrl` in `lib/site.ts` documents the target production domain:

```
https://blueatlantic.com
```

**When the domain is purchased and connected in Vercel:**

1. Set `NEXT_PUBLIC_SITE_URL=https://blueatlantic.com` in Vercel project environment variables
2. Redeploy the site
3. Verify metadata, sitemap, and social previews resolve to the new domain

Do not hardcode `blueatlantic.com` as the active URL in source until the domain is connected.

## Environment Variable Added

| Variable | Purpose |
|----------|---------|
| `NEXT_PUBLIC_SITE_URL` | Public site URL for metadata, OG, sitemap, robots |

Example file: `.env.example`

```env
NEXT_PUBLIC_SITE_URL=https://blueatlantic-website.vercel.app
# Change to https://blueatlantic.com after the domain is purchased and connected in Vercel.
```

## Files Changed

| File | Change |
|------|--------|
| `lib/site.ts` | Added `getSiteUrl()`, `intendedProductionUrl`, env-based `siteConfig.url` |
| `.env.example` | New — documents deployment URL variable |
| `app/layout.tsx` | Uses resolved `siteConfig.url` for `metadataBase` and Open Graph (no code change required) |
| `app/sitemap.ts` | Uses resolved `siteConfig.url` (no code change required) |
| `app/robots.ts` | Uses resolved `siteConfig.url` for sitemap reference (no code change required) |
| `docs/BLUE_ATLANTIC_DEPLOYMENT_URL_SAFETY.md` | This document |

## Validation Results

### `npm run lint`

**Status:** See commit section (run at commit time)

### `npm run build`

**Status:** See commit section (run at commit time)

## Git Commit Hash

```
(Updated after commit)
```

Commit message: `BA-W-004A: add deployment URL safety configuration`
