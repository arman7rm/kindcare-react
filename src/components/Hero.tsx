import patient from "../assets/patient.png";

const Hero = () => {
  return (
    <main className="bg-[var(--secondary)] text-white">
      <section className="grid grid-cols-1 gap-8 bg-[var(--teal)] px-4 py-12 text-[var(--primary)] sm:px-8 md:py-24 lg:grid-cols-7">
        <div
          data-aos="fade-right"
          data-aos-delay="200"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-once="true"
          className="order-2 rounded-[20px] shadow-2xl lg:order-1 lg:col-span-2 lg:col-start-2"
        >
          <img
            src={patient}
            alt="Smiling senior patient receiving care at home from a KindCare nurse"
            className="h-auto w-full rounded-[20px]"
          />
        </div>
        <article
          data-aos="fade-left"
          data-aos-delay="200"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-once="true"
          className="order-1 flex flex-col items-center justify-center rounded-[20px] bg-[var(--white)] p-6 shadow-2xl sm:p-8 md:p-12 lg:order-2 lg:col-span-3 lg:col-start-4 lg:px-20"
        >
          <h1 className="mb-4 text-center text-3xl font-light sm:mb-6 sm:text-4xl md:text-4xl lg:text-2xl xl:text-6xl">
            Compassionate healthcare, at home with you.
          </h1>
          <p className="mb-6 text-center text-lg font-light sm:mb-8 sm:text-xl md:text-xl lg:text-xl">
            Reliable care, thoughtful support, and a path forward—tailored to
            you.
          </p>
          <a
            href="#register"
            className="rounded-2xl bg-[var(--primary)] px-6 py-3 text-base text-white transition-colors hover:bg-[var(--secondary)] focus:ring-2 focus:ring-[var(--primary)] focus:ring-offset-2 focus:outline-none"
          >
            Request Consultation
          </a>
        </article>
      </section>
    </main>
  );
};

export default Hero;
