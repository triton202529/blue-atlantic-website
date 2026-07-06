import type { Metadata } from "next";
import Button from "@/components/Button";
import HeroSection from "@/components/HeroSection";
import PageContainer from "@/components/PageContainer";
import SectionHeader from "@/components/SectionHeader";
import Card from "@/components/Card";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Blue Atlantic for partnerships, institutional conversations, platform inquiries, and general contact.",
};

const contactCategories = [
  {
    title: "Partnerships",
    description:
      "For organizations interested in strategic partnership, regional collaboration, or ecosystem integration with Blue Atlantic platforms.",
  },
  {
    title: "Institutional conversations",
    description:
      "For government entities, institutions, and enterprise organizations exploring structured engagement with Blue Atlantic.",
  },
  {
    title: "Platform inquiries",
    description:
      "For questions about Tropicash, EliteHire Solutions, TRITON, Sentinel, or other Blue Atlantic platforms and initiatives.",
  },
  {
    title: "General contact",
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
        supportingCopy="We welcome professional inquiries from partners, institutions, businesses, and collaborators interested in Caribbean enterprise infrastructure."
      />
      <PageContainer>
        <SectionHeader
          eyebrow="Inquiries"
          title="How to reach us"
          description="Contact information and inquiry channels will be published here. This page does not include a live form at this stage."
        />
        <div className="grid gap-6 sm:grid-cols-2">
          {contactCategories.map((category) => (
            <Card key={category.title} hover>
              <h2 className="text-lg font-semibold text-brand-navy">
                {category.title}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-brand-muted">
                {category.description}
              </p>
            </Card>
          ))}
        </div>
        <Card className="mt-10 border-brand-atlantic/10 bg-brand-soft text-center">
          <p className="text-sm text-brand-muted">
            Contact channels will be available in a future update. For now,
            please note your area of interest when reaching out through
            established Blue Atlantic channels.
          </p>
          <div className="mt-6">
            <Button href="/about" variant="primary">
              Learn about Blue Atlantic
            </Button>
          </div>
        </Card>
      </PageContainer>
    </>
  );
}
