import type { Metadata } from "next";
import ContentSection from "@/components/ContentSection";
import HeroSection from "@/components/HeroSection";
import Card from "@/components/Card";
import { whyAccentClasses } from "@/lib/card-themes";

export const metadata: Metadata = {
  title: "Legal",
  description:
    "Legal information and disclaimers for the Blue Atlantic corporate website.",
};

const legalSections = [
  {
    title: "Informational content",
    content:
      "The content on this website is provided for general informational purposes only. It describes Blue Atlantic as an enterprise group and its platforms, initiatives, and development direction. Nothing on this website constitutes financial advice, investment advice, legal advice, or an offer to provide regulated services.",
  },
  {
    title: "No financial or investment advice",
    content:
      "Nothing on this website should be interpreted as financial advice, investment advice, or a recommendation to buy, sell, or hold any financial product. Blue Atlantic does not offer investment products or regulated financial services through this website.",
  },
  {
    title: "No banking or brokerage representation",
    content:
      "Blue Atlantic does not claim to be a licensed bank, regulated investment manager, broker, or asset manager through this website. References to financial infrastructure describe technology direction, platform design, and operational systems. They do not represent live regulated financial services.",
  },
  {
    title: "Platform-specific terms",
    content:
      "Individual Blue Atlantic platforms and initiatives, including Tropicash, EliteHire Solutions, TRITON, and Sentinel, may operate under separate legal terms, privacy policies, and service agreements when launched or made publicly available.",
  },
  {
    title: "Future services and approvals",
    content:
      "Future services, products, or platform capabilities described on this website may be subject to separate terms, regulatory requirements, and approvals before they become available. Descriptions of future direction do not represent live offerings.",
  },
  {
    title: "Intellectual property",
    content:
      "All content, branding, and materials on this website are the property of Blue Atlantic unless otherwise stated. Unauthorized reproduction or use is prohibited.",
  },
];

export default function LegalPage() {
  return (
    <>
      <HeroSection
        compact
        eyebrow="Legal"
        headline="Legal information"
        supportingCopy="Important legal notices and disclaimers regarding the Blue Atlantic corporate website, ecosystem platforms, and informational content."
      />
      <ContentSection surface="blue" pattern>
        <div className="mx-auto max-w-3xl space-y-5">
          {legalSections.map((section, index) => (
            <Card
              key={section.title}
              hover
              className={whyAccentClasses[index % whyAccentClasses.length]}
            >
              <h2 className="text-lg font-semibold text-brand-navy">
                {section.title}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-brand-muted md:text-base">
                {section.content}
              </p>
            </Card>
          ))}
        </div>
      </ContentSection>
    </>
  );
}
