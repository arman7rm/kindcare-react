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
        <div className="contents">
          <article
            data-aos="fade-right"
            data-aos-delay="200"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-once="true"
            className="flex origin-center transform flex-col items-center justify-between overflow-hidden rounded-[20px] bg-[var(--teal)] shadow-2xl transition-all duration-500 ease-in-out hover:scale-105"
          >
            <img
              src="./src/assets/hospice.png"
              alt="Hospice care services"
              className="h-48 w-full object-cover sm:h-56"
            />

            <div className="flex h-full flex-col items-center px-4 py-6 text-center text-[var(--primary)] sm:px-5 sm:py-8">
              <h3 className="mb-3 text-2xl font-light sm:mb-4 sm:text-3xl md:text-4xl">
                Hospice Care
              </h3>
              <p className="mb-6 flex-grow text-sm sm:mb-8 sm:text-base">
                When a loved one faces a life-limiting illness, our team offers
                compassionate care and comfort—bringing peace, dignity, and
                support to every moment.
              </p>
              <a
                href="#"
                className="w-max rounded-2xl bg-[var(--primary)] px-4 py-2 text-sm text-white transition-colors hover:bg-[var(--secondary)] sm:px-6 sm:py-3 sm:text-base"
              >
                Learn More
              </a>
            </div>
          </article>
        </div>

        <article
          data-aos="fade-up"
          data-aos-delay="200"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-once="true"
          className="flex transform flex-col items-center justify-between overflow-hidden rounded-[20px] bg-[var(--teal)] shadow-2xl transition-all duration-500 ease-in-out hover:scale-105"
        >
          <img
            src="./src/assets/Palliative.png"
            alt=""
            className="h-48 w-full object-cover sm:h-56"
          />
          <div className="flex h-full flex-col items-center px-4 py-6 text-center text-[var(--primary)] sm:px-5 sm:py-8">
            <h3 className="mb-3 text-2xl font-light sm:mb-4 sm:text-3xl md:text-4xl">
              Palliative Care
            </h3>
            <p className="mb-6 flex-grow text-sm sm:mb-8 sm:text-base">
              Whether you're healing from surgery or managing a chronic
              condition, our skilled nurses and therapists provide personalized
              care—right at home—so you can focus on what matters most: feeling
              your best.
            </p>
            <a
              href="#"
              className="w-max rounded-2xl bg-[var(--primary)] px-4 py-2 text-sm text-white transition-colors hover:bg-[var(--secondary)] focus:ring-2 focus:ring-[var(--primary)] focus:ring-offset-2 focus:outline-none sm:px-6 sm:py-3 sm:text-base"
            >
              Learn More <span className="sr-only">about Palliative Care</span>
            </a>
          </div>
        </article>

        <article
          data-aos="fade-left"
          data-aos-delay="200"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-once="true"
          className="flex transform flex-col items-center justify-between overflow-hidden rounded-[20px] bg-[var(--teal)] shadow-2xl transition-all duration-500 ease-in-out hover:scale-105"
        >
          <img
            src="./src/assets/home.png"
            alt=""
            className="h-48 w-full object-cover sm:h-56"
          />
          <div className="flex h-full flex-col items-center px-4 py-6 text-center text-[var(--primary)] sm:px-5 sm:py-8">
            <h3 className="mb-3 text-2xl font-light sm:mb-4 sm:text-3xl md:text-4xl">
              Home Health Care
            </h3>
            <p className="mb-6 flex-grow text-sm sm:mb-8 sm:text-base">
              For those facing a serious illness, our compassionate team
              provides expert care to ease symptoms and enhance quality of life.
            </p>
            <a
              href="#"
              className="w-max rounded-2xl bg-[var(--primary)] px-4 py-2 text-sm text-white transition-colors hover:bg-[var(--secondary)] focus:ring-2 focus:ring-[var(--primary)] focus:ring-offset-2 focus:outline-none sm:px-6 sm:py-3 sm:text-base"
            >
              Learn More <span className="sr-only">about Home Health Care</span>
            </a>
          </div>
        </article>
      </div>
    </section>
  );
};

export default ServiceList;
