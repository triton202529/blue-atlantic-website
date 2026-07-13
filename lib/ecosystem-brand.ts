export type EcosystemLogoTreatment = "light" | "dark" | "neutral";

export interface EcosystemLogoSize {
  maxWidth: number;
  maxHeight: number;
}

export interface EcosystemLogoConfig {
  src: string;
  alt: string;
  treatment: EcosystemLogoTreatment;
  size: EcosystemLogoSize;
}

const ecosystemLogoBase = "/brand/ecosystem";

export const ecosystemLogoCells = {
  strip: {
    mobile: { width: 96, height: 52 },
    desktop: { width: 112, height: 56 },
  },
  cardHeader: {
    mobile: { height: 76 },
    desktop: { height: 84 },
  },
} as const;

export const ecosystemLogos: Record<string, EcosystemLogoConfig> = {
  tropicash: {
    src: `${ecosystemLogoBase}/tropicash-logo.png`,
    alt: "Tropicash logo",
    treatment: "light",
    size: { maxWidth: 86, maxHeight: 34 },
  },
  "elitehire-solutions": {
    src: `${ecosystemLogoBase}/elitehire-logo.png`,
    alt: "EliteHire Solutions logo",
    treatment: "dark",
    size: { maxWidth: 42, maxHeight: 42 },
  },
  triton: {
    src: `${ecosystemLogoBase}/triton-logo.png`,
    alt: "TRITON logo",
    treatment: "dark",
    size: { maxWidth: 92, maxHeight: 36 },
  },
  sentinel: {
    src: `${ecosystemLogoBase}/sentinel-logo.png`,
    alt: "Sentinel logo",
    treatment: "dark",
    size: { maxWidth: 86, maxHeight: 32 },
  },
};

export function getEcosystemLogo(
  companyId?: string
): EcosystemLogoConfig | null {
  if (!companyId) {
    return null;
  }

  return ecosystemLogos[companyId] ?? null;
}

export const ecosystemCompanyIds = Object.keys(ecosystemLogos);

export const ecosystemLogoTreatmentClasses: Record<
  EcosystemLogoTreatment,
  string
> = {
  light: "bg-[#f7f5ef]",
  dark: "bg-brand-navy",
  neutral: "bg-brand-surface-blue/90",
};
