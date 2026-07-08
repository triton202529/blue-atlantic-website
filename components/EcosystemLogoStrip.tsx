import EcosystemLogo from "@/components/EcosystemLogo";
import { ecosystemCompanyIds } from "@/lib/ecosystem-brand";

interface EcosystemLogoStripProps {
  className?: string;
}

export default function EcosystemLogoStrip({
  className = "",
}: EcosystemLogoStripProps) {
  return (
    <div
      className={`ecosystem-logo-rail flex flex-wrap items-center justify-center gap-2 md:flex-nowrap md:justify-start md:gap-3 ${className}`}
      aria-label="Blue Atlantic ecosystem companies"
    >
      {ecosystemCompanyIds.map((companyId) => (
        <EcosystemLogo key={companyId} companyId={companyId} variant="strip" />
      ))}
    </div>
  );
}
