import { Link } from "@tanstack/react-router";
import { Phone, MapPin, Clock } from "lucide-react";
import { company, services } from "@/lib/company";
import { Logo } from "./Logo";

export function SiteFooter() {
  return (
    <footer className="bg-navy-deep pb-24 pt-14 text-primary-foreground/75 md:pb-14">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-4">
        <div className="lg:col-span-2">
          <Logo tone="dark" />
          <p className="mt-4 max-w-sm text-[0.98rem]">
            Heating and air conditioning service for homes and businesses in Charlotte,
            North Carolina and the surrounding area. Family owned and operated.
          </p>
          <dl className="mt-6 space-y-2.5 text-[0.98rem]">
            <div className="flex items-start gap-3">
              <dt className="mt-0.5">
                <Phone className="h-4.5 w-4.5 text-accent" aria-hidden="true" />
                <span className="sr-only">Phone</span>
              </dt>
              <dd>
                <a
                  href={company.phoneHref}
                  className="text-lg font-semibold text-primary-foreground hover:text-accent"
                >
                  {company.phone}
                </a>
                <span className="block text-sm">
                  Also listed:{" "}
                  <a href={company.altPhoneHref} className="hover:text-accent">
                    {company.altPhone}
                  </a>
                </span>
              </dd>
            </div>
            <div className="flex items-start gap-3">
              <dt className="mt-0.5">
                <MapPin className="h-4.5 w-4.5 text-accent" aria-hidden="true" />
                <span className="sr-only">Address</span>
              </dt>
              <dd>
                {company.street}, {company.city}, {company.state} {company.zip}
              </dd>
            </div>
            <div className="flex items-start gap-3">
              <dt className="mt-0.5">
                <Clock className="h-4.5 w-4.5 text-accent" aria-hidden="true" />
                <span className="sr-only">Hours</span>
              </dt>
              <dd>{company.hours}</dd>
            </div>
          </dl>
        </div>

        <nav aria-label="Footer pages">
          <h2 className="eyebrow text-primary-foreground">Company</h2>
          <ul className="mt-4 space-y-2.5 text-[0.98rem]">
            <li>
              <Link to="/" className="hover:text-accent">
                Home
              </Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-accent">
                Services
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-accent">
                About
              </Link>
            </li>
            <li>
              <Link to="/reviews" className="hover:text-accent">
                Reviews
              </Link>
            </li>
            <li>
              <Link to="/faq" className="hover:text-accent">
                FAQ
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-accent">
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        <nav aria-label="Footer services">
          <h2 className="eyebrow text-primary-foreground">Services</h2>
          <ul className="mt-4 space-y-2.5 text-[0.98rem]">
            {services.map((s) => (
              <li key={s.slug}>
                <Link
                  to="/services"
                  hash={s.slug}
                  className="hover:text-accent"
                >
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="mx-auto mt-12 max-w-7xl border-t border-primary-foreground/15 px-4 pt-6 text-sm sm:px-6">
        <p>
          © {new Date().getFullYear()} {company.legalName}. Serving Charlotte, NC and the
          surrounding area.
        </p>
      </div>
    </footer>
  );
}
