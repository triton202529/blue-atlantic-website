import Link from "next/link";
import Card from "./Card";

interface CompanyCardProps {
  name: string;
  description: string;
  category?: string;
  statusLabel?: string;
  href?: string;
  id?: string;
}

export default function CompanyCard({
  name,
  description,
  category,
  statusLabel,
  href,
  id,
}: CompanyCardProps) {
  const content = (
    <>
      {(category || statusLabel) && (
        <div className="mb-3 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-brand-muted">
          {category && <span>{category}</span>}
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
        <Card id={id} hover className="flex h-full flex-col">
          {content}
        </Card>
      </Link>
    );
  }

  return (
    <Card id={id} hover className="flex h-full flex-col">
      {content}
    </Card>
  );
}
