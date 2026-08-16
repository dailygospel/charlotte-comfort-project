import { Link } from "@tanstack/react-router";

export function Logo({ tone = "light" }: { tone?: "light" | "dark" }) {
  const isDark = tone === "dark";
  return (
    <Link
      to="/"
      className="group flex items-center gap-2.5"
      aria-label="Universal HVAC — home"
    >
      <span
        aria-hidden="true"
        className={`flex h-10 w-10 shrink-0 flex-col justify-center gap-[3px] rounded-sm px-2 ${
          isDark ? "bg-primary-foreground/10" : "bg-primary"
        }`}
      >
        <span className="block h-[2px] w-full rounded-full bg-accent" />
        <span className="block h-[2px] w-4/5 rounded-full bg-primary-foreground/70" />
        <span className="block h-[2px] w-3/5 rounded-full bg-primary-foreground/40" />
      </span>
      <span className="leading-none">
        <span
          className={`block font-display text-[1.35rem] font-700 uppercase tracking-[0.06em] ${
            isDark ? "text-primary-foreground" : "text-primary"
          }`}
          style={{ fontWeight: 700 }}
        >
          Universal HVAC
        </span>
        <span
          className={`block text-[0.6875rem] font-semibold uppercase tracking-[0.18em] ${
            isDark ? "text-primary-foreground/65" : "text-muted-foreground"
          }`}
        >
          Heating &amp; Air · Charlotte, NC
        </span>
      </span>
    </Link>
  );
}
