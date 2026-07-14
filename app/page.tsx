import Button from "@/components/Button";
import ContentSection from "@/components/ContentSection";
import CorporateBrandPanel from "@/components/CorporateBrandPanel";
import HeroSection from "@/components/HeroSection";
import PillarCard from "@/components/PillarCard";
import SectionHeader from "@/components/SectionHeader";
import Card from "@/components/Card";
import { whyAccentClasses } from "@/lib/card-themes";
import { heroCopy, pillars } from "@/lib/site";

const ecosystemPreview = [
  {
    title: "Platforms and systems",
    description:
      "Tropicash, EliteHire Pro, TRITON, and Sentinel represent Blue Atlantic's current platform and systems direction.",
  },
  {
    title: "Technology capability",
    description:
      "Automation systems, dashboards, financial infrastructure tools, workforce systems, and proprietary intelligence tools support the ecosystem.",
  },
  {
    title: "Regional execution",
    description:
      "Built with Caribbean context, institutional discipline, and long-term operating standards.",
  },
];

const whyPreview = [
  {
    title: "Caribbean-first execution",
    description:
      "Systems shaped by regional context, serious execution, and long-term commitment to Caribbean enterprise development.",
  },
  {
    title: "Enterprise discipline",
    description:
      "Shared standards across platform development, governance-aware systems, and operational clarity.",
  },
  {
    title: "Long-term institution building",
    description:
      "A focused portfolio of platforms and capabilities built for durable enterprise infrastructure.",
  },
];

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

      <ContentSection
        surface="white"
        pattern
        dense
        containerClassName="!max-w-7xl !py-10 md:!py-12 lg:!py-14"
      >
        <SectionHeader
          label="Strategic focus"
          title="Strategic pillars"
          description="Four interconnected areas of enterprise infrastructure, each developed with disciplined execution, shared standards, and long-term regional purpose."
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
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

      <ContentSection
        surface="blue"
        dense
        containerClassName="!max-w-7xl !py-10 md:!py-12 lg:!py-14"
      >
        <div className="mb-6 max-w-3xl md:mb-8">
          <p className="section-label mb-3 text-brand-atlantic">Portfolio</p>
          <h2 className="text-2xl font-semibold tracking-tight text-brand-navy md:text-3xl">
            The Blue Atlantic ecosystem
          </h2>
          <p className="mt-4 text-base leading-relaxed text-brand-muted md:text-lg">
            Blue Atlantic is developing a focused ecosystem of platforms,
            systems, and operating capabilities connected by shared standards,
            disciplined execution, and Caribbean-first product thinking.
          </p>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {ecosystemPreview.map((item, index) => (
            <Card
              key={item.title}
              hover
              className={`flex h-full flex-col !p-6 ${whyAccentClasses[index % whyAccentClasses.length]}`}
            >
              <h3 className="text-base font-semibold text-brand-navy">
                {item.title}
              </h3>
              <p className="mt-2.5 flex-1 text-sm leading-relaxed text-brand-muted">
                {item.description}
              </p>
            </Card>
          ))}
        </div>
        <div className="mt-7">
          <Button href="/companies" variant="primary">
            Explore platforms
          </Button>
        </div>
      </ContentSection>

      <ContentSection
        surface="white"
        dense
        containerClassName="!max-w-7xl !py-10 md:!py-12 lg:!py-14"
      >
        <div className="grid gap-8 lg:grid-cols-[1fr_0.85fr] lg:items-stretch">
          <Card className="card-accent-neutral flex h-full flex-col !p-6 md:!p-8">
            <p className="section-label mb-3 text-brand-atlantic">Technology</p>
            <h2 className="text-2xl font-semibold tracking-tight text-brand-navy md:text-3xl">
              Technology and product development
            </h2>
            <p className="mt-4 flex-1 text-base leading-relaxed text-brand-muted md:text-lg">
              Blue Atlantic builds practical systems for automation, dashboards,
              internal operations, product platforms, reporting, and operational
              visibility.
            </p>
            <div className="mt-7">
              <Button href="/technology" variant="primary">
                View technology capability
              </Button>
            </div>
          </Card>

          <div>
            <div className="mb-5">
              <p className="section-label mb-3 text-brand-atlantic">
                Our approach
              </p>
              <h2 className="text-2xl font-semibold tracking-tight text-brand-navy md:text-3xl">
                Why Blue Atlantic
              </h2>
            </div>
            <div className="grid gap-4">
              {whyPreview.map((item, index) => (
                <Card
                  key={item.title}
                  hover
                  className={`${whyAccentClasses[index % whyAccentClasses.length]} !p-5 md:!p-6`}
                >
                  <h3 className="text-base font-semibold text-brand-navy">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-brand-muted">
                    {item.description}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </ContentSection>

      <ContentSection
        surface="soft"
        dense
        pattern
        containerClassName="!max-w-7xl !py-10 md:!py-12 lg:!py-14"
      >
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-semibold tracking-tight text-brand-navy md:text-3xl">
            Start a conversation with Blue Atlantic
          </h2>
          <p className="mt-4 text-base leading-relaxed text-brand-muted md:text-lg">
            Blue Atlantic welcomes conversations with businesses, institutions,
            developers, and partners interested in platforms, technology
            systems, automation, and long-term Caribbean enterprise development.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button href="/contact" variant="primary">
              Start a conversation
            </Button>
            <Button href="/companies" variant="secondary">
              Explore platforms
            </Button>
          </div>
        </div>
      </ContentSection>
    </>
  );
}
