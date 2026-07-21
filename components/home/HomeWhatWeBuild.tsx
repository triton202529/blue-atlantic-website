import Link from "next/link";
import Button from "@/components/Button";
import Card from "@/components/Card";
import ContentSection from "@/components/ContentSection";
import HomeAreaIcon from "@/components/home/HomeAreaIcon";
import SectionHeader from "@/components/SectionHeader";
import { homeBuildAreas } from "@/lib/homepage";
import { pillarAccentClasses } from "@/lib/card-themes";

const accentByIndex = [
  "pillar-1",
  "pillar-2",
  "pillar-3",
  "pillar-4",
] as const;

export default function HomeWhatWeBuild() {
  const featured = homeBuildAreas.find((area) => area.featured)!;
  const supporting = homeBuildAreas.filter((area) => !area.featured);

  return (
    <ContentSection
      surface="white"
      pattern
      dense
      containerClassName="!max-w-7xl"
    >
      <SectionHeader
        label="What we build"
        title="What Blue Atlantic builds"
        description="Four focused areas of enterprise work spanning payments, workforce systems, intelligence tools, and shared product infrastructure."
      />

      <div className="grid gap-5 lg:grid-cols-2 lg:gap-6">
        <Card
          hover
          className={`flex h-full flex-col justify-between ${pillarAccentClasses["pillar-1"]}`}
        >
          <div>
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-brand-border bg-white">
              <HomeAreaIcon name={featured.icon} />
            </div>
            <p className="type-caption font-semibold text-brand-atlantic">
              Featured focus
            </p>
            <h3 className="mt-2 type-section text-brand-navy">
              {featured.title}
            </h3>
            <p className="mt-4 max-w-md type-body leading-relaxed text-brand-muted">
              {featured.description}
            </p>
          </div>
          <div className="mt-8">
            <Button href={featured.href} variant="primary">
              Explore financial technology
            </Button>
          </div>
        </Card>

        <div className="grid gap-5 sm:grid-cols-1">
          {supporting.map((area, index) => (
            <Link
              key={area.id}
              href={area.href}
              className="group block rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-atlantic-light focus-visible:ring-offset-2"
            >
              <Card
                hover
                variant="compact"
                className={`flex min-h-[var(--touch-min)] items-start gap-4 ${pillarAccentClasses[accentByIndex[index + 1]]}`}
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-brand-border bg-white">
                  <HomeAreaIcon name={area.icon} />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="type-card text-brand-navy transition-colors group-hover:text-brand-atlantic">
                    {area.title}
                  </h3>
                  <p className="mt-1.5 type-body-sm leading-relaxed text-brand-muted">
                    {area.description}
                  </p>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </ContentSection>
  );
}
