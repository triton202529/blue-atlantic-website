import Button from "@/components/Button";
import ContentSection from "@/components/ContentSection";

export default function HomeFinalCta() {
  return (
    <ContentSection
      surface="soft"
      dense
      pattern
      containerClassName="!max-w-7xl"
    >
      <div className="ba-home-cta-panel mx-auto max-w-3xl px-6 py-10 text-center md:px-10 md:py-12">
        <div
          className="pointer-events-none absolute inset-0 ba-blueprint-grid opacity-40"
          aria-hidden="true"
        />
        <div className="relative">
          <p className="type-eyebrow mb-3 text-brand-atlantic">Next step</p>
          <h2 className="type-section text-brand-navy">
            Start a conversation with Blue Atlantic
          </h2>
          <p className="mx-auto mt-4 max-w-2xl type-body-lg text-brand-muted">
            Blue Atlantic welcomes conversations with businesses, institutions,
            developers, and partners ready to discuss platforms, systems, and
            Caribbean enterprise development.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button href="/contact" variant="primary" size="lg">
              Start a conversation
            </Button>
            <Button href="/companies" variant="secondary" size="lg">
              Explore platforms
            </Button>
          </div>
        </div>
      </div>
    </ContentSection>
  );
}
