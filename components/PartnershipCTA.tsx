import Button from "./Button";
import PageContainer from "./PageContainer";

export default function PartnershipCTA() {
  return (
    <section className="border-t border-brand-border bg-brand-navy">
      <PageContainer>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-semibold tracking-tight text-white md:text-3xl">
            Partnership and institutional conversations
          </h2>
          <p className="mt-4 text-base leading-relaxed text-blue-100/75 md:text-lg">
            Blue Atlantic welcomes conversations with institutions, businesses,
            developers, and regional partners aligned with long-term Caribbean
            enterprise development.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button href="/contact" variant="secondary">
              Contact Blue Atlantic
            </Button>
            <Button
              href="/companies"
              variant="ghost"
              className="border-white/15 text-white hover:bg-white/5 hover:text-white"
            >
              Learn about our companies
            </Button>
          </div>
        </div>
      </PageContainer>
    </section>
  );
}
