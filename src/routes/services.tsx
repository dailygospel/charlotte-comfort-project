import { createFileRoute } from "@tanstack/react-router";
import installationImage from "@/assets/installation.jpg";
import commercialImage from "@/assets/commercial-hvac.jpg";
import { services } from "@/lib/company";
import { CallButton } from "@/components/CallButton";
import { Reveal } from "@/components/Reveal";
import { ContactCta, EmergencyCta, SectionHead } from "@/components/sections";

const title = "HVAC Services in Charlotte, NC | Universal HVAC";
const description =
  "Heating repair, AC repair, HVAC installation and replacement, commercial HVAC, maintenance, and rental property service in Charlotte, NC. Call (980) 310-7061.";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});

const imageFor: Record<string, { src: string; alt: string } | undefined> = {
  installation: {
    src: installationImage,
    alt: "Newly installed heat pump outdoor unit on a concrete pad beside a home",
  },
  commercial: {
    src: commercialImage,
    alt: "Rooftop commercial HVAC package units with ductwork on a commercial building",
  },
};

function ServicesPage() {
  return (
    <>
      <section className="bg-navy-deep text-primary-foreground">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:py-16">
          <SectionHead
            as="h1"
            eyebrow="Services"
            title="HVAC services in Charlotte and the surrounding area"
            tone="dark"
            intro="Residential and commercial heating and cooling work — repairs, installations, replacements, and maintenance."
          />
          <CallButton className="mt-7" size="lg" />
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {services.map((s, i) => {
          const img = imageFor[s.slug];
          return (
            <Reveal
              as="section"
              key={s.slug}
              className="scroll-mt-28 border-b border-border py-12 last:border-0 lg:py-16"
            >
              <div id={s.slug} className="grid items-start gap-8 lg:grid-cols-12">
                <div className="lg:col-span-1">
                  <span className="font-display text-3xl font-bold text-border-strong">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <div className={img ? "lg:col-span-6" : "lg:col-span-9"}>
                  <h2 className="text-[1.75rem] text-primary sm:text-[2.1rem]">
                    {s.title}
                  </h2>
                  <p className="mt-3 text-lg text-muted-foreground">{s.detail}</p>
                  <div className="mt-6 flex flex-wrap gap-3">
                    <CallButton label="Request Service" />
                  </div>
                </div>
                {img && (
                  <div className="lg:col-span-5">
                    <img
                      src={img.src}
                      alt={img.alt}
                      width={1280}
                      height={960}
                      loading="lazy"
                      decoding="async"
                      className="w-full border border-border object-cover shadow-panel"
                    />
                  </div>
                )}
              </div>
            </Reveal>
          );
        })}
      </div>

      <EmergencyCta />
      <ContactCta />
    </>
  );
}
