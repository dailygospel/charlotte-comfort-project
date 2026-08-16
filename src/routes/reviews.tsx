import { createFileRoute } from "@tanstack/react-router";
import { ExternalLink } from "lucide-react";
import { company, reviewThemes } from "@/lib/company";
import { CallButton } from "@/components/CallButton";
import { Reveal } from "@/components/Reveal";
import { ContactCta, RatingBadge, SectionHead } from "@/components/sections";

const title = "Universal HVAC Reviews | 4.8 Stars in Charlotte, NC";
const description =
  "Universal HVAC holds a 4.8-star average across 17 reviews from Charlotte customers, who point to same-day service, fair pricing, and clean installations.";

export const Route = createFileRoute("/reviews")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/reviews" },
    ],
    links: [{ rel: "canonical", href: "/reviews" }],
  }),
  component: ReviewsPage,
});

function ReviewsPage() {
  return (
    <>
      <section className="bg-navy-deep text-primary-foreground">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:py-16">
          <SectionHead
            as="h1"
            eyebrow="Reviews"
            title="What Charlotte customers say about Universal HVAC"
            tone="dark"
            intro="Universal HVAC holds a 4.8-star average across 17 reviews. The summaries below reflect the themes that come up in those public reviews."
          />
          <div className="mt-6">
            <RatingBadge tone="dark" />
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-20">
          <div className="grid gap-6 md:grid-cols-2">
            {reviewThemes.map((r, i) => (
              <Reveal key={r.heading} delay={i * 60}>
                <article className="h-full border-l-4 border-secondary bg-card p-6 shadow-panel">
                  <h2 className="text-xl text-primary">{r.heading}</h2>
                  <p className="mt-2.5 text-muted-foreground">{r.body}</p>
                  <p className="mt-4 text-sm font-semibold uppercase tracking-wide text-muted-foreground/80">
                    Summary of Google reviews
                  </p>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-10 border border-border bg-surface p-6 shadow-panel">
            <h2 className="text-xl text-primary">Read the reviews yourself</h2>
            <p className="mt-2 text-muted-foreground">
              These are summaries rather than quotes, so the full wording lives on the
              company&apos;s Google review profile. Technicians Mike and Nick are the names
              customers mention most often.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <a
                href={company.googleReviewsUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-2 rounded-sm bg-primary px-6 py-3 font-semibold text-primary-foreground hover:bg-navy-deep"
              >
                Read reviews on Google
                <ExternalLink className="h-4 w-4" aria-hidden="true" />
              </a>
              <CallButton />
            </div>
          </Reveal>
        </div>
      </section>

      <ContactCta />
    </>
  );
}
