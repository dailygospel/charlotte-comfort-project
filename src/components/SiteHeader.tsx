import { Link } from "@tanstack/react-router";
import { Menu, X, Phone } from "lucide-react";
import { useEffect, useState } from "react";
import { company } from "@/lib/company";
import { Logo } from "./Logo";

const nav = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/about", label: "About" },
  { to: "/reviews", label: "Reviews" },
  { to: "/faq", label: "FAQ" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur">
      <div
        className={`mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 transition-[padding] duration-300 sm:px-6 ${
          scrolled ? "py-2" : "py-3.5"
        }`}
      >
        <Logo />

        <nav aria-label="Main" className="hidden items-center gap-1 lg:flex">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.to === "/" }}
              activeProps={{ className: "text-secondary" }}
              className="rounded-sm px-3 py-2 text-[0.95rem] font-semibold text-foreground/80 transition-colors hover:text-secondary"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={company.phoneHref}
            className="hidden items-center gap-2.5 rounded-sm bg-accent px-4 py-2.5 font-semibold text-accent-foreground transition-colors hover:bg-accent-strong sm:inline-flex"
          >
            <Phone className="h-4 w-4" aria-hidden="true" strokeWidth={2.4} />
            <span className="leading-tight">
              <span className="block text-[0.65rem] font-semibold uppercase tracking-[0.14em] opacity-85">
                Call Now
              </span>
              <span className="block text-[1.02rem]">{company.phone}</span>
            </span>
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            className="inline-flex h-11 w-11 items-center justify-center rounded-sm border border-border-strong text-primary lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <nav
          id="mobile-nav"
          aria-label="Mobile"
          className="border-t border-border bg-background lg:hidden"
        >
          <ul className="mx-auto max-w-7xl px-4 py-2 sm:px-6">
            {nav.map((item) => (
              <li key={item.to} className="border-b border-border last:border-0">
                <Link
                  to={item.to}
                  activeOptions={{ exact: item.to === "/" }}
                  activeProps={{ className: "text-secondary" }}
                  onClick={() => setOpen(false)}
                  className="block py-3.5 text-lg font-semibold text-foreground"
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li className="py-3">
              <a
                href={company.phoneHref}
                className="flex min-h-12 items-center justify-center gap-2 rounded-sm bg-accent px-4 font-semibold text-accent-foreground"
              >
                <Phone className="h-5 w-5" aria-hidden="true" strokeWidth={2.4} />
                Call {company.phone}
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
