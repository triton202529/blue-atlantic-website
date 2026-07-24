export type CompanyAccent =
  | "fintech"
  | "workforce"
  | "intelligence"
  | "oversight";

export type PillarAccent = "pillar-1" | "pillar-2" | "pillar-3" | "pillar-4";

export const companyAccentClasses: Record<CompanyAccent, string> = {
  fintech: "card-accent-fintech",
  workforce: "card-accent-workforce",
  intelligence: "card-accent-intelligence",
  oversight: "card-accent-oversight",
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

export type SectionSurface = "white" | "soft" | "blue" | "slate" | "navy";

export const sectionSurfaceClasses: Record<SectionSurface, string> = {
  white: "section-surface-white",
  soft: "section-surface-soft",
  blue: "section-surface-blue",
  slate: "section-surface-slate",
  navy: "section-surface-navy",
};

export const categoryVisualClasses: Record<CompanyAccent, string> = {
  fintech:
    "category-visual-fintech bg-gradient-to-r from-[#2f6b4f]/20 via-[#2f6b4f]/8 to-transparent",
  workforce:
    "category-visual-workforce bg-gradient-to-r from-brand-atlantic/22 via-brand-atlantic/10 to-transparent",
  intelligence:
    "category-visual-intelligence bg-gradient-to-r from-[#2a6cb8]/22 via-[#2a6cb8]/10 to-transparent",
  oversight:
    "category-visual-oversight bg-gradient-to-r from-[#4a6278]/22 via-[#4a6278]/10 to-transparent",
};
