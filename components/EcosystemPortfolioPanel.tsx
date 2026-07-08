import ImageBand from "@/components/ImageBand";
import EcosystemLogoStrip from "@/components/EcosystemLogoStrip";
import { visualAssetAlt, visualAssets } from "@/lib/visual-assets";

interface EcosystemPortfolioPanelProps {
  description: string;
  className?: string;
}

export default function EcosystemPortfolioPanel({
  description,
  className = "",
}: EcosystemPortfolioPanelProps) {
  return (
    <ImageBand
      src={visualAssets.portfolio}
      alt={visualAssetAlt.portfolio}
      height="md"
      overlay="navy"
      className={`mb-10 ${className}`}
    >
      <div className="space-y-5">
        <p className="max-w-xl text-sm leading-relaxed text-white/90 md:text-base">
          {description}
        </p>
        <EcosystemLogoStrip />
      </div>
    </ImageBand>
  );
}
