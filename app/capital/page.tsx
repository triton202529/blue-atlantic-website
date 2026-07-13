import type { Metadata } from "next";
import Button from "@/components/Button";
import CapitalResearchFramework from "@/components/CapitalResearchFramework";
import ContentSection from "@/components/ContentSection";
import HeroSection from "@/components/HeroSection";
import SectionHeader from "@/components/SectionHeader";
import Card from "@/components/Card";

export const metadata: Metadata = {
  title: "Capital",
  description:
    "Blue Atlantic Capital and IRD represent a future research and capital strategy direction focused on disciplined analysis, capital planning, regional opportunity research, and long-term institutional development.",
};

const directionAreas = [
  {
    title: "Regional opportunity research",
    description:
      "Structured research into Caribbean economic development, enterprise infrastructure, market gaps, and long-term regional growth opportunities.",
  },
  {
    title: "Capital planning frameworks",
    description:
      "Disciplined planning structures for capital allocation thinking, development priorities, business growth pathways, and institutional preparation.",
  },
  {
    title: "Institutional analysis",
    description:
      "Long-term analysis of governance, operating structures, financial records, controls, and organizational systems needed to support durable regional businesses.",
  },
  {
    title: "Enterprise development planning",
    description:
      "Research and planning support for building stronger business infrastructure, practical operating models, and scalable enterprise systems.",
  },
  {
    title: "Governance and review discipline",
    description:
      "Structured review of decisions, risks, records, controls, and accountability practices that support serious institutional development.",
  },
  {
    title: "Long-term research direction",
    description:
      "A disciplined research direction focused on patient development, regional context, and the foundations required for future capital strategy.",
  },
];

export default function CapitalPage() {
  return (
    <>
      <HeroSection
        compact
        eyebrow="Capital"
        headline="Capital and research direction"
        supportingCopy="Blue Atlantic Capital and IRD represent a future research and capital strategy direction within Blue Atlantic, focused on disciplined analysis, capital planning, regional opportunity research, and long-term institutional development."
      />
      <ContentSection
        surface="soft"
        dense
        containerClassName="!max-w-[88rem] !py-10 md:!py-14 lg:!py-16"
      >
        <CapitalResearchFramework />
      </ContentSection>
      <ContentSection
        surface="white"
        dense
        pattern
        containerClassName="!max-w-[88rem] !pt-10 !pb-10 md:!pt-12 md:!pb-14 lg:!pt-14 lg:!pb-14"
      >
        <SectionHeader
          label="Future direction"
          title="Research, capital strategy, and institutional development"
          description="This area of Blue Atlantic is being developed to support long-term planning, internal research, capital strategy, regional opportunity analysis, and structured institutional review across the enterprise group."
        />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {directionAreas.map((area) => (
            <Card
              key={area.title}
              hover
              className="card-accent-capital flex h-full flex-col !p-6 md:!p-7"
            >
              <h2 className="text-lg font-semibold text-brand-navy">
                {area.title}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-brand-muted">
                {area.description}
              </p>
            </Card>
          ))}
        </div>
      </ContentSection>
      <ContentSection
        surface="blue"
        dense
        containerClassName="!max-w-[88rem] !py-10 md:!py-12 lg:!py-14"
      >
        <div className="grid gap-6 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:items-center">
          <Card className="card-accent-neutral">
            <h3 className="text-base font-semibold text-brand-navy">
              Development status
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-brand-muted">
              Blue Atlantic Capital / IRD is a future research and strategy
              direction within Blue Atlantic. Public investment services,
              brokerage, and asset management services are not currently
              offered.
            </p>
          </Card>
          <div className="rounded-2xl border border-brand-border bg-white p-6 shadow-brand md:p-8">
            <h2 className="text-xl font-semibold text-brand-navy md:text-2xl">
              Institutional inquiries
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-brand-muted md:text-base">
              Blue Atlantic welcomes conversations with institutions, businesses,
              and regional partners interested in long-term research, enterprise
              development, and disciplined planning.
            </p>
            <div className="mt-6">
              <Button href="/contact" variant="primary">
                Institutional inquiries
              </Button>
            </div>
          </div>
        </div>
      </ContentSection>
    </>
  );
}
