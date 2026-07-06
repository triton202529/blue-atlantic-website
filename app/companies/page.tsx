import type { Metadata } from "next";
import CompanyCard from "@/components/CompanyCard";
import HeroSection from "@/components/HeroSection";
import PageContainer from "@/components/PageContainer";
import SectionHeader from "@/components/SectionHeader";
import { companies } from "@/lib/site";

export const metadata: Metadata = {
  title: "Companies",
  description:
    "Explore the Blue Atlantic ecosystem of platforms and initiatives across financial technology, workforce systems, intelligence, and capital direction.",
};

export default function CompaniesPage() {
  return (
    <>
      <HeroSection
        compact
        eyebrow="Ecosystem"
        headline="The Blue Atlantic ecosystem"
        supportingCopy="Blue Atlantic supports a portfolio of platforms, systems, and initiatives across technology, workforce, intelligence, and capital direction — each developed with institutional discipline and long-term focus."
      />
      <PageContainer>
        <SectionHeader
          eyebrow="Portfolio"
          title="Platforms and initiatives"
          description="Each ecosystem company operates as a distinct platform or initiative within the Blue Atlantic enterprise group, sharing a commitment to modern systems and Caribbean-first development."
        />
        <div className="grid gap-6 md:grid-cols-2">
          {companies.map((company) => (
            <CompanyCard
              key={company.id}
              id={company.id}
              name={company.name}
              category={company.category}
              statusLabel={company.statusLabel}
              description={company.detailDescription}
            />
          ))}
        </div>
      </PageContainer>
    </>
  );
}
