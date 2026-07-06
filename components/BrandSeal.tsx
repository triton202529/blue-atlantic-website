import Image from "next/image";
import { brandAssets, brandSealSizes, type BrandSealSize } from "@/lib/brand";

interface BrandSealProps {
  size?: BrandSealSize;
  className?: string;
  priority?: boolean;
}

export default function BrandSeal({
  size = "md",
  className = "",
  priority = false,
}: BrandSealProps) {
  const { dimension, className: sizeClass } = brandSealSizes[size];

  return (
    <Image
      src={brandAssets.seal.png}
      alt="Blue Atlantic logo"
      width={dimension}
      height={dimension}
      priority={priority}
      className={`shrink-0 object-contain ${sizeClass} ${className}`}
    />
  );
}
