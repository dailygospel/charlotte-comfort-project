import { createFileRoute } from "@tanstack/react-router";
import heroImage from "@/assets/hero-technician.jpg";
import { company } from "@/lib/company";
import { CallButton } from "@/components/CallButton";
import { Reveal } from "@/components/Reveal";
import {
  ContactCta,
  HowItWorks,
  RatingBadge,
  SectionHead,
  ServiceArea,
  WhyChooseUs,
} from "@/components/sections";

const title = "About Universal HVAC | Charlotte HVAC Contractor";
const description =
  "Universal HVAC Heating & Air is a family owned and operated HVAC contractor in Charlotte, NC with more than two decades of experience serving homes and businesses.";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <section className="bg-navy-deep text-primary-foreground">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:py-16">
          <SectionHead
            as="h1"
            eyebrow="About us"
            title="A family owned HVAC company in Charlotte"
            tone="dark"
            intro="More than two decades of keeping homes and businesses comfortable, with heating, cooling, and ventilation work across the Charlotte area."
          />
        </div>
      </section>

      <section>
        <div className="mx-auto grid max-w-7xl items-start gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:py-20">
          <Reveal>
            <div className="space-y-5 text-lg text-muted-foreground">
              <p>
                Keeping Charlotte homes and businesses comfortable starts with dependable
                HVAC service. Universal HVAC Heating &amp; Air has been doing that work for
                more than twenty years as a family owned and operated company.
              </p>
              <p>
                The company handles heating, air conditioning, and ventilation — repairs,
                installations, replacements, and maintenance — for residential and
                commercial customers. Jobs get matched to what the building actually needs
                and what the budget allows, rather than pushed toward the biggest possible
                system.
              </p>
              <p>
                Customers most often mention three things: technicians showing up quickly,
                pricing that stays fair, and honest answers about what a system needs.
                Reviewers have described service calls completed in snow and system
                replacements finished in heavy rain with the worksite left clean.
              </p>
              <p className="font-semibold text-primary">{company.tagline}</p>
            </div>
            <div className="mt-7">
              <RatingBadge />
            </div>
            <CallButton className="mt-6" size="lg" />
          </Reveal>
          <Reveal delay={80}>
            <img
              src={heroImage}
              alt="HVAC technician working on an outdoor air conditioning unit at a Charlotte-area home"
              width={1920}
              height={1280}
              loading="lazy"
              decoding="async"
              className="w-full border border-border object-cover shadow-panel"
            />
            <dl className="mt-6 grid gap-4 border border-border bg-card p-6 shadow-panel sm:grid-cols-2">
              <div>
                <dt className="eyebrow text-muted-foreground">Phone</dt>
                <dd className="mt-1">
                  <a
                    href={company.phoneHref}
                    className="text-lg font-semibold text-primary hover:text-secondary"
                  >
                    {company.phone}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="eyebrow text-muted-foreground">Hours</dt>
                <dd className="mt-1 font-semibold text-primary">{company.hours}</dd>
              </div>
              <div>
                <dt className="eyebrow text-muted-foreground">Based in</dt>
                <dd className="mt-1 font-semibold text-primary">
                  {company.street}, {company.city}, {company.state} {company.zip}
                </dd>
              </div>
              <div>
                <dt className="eyebrow text-muted-foreground">Serving</dt>
                <dd className="mt-1 font-semibold text-primary">
                  Charlotte &amp; surrounding areas
                </dd>
              </div>
            </dl>
          </Reveal>
        </div>
      </section>

      <WhyChooseUs />
      <HowItWorks />
      <ServiceArea />
      <ContactCta />
    </>
  );
}
