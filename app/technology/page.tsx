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
    title: "Internal business systems",
    description:
      "Custom tools for managing workflows, approvals, records, operations, teams, and internal processes.",
  },
  {
    title: "Product platforms",
    description:
      "End-to-end platform development for digital products, portals, marketplaces, dashboards, and user-facing systems.",
  },
  {
    title: "Admin and control dashboards",
    description:
      "Centralized dashboards for oversight, reporting, user management, activity review, and operational control.",
  },
  {
    title: "Workforce and hiring systems",
    description:
      "Technology for job discovery, employer tools, hiring workflows, candidate management, and regional labor visibility.",
  },
  {
    title: "Financial operations tools",
    description:
      "Systems for tracking business finances, records, controls, internal activity, and operational accountability.",
  },
  {
    title: "Intelligence and reporting systems",
    description:
      "Decision-support tools, structured reporting, data visibility, governance review, and operational intelligence.",
  },
];

export default function TechnologyPage() {
  return (
    <>
      <HeroSection
        compact
        eyebrow="Technology"
        headline="Technology and product development"
        supportingCopy="Blue Atlantic builds the systems behind serious operations: platforms, dashboards, internal tools, and product infrastructure for its own ecosystem and for organizations that need reliable digital capability."
      />
      <ContentSection surface="soft">
        <VisualPanel
          src={visualAssets.systems}
          alt={visualAssetAlt.systems}
          title="Systems for operations, products, and partners"
          description="Our technology work supports Blue Atlantic platforms such as Tropicash, EliteHire Pro, TRITON, and Sentinel. The same product discipline can also support businesses, institutions, and partners that need custom systems built for real operational use."
          className="mb-12"
          priority
        />
        <SectionHeader
          label="Capabilities"
          title="What we can build"
          description="Blue Atlantic designs practical digital systems for organizations that need better tools, clearer workflows, and stronger operational visibility."
        />
        <div className="grid gap-6 md:grid-cols-2">
          {buildCapabilities.map((area, index) => (
            <Card
              key={area.title}
              hover
              className={whyAccentClasses[index % whyAccentClasses.length]}
            >
              <span className="text-sm font-semibold tabular-nums text-brand-atlantic/60">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h2 className="mt-2 text-lg font-semibold text-brand-navy">
                {area.title}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-brand-muted md:text-base">
                {area.description}
              </p>
            </Card>
          ))}
        </div>
      </ContentSection>
      <ContentSection surface="blue">
        <div className="mx-auto max-w-3xl text-center">
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
