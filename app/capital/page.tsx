import type { Metadata } from "next";
import Button from "@/components/Button";
import ContentSection from "@/components/ContentSection";
import HeroSection from "@/components/HeroSection";
import PageVisual from "@/components/PageVisual";
import SectionHeader from "@/components/SectionHeader";
import Card from "@/components/Card";

export const metadata: Metadata = {
  title: "Capital",
  description:
    "Blue Atlantic Capital and IRD represent the company's research and capital strategy direction, focused on disciplined analysis, capital planning, and long-term institutional development.",
};

const directionAreas = [
  {
    title: "Research direction",
    description:
      "Structured research into Caribbean economic development, enterprise infrastructure, financial systems, and long-term regional growth opportunities.",
  },
  {
    title: "Capital strategy",
    description:
      "Planning frameworks for capital allocation, growth priorities, funding readiness, and disciplined enterprise development.",
  },
  {
    title: "Institutional analysis",
    description:
      "Long-term analysis of governance, operating structures, financial records, and organizational systems designed to support durable regional businesses.",
  },
];

export default function CapitalPage() {
  return (
    <>
      <HeroSection
        compact
        eyebrow="Capital"
        headline="Capital and research direction"
        supportingCopy="Blue Atlantic Capital and IRD represent the company's research and capital strategy direction, focused on disciplined analysis, capital planning, regional opportunity research, and long-term institutional development."
      />
      <ContentSection surface="soft">
        <PageVisual
          asset="research"
          size="md"
          caption="Research and capital strategy direction within Blue Atlantic"
          className="mb-10"
        />
        <SectionHeader
          label="Future direction"
          title="Research, capital strategy, and institutional development"
          description="This area of Blue Atlantic is being developed to support long-term planning, internal research, capital strategy, and structured analysis across the enterprise group."
        />
        <div className="grid gap-6 md:grid-cols-3">
          {directionAreas.map((area) => (
            <Card key={area.title} hover className="card-accent-capital">
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
      <ContentSection surface="blue">
        <Card className="card-accent-neutral">
          <h3 className="text-base font-semibold text-brand-navy">
            Important notice
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-brand-muted">
            Blue Atlantic Capital / IRD is an internal research and strategy
            direction within Blue Atlantic. Public investment services,
            brokerage, and asset management services are not currently offered.
          </p>
        </Card>
        <div className="mt-8">
          <Button href="/contact" variant="primary">
            Institutional inquiries
          </Button>
        </div>
      </ContentSection>
    </>
  );
}
