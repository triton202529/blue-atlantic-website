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
    <div className={`mb-10 max-w-3xl prose-measure md:mb-12 ${alignment}`}>
      {label && (
        <p className={`type-eyebrow mb-3 ${labelColor}`}>{label}</p>
      )}
      <h2 className={`type-section tracking-tight ${titleColor}`}>{title}</h2>
      {description && (
        <p className={`mt-4 type-body-lg ${descriptionColor}`}>{description}</p>
      )}
    </div>
  );
}
