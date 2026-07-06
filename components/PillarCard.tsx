import Card from "./Card";

interface PillarCardProps {
  label: string;
  category: string;
  title: string;
  description: string;
}

export default function PillarCard({
  label,
  category,
  title,
  description,
}: PillarCardProps) {
  return (
    <Card hover className="group relative h-full overflow-hidden">
      <div className="absolute right-0 top-0 h-24 w-24 translate-x-8 -translate-y-8 rounded-full bg-brand-atlantic/5 transition-colors group-hover:bg-brand-atlantic/10" />
      <div className="relative">
        <div className="mb-5 flex items-center justify-between">
          <span className="eyebrow text-brand-atlantic">{category}</span>
          <span className="text-xs font-medium tabular-nums text-brand-muted/60">
            {label}
          </span>
        </div>
        <div className="mb-4 flex h-9 w-9 items-center justify-center rounded-lg bg-brand-soft">
          <span className="h-2 w-2 rounded-full bg-brand-atlantic" />
        </div>
        <h3 className="text-lg font-semibold text-brand-navy">{title}</h3>
        <p className="mt-3 text-sm leading-relaxed text-brand-muted md:text-base">
          {description}
        </p>
      </div>
    </Card>
  );
}
