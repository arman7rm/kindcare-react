import React from "react";
import {
  ButtonLink,
  CtaBand,
  PageHero,
  Section,
  SectionHeading,
} from "../components/ui";
import { COMPLIANCE, CONTACT } from "../content/site";

const values = [
  {
    title: "Person-centered",
    body: "Support follows each person's goals, preferences and routines, as set out in their Individualized Service Plan.",
  },
  {
    title: "Consistent",
    body: "We aim to match each person with a steady Direct Support Professional, so support is built on trust and familiarity.",
  },
  {
    title: "Safe",
    body: "Every DSP is screened and trained to New Jersey DDD requirements before working with anyone we support.",
  },
  {
    title: "Collaborative",
    body: "We work closely with families, guardians and Support Coordinators, and keep them informed.",
  },
];

const AboutUs: React.FC = () => {
  return (
    <>
      <PageHero
        eyebrow="About KindCare"
        title={
          <>
            Helping adults live full lives,{" "}
            <span className="text-leaf">at home and in their community</span>
          </>
        }
        intro="KindCare Health Services is a Jersey City-based provider approved by the New Jersey Division of Developmental Disabilities. We support adults with intellectual and developmental disabilities through Community Based Supports, Individual Supports and Respite."
      />

      <Section id="mission" className="scroll-mt-20">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5" data-aos="fade-up">
            <span className="bg-surface text-fg mb-6 inline-flex rounded-md px-3 pt-2.5 pb-2 text-xs leading-none font-medium">
              Our mission
            </span>
            <h2 className="text-fg text-[clamp(30px,3.4vw,50px)] leading-[1.1]">
              Support that respects the person
            </h2>
          </div>
          <div
            className="text-muted space-y-5 text-lg leading-relaxed lg:col-span-6 lg:col-start-7"
            data-aos="fade-up"
          >
            <p>
              Our mission is to help adults with intellectual and developmental
              disabilities build skills, take part in their communities and live
              the lives they choose, with dependable support from people who
              know them.
            </p>
            <p>
              We also support the families who care for them, through Respite
              and by keeping families and Support Coordinators involved at every
              step.
            </p>
          </div>
        </div>
      </Section>

      <Section id="whykindcare" className="scroll-mt-20">
        <SectionHeading
          eyebrow="Why KindCare"
          title="What families can expect"
        />
        <div className="border-fg/10 bg-fg/10 mt-10 grid gap-px overflow-hidden rounded-3xl border sm:mt-16 sm:grid-cols-2 lg:mt-20 lg:grid-cols-4">
          {values.map((v) => (
            <div key={v.title} className="bg-bg p-8" data-aos="fade-up">
              <h3 className="text-fg font-serif text-2xl font-light tracking-[-0.02em]">
                {v.title}
              </h3>
              <p className="text-muted mt-3 leading-relaxed">{v.body}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section id="compliance" className="scroll-mt-20">
        <SectionHeading
          eyebrow="Compliance & ethics"
          title="How we keep people safe"
          aside={
            <>
              Questions or concerns about our services? Contact us at{" "}
              <a
                href={CONTACT.emailHref}
                className="text-fg underline underline-offset-2"
              >
                {CONTACT.email}
              </a>{" "}
              or {CONTACT.phone}. You can also speak with your Support
              Coordinator.
            </>
          }
        />
        <dl className="border-fg/10 mt-10 border-t sm:mt-16 lg:mt-20">
          {COMPLIANCE.map((c) => (
            <div
              key={c.title}
              className="border-fg/10 grid gap-2 border-b py-6 lg:grid-cols-12 lg:gap-10"
              data-aos="fade-up"
            >
              <dt className="text-fg font-medium lg:col-span-4">{c.title}</dt>
              <dd className="text-muted leading-relaxed lg:col-span-7 lg:col-start-6">
                {c.body}
              </dd>
            </div>
          ))}
        </dl>
      </Section>

      <CtaBand
        title="Ready to talk?"
        body="Families can request a call back, and Support Coordinators can send a referral. Either way, we'll follow up within 5 working days."
      >
        <ButtonLink to="/#patientform" variant="accent">
          Families: get started
        </ButtonLink>
        <ButtonLink to="/services#referrals" variant="outline-light">
          Refer a client
        </ButtonLink>
      </CtaBand>
    </>
  );
};

export default AboutUs;
