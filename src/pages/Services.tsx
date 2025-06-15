import heroImage from "../assets/ServicesHeroImage.png";
import patientImage from "../assets/patientwithaid.png";

const Services = () => {
  return (
    <>
      <section className="grid grid-cols-1 lg:grid-cols-5 bg-white">
        {/* Left content */}
        <div
          data-aos="fade-right"
          data-aos-delay="200"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-once="true"
          className="col-span-2 flex flex-col justify-center px-6 py-2 lg:px-20 lg:py-16 relative z-10"
        >
          <h1 className="text-[2.5rem] sm:text-[3rem] md:text-[3.5rem] lg:text-[4.5rem] font-extrabold leading-tight text-[var(--secondary)] mb-6">
            We Provide Home Care Services for{" "}
            <span className="text-[var(--primary)]">Seniors.</span>
          </h1>
          <p className="text-base sm:text-lg text-gray-700 mb-8">
            Discover the comfort of aging in place with compassionate,
            professional care—right where you belong, home.
          </p>
          <h2 className="pb-10 text-xl sm:text-2xl font-semibold text-[var(--primary)]">
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
      <section className="mt-[-10%] rounded-tl-[25px] grid grid-cols-1 sm:mt-[-10%] sm:pt-[10%] lg:grid-cols-5 bg-[var(--primary)]">
        {/* Left content */}
        <div
          data-aos="fade-right"
          data-aos-delay="200"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-once="true"
          className="col-span-2 flex flex-col justify-center px-6 pt-20 sm:px-12 lg:px-20 lg:py-16 relative z-10"
        >
          <p className="mt-5 text-base sm:text-lg text-white mb-8">
            At KindCare Wellness, our personalized home care services empower
            seniors and individuals with disabilities to live safely and
            independently—without leaving the comfort of home. Whether it’s help
            with daily tasks, mobility, medication, or companionship, our
            professional caregivers provide the compassionate support you need
            to maintain your quality of life.
          </p>
          <p className="text-base sm:text-lg text-white mb-20">
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
          className="flex-col items-center w-2xl sm:pl-10 sm:pt-0 lg:pl-25 lg:pt-30 col-span-3 h-64 md:h-[30rem] lg:h-auto"
        >
          <h1 className="text-[2rem] ml-10 w-70 sm:text-[3rem] md:text-[2rem] lg:text-[3rem] font-extrabold leading-tight text-white mb-6">
            Compassionate In-Home Support That Helps You{" "}
            <span className="text-[var(--secondary)]">Thrive.</span>
          </h1>
          <img
            src={patientImage}
            alt=""
            className=" w-60 ml-30 z-10 lg:mb-[-40%] md:mb-[-60%] mb-[-30%] rounded-[25px]"
          />
        </div>
      </section>
      <section className="p-12 grid grid-cols-1 lg:grid-cols-5 bg-white">
        <div className="lg:col-span-5 flex lg:flex-row gap-x-20 flex-col">
          {/* left/bottom section */}
          <h1
            data-aos="fade-right"
            data-aos-delay="200"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-once="true"
            className="mt-20 w-60 sm:mt-20 lg:ml-20 lg:mt-30 text-[2rem] sm:text-[2rem] md:text-[2.5rem] lg:text-[3.5rem] font-extrabold leading-tight text-[var(--secondary)] flex-shrink-0"
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
            className="flex flex-col max-w-[35rem] mt-10"
          >
            <p className="text-base sm:text-lg text-gray-700 mb-6">
              Experience compassionate, professional care designed to support
              your independence and enhance your quality of life—right in the
              comfort of your own home. Our senior and home health care services
              are perfect for those who want expert assistance with daily tasks,
              health management, and companionship without sacrificing the
              comfort and familiarity of home.
            </p>
            <p className="text-base sm:text-lg text-gray-700">
              Whether you need a little extra help or around-the-clock support,
              we tailor our care to your unique needs—giving you and your loved
              ones peace of mind and the freedom to live life on your terms.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
