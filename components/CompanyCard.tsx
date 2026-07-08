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

interface CompanyCardProps {
  name: string;
  description: string;
  category?: string;
  statusLabel?: string;
  href?: string;
  id?: string;
  accent?: CompanyAccent;
  platformUrl?: string;
  platformLabel?: string;
}

export default function CompanyCard({
  name,
  description,
  category,
  statusLabel,
  href,
  id,
  accent = "fintech",
  platformUrl,
  platformLabel,
}: CompanyCardProps) {
  const accentClass = companyAccentClasses[accent];
  const logo = getEcosystemLogo(id);

  const header = logo ? (
    <div
      className={`ecosystem-card-logo-header -mx-6 -mt-6 mb-5 flex items-center justify-center rounded-t-2xl border-b border-brand-border/40 md:-mx-8 md:-mt-8 ${ecosystemLogoTreatmentClasses[logo.treatment]}`}
    >
      <EcosystemLogo companyId={id} variant="card" />
    </div>
  ) : (
    <div
      aria-hidden="true"
      className={`-mx-6 -mt-6 mb-5 h-14 rounded-t-2xl border-b border-brand-border/40 md:-mx-8 md:-mt-8 ${categoryVisualClasses[accent]}`}
    />
  );

  return (
    <Card id={id} hover className={`flex h-full flex-col ${accentClass}`}>
      {header}
      {(category || statusLabel) && (
        <div className="mb-4 flex flex-wrap items-center gap-x-3 gap-y-1 border-b border-brand-border/60 pb-3 text-xs text-brand-muted">
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
      <h3 className="text-lg font-semibold text-brand-navy">{name}</h3>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-brand-muted md:text-base">
        {description}
      </p>
      {(href || platformUrl) && (
        <div className="mt-5 flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-5 sm:gap-y-2">
          {href && (
            <Link
              href={href}
              className="text-sm font-medium text-brand-atlantic transition-colors hover:underline"
            >
              Learn more
            </Link>
          )}
          {platformUrl && platformLabel && (
            <a
              href={platformUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-brand-atlantic transition-colors hover:underline"
            >
              {platformLabel}
            </a>
          )}
        </div>
      )}
    </Card>
  );
}
