import Link from "next/link";
import Card from "./Card";
import EcosystemLogo from "./EcosystemLogo";
import {
  categoryVisualClasses,
  companyAccentClasses,
  type CompanyAccent,
} from "@/lib/card-themes";
import {
  ecosystemLogoTreatmentClasses,
  getEcosystemLogo,
} from "@/lib/ecosystem-brand";

interface ExternalLink {
  label: string;
  href: string;
}

interface CompanyCardProps {
  name: string;
  description: string;
  category?: string;
  statusLabel?: string;
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
  statusLabel,
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

  return (
    <Card
      id={id}
      hover
      className={`flex h-full flex-col ${cardPadding} ${accentClass}`}
    >
      {header}
      {(category || statusLabel) && (
        <div className="mb-3 flex flex-wrap items-center gap-x-3 gap-y-1 border-b border-brand-border/60 pb-2.5 text-xs text-brand-muted">
          {category && (
            <span className="font-medium text-brand-navy/80">{category}</span>
          )}
          {category && statusLabel && (
            <span className="text-brand-border" aria-hidden="true">
              |
            </span>
          )}
          {statusLabel && <span>{statusLabel}</span>}
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
      {(href || externalLink) && (
        <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-1.5">
          {href && (
            <Link
              href={href}
              className="text-sm font-medium text-brand-atlantic transition-colors hover:underline"
            >
              Learn more
            </Link>
          )}
          {externalLink && (
            <a
              href={externalLink.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-brand-muted transition-colors hover:text-brand-atlantic hover:underline"
            >
              {externalLink.label}
            </a>
          )}
        </div>
      )}
    </Card>
  );
}
