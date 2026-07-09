import BrandSeal from "@/components/BrandSeal";

const capabilities = [
  "Proprietary platforms",
  "Automation systems",
  "Financial infrastructure",
  "Workforce systems",
  "Intelligence tools",
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
      <div className="border-b border-white/10 px-6 py-5 md:px-8">
        <p className="text-xs font-semibold uppercase tracking-widest text-blue-200/65">
          Company structure
        </p>
        <h2 className="mt-2 text-lg font-semibold text-white md:text-xl">
          Blue Atlantic ecosystem
        </h2>
        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-blue-100/70">
          Blue Atlantic is the enterprise and technology group behind a connected
          set of platforms, systems, and operating capabilities.
        </p>
      </div>

      <div className="grid gap-8 px-6 py-8 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] md:items-center md:gap-10 md:px-8 md:py-10">
        <div className="flex flex-col items-center text-center">
          <div className="relative flex flex-col items-center">
            <div
              aria-hidden="true"
              className="absolute -inset-6 rounded-full border border-white/10"
            />
            <div
              aria-hidden="true"
              className="absolute -inset-10 rounded-full border border-white/[0.06]"
            />
            <BrandSeal size="md" variant="transparent" priority />
            <p className="relative mt-4 text-base font-semibold tracking-tight text-white">
              Blue Atlantic
            </p>
            <p className="relative mt-1 text-sm text-blue-100/65">
              Enterprise and technology group
            </p>
          </div>
        </div>

        <div className="relative">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-4 left-0 hidden w-px bg-gradient-to-b from-transparent via-white/20 to-transparent md:block"
          />
          <ul className="grid gap-3 sm:grid-cols-2 md:pl-8">
            {capabilities.map((capability) => (
              <li
                key={capability}
                className="rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3.5"
              >
                <div className="flex items-start gap-3">
                  <span
                    aria-hidden="true"
                    className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-atlantic-light"
                  />
                  <span className="text-sm font-medium leading-snug text-blue-50/95">
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
