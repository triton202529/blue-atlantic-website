import type { Metadata } from "next";
import Button from "@/components/Button";
import Card from "@/components/Card";
import ContentSection from "@/components/ContentSection";
import HeroSection from "@/components/HeroSection";
import VisualPanel from "@/components/VisualPanel";
import { whyAccentClasses } from "@/lib/card-themes";
import { visualAssetAlt, visualAssets } from "@/lib/visual-assets";

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
        eyebrow="Technology"
        headline="Technology and product development"
        supportingCopy="Blue Atlantic builds technology platforms, automated workflows, internal systems, dashboards, and product infrastructure for serious operations. Our work supports Blue Atlantic initiatives and can also support businesses, institutions, and partners that need reliable systems built around real operational problems."
      />
      <ContentSection
        surface="soft"
        dense
        containerClassName="!max-w-[88rem] !pt-8 !pb-8 md:!pt-10 md:!pb-10 lg:!pt-12 lg:!pb-12"
      >
        <VisualPanel
          src={visualAssets.systems}
          alt={visualAssetAlt.systems}
          title="Systems for operations, automation, products, and partners"
          description="Our technology work supports platforms such as Tropicash, EliteHire Pro, TRITON, and Sentinel. The same product discipline can support organizations that need automated workflows, custom tools, clearer processes, stronger oversight, and maintainable systems built for real operational use."
          className="mb-0"
          compact
          priority
        />
      </ContentSection>
      <ContentSection
        surface="white"
        dense
        containerClassName="!max-w-[88rem] !pt-10 !pb-10 md:!pt-12 md:!pb-12 lg:!pt-12 lg:!pb-12"
      >
        <div className="mb-6 max-w-4xl md:mb-7">
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
        <div className="mb-6 border-b border-brand-border/70 pb-6 md:mb-7 md:pb-7">
          <h3 className="text-xl font-semibold text-brand-navy md:text-2xl">
            What we can build
          </h3>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-brand-muted md:text-base">
            Practical systems for organizations that need better tools, automated
            workflows, clearer processes, stronger visibility, and reliable
            digital operations.
          </p>
        </div>
        <div className="grid gap-5 md:grid-cols-2 lg:gap-6">
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
        containerClassName="!max-w-[88rem] !pt-10 !pb-10 md:!pt-12 md:!pb-12 lg:!pt-12 lg:!pb-12"
      >
        <div className="mb-6 max-w-4xl md:mb-7">
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
        <div className="grid gap-5 md:grid-cols-3">
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
        containerClassName="!max-w-[88rem] !pt-10 !pb-10 md:!pt-12 md:!pb-12 lg:!pt-12 lg:!pb-12"
      >
        <div className="mx-auto max-w-4xl rounded-2xl border border-brand-border/80 bg-white px-6 py-9 text-center shadow-brand md:px-10 md:py-10">
          <h2 className="text-2xl font-semibold tracking-tight text-brand-navy md:text-3xl">
            Need a system built?
          </h2>
          <p className="mt-4 text-base leading-relaxed text-brand-muted md:text-lg">
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
    </>
  );
}
