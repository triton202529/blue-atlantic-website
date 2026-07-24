import type { Metadata } from "next";
import AboutBrandArchitecture from "@/components/AboutBrandArchitecture";
import AboutPlatformExplorer from "@/components/about/AboutPlatformExplorer";
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
      "We build systems across financial technology, workforce infrastructure, proprietary intelligence tools, automation, dashboards, and enterprise operations.",
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
        supportingCopy="Blue Atlantic is a Caribbean-born enterprise and technology group building the systems, platforms, and operational infrastructure needed for modern regional business. The company develops proprietary platforms while also building disciplined technology capabilities around automation, financial infrastructure, workforce systems, proprietary intelligence tools, and long-term institutional development."
        backgroundImage={{
          src: "/images/about/about-caribbean-hero.webp",
          sizes: "100vw",
          treatment: "about",
        }}
      />
      <div className="about-page-surface">
        <ContentSection
          surface="blue"
          dense
          className="!bg-transparent"
          containerClassName="!max-w-[88rem] !pt-8 !pb-10 md:!pt-12 md:!pb-14 lg:!pt-12 lg:!pb-14"
        >
          <AboutBrandArchitecture className="ba-about-institutional-panel" />
        </ContentSection>
        <ContentSection
          surface="white"
          dense
          className="!bg-transparent"
          containerClassName="!max-w-[88rem] !pt-10 !pb-10 md:!pt-12 md:!pb-12 lg:!pt-12 lg:!pb-12"
        >
          <div className="ba-about-perspective-header mb-7 grid gap-3 border-b border-brand-border/70 pb-7 md:mb-8 md:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] md:items-end md:gap-8">
            <h2 className="text-2xl font-semibold tracking-tight text-brand-navy md:text-3xl">
              Regional enterprise perspective
            </h2>
            <p className="max-w-2xl text-sm leading-relaxed text-brand-muted md:justify-self-end md:text-base">
              Blue Atlantic exists to solve real operational problems, raise
              Caribbean technology standards, and create disciplined systems that
              can support serious businesses, institutions, and future regional
              growth.
            </p>
          </div>
          <div className="grid auto-rows-fr gap-5 sm:grid-cols-2 lg:gap-6">
            {sections.map((section, index) => (
              <Card
                key={section.title}
                hover
                className={`ba-about-perspective-card flex h-full min-h-[12.5rem] flex-col !p-6 md:min-h-[13.5rem] md:!p-8 ${whyAccentClasses[index % 3]}`}
              >
                <span className="text-sm font-semibold tabular-nums text-brand-atlantic/60">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-2 text-lg font-semibold text-brand-navy">
                  {section.title}
                </h3>
                <p className="mt-2.5 flex-1 text-sm leading-relaxed text-brand-muted md:text-base">
                  {section.content}
                </p>
              </Card>
            ))}
          </div>
        </ContentSection>
        <AboutPlatformExplorer />
      </div>
    </>
  );
}
