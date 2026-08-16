import { createFileRoute } from "@tanstack/react-router";
import { Phone, MapPin, Clock } from "lucide-react";
import { company } from "@/lib/company";
import { CallButton } from "@/components/CallButton";
import { Reveal } from "@/components/Reveal";
import { RequestServiceForm } from "@/components/RequestServiceForm";
import { HowItWorks, SectionHead } from "@/components/sections";

const title = "Contact Universal HVAC | Charlotte, NC HVAC Service";
const description =
  "Call Universal HVAC at (980) 310-7061 or request service online for heating, cooling, installation, and maintenance in Charlotte, NC and the surrounding area.";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <section className="bg-navy-deep text-primary-foreground">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:py-16">
          <SectionHead
            as="h1"
            eyebrow="Contact"
            title="Need HVAC service? Let's get your system back on track."
            tone="dark"
            intro="Call for the fastest response, or send a request and Universal HVAC will follow up."
          />
          <a
            href={company.phoneHref}
            className="mt-6 inline-block font-display text-4xl font-bold text-primary-foreground hover:text-accent sm:text-[3rem]"
          >
            {company.phone}
          </a>
          <div className="mt-6">
            <CallButton size="lg" label="Call Now" />
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1fr_1.2fr] lg:py-20">
          <Reveal>
            <h2 className="text-[1.75rem] text-primary sm:text-[2.1rem]">
              Universal HVAC Heating &amp; Air
            </h2>
            <dl className="mt-6 space-y-5">
              <div className="flex gap-3">
                <dt>
                  <Phone className="mt-1 h-5 w-5 text-secondary" aria-hidden="true" />
                  <span className="sr-only">Phone</span>
                </dt>
                <dd>
                  <a
                    href={company.phoneHref}
                    className="text-lg font-semibold text-primary hover:text-secondary"
                  >
                    {company.phone}
                  </a>
                  <span className="block text-muted-foreground">
                    Also listed:{" "}
                    <a href={company.altPhoneHref} className="hover:text-secondary">
                      {company.altPhone}
                    </a>
                  </span>
                </dd>
              </div>
              <div className="flex gap-3">
                <dt>
                  <MapPin className="mt-1 h-5 w-5 text-secondary" aria-hidden="true" />
                  <span className="sr-only">Address</span>
                </dt>
                <dd className="text-muted-foreground">
                  {company.street}
                  <br />
                  {company.city}, {company.state} {company.zip}
                  <br />
                  Near Brookwood Rd &amp; Blaze Manor Ln
                </dd>
              </div>
              <div className="flex gap-3">
                <dt>
                  <Clock className="mt-1 h-5 w-5 text-secondary" aria-hidden="true" />
                  <span className="sr-only">Hours</span>
                </dt>
                <dd className="text-muted-foreground">{company.hours}</dd>
              </div>
            </dl>

            <div className="relative mt-8 overflow-hidden border border-border bg-surface p-6">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 opacity-[0.35]"
                style={{
                  backgroundImage:
                    "linear-gradient(var(--border-strong) 1px, transparent 1px), linear-gradient(90deg, var(--border-strong) 1px, transparent 1px)",
                  backgroundSize: "40px 40px",
                }}
              />
              <div className="relative">
                <p className="eyebrow text-secondary">Service area</p>
                <p className="mt-2 text-lg font-semibold text-primary">
                  Charlotte, NC &amp; the surrounding metro area
                </p>
                <p className="mt-2 text-muted-foreground">
                  Includes East Charlotte, University City, Matthews, Mint Hill, Pineville,
                  Huntersville, Concord, and Harrisburg. Call to confirm coverage for your
                  address.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={80}>
            <h2 className="text-[1.75rem] text-primary sm:text-[2.1rem]">
              Request service
            </h2>
            <p className="mt-2 text-muted-foreground">
              Tell us what the system is doing and the best number to reach you.
            </p>
            <div className="mt-5">
              <RequestServiceForm />
            </div>
          </Reveal>
        </div>
      </section>

      <HowItWorks />
    </>
  );
}
