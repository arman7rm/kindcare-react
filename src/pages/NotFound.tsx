import { ButtonLink, PageHero } from "../components/ui";

const NotFound: React.FC = () => (
  <PageHero
    eyebrow="Page not found"
    title="We couldn't find that page"
    intro="The link may be out of date, or the address may have a typo. These pages can help you find what you need."
  >
    <div className="mt-10 flex flex-col gap-3 sm:flex-row">
      <ButtonLink to="/">Go to the homepage</ButtonLink>
      <ButtonLink to="/services" variant="outline">
        Our services
      </ButtonLink>
      <ButtonLink to="/contact" variant="outline">
        Contact us
      </ButtonLink>
    </div>
  </PageHero>
);

export default NotFound;
