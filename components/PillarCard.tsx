import Card from "./Card";

interface PillarCardProps {
  title: string;
  description: string;
}

export default function PillarCard({ title, description }: PillarCardProps) {
  return (
    <Card className="h-full">
      <div className="mb-4 h-1 w-10 rounded-full bg-brand-atlantic" />
      <h3 className="text-lg font-semibold text-brand-navy">{title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-brand-muted md:text-base">
        {description}
      </p>
    </Card>
  );
}
