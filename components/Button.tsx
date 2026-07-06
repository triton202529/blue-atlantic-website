import Link from "next/link";
import { type ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost";

interface ButtonProps {
  href: string;
  children: ReactNode;
  variant?: ButtonVariant;
  className?: string;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-brand-navy text-white hover:bg-brand-navy-light border border-brand-navy",
  secondary:
    "bg-white text-brand-navy hover:bg-brand-soft border border-brand-border",
  ghost:
    "bg-transparent text-brand-navy hover:bg-brand-soft border border-transparent",
};

export default function Button({
  href,
  children,
  variant = "primary",
  className = "",
}: ButtonProps) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center rounded-xl px-6 py-3 text-sm font-medium transition-colors duration-200 ${variantStyles[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}
