import BrandSeal, { type BrandSealVariant } from "@/components/BrandSeal";
import { type BrandSealSize } from "@/lib/brand";

export type BrandLogoVariant =
  | "nav"
  | "footer"
  | "sealOnly"
  | "story"
  | "panel"
  | "hero";

interface BrandLogoProps {
  variant?: BrandLogoVariant;
  showText?: boolean;
  className?: string;
  priority?: boolean;
}

const variantConfig: Record<
  BrandLogoVariant,
  {
    size: BrandSealSize;
    sealVariant: BrandSealVariant;
    showText: boolean;
    gap: string;
    textClass: string;
  }
> = {
  nav: {
    size: "nav",
    sealVariant: "default",
    showText: true,
    gap: "gap-2.5",
    textClass: "text-sm font-semibold tracking-tight text-brand-navy",
  },
  footer: {
    size: "footer",
    sealVariant: "transparent",
    showText: true,
    gap: "gap-3",
    textClass: "text-base font-semibold tracking-tight text-white",
  },
  sealOnly: {
    size: "md",
    sealVariant: "default",
    showText: false,
    gap: "",
    textClass: "",
  },
  story: {
    size: "lg",
    sealVariant: "framed",
    showText: false,
    gap: "",
    textClass: "",
  },
  panel: {
    size: "md",
    sealVariant: "transparent",
    showText: false,
    gap: "",
    textClass: "",
  },
  hero: {
    size: "hero",
    sealVariant: "transparent",
    showText: false,
    gap: "",
    textClass: "",
  },
};

export default function BrandLogo({
  variant = "nav",
  showText,
  className = "",
  priority = false,
}: BrandLogoProps) {
  const config = variantConfig[variant];
  const displayText = showText ?? config.showText;

  return (
    <div className={`flex items-center ${config.gap} ${className}`}>
      <BrandSeal
        size={config.size}
        variant={config.sealVariant}
        priority={priority}
      />
      {displayText && (
        <span className={config.textClass}>Blue Atlantic</span>
      )}
    </div>
  );
}
