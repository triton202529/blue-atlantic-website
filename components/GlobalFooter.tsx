import Link from "next/link";
import BrandSeal from "@/components/BrandSeal";
import {
  footerCompanyLinks,
  footerNavLinks,
  siteConfig,
} from "@/lib/site";

export default function GlobalFooter() {
  const currentYear = new Date().getFullYear();

  const ecosystemLinks = footerNavLinks.filter(
    (link) => !["/", "/legal", "/contact"].includes(link.href)
  );

  return (
    <footer className="mt-auto border-t border-brand-border bg-brand-navy text-white">
      <div className="mx-auto max-w-6xl px-6 py-14 md:px-8 md:py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <div className="flex items-start gap-4">
              <BrandSeal size="sm" className="opacity-95" />
              <div>
                <p className="text-lg font-semibold tracking-tight">
                  {siteConfig.name}
                </p>
                <p className="mt-1 text-xs font-medium uppercase tracking-widest text-blue-200/50">
                  Enterprise Group
                </p>
              </div>
            </div>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-blue-100/70">
              {siteConfig.footerDescription}
            </p>
          </div>

          <div>
            <p className="eyebrow mb-4 text-blue-200/60">Ecosystem</p>
            <ul className="space-y-2.5">
              {ecosystemLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-blue-100/70 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="eyebrow mb-4 text-blue-200/60">Company</p>
            <ul className="space-y-2.5">
              {footerCompanyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-blue-100/70 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-blue-100/70 transition-colors hover:text-white"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="section-divider mt-12 opacity-30" />

        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-blue-100/50">
            © {currentYear} Blue Atlantic. All rights reserved. Content is
            informational.
          </p>
          <Link
            href="/legal"
            className="text-xs text-blue-100/50 transition-colors hover:text-white"
          >
            Legal information
          </Link>
        </div>
      </div>
    </footer>
  );
}
