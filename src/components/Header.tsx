import { Link, useNavigate } from "react-router-dom";
import kindCareLogo from "../assets/kindcare.png";

const Header = () => {
  const navigate = useNavigate();

  return (
    <header className="mx-auto hidden grid-cols-6 grid-rows-2 items-center rounded-t-[35px] bg-white py-4 lg:grid xl:max-w-[1200px]">
      <div className="col-start-1 row-span-2 flex items-center">
        <img
          src={kindCareLogo}
          alt="KindCare Wellness Logo"
          className="h-50 max-w-full md:h-30 lg:h-45"
        />
      </div>
      <address className="col-span-4 col-start-3 row-start-1 flex flex-wrap items-center justify-end gap-x-6 gap-y-2 pr-4 text-sm text-[var(--primary)] not-italic">
        <div className="flex items-center gap-1">
          <span className="text-[var(--secondary)]">
            <i className="fas fa-clock mr-1"></i>
          </span>
          <span className="font-semibold">Hours:</span> Mon-Fri | 9am-5pm
        </div>
        <div className="flex items-center gap-1">
          <span className="text-[var(--secondary)]">
            <i className="fas fa-map-marker-alt mr-1"></i>
          </span>
          <span className="font-semibold">Location:</span> 131 PALISADE AVE,
          Jersey City, NJ 07306
        </div>
        <div className="flex items-center gap-1">
          <span className="text-[var(--secondary)]">
            <i className="fas fa-phone-alt mr-1"></i>
          </span>
          <span className="font-semibold">Phone:</span>
          <a href="tel:+12012859722" className="hover:underline">
            (201) 285-9722
          </a>
        </div>
        <div className="flex items-center gap-1">
          <span className="text-[var(--secondary)]">
            <i className="fas fa-envelope mr-1"></i>
          </span>
          <span className="font-semibold">Email:</span>
          <a href="mailto:support@kindcare.com" className="hover:underline">
            support@kindcare.com
          </a>
        </div>
      </address>

      <nav
        className="col-span-5 col-start-2 row-start-2 hidden items-center justify-center space-x-4 px-4 lg:flex xl:space-x-10"
        aria-label="Main navigation"
      >
        <a
          href="/kindcare-react"
          className="px-2 py-2 text-lg text-[var(--primary)] hover:rounded-[15px] hover:bg-[var(--primary)] hover:text-white lg:text-xs xl:text-sm"
        >
          Home
        </a>
        <div className="group relative" role="none">
          <div className="flex flex-col">
            <button
              id="about-menu-button"
              className="about-us-btn flex items-center rounded-tl-[35px] rounded-tr-[35px] px-3 py-3 text-[var(--primary)] transition-colors duration-300 group-hover:bg-[var(--primary)] group-hover:text-white lg:text-xs xl:px-4 xl:py-4 xl:text-sm"
              aria-expanded="false"
              aria-controls="about-menu"
              role="menuitem"
              onClick={() => navigate("/about")}
            >
              <span>About Us</span>
              <span
                className="fas fa-angle-down px-2"
                aria-hidden="true"
              ></span>
            </button>
            <div
              id="about-menu"
              className="submenu absolute top-full left-0 z-50 mt-1 hidden w-max min-w-[20rem] rounded-br-[35px] rounded-bl-[35px] bg-[var(--primary)] px-6 py-6 text-white group-hover:block lg:text-xs"
              role="menu"
              aria-labelledby="about-menu-button"
            >
              <ul role="none">
                <li role="none">
                  <Link
                    to="/about#whykindcare"
                    className="block py-1 text-lg text-white hover:underline xl:text-xl"
                    role="menuitem"
                  >
                    Why KindCare?
                  </Link>
                </li>
                <li role="none">
                  <Link
                    to="/about#mission"
                    className="block py-1 text-lg text-white hover:underline xl:text-xl"
                    role="menuitem"
                  >
                    Our Mission
                  </Link>
                </li>
                <li role="none">
                  <Link
                    to="/about#compliance"
                    className="block py-1 text-lg text-white hover:underline xl:text-xl"
                    role="menuitem"
                  >
                    Compliance & Ethics
                  </Link>
                </li>
                {/* 
                
                <li role="none">
                  <a
                    href="#autism"
                    className="block py-1 text-lg text-white hover:underline xl:text-xl"
                    role="menuitem"
                  >
                    Donate
                  </a>
                </li> */}
              </ul>
            </div>
          </div>
        </div>
        <div className="group relative" role="none">
          <div className="flex flex-col">
            <button
              id="services-menu-button"
              className="about-us-btn flex items-center rounded-tl-[35px] rounded-tr-[35px] px-3 py-3 text-lg text-[var(--primary)] transition-colors duration-300 group-hover:bg-[var(--primary)] group-hover:text-white lg:text-xs xl:px-4 xl:py-4 xl:text-sm"
              aria-expanded="false"
              aria-controls="services-menu"
              role="menuitem"
              onClick={() => navigate("/Services")}
            >
              <span>Services</span>
              <span
                className="fas fa-angle-down px-2"
                aria-hidden="true"
              ></span>
            </button>
            <div
              id="services-menu"
              className="submenu absolute top-full left-0 z-50 mt-1 hidden w-max min-w-[20rem] rounded-br-[35px] rounded-bl-[35px] bg-[var(--primary)] px-6 py-6 text-white group-hover:block"
              role="menu"
              aria-labelledby="services-menu-button"
            >
              <ul role="none">
                <li role="none">
                  <Link
                    to="/services#palliative"
                    className="block py-1 text-lg text-white hover:underline xl:text-xl"
                    role="menuitem"
                  >
                    Hospice Care
                  </Link>
                </li>
                <li role="none">
                  <Link
                    to="/services#palliative"
                    className="block py-1 text-lg text-white hover:underline xl:text-xl"
                    role="menuitem"
                  >
                    Palliative Care
                  </Link>
                </li>
                <li role="none">
                  <Link
                    to="/services#homehealth"
                    className="block py-1 text-lg text-white hover:underline xl:text-xl"
                    role="menuitem"
                  >
                    Home Health Care
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>{" "}
        {/* <a
          href="#blog"
          className="px-2 py-2 text-lg text-[var(--primary)] hover:rounded-[15px] hover:bg-[var(--primary)] hover:text-white lg:text-xs xl:text-sm"
        >
          Blog
        </a> */}
        <a
          href="/careers"
          className="px-2 py-2 text-lg text-[var(--primary)] hover:rounded-[15px] hover:bg-[var(--primary)] hover:text-white lg:text-xs xl:text-sm"
        >
          Careers
        </a>
        <a
          href="/contact"
          className="px-2 py-2 text-lg text-[var(--primary)] hover:rounded-[15px] hover:bg-[var(--primary)] hover:text-white lg:text-xs xl:text-sm"
        >
          Contact Us
        </a>
        <a
          href="#register"
          className="rounded-2xl bg-[var(--primary)] px-4 py-2 text-sm text-white transition-colors hover:bg-[var(--secondary)] lg:text-xs xl:px-6 xl:py-3 xl:text-base"
        >
          Request Consultation
        </a>
      </nav>
    </header>
  );
};

export default Header;
