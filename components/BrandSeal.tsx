import Image from "next/image";
import { brandAssets, brandSealSizes, type BrandSealSize } from "@/lib/brand";

export type BrandSealVariant = "default" | "framed" | "transparent";

interface BrandSealProps {
  size?: BrandSealSize;
  variant?: BrandSealVariant;
  className?: string;
  priority?: boolean;
  alt?: string;
}

const variantImageClass: Record<BrandSealVariant, string> = {
  default: "",
  transparent: "drop-shadow-[0_4px_12px_rgba(0,0,0,0.35)]",
  framed: "",
};

const variantFrameClass: Record<BrandSealVariant, string> = {
  default: "",
  transparent: "",
  framed:
    "inline-flex shrink-0 items-center justify-center rounded-full border border-brand-border/60 bg-brand-surface-blue/50 p-2 shadow-brand ring-1 ring-brand-atlantic/[0.06] sm:p-3",
};

export default function BrandSeal({
  size = "md",
  variant = "default",
  className = "",
  priority = false,
  alt = "Blue Atlantic company logo",
}: BrandSealProps) {
  const { dimension, className: sizeClass } = brandSealSizes[size];

  const image = (
    <Image
      src={brandAssets.companyLogoDisplay}
      alt={alt}
      width={dimension}
      height={dimension}
      priority={priority}
      className={`shrink-0 object-contain ${sizeClass} ${variantImageClass[variant]} ${className}`}
    />
  );

  if (variant === "framed") {
    return <div className={variantFrameClass.framed}>{image}</div>;
  }

  return image;
}
