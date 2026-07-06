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
