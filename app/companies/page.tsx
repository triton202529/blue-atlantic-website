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
        wide
        eyebrow="Ecosystem"
        headline="Blue Atlantic platforms and systems"
        supportingCopy="Blue Atlantic is developing a portfolio of platforms, systems, and future initiatives connected by shared standards, disciplined execution, and Caribbean-first product thinking."
        backgroundImage={{
          src: "/images/platforms/platforms-caribbean-hero.webp",
          sizes: "100vw",
          treatment: "platforms",
        }}
      />
      <div className="platforms-page-surface">
        <ContentSection
          surface="blue"
          dense
          className="!bg-transparent"
          containerClassName="!pt-10 !pb-8 md:!pt-12 md:!pb-10 lg:!pt-14 lg:!pb-12"
        >
          <SectionHeader
            label="Portfolio"
            title="Platforms and systems"
            description="Each platform, system, and initiative in the Blue Atlantic portfolio is developed with institutional discipline, Caribbean-first context, and connection to shared enterprise infrastructure."
            className="!mb-8 md:!mb-10"
          />
          <CompanyStructureTable className="ba-platforms-structure mb-10 md:mb-12 lg:mb-14" />
          <div className="ba-platforms-cards grid gap-5 md:grid-cols-2">
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
      </div>
    </>
  );
}
