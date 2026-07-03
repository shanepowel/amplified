'use client';

const currentYear = new Date().getFullYear();
const financialYear = `${currentYear - 1}/${currentYear}`;
const LAST_UPDATED = "1 March 2026";

const sections = [
  {
    title: "Introduction",
    body: `This statement is made pursuant to Section 54(1) of the Modern Slavery Act 2015. It constitutes AMPLIFIED LTD's Modern Slavery and Human Trafficking Statement for the financial year ${financialYear}. It sets out the steps we have taken to ensure that slavery and human trafficking are not taking place in our business operations or supply chains.

This statement has been approved by the Board of Directors of AMPLIFIED LTD and is reviewed annually.`,
  },
  {
    title: "Our organisation",
    body: `AMPLIFIED LTD is an AI governance and technology consultancy incorporated in England and Wales. We are headquartered in London with additional operations in Porto, Portugal. We provide professional consulting services to enterprise organisations, primarily across infrastructure, energy, financial services, public sector, and technology industries.

We are a knowledge-based consultancy. Our operations consist primarily of professional services delivered by our team of consultants, engineers, and specialists. Our workforce is employed or engaged through contracts that comply with UK and EU employment law.`,
  },
  {
    title: "Our supply chains",
    body: `Our supply chains are relatively limited and transparent. They consist primarily of:`,
    list: [
      "Software and cloud platform providers (SaaS subscriptions and infrastructure).",
      "IT hardware and equipment from established UK and EU distributors.",
      "Office facilities, professional services (legal, accounting, insurance), and communications providers.",
      "Specialist subcontractors engaged on specific client engagements, all of whom are required to comply with our ethical standards.",
    ],
  },
  {
    title: "Our policies",
    body: `We maintain a suite of internal policies designed to prevent modern slavery and related abuses:`,
    list: [
      "Anti-Slavery Policy: sets out our zero-tolerance position on modern slavery and human trafficking, and provides guidance to employees on recognising and reporting concerns.",
      "Recruitment Policy: includes right-to-work verification for all UK-based employees and contractors, to mitigate the risk of forced or trafficking-related labour.",
      "Whistleblowing Policy: enables all employees, contractors, and supply chain partners to raise concerns confidentially and without fear of reprisal.",
      "Code of Conduct: sets behavioural standards for all employees and sets expectations for suppliers and partners working with Amplified.",
      "Supplier Due Diligence: new suppliers of material goods or services are assessed against ethical standards before engagement, including review of their own Modern Slavery statements where applicable.",
    ],
  },
  {
    title: "Risk assessment",
    body: `We assess our operations and supply chains against the risk of modern slavery. As a professional services business, we consider our direct operations to carry low risk. The most significant risk areas are in our indirect supply chain, specifically in the manufacturing of IT hardware and equipment where global supply chains may be less transparent.

We mitigate this risk by:`,
    list: [
      "Procuring hardware through established UK and EU-based distributors with published ethical sourcing standards.",
      "Requiring suppliers to confirm their own Modern Slavery Act compliance where applicable.",
      "Monitoring regulatory and sector-specific guidance from the Home Office and the Gangmasters and Labour Abuse Authority (GLAA).",
    ],
  },
  {
    title: "Due diligence",
    body: null,
    list: [
      "We conduct right-to-work checks for all UK employees and contractors.",
      "We review the Modern Slavery statements of material suppliers annually.",
      "We include anti-slavery obligations in our standard supplier contracts.",
      "We maintain a whistleblowing channel accessible to all employees and supply chain contacts.",
    ],
  },
  {
    title: "Training and awareness",
    body: `All employees receive onboarding training that covers modern slavery awareness, including how to recognise the signs of forced labour and human trafficking, and how to raise a concern. We are developing refresher training to be completed annually by all staff.

Managers and those involved in procurement receive additional guidance on supplier due diligence and the indicators of labour exploitation in supply chains.`,
  },
  {
    title: "Key performance indicators",
    body: null,
    list: [
      "Completion of modern slavery awareness training by all new employees within their first month.",
      "Number of concerns raised through the whistleblowing channel: zero for the financial year ${financialYear}.",
      "Annual review of supplier compliance statements for all material suppliers.",
      "Annual board review and approval of this statement.",
    ],
  },
  {
    title: "Looking ahead",
    body: `We are committed to improving our approach year on year. For the coming year, we intend to:`,
    list: [
      "Formalise annual refresher training for all staff.",
      "Strengthen contractual anti-slavery obligations for new supplier agreements.",
      "Develop more structured supplier assessment questionnaires.",
      "Extend due diligence to a wider group of suppliers including those in professional services.",
    ],
  },
];

export default function ModernSlavery() {
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
            data-testid="text-modern-slavery-title"
          >
            Modern Slavery Statement
          </h1>
          <p className="font-sans text-sm" style={{ color: "rgba(255,255,255,0.45)" }}>
            Financial year {financialYear} &nbsp;&middot;&nbsp; Last updated: {LAST_UPDATED}
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

        <div className="mt-16 pt-10 border-t" style={{ borderColor: "#E5E3EE" }}>
          <p className="font-sans text-sm mb-2" style={{ color: "#65677B" }}>
            For questions about this statement, contact us at{" "}
            <a href="mailto:ethics@amplified.co.uk" style={{ color: "#F85C70" }}>
              ethics@amplified.co.uk
            </a>
          </p>
          <p className="font-sans text-sm" style={{ color: "#65677B" }}>
            This statement is approved by the Board of Directors and will be reviewed annually in accordance with
            Section 54 of the Modern Slavery Act 2015.
          </p>
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
              ["Ethics contact", "ethics@amplified.co.uk"],
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
