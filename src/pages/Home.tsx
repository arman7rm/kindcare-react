import PatientForm from "../components/PatientForm";
import Hero from "../components/Hero";
import { ServicesSection } from "../components/ServiceList";
import HowToStart from "../components/HowToStart";
import { ButtonLink, CtaBand } from "../components/ui";
import { CONTACT } from "../content/site";

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <ServicesSection />
      <HowToStart />
      <CtaBand
        title="Support Coordinators: refer a client"
        body="Call our team or email us to start a referral. We'll follow up within 5 working days and arrange a secure way to share planning documents."
      >
        <ButtonLink href={CONTACT.referralHref} variant="accent">
          Email a referral
        </ButtonLink>
        <ButtonLink href={CONTACT.phoneHref} variant="outline-light">
          Call {CONTACT.phone}
        </ButtonLink>
      </CtaBand>
      <PatientForm />
    </>
  );
};

export default Home;
