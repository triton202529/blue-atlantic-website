import Button from "@/components/Button";
import CompanyCard from "@/components/CompanyCard";
import HeroSection from "@/components/HeroSection";
import PageContainer from "@/components/PageContainer";
import PillarCard from "@/components/PillarCard";
import SectionHeader from "@/components/SectionHeader";
import Card from "@/components/Card";
import { companies, pillars, siteConfig, whyBlueAtlantic } from "@/lib/site";

export default function HomePage() {
  return (
    <>
      <HeroSection
        headline="Building the next generation of Caribbean enterprise infrastructure."
        supportingCopy={siteConfig.description}
        primaryCta={{ label: "Explore our ecosystem", href: "/companies" }}
        secondaryCta={{ label: "Contact Blue Atlantic", href: "/contact" }}
      />

      <PageContainer>
        <SectionHeader
          title="Strategic pillars"
          description="Blue Atlantic develops across four interconnected areas of enterprise infrastructure, each designed for disciplined long-term development."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((pillar) => (
            <PillarCard
              key={pillar.title}
              title={pillar.title}
              description={pillar.description}
            />
          ))}
        </div>
      </PageContainer>

      <section className="bg-brand-soft">
        <PageContainer>
          <SectionHeader
            title="Our ecosystem"
            description="Blue Atlantic supports a growing portfolio of platforms and initiatives across technology, workforce, intelligence, and capital direction."
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {companies.map((company) => (
              <CompanyCard
                key={company.name}
                name={company.name}
                description={company.description}
                href={company.href}
              />
            ))}
          </div>
        </PageContainer>
      </section>

      <PageContainer>
        <SectionHeader
          title="Why Blue Atlantic"
          description="A Caribbean-born enterprise group building modern systems with institutional discipline and long-term focus."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {whyBlueAtlantic.map((item) => (
            <Card key={item.title}>
              <h3 className="text-base font-semibold text-brand-navy">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-brand-muted">
                {item.description}
              </p>
            </Card>
          ))}
        </div>
      </PageContainer>

      <section className="bg-gradient-to-br from-brand-navy to-brand-atlantic">
        <PageContainer>
          <div className="mx-auto max-w-3xl text-center">
            <SectionHeader
              title="Partnership and collaboration"
              description="Blue Atlantic welcomes conversations with institutions, partners, businesses, developers, and future collaborators interested in Caribbean enterprise infrastructure."
              align="center"
              variant="light"
            />
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button href="/contact" variant="secondary">
                Start a conversation
              </Button>
              <Button
                href="/about"
                variant="ghost"
                className="border-white/20 text-white hover:bg-white/10 hover:text-white"
              >
                Learn about Blue Atlantic
              </Button>
            </div>
          </div>
        </PageContainer>
      </section>
    </>
  );
}
