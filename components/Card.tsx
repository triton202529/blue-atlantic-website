import { type ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  id?: string;
  hover?: boolean;
}

export default function Card({
  children,
  className = "",
  id,
  hover = false,
}: CardProps) {
  return (
    <div
      id={id}
      className={`rounded-2xl border border-brand-border bg-brand-card p-6 shadow-brand md:p-8 ${hover ? "card-hover" : ""} ${className}`}
    >
      {children}
    </div>
  );
}
