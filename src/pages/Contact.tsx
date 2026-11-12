import React from "react";
import PatientForm from "../components/PatientForm";
import { ButtonLink, PageHero } from "../components/ui";
import { CONTACT } from "../content/site";

const details = [
  {
    label: "Phone",
    value: (
      <a href={CONTACT.phoneHref} className="hover:text-leaf">
        {CONTACT.phone}
      </a>
    ),
  },
  {
    label: "Email",
    value: (
      <a href={CONTACT.emailHref} className="hover:text-leaf">
        {CONTACT.email}
      </a>
    ),
  },
  { label: "Office", value: CONTACT.address },
  { label: "Hours", value: CONTACT.hours },
];

const Contact: React.FC = () => {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={
          <>
            Talk to our <span className="text-leaf">team</span>
          </>
        }
        intro="Families can request a call back below. Support Coordinators and case managers can call or email us to make a referral."
      >
        <dl className="border-fg/10 mt-12 border-t">
          {details.map((d) => (
            <div
              key={d.label}
              className="border-fg/10 grid grid-cols-[6rem_1fr] gap-4 border-b py-4"
            >
              <dt className="text-muted text-sm">{d.label}</dt>
              <dd className="text-fg">{d.value}</dd>
            </div>
          ))}
        </dl>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <ButtonLink href={CONTACT.phoneHref}>Call {CONTACT.phone}</ButtonLink>
          <ButtonLink href={CONTACT.referralHref} variant="outline">
            Email a referral
          </ButtonLink>
        </div>
      </PageHero>

      <PatientForm />
    </>
  );
};

export default Contact;
