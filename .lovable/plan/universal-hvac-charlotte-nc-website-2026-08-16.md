# Universal HVAC — Charlotte, NC Website

A complete, multi-page marketing site for Universal HVAC built to drive phone calls and service requests. Content comes only from the HVACService.io and Yahoo Local listings (Facebook excluded).

## Verified facts to use

From HVACService.io:
- HVAC contractor in Charlotte, NC; 4.8 stars from 17 reviews
- Services: heating system repair (incl. same-day for furnace/heat pump failures), cooling system repair, new HVAC installation (residential + light commercial, new construction), commercial systems including 18-ton capacity, maintenance/tune-ups, investment & rental property service
- Documented themes: responsive/same-day arrivals, fair pricing, honest assessments, working around customer schedules, clean worksites, service during snow and heavy rain, repeat customers with investment properties, technicians Mike and Nick
- Operates out of the Charlotte metro, serving surrounding neighborhoods

From Yahoo Local (Universal HVAC Heating & Air):
- Family owned and operated; more than two decades of experience
- Residential and commercial HVAC: repairs, installations, replacements, maintenance; heating, cooling, ventilation
- 4520 Brookwood Rd, Charlotte, NC 28215 — near Brookwood Rd & Blaze Manor Ln
- Open 24 hours, seven days a week
- Alternate phone (704) 968-7652
- Tagline used by the company: "your air is our care"

Primary call number sitewide: (980) 310-7061 (`tel:+19803107061`), with (704) 968-7652 shown as an alternate line in the footer/contact only.

Nothing beyond the above — no certifications, awards, prices, financing, guarantees, employee bios, or invented testimonials.

## Pages

- `/` — Home: hero, trust strip, services overview, emergency CTA, why choose us, about teaser, reviews, service area, how it works, FAQ preview, contact/request-service section
- `/services` — All six services in detail, each with its own CTA
- `/about` — Family-owned, 20+ years, local Charlotte focus, how they work
- `/reviews` — 4.8/17 rating, clearly labeled summaries of documented review themes, link to Google reviews
- `/faq` — Full accordion
- `/contact` — Phone, hours (24/7), address + map-style visual, request-service form

Shared sticky header (compacts on scroll) and footer on every page; mobile menu plus a sticky bottom Call Now bar on phones.

## Design direction

- Palette: deep navy base, professional blue secondary, restrained warm-orange accent reserved for call/emergency CTAs, white and light-gray surfaces, charcoal-navy text. All tokens defined in `src/styles.css`.
- Strong typographic hierarchy with a condensed/industrial heading face paired with a clean sans body, loaded via `<link>` in the root route.
- Flat panels, hairline borders, and subtle shadows instead of stacked rounded gradient cards. Full-bleed navy sections alternating with light sections.
- Photography: generated realistic HVAC imagery (outdoor condenser units, furnace/heat pump work, technician hands on equipment, Charlotte-area home exteriors). No posed thumbs-up people, no faces implying specific employees.
- Text-based logo lockup: "UNIVERSAL" over "HVAC · Charlotte, NC" with a small vent/airflow mark.
- Motion: one-time fade/slide-in on section entry, hover states on buttons and service rows, header transition. Everything gated behind `prefers-reduced-motion`.

## Reviews section approach

Rating badge (4.8 ★ · 17 reviews) plus three or four cards summarizing documented themes, each labeled as a summary of Google reviews rather than a quote — e.g. same-day heating repair during snow, HVAC replacement completed in heavy rain with a clean worksite, schedule accommodated, repeat installs for an investment-property owner. Technicians Mike and Nick named as the sources describe. A "Read reviews on Google" link and a Request Service CTA close the section.

## Request-service form

Fields: Name, Phone, Email, Service Needed (AC Repair, Heating Repair, HVAC Installation, Maintenance, Commercial HVAC, Other), Message. Client-side validation with accessible inline errors and labeled inputs. On submit it shows a success state telling the visitor to call for urgent issues, with a clearly commented single place in the code where a real email/form endpoint gets wired in. No backend is added.

## SEO & accessibility

- Home title: "Universal HVAC | Heating & Air Conditioning Service in Charlotte, NC" with a Charlotte-focused meta description; every route gets its own title, description, og:title, og:description, og:type, og:url, and a self-referencing canonical.
- HVACBusiness structured data on the home route (name, telephone, address, geo-free areaServed of Charlotte metro, 24/7 openingHours, aggregateRating 4.8/17, service list) plus FAQPage data on the FAQ route.
- Semantic landmarks, single H1 per page, ordered headings, alt text on every image, visible focus rings, keyboard-operable menu and accordion, contrast-checked pairs.
- `public/robots.txt` and `public/sitemap.xml` updated with the real routes.

## Technical notes

TanStack Start with file-based routes under `src/routes/`. Shared UI split into components: `SiteHeader`, `MobileCallBar`, `Footer`, `Hero`, `ServiceCard`, `Accordion`, `RequestServiceForm`, `SectionReveal`. Design tokens only — no hardcoded colors. Images generated at target resolution, `loading="lazy"` and explicit dimensions below the fold, hero image eager with fixed aspect ratio to avoid layout shift. No new heavy dependencies.
