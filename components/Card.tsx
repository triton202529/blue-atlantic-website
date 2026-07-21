import { type ReactNode } from "react";
import {
  cardPaddingClasses,
  cardVariantClasses,
  type CardVariant,
} from "@/lib/design-system";

interface CardProps {
  children: ReactNode;
  className?: string;
  id?: string;
  hover?: boolean;
  variant?: CardVariant;
}

export default function Card({
  children,
  className = "",
  id,
  hover = false,
  variant = "standard",
}: CardProps) {
  const padding =
    variant === "compact" ? cardPaddingClasses.compact : cardPaddingClasses.standard;

  return (
    <div
      id={id}
      className={`${cardVariantClasses[variant]} ${padding} ${hover ? "card-hover" : ""} ${className}`}
    >
      {children}
    </div>
  );
}
