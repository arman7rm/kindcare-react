import { DOCUMENTS, START_STEPS } from "../content/site";
import { Section, SectionHeading } from "./ui";

const HowToStart = ({ showDocuments = false }: { showDocuments?: boolean }) => (
  <Section id="how-to-start" className="scroll-mt-20">
    <SectionHeading
      eyebrow="How to start"
      title="Four steps from choosing KindCare to first visit"
      aside="Whether you're a family member or a Support Coordinator, the process is the same."
    />
    <ol className="mt-16 grid gap-px overflow-hidden rounded-3xl border border-fg/10 bg-fg/10 sm:grid-cols-2 lg:mt-20 lg:grid-cols-4">
      {START_STEPS.map((step, i) => (
        <li key={step.title} className="bg-bg p-8" data-aos="fade-up">
          <span className="grid size-9 place-items-center rounded-full bg-surface text-sm font-medium text-leaf tabular-nums">
            {i + 1}
          </span>
          <h3 className="mt-8 font-serif text-2xl font-light tracking-[-0.02em] text-fg">
            {step.title}
          </h3>
          <p className="mt-3 leading-relaxed text-muted">{step.body}</p>
        </li>
      ))}
    </ol>

    {showDocuments && (
      <div className="mt-16 grid gap-8 lg:grid-cols-12" data-aos="fade-up">
        <h3 className="font-serif text-2xl font-light tracking-[-0.02em] text-fg lg:col-span-4">
          Documents we'll ask for
        </h3>
        <dl className="border-t border-fg/10 lg:col-span-7 lg:col-start-6">
          {DOCUMENTS.map((d) => (
            <div
              key={d.name}
              className="grid grid-cols-[6rem_1fr] gap-4 border-b border-fg/10 py-4"
            >
              <dt className="font-medium text-fg">{d.name}</dt>
              <dd className="text-muted">{d.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    )}
  </Section>
);

export default HowToStart;
