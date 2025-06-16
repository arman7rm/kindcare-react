import React from "react";
import teamImage from "../assets/oldLady.jpg";
import wheelChair from "../assets/wheelchair.png";

const AboutUs: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
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
            Our Commitment to <span className="text-[var(--primary)]">Compassionate Care</span>
          </h1>
          <p className="mb-8 text-base text-gray-700 sm:text-lg">
            At KindCare Wellness, we believe aging with dignity begins at home. Our dedicated team brings warmth, expertise, and personalized attention to every client we serve.
          </p>
          <h2 className="pb-10 text-xl font-semibold text-[var(--primary)] sm:text-2xl">
            Experience the KindCare difference.
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
            src={teamImage}
            alt="KindCare caregiver with senior client"
            className="h-full w-full rounded-l-[25px] object-cover shadow-2xl"
          />
        </div>
      </section>

      {/* Mission Section */}
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
          <h1 className="mb-6 w-70 text-[2rem] leading-tight font-extrabold text-white sm:text-[2.5rem] md:w-155 md:text-[2.5rem] lg:w-100 lg:text-[2.5rem]">
            Our <span className="text-[var(--secondary)]">Mission</span>
          </h1>
          <p className="mt-5 mb-8 text-base text-white sm:text-lg md:text-xl">
            Founded in 2010, KindCare Wellness has revolutionized home healthcare by combining clinical excellence with heartfelt compassion. We're not just caregivers - we're life enhancers who believe everyone deserves to age with dignity in the comfort of home.
          </p>
          <p className="mb-20 text-base text-white sm:text-lg md:text-xl lg:mb-15">
            Our rigorous 5-step caregiver matching process ensures perfect compatibility, while our proprietary CARE+™ approach blends professional expertise with personal connection.
          </p>
        </div>

        {/* Right content */}
        <div
          data-aos="fade-left"
          data-aos-delay="200"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-once="true"
          className="h-64 w-2xl flex-col items-center sm:pt-0 sm:pl-10 md:h-[30rem] lg:h-auto lg:pt-0 lg:pl-25 xl:mt-10 xl:pl-10"
        >
          <div className="grid grid-cols-2 gap-4 p-8">
            <div className="bg-white/20 p-6 rounded-[15px] backdrop-blur-sm">
              <h3 className="text-[var(--secondary)] font-bold mb-2">500+</h3>
              <p className="text-white text-sm">Families Served</p>
            </div>
            <div className="bg-white/20 p-6 rounded-[15px] backdrop-blur-sm">
              <h3 className="text-[var(--secondary)] font-bold mb-2">98%</h3>
              <p className="text-white text-sm">Satisfaction Rate</p>
            </div>
            <div className="bg-white/20 p-6 rounded-[15px] backdrop-blur-sm">
              <h3 className="text-[var(--secondary)] font-bold mb-2">200+</h3>
              <p className="text-white text-sm">Trained Specialists</p>
            </div>
            <div className="bg-white/20 p-6 rounded-[15px] backdrop-blur-sm">
              <h3 className="text-[var(--secondary)] font-bold mb-2">24/7</h3>
              <p className="text-white text-sm">Care Availability</p>
            </div>
          </div>
          <img
            src={wheelChair}
            alt="KindCare patient receiving compassionate care"
            className="z-10 mb-[-30%] ml-30 w-60 rounded-[25px] shadow-2xl md:mb-[-80%] md:ml-45 md:w-100 lg:mb-[-30%] lg:ml-70 xl:mb-[-25%] xl:ml-25"
          />
        </div>
      </section>

      {/* Values Section */}
      <section className="flex flex-col bg-white p-12 lg:flex-row lg:gap-10 xl:m-auto xl:justify-center xl:gap-20">
        {/* left/bottom section */}
        <h1
          data-aos="fade-right"
          data-aos-delay="200"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-once="true"
          className="mt-20 w-60 flex-shrink-0 text-[2rem] leading-tight font-extrabold text-[var(--secondary)] sm:mt-20 sm:text-[2rem] md:w-120 md:text-[2.5rem] lg:mt-70 lg:ml-0 lg:w-100 lg:text-[3rem]"
        >
          The KindCare <span className="text-[var(--primary)]">Difference</span>
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
          <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="rounded-[15px] border border-[var(--primary)] p-6">
              <h3 className="text-[var(--primary)] font-bold mb-2">Clinical Excellence</h3>
              <p className="text-gray-700 text-sm">Board-certified specialists using evidence-based protocols</p>
            </div>
            <div className="rounded-[15px] border border-[var(--primary)] p-6">
              <h3 className="text-[var(--primary)] font-bold mb-2">Emotional Support</h3>
              <p className="text-gray-700 text-sm">Companionship and mental wellness programs</p>
            </div>
            <div className="rounded-[15px] border border-[var(--primary)] p-6">
              <h3 className="text-[var(--primary)] font-bold mb-2">Lifestyle Enrichment</h3>
              <p className="text-gray-700 text-sm">Activities tailored to personal interests</p>
            </div>
            <div className="rounded-[15px] border border-[var(--primary)] p-6">
              <h3 className="text-[var(--primary)] font-bold mb-2">Family Integration</h3>
              <p className="text-gray-700 text-sm">Regular updates and family training</p>
            </div>
          </div>
          <p className="text-base text-gray-700 sm:text-lg md:text-xl">
            What sets us apart is our commitment to treating each client like family. We create care plans tailored to your unique needs—so you or your loved one can age in place with confidence, dignity, and peace of mind.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[var(--lightgreen)] p-12 text-center">
        <div
          data-aos="fade-up"
          data-aos-delay="200"
          data-aos-duration="1000"
          className="mx-auto max-w-4xl rounded-[25px] bg-white p-12 shadow-2xl"
        >
          <h2 className="mb-6 text-[2rem] font-extrabold text-[var(--secondary)] sm:text-[2.5rem]">
            Ready to Experience Compassionate Care?
          </h2>
          <p className="mb-8 text-lg text-gray-700 sm:text-xl">
            Schedule your free in-home consultation today and discover how KindCare Wellness can make a difference in your loved one's life.
          </p>
          <button className="rounded-full bg-[var(--primary)] px-8 py-4 font-bold text-white shadow-lg hover:bg-[var(--dark-primary)] transition-colors duration-300">
            Get Started Now
          </button>
        </div>
      </section>
    </>
  );
};

export default AboutUs;