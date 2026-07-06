import type { Metadata } from "next";
import HeroSection from "@/components/HeroSection";
import PageContainer from "@/components/PageContainer";
import SectionHeader from "@/components/SectionHeader";
import Card from "@/components/Card";

export const metadata: Metadata = {
  title: "Technology",
  description:
    "Blue Atlantic's technology division builds internal and public-facing platforms, secure digital infrastructure, and governance-aware systems.",
};

const focusAreas = [
  {
    title: "Software platforms",
    description:
      "Design and development of enterprise software platforms supporting financial technology, workforce systems, and operational intelligence across the Blue Atlantic ecosystem.",
  },
  {
    title: "Secure digital infrastructure",
    description:
      "Building structured digital infrastructure with attention to system architecture, access controls, and operational reliability — designed for enterprise use cases.",
  },
  {
    title: "Operational intelligence",
    description:
      "Systems that support structured data analysis, decision-support workflows, and enterprise visibility — enabling disciplined operational oversight.",
  },
  {
    title: "Product engineering",
    description:
      "End-to-end product development from concept through deployment, with emphasis on clean architecture, maintainable code, and scalable platform design.",
  },
  {
    title: "Governance and audit-aware systems",
    description:
      "Platforms designed with governance considerations, audit visibility, and structured controls — supporting enterprise accountability without overclaiming regulatory status.",
  },
];

export default function TechnologyPage() {
  return (
    <>
      <HeroSection
        headline="Technology and innovation"
        supportingCopy="The Blue Atlantic technology division builds internal and public-facing platforms, secure digital infrastructure, and governance-aware systems for the enterprise ecosystem."
      />
      <PageContainer>
        <SectionHeader
          title="What we develop"
          description="Our technology work supports the platforms and initiatives across the Blue Atlantic ecosystem — from financial infrastructure to workforce systems and intelligence platforms."
        />
        <div className="grid gap-6 md:grid-cols-2">
          {focusAreas.map((area) => (
            <Card key={area.title}>
              <h2 className="text-lg font-semibold text-brand-navy">
                {area.title}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-brand-muted md:text-base">
                {area.description}
              </p>
            </Card>
          ))}
        </div>
        <div className="mt-10 rounded-2xl border border-brand-border bg-brand-soft p-6 md:p-8">
          <p className="text-sm leading-relaxed text-brand-muted">
            Blue Atlantic technology platforms are designed for enterprise use
            and structured development. References to secure infrastructure or
            governance-aware systems describe design intent and development
            direction — not claims of certified cybersecurity, banking
            authorization, or regulated financial infrastructure.
          </p>
        </div>
      </PageContainer>
    </>
  );
}
