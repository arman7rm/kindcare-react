import React, { useEffect, useRef, useState } from "react";
import MobileMenuBtn from "./MobileMenuBtn";
import { Link } from "react-router-dom";

const MobileMenuNav: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRefs = useRef<{ [key: string]: HTMLButtonElement | null }>({});
  const dropdownRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});
  const menuButtonRef = useRef<HTMLButtonElement | null>(null);

  const toggleDropdown = (id: string) => {
    const dropdown = dropdownRefs.current[id];
    const button = buttonRefs.current[id];
    if (!dropdown || !button) return;

    const isExpanded = button.getAttribute("aria-expanded") === "true";
    button.setAttribute("aria-expanded", (!isExpanded).toString());
    dropdown.classList.toggle("hidden");

    const icon = button.querySelector('span[aria-hidden="true"]');
    if (icon) {
      icon.classList.toggle("fa-chevron-down");
      icon.classList.toggle("fa-chevron-up");
    }
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    if (menuRef.current) {
      menuRef.current.setAttribute("aria-hidden", "true");

      // Reset dropdowns
      Object.values(dropdownRefs.current).forEach((dropdown) =>
        dropdown?.classList.add("hidden"),
      );

      Object.values(buttonRefs.current).forEach((btn) => {
        btn?.setAttribute("aria-expanded", "false");
        const icon = btn?.querySelector('span[aria-hidden="true"]');
        icon?.classList.remove("fa-chevron-up");
        icon?.classList.add("fa-chevron-down");
      });
    }
  };

  // Close on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as Node;
      if (
        menuRef.current &&
        !menuRef.current.contains(target) &&
        !menuButtonRef.current?.contains(target)
      ) {
        closeMenu();
      }
    };

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeMenu();
      }
    };

    // 👇 Delay listener registration to avoid immediate close on open
    const timeoutId = setTimeout(() => {
      document.addEventListener("click", handleClickOutside);
    }, 0);

    document.addEventListener("keydown", handleEscape);

    return () => {
      clearTimeout(timeoutId);
      document.removeEventListener("click", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  const handleToggle = () => {
    setIsMenuOpen((prev) => {
      const next = !prev;
      return next;
    });
  };

  // Focus trap
  useEffect(() => {
    const handleTab = (e: KeyboardEvent) => {
      if (!isMenuOpen || !menuRef.current) return;

      const focusableElements = menuRef.current.querySelectorAll<HTMLElement>(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
      );

      const first = focusableElements[0];
      const last = focusableElements[focusableElements.length - 1];

      if (e.key === "Tab") {
        if (e.shiftKey) {
          if (document.activeElement === first) {
            e.preventDefault();
            last.focus();
          }
        } else {
          if (document.activeElement === last) {
            e.preventDefault();
            first.focus();
          }
        }
      }
    };

    if (menuRef.current) {
      menuRef.current.addEventListener("keydown", handleTab);
    }

    return () => {
      menuRef.current?.removeEventListener("keydown", handleTab);
    };
  }, [isMenuOpen]);

  return (
    <>
      <MobileMenuBtn
        onToggle={handleToggle}
        isExpanded={isMenuOpen}
        buttonRef={menuButtonRef}
      />

      <div
        id="mobile-menu"
        ref={menuRef}
        className={`${isMenuOpen ? "" : "hidden"} bg-white p-4 lg:hidden`}
        aria-hidden={!isMenuOpen}
      >
        {/* Contact Info */}
        <div className="mb-8 border-gray-200 pb-6">
          <div className="space-y-3">
            {/* Hours */}
            <div className="flex items-center text-base text-gray-700">
              <i className="far fa-clock mr-3 w-6 text-center text-[var(--secondary)]"></i>{" "}
              {/* Clock icon */}
              <p>
                <strong className="text-[var(--primary)]">Hours:</strong>{" "}
                Mon-Fri | 9am-5pm
              </p>
            </div>
            {/* Location */}
            <div className="flex items-center text-base text-gray-700">
              <i className="fas fa-map-marker-alt mr-3 w-6 text-center text-[var(--secondary)]"></i>{" "}
              {/* Location icon */}
              <p>
                <strong className="text-[var(--primary)]">Location:</strong>{" "}
                Jersey City, NJ 07306
              </p>
            </div>
            {/* Phone */}
            <div className="flex items-center text-base">
              <i className="fas fa-phone-alt mr-3 w-6 text-center text-[var(--secondary)]"></i>{" "}
              {/* Phone icon */}
              <a
                href="tel:+12012341566"
                className="text-[var(--primary)] transition-colors duration-200 hover:text-[var(--secondary)] hover:underline"
              >
                <strong className="text-[var(--primary)]">Phone:</strong> (201)
                234-1566
              </a>
            </div>
            {/* Email */}
            <div className="flex items-center text-base">
              <i className="fas fa-envelope mr-3 w-6 text-center text-[var(--secondary)]"></i>{" "}
              {/* Email icon */}
              <a
                href="mailto:support@kindcare.com"
                className="text-[var(--primary)] transition-colors duration-200 hover:text-[var(--secondary)] hover:underline"
              >
                <strong className="text-[var(--primary)]">Email:</strong>{" "}
                support@kindcare.com
              </a>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex flex-col space-y-1" aria-label="Mobile navigation">
          {/* Main Navigation Links */}
          <Link
            to="/"
            className="block rounded-lg px-4 py-3 text-lg font-semibold text-[var(--primary)] transition-all duration-200 hover:bg-gray-100 hover:text-[var(--secondary)] focus:ring-2 focus:ring-[var(--primary)] focus:outline-none"
            onClick={closeMenu}
          >
            Home
          </Link>

          {/* About Us Dropdown */}
          <div className="relative">
            <button
              ref={(el) => {
                buttonRefs.current["about"] = el;
              }}
              className="mobile-dropdown-btn flex w-full items-center justify-between rounded-lg px-4 py-3 text-left text-lg font-semibold text-[var(--primary)] transition-all duration-200 hover:bg-gray-100 hover:text-[var(--secondary)] focus:ring-2 focus:ring-[var(--primary)] focus:outline-none"
              aria-expanded="false"
              aria-controls="mobile-about-menu"
              onClick={() => toggleDropdown("about")}
            >
              <span>About Us</span>
              <span
                className="fas fa-chevron-down text-sm"
                aria-hidden="true"
              ></span>
            </button>
            <div
              id="mobile-about-menu"
              ref={(el) => {
                dropdownRefs.current["about"] = el;
              }}
              className="mobile-dropdown-content hidden flex-col space-y-1 rounded-b-lg bg-gray-50 pt-1 pb-2 pl-8 shadow-inner"
            >
              <Link
                to="/about#whykindcare"
                onClick={() => {
                  toggleDropdown("about");
                  closeMenu();
                }}
                className="block rounded-md px-4 py-2 text-base text-gray-700 transition-colors duration-150 hover:bg-gray-200 hover:text-[var(--secondary)] focus:ring-1 focus:ring-[var(--primary)] focus:outline-none"
              >
                Why KindCare?
              </Link>
              <Link
                to="/about#mission"
                onClick={() => {
                  toggleDropdown("about");
                  closeMenu();
                }}
                className="block rounded-md px-4 py-2 text-base text-gray-700 transition-colors duration-150 hover:bg-gray-200 hover:text-[var(--secondary)] focus:ring-1 focus:ring-[var(--primary)] focus:outline-none"
              >
                Our Mission
              </Link>
              <Link
                to="/about#compliance"
                onClick={() => {
                  toggleDropdown("about");
                  closeMenu();
                }}
                className="block rounded-md px-4 py-2 text-base text-gray-700 transition-colors duration-150 hover:bg-gray-200 hover:text-[var(--secondary)] focus:ring-1 focus:ring-[var(--primary)] focus:outline-none"
              >
                Compliance & Ethics
              </Link>
              {/* Assuming this is an internal link. If external, use <a> */}
              <Link
                to="/donate"
                onClick={closeMenu}
                className="block rounded-md px-4 py-2 text-base text-gray-700 transition-colors duration-150 hover:bg-gray-200 hover:text-[var(--secondary)] focus:ring-1 focus:ring-[var(--primary)] focus:outline-none"
              >
                Donate
              </Link>
            </div>
          </div>

          {/* Services Dropdown */}
          <div className="relative">
            <button
              ref={(el) => {
                buttonRefs.current["services"] = el;
              }}
              className="mobile-dropdown-btn flex w-full items-center justify-between rounded-lg px-4 py-3 text-left text-lg font-semibold text-[var(--primary)] transition-all duration-200 hover:bg-gray-100 hover:text-[var(--secondary)] focus:ring-2 focus:ring-[var(--primary)] focus:outline-none"
              aria-expanded="false"
              aria-controls="mobile-services-menu"
              onClick={() => toggleDropdown("services")}
            >
              <span>Services</span>
              <span
                className="fas fa-chevron-down text-sm"
                aria-hidden="true"
              ></span>
            </button>
            <div
              id="mobile-services-menu"
              ref={(el) => {
                dropdownRefs.current["services"] = el;
              }}
              className="mobile-dropdown-content hidden flex-col space-y-1 rounded-b-lg bg-gray-50 pt-1 pb-2 pl-8 shadow-inner"
            >
              <Link
                to="/services#hospice"
                onClick={() => {
                  toggleDropdown("services");
                  closeMenu();
                }}
                className="block rounded-md px-4 py-2 text-base text-gray-700 transition-colors duration-150 hover:bg-gray-200 hover:text-[var(--secondary)] focus:ring-1 focus:ring-[var(--primary)] focus:outline-none"
              >
                Hospice Care
              </Link>
              <Link
                to="/services#palliative"
                onClick={() => {
                  toggleDropdown("services");
                  closeMenu();
                }}
                className="block rounded-md px-4 py-2 text-base text-gray-700 transition-colors duration-150 hover:bg-gray-200 hover:text-[var(--secondary)] focus:ring-1 focus:ring-[var(--primary)] focus:outline-none"
              >
                Palliative Care
              </Link>
              <Link
                to="/services#homehealth"
                onClick={() => {
                  toggleDropdown("services");
                  closeMenu();
                }}
                className="block rounded-md px-4 py-2 text-base text-gray-700 transition-colors duration-150 hover:bg-gray-200 hover:text-[var(--secondary)] focus:ring-1 focus:ring-[var(--primary)] focus:outline-none"
              >
                Home Health Care
              </Link>
            </div>
          </div>

          {/* Other direct links (converted to Link where appropriate) */}
          <Link
            to="/careers"
            onClick={closeMenu}
            className="block rounded-lg px-4 py-3 text-lg font-semibold text-[var(--primary)] transition-all duration-200 hover:bg-gray-100 hover:text-[var(--secondary)] focus:ring-2 focus:ring-[var(--primary)] focus:outline-none"
          >
            Careers
          </Link>
          <Link
            to="/contact"
            onClick={closeMenu}
            className="block rounded-lg px-4 py-3 text-lg font-semibold text-[var(--primary)] transition-all duration-200 hover:bg-gray-100 hover:text-[var(--secondary)] focus:ring-2 focus:ring-[var(--primary)] focus:outline-none"
          >
            Contact Us
          </Link>

          {/* Request Consultation Button Link */}
          <Link
            to="/#patientform"
            onClick={closeMenu}
            className="mt-6 block w-full rounded-full bg-[var(--primary)] px-5 py-3 text-center text-lg font-bold text-white shadow-lg transition-all duration-300 hover:bg-[var(--secondary)] focus:ring-2 focus:ring-[var(--primary)] focus:ring-offset-2 focus:outline-none"
          >
            Request Consultation
          </Link>
        </nav>
      </div>
    </>
  );
};

export default MobileMenuNav;
