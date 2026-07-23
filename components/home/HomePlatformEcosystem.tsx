import Button from "@/components/Button";
import ContentSection from "@/components/ContentSection";
import PlatformSelector from "@/components/home/PlatformSelector";
import SectionHeader from "@/components/SectionHeader";

export default function HomePlatformEcosystem() {
  return (
    <ContentSection surface="blue" dense containerClassName="!max-w-7xl">
      <SectionHeader
        label="Platforms"
        title="Platform ecosystem"
        description="Blue Atlantic develops and governs a focused set of platforms. Each product serves a distinct role within the broader enterprise group."
      />

      <div className="ba-ecosystem-shell mb-5 p-5 md:mb-6 md:p-7">
        <div
          className="pointer-events-none absolute inset-0 ba-blueprint-grid opacity-50"
          aria-hidden="true"
        />
        <div className="relative">
          <p className="type-caption font-semibold uppercase tracking-wide text-brand-atlantic">
            Ecosystem relationship
          </p>
          <p className="mt-2 max-w-2xl type-body-sm text-brand-muted">
            Blue Atlantic sits at the center as the enterprise group. Platforms
            below are developed under shared standards. They do not all connect
            directly to each other.
          </p>

          <div className="mt-7 flex flex-col items-stretch">
            <div className="ba-ecosystem-hub px-5 py-5 text-center">
              <p className="text-sm font-semibold tracking-tight md:text-base">
                Blue Atlantic
              </p>
              <p className="mt-1 text-xs text-blue-100/70">
                Enterprise group and product direction
              </p>
            </div>

            <div
              className="relative my-1 flex flex-col items-center"
              aria-hidden="true"
            >
              <div className="ba-connector-line h-5" />
            </div>

            <PlatformSelector />
          </div>
        </div>
      </div>

      <div className="mt-0">
        <Button href="/companies" variant="primary">
          Explore all platforms
        </Button>
      </div>
    </ContentSection>
  );
}
