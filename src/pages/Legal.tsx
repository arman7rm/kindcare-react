import React from "react";
import { PageHero, Section } from "../components/ui";
import { COMPLIANCE, CONTACT } from "../content/site";

const LegalBlock = ({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) => (
  <Section id={id} className="scroll-mt-20">
    <div className="grid gap-10 lg:grid-cols-12">
      <h2 className="text-fg text-[clamp(26px,2.6vw,38px)] leading-[1.15] lg:col-span-4">
        {title}
      </h2>
      <div className="text-muted [&_h3]:text-fg space-y-5 leading-relaxed lg:col-span-7 lg:col-start-6 [&_h3]:pt-2 [&_h3]:font-medium">
        {children}
      </div>
    </div>
  </Section>
);

const Legal: React.FC = () => {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Compliance, privacy and safety"
        intro={
          <>
            How KindCare Health Services meets its obligations to the people we
            support, their families and the State of New Jersey. Questions?
            Contact us at{" "}
            <a
              href={CONTACT.emailHref}
              className="text-fg underline underline-offset-2"
            >
              {CONTACT.email}
            </a>{" "}
            or {CONTACT.phone}.
          </>
        }
      />

      <LegalBlock id="compliance" title="Compliance">
        <p>
          KindCare Health Services is a provider approved by the New Jersey
          Division of Developmental Disabilities (DDD). We follow the
          requirements that apply to DDD providers in the Supports Program and
          the Community Care Program, along with applicable federal and state
          laws.
        </p>
        <p>
          If you have a concern about our services, please contact us. You can
          also raise concerns with your Support Coordinator.
        </p>
      </LegalBlock>

      <LegalBlock id="privacy-notice" title="Privacy notice">
        <h3>Information we collect</h3>
        <p>
          When you use the form on this website, we collect your name, email
          address, phone number and city and state. Please don't include medical
          or health information in the form.
        </p>
        <p>
          For people who receive services, we receive information needed to
          provide those services, such as planning documents (for example the
          ISP, PCPT, NJ CAT tier and any BSP) from the individual, their family
          or guardian, and their Support Coordinator.
        </p>
        <h3>How we use it</h3>
        <p>
          We use this information to respond to inquiries, to plan, provide and
          coordinate services, and to meet DDD and other legal requirements,
          including incident reporting. We don't sell personal information.
        </p>
        <h3>Who we share it with</h3>
        <p>
          We share information only as needed to provide services or as required
          or permitted by law, for example with the person's Support
          Coordinator, the Division of Developmental Disabilities, or service
          providers who help us operate, such as the service that processes our
          website form.
        </p>
        <h3>Your choices</h3>
        <p>
          You can ask to see or correct the information we hold about you, or
          ask us to stop contacting you, by emailing{" "}
          <a
            href={CONTACT.emailHref}
            className="text-fg underline underline-offset-2"
          >
            {CONTACT.email}
          </a>
          .
        </p>
      </LegalBlock>

      <LegalBlock id="hippa" title="HIPAA">
        <p>
          The Health Insurance Portability and Accountability Act (HIPAA) sets
          national standards for protecting health information. KindCare
          protects the health information of the people we support and uses and
          discloses it only as HIPAA allows.
        </p>
        <p>
          Under HIPAA, individuals generally have the right to see and get a
          copy of their health information, to ask for corrections, and to learn
          how their information has been shared. To make a request, contact us.
        </p>
      </LegalBlock>

      <LegalBlock id="ethics-safety" title="Ethics and safety">
        <dl className="border-fg/10 border-t">
          {COMPLIANCE.map((c) => (
            <div key={c.title} className="border-fg/10 border-b py-4">
              <dt className="text-fg font-medium">{c.title}</dt>
              <dd className="mt-1">{c.body}</dd>
            </div>
          ))}
        </dl>
      </LegalBlock>
    </>
  );
};

export default Legal;
