# Blue Atlantic Design System

Reference for public website visual consistency. Preserve the approved institutional look; do not invent a new identity.

## Brand personality

Blue Atlantic should feel:

- serious
- institutional
- premium
- Caribbean-founded
- technology-oriented
- calm
- trustworthy
- consistent

It must not feel like:

- a generic AI-generated website
- a marketing agency
- a crypto platform
- a trendy startup landing page
- a freelancer portfolio

## Approved palette

Primary surfaces and accents stay within navy and institutional blue:

| Token | Role | Value |
| --- | --- | --- |
| `--color-navy` | Primary dark surface, nav, footer, hero | `#0a1628` |
| `--color-navy-elevated` | Elevated navy | `#142240` |
| `--color-blue` | Brand accent / labels | `#1e4d8c` |
| `--color-blue-hover` | Hover / focus highlight | `#2a6cb8` |
| `--color-page` | Default page background | `#ffffff` |
| `--color-surface-alt` | Soft alternate section | `#f4f7fb` |
| `--color-surface-blue` | Pale blue section | `#eef3f9` |
| `--color-surface-slate` | Cool slate section | `#e8edf4` |
| `--color-text` | Primary text | `#0a1628` |
| `--color-text-muted` | Secondary / supporting text | `#5a6478` |
| `--color-border` | Standard border | `#e2e8f0` |
| `--color-success` | Semantic success only | `#2f6b4f` |

Legacy `--brand-*` aliases map to these tokens and remain valid in Tailwind classes (`text-brand-navy`, `bg-brand-soft`, etc.).

## Prohibited orange usage

Do not introduce orange, terracotta, amber CTA fills, neon accents, or warm gold as brand color.

Green may appear only for semantic success or positive status. It is not a Blue Atlantic brand color.

## Typography hierarchy

Fonts: Geist Sans (UI), Geist Mono (technical only).

| Class | Use |
| --- | --- |
| `.type-display` | Homepage / large display headings |
| `.type-page` | Internal page titles |
| `.type-section` | Section titles |
| `.type-card` | Card titles |
| `.type-body-lg` | Lead paragraphs |
| `.type-body` | Standard body |
| `.type-body-sm` | Supporting / compact body |
| `.type-caption` | Fine print |
| `.type-eyebrow` / `.section-label` | Small uppercase labels |
| `.type-nav` | Navigation labels |
| `.prose-measure` | Controlled paragraph width |

Rules:

- Headings must read stronger than body copy.
- Keep line lengths controlled with `prose-measure` / max-width utilities.
- Heading line-height stays compact; body line-height stays comfortable.
- Do not introduce decorative display fonts.

## Spacing system

CSS spacing scale: `--space-1` through `--space-24`.

Layout standards:

- `--page-gutter` / `--page-gutter-md` for horizontal gutters
- `--section-spacing` for standard section rhythm
- `--section-spacing-dense` for denser marketing sections
- `--container-max` (`72rem`) and `--container-wide` (`88rem`)
- `--touch-min` (`2.75rem` / 44px) for interactive targets

Use `.page-shell` for standard centered containers and `.page-shell-wide` when a page already requires wider composition.

## Surface treatments

Reusable section surfaces:

- white (`.section-surface-white`)
- soft / pale blue-gray (`.section-surface-soft`)
- pale blue (`.section-surface-blue`)
- slate (`.section-surface-slate`)
- navy (`.section-surface-navy`)

Alternate surfaces for rhythm. Avoid adding new background colors without a clear institutional reason.

## Card variants

`Card` component variants (`lib/design-system.ts`):

| Variant | Use |
| --- | --- |
| `standard` | Default white card, thin border, subtle shadow |
| `bordered` | Quieter bordered surface |
| `feature` | Neutral accent emphasis |
| `compact` | Tighter padding |
| `dark` | Navy surface card |

Accent treatments (`card-accent-*`) remain for platform / pillar differentiation within the navy-blue family.

Do not turn every section into oversized cards.

## Button variants

`Button` component:

1. **Primary** - navy fill, light text
2. **Secondary** - white / light surface, visible border, dark text
3. **Ghost** - transparent with border (including on-dark overrides)

All buttons use approximately 44px minimum height (`--touch-min`).

`mailto:`, `tel:`, and absolute `http(s)` hrefs render as native anchors. Internal routes use Next.js `Link`.

## Section patterns

Reusable building blocks:

- `HeroSection` - navy internal/home heroes with eyebrow, title, copy, optional CTAs
- `ContentSection` - surface + page shell + optional pattern
- `SectionHeader` - eyebrow, heading, optional intro
- `EyebrowLabel` - consistent label treatment
- `PageContainer` - centered shell with standard or dense vertical padding

Homepage may keep a richer hero composition; internal pages should prefer the compact hero pattern.

## Responsive standards

- Stack grids on small screens.
- Keep gutters readable (`page-shell`).
- Platforms portfolio structure uses stacked rows on mobile and a table from `md` up.
- Avoid horizontal page overflow.
- Buttons and nav links must remain tappable.
- Do not force wide desktop tables onto phones.

## Accessibility standards

- Visible `:focus-visible` rings using brand blue
- Adequate contrast on navy and white surfaces
- Semantic heading order
- Decorative gradients / patterns marked `aria-hidden` where appropriate
- Prefer `prefers-reduced-motion` for hover transforms and card transitions
- Distinguish interactive cards (`hover`) from static cards

## Correct usage

- Navy heroes, white/pale blue content bands, restrained blue labels
- Shared `Button`, `Card`, `SectionHeader`, and `page-shell`
- Controlled copy width for long paragraphs
- Subtle shadows only

## Incorrect usage

- Orange or warm gold brand accents
- Loud gradients, glassmorphism, neon glow
- Oversized pill clusters and floating blobs
- Random stock imagery or generic AI illustrations
- Agency / freelancer visual language
- Rewriting identity during token cleanup phases

## Source files

- Tokens and utilities: `app/globals.css`
- Class maps: `lib/design-system.ts`
- Accent / surface maps: `lib/card-themes.ts`
- Core components: `components/Button.tsx`, `Card.tsx`, `ContentSection.tsx`, `HeroSection.tsx`, `SectionHeader.tsx`, `PageContainer.tsx`, `EyebrowLabel.tsx`, `GlobalNavigation.tsx`, `GlobalFooter.tsx`
