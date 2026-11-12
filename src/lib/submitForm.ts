import { FORM_ENDPOINT } from "../content/site";

/** Which sheet the Apps Script writes the submission to. */
export type FormType = "client" | "dsp";

/**
 * Sends a form to the Apps Script web app.
 * Resolves to null on success, or to a message to show the visitor.
 */
export async function submitForm(
  formType: FormType,
  fields: Record<string, string>,
): Promise<string | null> {
  try {
    const response = await fetch(FORM_ENDPOINT, {
      method: "POST",
      // text/plain keeps this a "simple" CORS request; Apps Script web apps
      // can't answer the preflight that application/json would trigger.
      headers: { "Content-Type": "text/plain;charset=utf-8" },
      body: JSON.stringify({ formType, ...fields }),
    });
    const result = await response.json();
    if (response.ok && result.result === "success") return null;
    return `Submission failed: ${result.message || "server error"}. Please try again or call us.`;
  } catch (error) {
    console.error("Form submission error:", error);
    return "We couldn't send your details. Please check your connection and try again, or call us.";
  }
}

/** Reads a form into plain strings; repeated names (checkboxes) are joined. */
export function readForm(form: HTMLFormElement): Record<string, string> {
  const fields: Record<string, string> = {};
  const data = new FormData(form);
  for (const key of new Set(data.keys())) {
    fields[key] = data
      .getAll(key)
      .map((v) => String(v).trim())
      .join(", ");
  }
  return fields;
}
