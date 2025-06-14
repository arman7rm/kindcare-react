import heroImage from "../assets/ServicesHeroImage.png";

const Services = () => {
  return (
    <section className="grid grid-cols-5 bg-white">
      {/* Left content */}
      <div className="col-span-2 flex flex-col justify-center px-20 py-16 relative z-10">
        <h1 className="text-[4.5rem] font-extrabold leading-[1.1] text-[var(--secondary)] mb-6">
          We Provide Home Care Services for{" "}
          <span className="text-[var(--primary)]">Seniors.</span>
        </h1>
        <p className="text-lg text-gray-700 mb-8">
          Discover the comfort of aging in place with compassionate, professional
          care—right where you belong. Our home care services are designed to
          support your independence, enhance your quality of life, and give you
          and your loved ones peace of mind.
        </p>
        <h2 className="text-2xl font-semibold text-[var(--primary)]">
          Stay home. Stay independent.
        </h2>
      </div>

      {/* Right image */}
      <div className="col-span-3">
        <img
          src={heroImage}
          alt="Senior Home Care"
          className="h-full w-full object-cover"
        />
      </div>
    </section>
  );
};

export default Services;
