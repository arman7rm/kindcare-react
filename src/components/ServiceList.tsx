import Card from "./Card";
import hospiceImage from "../assets/hospice.png";
import palliativeImage from "../assets/Palliative.png";
import homeCareImage from "../assets/home.png";

const ServiceList = () => {
  return (
    <section className="bg-[var(--lightgreen)] px-4 py-12 sm:px-8 md:py-24">
      <h3
        data-aos="fade-down"
        data-aos-delay="200"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        data-aos-once="true"
        className="mb-2 text-center text-xl text-[var(--white)] sm:text-2xl md:text-3xl lg:text-3xl"
      >
        What We Offer
      </h3>

      <h2
        data-aos="fade-down"
        data-aos-delay="200"
        data-aos-duration="1000"
        data-aos-once="true"
        data-aos-easing="ease-in-out"
        className="mb-8 text-center text-3xl font-light text-[var(--primary)] sm:mb-16 sm:text-4xl md:text-5xl lg:text-6xl"
      >
        Our Services
      </h2>
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card
          imageSrc={hospiceImage}
          title="Hospice Care"
          description="When a loved one faces a life-limiting illness, our team offers compassionate care and comfort—bringing peace, dignity, and support to every moment."
          buttonText="Learn More"
          buttonLink="/services#hospice"
          fadeDirection="fade-right"
        />
        <Card
          imageSrc={palliativeImage}
          title="Palliative Care"
          description="Whether you're healing from surgery or managing a chronic condition, our skilled nurses and therapists provide personalized care—right at home—so you can focus on what matters most: feeling your best."
          buttonText="Learn More"
          buttonLink="/services#palliative"
          fadeDirection="fade-up"
        />
        <Card
          imageSrc={homeCareImage}
          title="Home Health Care"
          description="For those facing a serious illness, our compassionate team provides expert care to ease symptoms and enhance quality of life."
          buttonText="Learn More"
          buttonLink="/services#homehealth"
          fadeDirection="fade-left"
        />
      </div>
    </section>
  );
};

export default ServiceList;
