import Image from "next/image";
import {
  getEcosystemLogo,
  type EcosystemLogoTreatment,
} from "@/lib/ecosystem-brand";

type EcosystemLogoVariant = "card" | "strip" | "compact";

interface EcosystemLogoProps {
  companyId?: string;
  variant?: EcosystemLogoVariant;
  className?: string;
  priority?: boolean;
}

const variantSizes: Record<
  EcosystemLogoVariant,
  { height: number; maxWidth: number; className: string }
> = {
  card: { height: 44, maxWidth: 180, className: "h-9 w-auto max-w-[180px] md:h-11 md:max-w-[200px]" },
  strip: { height: 36, maxWidth: 140, className: "h-7 w-auto max-w-[120px] md:h-8 md:max-w-[140px]" },
  compact: { height: 32, maxWidth: 120, className: "h-7 w-auto max-w-[110px]" },
};

const treatmentClasses: Record<EcosystemLogoTreatment, string> = {
  light: "bg-[#f7f5ef]",
  dark: "bg-brand-navy",
  neutral: "bg-brand-surface-blue/90",
};

export default function EcosystemLogo({
  companyId,
  variant = "card",
  className = "",
  priority = false,
}: EcosystemLogoProps) {
  const config = getEcosystemLogo(companyId);

  if (!config) {
    return null;
  }

  const size = variantSizes[variant];

  return (
    <div
      className={`inline-flex items-center justify-center rounded-lg px-3 py-2 ${treatmentClasses[config.treatment]} ${className}`}
    >
      <Image
        src={config.src}
        alt={config.alt}
        width={size.maxWidth}
        height={size.height}
        priority={priority}
        className={`object-contain object-center ${size.className}`}
      />
    </div>
  );
}
