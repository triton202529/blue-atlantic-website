import ContentSection from "@/components/ContentSection";
import Card from "@/components/Card";
import SectionHeader from "@/components/SectionHeader";
import { homeWhyPoints } from "@/lib/homepage";

export default function HomeWhyBlueAtlantic() {
  return (
    <ContentSection surface="slate" dense containerClassName="!max-w-7xl">
      <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
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
              className="border-l-[3px] border-l-brand-atlantic bg-white"
            >
              <div className="flex items-start gap-4">
                <span className="type-caption font-semibold tabular-nums text-brand-atlantic/70">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="type-card text-brand-navy">{item.title}</h3>
                  <p className="mt-1.5 type-body-sm leading-relaxed text-brand-muted">
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
