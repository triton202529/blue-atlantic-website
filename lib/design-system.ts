/**
 * Blue Atlantic design system class maps.
 * Prefer these helpers for new UI; existing brand-* Tailwind tokens remain valid.
 */

export const containerClasses = {
  standard: "page-shell",
  wide: "page-shell page-shell-wide",
} as const;

export const typeClasses = {
  display: "type-display",
  page: "type-page",
  section: "type-section",
  card: "type-card",
  bodyLg: "type-body-lg",
  body: "type-body",
  bodySm: "type-body-sm",
  caption: "type-caption",
  eyebrow: "type-eyebrow",
  nav: "type-nav",
} as const;

export type CardVariant =
  | "standard"
  | "bordered"
  | "feature"
  | "compact"
  | "dark";

export const cardVariantClasses: Record<CardVariant, string> = {
  standard: "rounded-2xl border border-brand-border bg-brand-card shadow-brand",
  bordered:
    "rounded-2xl border border-brand-border/80 bg-brand-card shadow-none",
  feature:
    "rounded-2xl border border-brand-border bg-brand-card shadow-brand card-accent-neutral",
  compact:
    "rounded-2xl border border-brand-border bg-brand-card shadow-brand !p-5 md:!p-6",
  dark: "rounded-2xl border border-white/10 bg-brand-navy text-white shadow-brand",
};

export const cardPaddingClasses = {
  standard: "p-6 md:p-8",
  compact: "p-5 md:p-6",
} as const;

export const buttonBaseClasses =
  "ba-button inline-flex min-h-[var(--touch-min)] items-center justify-center rounded-xl px-6 py-3 text-sm font-medium transition-all duration-200 hover:-translate-y-px focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-atlantic-light focus-visible:ring-offset-2";

export const buttonVariantClasses = {
  primary:
    "bg-brand-navy text-white hover:bg-brand-navy-light border border-brand-navy shadow-brand",
  secondary:
    "bg-white text-brand-navy hover:bg-brand-soft border border-brand-border shadow-brand",
  ghost:
    "bg-transparent text-brand-navy hover:bg-brand-soft border border-brand-border/60",
} as const;

export const buttonSizeClasses = {
  default: "px-6 py-3 text-sm",
  lg: "px-8 py-3.5 text-sm",
} as const;
