# Blue Atlantic Corporate Website — Foundation (BA-W-000)

## Purpose

This project is the standalone public corporate website for **Blue Atlantic**, the parent enterprise group behind platforms and initiatives such as Tropicash, EliteHire Solutions, TRITON, Sentinel, Blue Atlantic Capital, and IRD.

This is **not** the Tropicash wallet app, Tropicash corporate site, TRITON project, or EliteHire Pro. It is a separate investor-ready corporate presence for the Blue Atlantic parent brand.

## Project Path

```
C:\Users\akimw\blueatlantic-website
```

## Scope Rules

### In Scope (This Phase)

- Static public pages only
- Next.js App Router with React, TypeScript, Tailwind CSS, ESLint
- Reusable component structure
- Corporate brand presentation
- Placeholder pages for future content areas

### Out of Scope (Do Not Add)

- Backend logic
- Authentication / OAuth
- Supabase or any database
- Payments or banking integrations
- APIs or broker integrations
- Analytics
- Live forms or form submission
- KYC or treasury logic
- Live execution or trading logic

### Protected Paths (Do Not Modify)

- `C:\Users\akimw\tropicash`
- `C:\Users\akimw\tropicash-website`
- `C:\Users\akimw\triton`
- `C:\Users\akimw\triton-labs`
- `C:\dev\elitehire-pro`

## Folder Creation Step

1. Navigate to `C:\Users\akimw`
2. Create folder `blueatlantic-website`
3. Scaffold Next.js project directly in that folder (not nested)
4. Confirm working directory is exactly `C:\Users\akimw\blueatlantic-website`

**Result:** Folder created and confirmed as project root.

## Routes Created

| Route | Description |
|-------|-------------|
| `/` | Homepage with hero, pillars, ecosystem preview, why Blue Atlantic, partnership CTA |
| `/about` | About Blue Atlantic |
| `/companies` | Ecosystem companies and platforms |
| `/technology` | Technology and innovation division |
| `/capital` | Capital / IRD placeholder |
| `/newsroom` | Newsroom placeholder |
| `/contact` | Static contact page (no live form) |
| `/legal` | Legal placeholder and disclaimers |

## Components Created

| Component | Purpose |
|-----------|---------|
| `GlobalNavigation` | Main site navigation |
| `GlobalFooter` | Footer navigation and branding |
| `PageContainer` | Consistent page width and padding |
| `HeroSection` | Reusable hero with headline, copy, CTAs |
| `SectionHeader` | Section titles and descriptions |
| `CompanyCard` | Ecosystem company cards |
| `PillarCard` | Strategic pillar cards |
| `Button` | Primary, secondary, and ghost link buttons |
| `Card` | Base card container |

## Supporting Files

| File | Purpose |
|------|---------|
| `lib/site.ts` | Site config, navigation links, content data |
| `app/globals.css` | Design system CSS variables and Tailwind theme |
| `app/layout.tsx` | Root layout with navigation and footer |

## Brand Direction

- **Positioning:** Caribbean-born enterprise group building modern technology, financial infrastructure, workforce platforms, and intelligence systems
- **Tone:** Institutional, serious, investor-ready, government/partner friendly, long-term focused
- **Visual:** Deep Atlantic navy, white/off-white surfaces, subtle blue gradients, premium rounded cards, elegant typography, minimal motion
- **Avoid:** Flashy, crypto-like, childish, or overly animated presentation

## Content Guardrails

### Allowed Language

- building, developing, designed to
- platform, ecosystem, future initiatives
- research direction, enterprise infrastructure
- long-term development, Caribbean-first, global standards
- disciplined systems, operational intelligence

### Avoid Language

- licensed bank, regulated investment manager
- guaranteed returns, brokerage, asset manager
- deposit funds, send money now, live trading
- FDIC, insured deposits, live financial advice
- bank-grade (unless carefully qualified)

## What This Phase Does Not Include

- Backend services or server actions
- Database or external API integration
- Authentication, payments, or KYC
- Live contact forms or analytics
- Regulated financial service claims
- Production deployment configuration

## Validation Commands

```bash
cd C:\Users\akimw\blueatlantic-website
npm run lint
npm run build
git status
```

## Validation Results

### `npm run lint`

**Status:** Passed (exit code 0)

### `npm run build`

**Status:** Passed (exit code 0)

All 8 routes generated as static content:

- `/`, `/about`, `/companies`, `/technology`, `/capital`, `/newsroom`, `/contact`, `/legal`

## Git Commit Hash

```
cfcf9f2de80f5ef5238b43f7cd3e938b426b7bdb
```

Commit message: `BA-W-000: create Blue Atlantic corporate website foundation`

## Local Development

```bash
cd C:\Users\akimw\blueatlantic-website
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.
