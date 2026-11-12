import { Link } from "react-router-dom";
import Wordmark from "./Wordmark";
import { ChevronDown } from "./icons";

const aboutLinks = [
  { to: "/about#whykindcare", label: "Why KindCare?" },
  { to: "/about#mission", label: "Our Mission" },
  { to: "/about#compliance", label: "Compliance & Ethics" },
];

const serviceLinks = [
  {
    to: "/services#community-based-supports",
    label: "Community Based Supports",
  },
  { to: "/services#individual-supports", label: "Individual Supports" },
  { to: "/services#respite", label: "Respite" },
  { to: "/services#service-area", label: "Who we serve" },
  { to: "/services#how-to-start", label: "How to start" },
];

const navItem =
  "rounded-full px-3.5 py-2 text-sm text-fg/80 transition-colors hover:bg-surface hover:text-fg";

const Dropdown = ({
  label,
  to,
  links,
}: {
  label: string;
  to: string;
  links: { to: string; label: string }[];
}) => (
  <div className="group relative">
    <Link to={to} className={`${navItem} inline-flex items-center gap-1.5`}>
      {label}
      <ChevronDown className="size-3 opacity-60 transition-transform group-focus-within:rotate-180 group-hover:rotate-180" />
    </Link>
    <div className="invisible absolute top-full left-0 z-50 pt-2 opacity-0 transition-all duration-200 group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100">
      <ul className="border-fg/10 min-w-56 rounded-2xl border bg-white p-2 shadow-[0_12px_32px_-12px_rgb(22_33_26/0.18)]">
        {links.map((l) => (
          <li key={l.to}>
            <Link
              to={l.to}
              className="text-fg/80 hover:bg-surface hover:text-fg block rounded-xl px-3 py-2.5 text-sm transition-colors"
            >
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

const Header = () => {
  return (
    <header className="border-fg/10 bg-bg/85 sticky top-0 z-50 hidden border-b backdrop-blur-md lg:block">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-6 px-10">
        <Wordmark />

        <nav className="flex items-center gap-1" aria-label="Main navigation">
          <Dropdown label="About" to="/about" links={aboutLinks} />
          <Dropdown label="Services" to="/services" links={serviceLinks} />
          <Link to="/careers" className={navItem}>
            Careers
          </Link>
          <Link to="/faq" className={navItem}>
            FAQ
          </Link>
          <Link to="/contact" className={navItem}>
            Contact
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <a
            href="tel:+15512215439"
            className="text-muted hover:text-fg hidden text-sm transition-colors xl:inline"
          >
            (551) 221-5439
          </a>
          <Link
            to="/#patientform"
            className="bg-fg text-bg hover:bg-leaf rounded-full px-5 py-2.5 text-sm font-medium transition-colors"
          >
            Get started
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
