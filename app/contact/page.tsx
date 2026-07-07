import type { Metadata } from "next";
import Button from "@/components/Button";
import ContentSection from "@/components/ContentSection";
import HeroSection from "@/components/HeroSection";
import SectionHeader from "@/components/SectionHeader";
import Card from "@/components/Card";
import { whyAccentClasses } from "@/lib/card-themes";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Blue Atlantic for institutional conversations, partnerships, platform inquiries, and general company inquiries.",
};

const contactCategories = [
  {
    title: "Institutional conversations",
    description:
      "For government entities, institutions, and enterprise organizations exploring structured engagement with Blue Atlantic on regional infrastructure and long-term development.",
  },
  {
    title: "Partnerships",
    description:
      "For organizations interested in strategic partnership, regional collaboration, or ecosystem integration with Blue Atlantic platforms and initiatives.",
  },
  {
    title: "Platform inquiries",
    description:
      "For questions about Tropicash, EliteHire Solutions, TRITON, Sentinel, Blue Atlantic Capital / IRD, or other platforms within the ecosystem.",
  },
  {
    title: "Developer and business conversations",
    description:
      "For developers, businesses, and collaborators interested in platform integration, technical conversations, or enterprise engagement with Blue Atlantic.",
  },
  {
    title: "General company inquiries",
    description:
      "For all other inquiries related to Blue Atlantic, its ecosystem, or future initiatives.",
  },
];

export default function ContactPage() {
  return (
    <>
      <HeroSection
        compact
        eyebrow="Contact"
        headline="Contact Blue Atlantic"
        supportingCopy="Blue Atlantic welcomes institutional conversations, partnerships, platform inquiries, developer and business discussions, and general company inquiries related to Caribbean enterprise infrastructure."
      />
      <ContentSection surface="blue" pattern>
        <SectionHeader
          label="Inquiries"
          title="How to reach us"
          description="Contact channels will be published here as they become available. This page does not include a live form at this stage."
        />
        <div className="grid gap-6 sm:grid-cols-2">
          {contactCategories.map((category, index) => (
            <Card
              key={category.title}
              hover
              className={whyAccentClasses[index % whyAccentClasses.length]}
            >
              <h2 className="text-lg font-semibold text-brand-navy">
                {category.title}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-brand-muted">
                {category.description}
              </p>
            </Card>
          ))}
        </div>
      </ContentSection>
      <ContentSection surface="white">
        <Card className="card-accent-neutral mx-auto max-w-2xl text-center">
          <p className="text-sm text-brand-muted">
            Official contact channels will be available in a future update.
            Please note your area of interest when reaching out through
            established Blue Atlantic channels.
          </p>
          <div className="mt-6">
            <Button href="/about" variant="primary">
              Learn about Blue Atlantic
            </Button>
          </div>
        </Card>
      </ContentSection>
    </>
  );
}
