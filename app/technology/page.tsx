import type { Metadata } from "next";
import Button from "@/components/Button";
import Card from "@/components/Card";
import ContentSection from "@/components/ContentSection";
import HeroSection from "@/components/HeroSection";
import SectionHeader from "@/components/SectionHeader";
import VisualPanel from "@/components/VisualPanel";
import { whyAccentClasses } from "@/lib/card-themes";
import { visualAssetAlt, visualAssets } from "@/lib/visual-assets";

export const metadata: Metadata = {
  title: "Technology",
  description:
    "Blue Atlantic builds technology platforms, internal systems, and enterprise software for its own ecosystem and for businesses, institutions, and partners that need practical digital capability.",
};

const buildCapabilities = [
  {
    title: "Business operations systems",
    description:
      "Custom tools for workflows, approvals, records, teams, operational processes, and internal administration.",
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
    title: "Workforce and hiring systems",
    description:
      "Job discovery tools, employer portals, hiring workflows, candidate management, and regional labor visibility.",
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
    title: "Practical workflows",
    description:
      "Tools designed around how teams actually work, review, approve, track, and report.",
  },
  {
    title: "Maintainable architecture",
    description:
      "Systems structured for long-term support, clean development, and future growth.",
  },
  {
    title: "Regional understanding",
    description:
      "Technology built with Caribbean context, institutional standards, and real operating constraints in mind.",
  },
];

export default function TechnologyPage() {
  return (
    <>
      <HeroSection
        compact
        eyebrow="Technology"
        headline="Technology and product development"
        supportingCopy="Blue Atlantic builds technology platforms, internal systems, dashboards, and product infrastructure for serious operations. Our work supports Blue Atlantic initiatives and can also support businesses, institutions, and partners that need reliable digital systems."
      />
      <ContentSection surface="soft">
        <VisualPanel
          src={visualAssets.systems}
          alt={visualAssetAlt.systems}
          title="Systems for operations, products, and partners"
          description="Our technology work supports platforms such as Tropicash, EliteHire Pro, TRITON, and Sentinel. The same product discipline can support organizations that need custom tools, clearer workflows, stronger oversight, and maintainable systems built for real operational use."
          className="mb-0"
          compact
          priority
        />
      </ContentSection>
      <ContentSection surface="white">
        <SectionHeader
          label="Technology"
          title="Technology capabilities"
          description="Blue Atlantic focuses on practical systems that help organizations operate better, manage information clearly, and build digital products with long-term structure."
        />
        <div className="mb-8 border-b border-brand-border/70 pb-8 md:mb-10 md:pb-10">
          <h3 className="text-xl font-semibold text-brand-navy md:text-2xl">
            What we can build
          </h3>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-brand-muted md:text-base">
            Practical digital systems for organizations that need better tools,
            clearer workflows, and stronger operational visibility.
          </p>
        </div>
        <div className="grid gap-5 md:grid-cols-2 lg:gap-6">
          {buildCapabilities.map((area, index) => (
            <Card
              key={area.title}
              hover
              className={`${whyAccentClasses[index % whyAccentClasses.length]} bg-white`}
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
      <ContentSection surface="soft">
        <SectionHeader
          label="Approach"
          title="Built for real operations"
          description="Blue Atlantic does not approach technology as decoration. Systems are designed around practical use, clear workflows, maintainable architecture, and the operational realities of the organizations they support."
        />
        <div className="grid gap-5 md:grid-cols-3">
          {operationalPrinciples.map((item, index) => (
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
      </ContentSection>
      <ContentSection surface="slate">
        <div className="mx-auto max-w-3xl rounded-2xl border border-brand-border/80 bg-white px-6 py-10 text-center shadow-brand md:px-10 md:py-12">
          <h2 className="text-2xl font-semibold tracking-tight text-brand-navy md:text-3xl">
            Need a system built?
          </h2>
          <p className="mt-4 text-base leading-relaxed text-brand-muted md:text-lg">
            Blue Atlantic is available for conversations with businesses,
            institutions, and partners that need practical technology systems
            designed around real operations, regional context, and long-term
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
