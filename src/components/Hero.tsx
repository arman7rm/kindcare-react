import type { CSSProperties, ReactNode } from "react";
import { Link } from "react-router-dom";
import { ButtonLink, Container, Eyebrow } from "./ui";
import CircleOfSupport from "./motion/CircleOfSupport";
import Marquee from "./motion/Marquee";
import { COUNTIES } from "../content/site";

const Rise = ({ delay, children }: { delay: number; children: ReactNode }) => (
  <div
    className="motion-rise-in"
    style={{ "--delay": `${delay}s` } as CSSProperties}
  >
    {children}
  </div>
);

const facts = [
  { value: "Adults 21+", note: "eligible for New Jersey DDD services" },
  {
    value: "2 programs",
    note: "Supports Program and Community Care Program",
  },
  { value: "5 working days", note: "to hear from us once you choose KindCare" },
  {
    value: "11 counties",
    note: (
      <Link
        to="/services#service-area"
        className="decoration-fg/20 hover:text-fg hover:decoration-fg underline underline-offset-4"
      >
        See where we work
      </Link>
    ),
  },
];

const Hero = () => {
  return (
    <>
      <Container className="pt-12 pb-16 lg:pt-16 lg:pb-20">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-6">
            <Rise delay={0.1}>
              <Eyebrow>
                <span
                  className="bg-mint size-1.5 rounded-full"
                  aria-hidden="true"
                />
                New Jersey DDD-approved provider
              </Eyebrow>
            </Rise>
            <Rise delay={0.2}>
              <h1 className="text-fg text-[clamp(40px,5vw,74px)] leading-[1.04]">
                Everyday support for adults with{" "}
                <span className="text-leaf">developmental disabilities</span>
              </h1>
            </Rise>
            <Rise delay={0.35}>
              <p className="text-muted mt-6 max-w-xl text-lg leading-relaxed">
                KindCare Health Services provides Community Based Supports,
                Individual Supports and Respite for adults with intellectual and
                developmental disabilities, at home and in the community.
              </p>
            </Rise>
            <Rise delay={0.5}>
              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <ButtonLink to="/#patientform">
                  Families: get started
                </ButtonLink>
                <ButtonLink to="/services#referrals" variant="outline">
                  Refer a client <span aria-hidden="true">→</span>
                </ButtonLink>
              </div>
            </Rise>
          </div>

          <div className="px-12 sm:px-16 lg:col-span-6 lg:px-0">
            <CircleOfSupport />
          </div>
        </div>
      </Container>

      <Container>
        <dl className="border-fg/10 grid border-t sm:grid-cols-2 lg:grid-cols-4">
          {facts.map((f, i) => (
            <div
              key={f.value}
              className={`motion-rise-in border-fg/10 border-b py-6 sm:pr-6 lg:border-b-0 ${
                i % 2 ? "sm:pl-6" : ""
              } ${i > 0 ? "lg:border-l lg:pl-6" : ""}`}
              style={{ "--delay": `${0.7 + i * 0.08}s` } as CSSProperties}
            >
              <dt className="text-fg font-serif text-3xl font-light tracking-[-0.03em]">
                {f.value}
              </dt>
              <dd className="text-muted mt-2 text-sm leading-relaxed">
                {f.note}
              </dd>
            </div>
          ))}
        </dl>
      </Container>

      <div className="border-fg/10 mt-6 border-t py-6 lg:mt-10">
        <Marquee
          label={`Serving ${COUNTIES.join(", ")} counties in New Jersey.`}
          items={COUNTIES.map((c) => (
            <span className="text-fg/70 font-serif text-2xl font-light tracking-[-0.02em] whitespace-nowrap">
              {c} County
            </span>
          ))}
        />
      </div>
    </>
  );
};

export default Hero;
