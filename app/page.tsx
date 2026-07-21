import CorporateBrandPanel from "@/components/CorporateBrandPanel";
import HeroSection from "@/components/HeroSection";
import HomeAudiencePaths from "@/components/home/HomeAudiencePaths";
import HomeFinalCta from "@/components/home/HomeFinalCta";
import HomePlatformEcosystem from "@/components/home/HomePlatformEcosystem";
import HomeWhatWeBuild from "@/components/home/HomeWhatWeBuild";
import HomeWhyBlueAtlantic from "@/components/home/HomeWhyBlueAtlantic";
import { homeHeroCopy } from "@/lib/homepage";

export default function HomePage() {
  return (
    <>
      <HeroSection
        eyebrow={homeHeroCopy.eyebrow}
        headline={homeHeroCopy.headline}
        supportingCopy={homeHeroCopy.supportingCopy}
        primaryCta={homeHeroCopy.primaryCta}
        secondaryCta={homeHeroCopy.secondaryCta}
        visual={<CorporateBrandPanel />}
      />
      <HomeWhatWeBuild />
      <HomePlatformEcosystem />
      <HomeAudiencePaths />
      <HomeWhyBlueAtlantic />
      <HomeFinalCta />
    </>
  );
}
