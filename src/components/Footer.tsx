import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="mx-auto grid grid-cols-1 rounded-t-[35px] bg-white pt-6 pb-6 sm:p-8 md:grid-cols-12 md:p-12 xl:max-w-[1200px] [@media(max-width:449px)]:pl-5">
      <div className="mb-8 flex flex-col md:col-span-3 md:mb-0">
        <h2 className="mb-4 text-2xl text-[var(--primary)] sm:text-3xl">
          Follow Us:
        </h2>
        <div
          className="mb-6 flex space-x-4 sm:space-x-5"
          aria-label="Social media links"
        >
          <Link
            to="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex size-8 items-center justify-center rounded-full bg-[var(--secondary)] text-lg text-white hover:bg-[var(--primary)] focus:ring-2 focus:ring-[var(--primary)] focus:ring-offset-2 focus:outline-none sm:size-10 sm:text-xl"
            aria-label="Facebook"
          >
            <span className="fab fa-facebook-f" aria-hidden="true"></span>
          </Link>
          <Link
            to="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex size-8 items-center justify-center rounded-full bg-[var(--secondary)] text-lg text-white hover:bg-[var(--primary)] focus:ring-2 focus:ring-[var(--primary)] focus:ring-offset-2 focus:outline-none sm:size-10 sm:text-xl"
            aria-label="Instagram"
          >
            <span className="fab fa-instagram" aria-hidden="true"></span>
          </Link>
          <Link
            to="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex size-8 items-center justify-center rounded-full bg-[var(--secondary)] text-lg text-white hover:bg-[var(--primary)] focus:ring-2 focus:ring-[var(--primary)] focus:ring-offset-2 focus:outline-none sm:size-10 sm:text-xl"
            aria-label="LinkedIn"
          >
            <span className="fab fa-linkedin-in" aria-hidden="true"></span>
          </Link>
          <Link
            to="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex size-8 items-center justify-center rounded-full bg-[var(--secondary)] text-lg text-white hover:bg-[var(--primary)] focus:ring-2 focus:ring-[var(--primary)] focus:ring-offset-2 focus:outline-none sm:size-10 sm:text-xl"
            aria-label="Twitter"
          >
            <span className="fab fa-x-twitter" aria-hidden="true"></span>
          </Link>
          <Link
            to="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex size-8 items-center justify-center rounded-full bg-[var(--secondary)] text-lg text-white hover:bg-[var(--primary)] focus:ring-2 focus:ring-[var(--primary)] focus:ring-offset-2 focus:outline-none sm:size-10 sm:text-xl"
            aria-label="YouTube"
          >
            <span className="fab fa-youtube" aria-hidden="true"></span>
          </Link>
        </div>
        <div className="space-y-2 text-sm">
          <p>© KindCare, 2025. All Rights Reserved.</p>
          <p>
            KindCare is accredited by Community Health Accreditation Partner for
            meeting the industry's highest nationally recognized standards of
            care.
          </p>
        </div>
      </div>

      <div className="mb-6 flex flex-col space-y-2 md:col-span-2 md:col-start-7 md:mb-0">
        <h3 className="font-semibold text-[var(--primary)]">Quick Links</h3>
        <Link
          to="/about"
          className=" px-2 py-1 text-sm text-[var(--primary)] hover:text-[var(--secondary)]"
        >
          About Us
        </Link>
        <Link
          to="/services"
          className="px-2 py-1 text-sm text-[var(--primary)] hover:text-[var(--secondary)]"
        >
          Services
        </Link>
        {/* <Link
          to="#blog"
          className="px-2 py-1 text-sm text-[var(--primary)] hover:text-[var(--secondary)]"
        >
          Blog
        </Link> */}
        <Link
          to="/careers"
          className="px-2 py-1 text-sm text-[var(--primary)] hover:text-[var(--secondary)]"
        >
          Join Our Team
        </Link>
        <Link
          to="/#patientform"
          className="mt-2 w-max rounded-2xl bg-[var(--primary)] px-4 py-2 text-sm text-white hover:bg-[var(--secondary)] focus:ring-2 focus:ring-[var(--primary)] focus:ring-offset-2 focus:outline-none"
        >
          Request Consultation
        </Link>
      </div>

      <div className="mb-6 flex flex-col space-y-2 md:col-span-2 md:col-start-9 md:mb-0">
        <h3 className="font-semibold text-[var(--primary)]">Resources</h3>
        <Link
          to="/Contact"
          className="px-2 py-1 text-sm text-[var(--primary)] hover:text-[var(--secondary)]"
        >
          Contact Us
        </Link>
        <Link
          to="/Faq"
          className="px-2 py-1 text-sm text-[var(--primary)] hover:text-[var(--secondary)]"
        >
          FAQs
        </Link>
        <Link
          to="#referrals"
          className="px-2 py-1 text-sm text-[var(--primary)] hover:text-[var(--secondary)]"
        >
          Employees
        </Link>
        <Link
          to="/referrals"
          className="px-2 py-1 text-sm text-[var(--primary)] hover:text-[var(--secondary)]"
        >
          Referrals
        </Link>
        <Link
          to="/blog"
          className="px-2 py-1 text-sm text-[var(--primary)] hover:text-[var(--secondary)]"
        >
          How To Pay For Home Care
        </Link>
      </div>

      <div className="flex flex-col space-y-2 md:col-span-2 md:col-start-11">
        <h3 className="font-semibold text-[var(--primary)]">Legal</h3>
        <Link
          to="/legal#compliance"
          className="px-2 py-1 text-sm text-[var(--primary)] hover:text-[var(--secondary)]"
        >
          Compliance
        </Link>
        <Link
          to="/legal#privacy-notice"
          className="px-2 py-1 text-sm text-[var(--primary)] hover:text-[var(--secondary)]"
        >
          Privacy Notice for Clients
        </Link>
        <Link
          to="/legal#hippa"
          className="px-2 py-1 text-sm text-[var(--primary)] hover:text-[var(--secondary)]"
        >
          HIPAA
        </Link>
        <Link
          to="/legal#ethics-safety"
          className="px-2 py-1 text-sm text-[var(--primary)] hover:text-[var(--secondary)]"
        >
          Ethics and Safety
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
