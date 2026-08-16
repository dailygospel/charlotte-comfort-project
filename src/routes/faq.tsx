import { createFileRoute } from "@tanstack/react-router";
import { faqs } from "@/lib/company";
import { CallButton } from "@/components/CallButton";
import { ContactCta, FaqList, SectionHead } from "@/components/sections";

const title = "HVAC FAQ | Universal HVAC, Charlotte NC";
const description =
  "Answers to common questions about Universal HVAC in Charlotte, NC: services offered, installations, commercial work, maintenance, same-day availability, and how to get in touch.";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/faq" },
    ],
    links: [{ rel: "canonical", href: "/faq" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
    ],
  }),
  component: FaqPage,
});

function FaqPage() {
  return (
    <>
      <section className="bg-navy-deep text-primary-foreground">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:py-16">
          <SectionHead
            as="h1"
            eyebrow="FAQ"
            title="Questions Charlotte customers ask"
            tone="dark"
            intro="If something isn't covered here, call Universal HVAC and ask — it's the fastest way to get a straight answer about your system."
          />
          <CallButton className="mt-7" size="lg" />
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:py-20">
          <FaqList items={faqs} />
        </div>
      </section>

      <ContactCta />
    </>
  );
}
