import type { Metadata } from "next";
import ContentSection from "@/components/ContentSection";
import HeroSection from "@/components/HeroSection";
import SectionHeader from "@/components/SectionHeader";
import Card from "@/components/Card";
import { whyAccentClasses } from "@/lib/card-themes";

export const metadata: Metadata = {
  title: "Technology",
  description:
    "Blue Atlantic's technology division builds internal and public-facing platforms, secure-by-design systems, and governance-aware infrastructure for the enterprise ecosystem.",
};

const focusAreas = [
  {
    title: "Product engineering",
    description:
      "End-to-end platform development from concept through deployment, with maintainable architecture, Caribbean-first product thinking, and standards suited to long-term institutional use.",
  },
  {
    title: "Secure-by-design development",
    description:
      "Structured attention to system architecture, access controls, and operational reliability in platform development. This reflects design intent and does not claim certified security or banking authorization.",
  },
  {
    title: "Governance-aware systems",
    description:
      "Platforms developed with governance considerations, audit visibility, and structured controls that support enterprise accountability across the Blue Atlantic ecosystem.",
  },
  {
    title: "Internal platform development",
    description:
      "Technology built to support Blue Atlantic platforms and initiatives through shared foundations that connect financial, workforce, intelligence, and oversight systems.",
  },
  {
    title: "Operational intelligence",
    description:
      "Systems that support structured data analysis, decision-support workflows, and enterprise visibility, enabling disciplined operational oversight and evaluation.",
  },
  {
    title: "Maintainable architecture",
    description:
      "Clean, scalable product architecture designed for long-term development rather than short-term builds that cannot support institutional growth.",
  },
];

export default function TechnologyPage() {
  return (
    <>
      <HeroSection
        compact
        eyebrow="Technology"
        headline="Technology and product development"
        supportingCopy="The Blue Atlantic technology division builds the internal and public-facing platforms that power the enterprise ecosystem, with disciplined engineering, governance-aware design, and Caribbean-first product development."
      />
      <ContentSection surface="soft">
        <SectionHeader
          label="Development"
          title="What we develop"
          description="Technology work across the Blue Atlantic enterprise group supports practical platform needs, from financial infrastructure and workforce systems to intelligence and oversight platforms."
        />
        <div className="grid gap-6 md:grid-cols-2">
          {focusAreas.map((area, index) => (
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
        <Card className="card-accent-neutral border-brand-atlantic/15">
          <p className="text-sm leading-relaxed text-brand-muted">
            Blue Atlantic technology platforms are designed for enterprise use
            and structured development. References to secure infrastructure or
            governance-aware systems describe design intent and development
            direction. They do not constitute claims of certified
            cybersecurity, banking authorization, or regulated financial
            infrastructure.
          </p>
        </Card>
      </ContentSection>
    </>
  );
}
