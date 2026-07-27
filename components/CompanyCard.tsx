import Link from "next/link";
import Card from "./Card";
import EcosystemLogo from "./EcosystemLogo";
import PlatformAvailabilityBadge from "./PlatformAvailabilityBadge";
import {
  categoryVisualClasses,
  companyAccentClasses,
  type CompanyAccent,
} from "@/lib/card-themes";
import {
  ecosystemLogoTreatmentClasses,
  getEcosystemLogo,
} from "@/lib/ecosystem-brand";
import type { PlatformAvailabilityKind } from "@/lib/platform-availability";

interface ExternalLink {
  label: string;
  href: string;
}

interface CompanyCardProps {
  name: string;
  description: string;
  category?: string;
  availability?: PlatformAvailabilityKind;
  href?: string;
  id?: string;
  accent?: CompanyAccent;
  externalLink?: ExternalLink;
  compact?: boolean;
}

export default function CompanyCard({
  name,
  description,
  category,
  availability,
  href,
  id,
  accent = "fintech",
  externalLink,
  compact = false,
}: CompanyCardProps) {
  const accentClass = companyAccentClasses[accent];
  const logo = getEcosystemLogo(id);
  const cardPadding = compact ? "!p-5 md:!p-6" : "";
  const headerOffset = compact
    ? "-mx-5 -mt-5 mb-4 md:-mx-6 md:-mt-6"
    : "-mx-6 -mt-6 mb-5 md:-mx-8 md:-mt-8";

  const header = logo ? (
    <div
      className={`ecosystem-card-logo-header ${headerOffset} flex items-center justify-center rounded-t-2xl border-b border-brand-border/40 ${ecosystemLogoTreatmentClasses[logo.treatment]}`}
    >
      <EcosystemLogo companyId={id} variant="card" />
    </div>
  ) : (
    <div
      aria-hidden="true"
      className={`${headerOffset} h-14 rounded-t-2xl border-b border-brand-border/40 ${categoryVisualClasses[accent]}`}
    />
  );

  const showActions = Boolean(href || externalLink || availability === "coming-soon");

  return (
    <Card
      id={id}
      hover
      className={`flex h-full flex-col ${cardPadding} ${accentClass}`}
    >
      {header}
      {(category || availability) && (
        <div className="mb-3 flex flex-wrap items-center gap-x-3 gap-y-1.5 border-b border-brand-border/60 pb-2.5">
          {category && (
            <span className="text-xs font-medium text-brand-navy/80">
              {category}
            </span>
          )}
          {availability && <PlatformAvailabilityBadge kind={availability} />}
        </div>
      )}
      <h3 className="text-base font-semibold text-brand-navy md:text-lg">
        {name}
      </h3>
      <p
        className={`mt-2 flex-1 text-sm leading-relaxed text-brand-muted ${compact ? "" : "md:text-base"}`}
      >
        {description}
      </p>
      {showActions && (
        <div className="ba-platform-card-actions mt-4">
          {href && (
            <Link
              href={href}
              className="ba-platform-learn-link text-sm font-medium text-brand-atlantic transition-colors hover:underline"
            >
              Learn more
            </Link>
          )}
          {externalLink && (
            <a
              href={externalLink.href}
              target="_blank"
              rel="noopener noreferrer"
              className="ba-platform-visit-btn"
            >
              <span>{externalLink.label}</span>
              <span aria-hidden="true" className="ba-platform-visit-btn__icon">
                ↗
              </span>
            </a>
          )}
          {!externalLink && availability === "coming-soon" && (
            <PlatformAvailabilityBadge
              kind="coming-soon"
              className="ba-platform-coming-soon-note"
            />
          )}
        </div>
      )}
    </Card>
  );
}
