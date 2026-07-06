interface SectionHeaderProps {
  title: string;
  description?: string;
  align?: "left" | "center";
  variant?: "default" | "light";
}

export default function SectionHeader({
  title,
  description,
  align = "left",
  variant = "default",
}: SectionHeaderProps) {
  const alignment = align === "center" ? "text-center mx-auto" : "text-left";
  const titleColor =
    variant === "light" ? "text-white" : "text-brand-navy";
  const descriptionColor =
    variant === "light" ? "text-blue-100/90" : "text-brand-muted";

  return (
    <div className={`mb-10 max-w-3xl md:mb-12 ${alignment}`}>
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
