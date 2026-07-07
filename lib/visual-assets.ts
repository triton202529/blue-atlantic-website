export const visualAssets = {
  horizon: "/images/blue-atlantic-horizon.png",
  enterpriseMap: "/images/blue-atlantic-enterprise-map.png",
  systems: "/images/blue-atlantic-systems.png",
  portfolio: "/images/blue-atlantic-portfolio.png",
  pattern: "/images/blue-atlantic-pattern.png",
  research: "/images/blue-atlantic-research.png",
} as const;

export type VisualAssetKey = keyof typeof visualAssets;

export const visualAssetAlt: Record<VisualAssetKey, string> = {
  horizon: "Abstract Atlantic horizon with deep navy and ocean tones",
  enterpriseMap: "Abstract Caribbean and Atlantic enterprise connectivity map",
  systems: "Calm enterprise technology and infrastructure systems visual",
  portfolio: "Blue Atlantic ecosystem portfolio and platform structure visual",
  pattern: "Subtle Blue Atlantic branded background pattern",
  research: "Restrained institutional research and analysis visual",
};
