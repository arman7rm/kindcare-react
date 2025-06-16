import Card from "./Card";
import hospiceImage from "../assets/hospice.png";
import palliativeImage from "../assets/Palliative.png";
import homeCareImage from "../assets/home.png";

const ServiceList = () => {
  return (
    <section className="bg-gradient-to-b from-[var(--lightgreen)] to-[var(--teal)] px-4 py-16 sm:px-8 md:py-28 lg:py-32">
      {/* Section Header */}
      <div
        className="mx-auto mb-16 max-w-4xl text-center"
        data-aos="fade-down"
        data-aos-delay="200"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        data-aos-once="true"
      >
        <span className="mb-3 inline-block rounded-full bg-[var(--primary)] px-4 py-2 text-lg font-semibold text-[var(--white)]">
          What We Offer
        </span>
        <h2 className="text-4xl font-bold text-[var(--primary)] sm:text-5xl md:text-6xl">
          Comprehensive{" "}
          <span className="text-[var(--white)]">Care Services</span>
        </h2>
        <p className="mx-auto mt-6 max-w-3xl text-xl text-[var(--white)]">
          Delivering exceptional care tailored to your unique needs—because
          everyone deserves comfort and dignity.
        </p>
      </div>

      {/* Services Grid */}
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        <Card
          imageSrc={hospiceImage}
          title="Hospice Care"
          description="Our compassionate end-of-life care focuses on comfort, dignity, and quality time with loved ones. We provide 24/7 support, pain management, and emotional guidance."
          features={[
            "24/7 nursing availability",
            "Pain & symptom management",
            "Bereavement support",
            "Spiritual counseling",
          ]}
          buttonText="Explore Hospice Care"
          buttonLink="/services#hospice"
          fadeDirection="fade-right"
        />
        <Card
          imageSrc={palliativeImage}
          title="Palliative Care"
          description="Specialized medical care for people with serious illnesses, focused on providing relief from symptoms and stress at any stage of illness."
          features={[
            "Chronic disease management",
            "Medication coordination",
            "Therapeutic treatments",
            "Family education",
          ]}
          buttonText="Discover Palliative Care"
          buttonLink="/services#palliative"
          fadeDirection="fade-up"
          featured={true}
        />
        <Card
          imageSrc={homeCareImage}
          title="Home Health Care"
          description="Professional medical care delivered in the comfort of your home to promote recovery and maintain independence."
          features={[
            "Skilled nursing care",
            "Physical therapy",
            "Post-surgical care",
            "Medication management",
          ]}
          buttonText="Learn About Home Care"
          buttonLink="/services#homehealth"
          fadeDirection="fade-left"
        />
      </div>

      {/* CTA Section */}
      <div
        className="mx-auto mt-20 max-w-4xl rounded-2xl bg-white p-8 text-center shadow-2xl"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <h3 className="text-2xl font-bold text-[var(--primary)] sm:text-3xl">
          Not Sure Which Service You Need?
        </h3>
        <p className="mt-4 text-lg text-gray-700">
          Our care specialists can help determine the best solution for your
          unique situation.
        </p>
        <a
          href="/contact"
          className="mt-6 inline-block rounded-full bg-[var(--primary)] px-8 py-3 text-lg font-bold text-white transition-all hover:bg-[var(--secondary)] hover:shadow-lg"
        >
          Speak With a Care Coordinator
        </a>
      </div>
    </section>
  );
};

export default ServiceList;
