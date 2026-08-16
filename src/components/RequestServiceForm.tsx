import { useState } from "react";
import { CheckCircle2 } from "lucide-react";
import { company, serviceOptions } from "@/lib/company";

type Errors = Partial<Record<"name" | "phone" | "email" | "service", string>>;

/**
 * Front-end only request form.
 *
 * DEVELOPER NOTE: to deliver these submissions, replace the body of
 * `submitRequest` below with a POST to your email/form service
 * (for example a form endpoint, CRM webhook, or a server function that
 * sends the email). Nothing else in this component needs to change.
 */
async function submitRequest(payload: Record<string, string>) {
  // eslint-disable-next-line no-console
  console.info("[Universal HVAC] service request ready to send:", payload);
  await new Promise((r) => setTimeout(r, 400));
}

export function RequestServiceForm() {
  const [errors, setErrors] = useState<Errors>({});
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  if (sent) {
    return (
      <div
        role="status"
        className="rounded-sm border border-border bg-card p-8 text-center shadow-panel"
      >
        <CheckCircle2
          className="mx-auto h-10 w-10 text-secondary"
          aria-hidden="true"
          strokeWidth={2}
        />
        <h3 className="mt-4 text-2xl">Request received</h3>
        <p className="mt-2 text-muted-foreground">
          Thanks — your request has been recorded. If your heating or cooling is out right
          now, calling is the fastest way to reach us.
        </p>
        <a
          href={company.phoneHref}
          className="mt-5 inline-flex items-center justify-center rounded-sm bg-accent px-6 py-3 font-semibold text-accent-foreground hover:bg-accent-strong"
        >
          Call {company.phone}
        </a>
      </div>
    );
  }

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const values = Object.fromEntries(
      [...data.entries()].map(([k, v]) => [k, String(v).trim()]),
    ) as Record<string, string>;

    const next: Errors = {};
    if (!values.name) next.name = "Please enter your name.";
    if (!values.phone || values.phone.replace(/\D/g, "").length < 10)
      next.phone = "Please enter a phone number we can reach you on.";
    if (values.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email))
      next.email = "Please enter a valid email address.";
    if (!values.service) next.service = "Please choose the service you need.";

    setErrors(next);
    if (Object.keys(next).length > 0) {
      form.querySelector<HTMLElement>(`[name="${Object.keys(next)[0]}"]`)?.focus();
      return;
    }

    setSending(true);
    try {
      await submitRequest(values);
      setSent(true);
    } finally {
      setSending(false);
    }
  };

  const field =
    "mt-1.5 w-full rounded-sm border border-input bg-background px-3.5 py-3 text-base text-foreground placeholder:text-muted-foreground/70";
  const labelCls = "block text-sm font-semibold text-foreground";

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      className="rounded-sm border border-border bg-card p-6 shadow-panel sm:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="rsf-name" className={labelCls}>
            Name
          </label>
          <input
            id="rsf-name"
            name="name"
            autoComplete="name"
            className={field}
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? "rsf-name-err" : undefined}
            placeholder="Jane Miller"
          />
          {errors.name && (
            <p id="rsf-name-err" className="mt-1 text-sm text-destructive">
              {errors.name}
            </p>
          )}
        </div>
        <div>
          <label htmlFor="rsf-phone" className={labelCls}>
            Phone
          </label>
          <input
            id="rsf-phone"
            name="phone"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            className={field}
            aria-invalid={!!errors.phone}
            aria-describedby={errors.phone ? "rsf-phone-err" : undefined}
            placeholder="(704) 555-0134"
          />
          {errors.phone && (
            <p id="rsf-phone-err" className="mt-1 text-sm text-destructive">
              {errors.phone}
            </p>
          )}
        </div>
        <div>
          <label htmlFor="rsf-email" className={labelCls}>
            Email <span className="font-normal text-muted-foreground">(optional)</span>
          </label>
          <input
            id="rsf-email"
            name="email"
            type="email"
            autoComplete="email"
            className={field}
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "rsf-email-err" : undefined}
            placeholder="you@example.com"
          />
          {errors.email && (
            <p id="rsf-email-err" className="mt-1 text-sm text-destructive">
              {errors.email}
            </p>
          )}
        </div>
        <div>
          <label htmlFor="rsf-service" className={labelCls}>
            Service needed
          </label>
          <select
            id="rsf-service"
            name="service"
            defaultValue=""
            className={field}
            aria-invalid={!!errors.service}
            aria-describedby={errors.service ? "rsf-service-err" : undefined}
          >
            <option value="" disabled>
              Select a service
            </option>
            {serviceOptions.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
          {errors.service && (
            <p id="rsf-service-err" className="mt-1 text-sm text-destructive">
              {errors.service}
            </p>
          )}
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="rsf-message" className={labelCls}>
            What&apos;s going on?{" "}
            <span className="font-normal text-muted-foreground">(optional)</span>
          </label>
          <textarea
            id="rsf-message"
            name="message"
            rows={4}
            className={field}
            placeholder="Upstairs unit is blowing warm air, thermostat set to 72."
          />
        </div>
      </div>

      <button
        type="submit"
        disabled={sending}
        className="mt-6 inline-flex min-h-13 w-full items-center justify-center rounded-sm bg-accent px-6 py-3.5 text-lg font-semibold text-accent-foreground transition-colors hover:bg-accent-strong disabled:opacity-70 sm:w-auto"
      >
        {sending ? "Sending…" : "Request Service"}
      </button>
      <p className="mt-3 text-sm text-muted-foreground">
        Need help right now? Call{" "}
        <a href={company.phoneHref} className="font-semibold text-secondary underline">
          {company.phone}
        </a>
        .
      </p>
    </form>
  );
}
