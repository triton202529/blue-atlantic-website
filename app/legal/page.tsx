import type { Metadata } from "next";
import ContentSection from "@/components/ContentSection";
import HeroSection from "@/components/HeroSection";
import Card from "@/components/Card";
import { whyAccentClasses } from "@/lib/card-themes";

export const metadata: Metadata = {
  title: "Legal information",
  description:
    "Legal information and disclaimers for the Blue Atlantic Inc. corporate website.",
};

const legalSections = [
  {
    title: "Informational website",
    content:
      "This website is provided for general informational purposes. It describes Blue Atlantic Inc., its platforms, systems, technology capabilities, and development direction. Nothing on this website creates a contract, guarantee, offer, or professional advisory relationship.",
  },
  {
    title: "No regulated financial services",
    content:
      "Blue Atlantic Inc. does not present itself through this website as a licensed bank, brokerage firm, investment manager, or regulated financial institution. References to financial technology, payment infrastructure, financial oversight, or capital direction describe platform development and company direction only.",
  },
  {
    title: "Platform and product information",
    content:
      "Descriptions of Tropicash, EliteHire Pro, TRITON, Sentinel, and other Blue Atlantic Inc. initiatives are provided to explain the Blue Atlantic ecosystem and development direction. Individual platforms may operate under their own terms, policies, and service agreements when launched or made publicly available.",
  },
  {
    title: "Future services and approvals",
    content:
      "Some services, features, and platform capabilities described on this website may be in development, subject to separate approvals, technical requirements, operational readiness, or future terms before they become available.",
  },
  {
    title: "Privacy and data collection",
    content:
      "This website does not currently include live forms, account creation, payments, or user dashboards. If Blue Atlantic Inc. adds interactive features, contact forms, analytics, or account-based services in the future, additional privacy terms may be published.",
  },
  {
    title: "Intellectual property",
    content:
      "Blue Atlantic Inc. names, branding, logos, website content, platform descriptions, and related materials are owned by Blue Atlantic Inc. unless otherwise stated. Unauthorized reproduction, copying, or misuse is prohibited.",
  },
];

export default function LegalPage() {
  return (
    <>
      <HeroSection
        compact
        eyebrow="Legal"
        headline="Legal information"
        supportingCopy="Legal notices and disclaimers for the Blue Atlantic Inc. website, platform information, technology capability descriptions, and public-facing company content."
      />
      <ContentSection
        surface="blue"
        pattern
        dense
        containerClassName="!max-w-5xl !py-10 md:!py-12 lg:!py-14"
      >
        <div className="grid gap-5 md:grid-cols-2">
          {legalSections.map((section, index) => (
            <Card
              key={section.title}
              hover
              className={`${whyAccentClasses[index % whyAccentClasses.length]} !p-6`}
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
