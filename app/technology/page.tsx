import type { Metadata } from "next";
import Button from "@/components/Button";
import Card from "@/components/Card";
import ContentSection from "@/components/ContentSection";
import HeroSection from "@/components/HeroSection";
import { whyAccentClasses } from "@/lib/card-themes";

export const metadata: Metadata = {
  title: "Technology",
  description:
    "Blue Atlantic builds technology platforms, automated workflows, and enterprise software for its own ecosystem and for businesses, institutions, and partners that need practical systems for real operational problems.",
};

const buildCapabilities = [
  {
    title: "Workflow automation systems",
    description:
      "Automated tools for approvals, task routing, records, notifications, operating processes, and internal administration.",
  },
  {
    title: "Business operations systems",
    description:
      "Custom systems for teams, records, workflows, internal processes, operational tracking, and day-to-day management.",
  },
  {
    title: "Product platforms",
    description:
      "Digital products, portals, dashboards, marketplaces, and user-facing systems built from concept through deployment.",
  },
  {
    title: "Admin and control dashboards",
    description:
      "Centralized views for reporting, user management, activity review, operational control, and oversight.",
  },
  {
    title: "Financial operations tools",
    description:
      "Systems for tracking business finances, records, internal activity, controls, and operational accountability.",
  },
  {
    title: "Intelligence and reporting systems",
    description:
      "Structured reporting, decision-support tools, data visibility, governance review, and operational intelligence.",
  },
];

const operationalPrinciples = [
  {
    title: "Automate everyday tasks",
    description:
      "Systems that reduce repetitive work, route tasks clearly, trigger reminders, organize records, and keep daily operations moving.",
  },
  {
    title: "Problem-solving architecture",
    description:
      "Technology shaped around the actual problem, the people using it, and the process it needs to improve.",
  },
  {
    title: "Caribbean standard building",
    description:
      "Systems built with Caribbean context, institutional discipline, and the goal of raising regional technology standards.",
  },
];

export default function TechnologyPage() {
  return (
    <>
      <HeroSection
        compact
        wide
        eyebrow="Technology"
        headline="Technology and product development"
        supportingCopy="Blue Atlantic builds technology platforms, automated workflows, internal systems, dashboards, and product infrastructure for serious operations. Our work supports Blue Atlantic initiatives and can also support businesses, institutions, and partners that need reliable systems built around real operational problems."
        backgroundImage={{
          src: "/images/technology/technology-caribbean-hero.webp",
          sizes: "100vw",
          treatment: "technology",
        }}
      />
      <div className="technology-page-surface">
        <ContentSection
          surface="soft"
          dense
          className="!bg-transparent"
          containerClassName="!max-w-[88rem] !pt-10 !pb-8 md:!pt-12 md:!pb-10 lg:!pt-14 lg:!pb-12"
        >
          <Card className="ba-technology-systems-panel card-accent-neutral bg-white !p-7 md:!p-9 lg:!p-11">
            <div className="max-w-5xl">
              <p className="section-label mb-3 text-brand-atlantic">Systems</p>
              <h2 className="text-2xl font-semibold tracking-tight text-brand-navy md:text-3xl">
                Systems for operations, automation, products, and partners
              </h2>
              <p className="mt-4 text-base leading-relaxed text-brand-muted md:text-lg">
                Our technology work supports platforms such as Tropicash,
                EliteHire Pro, TRITON, and Sentinel. The same product discipline
                can support organizations that need automated workflows, custom
                tools, clearer processes, stronger oversight, and maintainable
                systems built for real operational use.
              </p>
            </div>
          </Card>
        </ContentSection>
        <ContentSection
          surface="white"
          dense
          className="!bg-white/70"
          containerClassName="!max-w-[88rem] !pt-8 !pb-12 md:!pt-10 md:!pb-14 lg:!pt-12 lg:!pb-16"
        >
          <div className="mb-7 max-w-4xl md:mb-8">
            <p className="section-label mb-3 text-brand-atlantic">Technology</p>
            <h2 className="text-2xl font-semibold tracking-tight text-brand-navy md:text-3xl">
              Technology capabilities
            </h2>
            <p className="mt-4 text-base leading-relaxed text-brand-muted md:text-lg">
              Blue Atlantic focuses on practical technology that helps
              organizations operate better, automate repetitive work, manage
              information clearly, solve operational problems, and build digital
              products with long-term structure.
            </p>
          </div>
          <div className="mb-7 border-b border-brand-border/70 pb-7 md:mb-8 md:pb-8">
            <h3 className="text-xl font-semibold text-brand-navy md:text-2xl">
              What we can build
            </h3>
            <p className="mt-3 max-w-3xl text-sm leading-relaxed text-brand-muted md:text-base">
              Practical systems for organizations that need better tools, automated
              workflows, clearer processes, stronger visibility, and reliable
              digital operations.
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-2 md:gap-6 lg:gap-7">
            {buildCapabilities.map((area, index) => (
              <Card
                key={area.title}
                hover
                className={`${whyAccentClasses[index % whyAccentClasses.length]} bg-white !p-6 md:!p-7`}
              >
                <span className="text-sm font-semibold tabular-nums text-brand-atlantic/60">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h2 className="mt-2 text-lg font-semibold text-brand-navy">
                  {area.title}
                </h2>
                <p className="mt-2.5 text-sm leading-relaxed text-brand-muted">
                  {area.description}
                </p>
              </Card>
            ))}
          </div>
        </ContentSection>
        <ContentSection
          surface="soft"
          dense
          className="!bg-[rgba(244,247,251,0.78)]"
          containerClassName="!max-w-[88rem] !pt-10 !pb-12 md:!pt-12 md:!pb-14 lg:!pt-14 lg:!pb-16"
        >
          <div className="mb-7 max-w-4xl md:mb-8">
            <p className="section-label mb-3 text-brand-atlantic">Approach</p>
            <h2 className="text-2xl font-semibold tracking-tight text-brand-navy md:text-3xl">
              Built for real operations
            </h2>
            <p className="mt-4 text-base leading-relaxed text-brand-muted md:text-lg">
              Blue Atlantic does not approach technology as decoration. Systems
              are designed to solve real problems, automate everyday tasks, reduce
              manual work, improve visibility, support clear workflows, and help
              organizations operate with stronger standards.
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-3 md:gap-6">
            {operationalPrinciples.map((item, index) => (
              <Card
                key={item.title}
                hover
                className={`${whyAccentClasses[index % whyAccentClasses.length]} !p-6 md:!p-7`}
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
        </ContentSection>
        <ContentSection
          surface="slate"
          dense
          className="!bg-[rgba(232,237,244,0.88)]"
          containerClassName="!max-w-[88rem] !pt-10 !pb-14 md:!pt-12 md:!pb-16 lg:!pt-14 lg:!pb-20"
        >
          <div className="ba-technology-cta-panel mx-auto max-w-4xl px-6 py-10 text-center md:px-10 md:py-12">
            <h2 className="text-2xl font-semibold tracking-tight text-brand-navy md:text-3xl">
              Need a system built?
            </h2>
            <p className="mx-auto mt-4 max-w-3xl text-base leading-relaxed text-brand-muted md:text-lg">
              Blue Atlantic is available for conversations with businesses,
              institutions, and partners that need practical technology systems,
              workflow automation, operational dashboards, or digital products
              designed around real problems, regional context, and long-term
              maintainability.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button href="/contact" variant="primary">
                Start a technology conversation
              </Button>
              <Button href="/companies" variant="secondary">
                View platforms and systems
              </Button>
            </div>
          </div>
        </ContentSection>
      </div>
    </>
  );
}
