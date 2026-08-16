import { Link } from "@tanstack/react-router";
import { Star, Phone, ClipboardCheck, Wrench, ThermometerSun } from "lucide-react";
import { company, differentiators, faqs, serviceAreas } from "@/lib/company";
import { Reveal } from "./Reveal";
import { CallButton } from "./CallButton";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function SectionHead({
  eyebrow,
  title,
  intro,
  tone = "light",
  as: Heading = "h2",
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
  tone?: "light" | "dark";
  as?: "h1" | "h2";
}) {
  const dark = tone === "dark";
  return (
    <div className="max-w-3xl">
      {eyebrow && (
        <p className={`eyebrow ${dark ? "text-accent" : "text-secondary"}`}>{eyebrow}</p>
      )}
      <Heading
        className={`mt-3 text-[2.1rem] sm:text-[2.6rem] ${dark ? "text-primary-foreground" : "text-primary"}`}
      >
        {title}
      </Heading>
      {intro && (
        <p
          className={`mt-4 text-lg ${dark ? "text-primary-foreground/75" : "text-muted-foreground"}`}
        >
          {intro}
        </p>
      )}
    </div>
  );
}

export function RatingBadge({ tone = "light" }: { tone?: "light" | "dark" }) {
  const dark = tone === "dark";
  return (
    <div className="flex items-center gap-2.5">
      <span className="flex" aria-hidden="true">
        {[0, 1, 2, 3, 4].map((i) => (
          <Star key={i} className="h-4.5 w-4.5 fill-accent text-accent" />
        ))}
      </span>
      <span
        className={`text-sm font-semibold ${dark ? "text-primary-foreground/85" : "text-foreground"}`}
      >
        {company.rating} average · {company.reviewCount} reviews
      </span>
    </div>
  );
}

