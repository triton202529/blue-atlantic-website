import { type ReactNode } from "react";

interface EyebrowLabelProps {
  children: ReactNode;
  className?: string;
  variant?: "default" | "onDark";
}

export default function EyebrowLabel({
  children,
  className = "",
  variant = "default",
}: EyebrowLabelProps) {
  const color =
    variant === "onDark" ? "text-blue-200/70" : "text-brand-atlantic";

  return (
    <p className={`type-eyebrow ${color} ${className}`.trim()}>{children}</p>
  );
}
