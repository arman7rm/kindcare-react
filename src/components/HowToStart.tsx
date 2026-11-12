import { DOCUMENTS, START_STEPS } from "../content/site";
import { Section, SectionHeading } from "./ui";

const HowToStart = ({ showDocuments = false }: { showDocuments?: boolean }) => (
  <Section id="how-to-start" className="scroll-mt-20">
    <SectionHeading
      eyebrow="How to start"
      title="Four steps from choosing KindCare to first visit"
      aside="Whether you're a family member or a Support Coordinator, the process is the same."
    />
    <ol className="border-fg/10 bg-fg/10 mt-10 grid gap-px overflow-hidden rounded-3xl border sm:mt-16 sm:grid-cols-2 lg:mt-20 lg:grid-cols-4">
      {START_STEPS.map((step, i) => (
        <li key={step.title} className="bg-bg p-8" data-aos="fade-up">
          <span className="bg-surface text-leaf grid size-9 place-items-center rounded-full text-sm font-medium tabular-nums">
            {i + 1}
          </span>
          <h3 className="text-fg mt-8 font-serif text-2xl font-light tracking-[-0.02em]">
            {step.title}
          </h3>
          <p className="text-muted mt-3 leading-relaxed">{step.body}</p>
        </li>
      ))}
    </ol>

    {showDocuments && (
      <div
        className="mt-10 grid gap-8 sm:mt-16 lg:grid-cols-12"
        data-aos="fade-up"
      >
        <h3 className="text-fg font-serif text-2xl font-light tracking-[-0.02em] lg:col-span-4">
          Documents we'll ask for
        </h3>
        <dl className="border-fg/10 border-t lg:col-span-7 lg:col-start-6">
          {DOCUMENTS.map((d) => (
            <div
              key={d.name}
              className="border-fg/10 grid grid-cols-[6rem_1fr] gap-4 border-b py-4"
            >
              <dt className="text-fg font-medium">{d.name}</dt>
              <dd className="text-muted">{d.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    )}
  </Section>
);

export default HowToStart;
