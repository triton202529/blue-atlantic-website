"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { mainNavLinks, siteConfig } from "@/lib/site";

export default function GlobalNavigation() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-brand-border bg-white/95 backdrop-blur-sm">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 md:px-8">
        <Link
          href="/"
          className="text-lg font-semibold tracking-tight text-brand-navy"
        >
          {siteConfig.name}
        </Link>
        <ul className="hidden items-center gap-8 md:flex">
          {mainNavLinks.map((link) => {
            const isActive = pathname === link.href || pathname.startsWith(`${link.href}/`);

            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`text-sm font-medium transition-colors ${
                    isActive
                      ? "text-brand-navy"
                      : "text-brand-muted hover:text-brand-navy"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>
        <div className="md:hidden">
          <Link
            href="/contact"
            className="text-sm font-medium text-brand-navy"
          >
            Contact
          </Link>
        </div>
      </nav>
    </header>
  );
}
