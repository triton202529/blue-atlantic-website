import BrandSeal from "@/components/BrandSeal";

const capabilities = [
  "Proprietary platforms",
  "Automation systems",
  "Financial infrastructure",
  "Workforce systems",
  "Proprietary intelligence",
  "Regional institutional development",
] as const;

interface AboutBrandArchitectureProps {
  className?: string;
}

export default function AboutBrandArchitecture({
  className = "",
}: AboutBrandArchitectureProps) {
  return (
    <div
      className={`overflow-hidden rounded-2xl border border-white/10 bg-brand-navy shadow-brand ${className}`}
    >
      <div className="grid gap-8 px-6 py-8 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] md:items-center md:gap-10 md:px-10 md:py-11 lg:min-h-[430px] lg:gap-16 lg:px-14 lg:py-14">
        <div className="flex flex-col items-center text-center">
          <div className="relative flex flex-col items-center py-5">
            <div
              aria-hidden="true"
              className="absolute -inset-7 rounded-full border border-white/10"
            />
            <div
              aria-hidden="true"
              className="absolute -inset-12 rounded-full border border-white/[0.06]"
            />
            <BrandSeal size="story" variant="transparent" priority />
            <p className="relative mt-5 text-xs font-semibold uppercase tracking-widest text-blue-200/65">
              Company structure
            </p>
            <p className="relative mt-4 text-xl font-semibold tracking-tight text-white">
              Blue Atlantic
            </p>
            <p className="relative mt-1 text-sm text-blue-100/70">
              Enterprise and technology group
            </p>
          </div>
        </div>

        <div className="relative">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 left-0 hidden w-px bg-gradient-to-b from-transparent via-white/20 to-transparent md:block"
          />
          <div className="md:pl-8">
            <p className="text-xs font-semibold uppercase tracking-widest text-blue-200/65">
              Blue Atlantic ecosystem
            </p>
            <h2 className="mt-2 text-2xl font-semibold text-white md:text-3xl">
              Building for long-term institutional development
            </h2>
            <p className="mt-4 max-w-3xl text-sm leading-relaxed text-blue-100/75 md:text-base">
              Blue Atlantic is focused on building practical systems that
              support regional enterprise growth, stronger operations, and
              long-term institutional development. Our work connects proprietary
              platforms, product discipline, automation capability, and
              Caribbean-first execution into one disciplined enterprise
              structure.
            </p>
          </div>
          <ul className="mt-7 grid gap-3 sm:grid-cols-2 md:pl-8">
            {capabilities.map((capability) => (
              <li
                key={capability}
                className="rounded-xl border border-white/10 bg-white/[0.04] px-4 py-4"
              >
                <div className="flex items-start gap-3">
                  <span
                    aria-hidden="true"
                    className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-atlantic-light"
                  />
                  <span className="text-sm font-medium leading-snug text-blue-50/95 md:text-[0.95rem]">
                    {capability}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
