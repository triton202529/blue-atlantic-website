interface SectionHeaderProps {
  title: string;
  description?: string;
  label?: string;
  align?: "left" | "center";
  variant?: "default" | "light";
}

export default function SectionHeader({
  title,
  description,
  label,
  align = "left",
  variant = "default",
}: SectionHeaderProps) {
  const alignment = align === "center" ? "text-center mx-auto" : "text-left";
  const titleColor = variant === "light" ? "text-white" : "text-brand-navy";
  const descriptionColor =
    variant === "light" ? "text-blue-100/90" : "text-brand-muted";
  const labelColor =
    variant === "light" ? "text-blue-200/80" : "text-brand-atlantic";

  return (
    <div className={`mb-10 max-w-3xl md:mb-12 ${alignment}`}>
      {label && (
        <p className={`section-label mb-3 ${labelColor}`}>{label}</p>
      )}
      <h2
        className={`text-2xl font-semibold tracking-tight md:text-3xl ${titleColor}`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-4 text-base leading-relaxed md:text-lg ${descriptionColor}`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
