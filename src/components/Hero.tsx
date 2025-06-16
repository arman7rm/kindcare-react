import patient from "../assets/patient.png";

const Hero = () => {
  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="flex flex-col bg-white lg:flex-row xl:mb-10 xl:gap-20">
        {/* Left content - Text */}
        <div
          data-aos="fade-right"
          data-aos-delay="200"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-once="true"
          className="relative z-10 flex flex-col justify-center px-6 py-2 lg:w-150 lg:px-10 lg:py-16 xl:ml-50 xl:w-175 xl:py-20"
        >
          <h1 className="mb-6 w-70 text-[2rem] leading-tight font-extrabold text-[var(--secondary)] sm:text-[2.5rem] md:w-155 md:text-[2.5rem] lg:w-100 lg:text-[2.5rem]">
            Compassionate Care <span className="text-[var(--primary)]">At Home</span>
          </h1>
          <p className="mb-8 text-base text-gray-700 sm:text-lg">
            Experience the comfort of professional healthcare services delivered with warmth and expertise—right where you're most comfortable: in your own home.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:gap-6">
            <a
              href="#register"
              className="rounded-full bg-[var(--primary)] px-8 py-3 text-center text-base font-bold text-white transition-colors hover:bg-[var(--secondary)] shadow-md"
            >
              Request Consultation
            </a>
            <a
              href="/services"
              className="rounded-full border-2 border-[var(--primary)] px-8 py-3 text-center text-base font-bold text-[var(--primary)] transition-colors hover:bg-[var(--primary)] hover:text-white shadow-md"
            >
              Explore Services
            </a>
          </div>
        </div>

        {/* Right content - Image */}
        <div className="col-span-3 h-64 sm:h-80 md:h-[30rem] lg:h-auto lg:ml-[-10]">
          <img
            data-aos="fade-left"
            data-aos-delay="200"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-once="true"
            src={patient}
            alt="Smiling senior patient receiving care at home from a KindCare nurse"
            className="h-full w-full rounded-[25px] object-cover shadow-2xl"
          />
        </div>
      </section>

    </main>
  );
};

export default Hero;