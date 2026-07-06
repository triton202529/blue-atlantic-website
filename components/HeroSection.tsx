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
    ? "py-16 md:py-20 lg:py-24"
    : "py-20 md:py-28 lg:py-32";

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-brand-navy via-brand-navy to-brand-atlantic">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(255,255,255,0.08)_0%,_transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(42,108,184,0.15)_0%,_transparent_50%)]" />
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className={`relative mx-auto max-w-6xl px-6 md:px-8 ${padding}`}>
        <div
          className={`grid items-center gap-12 ${visual ? "lg:grid-cols-2 lg:gap-16" : ""}`}
        >
          <div className={visual ? "max-w-xl" : "max-w-3xl"}>
            <p className="eyebrow mb-5 text-blue-200/80">{eyebrow}</p>
            <h1 className="text-3xl font-semibold leading-[1.15] tracking-tight text-white md:text-4xl lg:text-[2.75rem]">
              {headline}
            </h1>
            <p className="mt-6 text-base leading-relaxed text-blue-100/90 md:text-lg">
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
                    className="border-white/20 text-white hover:bg-white/10 hover:text-white"
                  >
                    {secondaryCta.label}
                  </Button>
                )}
              </div>
            )}
          </div>
          {visual && <div className="relative lg:justify-self-end">{visual}</div>}
        </div>
      </div>
    </section>
  );
}
