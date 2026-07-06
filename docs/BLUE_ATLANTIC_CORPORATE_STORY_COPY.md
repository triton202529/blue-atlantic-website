# Blue Atlantic Corporate Website — Corporate Story and Copy (BA-W-003)

## Phase

**BA-W-003:** Refine Blue Atlantic corporate story and public copy

**Prior phase:** BA-W-002B — Color depth and copy cleanup (`4193c73f4f0625388a71519dd06e80376677bc2f`)

## Purpose

Strengthen Blue Atlantic's public messaging with clearer strategic positioning, founder-level institutional language, and a more distinctive company story — without overclaiming regulated status or returning to generic startup copy.

## Pages Refined

| Page | Key improvements |
|------|------------------|
| `/` (Homepage) | Hero copy, pillars, ecosystem, Why Blue Atlantic themes |
| `/about` | Company story sections including "Why the Caribbean" |
| `/companies` | Portfolio language, refined platform descriptions |
| `/technology` | Product engineering focus, secure-by-design, governance-aware |
| `/capital` | Stronger informational disclaimer, institutional analysis framing |
| `/contact` | Developer/business category, clearer inquiry types |
| `/newsroom` | Polished placeholder copy |
| `/legal` | Expanded disclaimers (no financial advice, no banking/brokerage, future services) |

## Main Messaging Improvements

### Core positioning

Blue Atlantic is positioned as a Caribbean-born enterprise group building modern technology, financial infrastructure, workforce platforms, and intelligence systems for long-term regional development and global-standard execution.

### Homepage

- Hero supporting copy emphasizes new generation of Caribbean enterprise
- Hero panel copy focuses on institutional development and regional opportunity
- Strategic pillars use intentional, domain-specific language
- Ecosystem section emphasizes connected portfolio and Caribbean-first growth strategy
- Why Blue Atlantic cards use sharper themes (Caribbean-first execution, enterprise discipline, etc.)

### About

- Four story sections: Who we are, What we build, Why the Caribbean, Long-term direction
- Intro card emphasizes ecosystem connected by shared infrastructure and product discipline

### Companies

- Portfolio framing with shared standards and long-term purpose
- Refined platform descriptions per ecosystem company

### Technology

- Six focus areas: product engineering, secure-by-design, governance-aware, internal platforms, operational intelligence, maintainable architecture
- Caribbean-first product development emphasized

### Capital

- Clear non-operational framing
- Strengthened disclaimer: informational only, no investment advice, no solicitation, no regulated service

## Copy Guardrails Preserved

- No "parent company" in visible copy
- No licensed bank, broker, or investment manager claims (except in legal disclaimers)
- No guaranteed returns, FDIC, live trading, or promotional financial language
- Capital page clearly marked as future direction / informational only
- Technology page qualifies secure infrastructure as design intent, not certification

## Terms Avoided in Promotional Copy

- parent company
- revolutionary / disruptive finance
- guaranteed / risk-free
- live trading / live payments
- bank-grade (unqualified)
- AI-powered / world-changing hype language

## Risky Term Search Results

Searched `app/`, `components/`, `lib/` for promotional-risk terms.

Terms appearing **only in legal disclaimers or informational notices** (acceptable):

- investment advice (legal, capital disclaimer)
- licensed bank / broker / asset manager (legal disclaimer)
- regulated (legal/capital/technology qualification context)

Terms with **no promotional matches**:

- parent company
- guaranteed returns
- FDIC
- live trading
- brokerage (as a service claim outside legal disclaimer)

## Validation Results

### `npm run lint`

**Status:** Passed (exit code 0)

### `npm run build`

**Status:** Passed (exit code 0)

## Git Commit Hash

```
79384f022a29a3d097c6d2d29277908128a4c33e
```

Commit message: `BA-W-003: refine Blue Atlantic corporate story and public copy`

## Files Changed

- `lib/site.ts` — Central copy: hero, pillars, companies, whyBlueAtlantic, siteConfig
- `components/CorporateBrandPanel.tsx` — Hero panel from site config
- `components/PartnershipCTA.tsx` — Refined CTA copy
- `app/page.tsx` — Homepage section copy
- `app/about/page.tsx` — Company story sections
- `app/companies/page.tsx` — Portfolio framing
- `app/technology/page.tsx` — Technology focus areas
- `app/capital/page.tsx` — Capital copy and disclaimer
- `app/contact/page.tsx` — Inquiry categories
- `app/newsroom/page.tsx` — Newsroom placeholder
- `app/legal/page.tsx` — Expanded legal sections
