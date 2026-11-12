import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Wordmark from "./Wordmark";

type Section = "about" | "services" | null;

const sections: {
  id: Exclude<Section, null>;
  label: string;
  links: { to: string; label: string }[];
}[] = [
  {
    id: "about",
    label: "About",
    links: [
      { to: "/about", label: "Overview" },
      { to: "/about#whykindcare", label: "Why KindCare?" },
      { to: "/about#mission", label: "Our Mission" },
      { to: "/about#compliance", label: "Compliance & Ethics" },
    ],
  },
  {
    id: "services",
    label: "Services",
    links: [
      { to: "/services", label: "All services" },
      { to: "/services#community-based-supports", label: "Community Based Supports" },
      { to: "/services#individual-supports", label: "Individual Supports" },
      { to: "/services#respite", label: "Respite" },
      { to: "/services#service-area", label: "Who we serve" },
      { to: "/services#how-to-start", label: "How to start" },
    ],
  },
];

const directLinks = [
  { to: "/careers", label: "Careers" },
  { to: "/faq", label: "FAQ" },
  { to: "/contact", label: "Contact" },
];

const row =
  "flex w-full items-center justify-between border-b border-fg/10 py-4 text-left text-lg text-fg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-leaf";

const MobileMenuNav: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openSection, setOpenSection] = useState<Section>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  const closeMenu = () => {
    setIsMenuOpen(false);
    setOpenSection(null);
  };

  // Close on outside click and Escape.
  useEffect(() => {
    if (!isMenuOpen) return;

    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as Node;
      if (
        !menuRef.current?.contains(target) &&
        !menuButtonRef.current?.contains(target)
      ) {
        closeMenu();
      }
    };
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeMenu();
        menuButtonRef.current?.focus();
      }
    };

    document.addEventListener("click", handleClickOutside);
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("click", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isMenuOpen]);

  // Keep the page from scrolling behind the open menu.
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
    <div className="border-b border-fg/10 bg-bg/90 backdrop-blur-md">
      <div className="flex h-16 items-center justify-between px-5">
        <Wordmark onClick={closeMenu} />
        <button
          ref={menuButtonRef}
          onClick={() => setIsMenuOpen((open) => !open)}
          className="grid size-10 place-items-center rounded-full border border-fg/15 text-fg transition-colors hover:border-fg/40"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
        >
          <span
            className={`fas ${isMenuOpen ? "fa-xmark" : "fa-bars"} text-sm`}
            aria-hidden="true"
          />
        </button>
      </div>

      <div
        id="mobile-menu"
        ref={menuRef}
        hidden={!isMenuOpen}
        className="max-h-[calc(100svh-4rem)] overflow-y-auto px-5 pb-8"
      >
        <nav aria-label="Mobile navigation">
          <Link to="/" onClick={closeMenu} className={row}>
            Home
          </Link>

          {sections.map((s) => {
            const open = openSection === s.id;
            return (
              <div key={s.id}>
                <button
                  className={row}
                  aria-expanded={open}
                  aria-controls={`mobile-${s.id}-menu`}
                  onClick={() => setOpenSection(open ? null : s.id)}
                >
                  {s.label}
                  <span
                    className={`fas fa-chevron-down text-xs text-muted transition-transform ${open ? "rotate-180" : ""}`}
                    aria-hidden="true"
                  />
                </button>
                <div
                  id={`mobile-${s.id}-menu`}
                  hidden={!open}
                  className="border-b border-fg/10 py-2 pl-4"
                >
                  {s.links.map((l) => (
                    <Link
                      key={l.to}
                      to={l.to}
                      onClick={closeMenu}
                      className="block py-2 text-base text-muted hover:text-fg"
                    >
                      {l.label}
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}

          {directLinks.map((l) => (
            <Link key={l.to} to={l.to} onClick={closeMenu} className={row}>
              {l.label}
            </Link>
          ))}

          <Link
            to="/#patientform"
            onClick={closeMenu}
            className="mt-8 block rounded-full bg-fg px-5 py-3.5 text-center text-base font-medium text-bg transition-colors hover:bg-leaf"
          >
            Families: get started
          </Link>
        </nav>

        <address className="mt-8 space-y-1.5 text-sm text-muted not-italic">
          <p>131 Palisade Ave, Jersey City, NJ 07306</p>
          <p>Mon–Fri, 9am–5pm</p>
          <p>
            <a href="tel:+15512215439" className="text-fg hover:text-leaf">
              (551) 221-5439
            </a>
            <span className="mx-2 text-fg/20">/</span>
            <a
              href="mailto:info@meetkindcare.com"
              className="text-fg hover:text-leaf"
            >
              info@meetkindcare.com
            </a>
          </p>
        </address>
      </div>
    </div>
  );
};

export default MobileMenuNav;
