import ServiceList from "../components/ServiceList";
import HowToStart from "../components/HowToStart";
import {
  ButtonLink,
  CtaBand,
  PageHero,
  Section,
  SectionHeading,
} from "../components/ui";
import { CONTACT, COUNTIES, NOT_OFFERED } from "../content/site";

const Services: React.FC = () => {
  return (
    <>
      <PageHero
        eyebrow="Our services"
        title={
          <>
            Services for adults with{" "}
            <span className="text-leaf">intellectual and developmental
            disabilities</span>
          </>
        }
        intro="KindCare Health Services is approved by the New Jersey Division of Developmental Disabilities (DDD) to provide the services below through the Supports Program and the Community Care Program."
      >
        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <ButtonLink to="/#patientform">Families: get started</ButtonLink>
          <ButtonLink to="/services#referrals" variant="outline">
            Refer a client <span aria-hidden="true">→</span>
          </ButtonLink>
        </div>
      </PageHero>

      <Section>
        <SectionHeading
          eyebrow="DDD-approved services"
          title="What we provide"
          aside="Every service follows the person's Individualized Service Plan (ISP) and is delivered by a trained Direct Support Professional (DSP)."
        />
        <ServiceList detailed />
      </Section>

      <Section id="service-area" className="scroll-mt-20">
        <SectionHeading
          eyebrow="Who we serve"
          title="Adults 21 and older, in 11 New Jersey counties"
          aside="We serve adults who are eligible for New Jersey DDD services and enrolled in the Supports Program or the Community Care Program. We don't serve people under 21."
        />
        <ul className="mt-16 grid grid-cols-2 border-t border-l border-fg/10 sm:grid-cols-3 lg:mt-20 lg:grid-cols-4">
          {COUNTIES.map((c) => (
            <li
              key={c}
              className="border-r border-b border-fg/10 px-5 py-6 font-serif text-xl font-light tracking-[-0.02em] text-fg"
            >
              {c} <span className="font-sans text-sm text-muted">County</span>
            </li>
          ))}
        </ul>
      </Section>

      <HowToStart showDocuments />

      <Section>
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5" data-aos="fade-up">
            <h2 className="text-[clamp(28px,3vw,42px)] leading-[1.1] text-fg">
              What we don't provide
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-muted">
              To make sure people get the right support, here's what KindCare
              doesn't currently offer. A Support Coordinator can help find a
              provider for these.
            </p>
          </div>
          <ul className="border-t border-fg/10 lg:col-span-6 lg:col-start-7" data-aos="fade-up">
            {NOT_OFFERED.map((item) => (
              <li
                key={item}
                className="flex gap-3 border-b border-fg/10 py-4 text-fg/85"
              >
                <span className="text-muted" aria-hidden="true">
                  ×
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <div id="referrals" className="scroll-mt-24">
        <CtaBand
          title="Support Coordinators and case managers"
          body="To refer someone, call our team or email us your contact details and the person's county. We'll follow up within 5 working days and arrange a secure way to share planning documents. Please don't email health information."
        >
          <ButtonLink href={CONTACT.referralHref} variant="accent">
            Email a referral
          </ButtonLink>
          <ButtonLink href={CONTACT.phoneHref} variant="outline-light">
            Call {CONTACT.phone}
          </ButtonLink>
        </CtaBand>
      </div>
    </>
  );
};

export default Services;
