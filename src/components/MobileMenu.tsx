import React, { useEffect } from "react";

const MobileMenu = () => {
  useEffect(() => {
    const mobileMenuButton = document.getElementById("mobile-menu-button");
    const mobileMenu = document.getElementById("mobile-menu");

    if (!mobileMenuButton || !mobileMenu) return;

    const toggleMenu = () => {
      const expanded =
        mobileMenuButton.getAttribute("aria-expanded") === "true";
      mobileMenuButton.setAttribute("aria-expanded", String(!expanded));
      mobileMenuButton.setAttribute(
        "aria-label",
        expanded ? "Menu" : "Close menu"
      );
      mobileMenu.classList.toggle("hidden");
      mobileMenu.setAttribute("aria-hidden", String(expanded));
    };

    mobileMenuButton.addEventListener("click", toggleMenu);

    // Dropdowns
    const dropdownButtons = document.querySelectorAll(".mobile-dropdown-btn");
    dropdownButtons.forEach((button) => {
      button.addEventListener("click", () => {
        const dropdownId = button.getAttribute("aria-controls");
        const dropdown = document.getElementById(dropdownId!);
        const icon = button.querySelector('span[aria-hidden="true"]');
        const expanded = button.getAttribute("aria-expanded") === "true";

        button.setAttribute("aria-expanded", String(!expanded));
        dropdown?.classList.toggle("hidden");
        icon?.classList.toggle("fa-chevron-down");
        icon?.classList.toggle("fa-chevron-up");
      });
    });

    // Close on outside click
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as Node;
      const isMenuButton =
        target === mobileMenuButton || mobileMenuButton.contains(target);
      const isMenuContent = mobileMenu.contains(target);

      if (!isMenuButton && !isMenuContent) {
        mobileMenuButton.setAttribute("aria-expanded", "false");
        mobileMenuButton.setAttribute("aria-label", "Menu");
        mobileMenu.classList.add("hidden");
        mobileMenu.setAttribute("aria-hidden", "true");

        document
          .querySelectorAll(".mobile-dropdown-content")
          .forEach((dropdown) => dropdown.classList.add("hidden"));

        dropdownButtons.forEach((btn) => {
          btn.setAttribute("aria-expanded", "false");
          const icon = btn.querySelector('span[aria-hidden="true"]');
          icon?.classList.remove("fa-chevron-up");
          icon?.classList.add("fa-chevron-down");
        });
      }
    };
    document.addEventListener("click", handleClickOutside);

    // Close on Escape
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        mobileMenuButton.setAttribute("aria-expanded", "false");
        mobileMenuButton.setAttribute("aria-label", "Menu");
        mobileMenu.classList.add("hidden");
        mobileMenu.setAttribute("aria-hidden", "true");
      }
    };
    document.addEventListener("keydown", handleKeyDown);

    // Focus trap
    const focusableElements =
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';
    const focusableContent =
      mobileMenu.querySelectorAll<HTMLElement>(focusableElements);
    const firstFocusable = focusableContent[0];
    const lastFocusable = focusableContent[focusableContent.length - 1];

    const trapFocus = (e: KeyboardEvent) => {
      if (e.key !== "Tab") return;

      if (e.shiftKey) {
        if (document.activeElement === firstFocusable) {
          e.preventDefault();
          lastFocusable.focus();
        }
      } else {
        if (document.activeElement === lastFocusable) {
          e.preventDefault();
          firstFocusable.focus();
        }
      }
    };

    mobileMenu.addEventListener("keydown", trapFocus);

    // Clean up
    return () => {
      mobileMenuButton.removeEventListener("click", toggleMenu);
      document.removeEventListener("click", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
      mobileMenu.removeEventListener("keydown", trapFocus);
    };
  }, []);

  return (
    <>
      <div className="grid grid-cols-3 bg-white p-4 lg:hidden">
        <div className="col-start-1"></div>
        <div className="col-start-2 flex items-center justify-center">
          <img
            src="./src/assets/kindcare.png"
            alt="KindCare Wellness Logo"
            className="h-30 max-w-full"
          />
        </div>
        <div className="col-start-3 flex items-center justify-end">
          <button
            id="mobile-menu-button"
            className="p-2 text-2xl text-[var(--primary)]"
            aria-label="Menu"
            aria-expanded="false"
            aria-controls="mobile-menu"
          >
            <span
              className="mobile-menu-btn fas fa-bars"
              aria-hidden="true"
            ></span>
          </button>
        </div>
      </div>

      {/* You should add the menu DOM that gets toggled here */}
      <nav id="mobile-menu" className="hidden bg-white p-4" aria-hidden="true">
        <div
          id="mobile-menu"
          className="hidden bg-white p-4 lg:hidden"
          aria-hidden="true"
        >
          <div className="mb-4 text-sm text-[var(--primary)]">
            <p>
              <strong>Hours:</strong> Mon-Fri | 9am-5pm
            </p>
            <p>
              <strong>Location:</strong> Jersey City, NJ 07306
            </p>
            <p>
              <strong>Phone:</strong>
              <a href="tel:+12012341566" className="hover:underline">
                (201) 234-1566
              </a>
            </p>
            <p>
              <strong>Email:</strong>
              <a href="mailto:support@kindcare.com" className="hover:underline">
                support@kindcare.com
              </a>
            </p>
          </div>

          <nav
            className="flex flex-col space-y-2"
            aria-label="Mobile navigation"
          >
            <a
              href="index.html"
              className="rounded-lg px-4 py-3 text-lg text-[var(--primary)] hover:bg-gray-100"
            >
              Home
            </a>

            <div className="relative">
              <button
                className="mobile-dropdown-btn flex w-full items-center justify-between rounded-lg px-4 py-3 text-left text-lg text-[var(--primary)] hover:bg-gray-100"
                aria-expanded="false"
                aria-controls="mobile-about-menu"
              >
                <span>About Us</span>
                <span
                  className="fas fa-chevron-down transition-transform duration-200"
                  aria-hidden="true"
                ></span>
              </button>
              <div
                id="mobile-about-menu"
                className="mobile-dropdown-content hidden pl-6"
              >
                <a
                  href="#autism"
                  className="block rounded-lg px-4 py-2 text-base text-[var(--primary)] hover:bg-gray-100"
                >
                  Why KindCare?
                </a>
                <a
                  href="#autism"
                  className="block rounded-lg px-4 py-2 text-base text-[var(--primary)] hover:bg-gray-100"
                >
                  Our Leadership
                </a>
                <a
                  href="#autism"
                  className="block rounded-lg px-4 py-2 text-base text-[var(--primary)] hover:bg-gray-100"
                >
                  Compliance & Ethics
                </a>
                <a
                  href="#autism"
                  className="block rounded-lg px-4 py-2 text-base text-[var(--primary)] hover:bg-gray-100"
                >
                  Donate
                </a>
              </div>
            </div>

            <div className="relative">
              <button
                className="mobile-dropdown-btn flex w-full items-center justify-between rounded-lg px-4 py-3 text-left text-lg text-[var(--primary)] hover:bg-gray-100"
                aria-expanded="false"
                aria-controls="mobile-services-menu"
              >
                <span>Services</span>
                <span
                  className="fas fa-chevron-down transition-transform duration-200"
                  aria-hidden="true"
                ></span>
              </button>
              <div
                id="mobile-services-menu"
                className="mobile-dropdown-content hidden pl-6"
              >
                <a
                  href="#autism"
                  className="block rounded-lg px-4 py-2 text-base text-[var(--primary)] hover:bg-gray-100"
                >
                  Hospice Care
                </a>
                <a
                  href="#autism"
                  className="block rounded-lg px-4 py-2 text-base text-[var(--primary)] hover:bg-gray-100"
                >
                  Palliative Care
                </a>
                <a
                  href="#autism"
                  className="block rounded-lg px-4 py-2 text-base text-[var(--primary)] hover:bg-gray-100"
                >
                  Home Health Care
                </a>
              </div>
            </div>

            <a
              href="#blog"
              className="rounded-lg px-4 py-3 text-lg text-[var(--primary)] hover:bg-gray-100"
            >
              Blog
            </a>
            <a
              href="#careers"
              className="rounded-lg px-4 py-3 text-lg text-[var(--primary)] hover:bg-gray-100"
            >
              Careers
            </a>
            <a
              href="#contact"
              className="rounded-lg px-4 py-3 text-lg text-[var(--primary)] hover:bg-gray-100"
            >
              Contact Us
            </a>
            <a
              href="#register"
              className="mt-2 rounded-lg bg-[var(--primary)] px-4 py-3 text-center text-white hover:bg-[var(--secondary)]"
            >
              Request Consultation
            </a>
          </nav>
        </div>
      </nav>
    </>
  );
};

export default MobileMenu;
