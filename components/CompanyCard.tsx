import Link from "next/link";
import Card from "./Card";

interface CompanyCardProps {
  name: string;
  description: string;
  href?: string;
  id?: string;
}

export default function CompanyCard({
  name,
  description,
  href,
  id,
}: CompanyCardProps) {
  const content = (
    <>
      <h3 className="text-lg font-semibold text-brand-navy">{name}</h3>
      <p className="mt-3 text-sm leading-relaxed text-brand-muted md:text-base">
        {description}
      </p>
      {href && (
        <span className="mt-4 inline-block text-sm font-medium text-brand-atlantic">
          Learn more →
        </span>
      )}
    </>
  );

  if (href) {
    return (
      <Link href={href} className="group block h-full">
        <Card id={id} className="h-full transition-shadow duration-200 group-hover:shadow-brand-lg">
          {content}
        </Card>
      </Link>
    );
  }

  return <Card id={id}>{content}</Card>;
}
