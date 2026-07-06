import type { Metadata } from "next";
import Button from "@/components/Button";
import ContentSection from "@/components/ContentSection";
import HeroSection from "@/components/HeroSection";
import SectionHeader from "@/components/SectionHeader";
import Card from "@/components/Card";

export const metadata: Metadata = {
  title: "Capital",
  description:
    "Blue Atlantic Capital and IRD represent future research, capital strategy, and institutional development direction within the Blue Atlantic enterprise group.",
};

const directionAreas = [
  {
    title: "Research direction",
    description:
      "Structured research into regional economic development, enterprise infrastructure, and long-term institutional growth opportunities within the Caribbean context.",
  },
  {
    title: "Capital strategy",
    description:
      "Future direction for capital allocation frameworks, institutional development planning, and disciplined analysis of enterprise growth pathways.",
  },
  {
    title: "Institutional development",
    description:
      "Long-term focus on building enduring enterprise structures, governance frameworks, and organizational systems designed for sustainable regional impact.",
  },
];

export default function CapitalPage() {
  return (
    <>
      <HeroSection
        compact
        eyebrow="Capital"
        headline="Capital and research direction"
        supportingCopy="Blue Atlantic Capital and IRD represent a future direction for research, capital strategy, disciplined analysis, and institutional development within the enterprise group."
      />
      <ContentSection surface="soft">
        <SectionHeader
          label="Future direction"
          title="Research and institutional development"
          description="This area of Blue Atlantic is in development. It reflects our long-term research and capital direction — not a live investment product, advisory service, or regulated financial offering."
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
            Blue Atlantic Capital / IRD is a research and development direction
            within the Blue Atlantic enterprise group. Nothing on this page
            constitutes investment advice, an offer to manage assets, or a
            solicitation to invest. Blue Atlantic is not a licensed broker,
            asset manager, or regulated investment advisor.
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
