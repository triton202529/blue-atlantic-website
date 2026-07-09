import type { Metadata } from "next";
import AboutBrandArchitecture from "@/components/AboutBrandArchitecture";
import BrandLogo from "@/components/BrandLogo";
import ContentSection from "@/components/ContentSection";
import HeroSection from "@/components/HeroSection";
import Card from "@/components/Card";
import { whyAccentClasses } from "@/lib/card-themes";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Blue Atlantic, a Caribbean-born enterprise and technology group building proprietary platforms, operational infrastructure, automation capability, and long-term institutional development.",
};

const sections = [
  {
    title: "Who we are",
    content:
      "Blue Atlantic is a Caribbean-born enterprise and technology group developing proprietary platforms, internal systems, and operational infrastructure for long-term regional growth.",
  },
  {
    title: "What we build",
    content:
      "We build systems across financial technology, workforce infrastructure, intelligence tools, automation, dashboards, and enterprise operations.",
  },
  {
    title: "Why the Caribbean",
    content:
      "The Caribbean needs modern technology infrastructure built with local understanding, serious execution, and global standards. Blue Atlantic is focused on raising regional capability through disciplined systems.",
  },
  {
    title: "Long-term direction",
    content:
      "Blue Atlantic is not built around short-term hype. The company is developing a portfolio of platforms, systems, and operating capabilities with shared standards, disciplined execution, and long-term institutional purpose.",
  },
];

export default function AboutPage() {
  return (
    <>
      <HeroSection
        compact
        wide
        eyebrow="About"
        headline="About Blue Atlantic"
        supportingCopy="Blue Atlantic is a Caribbean-born enterprise and technology group building the systems, platforms, and operational infrastructure needed for modern regional business. The company develops proprietary platforms while also building disciplined technology capabilities around automation, financial infrastructure, workforce systems, intelligence tools, and long-term institutional development."
      />
      <ContentSection
        surface="blue"
        dense
        containerClassName="!max-w-7xl !py-10 md:!py-14 lg:!py-16"
      >
        <AboutBrandArchitecture className="mb-6 md:mb-8" />
        <Card className="card-accent-neutral flex flex-col items-center gap-6 bg-white p-7 md:flex-row md:items-center md:gap-8 md:p-9 lg:gap-10 lg:p-10">
          <BrandLogo variant="story" priority className="shrink-0" />
          <div className="min-w-0 flex-1 text-center md:text-left">
            <p className="section-label text-brand-atlantic">Our story</p>
            <h2 className="mt-2 text-xl font-semibold text-brand-navy md:text-[1.35rem]">
              Building for long-term institutional development
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-brand-muted md:text-base">
              Blue Atlantic is focused on building practical systems that
              support regional enterprise growth, stronger operations, and
              long-term institutional development. Our work connects proprietary
              platforms, product discipline, automation capability, and
              Caribbean-first execution into one disciplined enterprise
              structure.
            </p>
          </div>
        </Card>
      </ContentSection>
      <ContentSection
        surface="white"
        pattern
        dense
        containerClassName="!max-w-7xl !py-10 md:!py-14 lg:!py-16"
      >
        <div className="mb-6 max-w-3xl md:mb-8">
          <h2 className="text-xl font-semibold text-brand-navy md:text-2xl">
            Regional enterprise perspective
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-brand-muted md:text-base">
            Blue Atlantic exists to solve real operational problems, raise
            Caribbean technology standards, and create disciplined systems that
            can support serious businesses, institutions, and future regional
            growth.
          </p>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:gap-6">
          {sections.map((section, index) => (
            <Card
              key={section.title}
              hover
              className={`flex h-full flex-col !p-5 md:!p-6 ${whyAccentClasses[index % 3]}`}
            >
              <span className="text-sm font-semibold tabular-nums text-brand-atlantic/60">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h2 className="mt-2 text-lg font-semibold text-brand-navy">
                {section.title}
              </h2>
              <p className="mt-2.5 flex-1 text-sm leading-relaxed text-brand-muted md:text-base">
                {section.content}
              </p>
            </Card>
          ))}
        </div>
      </ContentSection>
    </>
  );
}
