// Single source of truth for facts that appear on more than one page.
// Before publishing, verify services, programs and counties against
// KindCare's DDD approval records.

export const CONTACT = {
  phone: "(551) 221-5439",
  phoneHref: "tel:+15512215439",
  email: "info@meetkindcare.com",
  emailHref: "mailto:info@meetkindcare.com",
  referralHref:
    "mailto:info@meetkindcare.com?subject=New%20referral%20for%20KindCare",
  address: "131 Palisade Ave, Jersey City, NJ 07306",
  hours: "Mon–Fri, 9am–5pm",
};

/**
 * Google Apps Script web app that receives the call-back form.
 * Paste the "/exec" URL from Deploy > Manage deployments here.
 */
export const FORM_ENDPOINT =
  "https://script.google.com/macros/s/AKfycbw4F7-nY-7IkFAW-fYn1alOrM9tmHxCqqTpT94ADTRAChVLS9-Bgf6CjMXgexpsB1v8/exec";

export interface Service {
  id: string;
  title: string;
  programs: string[];
  summary: string;
  details: string[];
}

export const SERVICES: Service[] = [
  {
    id: "community-based-supports",
    title: "Community Based Supports",
    programs: ["Supports Program"],
    summary:
      "One-to-one support from a Direct Support Professional, at home or out in the community, to build everyday skills and take part in community life.",
    details: [
      "Support with daily living and independent living skills",
      "Taking part in community, social and recreational activities",
      "Working toward the goals in the person's ISP",
    ],
  },
  {
    id: "individual-supports",
    title: "Individual Supports",
    programs: ["Community Care Program"],
    summary:
      "Hands-on assistance and teaching with self-care, daily living and community living skills, built around the person's routine and ISP.",
    details: [
      "Personal care and daily routines",
      "Household and community living skills",
      "Support that follows the person's ISP outcomes",
    ],
  },
  {
    id: "respite",
    title: "Respite",
    programs: ["Supports Program", "Community Care Program"],
    summary:
      "Short-term support that gives unpaid family caregivers a break, while the person continues to get safe, consistent care.",
    details: [
      "Planned breaks for family caregivers",
      "Continuity of the person's routines and supports",
      "Provided by trained, screened DSPs",
    ],
  },
];

export const COUNTIES = [
  "Bergen",
  "Burlington",
  "Essex",
  "Hudson",
  "Middlesex",
  "Monmouth",
  "Morris",
  "Passaic",
  "Somerset",
  "Sussex",
  "Union",
];

export const START_STEPS = [
  {
    title: "Choose KindCare",
    body: "Families tell their Support Coordinator they'd like to work with KindCare. The Support Coordinator selects KindCare as the provider.",
  },
  {
    title: "We reach out",
    body: "We contact the individual and/or Support Coordinator within 5 working days of being selected.",
  },
  {
    title: "We review the plan",
    body: "We review the person's planning documents so support fits their needs, goals and preferences.",
  },
  {
    title: "Support begins",
    body: "We match the person with a Direct Support Professional and schedule services as authorized in the ISP.",
  },
];

export const DOCUMENTS = [
  { name: "ISP", label: "Individualized Service Plan" },
  { name: "PCPT", label: "Person-Centered Planning Tool" },
  { name: "NJ CAT", label: "NJ Comprehensive Assessment Tool tier" },
  { name: "BSP", label: "Behavior Support Plan, if the person has one" },
];

export const NOT_OFFERED = [
  "Services for people under 21",
  "Behavioral Supports",
  "Transportation",
  "Nursing, hospice or home health care",
];

export const COMPLIANCE = [
  {
    title: "DDD requirements",
    body: "We follow New Jersey Division of Developmental Disabilities requirements for providers in the Supports Program and the Community Care Program.",
  },
  {
    title: "Staff screening",
    body: "Before working with anyone we support, staff complete a criminal background check, a Central Registry check and drug testing.",
  },
  {
    title: "Required training",
    body: "DSPs are trained on Danielle's Law, Stephen Komninos' Law, incident reporting and CPR/First Aid, plus medication training where a role requires it.",
  },
  {
    title: "Incident reporting",
    body: "Incidents are reported in line with DDD incident reporting requirements, and families and guardians are notified as required.",
  },
  {
    title: "Privacy",
    body: "We protect the personal and health information of the people we support, as required by HIPAA.",
  },
  {
    title: "Rights",
    body: "We respect each person's right to dignity, privacy and choice, and to be free from abuse, neglect and exploitation.",
  },
];
