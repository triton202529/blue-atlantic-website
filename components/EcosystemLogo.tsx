import Image from "next/image";
import {
  ecosystemLogoTreatmentClasses,
  getEcosystemLogo,
} from "@/lib/ecosystem-brand";

type EcosystemLogoVariant = "strip" | "card";

interface EcosystemLogoProps {
  companyId?: string;
  variant?: EcosystemLogoVariant;
  className?: string;
  priority?: boolean;
}

export default function EcosystemLogo({
  companyId,
  variant = "strip",
  className = "",
  priority = false,
}: EcosystemLogoProps) {
  const config = getEcosystemLogo(companyId);

  if (!config) {
    return null;
  }

  const image = (
    <Image
      src={config.src}
      alt={config.alt}
      width={config.size.maxWidth}
      height={config.size.maxHeight}
      priority={priority}
      className="ecosystem-logo-image object-contain object-center"
      style={{
        maxWidth: config.size.maxWidth,
        maxHeight: config.size.maxHeight,
      }}
    />
  );

  if (variant === "card") {
    return (
      <div
        className={`ecosystem-logo-cell-card flex items-center justify-center ${className}`}
      >
        {image}
      </div>
    );
  }

  return (
    <div
      className={`ecosystem-logo-cell-strip flex shrink-0 items-center justify-center rounded-lg ${ecosystemLogoTreatmentClasses[config.treatment]} ${className}`}
    >
      {image}
    </div>
  );
}
