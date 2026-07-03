'use client';

const LAST_UPDATED = "1 March 2026";

const sections = [
  {
    title: "Our commitment",
    body: `AMPLIFIED LTD is committed to making this website accessible to everyone, including people with disabilities. We work to meet the Web Content Accessibility Guidelines (WCAG) 2.1 at Level AA, as referenced by the Public Sector Bodies (Websites and Mobile Applications) Accessibility Regulations 2018 and recognised as best practice across all sectors.

We believe that accessible design is good design. Clarity, legibility, and logical structure benefit every user, not only those using assistive technology.`,
  },
  {
    title: "What we have done",
    body: null,
    list: [
      "Semantic HTML5 markup to ensure the site is navigable by screen readers and assistive technologies.",
      "Keyboard navigation support throughout all interactive elements.",
      "ARIA labels and roles where needed to clarify the purpose of elements for assistive technology users.",
      "Colour contrast ratios that meet or exceed WCAG AA requirements for all body text and interactive elements.",
      "Responsive layout that functions on mobile, tablet, and desktop at all standard zoom levels.",
      "Alternative text on all meaningful images.",
      "Visible focus indicators on all interactive elements to support keyboard-only navigation.",
      "Respects the user's prefers-reduced-motion setting to avoid triggering vestibular disorders.",
    ],
  },
  {
    title: "Known limitations",
    body: `We are honest about the limitations that exist. We are actively working to address these:`,
    list: [
      "Some third-party embedded content (including scheduling tools and forms) may not fully meet WCAG AA standards. We have raised these with the relevant vendors.",
      "Older PDF documents linked from the site may not be fully accessible. We are working to replace or tag these.",
      "Complex interactive components (including some data visualisations) may require additional assistive technology support beyond basic screen reader use.",
    ],
  },
  {
    title: "Assistive technology compatibility",
    body: `This website is designed to work with the following assistive technologies and has been tested against them:`,
    list: [
      "NVDA and JAWS (Windows screen readers) with Chrome and Firefox.",
      "VoiceOver (macOS and iOS) with Safari.",
      "Keyboard-only navigation.",
      "Browser zoom at up to 200% without loss of content or functionality.",
    ],
  },
  {
    title: "Technical approach",
    body: `This website is built using React 18, TypeScript, and Tailwind CSS with a strong emphasis on semantic markup. We rely on the following technologies to support accessibility:`,
    list: [
      "HTML5 semantic elements (nav, main, section, article, aside, header, footer).",
      "WAI-ARIA where native HTML semantics are insufficient.",
      "CSS that does not override browser default focus styles without providing visible alternatives.",
      "Progressive enhancement to ensure core content is accessible without JavaScript.",
    ],
  },
  {
    title: "Reporting an accessibility problem",
    body: `If you experience any difficulty using this website or encounter an accessibility barrier not mentioned above, please tell us. We treat accessibility feedback seriously and aim to respond within 5 working days.

Email: accessibility@amplified.co.uk
Alternative: use our contact form at amplified.co.uk/contact

Please describe the barrier you have encountered, the assistive technology or browser you are using, and what you were trying to do. This helps us reproduce and fix the issue.`,
  },
  {
    title: "Enforcement",
    body: `If you are not satisfied with our response, you can contact the Equality Advisory and Support Service (EASS) at equalityadvisoryservice.com, or the Equality and Human Rights Commission at equalityhumanrights.com.`,
  },
  {
    title: "Review",
    body: `We review this statement and the accessibility of the website at least annually. When we fix an accessibility issue or identify a new limitation, we update this page to reflect the current state accurately.`,
  },
];

export default function Accessibility() {
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
            data-testid="text-accessibility-title"
          >
            Accessibility Statement
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
              ["Accessibility contact", "accessibility@amplified.co.uk"],
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
