import { Phone } from "lucide-react";
import { company } from "@/lib/company";

export function CallButton({
  className = "",
  label,
  size = "md",
}: {
  className?: string;
  label?: string;
  size?: "sm" | "md" | "lg";
}) {
  const pad =
    size === "lg"
      ? "px-7 py-4 text-lg"
      : size === "sm"
        ? "px-4 py-2 text-sm"
        : "px-5 py-3 text-base";
  return (
    <a
      href={company.phoneHref}
      className={`inline-flex items-center justify-center gap-2.5 rounded-sm bg-accent font-semibold text-accent-foreground shadow-panel transition-colors hover:bg-accent-strong ${pad} ${className}`}
    >
      <Phone className="h-[1.1em] w-[1.1em]" aria-hidden="true" strokeWidth={2.4} />
      <span>{label ?? `Call ${company.phone}`}</span>
    </a>
  );
}
