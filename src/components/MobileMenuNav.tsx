import React, { useEffect, useRef, useState } from "react";
import MobileMenuBtn from "./MobileMenuBtn";

const MobileMenuNav: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRefs = useRef<{ [key: string]: HTMLButtonElement | null }>({});
  const dropdownRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

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
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        closeMenu();
      }
    };

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeMenu();
      }
    };

    document.addEventListener("click", handleClickOutside);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("click", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

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
        onToggle={() => setIsMenuOpen((prev) => !prev)}
        isExpanded={isMenuOpen}
      />

      <div
        id="mobile-menu"
        ref={menuRef}
        className={`${isMenuOpen ? "" : "hidden"} bg-white p-4 lg:hidden`}
        aria-hidden={!isMenuOpen}
      >
        {/* Contact Info */}
        <div className="mb-4 text-sm text-[var(--primary)]">
          <p>
            <strong>Hours:</strong> Mon-Fri | 9am-5pm
          </p>
          <p>
            <strong>Location:</strong> Jersey City, NJ 07306
          </p>
          <p>
            <strong>Phone:</strong>{" "}
            <a href="tel:+12012341566">(201) 234-1566</a>
          </p>
          <p>
            <strong>Email:</strong>{" "}
            <a href="mailto:support@kindcare.com">support@kindcare.com</a>
          </p>
        </div>

        {/* Navigation */}
        <nav className="flex flex-col space-y-2" aria-label="Mobile navigation">
          <a href="index.html" className="px-4 py-3 text-lg">
            Home
          </a>

          {/* About Us Dropdown */}
          <div className="relative">
            <button
              ref={(el) => {
                buttonRefs.current["about"] = el;
              }}
              className="mobile-dropdown-btn flex w-full justify-between px-4 py-3 text-left text-lg"
              aria-expanded="false"
              aria-controls="mobile-about-menu"
              onClick={() => toggleDropdown("about")}
            >
              <span>About Us</span>
              <span className="fas fa-chevron-down" aria-hidden="true"></span>
            </button>
            <div
              id="mobile-about-menu"
              className="mobile-dropdown-content hidden pl-6"
            >
              <a href="#autism" className="block px-4 py-2">
                Why KindCare?
              </a>
              <a href="#autism" className="block px-4 py-2">
                Our Leadership
              </a>
              <a href="#autism" className="block px-4 py-2">
                Compliance & Ethics
              </a>
              <a href="#autism" className="block px-4 py-2">
                Donate
              </a>
            </div>
          </div>

          {/* Services Dropdown */}
          <div className="relative">
            <button
              ref={(el) => {
                buttonRefs.current["services"] = el;
              }}
              className="mobile-dropdown-btn flex w-full justify-between px-4 py-3 text-left text-lg"
              aria-expanded="false"
              aria-controls="mobile-services-menu"
              onClick={() => toggleDropdown("services")}
            >
              <span>Services</span>
              <span className="fas fa-chevron-down" aria-hidden="true"></span>
            </button>
            <div
              id="mobile-services-menu"
              className="mobile-dropdown-content hidden pl-6"
            >
              <a href="#autism" className="block px-4 py-2">
                Hospice Care
              </a>
              <a href="#autism" className="block px-4 py-2">
                Palliative Care
              </a>
              <a href="#autism" className="block px-4 py-2">
                Home Health Care
              </a>
            </div>
          </div>

          <a href="#blog" className="px-4 py-3 text-lg">
            Blog
          </a>
          <a href="#careers" className="px-4 py-3 text-lg">
            Careers
          </a>
          <a href="#contact" className="px-4 py-3 text-lg">
            Contact Us
          </a>
          <a
            href="#register"
            className="mt-2 bg-[var(--primary)] px-4 py-3 text-center text-white hover:bg-[var(--secondary)]"
          >
            Request Consultation
          </a>
        </nav>
      </div>
    </>
  );
};

export default MobileMenuNav;
