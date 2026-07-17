import Link from "next/link";
import { type ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost";
type ButtonSize = "default" | "lg";

interface ButtonProps {
  href: string;
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-brand-navy text-white hover:bg-brand-navy-light border border-brand-navy shadow-brand",
  secondary:
    "bg-white text-brand-navy hover:bg-brand-soft border border-brand-border shadow-brand",
  ghost:
    "bg-transparent text-brand-navy hover:bg-brand-soft border border-brand-border/60",
};

const sizeStyles: Record<ButtonSize, string> = {
  default: "px-6 py-3 text-sm",
  lg: "px-8 py-3.5 text-sm",
};

function isExternalHref(href: string): boolean {
  return /^(mailto:|tel:|https?:\/\/)/i.test(href);
}

export default function Button({
  href,
  children,
  variant = "primary",
  size = "default",
  className = "",
}: ButtonProps) {
  const classNames = `inline-flex items-center justify-center rounded-xl font-medium transition-all duration-200 hover:-translate-y-px focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-atlantic-light focus-visible:ring-offset-2 ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

  // Next.js Link does not reliably open mailto/tel/external protocol links.
  if (isExternalHref(href)) {
    return (
      <a href={href} className={classNames}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classNames}>
      {children}
    </Link>
  );
}
