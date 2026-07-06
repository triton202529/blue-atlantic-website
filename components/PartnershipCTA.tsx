import Button from "./Button";
import PageContainer from "./PageContainer";
import SectionHeader from "./SectionHeader";

export default function PartnershipCTA() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-brand-navy via-brand-navy-light to-brand-atlantic">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(42,108,184,0.2)_0%,_transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(255,255,255,0.05)_0%,_transparent_50%)]" />
      <PageContainer className="relative">
        <div className="mx-auto max-w-3xl rounded-3xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur-sm md:p-12">
          <SectionHeader
            title="Partnership and institutional conversations"
            description="Blue Atlantic welcomes conversations with institutions, businesses, developers, and regional partners aligned with long-term Caribbean enterprise development."
            align="center"
            variant="light"
          />
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button href="/contact" variant="secondary">
              Contact Blue Atlantic
            </Button>
            <Button
              href="/companies"
              variant="ghost"
              className="border-white/20 text-white hover:bg-white/10 hover:text-white"
            >
              Learn about our companies
            </Button>
          </div>
        </div>
      </PageContainer>
    </section>
  );
}
