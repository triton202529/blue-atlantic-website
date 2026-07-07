# Blue Atlantic Corporate Website — Vercel Deployment (BA-W-006)

## Phase

**BA-W-006:** Vercel deployment

**Prior phase:** BA-W-005 — GitHub remote publish (`4d7df1a`)

## Purpose

Deploy the Blue Atlantic corporate website to Vercel from GitHub, using a temporary Vercel URL until `blueatlantic.com` is purchased and connected.

## GitHub Repository Used

https://github.com/triton202529/blue-atlantic-website

Branch: `main`

## Pre-Deploy Validation Results

### `git status`

- Branch: `main`
- Upstream: `origin/main`
- Remote: `https://github.com/triton202529/blue-atlantic-website.git`
- Working tree: clean

### `npm run lint`

**Status:** Passed (exit code 0)

### `npm run build`

**Status:** Passed (exit code 0) — 15 static routes generated

## Vercel Project Configuration

| Setting | Value |
|---------|-------|
| Framework preset | Next.js |
| Root directory | `.` (project root) |
| Build command | `npm run build` |
| Install command | `npm install` |
| Output directory | Default (Next.js) |

## Environment Variable

Set in Vercel project settings (Production, Preview, and Development):

```
NEXT_PUBLIC_SITE_URL=https://blueatlantic-website.vercel.app
```

**Important:** If Vercel assigns a different production URL (e.g. `blue-atlantic-website.vercel.app`), use the **actual assigned production URL** instead.

Do **not** set `NEXT_PUBLIC_SITE_URL` to `https://blueatlantic.com` until the domain is purchased and connected in Vercel.

### After domain purchase

1. Connect `blueatlantic.com` in Vercel → Project → Settings → Domains
2. Update `NEXT_PUBLIC_SITE_URL` to `https://blueatlantic.com`
3. Redeploy

## Vercel Dashboard Deployment Steps

1. Sign in at [vercel.com](https://vercel.com) with the GitHub account that owns `triton202529/blue-atlantic-website`
2. **Add New** → **Project**
3. Import `triton202529/blue-atlantic-website`
4. Confirm framework: **Next.js**
5. Add environment variable `NEXT_PUBLIC_SITE_URL` (see above)
6. Deploy

## Vercel CLI Alternative

If using CLI locally:

```powershell
cd C:\Users\akimw\blueatlantic-website
npx vercel login
npx vercel link
npx vercel env add NEXT_PUBLIC_SITE_URL production
# Enter: https://blueatlantic-website.vercel.app (or actual Vercel URL)
npx vercel --prod
```

CLI login requires interactive OAuth in the browser (no stored credentials were found on this machine during BA-W-006).

## Deployment Status

**Status:** Pending Vercel account authentication

Pre-deploy checks passed. GitHub repository is ready. Vercel CLI reported no existing credentials; deployment must be completed via Vercel dashboard import or CLI after `npx vercel login`.

URLs checked before deployment (404 — not yet deployed):

- `https://blueatlantic-website.vercel.app`
- `https://blue-atlantic-website.vercel.app`

## Vercel Project Name

Expected: `blue-atlantic-website` (matches GitHub repo name; Vercel default)

## Deployment URL

**To be confirmed after deploy.** Likely one of:

- `https://blue-atlantic-website.vercel.app`
- `https://blueatlantic-website.vercel.app`

Update `NEXT_PUBLIC_SITE_URL` to match the assigned production URL.

## Production Domain Status

| Domain | Status |
|--------|--------|
| `blueatlantic.com` | Planned, not purchased |
| Temporary Vercel URL | Use until domain is live |

## Routes to Verify After Deployment

| Route | Check |
|-------|-------|
| `/` | Homepage, hero, corporate panel, official seal |
| `/about` | Story card, official seal |
| `/companies` | Ecosystem portfolio |
| `/technology` | Technology focus areas |
| `/capital` | Informational disclaimer |
| `/newsroom` | Future-facing placeholder |
| `/contact` | Inquiry categories, no live form |
| `/legal` | Legal disclaimers |
| `/robots.txt` | Sitemap reference |
| `/sitemap.xml` | All public routes listed |

Also verify: navbar/footer links, mobile menu, official logo consistency (not BA monogram except favicon), OG image at `/brand/blue-atlantic-og.png`.

## Warnings or Issues

1. **Vercel auth required:** Deployment was not completed automatically because no Vercel credentials exist on this machine.
2. **URL naming:** Vercel may use `blue-atlantic-website` (hyphens) vs `blueatlantic-website`; align `NEXT_PUBLIC_SITE_URL` with the actual production URL.
3. **Rebuild after env change:** Changing `NEXT_PUBLIC_SITE_URL` requires a redeploy for metadata/sitemap/robots to reflect the new URL.

## Git Commit Hash

```
38d2939
```

Commit message: `BA-W-006: document Vercel deployment`
