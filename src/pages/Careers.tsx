import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import aos from 'aos';
import 'aos/dist/aos.css';

// You might want a specific hero image for the careers page, e.g.:\

const Careers: React.FC = () => {
  useEffect(() => {
    aos.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      delay: 200,
    });
    aos.refresh();
  }, []);

  return (
    <>
      {/* Careers Hero Section */}
      <section className="flex flex-col bg-white lg:flex-row xl:mb-10 xl:gap-20">
        {/* Left content */}
        <div
          data-aos="fade-right"
          className="relative z-10 flex flex-col justify-center px-6 py-12 lg:w-150 lg:px-10 lg:py-16 xl:ml-50 xl:w-200 xl:py-20"
        >
          <h1 className="mb-6 text-[2rem] leading-tight font-extrabold text-[var(--secondary)] sm:text-[2.5rem] md:text-[2.5rem] lg:text-[2.5rem]">
            Join Our Team at{" "}
            <span className="text-[var(--primary)]">KindCare Wellness</span>
          </h1>
          <p className="mb-8 text-base text-gray-700 sm:text-lg">
            Make a meaningful difference in the lives of others every day. At
            KindCare Wellness, we're dedicated to compassionate care and we're looking
            for passionate professionals to grow with us.
          </p>
          <h2 className="pb-10 text-xl font-semibold text-[var(--primary)] sm:text-2xl">
            Build a rewarding career. Transform lives.
          </h2>
        </div>

        {/* Right image */}
        <div
          data-aos="fade-left"
          className="col-span-3 h-64 sm:h-80 md:h-[30rem] lg:h-auto flex items-center justify-center p-8 bg-gray-100 rounded-l-[25px] shadow-2xl"
        >
          {/* Using an image for a better visual impact, similar to your other heroes */}
          {/* <img
            src={careersHeroImage}
            alt="Join Our Team"
            className="h-full w-full object-cover rounded-l-[25px]"
          /> */}
        </div>
      </section>

      ---

      {/* Why Work With Us Section */}
      <section className="mt-[-8%] flex flex-col rounded-tl-[25px] bg-[var(--primary)] py-16 px-4 sm:px-6 md:py-20 lg:px-10 xl:px-20">
        <div
          data-aos="fade-up"
          className="w-full text-center lg:w-3/4 lg:mx-auto"
        >
          <h2 className="mb-8 text-3xl font-extrabold leading-tight text-white sm:text-4xl lg:text-5xl">
            Why Choose a Career at{" "}
            <span className="text-[var(--secondary)]">KindCare Wellness?</span>
          </h2>
          <p className="mb-10 text-base leading-relaxed text-white sm:text-lg lg:text-xl">
            At KindCare Wellness, we believe in supporting our team members as much as we support our patients. We foster a collaborative, respectful, and empowering environment where you can truly thrive. Join a team dedicated to excellence, compassion, and making a profound impact in the community.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-white">
            {/* Benefit 1 */}
            <div data-aos="fade-up" data-aos-delay="300" className="bg-[var(--primary)] p-6 rounded-xl shadow-lg flex flex-col items-center text-center border-2 border-[var(--secondary)] transition-all duration-300 hover:scale-105 hover:bg-opacity-90">
              <i className="fas fa-hand-holding-heart text-[var(--secondary)] text-5xl mb-4" aria-hidden="true"></i>
              <h3 className="font-bold text-xl mb-2">Meaningful Impact</h3>
              <p className="text-sm">Make a real difference in patients' lives, helping them maintain dignity and comfort at home.</p>
            </div>
            {/* Benefit 2 */}
            <div data-aos="fade-up" data-aos-delay="400" className="bg-[var(--primary)] p-6 rounded-xl shadow-lg flex flex-col items-center text-center border-2 border-[var(--secondary)] transition-all duration-300 hover:scale-105 hover:bg-opacity-90">
              <i className="fas fa-users text-[var(--secondary)] text-5xl mb-4" aria-hidden="true"></i>
              <h3 className="font-bold text-xl mb-2">Supportive Community</h3>
              <p className="text-sm">Work alongside a team of dedicated professionals who share your passion for care.</p>
            </div>
            {/* Benefit 3 */}
            <div data-aos="fade-up" data-aos-delay="500" className="bg-[var(--primary)] p-6 rounded-xl shadow-lg flex flex-col items-center text-center border-2 border-[var(--secondary)] transition-all duration-300 hover:scale-105 hover:bg-opacity-90">
              <i className="fas fa-graduation-cap text-[var(--secondary)] text-5xl mb-4" aria-hidden="true"></i>
              <h3 className="font-bold text-xl mb-2">Professional Growth</h3>
              <p className="text-sm">Opportunities for continuous learning, training, and career advancement.</p>
            </div>
          </div>
        </div>
      </section>

      ---

      {/* Available Positions Section */}
      <section className="bg-white py-16 px-4 sm:px-6 md:py-20 lg:px-10 xl:px-20">
        <div data-aos="fade-up" className="text-center mb-12">
          <h2 className="mb-4 text-3xl font-extrabold leading-tight text-[var(--primary)] sm:text-4xl lg:text-5xl">
            Current <span className="text-[var(--secondary)]">Opportunities</span>
          </h2>
          <p className="text-base text-gray-700 sm:text-lg lg:text-xl">
            Explore our open positions and find where your skills can make the biggest difference.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 max-w-4xl mx-auto">
          {/* Registered Nurse Link */}
          <Link
            to="/careers/registered-nurse" // Path for Registered Nurse sub-page
            data-aos="fade-up"
            data-aos-delay="300"
            className="flex flex-col items-center text-center p-8 bg-gray-50 rounded-[25px] shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02] border-2 border-transparent hover:border-[var(--secondary)] focus:outline-none focus:ring-2 focus:ring-[var(--secondary)] focus:ring-offset-2"
          >
            <i className="fas fa-user-nurse text-[var(--primary)] text-6xl mb-6" aria-hidden="true"></i>
            <h3 className="text-3xl font-bold text-[var(--primary)] mb-3">Registered Nurse (RN)</h3>
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              Provide skilled nursing care, patient education, and health management in a home setting. Requires valid RN license.
            </p>
            <span className="text-[var(--secondary)] font-semibold text-lg flex items-center">
              Learn More <i className="fas fa-arrow-right ml-2 text-base"></i>
            </span>
          </Link>

          {/* Home Health Aide Link */}
          <Link
            to="/careers/home-health-aide" // Path for Home Health Aide sub-page
            data-aos="fade-up"
            data-aos-delay="400"
            className="flex flex-col items-center text-center p-8 bg-gray-50 rounded-[25px] shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02] border-2 border-transparent hover:border-[var(--secondary)] focus:outline-none focus:ring-2 focus:ring-[var(--secondary)] focus:ring-offset-2"
          >
            <i className="fas fa-hand-holding-medical text-[var(--primary)] text-6xl mb-6" aria-hidden="true"></i>
            <h3 className="text-3xl font-bold text-[var(--primary)] mb-3">Home Health Aide (HHA)</h3>
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              Assist patients with daily living activities, personal care, and provide companionship. Certification required.
            </p>
            <span className="text-[var(--secondary)] font-semibold text-lg flex items-center">
              Learn More <i className="fas fa-arrow-right ml-2 text-base"></i>
            </span>
          </Link>
        </div>
      </section>

      {/* Call to action / Application CTA (Optional) */}
      <section className="bg-[var(--teal)] py-16 px-4 sm:px-6 md:py-20 lg:px-10 xl:px-20 text-center">
        <div data-aos="fade-up" className="max-w-3xl mx-auto">
          <h2 className="mb-6 text-3xl font-extrabold text-[var(--primary)] sm:text-4xl lg:text-5xl">
            Ready to Make a Difference?
          </h2>
          <p className="mb-10 text-base text-gray-700 sm:text-lg lg:text-xl">
            If you're passionate about providing compassionate care and dedicated to improving lives, we'd love to hear from you. Explore our opportunities and apply today!
          </p>
          <Link
            to="/contact" // Link to your contact page or a specific application form if you have one
            className="inline-block rounded-full bg-[var(--primary)] px-8 py-4 text-lg font-bold text-white shadow-lg transition-all duration-300 hover:bg-[var(--secondary)] hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:ring-offset-2"
          >
            <i className="fas fa-paper-plane mr-3" aria-hidden="true"></i> Apply Now
          </Link>
        </div>
      </section>
    </>
  );
};

export default Careers;