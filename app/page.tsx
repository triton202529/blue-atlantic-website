import CompanyCard from "@/components/CompanyCard";
import EcosystemVisual from "@/components/EcosystemVisual";
import HeroSection from "@/components/HeroSection";
import PageContainer from "@/components/PageContainer";
import PartnershipCTA from "@/components/PartnershipCTA";
import PillarCard from "@/components/PillarCard";
import SectionHeader from "@/components/SectionHeader";
import Card from "@/components/Card";
import { companies, pillars, whyBlueAtlantic } from "@/lib/site";

export default function HomePage() {
  return (
    <>
      <HeroSection
        eyebrow="BLUE ATLANTIC"
        headline="Building modern enterprise infrastructure for the Caribbean and beyond."
        supportingCopy="Blue Atlantic develops technology, financial infrastructure, workforce platforms, and intelligence systems with disciplined execution, regional purpose, and global standards."
        primaryCta={{ label: "Explore our ecosystem", href: "/companies" }}
        secondaryCta={{ label: "Start a conversation", href: "/contact" }}
        visual={<EcosystemVisual />}
      />

      <PageContainer>
        <SectionHeader
          eyebrow="Strategic focus"
          title="Strategic pillars"
          description="Blue Atlantic develops across four interconnected areas of enterprise infrastructure — each designed for disciplined long-term development and regional impact."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((pillar) => (
            <PillarCard
              key={pillar.title}
              label={pillar.label}
              category={pillar.category}
              title={pillar.title}
              description={pillar.description}
            />
          ))}
        </div>
      </PageContainer>

      <section className="relative bg-brand-soft">
        <div className="section-divider absolute inset-x-0 top-0" />
        <PageContainer>
          <SectionHeader
            eyebrow="Portfolio"
            title="The Blue Atlantic ecosystem"
            description="A parent company portfolio of platforms, systems, and initiatives — each developed with institutional discipline and connected through shared enterprise infrastructure."
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {companies.map((company, index) => (
              <CompanyCard
                key={company.name}
                name={company.name}
                category={company.category}
                statusLabel={company.statusLabel}
                description={company.description}
                href={company.href}
                featured={index === 0}
              />
            ))}
          </div>
        </PageContainer>
      </section>

      <PageContainer>
        <SectionHeader
          eyebrow="Our approach"
          title="Why Blue Atlantic"
          description="A Caribbean-born enterprise group building modern systems with institutional discipline, governance-aware development, and long-term focus."
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {whyBlueAtlantic.map((item, index) => (
            <Card key={item.title} hover className="relative">
              <span className="absolute right-6 top-6 text-xs font-medium tabular-nums text-brand-muted/40">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="pr-8 text-base font-semibold text-brand-navy">
                {item.title}
              </h3>
              <p className="mt-2.5 text-sm leading-relaxed text-brand-muted">
                {item.description}
              </p>
            </Card>
          ))}
        </div>
      </PageContainer>

      <PartnershipCTA />
    </>
  );
}
