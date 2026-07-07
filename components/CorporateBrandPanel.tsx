import BrandLogo from "@/components/BrandLogo";
import { enterpriseAreas, heroCopy } from "@/lib/site";
import { visualAssets } from "@/lib/visual-assets";
import Image from "next/image";

export default function CorporateBrandPanel() {
  return (
    <div className="relative overflow-hidden rounded-xl border border-white/10 bg-white/[0.04] p-8 md:p-10">
      <Image
        src={visualAssets.horizon}
        alt=""
        fill
        sizes="(max-width: 1024px) 100vw, 480px"
        className="object-cover opacity-25"
        aria-hidden
      />
      <div className="absolute inset-0 bg-gradient-to-br from-brand-navy/80 via-brand-navy/60 to-brand-atlantic/40" />
      <div className="relative">
        <BrandLogo variant="panel" priority className="mx-auto sm:mx-0" />
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
    </div>
  );
}
