import { useState } from "react";
import { Link } from "react-router-dom";
import {
  CheckboxGroup,
  Field,
  FormStatus,
  SubmitButton,
  inputClass,
  labelClass,
} from "./form";
import { readForm, submitForm } from "../lib/submitForm";
import { COUNTIES } from "../content/site";

const AVAILABILITY = ["Weekdays", "Evenings", "Weekends"];
const EXPERIENCE = [
  "No experience yet",
  "Less than 1 year",
  "1–3 years",
  "More than 3 years",
];

/** DSP job application. Submissions go to the "DSP applications" sheet. */
const DspApplicationForm = () => {
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState({ message: "", isError: false });

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const fields = readForm(form);

    if (!fields.counties) {
      setStatus({
        message: "Please choose at least one county you can work in.",
        isError: true,
      });
      return;
    }

    setSubmitting(true);
    setStatus({ message: "", isError: false });
    const error = await submitForm("dsp", fields);
    if (error) {
      setStatus({ message: error, isError: true });
    } else {
      form.reset();
      setStatus({
        message:
          "Thank you for applying! We've received your application and will be in touch about next steps.",
        isError: false,
      });
    }
    setSubmitting(false);
  }

  return (
    <section
      id="apply"
      className="border-fg/10 scroll-mt-20 border-t"
      aria-labelledby="dsp-form-heading"
    >
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 md:px-8 lg:grid-cols-12 lg:px-10 lg:py-28">
        <div className="lg:col-span-5" data-aos="fade-up">
          <span className="bg-surface text-fg mb-6 inline-flex rounded-md px-3 pt-2.5 pb-2 text-xs leading-none font-medium">
            Apply
          </span>
          <h2
            id="dsp-form-heading"
            className="text-fg text-[clamp(32px,3.6vw,52px)] leading-[1.1]"
          >
            Apply to be a DSP
          </h2>
          <p className="text-muted mt-6 max-w-md text-lg leading-relaxed">
            Tell us a little about yourself. Our team reviews every application
            and will contact you about next steps, including screening and
            training.
          </p>
        </div>

        <div className="lg:col-span-6 lg:col-start-7" data-aos="fade-up">
          <form
            onSubmit={handleSubmit}
            className="bg-surface space-y-6 rounded-3xl p-6 sm:p-10"
          >
            <fieldset disabled={submitting} className="space-y-6">
              <div className="grid gap-5 sm:grid-cols-2">
                <Field
                  label="First name"
                  name="firstName"
                  autoComplete="given-name"
                  required
                />
                <Field
                  label="Last name"
                  name="lastName"
                  autoComplete="family-name"
                  required
                />
              </div>
              <div className="grid gap-5 sm:grid-cols-2">
                <Field
                  label="Email address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                />
                <Field
                  label="Phone number"
                  name="phoneNumber"
                  type="tel"
                  autoComplete="tel"
                  required
                />
              </div>
              <Field
                label="Where you live (city, state)"
                name="location"
                autoComplete="address-level2"
                required
              />

              <CheckboxGroup
                legend="Counties you can work in"
                hint="Choose all that apply."
                name="counties"
                options={COUNTIES}
              />
              <CheckboxGroup
                legend="When you're available"
                name="availability"
                options={AVAILABILITY}
              />

              <div>
                <label htmlFor="experience" className={labelClass}>
                  Experience supporting people with disabilities
                </label>
                <select
                  id="experience"
                  name="experience"
                  required
                  defaultValue=""
                  className={inputClass}
                >
                  <option value="" disabled>
                    Choose one
                  </option>
                  {EXPERIENCE.map((e) => (
                    <option key={e}>{e}</option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="message" className={labelClass}>
                  Anything else you'd like us to know?{" "}
                  <span className="text-muted font-normal">(optional)</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className={inputClass}
                  placeholder="Certifications, languages you speak, why you'd like to be a DSP…"
                />
              </div>

              <label className="text-fg flex items-start gap-3 text-sm">
                <input
                  type="checkbox"
                  name="over18"
                  value="Yes"
                  required
                  className="mt-0.5 size-4 accent-[var(--color-leaf)]"
                />
                I am 18 years of age or older.
              </label>
            </fieldset>

            <p className="text-muted text-xs leading-relaxed">
              Please don't include your Social Security number or other
              sensitive information. We'll ask for what we need later in the
              hiring process. See our{" "}
              <Link
                to="/legal#privacy-notice"
                className="hover:text-fg underline underline-offset-2"
              >
                privacy notice
              </Link>
              .
            </p>

            <SubmitButton submitting={submitting}>
              Submit application
            </SubmitButton>
            <FormStatus {...status} />
          </form>
        </div>
      </div>
    </section>
  );
};

export default DspApplicationForm;
