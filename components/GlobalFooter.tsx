import Link from "next/link";
import { footerNavLinks, siteConfig } from "@/lib/site";

export default function GlobalFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-brand-border bg-brand-soft">
      <div className="mx-auto max-w-6xl px-6 py-12 md:px-8 md:py-16">
        <div className="flex flex-col gap-10 md:flex-row md:justify-between">
          <div className="max-w-sm">
            <p className="text-lg font-semibold text-brand-navy">
              {siteConfig.name}
            </p>
            <p className="mt-3 text-sm leading-relaxed text-brand-muted">
              {siteConfig.tagline}
            </p>
          </div>
          <nav>
            <ul className="grid grid-cols-2 gap-x-8 gap-y-3 sm:grid-cols-3">
              {footerNavLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-brand-muted transition-colors hover:text-brand-navy"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="mt-10 border-t border-brand-border pt-6">
          <p className="text-xs text-brand-muted">
            © {currentYear} Blue Atlantic. All rights reserved. Content is
            informational.
          </p>
        </div>
      </div>
    </footer>
  );
}
