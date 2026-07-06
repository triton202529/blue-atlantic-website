import Card from "./Card";

interface PillarCardProps {
  label: string;
  title: string;
  description: string;
}

export default function PillarCard({
  label,
  title,
  description,
}: PillarCardProps) {
  return (
    <Card hover className="flex h-full flex-col">
      <span className="text-sm font-medium tabular-nums text-brand-muted/50">
        {label}
      </span>
      <div className="mt-4 h-px w-10 bg-brand-atlantic/30" />
      <h3 className="mt-4 text-lg font-semibold text-brand-navy">{title}</h3>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-brand-muted md:text-base">
        {description}
      </p>
    </Card>
  );
}
