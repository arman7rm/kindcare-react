import React from "react";
import {
  ButtonLink,
  PageHero,
  Section,
  SectionHeading,
} from "../components/ui";
import { CONTACT } from "../content/site";
import DspApplicationForm from "../components/DspApplicationForm";

const duties = [
  "Support adults with intellectual and developmental disabilities at home and in the community",
  "Help with daily living skills, routines and community activities",
  "Follow each person's Individualized Service Plan (ISP)",
  "Document services and report incidents as required",
];

const requirements = [
  "18 years of age or older",
  "Pass a criminal background check and a Central Registry check",
  "Pass a drug test",
  "Complete Danielle's Law and Stephen Komninos' Law training",
  "Complete incident reporting training",
  "Hold current CPR and First Aid certification",
  "Complete medication training where the role requires it",
];

const Careers: React.FC = () => {
  return (
    <>
      <PageHero
        eyebrow="Careers"
        title={
          <>
            Become a{" "}
            <span className="text-leaf">Direct Support Professional</span>
          </>
        }
        intro="Direct Support Professionals (DSPs) are at the heart of what we do. Join KindCare and help adults with developmental disabilities build skills, stay connected to their communities and live the lives they choose."
      >
        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <ButtonLink to="/careers#apply">Apply now</ButtonLink>
          <ButtonLink href={CONTACT.phoneHref} variant="outline">
            Call {CONTACT.phone}
          </ButtonLink>
        </div>
      </PageHero>

      <Section>
        <SectionHeading
          eyebrow="The role"
          title="What DSPs do"
          aside="DSPs provide Community Based Supports, Individual Supports and Respite to the people we serve."
        />
        <ul className="border-fg/10 mt-16 border-t lg:mt-20">
          {duties.map((d, i) => (
            <li
              key={d}
              className="border-fg/10 text-fg grid grid-cols-[3rem_1fr] border-b py-5 text-lg"
              data-aos="fade-up"
            >
              <span className="text-muted text-sm tabular-nums">
                {String(i + 1).padStart(2, "0")}
              </span>
              {d}
            </li>
          ))}
        </ul>
      </Section>

      <Section>
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5" data-aos="fade-up">
            <span className="bg-surface text-fg mb-6 inline-flex rounded-md px-3 pt-2.5 pb-2 text-xs leading-none font-medium">
              Requirements
            </span>
            <h2 className="text-fg text-[clamp(30px,3.4vw,50px)] leading-[1.1]">
              What you'll need
            </h2>
            <p className="text-muted mt-5 text-lg leading-relaxed">
              New Jersey DDD sets screening and training requirements for
              everyone who works with the people we support. We'll guide you
              through the training you don't have yet.
            </p>
          </div>
          <ul
            className="border-fg/10 border-t lg:col-span-6 lg:col-start-7"
            data-aos="fade-up"
          >
            {requirements.map((r) => (
              <li
                key={r}
                className="border-fg/10 text-fg/85 flex gap-3 border-b py-4"
              >
                <span className="text-mint" aria-hidden="true">
                  —
                </span>
                {r}
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <DspApplicationForm />
    </>
  );
};

export default Careers;
