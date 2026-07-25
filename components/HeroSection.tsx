import Image from "next/image";
import { type ReactNode } from "react";
import Button from "./Button";
import EyebrowLabel from "./EyebrowLabel";

interface HeroSectionProps {
  headline: string;
  supportingCopy: string;
  eyebrow?: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  visual?: ReactNode;
  compact?: boolean;
  wide?: boolean;
  backgroundImage?: {
    src: string;
    sizes?: string;
    /** Homepage: open atmosphere. About/Platforms/Technology: denser institutional treatments. */
    treatment?: "home" | "about" | "platforms" | "technology";
  };
}

const photoHeroClasses = {
  home: {
    section: "ba-home-hero bg-brand-navy",
    media: "ba-home-hero-media",
    overlay: "ba-home-hero-overlay",
    veil: "ba-home-hero-veil",
  },
  about: {
    section: "ba-about-hero bg-brand-navy",
    media: "ba-about-hero-media",
    overlay: "ba-about-hero-overlay",
    veil: "ba-about-hero-veil",
  },
  platforms: {
    section: "ba-platforms-hero bg-brand-navy",
    media: "ba-platforms-hero-media",
    overlay: "ba-platforms-hero-overlay",
    veil: "ba-platforms-hero-veil",
  },
  technology: {
    section: "ba-technology-hero bg-brand-navy",
    media: "ba-technology-hero-media",
    overlay: "ba-technology-hero-overlay",
    veil: "ba-technology-hero-veil",
  },
} as const;

export default function HeroSection({
  headline,
  supportingCopy,
  eyebrow = "Blue Atlantic",
  primaryCta,
  secondaryCta,
  visual,
  compact = false,
  wide = false,
  backgroundImage,
}: HeroSectionProps) {
  const hasPhotoHero = Boolean(backgroundImage);
  const treatment = backgroundImage?.treatment ?? "home";
  const isTechnologyHero = treatment === "technology";
  const isInstitutionalHero =
    treatment === "about" ||
    treatment === "platforms" ||
    isTechnologyHero;
  const photoClasses = photoHeroClasses[treatment];

  // Compact heroes still clear the sticky nav (~4.5rem) with readable breathing room.
  // Institutional pages get a small desktop-only vertical lift; Technology trims mobile bottom pad.
  const padding = isTechnologyHero
    ? "pt-28 pb-12 md:pt-[8.5rem] md:pb-20 lg:pt-40 lg:pb-24"
    : isInstitutionalHero
      ? "pt-28 pb-14 md:pt-[8.5rem] md:pb-20 lg:pt-40 lg:pb-24"
      : compact
        ? "pt-28 pb-14 md:pt-32 md:pb-16 lg:pt-36 lg:pb-20"
        : "pt-28 pb-20 md:pt-32 md:pb-28 lg:pt-36 lg:pb-32";
  const containerWidth = wide ? "page-shell page-shell-wide" : "page-shell";
  // Institutional heroes: ~12.5% wider reading column — still not full-bleed.
  // Technology keeps a generous headline rail but a tighter lede (~50rem).
  const copyWidth = isInstitutionalHero
    ? "max-w-[72rem]"
    : visual
      ? "max-w-xl"
      : wide
        ? "max-w-5xl"
        : "prose-measure";
  const ledeWidth = isTechnologyHero
    ? "max-w-[48rem]"
    : isInstitutionalHero
      ? "max-w-[54rem]"
      : visual
        ? "max-w-xl"
        : "max-w-3xl";
  const headlineClass = compact && !wide ? "type-page" : "type-display";
  const copyClass = isTechnologyHero
    ? "type-body-lg ba-technology-hero-lede"
    : "type-body-lg";
  const mediaClass = photoClasses.media;
  const overlayClass = photoClasses.overlay;
  const veilClass = photoClasses.veil;
  const sectionClass = photoClasses.section;

  return (
    <section
      className={`relative overflow-hidden ${
        hasPhotoHero
          ? sectionClass
          : "bg-gradient-to-b from-brand-navy via-brand-navy to-brand-navy-light"
      }`}
    >
      {backgroundImage ? (
        <>
          <Image
            src={backgroundImage.src}
            alt=""
            fill
            priority
            sizes={backgroundImage.sizes ?? "100vw"}
            className={mediaClass}
            aria-hidden="true"
          />
          <div className={overlayClass} aria-hidden="true" />
          <div className={veilClass} aria-hidden="true" />
        </>
      ) : (
        <>
          <div
            className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.04)_0%,transparent_45%)]"
            aria-hidden="true"
          />
          <div
            className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_20%,rgba(42,108,184,0.12)_0%,transparent_50%)]"
            aria-hidden="true"
          />
        </>
      )}

      <div className={`relative scroll-mt-28 ${containerWidth} ${padding}`}>
        <div
          className={`grid items-center gap-10 ${visual ? "lg:grid-cols-2 lg:gap-16" : ""}`}
        >
          <div className={copyWidth}>
            <EyebrowLabel variant="onDark" className="mb-6">
              {eyebrow}
            </EyebrowLabel>
            <h1 className={`tracking-tight text-white ${headlineClass}`}>
              {headline}
            </h1>
            <p className={`mt-5 text-blue-100/85 ${copyClass} ${ledeWidth}`}>
              {supportingCopy}
            </p>
            {(primaryCta || secondaryCta) && (
              <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
                {primaryCta && (
                  <Button href={primaryCta.href} variant="secondary" size="lg">
                    {primaryCta.label}
                  </Button>
                )}
                {secondaryCta && (
                  <Button
                    href={secondaryCta.href}
                    variant="ghost"
                    size="lg"
                    className="border-white/15 text-white hover:bg-white/5 hover:text-white"
                  >
                    {secondaryCta.label}
                  </Button>
                )}
              </div>
            )}
          </div>
          {visual && (
            <div className="relative w-full lg:justify-self-end">{visual}</div>
          )}
        </div>
      </div>
    </section>
  );
}
