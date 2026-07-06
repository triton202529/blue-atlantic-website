import Image from "next/image";
import { brandAssets, brandSealSizes, type BrandSealSize } from "@/lib/brand";

interface BrandSealProps {
  size?: BrandSealSize;
  className?: string;
  priority?: boolean;
  alt?: string;
}

export default function BrandSeal({
  size = "md",
  className = "",
  priority = false,
  alt = "Blue Atlantic company logo",
}: BrandSealProps) {
  const { dimension, className: sizeClass } = brandSealSizes[size];

  return (
    <Image
      src={brandAssets.companyLogo}
      alt={alt}
      width={dimension}
      height={dimension}
      priority={priority}
      className={`shrink-0 object-contain ${sizeClass} ${className}`}
    />
  );
}
