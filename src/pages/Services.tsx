import heroImage from "../assets/ServicesHeroImage.png";

const Services = () => {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-5 bg-white">
      {/* Left content */}
      <div
        data-aos="fade-right"
        data-aos-delay="200"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        data-aos-once="true"
        className="col-span-2 flex flex-col justify-center px-6 py-12 lg:px-20 lg:py-16 relative z-10"
      >
        <h1 className="text-[2.5rem] sm:text-[3rem] md:text-[3.5rem] lg:text-[4.5rem] font-extrabold leading-tight text-[var(--secondary)] mb-6">
          We Provide Home Care Services for{" "}
          <span className="text-[var(--primary)]">Seniors.</span>
        </h1>
        <p className="text-base sm:text-lg text-gray-700 mb-8">
          Discover the comfort of aging in place with compassionate,
          professional care—right where you belong. Our home care services are
          designed to support your independence, enhance your quality of life,
          and give you and your loved ones peace of mind.
        </p>
        <h2 className="text-xl sm:text-2xl font-semibold text-[var(--primary)]">
          Stay home. Stay independent.
        </h2>
      </div>

      {/* Right image */}
      <div className="col-span-3 h-64 sm:h-80 md:h-[30rem] lg:h-auto">
        <img
          data-aos="fade-left"
          data-aos-delay="200"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-once="true"
          src={heroImage}
          alt="Senior Home Care"
          className="rounded-l-[25px] h-full w-full object-cover"
        />
      </div>
    </section>
  );
};

export default Services;
