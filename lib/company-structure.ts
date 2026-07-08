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
    role: "Digital wallet and payment infrastructure for sending and receiving money locally and regionally, supporting Caribbean users, businesses, wallet balances, and future financial service integrations.",
    position: "Platform",
    logoSrc: `${ecosystemBase}/tropicash-logo.png`,
    logoAlt: "Tropicash logo",
  },
  {
    id: "elitehire-solutions",
    name: "EliteHire Solutions",
    area: "Workforce technology",
    role: "Workforce platform supporting employers, job seekers, hiring infrastructure, and regional labor visibility.",
    position: "Ecosystem company",
    logoSrc: `${ecosystemBase}/elitehire-logo.png`,
    logoAlt: "EliteHire Solutions logo",
  },
  {
    id: "triton",
    name: "TRITON",
    area: "Intelligence and research",
    role: "Intelligence and decision-support system focused on research, governance, evaluation, and operational oversight.",
    position: "Intelligence system",
    logoSrc: `${ecosystemBase}/triton-logo.png`,
    logoAlt: "TRITON logo",
  },
  {
    id: "sentinel",
    name: "Sentinel",
    area: "Financial oversight",
    role: "Centralized financial oversight and record keeping platform for tracking business finances, activity, controls, and accountability across the Blue Atlantic ecosystem.",
    position: "Oversight platform",
    logoSrc: `${ecosystemBase}/sentinel-logo.png`,
    logoAlt: "Sentinel logo",
  },
  {
    id: "blue-atlantic-capital",
    name: "Blue Atlantic Capital / IRD",
    area: "Capital and research",
    role: "Research and capital strategy direction focused on disciplined analysis, capital planning, regional opportunity research, institutional development, and long-term growth planning.",
    position: "Future direction",
    logoSrc: brandAssets.companyLogoDisplay,
    logoAlt: "Blue Atlantic company logo",
    isSeal: true,
  },
];

export const companyStructurePreviewColumns = [
  {
    title: "Blue Atlantic",
    description: "Core company and enterprise group structure.",
    items: ["Blue Atlantic"],
  },
  {
    title: "Platforms",
    description: "Operating platforms within the Blue Atlantic ecosystem.",
    items: ["Tropicash", "EliteHire Solutions", "TRITON", "Sentinel"],
  },
  {
    title: "Future directions",
    description: "Research and capital strategy direction within Blue Atlantic.",
    items: ["Blue Atlantic Capital / IRD"],
  },
] as const;