export function EmergencyCta() {
  return (
    <section className="bg-navy text-primary-foreground" aria-labelledby="emergency-h">
      <div className="mx-auto grid max-w-7xl items-center gap-8 px-4 py-14 sm:px-6 lg:grid-cols-[1.4fr_1fr] lg:py-16">
        <Reveal>
          <p className="eyebrow text-accent">No heat? No cooling?</p>
          <h2 id="emergency-h" className="mt-3 text-[2rem] sm:text-[2.5rem]">
            Heating or AC not working right now?
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-primary-foreground/80">
            Universal HVAC is listed as available 24 hours a day, and customers regularly
            report same-day arrivals for heating and cooling failures. Call and describe
            what the system is doing.
          </p>
        </Reveal>
        <Reveal className="lg:justify-self-end" delay={80}>
          <div className="rounded-sm border border-primary-foreground/15 bg-navy-deep p-6">
            <p className="eyebrow text-primary-foreground/60">Call Universal HVAC</p>
            <a
              href={company.phoneHref}
              className="mt-2 block font-display text-4xl font-bold text-primary-foreground hover:text-accent sm:text-[2.75rem]"
            >
              {company.phone}
            </a>
            <p className="mt-2 text-sm text-primary-foreground/70">{company.hours}</p>
            <CallButton className="mt-5 w-full" label="Call Now" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function WhyChooseUs() {
  return (
    <section className="bg-surface" aria-labelledby="why-h">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-20">
        <Reveal>
          <SectionHead
            eyebrow="Why Universal HVAC"
            title="A local HVAC company Charlotte homeowners call back"
            intro="Everything below comes from the company's own listings and its public review record."
          />
        </Reveal>
        <ul className="mt-10 grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
          {differentiators.map((d, i) => (
            <Reveal as="li" key={d.title} delay={i * 60}>
              <div className="border-t-2 border-accent pt-4">
                <h3 className="text-xl text-primary">{d.title}</h3>
                <p className="mt-2 text-muted-foreground">{d.body}</p>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function HowItWorks() {
  const steps = [
    {
      icon: Phone,
      title: "Contact Universal HVAC",
      body: "Call (980) 310-7061 or send a service request with what your system is doing.",
    },
    {
      icon: ClipboardCheck,
      title: "Get the problem assessed",
      body: "A technician evaluates the heating or cooling issue and explains what they find.",
    },
    {
      icon: ThermometerSun,
      title: "Get back to comfortable",
      body: "The repair, tune-up, or installation gets completed and your home holds temperature again.",
    },
  ];
  return (
    <section aria-labelledby="how-h">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-20">
        <Reveal>
          <SectionHead eyebrow="How it works" title="Three steps, no runaround" />
        </Reveal>
        <ol className="mt-10 grid gap-8 md:grid-cols-3">
          {steps.map((s, i) => (
            <Reveal as="li" key={s.title} delay={i * 70}>
              <div className="flex h-full flex-col border border-border bg-card p-6 shadow-panel">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center bg-primary font-display text-lg font-bold text-primary-foreground">
                    {i + 1}
                  </span>
                  <s.icon className="h-6 w-6 text-secondary" aria-hidden="true" />
                </div>
                <h3 className="mt-4 text-xl text-primary">{s.title}</h3>
                <p className="mt-2 text-muted-foreground">{s.body}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function ServiceArea() {
  return (
    <section className="bg-navy-deep text-primary-foreground" aria-labelledby="area-h">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:py-20">
        <Reveal>
          <SectionHead
            eyebrow="Service area"
            title="Serving Charlotte & the surrounding area"
            tone="dark"
            intro="Universal HVAC works out of Charlotte and takes calls across the surrounding Charlotte metro area. Not sure whether you're in range? Call and ask."
          />
          <p className="mt-6 text-primary-foreground/80">
            {company.street}, {company.city}, {company.state} {company.zip}
          </p>
          <CallButton className="mt-6" />
        </Reveal>
        <Reveal delay={80}>
          <div className="relative overflow-hidden border border-primary-foreground/15 bg-navy p-6">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 opacity-[0.14]"
              style={{
                backgroundImage:
                  "linear-gradient(var(--color-primary-foreground) 1px, transparent 1px), linear-gradient(90deg, var(--color-primary-foreground) 1px, transparent 1px)",
                backgroundSize: "44px 44px",
              }}
            />
            <div className="relative">
              <h3 className="text-xl text-primary-foreground">Areas we cover</h3>
              <ul className="mt-4 grid grid-cols-2 gap-y-2.5 text-primary-foreground/85">
                {serviceAreas.map((a) => (
                  <li key={a} className="flex items-center gap-2">
                    <Wrench className="h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                    {a}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function FaqList({ items = faqs }: { items?: readonly { q: string; a: string }[] }) {
  return (
    <Accordion type="single" collapsible className="mt-8 border-t border-border">
      {items.map((f, i) => (
        <AccordionItem key={f.q} value={`item-${i}`}>
          <AccordionTrigger className="py-5 text-left font-display text-xl leading-snug text-primary hover:no-underline">
            {f.q}
          </AccordionTrigger>
          <AccordionContent className="pb-5 text-base text-muted-foreground">
            {f.a}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}

export function ContactCta() {
  return (
    <section className="bg-surface" aria-labelledby="contact-cta-h">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-20">
        <Reveal className="flex flex-col items-start justify-between gap-6 border-l-4 border-accent bg-card p-8 shadow-panel lg:flex-row lg:items-center">
          <div>
            <h2 id="contact-cta-h" className="text-[1.9rem] text-primary sm:text-[2.2rem]">
              Need HVAC service? Let&apos;s get your system back on track.
            </h2>
            <p className="mt-3 max-w-2xl text-muted-foreground">
              Call for the fastest response, or send a service request and Universal HVAC
              will follow up.
            </p>
          </div>
          <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
            <CallButton size="lg" />
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-sm border border-primary px-7 py-4 text-lg font-semibold text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
            >
              Request Service
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
