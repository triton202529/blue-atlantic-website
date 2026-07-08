/** Intended production domain after purchase and Vercel connection. Not used as active URL until configured. */
export const intendedProductionUrl = "https://blueatlantic.com";

import type { CompanyAccent } from "@/lib/card-themes";

const defaultDeploymentUrl = "https://blueatlantic-website.vercel.app";

/** Resolves the public site URL from NEXT_PUBLIC_SITE_URL or deployment fallback. */
export function getSiteUrl(): string {
  const envUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (envUrl) {
    return envUrl.replace(/\/$/, "");
  }
  return defaultDeploymentUrl;
}

export const siteConfig = {
  name: "Blue Atlantic",
  title: "Blue Atlantic | Caribbean Enterprise Infrastructure",
  tagline: "Building modern enterprise infrastructure for the Caribbean and beyond.",
  description:
    "Blue Atlantic is a Caribbean-born enterprise group developing technology, financial infrastructure, workforce platforms, and intelligence systems with disciplined execution and global standards.",
  footerDescription:
    "A Caribbean-born enterprise group building technology, financial infrastructure, workforce platforms, and intelligence systems with disciplined execution and long-term institutional purpose.",
  keywords: [
    "Blue Atlantic",
    "Caribbean enterprise",
    "enterprise infrastructure",
    "financial technology",
    "workforce platforms",
    "intelligence systems",
    "Caribbean technology",
  ],
  get url() {
    return getSiteUrl();
  },
};

export const mainNavLinks = [
  { href: "/about", label: "About" },
  { href: "/companies", label: "Platforms" },
  { href: "/technology", label: "Technology" },
  { href: "/capital", label: "Capital" },
  { href: "/newsroom", label: "Newsroom" },
  { href: "/contact", label: "Contact" },
] as const;

export const footerNavLinks = [
  { href: "/", label: "Blue Atlantic" },
  { href: "/companies", label: "Platforms" },
  { href: "/technology", label: "Technology" },
  { href: "/capital", label: "Capital" },
  { href: "/contact", label: "Contact" },
  { href: "/legal", label: "Legal" },
] as const;

export const footerCompanyLinks = [
  { href: "/about", label: "About" },
  { href: "/newsroom", label: "Newsroom" },
  { href: "/legal", label: "Legal" },
] as const;

export const enterpriseAreas = [
  "Financial technology",
  "Workforce platforms",
  "Intelligence systems",
  "Enterprise infrastructure",
] as const;

export const heroCopy = {
  headline: "Building modern enterprise infrastructure for the Caribbean and beyond.",
  supportingCopy:
    "Blue Atlantic develops technology, financial infrastructure, workforce platforms, and intelligence systems for a new generation of Caribbean enterprise. Our work combines disciplined execution, regional understanding, and global-standard product development.",
  panelTitle: "Blue Atlantic Enterprise Group",
  panelCopy:
    "A Caribbean-born company building platforms and systems for long-term institutional development, regional opportunity, and modern enterprise infrastructure.",
} as const;

export const pillars = [
  {
    label: "01",
    accent: "pillar-1" as const,
    title: "Financial technology",
    description:
      "Payment and wallet infrastructure designed around regional realities, business needs, and future financial service integrations.",
  },
  {
    label: "02",
    accent: "pillar-2" as const,
    title: "Workforce technology",
    description:
      "Platforms that help connect employers, job seekers, and labor opportunities through structured, modern hiring systems.",
  },
  {
    label: "03",
    accent: "pillar-3" as const,
    title: "Intelligence systems",
    description:
      "Research, oversight, and decision-support systems built for disciplined evaluation, accountability, and operational clarity.",
  },
  {
    label: "04",
    accent: "pillar-4" as const,
    title: "Enterprise infrastructure",
    description:
      "Shared technology foundations, governance-aware systems, and product architecture designed for long-term institutional growth.",
  },
] as const;

export interface CompanyEntry {
  name: string;
  category: string;
  statusLabel: string;
  accent: CompanyAccent;
  description: string;
  detailDescription: string;
  href: string;
  id: string;
  externalLink?: {
    label: string;
    href: string;
  };
}

