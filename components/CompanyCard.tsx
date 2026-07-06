import Link from "next/link";
import Card from "./Card";

interface CompanyCardProps {
  name: string;
  description: string;
  category?: string;
  statusLabel?: string;
  href?: string;
  id?: string;
  featured?: boolean;
}

export default function CompanyCard({
  name,
  description,
  category,
  statusLabel,
  href,
  id,
  featured = false,
}: CompanyCardProps) {
  const content = (
    <>
      <div className="mb-4 flex flex-wrap items-center gap-2">
        {category && (
          <span className="rounded-md bg-brand-soft px-2 py-0.5 text-[11px] font-medium uppercase tracking-wide text-brand-atlantic">
            {category}
          </span>
        )}
        {statusLabel && (
          <span className="rounded-md border border-brand-border px-2 py-0.5 text-[11px] font-medium text-brand-muted">
            {statusLabel}
          </span>
        )}
      </div>
      <h3 className="text-lg font-semibold text-brand-navy">{name}</h3>
      <p className="mt-3 text-sm leading-relaxed text-brand-muted md:text-base">
        {description}
      </p>
      {href && (
        <span className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-brand-atlantic transition-colors group-hover:text-brand-atlantic-light">
          View details
          <span aria-hidden="true">→</span>
        </span>
      )}
    </>
  );

  const cardClass = featured
    ? "h-full border-brand-atlantic/20 bg-gradient-to-br from-white to-brand-soft/50"
    : "h-full";

  if (href) {
    return (
      <Link href={href} className="group block h-full">
        <Card id={id} hover className={cardClass}>
          {content}
        </Card>
      </Link>
    );
  }

  return (
    <Card id={id} hover={!!featured} className={cardClass}>
      {content}
    </Card>
  );
}
