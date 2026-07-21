import Link from "next/link";
import Card from "@/components/Card";
import ContentSection from "@/components/ContentSection";
import SectionHeader from "@/components/SectionHeader";
import { homeAudiencePaths } from "@/lib/homepage";
import { whyAccentClasses } from "@/lib/card-themes";

export default function HomeAudiencePaths() {
  return (
    <ContentSection surface="white" dense containerClassName="!max-w-7xl">
      <SectionHeader
        label="Visitor paths"
        title="How can Blue Atlantic help?"
        description="Choose the path that matches what you need next, whether you are exploring products, systems, partnership, or company context."
      />
      <div className="grid gap-5 sm:grid-cols-2">
        {homeAudiencePaths.map((path, index) => (
          <Link
            key={path.href + path.title}
            href={path.href}
            className="group block rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-atlantic-light focus-visible:ring-offset-2"
          >
            <Card
              hover
              className={`flex h-full min-h-[9.5rem] flex-col justify-between ${whyAccentClasses[index % whyAccentClasses.length]}`}
            >
              <div>
                <h3 className="type-card text-brand-navy transition-colors group-hover:text-brand-atlantic">
                  {path.title}
                </h3>
                <p className="mt-2 type-body-sm leading-relaxed text-brand-muted">
                  {path.description}
                </p>
              </div>
              <span className="mt-5 inline-flex min-h-[var(--touch-min)] items-center text-sm font-medium text-brand-atlantic">
                {path.cta}
              </span>
            </Card>
          </Link>
        ))}
      </div>
    </ContentSection>
  );
}
