import BrandLogo from "@/components/BrandLogo";
import { enterpriseAreas, heroCopy } from "@/lib/site";

export default function CorporateBrandPanel() {
  return (
    <div className="ba-enterprise-panel p-6 md:p-8">
      <div
        className="pointer-events-none absolute inset-0 ba-blueprint-grid-dark opacity-70"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0 bg-brand-navy/55"
        aria-hidden="true"
      />

      <div className="relative">
        <div className="flex items-start justify-between gap-4">
          <BrandLogo variant="panel" priority className="mx-auto sm:mx-0" />
          <span
            className="hidden h-px w-16 self-center bg-white/15 sm:block"
            aria-hidden="true"
          />
        </div>

        <div className="mt-6 border-t border-white/10 pt-5">
          <p className="text-base font-semibold tracking-tight text-white md:text-lg">
            {heroCopy.panelTitle}
          </p>
          <p className="mt-2.5 max-w-sm type-body-sm leading-relaxed text-blue-100/75">
            {heroCopy.panelCopy}
          </p>
        </div>

        <div className="mt-6 border-t border-white/10 pt-5">
          <p className="type-caption font-medium uppercase tracking-wide text-blue-100/55">
            Enterprise areas
          </p>
          <ul className="mt-3">
            {enterpriseAreas.map((area) => (
              <li key={area} className="ba-enterprise-area-row text-sm text-white/90">
                <span
                  className="h-px w-5 shrink-0 bg-brand-atlantic-light/55"
                  aria-hidden="true"
                />
                <span>{area}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
