import EcosystemLogo from "@/components/EcosystemLogo";
import { ecosystemCompanyIds } from "@/lib/ecosystem-brand";

interface EcosystemLogoStripProps {
  className?: string;
  variant?: "strip" | "compact";
}

export default function EcosystemLogoStrip({
  className = "",
  variant = "strip",
}: EcosystemLogoStripProps) {
  return (
    <div
      className={`flex flex-wrap items-center gap-3 md:gap-4 ${className}`}
      aria-label="Blue Atlantic ecosystem companies"
    >
      {ecosystemCompanyIds.map((companyId) => (
        <EcosystemLogo key={companyId} companyId={companyId} variant={variant} />
      ))}
    </div>
  );
}
