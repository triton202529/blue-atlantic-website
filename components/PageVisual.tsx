import Image from "next/image";
import {
  visualAssetAlt,
  visualAssets,
  type VisualAssetKey,
} from "@/lib/visual-assets";

type PageVisualSize = "sm" | "md" | "lg";

interface PageVisualProps {
  asset: VisualAssetKey;
  alt?: string;
  caption?: string;
  size?: PageVisualSize;
  overlay?: boolean;
  className?: string;
  priority?: boolean;
}

const sizeClasses: Record<PageVisualSize, string> = {
  sm: "h-44 md:h-52",
  md: "h-52 md:h-64",
  lg: "h-56 md:h-72 lg:h-80",
};

export default function PageVisual({
  asset,
  alt,
  caption,
  size = "md",
  overlay = true,
  className = "",
  priority = false,
}: PageVisualProps) {
  const resolvedAlt = alt ?? visualAssetAlt[asset];

  return (
    <figure
      className={`relative overflow-hidden rounded-2xl border border-brand-border/60 shadow-brand ${sizeClasses[size]} ${className}`}
    >
      <Image
        src={visualAssets[asset]}
        alt={resolvedAlt}
        fill
        priority={priority}
        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 960px, 420px"
        className="object-cover"
      />
      {overlay && <div className="absolute inset-0 bg-brand-navy/20" />}
      {caption && (
        <figcaption className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-brand-navy/80 to-transparent px-5 py-4 text-sm text-white/90">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
