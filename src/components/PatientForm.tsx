import { useState, useEffect } from "react";
import aos from 'aos';
import 'aos/dist/aos.css';

const PatientForm: React.FC = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [location, setLocation] = useState(""); // <-- NEW STATE FOR LOCATION
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

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>): Promise<void> {
    event.preventDefault();
    setIsSubmitting(true);
    setSubmissionMessage("");
    setIsError(false);

    try {
      const response = await fetch('https://script.google.com/macros/s/AKfycby-mg_DatRIyJHaey32AyJdWQv-TECDfTBBiK-VH7Ij4qKAFzlg56jBgp9iy-LyOaOd/exec', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstName,
          lastName,
          phoneNumber,
          email,
          location, 
        }),
      });

      const result = await response.json();

      if (response.ok && result.result === 'success') {
        setSubmissionMessage("Thank you for your interest! Your information has been sent, and a link to the application form will be sent to your email shortly.");
        setIsError(false);
        // Reset form fields only on successful submission
        setFirstName("");
        setLastName("");
        setPhoneNumber("");
        setEmail("");
        setLocation(""); // <-- RESET LOCATION
      } else {
        setSubmissionMessage(`Submission failed: ${result.message || 'Server error'}. Please try again.`);
        setIsError(true);
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmissionMessage("An error occurred during submission. Please check your internet connection and try again.");
      setIsError(true);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section
      className="flex min-h-[50vh] items-center justify-center bg-[var(--primary)] py-16 px-4 sm:px-6 lg:px-8"
      aria-labelledby="apply-now-heading"
    >
      <div
        className="flex w-full max-w-6xl flex-col items-center justify-center rounded-[25px] bg-white p-6 shadow-2xl md:flex-row md:p-10 lg:p-16"
        data-aos="fade-up"
      >
        {/* Left Section: Information Text */}
        <div className="flex w-full flex-col items-center justify-center p-4 text-center md:w-1/2 md:items-start md:pr-8 md:text-left lg:pr-12">
          <div data-aos="fade-right" data-aos-delay="300" className="mb-6">
            <i className="fas fa-file-alt text-6xl text-[var(--secondary)] mb-4" aria-hidden="true"></i>
          </div>
          <h1
            id="apply-now-heading"
            className="mb-4 text-3xl font-extrabold text-[var(--primary)] sm:text-4xl lg:text-5xl"
          >
            Apply <span className="text-[var(--secondary)]">Now</span>
          </h1>
          <p className="text-base text-gray-700 sm:text-lg lg:text-xl leading-relaxed">
            Please provide your details below. Once submitted, you will receive
            a direct link to our comprehensive application form sent to your
            email address. We look forward to connecting with you!
          </p>
        </div>

        {/* Right Section: Patient Form */}
        <div className="mt-10 flex w-full flex-col items-center justify-center md:mt-0 md:w-1/2 md:pl-8 lg:pl-12">
          <form onSubmit={handleSubmit} className="w-full max-w-md space-y-6">
            <div className="flex flex-col gap-6 sm:flex-row">
              <div className="flex flex-1 flex-col">
                <label
                  htmlFor="firstName"
                  className="mb-2 text-sm font-semibold text-gray-700"
                >
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="w-full rounded-md border border-gray-300 bg-gray-50 px-4 py-3 text-gray-800 shadow-sm focus:border-[var(--secondary)] focus:ring-[var(--secondary)] focus:ring-1 transition ease-in-out duration-150"
                  required
                  disabled={isSubmitting}
                />
              </div>
              <div className="flex flex-1 flex-col">
                <label
                  htmlFor="lastName"
                  className="mb-2 text-sm font-semibold text-gray-700"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  className="w-full rounded-md border border-gray-300 bg-gray-50 px-4 py-3 text-gray-800 shadow-sm focus:border-[var(--secondary)] focus:ring-[var(--secondary)] focus:ring-1 transition ease-in-out duration-150"
                  required
                  disabled={isSubmitting}
                />
              </div>
            </div>

            <div className="flex flex-col">
              <label
                htmlFor="email"
                className="mb-2 text-sm font-semibold text-gray-700"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-md border border-gray-300 bg-gray-50 px-4 py-3 text-gray-800 shadow-sm focus:border-[var(--secondary)] focus:ring-[var(--secondary)] focus:ring-1 transition ease-in-out duration-150"
                required
                disabled={isSubmitting}
              />
            </div>

            <div className="flex flex-col">
              <label
                htmlFor="phoneNumber"
                className="mb-2 text-sm font-semibold text-gray-700"
              >
                Phone Number
              </label>
              <input
                type="tel"
                id="phoneNumber"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                className="w-full rounded-md border border-gray-300 bg-gray-50 px-4 py-3 text-gray-800 shadow-sm focus:border-[var(--secondary)] focus:ring-[var(--secondary)] focus:ring-1 transition ease-in-out duration-150"
                required
                disabled={isSubmitting}
              />
            </div>

            {/* NEW: Location Input Field */}
            <div className="flex flex-col">
              <label
                htmlFor="location"
                className="mb-2 text-sm font-semibold text-gray-700"
              >
                Your Location (City, State)
              </label>
              <input
                type="text"
                id="location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full rounded-md border border-gray-300 bg-gray-50 px-4 py-3 text-gray-800 shadow-sm focus:border-[var(--secondary)] focus:ring-[var(--secondary)] focus:ring-1 transition ease-in-out duration-150"
                required // Consider if this should be required based on your needs
                disabled={isSubmitting}
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-full bg-[var(--primary)] py-3 text-lg font-bold text-white shadow-lg transition-all duration-300 hover:bg-[var(--secondary)] hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Submitting...' : 'Submit Request'}
            </button>

            {submissionMessage && (
              <p className={`mt-4 text-center ${isError ? 'text-red-600' : 'text-green-600'}`}>
                {submissionMessage}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default PatientForm;