import type { Metadata } from "next";
import Image from "next/image";
import Button from "@/components/Button";
import ContentSection from "@/components/ContentSection";
import HeroSection from "@/components/HeroSection";
import SectionHeader from "@/components/SectionHeader";
import Card from "@/components/Card";
import { whyAccentClasses } from "@/lib/card-themes";
import { contactEmails } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Blue Atlantic",
  description:
    "Contact Blue Atlantic through official email for platform inquiries, partnerships, technology systems, automation projects, and general company matters.",
};

const contactCategories = [
  {
    title: "Institutional conversations",
    description:
      "For government entities, institutions, and enterprise organizations exploring structured engagement with Blue Atlantic on regional infrastructure and long-term development.",
  },
  {
    title: "Partnerships",
    description:
      "For organizations interested in strategic partnership, regional collaboration, ecosystem integrations, or conversations around Blue Atlantic platforms and initiatives.",
  },
  {
    title: "Platform inquiries",
    description:
      "For questions about Tropicash, EliteHire Pro, TRITON, Sentinel, or other platforms within the Blue Atlantic ecosystem.",
  },
  {
    title: "Technology systems and automation",
    description:
      "For businesses, institutions, and partners interested in practical systems, workflow automation, dashboards, internal tools, and product development.",
  },
  {
    title: "General company inquiries",
    description:
      "For other inquiries related to Blue Atlantic, its ecosystem, public website, or future initiatives.",
  },
];

const supportTeamImage = {
  src: "/images/contact/contact-support-team.webp",
  alt: "Blue Atlantic support professionals collaborating with headsets and enterprise systems in a modern office.",
} as const;

export default function ContactPage() {
  return (
    <>
      <HeroSection
        compact
        wide
        eyebrow="Contact"
        headline="Contact Blue Atlantic"
        supportingCopy="Contact Blue Atlantic for institutional conversations, partnerships, platform inquiries, technology systems, automation projects, and general company matters related to Caribbean enterprise infrastructure."
        backgroundImage={{
          src: "/images/contact/contact-caribbean-hero.webp",
          sizes: "100vw",
          treatment: "contact",
        }}
      />

      <div className="contact-page-surface">
        <ContentSection
          surface="blue"
          dense
          className="!bg-transparent"
          containerClassName="!max-w-[88rem] !pt-10 !pb-10 md:!pt-12 md:!pb-12 lg:!pt-14 lg:!pb-14"
        >
          <SectionHeader
            label="Contact"
            title="Official contact"
            description="For general company inquiries, platform discussions, partnerships, and technology conversations, contact Blue Atlantic through the official company email below."
            className="!mb-8 md:!mb-10"
          />
          <div className="grid items-stretch gap-5 md:grid-cols-2 md:gap-6">
            <Card
              hover
              className={`ba-contact-detail-card flex h-full flex-col ${whyAccentClasses[0]} !p-6 md:!p-7`}
            >
              <p className="type-caption font-semibold text-brand-atlantic">
                Official email
              </p>
              <a
                href={`mailto:${contactEmails.general}`}
                className="mt-3 inline-block break-all text-lg font-semibold text-brand-navy transition-colors hover:text-brand-atlantic md:text-xl"
              >
                {contactEmails.general}
              </a>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-brand-muted md:text-base">
                Primary company email for institutional, platform, partnership,
                and technology conversations.
              </p>
              <div className="mt-6">
                <Button href={`mailto:${contactEmails.general}`} variant="primary">
                  Email {contactEmails.general}
                </Button>
              </div>
            </Card>
            <Card
              hover
              className={`ba-contact-detail-card flex h-full flex-col ${whyAccentClasses[1]} !p-6 md:!p-7`}
            >
              <p className="type-caption font-semibold text-brand-atlantic">
                Direct correspondence
              </p>
              <h2 className="mt-3 text-lg font-semibold text-brand-navy md:text-xl">
                Direct company correspondence
              </h2>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-brand-muted md:text-base">
                For direct correspondence with Akim Wallace regarding Blue
                Atlantic matters, use the direct company email below.
              </p>
              <a
                href={`mailto:${contactEmails.direct}`}
                className="mt-5 inline-block break-all text-base font-semibold text-brand-navy transition-colors hover:text-brand-atlantic"
              >
                {contactEmails.direct}
              </a>
            </Card>
          </div>
        </ContentSection>

        <ContentSection
          surface="white"
          dense
          className="!bg-white/70"
          containerClassName="!max-w-[88rem] !pt-10 !pb-12 md:!pt-12 md:!pb-14 lg:!pt-14 lg:!pb-16"
        >
          <SectionHeader
            label="Inquiries"
            title="How to reach us"
            description="Choose the inquiry category that best matches your conversation, then email Blue Atlantic through the official contact channels above."
            className="!mb-8 md:!mb-10"
          />
          <div className="grid gap-5 sm:grid-cols-2 md:gap-6">
            {contactCategories.map((category, index) => (
              <Card
                key={category.title}
                hover
                className={`${whyAccentClasses[index % whyAccentClasses.length]} h-full !p-6 md:!p-7`}
              >
                <h2 className="text-lg font-semibold text-brand-navy">
                  {category.title}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-brand-muted">
                  {category.description}
                </p>
              </Card>
            ))}
          </div>
        </ContentSection>

        <ContentSection
          surface="soft"
          dense
          className="!bg-[rgba(244,247,251,0.78)]"
          containerClassName="!max-w-[97rem] !pt-6 !pb-8 md:!pt-8 md:!pb-10 lg:!pt-10 lg:!pb-12"
        >
          <figure className="ba-contact-support-media relative m-0 w-full overflow-hidden rounded-2xl border border-brand-border bg-brand-soft shadow-brand">
            <div className="ba-contact-support-frame relative w-full">
              <Image
                src={supportTeamImage.src}
                alt={supportTeamImage.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 97rem"
                className="ba-contact-support-image"
              />
            </div>
          </figure>
        </ContentSection>

        <ContentSection
          surface="slate"
          dense
          className="!bg-[rgba(232,237,244,0.88)]"
          containerClassName="!max-w-[88rem] !pt-10 !pb-14 md:!pt-12 md:!pb-16 lg:!pt-14 lg:!pb-20"
        >
          <div className="ba-contact-cta-panel mx-auto max-w-2xl px-6 py-10 text-center md:px-10 md:py-12">
            <h2 className="text-2xl font-semibold tracking-tight text-brand-navy md:text-3xl">
              Start the conversation
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-brand-muted md:text-lg">
              Use the official Blue Atlantic contact email for inquiries related
              to platforms, technology capability, partnerships, and Caribbean
              enterprise development.
            </p>
            <div className="mt-8">
              <Button
                href={`mailto:${contactEmails.general}`}
                variant="primary"
                size="lg"
                className="max-w-full break-all"
              >
                Email {contactEmails.general}
              </Button>
              <p className="mt-4 text-sm leading-relaxed text-brand-muted">
                <a
                  href={`mailto:${contactEmails.general}`}
                  className="break-all font-medium text-brand-navy transition-colors hover:text-brand-atlantic"
                >
                  Or email {contactEmails.general} directly.
                </a>
              </p>
            </div>
          </div>
        </ContentSection>
      </div>
    </>
  );
}
