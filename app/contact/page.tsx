import type { Metadata } from "next";
import Button from "@/components/Button";
import ContentSection from "@/components/ContentSection";
import HeroSection from "@/components/HeroSection";
import SectionHeader from "@/components/SectionHeader";
import Card from "@/components/Card";
import { whyAccentClasses } from "@/lib/card-themes";
import { contactEmails } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Blue Atlantic",
  description:
    "Contact Blue Atlantic through official email for platform inquiries, partnerships, technology systems, automation projects, and general company matters.",
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
      "For organizations interested in strategic partnership, regional collaboration, ecosystem integrations, or conversations around Blue Atlantic platforms and initiatives.",
  },
  {
    title: "Platform inquiries",
    description:
      "For questions about Tropicash, EliteHire Pro, TRITON, Sentinel, or other platforms within the Blue Atlantic ecosystem.",
  },
  {
    title: "Technology systems and automation",
    description:
      "For businesses, institutions, and partners interested in practical systems, workflow automation, dashboards, internal tools, and product development.",
  },
  {
    title: "General company inquiries",
    description:
      "For other inquiries related to Blue Atlantic, its ecosystem, public website, or future initiatives.",
  },
];

export default function ContactPage() {
  return (
    <>
      <HeroSection
        compact
        eyebrow="Contact"
        headline="Contact Blue Atlantic"
        supportingCopy="Contact Blue Atlantic for institutional conversations, partnerships, platform inquiries, technology systems, automation projects, and general company matters related to Caribbean enterprise infrastructure."
      />

      <ContentSection surface="blue" pattern>
        <SectionHeader
          label="Contact"
          title="Official contact"
          description="For general company inquiries, platform discussions, partnerships, and technology conversations, contact Blue Atlantic through the official company email below."
        />
        <div className="grid gap-6 md:grid-cols-2">
          <Card hover className={whyAccentClasses[0]}>
            <a
              href={`mailto:${contactEmails.general}`}
              className="inline-block break-all text-lg font-semibold text-brand-navy transition-colors hover:text-brand-atlantic"
            >
              {contactEmails.general}
            </a>
            <p className="mt-3 text-sm leading-relaxed text-brand-muted">
              Primary company email for institutional, platform, partnership,
              and technology conversations.
            </p>
          </Card>
          <Card hover className={whyAccentClasses[1]}>
            <h2 className="text-lg font-semibold text-brand-navy">
              Direct company correspondence
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-brand-muted">
              For direct correspondence with Akim Wallace regarding Blue
              Atlantic matters, use the direct company email below.
            </p>
            <a
              href={`mailto:${contactEmails.direct}`}
              className="mt-5 inline-block break-all text-base font-semibold text-brand-navy transition-colors hover:text-brand-atlantic"
            >
              {contactEmails.direct}
            </a>
          </Card>
        </div>
      </ContentSection>

      <ContentSection surface="white">
        <SectionHeader
          label="Inquiries"
          title="How to reach us"
          description="Choose the inquiry category that best matches your conversation, then email Blue Atlantic through the official contact channels above."
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

      <ContentSection surface="blue" pattern>
        <Card className="card-accent-neutral mx-auto max-w-2xl text-center">
          <h2 className="text-xl font-semibold text-brand-navy">
            Start the conversation
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-brand-muted">
            Use the official Blue Atlantic contact email for inquiries related
            to platforms, technology capability, partnerships, and Caribbean
            enterprise development.
          </p>
          <div className="mt-6">
            <Button href={`mailto:${contactEmails.general}`} variant="primary">
              Email Blue Atlantic
            </Button>
          </div>
        </Card>
      </ContentSection>
    </>
  );
}
