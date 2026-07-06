import CompanyCard from "@/components/CompanyCard";
import ContentSection from "@/components/ContentSection";
import CorporateBrandPanel from "@/components/CorporateBrandPanel";
import HeroSection from "@/components/HeroSection";
import PartnershipCTA from "@/components/PartnershipCTA";
import PillarCard from "@/components/PillarCard";
import SectionHeader from "@/components/SectionHeader";
import Card from "@/components/Card";
import { whyAccentClasses } from "@/lib/card-themes";
import { companies, heroCopy, pillars, whyBlueAtlantic } from "@/lib/site";

export default function HomePage() {
  return (
    <>
      <HeroSection
        eyebrow="BLUE ATLANTIC"
        headline={heroCopy.headline}
        supportingCopy={heroCopy.supportingCopy}
        primaryCta={{ label: "Explore our ecosystem", href: "/companies" }}
        secondaryCta={{ label: "Start a conversation", href: "/contact" }}
        visual={<CorporateBrandPanel />}
      />

      <ContentSection surface="white">
        <SectionHeader
          label="Strategic focus"
          title="Strategic pillars"
          description="Four interconnected areas of enterprise infrastructure, each developed with disciplined execution, shared standards, and long-term regional purpose."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((pillar) => (
            <PillarCard
              key={pillar.title}
              label={pillar.label}
              accent={pillar.accent}
              title={pillar.title}
              description={pillar.description}
            />
          ))}
        </div>
      </ContentSection>

      <ContentSection surface="blue">
        <SectionHeader
          label="Portfolio"
          title="The Blue Atlantic ecosystem"
          description="Blue Atlantic is developing a portfolio of platforms, systems, and initiatives connected by shared enterprise infrastructure, disciplined execution, and a Caribbean-first growth strategy."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {companies.map((company) => (
            <CompanyCard
              key={company.name}
              name={company.name}
              category={company.category}
              statusLabel={company.statusLabel}
              accent={company.accent}
              description={company.description}
              href={company.href}
            />
          ))}
        </div>
      </ContentSection>

      <ContentSection surface="soft">
        <SectionHeader
          label="Our approach"
          title="Why Blue Atlantic"
          description="A Caribbean-born enterprise group committed to institution building, with disciplined execution, governance-aware development, and long-term focus."
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {whyBlueAtlantic.map((item, index) => (
            <Card
              key={item.title}
              hover
              className={whyAccentClasses[index % whyAccentClasses.length]}
            >
              <span className="text-sm font-semibold tabular-nums text-brand-atlantic/60">
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
      </ContentSection>

      <PartnershipCTA />
    </>
  );
}
