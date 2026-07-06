export const siteConfig = {
  name: "Blue Atlantic",
  tagline: "Building modern enterprise infrastructure for the Caribbean and beyond.",
  description:
    "Blue Atlantic develops technology, financial infrastructure, workforce platforms, and intelligence systems designed for the Caribbean and built for global standards.",
  footerDescription:
    "A Caribbean-born enterprise group developing technology, financial infrastructure, workforce platforms, and intelligence systems with disciplined execution and long-term institutional focus.",
};

export const mainNavLinks = [
  { href: "/about", label: "About" },
  { href: "/companies", label: "Companies" },
  { href: "/technology", label: "Technology" },
  { href: "/capital", label: "Capital" },
  { href: "/newsroom", label: "Newsroom" },
  { href: "/contact", label: "Contact" },
] as const;

export const footerNavLinks = [
  { href: "/", label: "Blue Atlantic" },
  { href: "/companies", label: "Companies" },
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

export const pillars = [
  {
    label: "01",
    category: "FinTech",
    title: "Financial technology",
    description:
      "Digital payment infrastructure, wallet platforms, and financial systems designed to support Caribbean users, businesses, and future service integrations.",
  },
  {
    label: "02",
    category: "Workforce",
    title: "Workforce technology",
    description:
      "Platforms that connect employers, job seekers, and regional labor opportunities through modern workforce tools and structured hiring systems.",
  },
  {
    label: "03",
    category: "Intelligence",
    title: "Intelligence systems",
    description:
      "Research, decision-support, and operational intelligence platforms built for disciplined analysis, governance, and enterprise oversight.",
  },
  {
    label: "04",
    category: "Infrastructure",
    title: "Enterprise infrastructure",
    description:
      "Secure digital infrastructure, product engineering, and platform systems designed for long-term institutional development and regional growth.",
  },
] as const;

export const companies = [
  {
    name: "Tropicash",
    category: "Financial technology",
    statusLabel: "Platform",
    description:
      "Digital wallet and payment infrastructure platform for Caribbean users, businesses, and future financial services integrations.",
    detailDescription:
      "A digital wallet and payment infrastructure platform designed for Caribbean users, businesses, and future financial services integrations. Tropicash represents Blue Atlantic's financial technology direction — building modern payment systems with regional context.",
    href: "/companies#tropicash",
    id: "tropicash",
  },
  {
    name: "EliteHire Solutions",
    category: "Workforce technology",
    statusLabel: "Ecosystem company",
    description:
      "Workforce technology platform helping connect employers, job seekers, and regional labor opportunities.",
    detailDescription:
      "A workforce technology platform helping connect employers, job seekers, and regional labor opportunities. EliteHire Solutions supports structured hiring, workforce visibility, and modern employment infrastructure for the Caribbean.",
    href: "/companies#elitehire-solutions",
    id: "elitehire-solutions",
  },
  {
    name: "TRITON",
    category: "Intelligence & research",
    statusLabel: "Intelligence system",
    description:
      "Research, intelligence, and decision-support systems focused on disciplined analysis, governance, and operational oversight.",
    detailDescription:
      "A research, intelligence, and decision-support system focused on disciplined analysis, governance, and operational oversight. TRITON supports structured evaluation, institutional review, and enterprise decision-making processes.",
    href: "/companies#triton",
    id: "triton",
  },
  {
    name: "Sentinel",
    category: "Financial oversight",
    statusLabel: "Oversight platform",
    description:
      "Financial oversight and audit intelligence platform designed to support visibility, controls, and enterprise accountability.",
    detailDescription:
      "A financial oversight and audit intelligence platform designed to support visibility, controls, and enterprise accountability. Sentinel is being developed to strengthen operational transparency and structured financial review.",
    href: "/companies#sentinel",
    id: "sentinel",
  },
  {
    name: "Blue Atlantic Capital / IRD",
    category: "Capital & research",
    statusLabel: "Future direction",
    description:
      "Future capital, research, and investment direction focused on disciplined long-term growth and institutional development.",
    detailDescription:
      "A future direction for capital, research, and investment strategy focused on disciplined long-term growth and institutional development. This initiative represents Blue Atlantic's research and capital direction — not a live investment product or advisory service.",
    href: "/companies#blue-atlantic-capital",
    id: "blue-atlantic-capital",
  },
] as const;

export const whyBlueAtlantic = [
  {
    title: "Caribbean-first ambition",
    description:
      "Built with regional context and long-term commitment to Caribbean enterprise development — not imported models applied without understanding.",
  },
  {
    title: "Disciplined execution",
    description:
      "Structured development approach focused on governance, operational clarity, and sustainable growth across every platform initiative.",
  },
  {
    title: "Long-term institution building",
    description:
      "Focused on building enduring platforms and enterprise infrastructure, not short-term ventures or speculative positioning.",
  },
  {
    title: "Modern systems",
    description:
      "Technology platforms engineered with contemporary standards, clean architecture, and scalable design for regional and global relevance.",
  },
  {
    title: "Governance-aware development",
    description:
      "Systems designed with operational oversight, audit visibility, and structured controls — supporting enterprise accountability from the ground up.",
  },
  {
    title: "Regional growth with global standards",
    description:
      "Caribbean-born enterprise group building systems designed for regional impact and international credibility.",
  },
] as const;
