import { brandAssets } from "@/lib/brand";

export type EcosystemLogoTreatment = "light" | "dark" | "neutral";

export interface EcosystemLogoConfig {
  src: string;
  alt: string;
  treatment: EcosystemLogoTreatment;
}

const ecosystemLogoBase = "/brand/ecosystem";

export const ecosystemLogos: Record<string, EcosystemLogoConfig> = {
  tropicash: {
    src: `${ecosystemLogoBase}/tropicash-logo.png`,
    alt: "Tropicash logo",
    treatment: "light",
  },
  "elitehire-solutions": {
    src: `${ecosystemLogoBase}/elitehire-logo.png`,
    alt: "EliteHire Solutions logo",
    treatment: "dark",
  },
  triton: {
    src: `${ecosystemLogoBase}/triton-logo.png`,
    alt: "TRITON logo",
    treatment: "dark",
  },
  sentinel: {
    src: `${ecosystemLogoBase}/sentinel-logo.png`,
    alt: "Sentinel logo",
    treatment: "dark",
  },
  "blue-atlantic-capital": {
    src: brandAssets.companyLogoDisplay,
    alt: "Blue Atlantic company logo",
    treatment: "neutral",
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
