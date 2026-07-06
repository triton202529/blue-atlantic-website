import { type ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

export default function Card({ children, className = "", id }: CardProps) {
  return (
    <div
      id={id}
      className={`rounded-2xl border border-brand-border bg-brand-card p-6 shadow-brand md:p-8 ${className}`}
    >
      {children}
    </div>
  );
}
