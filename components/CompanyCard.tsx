import Link from "next/link";
import Card from "./Card";
import {
  categoryVisualClasses,
  companyAccentClasses,
  type CompanyAccent,
} from "@/lib/card-themes";

interface CompanyCardProps {
  name: string;
  description: string;
  category?: string;
  statusLabel?: string;
  href?: string;
  id?: string;
  accent?: CompanyAccent;
}

export default function CompanyCard({
  name,
  description,
  category,
  statusLabel,
  href,
  id,
  accent = "fintech",
}: CompanyCardProps) {
  const accentClass = companyAccentClasses[accent];

  const content = (
    <>
      <div
        aria-hidden="true"
        className={`-mx-6 -mt-6 mb-5 h-14 rounded-t-2xl border-b border-brand-border/40 md:-mx-8 md:-mt-8 ${categoryVisualClasses[accent]}`}
      />
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
      {href && (
        <span className="mt-5 text-sm font-medium text-brand-atlantic group-hover:underline">
          Learn more
        </span>
      )}
    </>
  );

  if (href) {
    return (
      <Link href={href} className="group block h-full">
        <Card id={id} hover className={`flex h-full flex-col ${accentClass}`}>
          {content}
        </Card>
      </Link>
    );
  }

  return (
    <Card id={id} hover className={`flex h-full flex-col ${accentClass}`}>
      {content}
    </Card>
  );
}
