import Link from "next/link";
import Button from "@/components/Button";
import Card from "@/components/Card";
import ContentSection from "@/components/ContentSection";
import EcosystemLogo from "@/components/EcosystemLogo";
import SectionHeader from "@/components/SectionHeader";
import {
  homePlatforms,
  type HomePlatformStatus,
} from "@/lib/homepage";
import { companyAccentClasses } from "@/lib/card-themes";
import {
  ecosystemLogoTreatmentClasses,
  getEcosystemLogo,
} from "@/lib/ecosystem-brand";

function statusClasses(status: HomePlatformStatus): string {
  switch (status) {
    case "Available":
      return "border-brand-atlantic/30 bg-brand-surface-blue text-brand-navy";
    case "In development":
    case "Coming soon":
      return "border-brand-border bg-brand-soft text-brand-muted";
    case "Internal system":
      return "border-brand-navy/15 bg-brand-navy/5 text-brand-navy/80";
    default:
      return "border-brand-border bg-white text-brand-muted";
  }
}

export default function HomePlatformEcosystem() {
  return (
    <ContentSection surface="blue" dense containerClassName="!max-w-7xl">
      <SectionHeader
        label="Platforms"
        title="Platform ecosystem"
        description="Blue Atlantic develops and governs a focused set of platforms. Each product serves a distinct role within the broader enterprise group."
      />

      <div className="mb-8 overflow-hidden rounded-2xl border border-brand-border bg-white p-5 shadow-brand md:p-7">
        <p className="type-caption font-semibold uppercase tracking-wide text-brand-atlantic">
          Ecosystem relationship
        </p>
        <p className="mt-2 max-w-2xl type-body-sm text-brand-muted">
          Blue Atlantic sits at the center as the enterprise group. Platforms
          below are developed under shared standards. They do not all connect
          directly to each other.
        </p>
        <div className="mt-6 flex flex-col items-stretch gap-4">
          <div className="rounded-xl border border-brand-navy/15 bg-brand-navy px-5 py-4 text-center text-white">
            <p className="text-sm font-semibold">Blue Atlantic</p>
            <p className="mt-1 text-xs text-blue-100/70">
              Enterprise group and product direction
            </p>
          </div>
          <div
            className="mx-auto hidden h-6 w-px bg-brand-border md:block"
            aria-hidden="true"
          />
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {homePlatforms.map((platform) => (
              <div
                key={platform.id}
                className="rounded-xl border border-brand-border bg-brand-soft/60 px-4 py-3 text-center"
              >
                <p className="text-sm font-semibold text-brand-navy">
                  {platform.name}
                </p>
                <p className="mt-1 text-xs text-brand-muted">
                  {platform.category}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        {homePlatforms.map((platform) => {
          const logo = getEcosystemLogo(platform.id);

          return (
            <Card
              key={platform.id}
              hover
              className={`flex h-full flex-col overflow-hidden !p-0 ${companyAccentClasses[platform.accent]}`}
            >
              <div
                className={`ecosystem-card-logo-header flex items-center justify-center border-b border-brand-border/40 ${
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
                    className={`rounded-full border px-2.5 py-1 text-xs font-medium ${statusClasses(platform.status)}`}
                  >
                    {platform.status}
                  </span>
                </div>
                <h3 className="type-card text-brand-navy">{platform.name}</h3>
                <p className="mt-2 flex-1 type-body-sm leading-relaxed text-brand-muted">
                  {platform.description}
                </p>
                <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2">
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
