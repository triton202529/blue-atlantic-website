import Image from "next/image";
import Button from "@/components/Button";
import ContentSection from "@/components/ContentSection";
import SectionHeader from "@/components/SectionHeader";
import { homePlatforms } from "@/lib/homepage";
import {
  ecosystemLogoTreatmentClasses,
  getEcosystemLogo,
} from "@/lib/ecosystem-brand";

function overviewLabel(name: string): string {
  if (name.includes("EliteHire")) {
    return "EliteHire Pro";
  }
  return name;
}

function overviewLogoSize(companyId: string): { width: number; height: number } {
  const logo = getEcosystemLogo(companyId);
  if (!logo) {
    return { width: 120, height: 48 };
  }

  const scale =
    companyId === "elitehire-solutions"
      ? 2
      : companyId === "sentinel"
        ? 1.85
        : companyId === "tropicash"
          ? 1.35
          : 1.55;

  return {
    width: Math.round(logo.size.maxWidth * scale),
    height: Math.round(logo.size.maxHeight * scale),
  };
}

export default function HomePlatformOverview() {
  return (
    <ContentSection surface="blue" dense containerClassName="!max-w-7xl">
      <SectionHeader
        label="Platforms"
        title="Platform ecosystem"
        description="Blue Atlantic develops and governs a focused portfolio of proprietary platforms. Each product serves a distinct role within the broader enterprise group."
      />

      <div className="ba-ecosystem-shell mb-5 p-5 md:mb-6 md:p-7">
        <div
          className="pointer-events-none absolute inset-0 ba-blueprint-grid opacity-50"
          aria-hidden="true"
        />
        <div className="relative">
          <div className="ba-ecosystem-hub px-5 py-4 text-center md:py-5">
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
            <div className="ba-connector-line h-4" />
          </div>

          <ul className="ba-platform-overview-rail" aria-label="Blue Atlantic platforms">
            {homePlatforms.map((platform) => {
              const logo = getEcosystemLogo(platform.id);
              const size = overviewLogoSize(platform.id);

              return (
                <li key={platform.id} className="ba-platform-overview-item">
                  <span
                    className={`ba-platform-overview-stage ${
                      logo
                        ? ecosystemLogoTreatmentClasses[logo.treatment]
                        : "bg-brand-soft"
                    }`}
                  >
                    {logo ? (
                      <Image
                        src={logo.src}
                        alt={logo.alt}
                        width={size.width}
                        height={size.height}
                        className={`ba-selector-logo ba-selector-logo--${platform.id}`}
                      />
                    ) : null}
                  </span>
                  <span className="ba-platform-overview-name">
                    {overviewLabel(platform.name)}
                  </span>
                  <span className="ba-platform-overview-category">
                    {platform.category}
                  </span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      <div>
        <Button href="/companies" variant="primary">
          Explore all platforms
        </Button>
      </div>
    </ContentSection>
  );
}
