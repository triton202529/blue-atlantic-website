import type { Metadata } from "next";
import CompanyCard from "@/components/CompanyCard";
import HeroSection from "@/components/HeroSection";
import PageContainer from "@/components/PageContainer";
import SectionHeader from "@/components/SectionHeader";

export const metadata: Metadata = {
  title: "Companies",
  description:
    "Explore the Blue Atlantic ecosystem of platforms and initiatives across financial technology, workforce systems, intelligence, and capital direction.",
};

const ecosystemCompanies = [
  {
    id: "tropicash",
    name: "Tropicash",
    description:
      "A digital wallet and payment infrastructure platform designed for Caribbean users, businesses, and future financial services integrations. Tropicash represents Blue Atlantic's financial technology direction — building modern payment systems with regional context.",
  },
  {
    id: "elitehire-solutions",
    name: "EliteHire Solutions",
    description:
      "A workforce technology platform helping connect employers, job seekers, and regional labor opportunities. EliteHire Solutions supports structured hiring, workforce visibility, and modern employment infrastructure for the Caribbean.",
  },
  {
    id: "triton",
    name: "TRITON",
    description:
      "A research, intelligence, and decision-support system focused on disciplined analysis, governance, and operational oversight. TRITON supports structured evaluation, institutional review, and enterprise decision-making processes.",
  },
  {
    id: "sentinel",
    name: "Sentinel",
    description:
      "A financial oversight and audit intelligence platform designed to support visibility, controls, and enterprise accountability. Sentinel is being developed to strengthen operational transparency and structured financial review.",
  },
  {
    id: "blue-atlantic-capital",
    name: "Blue Atlantic Capital / IRD",
    description:
      "A future direction for capital, research, and investment strategy focused on disciplined long-term growth and institutional development. This initiative represents Blue Atlantic's research and capital direction — not a live investment product or advisory service.",
  },
];

export default function CompaniesPage() {
  return (
    <>
      <HeroSection
        headline="The Blue Atlantic ecosystem"
        supportingCopy="Blue Atlantic supports a portfolio of platforms, systems, and initiatives across technology, workforce, intelligence, and capital direction — each developed with institutional discipline and long-term focus."
      />
      <PageContainer>
        <SectionHeader
          title="Platforms and initiatives"
          description="Each ecosystem company operates as a distinct platform or initiative within the Blue Atlantic enterprise group, sharing a commitment to modern systems and Caribbean-first development."
        />
        <div className="grid gap-6 md:grid-cols-2">
          {ecosystemCompanies.map((company) => (
            <CompanyCard
              key={company.id}
              id={company.id}
              name={company.name}
              description={company.description}
            />
          ))}
        </div>
      </PageContainer>
    </>
  );
}
