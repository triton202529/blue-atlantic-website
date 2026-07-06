import type { Metadata } from "next";
import BrandSeal from "@/components/BrandSeal";
import HeroSection from "@/components/HeroSection";
import PageContainer from "@/components/PageContainer";
import Card from "@/components/Card";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Blue Atlantic, a Caribbean-born enterprise group building technology, financial infrastructure, workforce systems, and intelligence platforms.",
};

const sections = [
  {
    title: "Who we are",
    content:
      "Blue Atlantic is a Caribbean-born enterprise group developing technology, financial infrastructure, workforce platforms, and intelligence systems. We operate as the parent organization behind a growing ecosystem of platforms and initiatives designed for regional impact and global standards.",
  },
  {
    title: "What we build",
    content:
      "Our work spans digital payment infrastructure, workforce technology, research and decision-support systems, financial oversight platforms, and enterprise digital infrastructure. Each initiative is developed with disciplined systems design, operational clarity, and long-term institutional development in mind.",
  },
  {
    title: "Our long-term direction",
    content:
      "Blue Atlantic is focused on building enduring enterprise infrastructure for the Caribbean and beyond. We pursue sustainable platform development, research-driven innovation, and structured growth — not short-term ventures or speculative positioning.",
  },
  {
    title: "Caribbean-first, global-standard approach",
    content:
      "We are rooted in Caribbean ambition and regional context, while engineering platforms and systems designed to meet contemporary global standards. Our approach balances local understanding with institutional discipline, governance awareness, and modern technology practices.",
  },
];

export default function AboutPage() {
  return (
    <>
      <HeroSection
        compact
        eyebrow="About"
        headline="About Blue Atlantic"
        supportingCopy="A Caribbean-born enterprise group building modern technology, financial infrastructure, workforce systems, and intelligence platforms for long-term regional development."
      />
      <PageContainer>
        <Card className="mb-10 flex flex-col items-center gap-6 border-brand-atlantic/10 bg-brand-soft/50 p-8 text-center md:flex-row md:p-10 md:text-left">
          <BrandSeal size="lg" className="shrink-0" />
          <div>
            <p className="eyebrow text-brand-atlantic">Brand identity</p>
            <h2 className="mt-2 text-xl font-semibold text-brand-navy">
              Caribbean-born enterprise group
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-brand-muted md:text-base">
              Blue Atlantic represents a long-term commitment to building modern
              enterprise infrastructure for the Caribbean and beyond — through
              technology, financial systems, workforce platforms, and
              intelligence initiatives developed with institutional discipline.
            </p>
          </div>
        </Card>
        <div className="grid gap-6 md:grid-cols-2">
          {sections.map((section, index) => (
            <Card key={section.title} hover className="flex flex-col">
              <span className="text-xs font-medium tabular-nums text-brand-muted/50">
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
      </PageContainer>
    </>
  );
}
