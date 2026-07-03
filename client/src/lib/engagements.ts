export interface Engagement {
  slug: string;
  name: string;
  tagline: string;
  buyerSentence: string;
  problem: string[];
  included: string[];
  duration: string;
  price: string;
  outcome: string;
  caseStudyId: string;
  caseStudyName: string;
  caseStudySector: string;
  caseStudyOutcome: string;
  notForYouIf: string[];
  forBuyer: string;
  qualifiers: string[];
  timeline: { label: string; focus: string; detail: string }[];
  oneLineOutcome: string;
}

export const engagements: Engagement[] = [
  {
    slug: "squad-blueprint",
    name: "Squad Blueprint",
    tagline: "A six-week engagement for delivery directors who need their teams to ship more reliably",
    forBuyer: "for delivery directors",
    buyerSentence:
      "Delivery directors and heads of engineering running teams of fifty to three hundred people in regulated industries or large public-sector programmes, where delivery has slowed, accountability has blurred, or a recent restructure has left the operating model unclear.",
    problem: [
      "When delivery teams grow past fifty people, the informal ways of working that got you here stop working. Squads become loosely coupled to outcomes, dependencies multiply, and senior leaders end up firefighting in standups instead of steering.",
      "Most operating-model redesigns produce slide decks that nobody uses three months later. Squad Blueprint produces an operating model your teams actually run on.",
    ],
    included: [
      "A diagnostic of your current delivery operating model across squad design, accountability, dependency management, and decision rights",
      "Workshops with your delivery leadership to design the target operating model using the Squad Blueprint framework",
      "A documented operating model covering squad structure, charters, interfaces, and governance",
      "A 90-day adoption plan with named owners and weekly checkpoints",
      "Two follow-up sessions at 30 and 60 days to course-correct",
    ],
    duration: "Six weeks of engagement, plus two follow-up sessions",
    price: "Scoped to engagement, discussed during initial conversation.",
    outcome:
      "A documented operating model your delivery leadership has agreed and signed off on. A 90-day adoption plan in execution. Named accountabilities for every squad and every cross-squad dependency. A baseline measurement of delivery health you can track quarterly thereafter.",
    caseStudyId: "payment-provider",
    caseStudyName: "Global Payment Provider PLC",
    caseStudySector: "Financial Services",
    caseStudyOutcome:
      "A 150-person merged delivery function rebased into a coherent squad model, with over 12% productivity gain in four months and the operating model ratified at board level.",
    notForYouIf: [
      "Your team is under thirty people. The framework is over-engineered for that scale and a half-day workshop would serve you better.",
      "You are looking for an interim head of delivery rather than a methodology engagement.",
      "Your leadership team is not aligned that the operating model is the problem. The engagement before this one is a leadership-alignment conversation we can have separately.",
    ],
    qualifiers: [
      "You run a delivery or engineering function of fifty people or more in a regulated sector or major public-sector programme.",
      "Your squads have grown faster than your operating model and dependencies are starting to bite during ceremonies and reviews.",
      "A recent restructure, merger, or leadership change has left squad accountabilities and decision rights unclear.",
    ],
    timeline: [
      { label: "Week 1", focus: "Diagnostic", detail: "Read of the current operating model across squad design, accountability, dependencies, and decision rights." },
      { label: "Weeks 2 to 3", focus: "Design workshops", detail: "Working sessions with delivery leadership to design the target operating model on the Squad Blueprint framework." },
      { label: "Week 4", focus: "Operating model draft", detail: "Squad structure, charters, interfaces, and governance written up for review." },
      { label: "Week 5", focus: "Adoption planning", detail: "A 90-day adoption plan with named owners, weekly checkpoints, and a baseline measurement plan." },
      { label: "Week 6", focus: "Sign-off and handover", detail: "Final operating model agreed at the appropriate level and handed to your delivery leadership for execution." },
      { label: "Days 30 and 60", focus: "Course-correction", detail: "Two follow-up sessions to review adoption, surface friction, and adjust the plan with you." },
    ],
    oneLineOutcome: "A delivery operating model your leadership has signed off on, in execution.",
  },
  {
    slug: "the-forge",
    name: "The Forge",
    tagline: "A four-week launch intensive for programmes that need to get the foundations right before delivery starts",
    forBuyer: "for programme directors and SROs",
    buyerSentence:
      "Programme directors, SROs, and senior responsible owners launching new major digital transformation programmes in regulated industries or central and local government, where the cost of starting wrong is measured in regulatory exposure, supplier disputes, or governance failures that surface six months in.",
    problem: [
      "Most large programmes are still figuring themselves out three months after delivery is meant to have started. Governance is half-defined, the supplier model has structural flaws nobody has named, and operating cadence is still being negotiated.",
      "Decisions that should have been locked at launch are being made under delivery pressure, badly. The Forge gets these foundations right in the four weeks before delivery starts, so the programme runs from day one rather than discovering itself in flight.",
    ],
    included: [
      "Programme governance design covering decision rights, escalation paths, board cadence, and reporting structures fit for the scale and risk profile",
      "Operating model design across delivery, supplier management, risk, and assurance",
      "Supplier model review and contract architecture assessment, surfacing structural risks before they become live problems",
      "Launch readiness assessment against The Forge framework, with a clear go/no-go view on the foundations",
      "A documented programme operating handbook the team runs from on day one",
    ],
    duration: "Four weeks of intensive engagement, ending at programme launch",
    price: "Scoped to engagement, discussed during initial conversation.",
    outcome:
      "A programme operating handbook covering governance, delivery cadence, supplier management, and assurance. A documented decision rights framework signed off at the appropriate executive level. A surfaced and addressed list of structural risks in the supplier model. A clear launch readiness assessment with named gaps and owners.",
    caseStudyId: "payment-provider",
    caseStudyName: "Global Payment Provider PLC",
    caseStudySector: "Financial Services",
    caseStudyOutcome:
      "A 150-person delivery function across two legacy cultures was launched into a coherent squad model in under four months, with measurable improvement in cross-leader communication from week one.",
    notForYouIf: [
      "Your programme has already been running for more than three months. The Forge is a launch engagement, not a recovery engagement.",
      "You want a single methodology imposed regardless of context. The Forge is opinionated but tailored, and we adjust the framework to your sector, scale, and constraints.",
      "The decision to launch the programme this way is not yours to make. We work most effectively with the senior accountable owner, not with someone briefed by them.",
    ],
    qualifiers: [
      "You are launching a major programme in a regulated sector or central or local government in the next four to twelve weeks.",
      "The cost of getting governance, supplier model, or operating cadence wrong is measured in regulatory exposure, contractual disputes, or board-level scrutiny.",
      "You are the senior accountable owner and you have authority to lock decisions before delivery starts.",
    ],
    timeline: [
      { label: "Week 1", focus: "Governance design", detail: "Decision rights, escalation paths, board cadence, and reporting structures fit for the scale and risk profile." },
      { label: "Week 2", focus: "Operating model", detail: "Delivery cadence, supplier management, risk, and assurance designed as one system rather than separate workstreams." },
      { label: "Week 3", focus: "Supplier and contract review", detail: "Supplier model assessment and contract architecture review, surfacing structural risks before they become live problems." },
      { label: "Week 4", focus: "Launch readiness and handover", detail: "Launch readiness assessment with a clear go or no-go view, plus the programme operating handbook the team runs from on day one." },
    ],
    oneLineOutcome: "A programme that runs from day one rather than discovering itself in flight.",
  },
  {
    slug: "delivery-compass",
    name: "Delivery Compass",
    tagline: "An eight-week engagement aligning AI governance with how your organisation actually delivers",
    forBuyer: "for COOs, CTOs, CROs, and senior compliance leaders",
    buyerSentence:
      "Chief operating officers, chief technology officers, chief risk officers, and senior compliance leaders in regulated industries or public-sector organisations, where AI tools have been adopted faster than governance has kept up, where delivery and compliance functions are not yet aligned on AI oversight, and where a regulator, auditor, or board is starting to ask substantive questions.",
    problem: [
      "Most organisations have lost track of how AI is being used inside them, and the organisations that haven't have usually solved it as a compliance exercise rather than a delivery one. The acceptable-use policy gets written and filed.",
      "Meanwhile, ChatGPT is in browsers without policy oversight, Copilot is in IDEs producing code that's shipped to production, and bespoke AI tools are being built by individual teams without architectural review. Delivery Compass produces the operational picture that policy alone cannot, by treating AI governance as a delivery problem rather than a compliance one.",
    ],
    included: [
      "Structured discovery of AI usage across general-purpose tools, embedded vendor AI, internally-developed AI capabilities, and shadow AI usage",
      "Risk classification of each use case against data sensitivity, decision impact, and regulatory exposure",
      "Gap analysis against the governance frameworks relevant to your sector, including FCA, MHRA, NCSC, the public-sector AI playbook, and the EU AI Act as applicable",
      "Alignment workshops between delivery, architecture, risk, and compliance functions to design a shared governance operating model",
      "A written governance framework, a documented inventory, and a 90-day action plan with named owners",
    ],
    duration: "Eight weeks of discovery, alignment, and design",
    price: "Scoped to engagement, discussed during initial conversation.",
    outcome:
      "A documented inventory of AI usage in your organisation that did not exist before. A risk-classified view of which uses are defensible today and which need intervention. A governance framework aligned to the regulatory frameworks that apply to you, integrated with how delivery and architecture actually operate. A 90-day action plan you can execute with your existing team or with our continued support.",
    caseStudyId: "elsevier",
    caseStudyName: "Elsevier",
    caseStudySector: "Publishing & Technology",
    caseStudyOutcome:
      "Architecture and governance capability democratised across multiple product teams, with significant six-figure HR cost savings and the engagement extended after measurable improvement across all four squads.",
    notForYouIf: [
      "You are looking for AI strategy or AI capability building. Delivery Compass governs what already exists rather than extending it.",
      "You have not yet adopted AI at any meaningful scale. A lighter-touch readiness conversation would serve you better.",
      "You want governance treated as a compliance workstream separate from delivery. Delivery Compass is built on the position that AI governance is a delivery problem and won't deliver value if compliance is left to own it alone.",
    ],
    qualifiers: [
      "AI tools are in active use across your organisation and you do not have a clean inventory of what is running where.",
      "Your delivery, architecture, risk, and compliance functions are not yet aligned on how AI is overseen day to day.",
      "A regulator, auditor, or board has started asking substantive questions about AI usage that policy alone cannot answer.",
    ],
    timeline: [
      { label: "Weeks 1 to 2", focus: "Structured discovery", detail: "Discovery of AI usage across general-purpose tools, embedded vendor AI, internally-developed capabilities, and shadow usage." },
      { label: "Weeks 3 to 4", focus: "Risk classification", detail: "Risk classification of each use case against data sensitivity, decision impact, and regulatory exposure." },
      { label: "Week 5", focus: "Gap analysis", detail: "Gap analysis against the governance frameworks relevant to your sector, including FCA, MHRA, NCSC, the public-sector AI playbook, and the EU AI Act as applicable." },
      { label: "Week 6", focus: "Cross-function alignment", detail: "Workshops between delivery, architecture, risk, and compliance to design a shared governance operating model." },
      { label: "Week 7", focus: "Framework drafting", detail: "Drafting of the written governance framework, integrated with how delivery and architecture actually operate." },
      { label: "Week 8", focus: "Inventory and action plan", detail: "Final AI usage inventory and a 90-day action plan with named owners, ready to execute." },
    ],
    oneLineOutcome: "An AI governance framework integrated with how your organisation actually delivers.",
  },
];

export function getEngagement(slug: string): Engagement | undefined {
  return engagements.find((e) => e.slug === slug);
}
