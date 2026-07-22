import Image from "next/image";
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

const techTeamImage = {
  src: "/images/homepage/homepage-tech-team.webp",
  alt: "Blue Atlantic software development team working with enterprise dashboards and technology systems.",
} as const;

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

      <div className="grid items-stretch gap-6 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:gap-8">
        <figure className="ba-home-media relative m-0 overflow-hidden rounded-2xl border border-brand-border bg-brand-soft shadow-brand">
          <div className="relative aspect-[3/2] w-full lg:aspect-auto lg:h-full lg:min-h-[26rem]">
            <Image
              src={techTeamImage.src}
              alt={techTeamImage.alt}
              fill
              sizes="(max-width: 1024px) 100vw, 42vw"
              className="object-cover object-center"
            />
          </div>
        </figure>

        <div className="grid gap-4 content-start">
          <Card
            hover
            className={`ba-home-card relative flex h-full flex-col justify-between overflow-hidden ${pillarAccentClasses["pillar-1"]}`}
          >
            <div
              className="pointer-events-none absolute inset-0 ba-blueprint-grid opacity-60"
              aria-hidden="true"
            />
            <div className="relative">
              <div className="ba-home-icon-well ba-home-icon-well-lg mb-5">
                <HomeAreaIcon name={featured.icon} size="lg" />
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
            <div className="relative mt-8">
              <Button href={featured.href} variant="primary">
                Explore financial technology
              </Button>
            </div>
          </Card>

          {supporting.map((area, index) => (
            <Link
              key={area.id}
              href={area.href}
              className="group block rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-atlantic-light focus-visible:ring-offset-2"
            >
              <Card
                hover
                variant="compact"
                className={`ba-home-card flex min-h-[var(--touch-min)] items-start gap-4 ${pillarAccentClasses[accentByIndex[index + 1]]}`}
              >
                <div className="ba-home-icon-well shrink-0">
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
                <HomeAreaIcon
                  name="arrow"
                  size="sm"
                  className="mt-1 text-brand-atlantic/40 transition-colors group-hover:text-brand-atlantic"
                />
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </ContentSection>
  );
}
