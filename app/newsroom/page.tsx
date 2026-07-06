import type { Metadata } from "next";
import HeroSection from "@/components/HeroSection";
import PageContainer from "@/components/PageContainer";
import Card from "@/components/Card";

export const metadata: Metadata = {
  title: "Newsroom",
  description:
    "Blue Atlantic newsroom for future company updates, announcements, and publications.",
};

export default function NewsroomPage() {
  return (
    <>
      <HeroSection
        headline="Newsroom"
        supportingCopy="Company updates, announcements, and publications from Blue Atlantic will appear here as they become available."
      />
      <PageContainer>
        <Card className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-brand-atlantic">
            Coming soon
          </p>
          <h2 className="mt-4 text-xl font-semibold text-brand-navy">
            Updates in development
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-brand-muted md:text-base">
            The Blue Atlantic newsroom will serve as the central place for
            company announcements, ecosystem updates, and institutional
            publications. Check back for future releases.
          </p>
        </Card>
      </PageContainer>
    </>
  );
}
