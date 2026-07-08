import Link from "next/link";
import Image from "next/image";
import Card from "./Card";
import {
  categoryVisualClasses,
  companyAccentClasses,
  type CompanyAccent,
} from "@/lib/card-themes";
import { getEcosystemLogo, type EcosystemLogoTreatment } from "@/lib/ecosystem-brand";

interface CompanyCardProps {
  name: string;
  description: string;
  category?: string;
  statusLabel?: string;
  href?: string;
  id?: string;
  accent?: CompanyAccent;
}

const headerTreatmentClasses: Record<EcosystemLogoTreatment, string> = {
  light: "bg-[#f7f5ef]",
  dark: "bg-brand-navy",
  neutral: "bg-brand-surface-blue/90",
};

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
  const logo = getEcosystemLogo(id);

  const header = logo ? (
    <div
      className={`-mx-6 -mt-6 mb-5 flex h-20 items-center justify-center rounded-t-2xl border-b border-brand-border/40 px-4 md:-mx-8 md:-mt-8 md:h-24 ${headerTreatmentClasses[logo.treatment]}`}
    >
      <Image
        src={logo.src}
        alt={logo.alt}
        width={200}
        height={48}
        className="h-9 w-auto max-w-[180px] object-contain object-center md:h-11 md:max-w-[200px]"
      />
    </div>
  ) : (
    <div
      aria-hidden="true"
      className={`-mx-6 -mt-6 mb-5 h-14 rounded-t-2xl border-b border-brand-border/40 md:-mx-8 md:-mt-8 ${categoryVisualClasses[accent]}`}
    />
  );

  const content = (
    <>
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
