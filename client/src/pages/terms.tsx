'use client';

const LAST_UPDATED = "1 March 2026";

const sections = [
  {
    title: "1. Definitions and interpretation",
    body: null,
    list: [
      "\"Amplified\" means AMPLIFIED LTD, a company registered in England and Wales (No. 08589016).",
      "\"Client\" or \"Buyer\" means the organisation or individual purchasing Services from Amplified.",
      "\"Contract\" means the agreement between Amplified and the Client for the supply of Services, formed when a Statement of Work or order is accepted by both parties.",
      "\"Deliverables\" means any outputs, documents, reports, software, or materials produced by Amplified in performing the Services.",
      "\"Confidential Information\" means any information marked as confidential or which would reasonably be understood to be confidential, excluding information already in the public domain.",
      "\"Intellectual Property Rights\" means all patents, copyright, design rights, trade marks, trade secrets, and all other intellectual property rights.",
      "\"Services\" means the consulting, advisory, and technology services provided by Amplified as described in the relevant Statement of Work or service agreement.",
    ],
  },
  {
    title: "2. Services and obligations",
    body: `Amplified will provide the Services with reasonable skill and care, in accordance with the agreed Statement of Work, and using appropriately qualified personnel.

The Client will provide Amplified with timely access to information, systems, and personnel reasonably required to perform the Services. Where Services are delayed or made impossible by the Client's failure to provide such access, Amplified shall not be liable for the resulting impact on delivery timelines or outcomes.

Where Services depend on third-party products, platforms, or information outside Amplified's reasonable control, Amplified accepts no liability for failures or delays caused by those third parties.`,
  },
  {
    title: "3. Personnel and subcontracting",
    body: `Amplified will ensure its personnel comply with the Client's reasonable site rules, security policies, and confidentiality requirements. Amplified may engage subcontractors to deliver elements of the Services, subject to equivalent confidentiality obligations.

If a key individual must be replaced, Amplified will ensure appropriate knowledge transfer at no additional cost to the Client, and will work with the Client to minimise disruption.`,
  },
  {
    title: "4. Charges and payment",
    body: `Charges are set out in the relevant Statement of Work or pricing agreement. Unless otherwise agreed:`,
    list: [
      "Invoices are issued monthly in arrears.",
      "Payment is due within 30 days of receipt of a valid invoice.",
      "Late payments attract interest at 2% above the Bank of England base rate, accruing daily.",
      "Amplified reserves the right to suspend Services where invoices remain unpaid beyond 45 days of the due date.",
    ],
  },
  {
    title: "5. Intellectual property rights",
    body: `Each party retains ownership of its pre-existing intellectual property. Intellectual property rights in bespoke Deliverables created specifically for the Client will vest in the Client upon receipt of full payment for those Deliverables.

Amplified retains ownership of its generic methodologies, frameworks, tools, templates, and know-how developed independently or prior to the engagement. The Client receives a non-exclusive, royalty-free licence to use any such materials incorporated into Deliverables for its internal business purposes.`,
  },
  {
    title: "6. Confidentiality",
    body: `Each party will hold the other's Confidential Information in confidence, use it only for the purposes of the Contract, and not disclose it to third parties without prior written consent. This obligation survives termination of the Contract for a period of three years.

Neither party is prevented from disclosing Confidential Information where required by law, court order, or regulatory authority, provided it gives the other party reasonable advance notice where legally permissible.`,
  },
  {
    title: "7. Data protection",
    body: `Both parties will comply with the UK GDPR and Data Protection Act 2018 in connection with any personal data processed under this Contract. Where Amplified processes personal data on behalf of the Client, a separate Data Processing Agreement will govern those activities.

Amplified implements appropriate technical and organisational security measures to protect Client data and complies with recognised security standards.`,
  },
  {
    title: "8. Liability and insurance",
    body: `Amplified's total aggregate liability to the Client under or in connection with a Contract shall not exceed the greater of (a) £1,000,000 or (b) 150% of the total charges paid or payable under that Contract in the 12 months preceding the claim.

Neither party shall be liable to the other for any indirect, consequential, or special loss, loss of profits, loss of business, or reputational damage, whether arising in contract, tort, or otherwise.

Nothing in these Terms limits liability for death or personal injury caused by negligence, fraud, or any other liability that cannot be limited by law.

Amplified maintains the following insurance coverage: Professional Indemnity (£1m per claim), Public Liability (£1m), Employer's Liability (£5m).`,
  },
  {
    title: "9. Termination",
    body: `Either party may terminate the Contract by giving not less than 30 days written notice. Either party may terminate immediately by written notice if the other commits a material breach that is not remedied within 14 days of written notice, or enters insolvency proceedings.

Upon termination, the Client will pay all charges due for Services performed up to the termination date. Amplified will return or destroy Client data and Confidential Information upon request.`,
  },
  {
    title: "10. Governing law",
    body: `These Terms and any Contract formed under them are governed by the laws of England and Wales. Each party submits to the exclusive jurisdiction of the courts of England and Wales for the resolution of any dispute arising from or in connection with these Terms.`,
  },
];

export default function Terms() {
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
            data-testid="text-terms-title"
          >
            Terms of Use
          </h1>
          <p className="font-sans text-sm" style={{ color: "rgba(255,255,255,0.45)" }}>
            Last updated: {LAST_UPDATED}
          </p>
        </div>
      </section>

      <div className="max-w-[860px] mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <p className="font-sans text-base leading-relaxed mb-14" style={{ color: "#65677B" }}>
          These Terms of Use govern your use of the Amplified website and the basis on which AMPLIFIED LTD
          provides professional services. By engaging Amplified for services or using this website, you
          agree to be bound by these Terms.
        </p>
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
              ["Legal enquiries", "legal@amplified.co.uk"],
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
