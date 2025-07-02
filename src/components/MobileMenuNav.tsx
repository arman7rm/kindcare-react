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
          <Link to="/" onClick={closeMenu} className="px-4 py-3 text-lg">
            Home
          </Link>

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
              ref={(el) => {
                dropdownRefs.current["about"] = el;
              }}
              id="mobile-about-menu"
              className="mobile-dropdown-content hidden pl-6"
            >
              <Link
                to="/about#whykindcare"
                onClick={() => {
                  toggleDropdown("about");
                  closeMenu();
                }}
                className="block px-4 py-2"
              >
                Why KindCare?
              </Link>
              <Link
                to="/about#mission"
                onClick={() => {
                  toggleDropdown("about");
                  closeMenu();
                }}
                className="block px-4 py-2"
              >
                Our Mission
              </Link>
              <Link
                to="/about#compliance"
                onClick={() => {
                  toggleDropdown("about");
                  closeMenu();
                }}
                className="block px-4 py-2"
              >
                Compliance & Ethics
              </Link>
              {/* <Link href="#autism" className="block px-4 py-2">
                Donate
              </Link> */}
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
              ref={(el) => {
                dropdownRefs.current["services"] = el;
              }}
              id="mobile-services-menu"
              className="mobile-dropdown-content hidden pl-6"
            >
              <Link
                to="/services#hospice"
                onClick={() => {
                  toggleDropdown("services");
                  closeMenu();
                }}
                className="block px-4 py-2"
              >
                Hospice Care
              </Link>
              <Link
                to="/services#palliative"
                onClick={() => {
                  toggleDropdown("services");
                  closeMenu();
                }}
                className="block px-4 py-2"
              >
                Palliative Care
              </Link>
              <Link
                to="/services#homehealth"
                onClick={() => {
                  toggleDropdown("services");
                  closeMenu();
                }}
                className="block px-4 py-2"
              >
                Home Health Care
              </Link>
            </div>
          </div>

          {/* <a href="#blog" className="px-4 py-3 text-lg">
            Blog
          </a> */}
          <a href="#careers" className="px-4 py-3 text-lg">
            Careers
          </a>
          <a href="#contact" className="px-4 py-3 text-lg">
            Contact Us
          </a>
          <Link
            to="/#patientform"
            onClick={closeMenu}
            className="mt-2 bg-[var(--primary)] px-4 py-3 text-center text-white hover:bg-[var(--secondary)]"
          >
            Request Consultation
          </Link>
        </nav>
      </div>
    </>
  );
};

export default MobileMenuNav;
