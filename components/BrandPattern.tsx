import Image from "next/image";
import { visualAssets } from "@/lib/visual-assets";

type BrandPatternVariant = "subtle" | "section" | "card";

interface BrandPatternProps {
  variant?: BrandPatternVariant;
  className?: string;
}

const opacityMap: Record<BrandPatternVariant, string> = {
  subtle: "opacity-[0.035]",
  section: "opacity-[0.05]",
  card: "opacity-[0.04]",
};

export default function BrandPattern({
  variant = "subtle",
  className = "",
}: BrandPatternProps) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
    >
      <Image
        src={visualAssets.pattern}
        alt=""
        fill
        sizes="100vw"
        className={`object-cover ${opacityMap[variant]}`}
      />
    </div>
  );
}
