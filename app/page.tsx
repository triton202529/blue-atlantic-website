import CompanyCard from "@/components/CompanyCard";
import CorporateBrandPanel from "@/components/CorporateBrandPanel";
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
        visual={<CorporateBrandPanel />}
      />

      <PageContainer>
        <SectionHeader
          label="Strategic focus"
          title="Strategic pillars"
          description="Blue Atlantic develops across four interconnected areas of enterprise infrastructure — each designed for disciplined long-term development and regional impact."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((pillar) => (
            <PillarCard
              key={pillar.title}
              label={pillar.label}
              title={pillar.title}
              description={pillar.description}
            />
          ))}
        </div>
      </PageContainer>

      <section className="border-t border-brand-border bg-brand-soft">
        <PageContainer>
          <SectionHeader
            label="Portfolio"
            title="The Blue Atlantic ecosystem"
            description="A parent company portfolio of platforms, systems, and initiatives — each developed with institutional discipline and long-term focus."
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {companies.map((company) => (
              <CompanyCard
                key={company.name}
                name={company.name}
                category={company.category}
                statusLabel={company.statusLabel}
                description={company.description}
                href={company.href}
              />
            ))}
          </div>
        </PageContainer>
      </section>

      <PageContainer>
        <SectionHeader
          label="Our approach"
          title="Why Blue Atlantic"
          description="A Caribbean-born enterprise group building modern systems with institutional discipline, governance-aware development, and long-term focus."
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {whyBlueAtlantic.map((item, index) => (
            <Card key={item.title} hover>
              <span className="text-sm font-medium tabular-nums text-brand-muted/40">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-2 text-base font-semibold text-brand-navy">
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
