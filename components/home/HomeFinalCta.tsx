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
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="type-section text-brand-navy">
          Start a conversation with Blue Atlantic
        </h2>
        <p className="mt-4 type-body-lg text-brand-muted">
          Blue Atlantic welcomes conversations with businesses, institutions,
          developers, and partners ready to discuss platforms, systems, and
          Caribbean enterprise development.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button href="/contact" variant="primary">
            Start a conversation
          </Button>
          <Button href="/companies" variant="secondary">
            Explore platforms
          </Button>
        </div>
      </div>
    </ContentSection>
  );
}
