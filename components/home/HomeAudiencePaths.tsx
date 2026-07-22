import Link from "next/link";
import Card from "@/components/Card";
import ContentSection from "@/components/ContentSection";
import HomeAreaIcon from "@/components/home/HomeAreaIcon";
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
              className={`ba-home-card ba-home-path-card flex h-full min-h-[10rem] flex-col justify-between ${whyAccentClasses[index % whyAccentClasses.length]}`}
            >
              <div>
                <div className="mb-4 flex items-start justify-between gap-3">
                  <div className="ba-home-icon-well">
                    <HomeAreaIcon name={path.icon} />
                  </div>
                  <span className="type-caption font-semibold tabular-nums text-brand-atlantic/45">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="type-card text-brand-navy transition-colors group-hover:text-brand-atlantic">
                  {path.title}
                </h3>
                <p className="mt-2 type-body-sm leading-relaxed text-brand-muted">
                  {path.description}
                </p>
              </div>
              <span className="mt-5 inline-flex min-h-[var(--touch-min)] items-center gap-2 text-sm font-medium text-brand-atlantic">
                {path.cta}
                <HomeAreaIcon
                  name="arrow"
                  size="sm"
                  className="transition-transform group-hover:translate-x-0.5"
                />
              </span>
            </Card>
          </Link>
        ))}
      </div>
    </ContentSection>
  );
}
