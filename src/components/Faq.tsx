import React, { useState } from "react";

// Define the type for a single FAQ item
interface FAQItem {
  question: string;
  answer: string;
}

const FAQComponent: React.FC = () => {
  // Use useState with explicit type for activeIndex, can be number or null
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  // Explicitly type the faqs array
  const faqs: FAQItem[] = [
    {
      question: "What is a Home Health Aide (HHA)?",
      answer:
        "A Home Health Aide (HHA) is a compassionate, trained, and certified professional who provides essential non-medical care and personal assistance to individuals in the comfort of their own homes. HHAs at Kindcare Wellness are dedicated to helping clients with activities of daily living (ADLs), such as bathing, dressing, grooming, meal preparation, mobility assistance, and basic health monitoring, ensuring comfort and well-being.",
    },
    {
      question: "Are your HHAs certified in New Jersey?",
      answer:
        "Yes, absolutely. All of our HHAs at Kindcare Wellness are Certified Homemaker-Home Health Aides (CHHAs) licensed by the New Jersey Board of Nursing. They have successfully completed rigorous state-approved training programs and have passed comprehensive background checks and competency evaluations, as required by law, to ensure the highest quality of care.",
    },
    {
      question: "What services can a Home Health Aide legally provide in NJ?",
      answer:
        "In New Jersey, our certified HHAs at Kindcare Wellness, working diligently under a Registered Nurse’s supervision, are authorized to assist with: Personal hygiene (bathing, grooming, toileting); Dressing and undressing; Mobility/transfers (e.g., from bed to chair); Medication reminders (please note: HHAs are not permitted to administer medications); Light housekeeping and laundry; Meal preparation and feeding assistance; Monitoring and reporting changes in health or behavior. Note: HHAs are not allowed to perform medical procedures, administer injections, or make clinical assessments.",
    },
    {
      question: "Are your HHAs supervised?",
      answer:
        "Yes, indeed. All Home Health Aides at Kindcare Wellness are closely supervised by a Registered Nurse (RN) as mandated by the NJ Board of Nursing. Our supervisory visits are conducted at regular intervals to meticulously ensure the quality of care, adherence to personalized care plans, and complete client satisfaction.",
    },
    {
      question: "How often will the supervising nurse visit the home?",
      answer:
        "Per state regulations, a Kindcare Wellness Registered Nurse must conduct an in-home supervision visit: At least every 60 days; Whenever there is a change in the client’s condition; To update the plan of care or address concerns from the aide or family.",
    },
    {
      question: "Do you perform background checks on your HHAs?",
      answer:
        "Yes, thoroughly. All HHAs at Kindcare Wellness undergo: Rigorous criminal background checks; Comprehensive health screenings and TB testing; Detailed reference verification. This is in full compliance with the New Jersey Criminal History Record Background Check Act and other state requirements for home care agencies, ensuring the safety and trust of our clients.",
    },
    {
      question: "Can I choose a specific aide or request a change?",
      answer:
        "Absolutely. At Kindcare Wellness, we understand the importance of a good match. We do our utmost to match aides based on personality, cultural sensitivity, language, and client preference. If at any time you wish to request a different caregiver, we will accommodate your request without question, ensuring your comfort and satisfaction.",
    },
    {
      question: "Are your services covered by insurance or Medicaid?",
      answer:
        "Many HHA services provided by Kindcare Wellness are covered by: New Jersey Medicaid Managed Long-Term Services and Supports (MLTSS); Private Long-Term Care Insurance; Veterans Assistance Programs; Private Pay. Our knowledgeable staff can assist you in verifying your benefits and eligibility, making the process as smooth as possible.",
    },
    {
      question: "How do I start services with Kindcare Wellness?",
      answer:
        "Starting services with Kindcare Wellness is simple. Contact our compassionate care coordination team today to schedule a free in-home assessment. A Registered Nurse will visit to thoroughly evaluate your needs and collaboratively develop a personalized plan of care. From there, services can typically begin within just a few days, ensuring timely support.",
    },
    {
      question: "What are your hours of service?",
      answer:
        "Kindcare Wellness offers flexible scheduling with 24/7 availability, including nights, weekends, and holidays—all based on your unique client needs and service plan authorization, providing continuous and reliable care whenever you need it.",
    },
  ];

  // Type the 'index' parameter as number
  const handleToggle = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="bg-gradient-to-b from-[var(--lightgreen)] to-[var(--teal)] px-4 py-16 sm:px-8 md:py-28 lg:py-32">
      {/* Section Header */}
      <div className="mx-auto mb-16 max-w-4xl text-center">
        <span className="mb-3 inline-block rounded-full bg-[var(--primary)] px-4 py-2 text-lg font-semibold text-[var(--white)]">
          FAQs
        </span>
        <h2 className="text-4xl font-bold text-[var(--primary)] sm:text-5xl md:text-6xl">
          Frequently Asked Questions
        </h2>
        <p className="mx-auto mt-6 max-w-3xl text-xl text-[var(--primary)]">
          Find answers to common questions about our home health aide services
          in Northern New Jersey.
        </p>
      </div>

      {/* FAQ Accordion */}
      <div className="mx-auto max-w-4xl space-y-4">
        {faqs.map((faq, index) => (
          <div
            className={`rounded-lg bg-white shadow-lg transition-all duration-300 ease-in-out ${
              activeIndex === index ? "shadow-xl" : ""
            }`}
            key={index}
          >
            <button
              className="flex w-full items-center justify-between p-6 text-left text-lg font-semibold text-[var(--primary)] hover:bg-[var(--primary)] hover:text-white transition-colors duration-300 rounded-lg" // Added rounded-lg to button for consistency
              onClick={() => handleToggle(index)}
            >
              {faq.question}
              <span
                className={`text-2xl font-bold ml-4 transition-transform duration-300 ease-in-out ${
                  activeIndex === index ? "rotate-45" : ""
                }`}
              >
                {activeIndex === index ? "-" : "+"}
              </span>
            </button>
            <div
              className={`grid overflow-hidden transition-[grid-template-rows] duration-500 ease-in-out ${
                activeIndex === index
                  ? "grid-rows-[1fr] opacity-100"
                  : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden pb-6 pl-6 pr-6 pt-4">
                <p className="text-base leading-relaxed text-gray-700">
                  {faq.answer}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* CTA Section */}
      <div className="mx-auto mt-20 max-w-4xl rounded-2xl bg-white p-8 text-center shadow-2xl">
        <h3 className="text-2xl font-bold text-[var(--primary)] sm:text-3xl">
          Still Have Questions?
        </h3>
        <p className="mt-4 text-lg text-gray-700">
          Our friendly team at Kindcare Wellness is here to help. Reach out to
          us for personalized assistance.
        </p>
        <a
          href="/contact"
          className="mt-6 inline-block rounded-full bg-[var(--primary)] px-8 py-3 text-lg font-bold text-white transition-all hover:bg-[var(--secondary)] hover:shadow-lg"
        >
          Contact Kindcare Wellness
        </a>
      </div>
    </section>
  );
};

export default FAQComponent;