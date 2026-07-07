import Image from "next/image";
import { type ReactNode } from "react";

type ImageBandHeight = "sm" | "md" | "lg";
type ImageBandOverlay = "navy" | "light" | "none";

interface ImageBandProps {
  src: string;
  alt: string;
  height?: ImageBandHeight;
  overlay?: ImageBandOverlay;
  children?: ReactNode;
  className?: string;
}

const heightClasses: Record<ImageBandHeight, string> = {
  sm: "h-40 md:h-48",
  md: "h-48 md:h-64",
  lg: "h-56 md:h-72 lg:h-80",
};

const overlayClasses: Record<ImageBandOverlay, string> = {
  navy: "bg-brand-navy/55",
  light: "bg-white/40",
  none: "",
};

export default function ImageBand({
  src,
  alt,
  height = "md",
  overlay = "navy",
  children,
  className = "",
}: ImageBandProps) {
  return (
    <div
      className={`relative overflow-hidden rounded-2xl border border-brand-border/60 shadow-brand ${heightClasses[height]} ${className}`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 768px) 100vw, 1200px"
        className="object-cover"
      />
      {overlay !== "none" && (
        <div className={`absolute inset-0 ${overlayClasses[overlay]}`} />
      )}
      {children && (
        <div className="relative flex h-full items-end p-6 md:p-8">
          {children}
        </div>
      )}
    </div>
  );
}
