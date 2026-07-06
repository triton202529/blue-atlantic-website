import { type ReactNode } from "react";
import Button from "./Button";

interface HeroSectionProps {
  headline: string;
  supportingCopy: string;
  eyebrow?: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  visual?: ReactNode;
  compact?: boolean;
}

export default function HeroSection({
  headline,
  supportingCopy,
  eyebrow = "Blue Atlantic",
  primaryCta,
  secondaryCta,
  visual,
  compact = false,
}: HeroSectionProps) {
  const padding = compact
    ? "pt-20 pb-16 md:pt-24 md:pb-20 lg:pb-24"
    : "pt-24 pb-20 md:pt-28 md:pb-28 lg:pt-32 lg:pb-32";

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-brand-navy via-brand-navy to-brand-navy-light">
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.04)_0%,transparent_45%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_20%,rgba(42,108,184,0.12)_0%,transparent_50%)]" />

      <div className={`relative mx-auto max-w-6xl scroll-mt-20 px-6 md:px-8 ${padding}`}>
        <div
          className={`grid items-center gap-10 ${visual ? "lg:grid-cols-2 lg:gap-14" : ""}`}
        >
          <div className={visual ? "max-w-xl" : "max-w-3xl"}>
            <p className="mb-5 text-xs font-semibold uppercase tracking-widest text-blue-200/70">
              {eyebrow}
            </p>
            <h1 className="text-3xl font-semibold leading-[1.15] tracking-tight text-white md:text-4xl lg:text-[2.75rem]">
              {headline}
            </h1>
            <p className="mt-6 text-base leading-relaxed text-blue-100/85 md:text-lg">
              {supportingCopy}
            </p>
            {(primaryCta || secondaryCta) && (
              <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
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
