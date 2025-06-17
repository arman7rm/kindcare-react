import React, { useEffect } from 'react';
import aos from 'aos';
import 'aos/dist/aos.css';

// Placeholder for potential real images
// import complianceHeroImage from "../assets/ComplianceHero.png";
// import privacyImage from "../assets/PrivacyDoc.png";
// import ethicsSafetyImage from "../assets/SafetyFirst.png";

const LegalCompliance: React.FC = () => {
  return (
    <>
      {/* Compliance Section (Hero-like) */}
      <section
        className="flex flex-col bg-white py-12 px-4 sm:px-6 md:py-16 lg:flex-row lg:py-20 lg:px-10 xl:px-20"
        aria-labelledby="compliance-heading"
      >
        {/* Left content */}
        <div
          data-aos="fade-right"
          className="relative z-10 flex flex-col justify-center lg:w-1/2 xl:pr-10"
        >
          <h1
            id="compliance"
            className="mb-6 text-3xl font-extrabold leading-tight text-[var(--secondary)] sm:text-4xl md:text-5xl lg:text-4xl xl:text-5xl"
          >
            Our Unwavering Commitment to{" "}
            <span className="text-[var(--primary)]">Compliance</span>
          </h1>
          <p className="mb-8 text-base text-gray-700 sm:text-lg md:text-xl">
            At KindCare Wellness, our unwavering commitment to compliance forms
            the bedrock of our operations. We adhere strictly to all applicable
            federal, state, and local laws and regulations governing home health
            agencies. This dedication ensures we consistently provide the highest
            standard of care while protecting the rights and well-being of our
            clients. Our comprehensive compliance framework is regularly
            reviewed and updated to meet evolving healthcare standards and best
            practices.
          </p>
          <p className="pb-4 text-base text-gray-700 sm:text-lg md:text-xl">
            We believe that transparency and accountability are vital. Our team
            undergoes continuous training on regulatory requirements and internal
            policies, fostering a culture where compliance is integrated into
            every aspect of our service delivery.
          </p>
        </div>

        {/* Right image/illustration - Placeholder */}
        <div
          data-aos="fade-left"
          className="mt-8 flex h-64 items-center justify-center rounded-l-[25px] bg-gray-100 p-8 shadow-2xl sm:h-80 md:h-96 lg:mt-0 lg:h-auto lg:w-1/2"
        >
          {/* If using real image: */}
          {/* <img
            src={complianceHeroImage}
            alt="Compliance Standards Illustration"
            className="h-full w-full rounded-l-[25px] object-cover"
            loading="lazy"
          /> */}
          <div className="text-center text-[var(--primary)] text-xl font-semibold">
            <i className="fas fa-gavel text-6xl mb-4" aria-hidden="true"></i>
            <p className="text-2xl sm:text-3xl">Compliance Standards</p>
            <p className="text-lg sm:text-xl">Our Foundation of Trust</p>
          </div>
        </div>
      </section>

      {/* Privacy Notice Section */}
      <section
        className="flex flex-col rounded-tl-[25px] bg-[var(--primary)] pt-16 px-4 sm:px-6 md:pt-20 lg:flex-row lg:pt-24 lg:px-10 xl:px-20"
        aria-labelledby="privacy-notice"
      >
        {/* Left content */}
        <div
          data-aos="fade-right"
          className="flex flex-col justify-center lg:w-1/2 xl:pr-10"
        >
          <h2
            id="privacy-notice"
            className="mb-6 text-3xl font-extrabold leading-tight text-white sm:text-4xl md:text-5xl lg:text-4xl xl:text-5xl"
          >
            Privacy Notice for{" "}
            <span className="text-[var(--secondary)]">Clients</span>
          </h2>
          <p className="mt-5 mb-8 text-base text-white sm:text-lg md:text-xl">
            KindCare Wellness is deeply committed to safeguarding your privacy.
            This Privacy Notice outlines how we collect, use, disclose, transfer,
            and store your personal and health information. Your trust is
            paramount, and we handle your data with the utmost care and
            conﬁdentiality.
          </p>

          <h3 className="mb-4 text-xl font-semibold text-[var(--secondary)] sm:text-2xl">
            Information We Collect:
          </h3>
          <p className="mb-8 text-base text-white sm:text-lg md:text-xl">
            We collect information necessary to provide you with high-quality
            home health services, including your name, contact details, health
            status, medical history, and insurance information. We may also
            collect technical data from your device, such as your IP address, when
            you interact with our online services.
          </p>

          <h3 className="mb-4 text-xl font-semibold text-[var(--secondary)] sm:text-2xl">
            How We Use Your Information:
          </h3>
          <ul className="list-disc space-y-2 pl-5 mb-8 text-white sm:text-lg md:text-xl" aria-label="Ways we use your information">
            <li>Deliver personalized care and services.</li>
            <li>Manage your treatment plan and coordinate care with your healthcare providers.</li>
            <li>Process billing and insurance claims.</li>
            <li>Improve our services and internal operations.</li>
            <li>Comply with legal and regulatory obligations.</li>
            <li>Communicate important updates regarding your care.</li>
          </ul>

          <h3 className="mb-4 text-xl font-semibold text-[var(--secondary)] sm:text-2xl">
            Disclosure of Information:
          </h3>
          <p className="mb-8 text-base text-white sm:text-lg md:text-xl">
            We may disclose your information to healthcare providers involved in
            your care, family members or guardians with your consent, and
            third-party service providers who assist us in our operations (e.g.,
            billing services). All third parties are bound by strict
            confidentiality agreements. We will never sell your personal information.
          </p>

          <h3 className="mb-4 text-xl font-semibold text-[var(--secondary)] sm:text-2xl">
            Your Rights & Electronic Communications:
          </h3>
          <p className=" text-base text-white sm:text-lg md:text-xl lg:mb-16">
            You have the right to access your information, request corrections,
            and understand how your data is used. By using our services and
            providing your contact information, you consent to receive electronic
            communications from us, including emails and, with your explicit
            consent, text messages related to your care and our services. All
            electronic communications will comply with applicable laws and our
            privacy practices. Please contact us if you have any questions or
            concerns regarding your privacy.
          </p>
        </div>

        {/* Right image/illustration - Placeholder */}
        <div
          data-aos="fade-left"
          className="flex h-64 items-center justify-center p-8 sm:h-80 md:h-96 lg:mb-[-10%] lg:mt-0 lg:h-auto lg:w-1/2 lg:pl-10"
        >
          {/* If using real image: */}
          {/* <img
            src={privacyImage}
            alt="Privacy Notice Illustration"
            className="z-10 w-full rounded-[25px] object-cover shadow-2xl"
            loading="lazy"
          /> */}
          <div className="text-center text-[var(--secondary)] text-xl font-semibold">
            <i className="fas fa-user-shield text-6xl mb-4" aria-hidden="true"></i>
            <p className="text-2xl sm:text-3xl">Your Privacy,</p>
            <p className="text-lg sm:text-xl">Our Priority</p>
          </div>
        </div>
      </section>

      {/* HIPAA Section */}
      <section
        className="flex flex-col bg-white pt-24 pb-12 px-4 sm:px-6 md:pt-32 lg:flex-row lg:gap-10 lg:pt-20 lg:pb-16 xl:justify-center xl:gap-20 xl:px-20"
        aria-labelledby="hipaa-heading"
      >
        {/* Left content (for title) */}
        <div
          data-aos="fade-right"
          className="lg:w-1/3 xl:w-1/4 flex-shrink-0"
        >
          <h2
            id="hippa"
            className="mb-6 text-3xl font-extrabold leading-tight text-[var(--secondary)] sm:text-4xl md:text-5xl lg:text-4xl xl:text-5xl"
          >
            HIPAA: Protecting Your{" "}
            <span className="text-[var(--primary)]">Health Information</span>
          </h2>
        </div>

        {/* Right content (for text) */}
        <div
          data-aos="fade-left"
          className="mt-8 flex max-w-2xl flex-col lg:mt-0 lg:w-2/3 xl:w-3/4"
        >
          <p className="mb-6 text-base text-gray-700 sm:text-lg md:text-xl">
            KindCare Wellness fully complies with the **Health Insurance
            Portability and Accountability Act (HIPAA)**, a federal law that
            establishes national standards to protect sensitive patient health
            information from being disclosed without the patient's consent or
            knowledge.
          </p>
          <p className="mb-6 text-base text-gray-700 sm:text-lg md:text-xl">
            Our commitment to HIPAA means:
          </p>
          <ul className="list-disc space-y-3 pl-5 mb-8 text-gray-700 sm:text-lg md:text-xl" aria-label="KindCare Wellness HIPAA commitments">
            <li>
              **Strict Confidentiality:** We implement robust administrative, physical, and technical safeguards to ensure the confidentiality, integrity, and availability of all Protected Health Information (PHI).
            </li>
            <li>
              **Privacy Practices:** We maintain comprehensive privacy policies and procedures that govern how your health information is used and disclosed, and our staff receives regular training on these practices.
            </li>
            <li>
              **Patient Rights:** You have specific rights under HIPAA concerning your health information, including the right to access, request corrections, and receive notice of our privacy practices.
            </li>
            <li>
              **Secure Systems:** We utilize secure electronic health record systems and communication methods to protect your data from unauthorized access or breaches.
            </li>
            <li>
              **Accountability:** We have designated a Privacy Officer responsible for overseeing our HIPAA compliance and addressing any privacy concerns.
            </li>
          </ul>
          <p className="text-base text-gray-700 sm:text-lg md:text-xl">
            Your health information is personal, and we are dedicated to
            protecting it with the highest level of care and diligence.
          </p>
        </div>
      </section>

      {/* Ethics and Safety Section */}
      <section
        className=" flex flex-col rounded-tl-[25px] bg-[var(--primary)] pt-16 pb-12 px-4 sm:px-6 md:pt-20 lg:flex-row lg:pt-24 lg:pb-16 lg:px-10 xl:px-20"
        aria-labelledby="ethics-safety-heading"
      >
        {/* Left content */}
        <div
          data-aos="fade-right"
          className="flex flex-col justify-center lg:w-1/2 xl:pr-10"
        >
          <h2
            id="ethics-safety"
            className="mb-6 text-3xl font-extrabold leading-tight text-white sm:text-4xl md:text-5xl lg:text-4xl xl:text-5xl"
          >
            Ethics and Safety at{" "}
            <span className="text-[var(--secondary)]">KindCare Wellness</span>
          </h2>
          <p className="mt-5 mb-8 text-base text-white sm:text-lg md:text-xl">
            At KindCare Wellness, our operations are guided by a strong ethical
            compass and an unwavering commitment to safety. These principles are
            fundamental to providing compassionate, high-quality care that you can
            trust.
          </p>

          <h3 className="mb-4 text-xl font-semibold text-[var(--secondary)] sm:text-2xl">
            Our Ethical Principles:
          </h3>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 mb-8" role="list">
            <div className="rounded-[15px] bg-white/20 p-6 backdrop-blur-sm" role="listitem">
              <h4 className="mb-2 font-bold text-[var(--secondary)] text-lg">Patient Autonomy</h4>
              <p className="text-sm text-white">
                Respecting patients' rights to make their own decisions.
              </p>
            </div>
            <div className="rounded-[15px] bg-white/20 p-6 backdrop-blur-sm" role="listitem">
              <h4 className="mb-2 font-bold text-[var(--secondary)] text-lg">Beneficence</h4>
              <p className="text-sm text-white">
                Acting in the best interest of our patients for positive outcomes.
              </p>
            </div>
            <div className="rounded-[15px] bg-white/20 p-6 backdrop-blur-sm" role="listitem">
              <h4 className="mb-2 font-bold text-[var(--secondary)] text-lg">Non-Maleficence</h4>
              <p className="text-sm text-white">
                "First, do no harm" – preventing injury or adverse effects.
              </p>
            </div>
            <div className="rounded-[15px] bg-white/20 p-6 backdrop-blur-sm" role="listitem">
              <h4 className="mb-2 font-bold text-[var(--secondary)] text-lg">Justice</h4>
              <p className="text-sm text-white">
                Fair and equitable treatment for all, without discrimination.
              </p>
            </div>
          </div>

          <h3 className="mb-4 text-xl font-semibold text-[var(--secondary)] sm:text-2xl">
            Commitment to Safety:
          </h3>
          <ul className="list-disc space-y-3 pl-5 text-white sm:text-lg md:text-xl lg:mb-16" aria-label="KindCare Wellness safety commitments">
            <li>
              **Rigorous Caregiver Vetting** including comprehensive background checks and credential verification.
            </li>
            <li>
              **Continuous Training** in patient safety, infection control, and emergency procedures.
            </li>
            <li>
              **Personalized Care Plans** addressing specific safety considerations for each client's unique needs.
            </li>
            <li>
              **Quality Assurance** through regular supervisory visits and robust client feedback mechanisms.
            </li>
            <li>
              **Clear Emergency Preparedness** protocols ensuring timely and effective responses to any unforeseen circumstances.
            </li>
          </ul>
        </div>

        {/* Right image/illustration - Placeholder */}
        <div
          data-aos="fade-left"
          className=" flex h-64 items-center justify-center p-8 sm:h-80 md:h-96 lg:mb-[-10%] lg:mt-0 lg:h-auto lg:w-1/2 lg:pl-10"
        >
          {/* If using real image: */}
          {/* <img
            src={ethicsSafetyImage}
            alt="Ethics and Safety Illustration"
            className="z-10 w-full rounded-[25px] object-cover shadow-2xl"
            loading="lazy"
          /> */}
          <div className="text-center text-[var(--secondary)] text-xl font-semibold">
            <i className="fas fa-shield-alt text-6xl mb-4" aria-hidden="true"></i>
            <p className="text-2xl sm:text-3xl">Safety & Integrity</p>
            <p className="text-lg sm:text-xl">In Every Step</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default LegalCompliance;