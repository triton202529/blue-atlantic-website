import type { CompanyAccent } from "@/lib/card-themes";

export const homeHeroCopy = {
  eyebrow: "Blue Atlantic",
  headline:
    "Building modern enterprise infrastructure for the Caribbean and beyond.",
  supportingCopy:
    "Blue Atlantic is a Caribbean-born enterprise group building technology, financial infrastructure, workforce platforms, and intelligence systems. We develop practical products with disciplined execution and regional understanding.",
  primaryCta: { label: "Explore our platforms", href: "/companies" },
  secondaryCta: { label: "Start a conversation", href: "/contact" },
} as const;

export const homeBuildAreas = [
  {
    id: "financial-technology",
    title: "Financial technology",
    description:
      "Wallet and payment infrastructure shaped around Caribbean business realities and future service integrations.",
    href: "/companies#tropicash",
    featured: true,
    icon: "wallet" as const,
  },
  {
    id: "workforce-technology",
    title: "Workforce technology",
    description:
      "Hiring and labor systems that connect employers, job seekers, and regional opportunity.",
    href: "/companies#elitehire-solutions",
    featured: false,
    icon: "workforce" as const,
  },
  {
    id: "intelligence-systems",
    title: "Intelligence systems",
    description:
      "Decision-support tools for research, evaluation, oversight, and operational clarity.",
    href: "/companies#triton",
    featured: false,
    icon: "intelligence" as const,
  },
  {
    id: "enterprise-infrastructure",
    title: "Enterprise infrastructure",
    description:
      "Shared foundations, product architecture, and governance-aware systems for durable growth.",
    href: "/technology",
    featured: false,
    icon: "infrastructure" as const,
  },
] as const;

export type HomePlatformStatus =
  | "Available"
  | "In development"
  | "Coming soon"
  | "Internal system";

export interface HomePlatform {
  id: string;
  name: string;
  category: string;
  description: string;
  status: HomePlatformStatus;
  accent: CompanyAccent;
  href: string;
  externalLink?: { label: string; href: string };
}

export const homePlatforms: HomePlatform[] = [
  {
    id: "tropicash",
    name: "Tropicash",
    category: "Financial technology",
    description:
      "Digital wallet and payment infrastructure for Caribbean users and businesses.",
    status: "In development",
    accent: "fintech",
    href: "/companies#tropicash",
  },
  {
    id: "elitehire-solutions",
    name: "EliteHire Solutions / EliteHire Pro",
    category: "Workforce technology",
    description:
      "Job discovery, structured hiring, and employer tools for regional workforce needs.",
    status: "Available",
    accent: "workforce",
    href: "/companies#elitehire-solutions",
    externalLink: {
      label: "Visit EliteHire Pro",
      href: "https://elitehirepro.co/",
    },
  },
  {
    id: "triton",
    name: "TRITON",
    category: "Intelligence and research",
    description:
      "Internal intelligence and decision-support system for disciplined analysis and oversight.",
    status: "Internal system",
    accent: "intelligence",
    href: "/companies#triton",
  },
  {
    id: "sentinel",
    name: "Sentinel",
    category: "Financial oversight",
    description:
      "Centralized financial records, controls, and operating visibility for businesses.",
    status: "Available",
    accent: "oversight",
    href: "/companies#sentinel",
    externalLink: {
      label: "Visit Sentinel",
      href: "https://sentinel-xi-seven.vercel.app/",
    },
  },
];

export const homeAudiencePaths = [
  {
    title: "Build a technology system",
    description:
      "Automation, dashboards, internal tools, and product infrastructure for real operations.",
    href: "/technology",
    cta: "View technology",
    icon: "systems" as const,
  },
  {
    title: "Explore our platforms",
    description:
      "See Tropicash, EliteHire Pro, TRITON, Sentinel, and how the ecosystem is structured.",
    href: "/companies",
    cta: "View platforms",
    icon: "platforms" as const,
  },
  {
    title: "Discuss a partnership",
    description:
      "Start a conversation about collaboration, regional initiatives, or platform engagement.",
    href: "/contact",
    cta: "Contact Blue Atlantic",
    icon: "partnership" as const,
  },
  {
    title: "Learn about Blue Atlantic",
    description:
      "Understand the company direction, Caribbean focus, and long-term operating approach.",
    href: "/about",
    cta: "About Blue Atlantic",
    icon: "about" as const,
  },
] as const;

export const homeWhyPoints = [
  {
    title: "Caribbean-first execution",
    description:
      "Built for regional context, local realities, and serious Caribbean enterprise needs.",
    icon: "region" as const,
  },
  {
    title: "Enterprise discipline",
    description:
      "Shared standards, clear operating structure, and governance-aware product development.",
    icon: "discipline" as const,
  },
  {
    title: "Long-term institution building",
    description:
      "Focused platforms and capabilities designed for durable regional infrastructure.",
    icon: "institution" as const,
  },
] as const;
