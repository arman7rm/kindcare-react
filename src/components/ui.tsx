import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import DotField from "./motion/DotField";

export const Container = ({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) => (
  <div className={`mx-auto max-w-7xl px-5 md:px-8 lg:px-10 ${className}`}>
    {children}
  </div>
);

export const Eyebrow = ({ children }: { children: ReactNode }) => (
  <span className="bg-surface text-fg mb-6 inline-flex items-center gap-2 rounded-md px-3 pt-2.5 pb-2 text-xs leading-none font-medium">
    {children}
  </span>
);

/** Top-of-page header used by every inner page. */
export const PageHero = ({
  eyebrow,
  title,
  intro,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  intro: ReactNode;
  children?: ReactNode;
}) => (
  <Container className="pt-8 pb-12 sm:pt-12 sm:pb-16 lg:pt-20 lg:pb-24">
    <div className="max-w-3xl" data-aos="fade-up">
      <Eyebrow>{eyebrow}</Eyebrow>
      <h1 className="text-fg text-[clamp(38px,4.8vw,68px)] leading-[1.05]">
        {title}
      </h1>
      <p className="text-muted mt-6 max-w-2xl text-lg leading-relaxed">
        {intro}
      </p>
      {children}
    </div>
  </Container>
);

/** Two-column section heading: eyebrow + title left, supporting copy right. */
export const SectionHeading = ({
  id,
  eyebrow,
  title,
  aside,
}: {
  id?: string;
  eyebrow: string;
  title: ReactNode;
  aside?: ReactNode;
}) => (
  <div className="grid gap-8 lg:grid-cols-12" data-aos="fade-up">
    <div className="lg:col-span-6">
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2
        id={id}
        className="text-fg text-[clamp(30px,3.4vw,50px)] leading-[1.1]"
      >
        {title}
      </h2>
    </div>
    {aside && (
      <div className="text-muted text-lg leading-relaxed lg:col-span-5 lg:col-start-8 lg:self-end">
        {aside}
      </div>
    )}
  </div>
);

export const Section = ({
  id,
  children,
  className = "",
}: {
  id?: string;
  children: ReactNode;
  className?: string;
}) => (
  <section id={id} className={`border-fg/10 border-t ${className}`}>
    <Container className="py-12 sm:py-20 lg:py-28">{children}</Container>
  </section>
);

const pill =
  "inline-flex items-center justify-center gap-2 rounded-full py-3.5 text-center text-sm font-medium transition-colors";

export const ButtonLink = ({
  to,
  href,
  variant = "solid",
  padding = "px-6",
  children,
}: {
  to?: string;
  href?: string;
  variant?: "solid" | "outline" | "accent" | "outline-light";
  /** Horizontal padding classes; tighter values let two buttons share a row. */
  padding?: string;
  children: ReactNode;
}) => {
  const styles = {
    solid: "bg-fg text-bg hover:bg-leaf",
    outline: "border border-fg/25 text-fg hover:border-fg",
    accent: "bg-sprout text-forest hover:bg-pale",
    "outline-light": "border border-bg/30 text-bg hover:border-bg",
  }[variant];
  const className = `${pill} ${padding} ${styles}`;
  return to ? (
    <Link to={to} className={className}>
      {children}
    </Link>
  ) : (
    <a href={href} className={className}>
      {children}
    </a>
  );
};

export const ArrowLink = ({
  to,
  children,
}: {
  to: string;
  children: ReactNode;
}) => (
  <Link
    to={to}
    className="group text-fg hover:text-leaf inline-flex items-center gap-2 text-sm font-medium"
  >
    {children}
    <span
      className="transition-transform group-hover:translate-x-0.5"
      aria-hidden="true"
    >
      →
    </span>
  </Link>
);

/** Deep-green call-to-action band. */
export const CtaBand = ({
  title,
  body,
  children,
}: {
  title: ReactNode;
  body: ReactNode;
  children: ReactNode;
}) => (
  <section className="px-5 pb-12 sm:pb-20 md:px-8 lg:px-10 lg:pb-28">
    <div
      className="bg-forest relative mx-auto max-w-7xl overflow-hidden rounded-3xl px-8 py-16 md:px-14 md:py-24"
      data-aos="fade-up"
    >
      <div className="absolute inset-y-0 right-0 w-full opacity-70 md:w-2/3">
        <DotField fadeFrom="right" />
      </div>
      <div className="relative max-w-2xl">
        <h2 className="text-bg text-[clamp(30px,3.4vw,48px)] leading-[1.1]">
          {title}
        </h2>
        <p className="text-bg/70 mt-5 text-lg leading-relaxed">{body}</p>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row">{children}</div>
      </div>
    </div>
  </section>
);

/** Bordered list rows, Reflection-style. */
export const RuleList = ({ items }: { items: ReactNode[] }) => (
  <ul className="border-fg/10 border-t">
    {items.map((item, i) => (
      <li key={i} className="border-fg/10 text-fg border-b py-4">
        {item}
      </li>
    ))}
  </ul>
);
