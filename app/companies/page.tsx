import type { Metadata } from "next";
import CompanyCard from "@/components/CompanyCard";
import ContentSection from "@/components/ContentSection";
import HeroSection from "@/components/HeroSection";
import ImageBand from "@/components/ImageBand";
import SectionHeader from "@/components/SectionHeader";
import { visualAssetAlt, visualAssets } from "@/lib/visual-assets";
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
        <ImageBand
          src={visualAssets.portfolio}
          alt={visualAssetAlt.portfolio}
          height="md"
          overlay="navy"
          className="mb-10"
        >
          <p className="max-w-lg text-sm text-white/90 md:text-base">
            Shared enterprise infrastructure connects financial technology,
            workforce platforms, intelligence systems, and future research
            direction across the Blue Atlantic ecosystem.
          </p>
        </ImageBand>
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
