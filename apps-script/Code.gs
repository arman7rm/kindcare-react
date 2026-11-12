/**
 * KindCare website form handler (Google Apps Script web app).
 *
 * Receives both website forms and routes them by `formType`:
 *   "client" -> Client call-back requests sheet (homepage + Contact page form)
 *   "dsp"    -> DSP applications sheet (Careers page form)
 * Each submission adds a row to the matching sheet and emails NOTIFY.
 *
 * This file is a copy for version control; the live code runs in the Apps
 * Script project owned by info@meetkindcare.com. After changing it:
 *   1. Paste it into the Apps Script editor and save.
 *   2. Deploy > Manage deployments > pencil icon > Version: New version > Deploy.
 *      (Execute as: Me. Who has access: Anyone.) The /exec URL stays the same.
 * The website posts to the URL in FORM_ENDPOINT (src/content/site.ts).
 */

const SHEETS = {
  client: "1pL7_VNDziVWLrsfhRqRPX4k6FdzytFK5e1xe_1HPdEI", // Client call-back requests
  dsp: "1aYWqGmJHC67TVGYHH2798Vv2OuRwxNQnhmFYYV5Tcqg", // DSP applications
};
const NOTIFY = "info@meetkindcare.com";

function doPost(e) {
  try {
    const d = JSON.parse(e.postData.contents);
    const type = d.formType === "dsp" ? "dsp" : "client";
    const name = `${d.firstName} ${d.lastName}`;

    const row =
      type === "dsp"
        ? [new Date(), d.firstName, d.lastName, d.email, d.phoneNumber, d.location,
           d.counties, d.availability || "", d.experience, d.over18 || "", d.message || ""]
        : [new Date(), d.firstName, d.lastName, d.email, d.phoneNumber, d.location];
    SpreadsheetApp.openById(SHEETS[type]).getSheets()[0].appendRow(row);

    MailApp.sendEmail({
      to: NOTIFY,
      replyTo: d.email,
      subject:
        type === "dsp"
          ? `New DSP application: ${name}`
          : `New call-back request: ${name}`,
      body:
        type === "dsp"
          ? `Name: ${name}\nPhone: ${d.phoneNumber}\nEmail: ${d.email}\nLocation: ${d.location}\n` +
            `Counties: ${d.counties}\nAvailability: ${d.availability || "-"}\nExperience: ${d.experience}\n` +
            `18 or older: ${d.over18 || "-"}\n\n${d.message || ""}`
          : `Name: ${name}\nPhone: ${d.phoneNumber}\nEmail: ${d.email}\nLocation: ${d.location}\n\n` +
            `Follow up within 5 working days.`,
    });
    return json({ result: "success" });
  } catch (err) {
    return json({ result: "error", message: String(err) });
  }
}

const json = (o) =>
  ContentService.createTextOutput(JSON.stringify(o)).setMimeType(
    ContentService.MimeType.JSON,
  );
