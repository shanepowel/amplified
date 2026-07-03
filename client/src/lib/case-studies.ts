export type CaseStudyIconKey = "users" | "clock" | "trending" | "award";

export interface CaseStudyStat {
  value: string;
  label: string;
  icon: CaseStudyIconKey;
}

export interface CaseStudy {
  id: string;
  sector: string;
  company: string;
  service: string;
  challenge: string;
  solution: string;
  results: string[];
  stats: CaseStudyStat[];
  outcome: string;
}

export const caseStudies: CaseStudy[] = [
  {
    id: "payment-provider",
    sector: "Financial Services",
    company: "Global Payment Provider PLC",
    service: "AMP 03 · Structured Delivery",
    challenge:
      "Following a major acquisition, the organisation's Technical Delivery function had grown to 150 people across two legacy cultures with no shared ways of working. Delivery pace had slowed, communication between leaders had broken down, and the board was asking hard questions about productivity.",
    solution:
      "Amplified designed and embedded a structured squad model tailored to the merged organisation. Teams were given clear missions, defined capabilities, and governance structures that worked alongside the existing PMO. A programme of coaching, ceremonies redesign, and Kanban-based workflow improvement ran in parallel.",
    results: [
      "Cohesive teams with clear missions and defined capabilities",
      "Measurable improvement in cross-leader communication",
      "Increased team cohesion across the merged entities",
      "Over 12% productivity increase within four months",
      "Workflow optimisation through structured Kanban implementation",
    ],
    stats: [
      { value: "150", label: "Team members", icon: "users" },
      { value: "4 mo", label: "Implementation", icon: "clock" },
      { value: "+12%", label: "Productivity gain", icon: "trending" },
    ],
    outcome: "Governance and delivery model ratified by the board within the engagement period.",
  },
  {
    id: "elsevier",
    sector: "Publishing & Technology",
    company: "Elsevier",
    service: "AMP 04 · Capability Building",
    challenge:
      "Elsevier needed to democratise access to architecture expertise across multiple product teams following a period of acquisition and rapid growth. Teams were inconsistent in how they approached API design and system integration, and the organisation lacked a coherent operating model for its engineering function.",
    solution:
      "A specialised consulting team was deployed to coach teams on-site, redesign capability structures, and reorganise roles to build genuine architectural competence inside the teams rather than in a separate centre. The engagement also covered the integration of an acquired business into the existing technical estate.",
    results: [
      "Multiple teams gained direct access to architecture expertise",
      "Consistent API implementation standards adopted across teams",
      "Significantly increased team autonomy and decision-making confidence",
      "Acquired business integrated into the engineering estate without disruption",
      "Significant six-figure HR cost savings through capability restructuring",
    ],
    stats: [
      { value: "Six-figure", label: "HR cost savings", icon: "award" },
      { value: "18 mo", label: "Engagement", icon: "clock" },
      { value: "Enhanced", label: "Team autonomy", icon: "trending" },
    ],
    outcome: "Capability programme extended beyond the initial scope following measurable improvement across all four squads.",
  },
];
