import React from "react";
import hospiceImg from "../assets/hospice.png";
import palliativeImg from "../assets/Palliative.png";
import homeHealthImg from "../assets/home.png";

const CareServices: React.FC = () => {
  return (
    <section className="bg-gradient-to-b from-white to-[var(--teal)] py-20 px-4 sm:px-6 md:px-10 lg:px-20">
      <div className="space-y-24 lg:space-y-36 xl:space-y-48">
        {/* Hospice Care */}
        <div className="flex flex-col items-center gap-10 md:flex-row md:gap-20">
          <div
            data-aos="fade-right"
            data-aos-delay="200"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-once="true"
            className="w-full md:w-1/2"
          >
            <img
              src={hospiceImg}
              alt="Hospice Care"
              className="w-full max-h-[450px] object-cover rounded-[25px] shadow-2xl transform hover:scale-[1.02] transition-transform duration-300 ease-out"
            />
          </div>
          <div
            data-aos="fade-left"
            data-aos-delay="200"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-once="true"
            className="w-full text-center md:w-1/2 md:text-left"
          >
            <h2 id="hospice" className="mb-5 text-4xl font-extrabold leading-tight text-[var(--primary)] sm:text-5xl lg:text-6xl xl:text-7xl">
              Hospice <span className="text-[var(--secondary)]">Care</span>
            </h2>
            {/* TEXT SIZE ADJUSTMENT HERE */}
            <p className="text-base leading-relaxed text-gray-700 sm:text-lg lg:text-xl mb-4">
              Our compassionate **hospice care** services are dedicated to providing comfort,
              dignity, and the highest quality of life for individuals facing a terminal illness,
              typically when curative treatments are no longer an option. Our primary goal is to
              alleviate suffering and enhance well-being, focusing on the person, not just the disease.
            </p>
            {/* TEXT SIZE ADJUSTMENT HERE */}
            <p className="text-base leading-relaxed text-gray-700 sm:text-lg lg:text-xl">
              We offer a holistic approach that extends beyond medical management. Our interdisciplinary
              team provides comprehensive support including expert pain and symptom control, emotional
              and spiritual guidance, and practical assistance for daily living. We also extend vital
              bereavement support to families, ensuring peace and comfort during life’s most delicate moments
              and beyond. Our care allows patients to spend their final days in the familiarity and comfort
              of their own home, surrounded by loved ones.
            </p>
          </div>
        </div>

        {/* Palliative Care - Reversed Layout */}
        <div id="palliative" className="flex flex-col items-center gap-10 md:flex-row-reverse md:gap-20">
          <div
            data-aos="fade-left"
            data-aos-delay="200"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-once="true"
            className="w-full md:w-1/2"
          >
            <img
              src={palliativeImg}
              alt="Palliative Care"
              className="w-full max-h-[450px] object-cover rounded-[25px] shadow-2xl transform hover:scale-[1.02] transition-transform duration-300 ease-out"
            />
          </div>
          <div
            data-aos="fade-right"
            data-aos-delay="200"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-once="true"
            className="w-full text-center md:w-1/2 md:text-left"
          >
            <h2 className="mb-5 text-4xl font-extrabold leading-tight text-[var(--primary)] sm:text-5xl lg:text-6xl xl:text-7xl">
              Palliative <span className="text-[var(--secondary)]">Care</span>
            </h2>
            {/* TEXT SIZE ADJUSTMENT HERE */}
            <p className="text-base leading-relaxed text-gray-700 sm:text-lg lg:text-xl mb-4">
              Our **palliative care** services are designed to improve comfort and
              enhance the quality of life for individuals living with serious illnesses,
              regardless of prognosis. Unlike hospice, palliative care can be provided
              at any stage of a serious illness, even alongside curative treatments.
              It focuses on preventing and relieving suffering and addressing the physical,
              psychosocial, and spiritual needs of both patients and their families.
            </p>
            {/* TEXT SIZE ADJUSTMENT HERE */}
            <p className="text-base leading-relaxed text-gray-700 sm:text-xl lg:text-xl">
              Our dedicated team specializes in comprehensive symptom management,
              including pain, nausea, fatigue, and shortness of breath. We collaborate
              closely with your existing medical team to ensure seamless care. By
              addressing all aspects of well-being, we empower individuals to live
              better every day — with dignity, ease, and holistic attention,
              helping them maintain independence and comfort in their own home.
            </p>
          </div>
        </div>

        {/* Home Health Care */}
        <div id="homehealth" className="flex flex-col items-center gap-10 md:flex-row md:gap-20">
          <div
            data-aos="fade-right"
            data-aos-delay="200"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-once="true"
            className="w-full md:w-1/2"
          >
            <img
              src={homeHealthImg}
              alt="Home Health Care"
              className="w-full max-h-[450px] object-cover rounded-[25px] shadow-2xl transform hover:scale-[1.02] transition-transform duration-300 ease-out"
            />
          </div>
          <div
            data-aos="fade-left"
            data-aos-delay="200"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-once="true"
            className="w-full text-center md:w-1/2 md:text-left"
          >
            <h2 className="mb-5 text-4xl font-extrabold leading-tight text-[var(--primary)] sm:text-5xl lg:text-6xl xl:text-7xl">
              Home Health <span className="text-[var(--secondary)]">Care</span>
            </h2>
            {/* TEXT SIZE ADJUSTMENT HERE */}
            <p className="text-base leading-relaxed text-gray-700 sm:text-lg lg:text-xl mb-4">
              Stay independent and cared for in the familiar comfort of your own home
              with our professional **home health care** services. Designed for
              individuals recovering from illness, injury, or managing chronic conditions,
              our skilled clinicians provide high-quality medical care and therapeutic
              services right where you live. This service helps prevent hospital readmissions
              and promotes faster recovery within a comfortable, supportive environment.
            </p>
            {/* TEXT SIZE ADJUSTMENT HERE */}
            <p className="text-base leading-relaxed text-gray-700 sm:text-lg lg:text-xl">
              Our comprehensive in-home support includes skilled nursing, physical therapy,
              occupational therapy, speech therapy, and medical social work. We also offer
              assistance with daily tasks such as medication management, wound care, and
              personal care, all under the guidance of your physician. We create reliable,
              personalized care plans that help you or your loved one thrive — maximizing
              independence and ensuring peace of mind without stepping outside your front door.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareServices;