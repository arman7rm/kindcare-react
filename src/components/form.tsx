import type { InputHTMLAttributes, ReactNode } from "react";

export const inputClass =
  "w-full rounded-xl border border-fg/15 bg-bg px-4 py-3 text-fg transition-colors outline-none placeholder:text-muted/60 focus:border-leaf focus:ring-2 focus:ring-mint/40 disabled:opacity-60";
export const labelClass = "mb-2 block text-sm font-medium text-fg";

export const Field = ({
  label,
  name,
  ...input
}: { label: string; name: string } & InputHTMLAttributes<HTMLInputElement>) => (
  <div>
    <label htmlFor={name} className={labelClass}>
      {label}
    </label>
    <input id={name} name={name} className={inputClass} {...input} />
  </div>
);

/** Pill-style checkbox group. `name` repeats so values arrive as a list. */
export const CheckboxGroup = ({
  legend,
  hint,
  name,
  options,
}: {
  legend: string;
  hint?: string;
  name: string;
  options: string[];
}) => (
  <fieldset>
    <legend className={labelClass}>{legend}</legend>
    {hint && <p className="text-muted -mt-1 mb-3 text-xs">{hint}</p>}
    <div className="flex flex-wrap gap-2">
      {options.map((o) => (
        <label key={o} className="cursor-pointer">
          <input
            type="checkbox"
            name={name}
            value={o}
            className="peer sr-only"
          />
          <span className="border-fg/15 bg-bg text-fg/80 peer-checked:border-leaf peer-checked:bg-leaf peer-checked:text-bg peer-focus-visible:ring-mint/60 hover:border-fg/40 block rounded-full border px-3.5 py-1.5 text-sm transition-colors peer-focus-visible:ring-2">
            {o}
          </span>
        </label>
      ))}
    </div>
  </fieldset>
);

export const SubmitButton = ({
  submitting,
  children,
}: {
  submitting: boolean;
  children: ReactNode;
}) => (
  <button
    type="submit"
    disabled={submitting}
    className="bg-fg text-bg hover:bg-leaf focus-visible:outline-leaf w-full rounded-full py-3.5 text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
  >
    {submitting ? "Submitting…" : children}
  </button>
);

export const FormStatus = ({
  message,
  isError,
}: {
  message: string;
  isError: boolean;
}) =>
  message ? (
    <p
      role="status"
      className={`text-center text-sm ${isError ? "text-red-700" : "text-leaf"}`}
    >
      {message}
    </p>
  ) : null;
