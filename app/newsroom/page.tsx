import type { Metadata } from "next";
import ContentSection from "@/components/ContentSection";
import HeroSection from "@/components/HeroSection";
import Card from "@/components/Card";

export const metadata: Metadata = {
  title: "Newsroom",
  description:
    "Blue Atlantic newsroom for company updates, ecosystem announcements, institutional notes, and future public releases.",
};

export default function NewsroomPage() {
  return (
    <>
      <HeroSection
        compact
        eyebrow="Newsroom"
        headline="Newsroom"
        supportingCopy="The Blue Atlantic newsroom will publish company updates, ecosystem announcements, institutional notes, and future public releases."
      />
      <ContentSection surface="soft">
        <Card className="card-accent-neutral mx-auto max-w-2xl text-center">
          <p className="section-label text-brand-atlantic">Coming soon</p>
          <h2 className="mt-4 text-xl font-semibold text-brand-navy">
            Updates in development
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-brand-muted md:text-base">
            The Blue Atlantic newsroom will serve as the central place for
            company announcements, ecosystem updates, institutional notes, and
            future public releases. Check back for published materials as they
            become available.
          </p>
        </Card>
      </ContentSection>
    </>
  );
}
