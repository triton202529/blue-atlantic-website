export type CompanyAccent =
  | "fintech"
  | "workforce"
  | "intelligence"
  | "oversight"
  | "capital";

export type PillarAccent = "pillar-1" | "pillar-2" | "pillar-3" | "pillar-4";

export const companyAccentClasses: Record<CompanyAccent, string> = {
  fintech: "card-accent-fintech",
  workforce: "card-accent-workforce",
  intelligence: "card-accent-intelligence",
  oversight: "card-accent-oversight",
  capital: "card-accent-capital",
};

export const pillarAccentClasses: Record<PillarAccent, string> = {
  "pillar-1": "card-accent-pillar-1",
  "pillar-2": "card-accent-pillar-2",
  "pillar-3": "card-accent-pillar-3",
  "pillar-4": "card-accent-pillar-4",
};

export const whyAccentClasses = [
  "card-accent-why-1",
  "card-accent-why-2",
  "card-accent-why-3",
  "card-accent-why-1",
  "card-accent-why-2",
  "card-accent-why-3",
] as const;

export type SectionSurface = "white" | "soft" | "blue" | "slate";

export const sectionSurfaceClasses: Record<SectionSurface, string> = {
  white: "section-surface-white",
  soft: "section-surface-soft",
  blue: "section-surface-blue",
  slate: "section-surface-slate",
};

export const categoryVisualClasses: Record<CompanyAccent, string> = {
  fintech:
    "category-visual-fintech bg-gradient-to-r from-brand-atlantic/20 via-brand-atlantic/10 to-transparent",
  workforce:
    "category-visual-workforce bg-gradient-to-r from-[#4a6278]/25 via-[#4a6278]/10 to-transparent",
  intelligence:
    "category-visual-intelligence bg-gradient-to-r from-brand-navy-light/30 via-brand-navy-light/10 to-transparent",
  oversight:
    "category-visual-oversight bg-gradient-to-r from-[#3d5a80]/25 via-[#3d5a80]/10 to-transparent",
  capital:
    "category-visual-capital bg-gradient-to-r from-[#8a7d5c]/25 via-[#8a7d5c]/10 to-transparent",
};
