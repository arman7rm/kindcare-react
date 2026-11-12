import { Link } from "react-router-dom";
import { ButtonLink, CtaBand, PageHero, Section } from "./ui";
import { CONTACT, COUNTIES, NOT_OFFERED, SERVICES } from "../content/site";

/** "a, b and c" */
const listJoin = (items: string[]) =>
  items.length > 1
    ? `${items.slice(0, -1).join(", ")} and ${items[items.length - 1]}`
    : items.join("");

const faqs: { group: string; items: { q: string; a: React.ReactNode }[] }[] = [
  {
    group: "For families",
    items: [
      {
        q: "Who does KindCare serve?",
        a: "Adults 21 and older who are eligible for New Jersey Division of Developmental Disabilities (DDD) services and enrolled in the Supports Program or the Community Care Program. We don't serve people under 21.",
      },
      {
        q: "What services do you provide?",
        a: (
          <>
            {listJoin(SERVICES.map((s) => s.title))}. See{" "}
            <Link to="/services" className="text-fg underline underline-offset-2">
              our services
            </Link>{" "}
            for details on each one and which program it's offered under.
          </>
        ),
      },
      {
        q: "Which counties do you serve?",
        a: `${listJoin(COUNTIES)} counties.`,
      },
      {
        q: "How do I choose KindCare as my provider?",
        a: "Tell your Support Coordinator you'd like to work with KindCare. Your Support Coordinator selects the provider and lets us know. You can also request a call back and we'll help you through the process.",
      },
      {
        q: "How long does it take to start?",
        a: "We contact the individual and/or Support Coordinator within 5 working days of being selected. When services begin depends on authorization in the ISP and matching the person with the right DSP; we'll keep you updated throughout.",
      },
      {
        q: "Is there anything you don't provide?",
        a: `Yes. KindCare doesn't currently offer: ${NOT_OFFERED.join("; ").toLowerCase()}. Your Support Coordinator can help find a provider for these.`,
      },
    ],
  },
  {
    group: "For Support Coordinators",
    items: [
      {
        q: "How do I make a referral?",
        a: (
          <>
            Call us at {CONTACT.phone} or email{" "}
            <a href={CONTACT.referralHref} className="text-fg underline underline-offset-2">
              {CONTACT.email}
            </a>{" "}
            with your contact details and the person's county. We'll follow up
            within 5 working days and arrange a secure way to share documents.
          </>
        ),
      },
      {
        q: "What documents will you need?",
        a: "The person's ISP (Individualized Service Plan), PCPT (Person-Centered Planning Tool) and NJ CAT tier, plus their BSP (Behavior Support Plan) if they have one.",
      },
      {
        q: "How are your DSPs screened and trained?",
        a: "Every DSP completes a criminal background check, a Central Registry check and drug testing, and is trained on Danielle's Law, Stephen Komninos' Law, incident reporting and CPR/First Aid, plus medication training where required.",
      },
    ],
  },
];

const FAQComponent = () => {
  return (
    <>
      <PageHero
        eyebrow="FAQ"
        title="Questions families and Support Coordinators ask us"
        intro="Can't find what you're looking for? Our team is happy to help."
      />

      {faqs.map((g) => (
        <Section key={g.group}>
          <div className="grid gap-10 lg:grid-cols-12">
            <h2 className="text-[clamp(26px,2.6vw,38px)] leading-[1.15] text-fg lg:col-span-4">
              {g.group}
            </h2>
            <div className="border-t border-fg/10 lg:col-span-7 lg:col-start-6">
              {g.items.map((item) => (
                <details key={item.q} className="group border-b border-fg/10">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5 text-lg text-fg [&::-webkit-details-marker]:hidden">
                    {item.q}
                    <span
                      className="grid size-8 shrink-0 place-items-center rounded-full border border-fg/15 text-muted transition-transform group-open:rotate-45"
                      aria-hidden="true"
                    >
                      +
                    </span>
                  </summary>
                  <div className="pb-6 leading-relaxed text-muted">{item.a}</div>
                </details>
              ))}
            </div>
          </div>
        </Section>
      ))}

      <CtaBand
        title="Still have questions?"
        body={`Call us at ${CONTACT.phone}, ${CONTACT.hours}, or send us an email.`}
      >
        <ButtonLink href={CONTACT.phoneHref} variant="accent">
          Call {CONTACT.phone}
        </ButtonLink>
        <ButtonLink href={CONTACT.emailHref} variant="outline-light">
          Email us
        </ButtonLink>
      </CtaBand>
    </>
  );
};

export default FAQComponent;
