import type { Metadata } from "next";
import BrandLogo from "@/components/BrandLogo";
import ContentSection from "@/components/ContentSection";
import HeroSection from "@/components/HeroSection";
import PageVisual from "@/components/PageVisual";
import VisualPanel from "@/components/VisualPanel";
import Card from "@/components/Card";
import { whyAccentClasses } from "@/lib/card-themes";
import { visualAssetAlt, visualAssets } from "@/lib/visual-assets";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Blue Atlantic, a Caribbean-born enterprise group building technology, financial infrastructure, workforce systems, and intelligence platforms for long-term regional development.",
};

const sections = [
  {
    title: "Who we are",
    content:
      "Blue Atlantic is a Caribbean-born enterprise group building platforms across technology, financial infrastructure, workforce systems, and intelligence. The company is focused on creating durable systems that can support regional opportunity and long-term institutional development.",
  },
  {
    title: "What we build",
    content:
      "We build and develop platforms that serve practical enterprise needs: payments, workforce access, operational intelligence, financial oversight, and future research-led capital strategy.",
  },
  {
    title: "Why the Caribbean",
    content:
      "The Caribbean needs modern infrastructure built with local understanding and global standards. Blue Atlantic is focused on building systems that reflect regional realities while meeting the discipline expected from serious institutions.",
  },
  {
    title: "Long-term direction",
    content:
      "Blue Atlantic is not built around short-term hype. The company is developing an ecosystem of platforms with shared standards, disciplined execution, and long-term institutional purpose.",
  },
];

export default function AboutPage() {
  return (
    <>
      <HeroSection
        compact
        eyebrow="About"
        headline="About Blue Atlantic"
        supportingCopy="A Caribbean-born enterprise group building modern technology, financial infrastructure, workforce systems, and intelligence platforms for long-term regional development and global-standard execution."
      />
      <ContentSection surface="blue">
        <PageVisual
          asset="horizon"
          size="lg"
          caption="Caribbean-born enterprise infrastructure with Atlantic perspective"
          className="mb-10"
          priority
        />
        <Card className="card-accent-neutral flex flex-col gap-6 p-8 md:flex-row md:items-start md:p-10">
          <BrandLogo
            variant="story"
            priority
            className="mx-auto md:mx-0"
          />
          <div>
            <p className="section-label text-brand-atlantic">Our story</p>
            <h2 className="mt-2 text-xl font-semibold text-brand-navy">
              Building for long-term institutional development
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-brand-muted md:text-base">
              Blue Atlantic is developing an ecosystem of platforms connected by
              shared infrastructure, product discipline, and regional purpose.
              Our work is focused on building systems that can support Caribbean
              enterprise growth with the standards expected from serious
              institutions.
            </p>
          </div>
        </Card>
      </ContentSection>
      <ContentSection surface="white" pattern>
        <VisualPanel
          src={visualAssets.enterpriseMap}
          alt={visualAssetAlt.enterpriseMap}
          imagePosition="right"
          title="Regional enterprise perspective"
          description="Blue Atlantic builds with Caribbean context and global standards, connecting platforms and initiatives through shared enterprise infrastructure and disciplined execution."
          className="mb-12"
        />
        <div className="grid gap-6 md:grid-cols-2">
          {sections.map((section, index) => (
            <Card
              key={section.title}
              hover
              className={`flex flex-col ${whyAccentClasses[index % 3]}`}
            >
              <span className="text-sm font-semibold tabular-nums text-brand-atlantic/60">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h2 className="mt-2 text-lg font-semibold text-brand-navy">
                {section.title}
              </h2>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-brand-muted md:text-base">
                {section.content}
              </p>
            </Card>
          ))}
        </div>
      </ContentSection>
    </>
  );
}
