import Card from "./Card";
import { pillarAccentClasses, type PillarAccent } from "@/lib/card-themes";

interface PillarCardProps {
  label: string;
  title: string;
  description: string;
  accent?: PillarAccent;
}

export default function PillarCard({
  label,
  title,
  description,
  accent = "pillar-1",
}: PillarCardProps) {
  return (
    <Card
      hover
      className={`flex h-full flex-col ${pillarAccentClasses[accent]}`}
    >
      <span className="text-sm font-semibold tabular-nums text-brand-atlantic/70">
        {label}
      </span>
      <h3 className="mt-4 type-card text-brand-navy">{title}</h3>
      <p className="mt-3 flex-1 type-body-sm leading-relaxed text-brand-muted md:text-base">
        {description}
      </p>
    </Card>
  );
}
