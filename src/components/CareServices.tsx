import React from "react";
import hospiceImg from "../assets/hospice.png";
import palliativeImg from "../assets/Palliative.png";
import homeHealthImg from "../assets/home.png";

const CareServices: React.FC = () => {
  return (
    <section className="space-y-24 bg-[var(--teal)] px-4 py-16 pt-30 sm:px-6 md:px-10 lg:px-20">
      {/* Hospice Care */}
      <div className="flex flex-col-reverse items-center gap-12 md:flex-row md:gap-12">
        <div className="w-full text-center text-[var(--primary)] md:w-1/2 md:text-left">
          <h2 id="hospice" className="mb-4 text-3xl font-extrabold sm:text-4xl">
            Hospice Care
          </h2>
          <p className="text-base leading-relaxed sm:text-lg">
            Our compassionate hospice care services focus on comfort, dignity,
            and quality of life for individuals facing terminal illness. We
            provide emotional, spiritual, and medical support tailored to the
            needs of both patients and their families — ensuring peace and
            comfort during life’s most delicate moments.
          </p>
        </div>
        <img
          src={hospiceImg}
          alt="Hospice Care"
          className="max-h-[350px] w-full rounded-2xl object-cover shadow-2xl md:w-1/2"
        />
      </div>

      {/* Palliative Care */}
      <div id="palliative" className="flex flex-col-reverse items-center gap-8 md:flex-row-reverse md:gap-12">
        <div className="w-full text-center text-[var(--primary)] md:w-1/2 md:text-left">
          <h2 className="mb-4 text-3xl font-extrabold sm:text-4xl">
            Palliative Care
          </h2>
          <p className="text-base leading-relaxed sm:text-lg">
            Our palliative care services are designed to improve comfort and
            relieve symptoms for those living with serious health conditions.
            From pain management to emotional support, we create personalized
            care plans that empower individuals to live better every day — with
            dignity, ease, and holistic attention.
          </p>
        </div>
        <img
          src={palliativeImg}
          alt="Palliative Care"
          className="max-h-[350px] w-full rounded-2xl object-cover shadow-2xl md:w-1/2"
        />
      </div>

      {/* Home Health Care */}
      <div id="homehealth" className="flex flex-col-reverse items-center gap-8 md:flex-row md:gap-12">
        <div className="w-full text-center text-[var(--primary)] md:w-1/2 md:text-left">
          <h2 className="mb-4 text-3xl font-extrabold sm:text-4xl">
            Home Health Care
          </h2>
          <p className="text-base leading-relaxed sm:text-lg">
            Stay independent and cared for in the comfort of your home with our
            professional home health care services. From skilled nursing and
            physical therapy to assistance with daily tasks, we provide
            reliable, personalized care that helps you or your loved one thrive
            — without stepping outside your front door.
          </p>
        </div>
        <img
          src={homeHealthImg}
          alt="Home Health Care"
          className="max-h-[350px] w-full rounded-2xl object-cover shadow-2xl md:w-1/2"
        />
      </div>
    </section>
  );
};

export default CareServices;