export const companies: CompanyEntry[] = [
  {
    name: "Tropicash",
    category: "Financial technology",
    statusLabel: "Platform",
    accent: "fintech" as const,
    description:
      "Tropicash is a digital wallet and payment infrastructure platform designed to help Caribbean users and businesses send and receive money locally and regionally, manage wallet balances, and support future financial service integrations.",
    detailDescription:
      "Tropicash is a digital wallet and payment infrastructure platform designed to help Caribbean users and businesses send and receive money locally and regionally, manage wallet balances, and support future financial service integrations.",
    href: "/companies#tropicash",
    id: "tropicash",
  },
  {
    name: "EliteHire Solutions",
    category: "Workforce technology",
    statusLabel: "Platform",
    accent: "workforce" as const,
    description:
      "EliteHire Solutions develops workforce technology for employers, job seekers, and regional labor visibility. Its platform, EliteHire Pro, supports job discovery, structured hiring, employer tools, and modern employment infrastructure across the Caribbean.",
    detailDescription:
      "EliteHire Solutions develops workforce technology for employers, job seekers, and regional labor visibility. Its platform, EliteHire Pro, supports job discovery, structured hiring, employer tools, and modern employment infrastructure across the Caribbean.",
    href: "/companies#elitehire-solutions",
    id: "elitehire-solutions",
    externalLink: {
      label: "Visit EliteHire Pro",
      href: "https://elitehirepro.co/",
    },
  },
  {
    name: "TRITON",
    category: "Intelligence & research",
    statusLabel: "Intelligence system",
    accent: "intelligence" as const,
    description:
      "TRITON is an intelligence and decision-support system focused on research, governance, evaluation, operational oversight, and disciplined analysis.",
    detailDescription:
      "TRITON is an intelligence and decision-support system focused on research, governance, evaluation, operational oversight, and disciplined analysis.",
    href: "/companies#triton",
    id: "triton",
  },
  {
    name: "Sentinel",
    category: "Financial oversight",
    statusLabel: "Oversight platform",
    accent: "oversight" as const,
    description:
      "Sentinel is a financial oversight and record keeping platform designed to help businesses track finances, activity, controls, and operating records from one centralized place. Sentinel supports stronger transparency, structured financial review, and enterprise accountability.",
    detailDescription:
      "Sentinel is a financial oversight and record keeping platform designed to help businesses track finances, activity, controls, and operating records from one centralized place. Sentinel supports stronger transparency, structured financial review, and enterprise accountability.",
    href: "/companies#sentinel",
    id: "sentinel",
    externalLink: {
      label: "Visit Sentinel",
      href: "https://sentinel-xi-seven.vercel.app/",
    },
  },
  {
    name: "Blue Atlantic Capital / IRD",
    category: "Capital & research",
    statusLabel: "Future direction",
    accent: "capital" as const,
    description:
      "Blue Atlantic Capital / IRD represents a future research and capital strategy direction focused on disciplined analysis, capital planning, regional opportunity research, institutional development, and long-term growth planning.",
    detailDescription:
      "Blue Atlantic Capital / IRD represents a future research and capital strategy direction focused on disciplined analysis, capital planning, regional opportunity research, institutional development, and long-term growth planning.",
    href: "/companies#blue-atlantic-capital",
    id: "blue-atlantic-capital",
  },
];

export const whyBlueAtlantic = [
  {
    title: "Caribbean-first execution",
    description:
      "Built with regional understanding and long-term commitment to Caribbean enterprise development. Systems are shaped by local context, not imported without purpose.",
  },
  {
    title: "Enterprise discipline",
    description:
      "Structured development across every platform initiative, with attention to governance, operational clarity, and sustainable execution.",
  },
  {
    title: "Long-term institution building",
    description:
      "Focused on durable platforms and enterprise infrastructure, not short-term ventures, speculative positioning, or hype-driven development.",
  },
  {
    title: "Product and governance alignment",
    description:
      "Technology, financial systems, and operational intelligence developed together with shared standards across the Blue Atlantic ecosystem.",
  },
  {
    title: "Systems designed for accountability",
    description:
      "Governance-aware development with audit visibility and structured controls that support enterprise accountability from the ground up.",
  },
  {
    title: "Regional ambition with global standards",
    description:
      "Caribbean-born enterprise group building systems designed for regional impact and the discipline expected from serious institutions.",
  },
] as const;
