import Link from "next/link";
import BrandLogo from "@/components/BrandLogo";
import {
  contactEmails,
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
      <div className="page-shell py-12 md:py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <BrandLogo variant="footer" />
            <p className="mt-5 max-w-md type-body-sm leading-relaxed text-blue-100/65">
              {siteConfig.footerDescription}
            </p>
            <a
              href={`mailto:${contactEmails.general}`}
              className="mt-4 inline-flex min-h-[var(--touch-min)] items-center break-all type-body-sm text-blue-100/65 transition-colors hover:text-white"
            >
              {contactEmails.general}
            </a>
          </div>

          <div>
            <p className="mb-3 type-caption font-medium uppercase tracking-wide text-blue-100/50">
              Ecosystem
            </p>
            <ul className="space-y-1">
              {ecosystemLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="inline-flex min-h-[var(--touch-min)] items-center type-body-sm text-blue-100/65 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mb-3 type-caption font-medium uppercase tracking-wide text-blue-100/50">
              Company
            </p>
            <ul className="space-y-1">
              {footerCompanyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="inline-flex min-h-[var(--touch-min)] items-center type-body-sm text-blue-100/65 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/contact"
                  className="inline-flex min-h-[var(--touch-min)] items-center type-body-sm text-blue-100/65 transition-colors hover:text-white"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p className="type-caption text-blue-100/45">
              © {currentYear} Blue Atlantic Inc. All rights reserved.
            </p>
            <Link
              href="/legal"
              className="inline-flex min-h-[var(--touch-min)] items-center type-caption text-blue-100/45 transition-colors hover:text-white"
            >
              Legal information
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
