import { brandAssets } from "@/lib/brand";

export interface CompanyStructureRow {
  id: string;
  name: string;
  area: string;
  role: string;
  position: string;
  logoSrc: string;
  logoAlt: string;
  isSeal?: boolean;
}

const ecosystemBase = "/brand/ecosystem";

export const companyStructureIntro =
  "Blue Atlantic operates as the enterprise group behind a portfolio of platforms, systems, and future initiatives developed with shared standards, disciplined execution, and long-term institutional purpose.";

export const companyStructureRows: CompanyStructureRow[] = [
  {
    id: "blue-atlantic",
    name: "Blue Atlantic",
    area: "Enterprise group",
    role: "Company structure, shared standards, governance, product direction, and long-term institutional development.",
    position: "Core company",
    logoSrc: brandAssets.companyLogoDisplay,
    logoAlt: "Blue Atlantic company logo",
    isSeal: true,
  },
  {
    id: "tropicash",
    name: "Tropicash",
    area: "Financial technology",
    role: "Digital wallet and payment infrastructure platform designed to help Caribbean users and businesses send and receive money locally and regionally, manage wallet balances, and support future financial service integrations.",
    position: "Platform",
    logoSrc: `${ecosystemBase}/tropicash-logo.png`,
    logoAlt: "Tropicash logo",
  },
  {
    id: "elitehire-solutions",
    name: "EliteHire Solutions / EliteHire Pro",
    area: "Workforce technology",
    role: "Workforce technology platform supporting employers, job seekers, job discovery, structured hiring, employer tools, and regional labor visibility through EliteHire Pro.",
    position: "Platform",
    logoSrc: `${ecosystemBase}/elitehire-logo.png`,
    logoAlt: "EliteHire Solutions logo",
  },
  {
    id: "triton",
    name: "TRITON",
    area: "Intelligence and research",
    role: "Intelligence and decision-support system focused on research, governance, evaluation, operational oversight, and disciplined analysis.",
    position: "Intelligence system",
    logoSrc: `${ecosystemBase}/triton-logo.png`,
    logoAlt: "TRITON logo",
  },
  {
    id: "sentinel",
    name: "Sentinel",
    area: "Financial oversight",
    role: "Centralized financial oversight and record keeping platform designed to help businesses track finances, activity, controls, and operating records from one place.",
    position: "Oversight platform",
    logoSrc: `${ecosystemBase}/sentinel-logo.png`,
    logoAlt: "Sentinel logo",
  },
];

export const companyStructurePreviewColumns = [
  {
    title: "Blue Atlantic",
    description: "Core company and enterprise technology group.",
    items: ["Blue Atlantic"],
  },
  {
    title: "Platforms and systems",
    description: "Operating platforms and systems within the Blue Atlantic ecosystem.",
    items: ["Tropicash", "EliteHire Solutions / EliteHire Pro", "TRITON", "Sentinel"],
  },
  {
    title: "Technology capability",
    description: "Shared technology capability across Blue Atlantic.",
    items: [
      "Automation systems",
      "Dashboards",
      "Financial infrastructure tools",
      "Workforce systems",
      "Proprietary intelligence tools",
    ],
  },
] as const;
