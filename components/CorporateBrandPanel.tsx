import BrandSeal from "@/components/BrandSeal";
import { enterpriseAreas, heroCopy } from "@/lib/site";

export default function CorporateBrandPanel() {
  return (
    <div className="rounded-xl border border-white/10 bg-white/[0.04] p-8 md:p-10">
      <BrandSeal size="md" variant="transparent" priority className="mx-auto sm:mx-0" />
      <p className="mt-6 text-base font-semibold text-white">
        {heroCopy.panelTitle}
      </p>
      <p className="mt-3 max-w-sm text-sm leading-relaxed text-blue-100/75">
        {heroCopy.panelCopy}
      </p>
      <div className="mt-8 border-t border-white/10 pt-6">
        <p className="text-sm font-medium text-blue-100/60">Enterprise areas</p>
        <ul className="mt-4 space-y-3">
          {enterpriseAreas.map((area) => (
            <li
              key={area}
              className="flex items-baseline gap-3 text-sm text-white/85"
            >
              <span className="mt-2 h-px w-5 shrink-0 bg-brand-atlantic-light/50" />
              {area}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
