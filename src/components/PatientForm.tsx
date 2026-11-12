import { useState } from "react";
import { Link } from "react-router-dom";
import { Field, FormStatus, SubmitButton } from "./form";
import { readForm, submitForm } from "../lib/submitForm";

/** Client call-back form. Submissions go to the "Client call-back requests" sheet. */
const PatientForm: React.FC = () => {
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState({ message: "", isError: false });

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    // Read before disabling the fieldset: disabled fields are left out.
    const fields = readForm(form);
    setSubmitting(true);
    setStatus({ message: "", isError: false });

    const error = await submitForm("client", fields);
    if (error) {
      setStatus({ message: error, isError: true });
    } else {
      form.reset();
      setStatus({
        message:
          "Thank you! We've received your details and our team will be in touch.",
        isError: false,
      });
    }
    setSubmitting(false);
  }

  return (
    <section
      id="patientform"
      className="border-fg/10 scroll-mt-20 border-t"
      aria-labelledby="client-form-heading"
    >
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 md:px-8 lg:grid-cols-12 lg:px-10 lg:py-32">
        <div className="lg:col-span-5" data-aos="fade-up">
          <span className="bg-surface text-fg mb-6 inline-flex rounded-md px-3 pt-2.5 pb-2 text-xs leading-none font-medium">
            For families
          </span>
          <h2
            id="client-form-heading"
            className="text-fg text-[clamp(32px,3.6vw,52px)] leading-[1.1]"
          >
            Request a call back
          </h2>
          <p className="text-muted mt-6 max-w-md text-lg leading-relaxed">
            Leave your details and our team will contact you to talk through
            services. If you already have a Support Coordinator, let them know
            you'd like to work with KindCare.
          </p>
          <p className="text-muted mt-6 max-w-md text-sm leading-relaxed">
            Services are for adults 21 and older who are eligible for New Jersey
            DDD services.
          </p>
        </div>

        <div className="lg:col-span-6 lg:col-start-7" data-aos="fade-up">
          <form
            onSubmit={handleSubmit}
            className="bg-surface space-y-5 rounded-3xl p-6 sm:p-10"
          >
            <fieldset disabled={submitting} className="space-y-5">
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
              <Field
                label="Your location (city, state)"
                name="location"
                autoComplete="address-level2"
                required
              />
            </fieldset>

            <p className="text-muted text-xs leading-relaxed">
              We use these details only to contact you about services. Please
              don't include medical information in this form. See our{" "}
              <Link
                to="/legal#privacy-notice"
                className="hover:text-fg underline underline-offset-2"
              >
                privacy notice
              </Link>
              .
            </p>

            <SubmitButton submitting={submitting}>Submit request</SubmitButton>
            <FormStatus {...status} />
          </form>
        </div>
      </div>
    </section>
  );
};

export default PatientForm;
