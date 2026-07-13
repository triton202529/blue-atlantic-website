import BrandSeal from "@/components/BrandSeal";

const frameworkAreas = [
  "Regional opportunity research",
  "Capital planning frameworks",
  "Institutional analysis",
  "Governance and controls review",
  "Enterprise development planning",
  "Long-term research discipline",
] as const;

export default function CapitalResearchFramework() {
  return (
    <div className="overflow-hidden rounded-2xl border border-white/10 bg-brand-navy shadow-brand">
      <div className="grid gap-8 px-6 py-8 md:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] md:items-center md:px-10 md:py-10 lg:gap-12 lg:px-12 lg:py-12">
        <div className="flex flex-col items-center text-center">
          <div className="relative flex flex-col items-center py-3">
            <div
              aria-hidden="true"
              className="absolute -inset-6 rounded-full border border-white/10"
            />
            <BrandSeal size="md" variant="transparent" priority />
            <p className="relative mt-5 text-xs font-semibold uppercase tracking-widest text-blue-200/65">
              Research framework
            </p>
            <h2 className="relative mt-3 text-xl font-semibold tracking-tight text-white md:text-2xl">
              Blue Atlantic Capital / IRD
            </h2>
            <p className="relative mt-2 text-sm text-blue-100/70">
              Research and strategy direction
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
              Strategy areas
            </p>
            <p className="mt-3 max-w-3xl text-sm leading-relaxed text-blue-100/75 md:text-base">
              A disciplined framework for research, planning, analysis, review,
              and long-term enterprise development.
            </p>
          </div>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2 md:pl-8">
            {frameworkAreas.map((area) => (
              <li
                key={area}
                className="rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3.5"
              >
                <div className="flex items-start gap-3">
                  <span
                    aria-hidden="true"
                    className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-atlantic-light"
                  />
                  <span className="text-sm font-medium leading-snug text-blue-50/95">
                    {area}
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
