import Link from "next/link";
import Button from "@/components/Button";
import Card from "@/components/Card";
import ContentSection from "@/components/ContentSection";
import EcosystemLogo from "@/components/EcosystemLogo";
import PlatformSelector from "@/components/home/PlatformSelector";
import SectionHeader from "@/components/SectionHeader";
import {
  homePlatforms,
  homePlatformStatusClasses,
} from "@/lib/homepage";
import { companyAccentClasses } from "@/lib/card-themes";
import {
  ecosystemLogoTreatmentClasses,
  getEcosystemLogo,
} from "@/lib/ecosystem-brand";

export default function HomePlatformEcosystem() {
  return (
    <ContentSection surface="blue" dense containerClassName="!max-w-7xl">
      <SectionHeader
        label="Platforms"
        title="Platform ecosystem"
        description="Blue Atlantic develops and governs a focused set of platforms. Each product serves a distinct role within the broader enterprise group."
      />

      <div className="ba-ecosystem-shell mb-8 p-5 md:p-7">
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

      <div className="ba-platform-cards-secondary grid gap-4 md:grid-cols-2 md:gap-5">
        {homePlatforms.map((platform) => {
          const logo = getEcosystemLogo(platform.id);

          return (
            <Card
              key={platform.id}
              hover
              className={`ba-home-card flex h-full flex-col overflow-hidden !p-0 ${companyAccentClasses[platform.accent]}`}
            >
              <div
                className={`ba-platform-logo-stage ecosystem-card-logo-header flex items-center justify-center border-b border-brand-border/40 ${
                  logo
                    ? ecosystemLogoTreatmentClasses[logo.treatment]
                    : "bg-brand-soft"
                }`}
              >
                <EcosystemLogo companyId={platform.id} variant="card" />
              </div>
              <div className="flex flex-1 flex-col p-5 md:p-6">
                <div className="mb-3 flex flex-wrap items-center gap-2">
                  <span className="text-xs font-medium text-brand-navy/80">
                    {platform.category}
                  </span>
                  <span
                    className={`rounded-full border px-2.5 py-1 text-xs font-medium ${homePlatformStatusClasses(platform.status)}`}
                  >
                    {platform.status}
                  </span>
                </div>
                <h3 className="type-card text-brand-navy">{platform.name}</h3>
                <p className="mt-2 flex-1 type-body-sm leading-relaxed text-brand-muted">
                  {platform.description}
                </p>
                <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2 border-t border-brand-border/70 pt-4">
                  {platform.externalLink ? (
                    <a
                      href={platform.externalLink.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex min-h-[var(--touch-min)] items-center text-sm font-medium text-brand-atlantic transition-colors hover:underline"
                    >
                      {platform.externalLink.label}
                    </a>
                  ) : null}
                  <Link
                    href={platform.href}
                    className="inline-flex min-h-[var(--touch-min)] items-center text-sm text-brand-muted transition-colors hover:text-brand-atlantic hover:underline"
                  >
                    View on Platforms
                  </Link>
                </div>
              </div>
            </Card>
          );
        })}
      </div>

      <div className="mt-8">
        <Button href="/companies" variant="primary">
          Explore all platforms
        </Button>
      </div>
    </ContentSection>
  );
}
