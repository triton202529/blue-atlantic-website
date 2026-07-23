import Button from "@/components/Button";
import ContentSection from "@/components/ContentSection";
import PlatformSelector from "@/components/home/PlatformSelector";
import SectionHeader from "@/components/SectionHeader";

export default function AboutPlatformExplorer() {
  return (
    <ContentSection
      surface="white"
      dense
      className="!bg-transparent"
      containerClassName="!max-w-[88rem] !pt-10 !pb-12 md:!pt-12 md:!pb-14 lg:!pt-12 lg:!pb-16"
    >
      <SectionHeader
        label="Platforms"
        title="Explore our platforms"
        description="Explore each platform to see how it contributes to Blue Atlantic's broader enterprise strategy and long-term institutional vision."
      />

      <div className="ba-about-platform-shell mb-5 p-5 md:mb-6 md:p-7">
        <div
          className="pointer-events-none absolute inset-0 ba-blueprint-grid opacity-40"
          aria-hidden="true"
        />
        <div className="relative">
          <div className="ba-ecosystem-hub mb-4 px-5 py-4 text-center md:mb-5 md:py-5">
            <p className="text-sm font-semibold tracking-tight md:text-base">
              Blue Atlantic
            </p>
            <p className="mt-1 text-xs text-blue-100/70">
              Enterprise group and product direction
            </p>
          </div>

          <PlatformSelector caption="Explore our platforms" hideCaption />
        </div>
      </div>

      <div>
        <Button href="/companies" variant="primary">
          View all platforms
        </Button>
      </div>
    </ContentSection>
  );
}
