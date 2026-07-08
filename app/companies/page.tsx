import type { Metadata } from "next";
import CompanyCard from "@/components/CompanyCard";
import CompanyStructureTable from "@/components/CompanyStructureTable";
import ContentSection from "@/components/ContentSection";
import HeroSection from "@/components/HeroSection";
import SectionHeader from "@/components/SectionHeader";
import { companies } from "@/lib/site";

export const metadata: Metadata = {
  title: "Companies",
  description:
    "Explore the Blue Atlantic ecosystem portfolio of platforms and initiatives across financial technology, workforce systems, intelligence, and capital direction.",
};

export default function CompaniesPage() {
  return (
    <>
      <HeroSection
        compact
        eyebrow="Ecosystem"
        headline="The Blue Atlantic ecosystem"
        supportingCopy="A portfolio of platforms and initiatives within the Blue Atlantic enterprise group, built with shared standards, disciplined execution, and long-term institutional purpose."
      />
      <ContentSection surface="blue">
        <SectionHeader
          label="Portfolio"
          title="Platforms and initiatives"
          description="Each platform and initiative in the Blue Atlantic ecosystem is developed with institutional discipline, Caribbean-first context, and connection to shared enterprise infrastructure."
        />
        <CompanyStructureTable className="mb-10" />
        <div className="grid gap-6 md:grid-cols-2">
          {companies.map((company) => (
            <CompanyCard
              key={company.id}
              id={company.id}
              name={company.name}
              category={company.category}
              statusLabel={company.statusLabel}
              accent={company.accent}
              description={company.detailDescription}
            />
          ))}
        </div>
      </ContentSection>
    </>
  );
}
