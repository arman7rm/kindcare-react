import React, { useState, useEffect } from "react";
import aos from 'aos';
import 'aos/dist/aos.css';

// You might consider adding an image for the hero or contact section
// import contactHeroImage from "../assets/ContactHeroImage.png";

const Contact: React.FC = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionMessage, setSubmissionMessage] = useState("");
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    aos.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      delay: 200,
    });
    aos.refresh();
  }, []);

  // Placeholder for form submission (replace with your actual backend/Apps Script URL)
  async function handleSubmit(event: React.FormEvent<HTMLFormElement>): Promise<void> {
    event.preventDefault();
    setIsSubmitting(true);
    setSubmissionMessage("");
    setIsError(false);

    // In a real application, replace this with your backend API call or Google Apps Script URL
    const CONTACT_FORM_SUBMISSION_URL = 'YOUR_CONTACT_FORM_APPS_SCRIPT_WEB_APP_URL'; // <--- IMPORTANT: Replace this!

    try {
      const response = await fetch(CONTACT_FORM_SUBMISSION_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          fullName,
          email,
          phoneNumber,
          message,
          // You might want to add a timestamp or source here in your Apps Script
          // timestamp: new Date().toISOString(),
          // source: 'ContactUsPage',
        }),
      });

      const result = await response.json(); // Assuming your Apps Script returns JSON

      if (response.ok && result.result === 'success') {
        setSubmissionMessage("Thank you for your message! We've received your inquiry and will get back to you shortly.");
        setIsError(false);
        setFullName("");
        setEmail("");
        setPhoneNumber("");
        setMessage("");
      } else {
        setSubmissionMessage(`Submission failed: ${result.message || 'Server error'}. Please try again.`);
        setIsError(true);
      }
    } catch (error) {
      console.error("Contact form submission error:", error);
      setSubmissionMessage("An error occurred during submission. Please check your internet connection and try again.");
      setIsError(true);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <>
      {/* Hero Section */}
      <section className="flex flex-col bg-white lg:flex-row xl:mb-10 xl:gap-20">
        {/* Left content */}
        <div
          data-aos="fade-right"
          className="relative z-10 flex flex-col justify-center px-6 py-12 lg:w-150 lg:px-10 lg:py-16 xl:ml-50 xl:w-200 xl:py-20"
        >
          <h1 className="mb-6 w-70 text-[2rem] leading-tight font-extrabold text-[var(--secondary)] sm:text-[2.5rem] md:w-155 md:text-[2.5rem] lg:w-100 lg:text-[2.5rem]">
            Get In Touch With{" "}
            <span className="text-[var(--primary)]">KindCare Wellness</span>
          </h1>
          <p className="mb-8 text-base text-gray-700 sm:text-lg">
            We're here to answer your questions, provide support, and guide you
            through our compassionate home care services. Your well-being is our
            priority.
          </p>
          <h2 className="pb-10 text-xl font-semibold text-[var(--primary)] sm:text-2xl">
            Reach out today. We're ready to listen.
          </h2>
        </div>

        {/* Right image - Placeholder for visual consistency */}
        <div
          data-aos="fade-left"
          className="col-span-3 h-64 sm:h-80 md:h-[30rem] lg:h-auto flex items-center justify-center p-8 bg-gray-100 rounded-l-[25px] shadow-2xl"
        >
          {/* <img src={contactHeroImage} alt="Contact Us" className="h-full w-full rounded-l-[25px] object-cover" /> */}
          <div className="text-center text-[var(--primary)] text-xl font-semibold">
            <i className="fas fa-headset text-6xl mb-4" aria-hidden="true"></i>
            <p>Always Here To Help</p>
          </div>
        </div>
      </section>

      {/* Contact Details & Call Button Section */}
      <section className="mt-[-8%] flex flex-col rounded-tl-[25px] bg-[var(--primary)] py-16 px-4 sm:px-6 md:py-20 lg:flex-row lg:px-10 xl:px-20">
        <div
          data-aos="fade-right"
          className="w-full flex-col items-center justify-center p-4 text-center md:w-1/2 md:items-start md:pr-8 md:text-left lg:pr-12"
        >
          <h2 className="mb-6 text-3xl font-extrabold leading-tight text-white sm:text-4xl lg:text-5xl">
            Our <span className="text-[var(--secondary)]">Contact Details</span>
          </h2>
          <div className="space-y-6 text-white text-lg sm:text-xl">
            {/* Hours */}
            <div className="flex items-center">
              <i className="far fa-clock text-[var(--secondary)] w-8 text-center mr-4 text-2xl" aria-hidden="true"></i>
              <p>
                <strong className="text-[var(--lightgreen)]">Hours:</strong> Mon-Fri | 9am-5pm
              </p>
            </div>
            {/* Location */}
            <div className="flex items-center">
              <i className="fas fa-map-marker-alt text-[var(--secondary)] w-8 text-center mr-4 text-2xl" aria-hidden="true"></i>
              <p>
                <strong className="text-[var(--lightgreen)]">Location:</strong> 131 PALISADE AVE, Jersey City, NJ 07306
              </p>
            </div>
            {/* Phone */}
            <div className="flex items-center">
              <i className="fas fa-phone-alt text-[var(--secondary)] w-8 text-center mr-4 text-2xl" aria-hidden="true"></i>
              <p>
                <strong className="text-[var(--lightgreen)]">Phone:</strong>{" "}
                <a href="tel:+12012859722" className="hover:underline transition-colors duration-200 text-white">
                  (201) 285-9722
                </a>
              </p>
            </div>
            {/* Email */}
            <div className="flex items-center">
              <i className="fas fa-envelope text-[var(--secondary)] w-8 text-center mr-4 text-2xl" aria-hidden="true"></i>
              <p>
                <strong className="text-[var(--lightgreen)]">Email:</strong>{" "}
                <a href="mailto:support@kindcare.com" className="hover:underline transition-colors duration-200 text-white">
                  support@kindcare.com
                </a>
              </p>
            </div>
          </div>
          {/* Call Us Directly Button */}
          <a
            href="tel:+12012859722"
            data-aos="fade-up"
            className="mt-10 inline-block rounded-full bg-[var(--secondary)] px-8 py-4 text-lg font-bold text-[var(--primary)] shadow-lg transition-all duration-300 hover:bg-[var(--lightgreen)] hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-[var(--secondary)] focus:ring-offset-2"
          >
            <i className="fas fa-phone-volume mr-3" aria-hidden="true"></i> Call KindCare Now
          </a>
        </div>

        {/* Right content (Form Section) */}
        <div
          data-aos="fade-left"
          className="mt-16 w-full md:mt-0 md:w-1/2 md:pl-8 lg:pl-12"
        >
          <h2 className="mb-6 text-3xl font-extrabold leading-tight text-white sm:text-4xl lg:text-5xl">
            Send Us a <span className="text-[var(--secondary)]">Message</span>
          </h2>
          <p className="mb-8 text-base text-white sm:text-lg">
            Have a question or need assistance? Fill out the form below, and our
            team will get back to you promptly.
          </p>
          <form onSubmit={handleSubmit} className="w-full max-w-md space-y-6">
            <div className="flex flex-col">
              <label
                htmlFor="fullName"
                className="mb-2 text-sm font-semibold text-white"
              >
                Full Name
              </label>
              <input
                type="text"
                id="fullName"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="w-full rounded-md border border-gray-300 bg-white px-4 py-3 text-gray-800 shadow-sm focus:border-[var(--secondary)] focus:ring-[var(--secondary)] focus:ring-1 transition ease-in-out duration-150"
                required
                disabled={isSubmitting}
              />
            </div>

            <div className="flex flex-col">
              <label
                htmlFor="email"
                className="mb-2 text-sm font-semibold text-white"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-md border border-gray-300 bg-white px-4 py-3 text-gray-800 shadow-sm focus:border-[var(--secondary)] focus:ring-[var(--secondary)] focus:ring-1 transition ease-in-out duration-150"
                required
                disabled={isSubmitting}
              />
            </div>

            <div className="flex flex-col">
              <label
                htmlFor="phoneNumber"
                className="mb-2 text-sm font-semibold text-white"
              >
                Phone Number (Optional)
              </label>
              <input
                type="tel"
                id="phoneNumber"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                className="w-full rounded-md border border-gray-300 bg-white px-4 py-3 text-gray-800 shadow-sm focus:border-[var(--secondary)] focus:ring-[var(--secondary)] focus:ring-1 transition ease-in-out duration-150"
                disabled={isSubmitting}
              />
            </div>

            <div className="flex flex-col">
              <label
                htmlFor="message"
                className="mb-2 text-sm font-semibold text-white"
              >
                Your Message
              </label>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={5} // Provide a default height
                className="w-full rounded-md border border-gray-300 bg-white px-4 py-3 text-gray-800 shadow-sm focus:border-[var(--secondary)] focus:ring-[var(--secondary)] focus:ring-1 transition ease-in-out duration-150 resize-y"
                required
                disabled={isSubmitting}
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full rounded-full bg-[var(--secondary)] py-3 text-lg font-bold text-[var(--primary)] shadow-lg transition-all duration-300 hover:bg-[var(--lightgreen)] hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-[var(--secondary)] focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending Message...' : 'Send Message'}
            </button>

            {submissionMessage && (
              <p className={`mt-4 text-center ${isError ? 'text-red-300' : 'text-green-300'}`}>
                {submissionMessage}
              </p>
            )}
          </form>
        </div>
      </section>

      {/* Optional: Location Map/Address Section (if you want to add a map later) */}
      {/* <section className="bg-white py-16 px-4 sm:px-6 md:py-20 lg:px-10 xl:px-20">
        <h2 className="mb-8 text-3xl font-extrabold text-[var(--primary)] text-center sm:text-4xl lg:text-5xl">
          Find Our Office
        </h2>
        <div className="w-full h-80 bg-gray-200 rounded-[25px] flex items-center justify-center text-gray-500 text-xl">
          {/* Placeholder for Google Map embed or custom map component }
          Map Placeholder
        </div>
        <p className="mt-6 text-center text-gray-700 text-lg">
          Visit us during business hours or schedule an appointment.
        </p>
      </section> */}
    </>
  );
};

export default Contact;