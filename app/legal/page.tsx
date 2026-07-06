import type { Metadata } from "next";
import HeroSection from "@/components/HeroSection";
import PageContainer from "@/components/PageContainer";
import Card from "@/components/Card";

export const metadata: Metadata = {
  title: "Legal",
  description:
    "Legal information and disclaimers for the Blue Atlantic corporate website.",
};

export default function LegalPage() {
  return (
    <>
      <HeroSection
        headline="Legal information"
        supportingCopy="Important legal notices and disclaimers regarding the Blue Atlantic corporate website and ecosystem platforms."
      />
      <PageContainer>
        <div className="mx-auto max-w-3xl space-y-6">
          <Card>
            <h2 className="text-lg font-semibold text-brand-navy">
              Informational content
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-brand-muted md:text-base">
              The content on this website is provided for general informational
              purposes only. It describes Blue Atlantic as an enterprise group
              and its platforms, initiatives, and development direction. Nothing
              on this website constitutes financial advice, investment advice,
              legal advice, or an offer to provide regulated services.
            </p>
          </Card>
          <Card>
            <h2 className="text-lg font-semibold text-brand-navy">
              Platform-specific terms
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-brand-muted md:text-base">
              Individual Blue Atlantic platforms and initiatives — including
              Tropicash, EliteHire Solutions, TRITON, Sentinel, and Blue
              Atlantic Capital / IRD — may operate under separate legal terms,
              privacy policies, and service agreements when launched or made
              publicly available.
            </p>
          </Card>
          <Card>
            <h2 className="text-lg font-semibold text-brand-navy">
              No regulated services claimed
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-brand-muted md:text-base">
              Blue Atlantic does not claim to be a licensed bank, regulated
              investment manager, broker, or asset manager through this website.
              References to financial infrastructure, capital direction, or
              investment research describe development direction and platform
              design — not live regulated financial services.
            </p>
          </Card>
          <Card>
            <h2 className="text-lg font-semibold text-brand-navy">
              Intellectual property
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-brand-muted md:text-base">
              All content, branding, and materials on this website are the
              property of Blue Atlantic unless otherwise stated. Unauthorized
              reproduction or use is prohibited.
            </p>
          </Card>
        </div>
      </PageContainer>
    </>
  );
}
