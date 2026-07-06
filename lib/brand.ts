export const brandAssets = {
  companyLogo: "/brand/blue-atlantic-company-logo.png",
  companyLogoDisplay: "/brand/blue-atlantic-company-logo-display.png",
  seal: {
    svg: "/brand/blue-atlantic-seal.svg",
    png: "/brand/blue-atlantic-company-logo-display.png",
    webp: "/brand/blue-atlantic-company-logo-display.png",
  },
  mark: {
    svg: "/brand/blue-atlantic-mark.svg",
    png: "/brand/blue-atlantic-mark.png",
  },
  og: {
    svg: "/brand/blue-atlantic-og.svg",
    png: "/brand/blue-atlantic-og.png",
  },
} as const;

export type BrandSealSize = "sm" | "md" | "lg" | "hero";

export const brandSealSizes: Record<
  BrandSealSize,
  { dimension: number; className: string }
> = {
  sm: { dimension: 64, className: "h-16 w-16" },
  md: { dimension: 96, className: "h-24 w-24" },
  lg: { dimension: 128, className: "h-32 w-32" },
  hero: { dimension: 220, className: "h-52 w-52 sm:h-56 sm:w-56 lg:h-60 lg:w-60" },
};
