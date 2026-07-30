/* ================================================================
   SITE TEXT FILE — edit this file to change text anywhere on the site
   ================================================================
   HOW TO EDIT (safe rules):
   1. Open this file in Notepad.
   2. Only change text BETWEEN the quote marks "...".
   3. Do not delete the quote marks, colons, or commas.
   4. Save the file, then refresh the website in your browser.
   ================================================================ */

const SITE = {

  /* ---- Firm identity ---- */
  name: "SSH Network",
  subName: "Chartered Accountants",
  positioning: "AI-Enabled  •  New Service Delivery Network of CA Firms",

  /* ---- Home page hero ---- */
  /* The part inside <em>...</em> appears in gold italics */
  heroHeading: "A Trusted <em>Assurance Partner</em> for Growing Businesses",
  heroText: "We deliver risk-focused audits, strengthen internal controls, and uphold the highest standards of professional integrity, through an ICAI-approved network of independent Chartered Accountant firms.",
  heroButton1: "Explore Our Services",
  heroButton2: "Meet the Partners",

  /* ---- Cities / presence ---- */
  cities: ["New Delhi", "Ghaziabad", "Gurgaon"],

  /* ---- Number strip on home page ---- */
  stats: [
    { big: "20+", small: "Years of Experience" },
    { big: "3",   small: "NCR Locations" },
    { big: "8",   small: "Service Verticals" },
    { big: "AI",  small: "Enabled Delivery" }
  ],

  /* ---- Tagline (used on About page and quote band) ---- */
  tagline: "We aspire to be a trusted assurance partner for businesses by delivering risk-focused audits, strengthening internal controls, and upholding the highest standards of professional integrity.",

  /* ---- About page paragraphs (add or remove lines; each line in quotes, comma after each except you may leave a trailing comma) ---- */
  aboutParagraphs: [
    "Drawing on decades of cumulative professional experience across finance, compliance, and advisory domains, SSH Network focuses on supporting businesses through a client-first approach, delivering quality-driven outcomes while upholding the highest standards of professional integrity.",
    "Engagements are delivered through project-specific collaboration with independent, multi-disciplinary professionals, Chartered Accountants, Company Secretaries, Cost Accountants, Advocates, Management Accountants, SEBI Registered Research Analysts, IFRS experts, and IIM alumni, while maintaining professional independence and client focus.",
    "SSH Network is an AI-enabled, new service delivery network of CA firms with presence across New Delhi, Ghaziabad, and Gurgaon."
  ],

  /* ---- 'Experience includes' strip ---- */
  experienceLabel: "Our professionals' experience includes engagements with",
  experience: ["Genpact", "GE", "Birlasoft", "Sopra Steria", "TCS", "Tech Mahindra", "Orange", "Cap Gemini", "Tata Motors", "Amazon", "The Lalit", "Xansa", "Global Schools"],

  /* ---- Call-to-action band ---- */
  ctaHeading: "Let's Discuss Your Requirement",
  ctaText: "Audit, tax, payroll, automation or a full finance function, we'll structure the right engagement.",
  ctaButton: "Get in Touch",

  /* ---- Contact details ---- */
  contactFirm: "Aggarwal Samir & Co., Chartered Accountants, Member of SSH Network",
  address: "211 Neelkanth Plaza, Plot No. 15, Community Centre, Road No 44, Pitampura, New Delhi 110034",
  phone: "+91 93122 55530",
  /* WhatsApp number for the floating green chat button (country code,
     no + or spaces). Make it "" (empty) to hide the button. */
  whatsapp: "919312255530",
  email: "samir@casamir.in",
  website: "www.casamir.in",
  /* ---- Member firm offices (shown as cards on the Contact page) ----
     To add another firm, copy one whole block from { to }, and paste
     above the closing ]. Leave email/website/phone as "" to hide
     that line on the card. */
  memberFirms: [
    {
      firm: "Sunny Goel and Company",
      person: "CA. Sunny Goel",
      address: "Plot No 413, First Floor, Sector 5, Vasundhara, Ghaziabad, Uttar Pradesh 201012",
      email: "sunnygoel.office@gmail.com",
      website: "www.casunnygoel.com",
      phone: "+91 98993 36632"
    },
    {
      firm: "Harre Chauhaan & Co",
      person: "CA. Harre Chauhaan",
      address: "A 904, Mapsko Paradise, Sector 83, Gurugram, Haryana 122005",
      email: "",
      website: "",
      phone: "+91 96432 02541"
    }
  ],

  /* Formspree form ID — sign up free at formspree.io, create a form,
     and paste its ID here (looks like: xabcdefg). Until then the
     contact form shows a notice instead of sending. */
  formspreeId: "xnjeynye",

  /* Google Maps: the address the map should point to */
  mapQuery: "Neelkanth Plaza, Community Centre, Road No 44, Pitampura, New Delhi 110034",

  /* ---- Footer ---- */
  disclaimer: "\"SSH Network is a Network of Independent CA Firms approved by ICAI; each firm operates as an Independent Member Firm.\"",
  copyright: "© 2026 SSH Network, Chartered Accountants · New Delhi · Ghaziabad · Gurgaon"
};
