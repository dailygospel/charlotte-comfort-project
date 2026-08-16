import { Link } from "@tanstack/react-router";
import { Phone, CalendarCheck } from "lucide-react";
import { company } from "@/lib/company";

/** Sticky bottom action bar shown on phones only. */
export function MobileCallBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-2 border-t border-navy-deep/30 bg-navy-deep/95 backdrop-blur md:hidden">
      <a
        href={company.phoneHref}
        className="flex min-h-14 items-center justify-center gap-2 bg-accent px-3 text-base font-semibold text-accent-foreground"
      >
        <Phone className="h-5 w-5" aria-hidden="true" strokeWidth={2.4} />
        Call Now
      </a>
      <Link
        to="/contact"
        className="flex min-h-14 items-center justify-center gap-2 px-3 text-base font-semibold text-primary-foreground"
      >
        <CalendarCheck className="h-5 w-5" aria-hidden="true" strokeWidth={2.2} />
        Request Service
      </Link>
    </div>
  );
}
