interface SectionHeaderProps {
  title: string;
  description?: string;
  eyebrow?: string;
  align?: "left" | "center";
  variant?: "default" | "light";
}

export default function SectionHeader({
  title,
  description,
  eyebrow,
  align = "left",
  variant = "default",
}: SectionHeaderProps) {
  const alignment = align === "center" ? "text-center mx-auto" : "text-left";
  const titleColor = variant === "light" ? "text-white" : "text-brand-navy";
  const descriptionColor =
    variant === "light" ? "text-blue-100/90" : "text-brand-muted";
  const eyebrowColor =
    variant === "light" ? "text-blue-200/80" : "text-brand-atlantic";

  return (
    <div className={`mb-10 max-w-3xl md:mb-14 ${alignment}`}>
      {eyebrow && (
        <p className={`eyebrow mb-3 ${eyebrowColor}`}>{eyebrow}</p>
      )}
      <h2
        className={`text-2xl font-semibold tracking-tight md:text-3xl lg:text-4xl ${titleColor}`}
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
