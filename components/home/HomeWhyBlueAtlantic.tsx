import ContentSection from "@/components/ContentSection";
import Card from "@/components/Card";
import HomeAreaIcon from "@/components/home/HomeAreaIcon";
import SectionHeader from "@/components/SectionHeader";
import { homeWhyPoints } from "@/lib/homepage";

export default function HomeWhyBlueAtlantic() {
  return (
    <ContentSection surface="slate" dense containerClassName="!max-w-7xl">
      <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start lg:gap-12">
        <SectionHeader
          label="Approach"
          title="Why Blue Atlantic"
          description="A calm operating posture built around regional context, disciplined delivery, and durable institutional purpose."
        />
        <div className="grid gap-4">
          {homeWhyPoints.map((item, index) => (
            <Card
              key={item.title}
              variant="compact"
              className="ba-home-card border-l-[3px] border-l-brand-atlantic bg-white"
            >
              <div className="flex items-start gap-4">
                <div className="ba-home-icon-well shrink-0">
                  <HomeAreaIcon name={item.icon} />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-baseline gap-3">
                    <span className="type-caption font-semibold tabular-nums text-brand-atlantic/60">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <h3 className="type-card text-brand-navy">{item.title}</h3>
                  </div>
                  <p className="mt-2 type-body-sm leading-relaxed text-brand-muted">
                    {item.description}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </ContentSection>
  );
}
