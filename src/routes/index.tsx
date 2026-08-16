import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Phone, ShieldCheck, Clock, MapPin } from "lucide-react";
import heroImage from "@/assets/hero-technician.jpg";
import furnaceImage from "@/assets/furnace-repair.jpg";
import { company, services, reviewThemes, faqs } from "@/lib/company";
import { CallButton } from "@/components/CallButton";
import { Reveal } from "@/components/Reveal";
import {
  ContactCta,
  EmergencyCta,
  FaqList,
  HowItWorks,
  RatingBadge,
  SectionHead,
  ServiceArea,
  WhyChooseUs,
} from "@/components/sections";

const title = "Universal HVAC | Heating & Air Conditioning Service in Charlotte, NC";
const description =
  "Family owned HVAC contractor in Charlotte, NC. Heating repair, AC repair, installation, maintenance, and commercial HVAC. Rated 4.8 stars. Call (980) 310-7061.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      <section className="relative isolate bg-navy-deep text-primary-foreground">
        <img
          src={heroImage}
          alt="HVAC technician testing an outdoor air conditioning condenser unit beside a brick home"
          width={1920}
          height={1280}
          fetchPriority="high"
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover object-center opacity-40"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[linear-gradient(100deg,var(--navy-deep)_18%,color-mix(in_oklab,var(--navy-deep)_72%,transparent)_60%,color-mix(in_oklab,var(--navy-deep)_45%,transparent)_100%)]"
        />
        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-24">
          <div className="max-w-2xl">
            <p className="eyebrow text-accent">Charlotte, North Carolina</p>
            <h1 className="mt-4 text-[2.4rem] leading-[1.03] sm:text-[3.25rem] lg:text-[3.75rem]">
              Reliable heating &amp; air conditioning service in Charlotte
            </h1>
            <p className="mt-5 text-lg text-primary-foreground/85 sm:text-xl">
              Universal HVAC helps homeowners and businesses with heating, cooling,
              installation, repairs, and maintenance across the Charlotte area. Family
              owned and operated, with more than two decades of experience.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <CallButton size="lg" label={`Call ${company.phone}`} />
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-sm border border-primary-foreground/35 px-7 py-4 text-lg font-semibold text-primary-foreground transition-colors hover:bg-primary-foreground hover:text-primary"
              >
                Request Service
                <ArrowRight className="h-5 w-5" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>

        <div className="relative border-t border-primary-foreground/15 bg-navy-deep/70">
          <ul className="mx-auto grid max-w-7xl gap-4 px-4 py-6 sm:grid-cols-2 sm:px-6 lg:grid-cols-4">
            <li className="flex items-center gap-3">
              <ShieldCheck className="h-5 w-5 shrink-0 text-accent" aria-hidden="true" />
              <span className="text-[0.95rem] font-semibold">
                Family owned &amp; operated
              </span>
            </li>
            <li className="flex items-center gap-3">
              <Clock className="h-5 w-5 shrink-0 text-accent" aria-hidden="true" />
              <span className="text-[0.95rem] font-semibold">Available 24 hours</span>
            </li>
            <li className="flex items-center gap-3">
              <MapPin className="h-5 w-5 shrink-0 text-accent" aria-hidden="true" />
              <span className="text-[0.95rem] font-semibold">
                Charlotte &amp; surrounding area
              </span>
            </li>
            <li>
              <RatingBadge tone="dark" />
            </li>
          </ul>
        </div>
      </section>

      <section aria-labelledby="services-h">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-20">
          <Reveal>
            <SectionHead
              eyebrow="What we do"
              title="Heating and cooling work for homes, rentals, and commercial buildings"
              intro="Residential and commercial HVAC — repairs, installations, replacements, and maintenance."
            />
          </Reveal>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <Reveal key={s.slug} delay={i * 60}>
                <article className="flex h-full flex-col border border-border bg-card p-6 shadow-panel transition-shadow hover:shadow-lift">
                  <h3 className="text-xl text-primary">{s.title}</h3>
                  <p className="mt-2.5 flex-1 text-muted-foreground">{s.short}</p>
                  <Link
                    to="/services"
                    hash={s.slug}
                    className="mt-5 inline-flex items-center gap-1.5 font-semibold text-secondary hover:gap-2.5"
                  >
                    Learn more
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <EmergencyCta />
      <WhyChooseUs />

      <section aria-labelledby="about-h">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:py-20">
          <Reveal>
            <SectionHead
              eyebrow="About Universal HVAC"
              title="Keeping Charlotte homes and businesses comfortable"
            />
            <div className="mt-5 space-y-4 text-lg text-muted-foreground">
              <p>
                Universal HVAC Heating &amp; Air has been keeping homes and businesses
                comfortable for more than two decades. It&apos;s a family owned and
                operated company working out of Charlotte, handling heating, air
                conditioning, and ventilation.
              </p>
              <p>
                The work covers repairs, installations, replacements, and maintenance for
                residential and commercial customers — sized and scheduled around what you
                actually need and what you can spend. {company.tagline}
              </p>
            </div>
            <Link
              to="/about"
              className="mt-6 inline-flex items-center gap-1.5 font-semibold text-secondary hover:gap-2.5"
            >
              More about the company
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </Reveal>
          <Reveal delay={80}>
            <img
              src={furnaceImage}
              alt="Technician inspecting the inside of a residential gas furnace with a flashlight"
              width={1280}
              height={960}
              loading="lazy"
              decoding="async"
              className="w-full border border-border object-cover shadow-panel"
            />
          </Reveal>
        </div>
      </section>

      <section className="bg-surface" aria-labelledby="reviews-h">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-20">
          <Reveal>
            <SectionHead
              eyebrow="Customer feedback"
              title="Rated 4.8 stars across 17 reviews"
              intro="Summaries of the themes that come up in Universal HVAC's public reviews. Read the full reviews on Google to see them in the customers' own words."
            />
            <div className="mt-5">
              <RatingBadge />
            </div>
          </Reveal>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {reviewThemes.map((r, i) => (
              <Reveal key={r.heading} delay={i * 60}>
                <article className="h-full border-l-4 border-secondary bg-card p-6 shadow-panel">
                  <h3 className="text-lg text-primary">{r.heading}</h3>
                  <p className="mt-2 text-muted-foreground">{r.body}</p>
                  <p className="mt-3 text-sm font-semibold uppercase tracking-wide text-muted-foreground/80">
                    Summary of Google reviews
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/reviews"
              className="inline-flex items-center justify-center rounded-sm bg-primary px-6 py-3 font-semibold text-primary-foreground hover:bg-navy-deep"
            >
              See what customers are saying
            </Link>
            <a
              href={company.phoneHref}
              className="inline-flex items-center justify-center gap-2 rounded-sm border border-primary px-6 py-3 font-semibold text-primary hover:bg-primary hover:text-primary-foreground"
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
              {company.phone}
            </a>
          </div>
        </div>
      </section>

      <ServiceArea />
      <HowItWorks />

      <section className="bg-surface" aria-labelledby="faq-h">
        <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:py-20">
          <Reveal>
            <SectionHead eyebrow="FAQ" title="Common questions" />
          </Reveal>
          <Reveal delay={60}>
            <FaqList items={faqs.slice(0, 5)} />
            <Link
              to="/faq"
              className="mt-6 inline-flex items-center gap-1.5 font-semibold text-secondary hover:gap-2.5"
            >
              See all questions
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </Reveal>
        </div>
      </section>

      <ContactCta />
    </>
  );
}
