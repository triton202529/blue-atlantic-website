import Button from "./Button";

interface HeroSectionProps {
  headline: string;
  supportingCopy: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
}

export default function HeroSection({
  headline,
  supportingCopy,
  primaryCta,
  secondaryCta,
}: HeroSectionProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-brand-navy via-brand-navy to-brand-atlantic">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(255,255,255,0.08)_0%,_transparent_60%)]" />
      <div className="relative mx-auto max-w-6xl px-6 py-20 md:px-8 md:py-28 lg:py-32">
        <div className="max-w-3xl">
          <p className="mb-4 text-sm font-medium uppercase tracking-widest text-blue-200/80">
            Blue Atlantic
          </p>
          <h1 className="text-3xl font-semibold leading-tight tracking-tight text-white md:text-4xl lg:text-5xl">
            {headline}
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-blue-100/90 md:text-lg">
            {supportingCopy}
          </p>
          {(primaryCta || secondaryCta) && (
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
              {primaryCta && (
                <Button href={primaryCta.href} variant="secondary">
                  {primaryCta.label}
                </Button>
              )}
              {secondaryCta && (
                <Button
                  href={secondaryCta.href}
                  variant="ghost"
                  className="border-white/20 text-white hover:bg-white/10 hover:text-white"
                >
                  {secondaryCta.label}
                </Button>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
