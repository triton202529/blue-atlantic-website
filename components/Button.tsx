import Link from "next/link";
import { type ReactNode } from "react";
import {
  buttonBaseClasses,
  buttonSizeClasses,
  buttonVariantClasses,
} from "@/lib/design-system";

type ButtonVariant = keyof typeof buttonVariantClasses;
type ButtonSize = keyof typeof buttonSizeClasses;

interface ButtonProps {
  href: string;
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
}

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
  const classNames = `${buttonBaseClasses} ${buttonVariantClasses[variant]} ${buttonSizeClasses[size]} ${className}`;

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
