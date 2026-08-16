/**
 * Single source of truth for Universal HVAC business facts.
 * Every value here is taken from the company's public listings
 * (HVACService.io and Yahoo Local). Do not add unverified claims.
 */

export const company = {
  name: "Universal HVAC",
  legalName: "Universal HVAC Heating & Air",
  phone: "(980) 310-7061",
  phoneHref: "tel:+19803107061",
  altPhone: "(704) 968-7652",
  altPhoneHref: "tel:+17049687652",
  street: "4520 Brookwood Rd",
  city: "Charlotte",
  state: "NC",
  zip: "28215",
  hours: "Open 24 hours, 7 days a week",
  rating: 4.8,
  reviewCount: 17,
  googleReviewsUrl:
    "https://search.google.com/local/reviews?placeid=ChIJY2PP5Q_veaYRjfo-N11YBcA",
  tagline: "Your air is our care.",
} as const;

export const services = [
  {
    slug: "heating-repair",
    title: "Heating Repair",
    short:
      "Furnace and heat pump failures diagnosed and repaired, including same-day service when your heat goes out.",
    detail:
      "When a furnace or heat pump quits, the house gets uncomfortable fast. Universal HVAC troubleshoots the system, explains what failed, and makes the repair. Same-day service is available for heating emergencies — customers have had technicians show up during snow to get heat running again.",
  },
  {
    slug: "ac-repair",
    title: "Air Conditioning Repair",
    short:
      "Diagnostics and repair for residential cooling systems that are running warm, short cycling, or not running at all.",
    detail:
      "Charlotte summers do not forgive a failed air conditioner. We test the system, find the actual cause instead of guessing, and repair the cooling side of your equipment so the house holds temperature again.",
  },
  {
    slug: "installation",
    title: "HVAC Installation & Replacement",
    short:
      "Complete system replacement and new-construction installation for homes and light commercial buildings.",
    detail:
      "Universal HVAC installs full heating and cooling systems — replacements for aging equipment and new installs in new construction. Work is scheduled around you, and the worksite gets left clean; customers have specifically noted replacements finished in heavy rain without a mess left behind.",
  },
  {
    slug: "commercial",
    title: "Commercial HVAC",
    short:
      "Commercial heating and cooling work, including large-capacity installations up to 18-ton systems.",
    detail:
      "Beyond residential work, Universal HVAC handles commercial systems, with documented experience installing 18-ton units in new construction. If you manage a commercial building in the Charlotte area, call to discuss the equipment you have.",
  },
  {
    slug: "maintenance",
    title: "HVAC Maintenance & Tune-Ups",
    short:
      "Preventive maintenance for existing equipment so small problems get caught before they become no-heat calls.",
    detail:
      "Regular tune-ups keep an HVAC system running the way it was designed to. We check and service the equipment you already own, and tell you honestly what does and does not need attention.",
  },
  {
    slug: "investment-properties",
    title: "Investment & Rental Property Service",
    short:
      "Service and multi-unit installation support for landlords and investment property owners.",
    detail:
      "Universal HVAC has installed multiple units for repeat customers managing investment properties. If you own rentals around Charlotte and need one contractor handling the heating and cooling across them, this is work we already do.",
  },
] as const;

export const serviceOptions = [
  "AC Repair",
  "Heating Repair",
  "HVAC Installation",
  "Maintenance",
  "Commercial HVAC",
  "Other",
] as const;

export const differentiators = [
  {
    title: "Family owned and operated",
    body: "Universal HVAC is a family owned and operated company, not a franchise call center.",
  },
  {
    title: "More than two decades of experience",
    body: "Over 20 years keeping homes and businesses comfortable in and around Charlotte.",
  },
  {
    title: "Available 24 hours",
    body: "Listed hours are 24 hours a day, seven days a week — call when the problem happens.",
  },
  {
    title: "Same-day service when available",
    body: "Reviewers repeatedly mention same-day arrivals for heating and cooling failures.",
  },
  {
    title: "Fair pricing and honest assessments",
    body: "Customers consistently point to fair pricing and straight answers about what a system needs.",
  },
  {
    title: "Residential and commercial",
    body: "Homes, rentals, and commercial buildings — including larger commercial installations.",
  },
] as const;

/** Review themes documented across the company's public review profile. */
export const reviewThemes = [
  {
    heading: "Same-day heating repair in the snow",
    body: "Reviewers describe technician Mike arriving during snowy conditions to get a heating system running again the same day.",
  },
  {
    heading: "Replacement done in heavy rain, worksite left clean",
    body: "A customer describes Nick's team completing an HVAC replacement during heavy rain while keeping the worksite clean.",
  },
  {
    heading: "Worked around the customer's schedule",
    body: "One reviewer notes Nick finished the job early so she could keep plans she had already made that day.",
  },
  {
    heading: "Repeat work on investment properties",
    body: "Customers managing investment properties have had Universal HVAC install multiple units after earlier jobs went well.",
  },
] as const;

export const faqs = [
  {
    q: "What HVAC services does Universal HVAC provide?",
    a: "Heating repair, air conditioning repair, new system installation and replacement, commercial HVAC work, preventive maintenance and tune-ups, and service for rental and investment properties.",
  },
  {
    q: "Does Universal HVAC service both heating and air conditioning?",
    a: "Yes. Universal HVAC works on heating, air conditioning, and ventilation for both residential and commercial customers.",
  },
  {
    q: "Does Universal HVAC handle installations and replacements?",
    a: "Yes. The company installs complete systems, both replacements for existing equipment and new installations in new construction.",
  },
  {
    q: "Does Universal HVAC work on commercial HVAC systems?",
    a: "Yes. Commercial work includes large-capacity installations, with documented experience installing 18-ton systems. Call to confirm the company can take on your specific equipment.",
  },
  {
    q: "Does Universal HVAC offer same-day service?",
    a: "Customers report same-day service for heating and cooling failures, and listed hours are 24 hours a day. Availability depends on the day and the job, so call (980) 310-7061 to confirm for your situation.",
  },
  {
    q: "Does Universal HVAC service investment or rental properties?",
    a: "Yes. The company has handled service and multi-unit installations for customers who own rental and investment properties.",
  },
  {
    q: "What areas does Universal HVAC serve?",
    a: "Charlotte, North Carolina and the surrounding Charlotte metro area.",
  },
  {
    q: "How do I contact Universal HVAC?",
    a: "Call (980) 310-7061, or send a request through the form on this site and the company will follow up. For anything urgent, calling is faster.",
  },
] as const;

export const serviceAreas = [
  "Charlotte",
  "East Charlotte",
  "Uptown & South End",
  "University City",
  "Matthews",
  "Mint Hill",
  "Pineville",
  "Huntersville",
  "Concord",
  "Harrisburg",
] as const;
