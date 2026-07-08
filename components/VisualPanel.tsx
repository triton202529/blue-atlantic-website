import Image from "next/image";
import { type ReactNode } from "react";

type VisualPanelVariant = "default" | "navy";

interface VisualPanelProps {
  src: string;
  alt: string;
  title?: string;
  description?: string;
  imagePosition?: "left" | "right";
  variant?: VisualPanelVariant;
  children?: ReactNode;
  className?: string;
  priority?: boolean;
  compact?: boolean;
}

export default function VisualPanel({
  src,
  alt,
  title,
  description,
  imagePosition = "left",
  variant = "default",
  children,
  className = "",
  priority = false,
  compact = false,
}: VisualPanelProps) {
  const isNavy = variant === "navy";
  const imageBlock = (
    <div
      className={`relative aspect-[16/10] overflow-hidden rounded-xl border border-brand-border/60 shadow-brand md:aspect-auto md:flex-1 ${
        compact ? "md:max-w-md md:min-h-[200px]" : "md:min-h-[280px]"
      }`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes="(max-width: 768px) 100vw, 560px"
        className="object-cover"
      />
      <div
        className={`absolute inset-0 ${isNavy ? "bg-brand-navy/30" : "bg-brand-navy/10"}`}
      />
    </div>
  );

  const textBlock = (
    <div className={`flex flex-col justify-center md:flex-1 ${isNavy ? "text-white" : ""}`}>
      {title && (
        <h2
          className={`text-xl font-semibold md:text-2xl ${isNavy ? "text-white" : "text-brand-navy"}`}
        >
          {title}
        </h2>
      )}
      {description && (
        <p
          className={`mt-3 text-sm leading-relaxed md:text-base ${isNavy ? "text-blue-100/80" : "text-brand-muted"}`}
        >
          {description}
        </p>
      )}
      {children}
    </div>
  );

  return (
    <div
      className={`flex flex-col gap-8 md:flex-row md:items-stretch md:gap-10 ${className}`}
    >
      {imagePosition === "left" ? (
        <>
          {imageBlock}
          {textBlock}
        </>
      ) : (
        <>
          {textBlock}
          {imageBlock}
        </>
      )}
    </div>
  );
}
