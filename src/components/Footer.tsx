import { Link } from "react-router-dom";
import Wordmark from "./Wordmark";
import DotField from "./motion/DotField";

const columns = [
  {
    heading: "Company",
    links: [
      { to: "/about", label: "About us" },
      { to: "/services", label: "Services" },
      { to: "/careers", label: "Join our team" },
      { to: "/faq", label: "FAQs" },
      { to: "/services#referrals", label: "Referrals" },
      { to: "/contact", label: "Contact" },
    ],
  },
  {
    heading: "Legal",
    links: [
      { to: "/legal#compliance", label: "Compliance" },
      { to: "/legal#privacy-notice", label: "Privacy notice" },
      { to: "/legal#hippa", label: "HIPAA" },
      { to: "/legal#ethics-safety", label: "Ethics and safety" },
    ],
  },
];

const Footer = () => {
  return (
    <footer className="bg-forest text-bg relative overflow-hidden [@media(min-width:1024px)_and_(min-height:820px)]:sticky [@media(min-width:1024px)_and_(min-height:820px)]:bottom-0">
      <div className="absolute inset-x-0 bottom-0 h-2/3 opacity-40">
        <DotField fadeFrom="bottom" spacing={20} maxRadius={2} />
      </div>
      <div className="relative mx-auto max-w-7xl px-5 pt-16 md:px-8 lg:px-10 lg:pt-24">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Wordmark tone="light" />
            <address className="text-bg/65 mt-8 space-y-1.5 text-sm leading-relaxed not-italic">
              <p>131 Palisade Ave, Jersey City, NJ 07306</p>
              <p>Mon–Fri, 9am–5pm</p>
              <p>
                <a
                  href="tel:+15512215439"
                  className="text-bg hover:text-sprout"
                >
                  (551) 221-5439
                </a>
              </p>
              <p>
                <a
                  href="mailto:info@meetkindcare.com"
                  className="text-bg hover:text-sprout"
                >
                  info@meetkindcare.com
                </a>
              </p>
            </address>
            <Link
              to="/#patientform"
              className="bg-sprout text-forest hover:bg-pale mt-8 inline-block rounded-full px-5 py-2.5 text-sm font-medium transition-colors"
            >
              Get started
            </Link>
          </div>

          {columns.map((col, i) => (
            <nav
              key={col.heading}
              aria-label={col.heading}
              className={`lg:col-span-2 ${i === 0 ? "lg:col-start-8" : ""}`}
            >
              <h3 className="text-bg/50 mb-4 text-xs font-medium tracking-[0.08em] uppercase">
                {col.heading}
              </h3>
              <ul className="space-y-2.5">
                {col.links.map((l) => (
                  <li key={l.to}>
                    <Link
                      to={l.to}
                      className="text-bg/85 hover:text-sprout text-sm transition-colors"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        {/* TODO: add social links once KindCare profile URLs are confirmed */}
        <div className="border-bg/10 text-bg/50 mt-16 flex flex-col gap-3 border-t pt-8 text-xs leading-relaxed md:flex-row md:justify-between">
          <p>
            © KindCare Health Services, {new Date().getFullYear()}. All rights
            reserved.
          </p>
          <p>New Jersey DDD-approved provider</p>
        </div>

        <p
          className="text-bg/[0.07] mt-10 -mb-[0.18em] font-serif text-[21vw] leading-[0.8] font-light tracking-[-0.06em] whitespace-nowrap select-none lg:text-[17rem]"
          aria-hidden="true"
        >
          KindCare
        </p>
      </div>
    </footer>
  );
};

export default Footer;
