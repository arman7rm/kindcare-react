import { SERVICES } from "../content/site";
import { ArrowLink, Section, SectionHeading } from "./ui";

/** Numbered list of DDD services. `detailed` shows the bullet points too. */
const ServiceList = ({ detailed = false }: { detailed?: boolean }) => {
  return (
    <ol className="border-fg/10 mt-10 border-t sm:mt-16 lg:mt-20">
      {SERVICES.map((s, i) => (
        <li
          key={s.id}
          id={detailed ? s.id : undefined}
          className="border-fg/10 grid scroll-mt-24 gap-5 border-b py-10 lg:grid-cols-12 lg:gap-10 lg:py-14"
          data-aos="fade-up"
        >
          <span className="text-muted text-sm tabular-nums lg:col-span-1">
            {String(i + 1).padStart(2, "0")}
          </span>
          <div className="lg:col-span-5">
            <h3 className="text-fg font-serif text-3xl font-light tracking-[-0.03em] lg:text-4xl">
              {s.title}
            </h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {s.programs.map((p) => (
                <li
                  key={p}
                  className="bg-surface text-leaf rounded-full px-3 py-1 text-xs font-medium"
                >
                  {p}
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-6">
            <p className="text-muted text-lg leading-relaxed">{s.summary}</p>
            {detailed ? (
              <ul className="border-fg/10 mt-6 border-t">
                {s.details.map((d) => (
                  <li
                    key={d}
                    className="border-fg/10 text-fg/85 flex gap-3 border-b py-3"
                  >
                    <span className="text-mint" aria-hidden="true">
                      —
                    </span>
                    {d}
                  </li>
                ))}
              </ul>
            ) : (
              <div className="mt-6">
                <ArrowLink to={`/services#${s.id}`}>
                  Learn more<span className="sr-only"> about {s.title}</span>
                </ArrowLink>
              </div>
            )}
          </div>
        </li>
      ))}
    </ol>
  );
};

export const ServicesSection = () => (
  <Section>
    <SectionHeading
      eyebrow="What we offer"
      title="DDD services, delivered by people who know the person"
      aside="Our Direct Support Professionals provide the services KindCare is approved for by the New Jersey Division of Developmental Disabilities."
    />
    <ServiceList />
  </Section>
);

export default ServiceList;
