import heroImage from "../assets/ServicesHeroImage.png";
import patientImage from "../assets/patientwithaid.png";

const Services = () => {
  return (
    <>
      <section className="flex flex-col bg-white lg:flex-row xl:mb-10 xl:gap-20">
        {/* Left content */}
        <div
          data-aos="fade-right"
          data-aos-delay="200"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-once="true"
          className="relative z-10 flex flex-col justify-center px-6 py-2 lg:w-150 lg:px-10 lg:py-16 xl:ml-50 xl:w-200 xl:py-20"
        >
          <h1 className="mb-6 w-70 text-[2rem] leading-tight font-extrabold text-[var(--secondary)] sm:text-[2.5rem] md:w-155 md:text-[2.5rem] lg:w-100 lg:text-[2.5rem]">
            We Provide Home Care Services for{" "}
            <span className="text-[var(--primary)]">Seniors.</span>
          </h1>
          <p className="mb-8 text-base text-gray-700 sm:text-lg">
            Discover the comfort of aging in place with compassionate,
            professional care—right where you belong, home.
          </p>
          <h2 className="pb-10 text-xl font-semibold text-[var(--primary)] sm:text-2xl">
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
            className="h-full w-full rounded-l-[25px] object-cover"
          />
        </div>
      </section>
      <section className="mt-[-10%] flex flex-col rounded-tl-[25px] bg-[var(--primary)] sm:mt-[-10%] sm:pt-[10%] xl:flex-row">
        {/* Left content */}
        <div
          data-aos="fade-right"
          data-aos-delay="200"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-once="true"
          className="flex flex-col justify-center px-6 pt-20 sm:px-12 md:pt-10 lg:m-auto lg:w-200 lg:text-xl xl:w-140 xl:px-0 xl:pt-0"
        >
          <p className="mt-5 mb-8 text-base text-white sm:text-lg md:text-xl">
            At KindCare Wellness, our personalized home care services empower
            seniors and individuals with disabilities to live safely and
            independently—without leaving the comfort of home. Whether it’s help
            with daily tasks, mobility, medication, or companionship, our
            professional caregivers provide the compassionate support you need
            to maintain your quality of life.
          </p>
          <p className="mb-20 text-base text-white sm:text-lg lg:mb-15 md:text-xl">
            We create care plans tailored to your needs—so you or your loved one
            can age in place with confidence, dignity, and peace of mind.
          </p>
        </div>

        {/* Right content */}
        <div
          data-aos="fade-left"
          data-aos-delay="200"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-once="true"
          className=" h-64 w-2xl flex-col items-center sm:pt-0 sm:pl-10 md:h-[30rem] lg:h-auto lg:pt-0 lg:pl-25 xl:pl-10 xl:mt-10"
        >
          <h1 className="mb-6 ml-10 w-70 text-[2rem] leading-tight font-extrabold text-white sm:text-[3rem] md:w-100 md:text-[3rem] lg:text-[2.75rem] xl:ml-0">
            Compassionate In-Home Support That Helps You{" "}
            <span className="text-[var(--secondary)]">Thrive.</span>
          </h1>
          <img
            src={patientImage}
            alt=""
            className="z-10 mb-[-30%] ml-30 w-60 rounded-[25px] md:mb-[-80%] md:ml-45 md:w-100 lg:mb-[-30%] xl:mb-[-25%] lg:ml-70 xl:ml-25"
          />
        </div>
      </section>
      <section className="flex flex-col bg-white p-12 lg:flex-row lg:gap-10 xl:gap-20 xl:m-auto xl:justify-center">
        {/* left/bottom section */}
        <h1
          data-aos="fade-right"
          data-aos-delay="200"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-once="true"
          className="mt-20 w-60 md:w-120 flex-shrink-0 text-[2rem] leading-tight font-extrabold text-[var(--secondary)] sm:mt-20 sm:text-[2rem] md:text-[2.5rem] lg:mt-70 lg:ml-0 lg:w-100 lg:text-[3rem]"
        >
          Why Home Care May Be Right for{" "}
          <span className="text-[var(--primary)]">You.</span>
        </h1>
        {/* right/top section */}
        <div
          data-aos="fade-left"
          data-aos-delay="200"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-once="true"
          className="mt-10 flex max-w-[35rem] flex-col lg:mt-50"
        >
          <p className="mb-6 text-base text-gray-700 sm:text-lg md:text-xl">
            Experience compassionate, professional care designed to support your
            independence and enhance your quality of life—right in the comfort
            of your own home. Our senior and home health care services are
            perfect for those who want expert assistance with daily tasks,
            health management, and companionship without sacrificing the comfort
            and familiarity of home.
          </p>
          <p className="text-base text-gray-700 sm:text-lg md:text-xl">
            Whether you need a little extra help or around-the-clock support, we
            tailor our care to your unique needs—giving you and your loved ones
            peace of mind and the freedom to live life on your terms.
          </p>
        </div>
      </section>
    </>
  );
};

export default Services;
