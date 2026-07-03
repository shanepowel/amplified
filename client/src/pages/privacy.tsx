'use client';

const LAST_UPDATED = "1 March 2026";

const sections = [
  {
    title: "Who we are",
    body: `AMPLIFIED LTD is registered in England and Wales (Company No. 08589016). Our registered office is 7 Bell Yard, London WC2A 2JR. We are the data controller for information collected through this website.

Contact us about data protection matters at privacy@amplified.co.uk.`,
  },
  {
    title: "What information we collect",
    body: null,
    list: [
      "Contact and enquiry information you submit via consultation request forms: name, email address, company, telephone, and the content of your message.",
      "Newsletter subscription email address and marketing preferences.",
      "Information you provide when using our AI Waste Calculator (no personal data is required or retained).",
      "Technical data collected automatically when you browse: IP address, browser type, pages visited, and time on site. This is collected via analytics cookies only where you have given consent.",
    ],
  },
  {
    title: "Lawful basis for processing",
    body: null,
    list: [
      "Legitimate interests: responding to enquiries and managing our client relationships.",
      "Consent: marketing communications and optional analytics cookies. You may withdraw consent at any time.",
      "Legal obligation: retaining records as required by law.",
      "Contract: processing necessary to deliver services you have engaged us for.",
    ],
  },
  {
    title: "How we use your information",
    body: null,
    list: [
      "To respond to your consultation requests and general enquiries.",
      "To send you insights, updates, and service information where you have opted in.",
      "To improve our website and services using anonymised analytics data.",
      "To comply with our legal and regulatory obligations.",
      "We do not sell, rent, or trade your personal information with third parties for their own marketing purposes.",
    ],
  },
  {
    title: "Third-party services",
    body: `We use the following third-party services which may process data on our behalf as data processors:`,
    list: [
      "HubSpot CRM (EU servers): contact management and marketing communications.",
      "Resend: transactional email delivery of consultation requests.",
      "Mailchimp: visitor tracking and newsletter management, where consent is given.",
      "Neon Database: secure, serverless hosting of form submission data.",
      "All third-party processors are bound by data processing agreements and applicable data protection law.",
    ],
  },
  {
    title: "Cookies",
    body: `We use two categories of cookies:`,
    list: [
      "Strictly necessary cookies: required for the website to function. These do not require consent and cannot be switched off.",
      "Analytics cookies: used to understand how visitors use the site. These are only set with your explicit consent via our cookie banner. You may withdraw consent at any time by clearing your browser cookies or revisiting the cookie banner.",
    ],
  },
  {
    title: "Data retention",
    body: null,
    list: [
      "Consultation enquiry data is retained for 7 years in line with standard business records requirements.",
      "Marketing contact data is retained until you withdraw consent or for a maximum of 3 years of inactivity.",
      "Technical/analytics data is retained in anonymised aggregate form for up to 26 months.",
    ],
  },
  {
    title: "International transfers",
    body: `We primarily process data within the UK and the European Economic Area. Where personal data is transferred to countries outside these areas (for example, where a third-party processor operates US-based servers), we ensure appropriate safeguards are in place, including standard contractual clauses approved by the Information Commissioner's Office.`,
  },
  {
    title: "Your rights under UK GDPR",
    body: `You have the following rights in relation to your personal data:`,
    list: [
      "Right of access: to request a copy of the personal data we hold about you.",
      "Right to rectification: to have inaccurate data corrected.",
      "Right to erasure: to request deletion of your data where there is no lawful reason to continue holding it.",
      "Right to restriction: to ask us to stop processing your data in certain circumstances.",
      "Right to portability: to receive your data in a structured, machine-readable format.",
      "Right to object: to object to processing based on legitimate interests or for direct marketing.",
      "Right to withdraw consent: where processing is based on consent, you may withdraw it at any time without affecting prior lawful processing.",
    ],
  },
  {
    title: "How to exercise your rights",
    body: `To exercise any of the above rights, contact us at privacy@amplified.co.uk or write to: AMPLIFIED LTD, 7 Bell Yard, London WC2A 2JR. We will respond within one calendar month. We may need to verify your identity before processing a request.

You also have the right to lodge a complaint with the Information Commissioner's Office (ICO) at ico.org.uk, or by calling 0303 123 1113.`,
  },
  {
    title: "Changes to this policy",
    body: `We review this Privacy Policy regularly and may update it to reflect changes in our practices or legal requirements. We will update the "Last updated" date at the top of this page when we make material changes.`,
  },
];

export default function Privacy() {
  return (
    <div className="min-h-screen font-sans" style={{ backgroundColor: "#ffffff" }}>

      <section className="py-20 lg:py-28" style={{ backgroundColor: "#181F4F" }}>
        <div className="max-w-[860px] mx-auto px-4 sm:px-6 lg:px-8">
          <p className="font-mono text-xs uppercase tracking-[0.15em] mb-5" style={{ color: "#F85C70" }}>
            Legal
          </p>
          <h1
            className="font-display text-4xl md:text-5xl text-white mb-5"
            style={{ fontWeight: 400 }}
            data-testid="text-privacy-title"
          >
            Privacy Policy
          </h1>
          <p className="font-sans text-sm" style={{ color: "rgba(255,255,255,0.45)" }}>
            Last updated: {LAST_UPDATED}
          </p>
        </div>
      </section>

      <div className="max-w-[860px] mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="space-y-14">
          {sections.map((section) => (
            <section key={section.title}>
              <div className="flex items-start gap-4 mb-5">
                <div className="w-0.5 h-7 rounded flex-shrink-0 mt-0.5" style={{ backgroundColor: "#F85C70" }} />
                <h2
                  className="font-display text-2xl"
                  style={{ color: "#181F4F", fontWeight: 400 }}
                >
                  {section.title}
                </h2>
              </div>
              {section.body && (
                <div className="pl-[calc(0.5rem+1rem)] space-y-4">
                  {section.body.split("\n\n").map((para, i) => (
                    <p key={i} className="font-sans text-base leading-relaxed" style={{ color: "#65677B" }}>
                      {para}
                    </p>
                  ))}
                </div>
              )}
              {section.list && (
                <ul className="pl-[calc(0.5rem+1rem)] mt-3 space-y-3">
                  {section.list.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span
                        className="flex-shrink-0 mt-2 w-1.5 h-1.5 rounded-full"
                        style={{ backgroundColor: "#F85C70" }}
                      />
                      <span className="font-sans text-base leading-relaxed" style={{ color: "#65677B" }}>
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              )}
            </section>
          ))}
        </div>
      </div>

      <section className="py-12" style={{ backgroundColor: "#F2F0F7" }}>
        <div className="max-w-[860px] mx-auto px-4 sm:px-6 lg:px-8">
          <p className="font-mono text-xs uppercase tracking-[0.12em] mb-6" style={{ color: "#6B6E81" }}>
            Company information
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              ["Legal name", "AMPLIFIED LTD"],
              ["Company number", "08589016"],
              ["Registered office", "7 Bell Yard, London WC2A 2JR"],
              ["Incorporated", "28 June 2013"],
              ["Nature of business", "Information technology consultancy (SIC 62020)"],
              ["Data protection contact", "privacy@amplified.co.uk"],
            ].map(([label, value]) => (
              <div key={label}>
                <p className="font-sans text-xs uppercase tracking-[0.08em] mb-1" style={{ color: "#9597A5" }}>{label}</p>
                <p className="font-sans text-sm" style={{ color: "#181F4F" }}>{value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
