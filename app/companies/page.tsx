import type { Metadata } from "next";
import CompanyCard from "@/components/CompanyCard";
import CompanyStructureTable from "@/components/CompanyStructureTable";
import ContentSection from "@/components/ContentSection";
import HeroSection from "@/components/HeroSection";
import SectionHeader from "@/components/SectionHeader";
import { companies } from "@/lib/site";

export const metadata: Metadata = {
  title: "Platforms and systems",
  description:
    "Explore Blue Atlantic's portfolio of platforms and systems across financial technology, workforce systems, intelligence, and operational infrastructure.",
};

export default function CompaniesPage() {
  return (
    <>
      <HeroSection
        compact
        eyebrow="Ecosystem"
        headline="Blue Atlantic platforms and systems"
        supportingCopy="Blue Atlantic is developing a portfolio of platforms, systems, and future initiatives connected by shared standards, disciplined execution, and Caribbean-first product thinking."
      />
      <ContentSection surface="blue">
        <SectionHeader
          label="Portfolio"
          title="Platforms and systems"
          description="Each platform, system, and initiative in the Blue Atlantic portfolio is developed with institutional discipline, Caribbean-first context, and connection to shared enterprise infrastructure."
        />
        <CompanyStructureTable className="mb-8" />
        <div className="grid gap-5 md:grid-cols-2">
          {companies.map((company) => (
            <CompanyCard
              key={company.id}
              id={company.id}
              name={company.name}
              category={company.category}
              statusLabel={company.statusLabel}
              accent={company.accent}
              description={company.detailDescription}
              href={company.href}
              externalLink={company.externalLink}
              compact
            />
          ))}
        </div>
      </ContentSection>
    </>
  );
}
