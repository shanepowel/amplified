'use client';

import { memo } from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle, ExternalLink } from "lucide-react";
import { ServiceSchema } from "@/components/structured-data";
import heroImage from "@assets/68_1760470836673.webp";
import strategicThinkingImage from "@assets/50_1760470599806.webp";

interface TeamsProps {
  onOpenConsultation: (serviceType?: string) => void;
}

const stagesOfStableTeams = [
  {
    number: "01",
    title: "Diagnose",
    body: "We assess where the team is against five dimensions: clarity, capability, collaboration, cadence, and culture. Not a survey. A structured diagnostic conducted with the team and its leadership.",
  },
  {
    number: "02",
    title: "Rebaseline",
    body: "We reset the fundamentals. Roles, accountabilities, ways of working, and decision rights are clarified and agreed. The team establishes what good looks like and how it will know when it gets there.",
  },
  {
    number: "03",
    title: "Stabilise",
    body: "Operating rhythms are embedded. Communication patterns become predictable. Delivery cadences hold. The team begins to perform consistently rather than in bursts of effort followed by recovery.",
  },
  {
    number: "04",
    title: "Amplify",
    body: "With stability as the foundation, we build the conditions for high performance. Continuous improvement becomes a team behaviour, not a management initiative. The framework becomes self-sustaining.",
  },
];

const dimensions = [
  {
    label: "Clarity",
    desc: "Purpose, direction, and individual accountabilities are unambiguous. Every team member knows what they are responsible for and why it matters.",
  },
  {
    label: "Capability",
    desc: "The skills and experience within the team match the demands placed on it. Gaps are identified, named, and addressed, not worked around.",
  },
  {
    label: "Collaboration",
    desc: "The team operates as a coherent unit. Information flows. Decisions are made at the right level. Conflict is productive, not avoided or destructive.",
  },
  {
    label: "Cadence",
    desc: "Delivery is predictable. Rituals and rhythms are established and held. The team does not lurch from crisis to crisis or rely on heroics to hit targets.",
  },
  {
    label: "Culture",
    desc: "Psychological safety exists. People challenge ideas, not each other. Standards are upheld because the team believes in them, not because they are monitored.",
  },
];

const Teams = memo(function Teams({ onOpenConsultation }: TeamsProps) {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#FAFAF9" }}>
      <ServiceSchema name="Stable Teams" description="Stable Teams is a trademarked framework from AmplifiedTeams that helps organisations rebaseline their teams and operations to achieve sustained high performance. Not recruitment." url="https://amplified.co.uk/teams" />

      {/* HERO */}
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-28" style={{ backgroundColor: "#181F4F" }}>
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <p className="font-mono text-xs uppercase tracking-[0.14em]" style={{ color: "#F85C70" }}>
                  AmplifiedTeams
                </p>
                <span
                  className="font-mono text-xs px-2 py-1 rounded"
                  style={{ backgroundColor: "rgba(248,92,112,0.15)", color: "#F85C70", border: "1px solid rgba(248,92,112,0.3)" }}
                >
                  Trademarked Framework
                </span>
              </div>
              <h1
                className="font-display text-5xl lg:text-6xl mb-8 leading-tight"
                style={{ color: "#FFFFFF", fontWeight: 400 }}
                data-testid="text-teams-title"
              >
                Stable Teams&trade;
              </h1>
              <p className="font-sans text-xl mb-4 leading-relaxed" style={{ color: "rgba(255,255,255,0.85)" }}>
                A structured framework for rebaselining teams and operations to achieve sustained high performance.
              </p>
              <p className="font-sans text-base leading-relaxed mb-10" style={{ color: "rgba(255,255,255,0.55)" }}>
                Most team problems are not recruitment problems. They are clarity problems, cadence problems,
                accountability problems. Stable Teams addresses the conditions that determine whether a team
                performs, not just who is on it.
              </p>
              <div className="flex flex-wrap gap-4">
                <button
                  onClick={() => onOpenConsultation("stable-teams")}
                  className="amp-focus-ring-on-navy inline-flex items-center gap-2 px-8 h-11 font-sans font-bold text-sm rounded transition-colors duration-200"
                  style={{ backgroundColor: "#F85C70", color: "#181F4F" }}
                  onMouseOver={(e) => { (e.currentTarget as HTMLButtonElement).style.backgroundColor = "#d94a5e"; }}
                  onMouseOut={(e) => { (e.currentTarget as HTMLButtonElement).style.backgroundColor = "#F85C70"; }}
                  data-testid="button-stable-teams-cta"
                >
                  Start a Conversation
                </button>
                <a
                  href="https://amplifiedteams.co.uk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 h-11 font-sans font-bold text-sm rounded transition-colors duration-200"
                  style={{ border: "1px solid rgba(255,255,255,0.25)", color: "#FFFFFF", backgroundColor: "transparent" }}
                  onMouseOver={(e) => { (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "rgba(255,255,255,0.07)"; }}
                  onMouseOut={(e) => { (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "transparent"; }}
                >
                  <ExternalLink className="h-4 w-4" />
                  amplifiedteams.co.uk
                </a>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="rounded overflow-hidden" style={{ aspectRatio: "4/3" }}>
                <img
                  src={heroImage.src}
                  alt="Stable Teams framework in practice"
                  className="w-full h-full object-cover"
                  data-testid="img-teams-hero"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* THE PROBLEM */}
      <section className="py-24 lg:py-32 border-b" style={{ borderColor: "#E5E3EE" }}>
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.12em] mb-4" style={{ color: "#6B6E81" }}>
                The Problem
              </p>
              <h2 className="font-display text-4xl mb-6" style={{ color: "#181F4F", fontWeight: 400 }}>
                Most team interventions treat symptoms, not causes
              </h2>
              <p className="font-sans text-base leading-relaxed mb-6" style={{ color: "#65677B" }}>
                Organisations experiencing poor delivery often look for a people solution. They hire more,
                restructure, or bring in contractors. The underlying dysfunction remains. New faces, same problems.
              </p>
              <p className="font-sans text-base leading-relaxed mb-6" style={{ color: "#65677B" }}>
                The Stable Teams framework takes a different starting point. Before you change who is on the team,
                understand why the team is not performing. In most cases, the answer is not a capability gap.
                It is a structural one.
              </p>
              <p className="font-sans text-base leading-relaxed italic" style={{ color: "#65677B" }}>
                Stable Teams was developed by AmplifiedTeams, a subsidiary of Amplified, to give organisations
                a repeatable, evidence-based route to team performance that does not require a restructure to see results.
              </p>
            </div>
            <div>
              <img
                src={strategicThinkingImage.src}
                alt="Strategic team thinking and performance rebaselining"
                className="w-full rounded mb-8"
                loading="lazy"
              />
              <div className="p-8 rounded" style={{ backgroundColor: "#F2F0F7", border: "1px solid #DDD9EA" }}>
                <p className="font-mono text-xs uppercase tracking-[0.12em] mb-4" style={{ color: "#F85C70" }}>
                  What Stable Teams is not
                </p>
                <ul className="space-y-3">
                  {[
                    "It is not a recruitment solution",
                    "It is not a training programme bolted on after the fact",
                    "It is not a culture survey with an action plan",
                    "It is not a reorg wrapped in different language",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="font-mono text-xs mt-1 flex-shrink-0" style={{ color: "#F85C70" }}>x</span>
                      <p className="font-sans text-sm leading-relaxed" style={{ color: "#65677B" }}>{item}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* THE FRAMEWORK: FOUR STAGES */}
      <section className="py-24 lg:py-32" style={{ backgroundColor: "#F2F0F7" }}>
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <p className="font-mono text-xs uppercase tracking-[0.12em] mb-4" style={{ color: "#6B6E81" }}>
            The Framework
          </p>
          <h2 className="font-display text-4xl mb-6" style={{ color: "#181F4F", fontWeight: 400 }}>
            Four stages. One outcome.
          </h2>
          <p className="font-sans text-base max-w-[560px] mb-16 leading-relaxed" style={{ color: "#65677B" }}>
            Stable Teams moves through four structured stages, each building on the last. The goal
            is not a one-off intervention but a team that sustains high performance independently.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 border-l border-t" style={{ borderColor: "#C8C4D8" }}>
            {stagesOfStableTeams.map((stage, i) => (
              <div key={i} className="p-10 border-r border-b flex flex-col" style={{ borderColor: "#C8C4D8" }}>
                <p className="font-mono text-4xl mb-4" style={{ color: "#DDD9EA", fontWeight: 400 }}>{stage.number}</p>
                <h3 className="font-display text-2xl mb-4" style={{ color: "#181F4F", fontWeight: 400 }}>{stage.title}</h3>
                <p className="font-sans text-base leading-relaxed" style={{ color: "#65677B" }}>{stage.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* THE FIVE DIMENSIONS */}
      <section className="py-24 lg:py-32 border-t" style={{ borderColor: "#E5E3EE" }}>
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <p className="font-mono text-xs uppercase tracking-[0.12em] mb-4" style={{ color: "#6B6E81" }}>
            What We Assess
          </p>
          <h2 className="font-display text-4xl mb-6" style={{ color: "#181F4F", fontWeight: 400 }}>
            The five dimensions of team stability
          </h2>
          <p className="font-sans text-base max-w-[560px] mb-16 leading-relaxed" style={{ color: "#65677B" }}>
            The diagnostic phase of the framework assesses each team across five interconnected dimensions.
            Every rebaselining plan is built from the results.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border-l border-t" style={{ borderColor: "#E5E3EE" }}>
            {dimensions.map((dim, i) => (
              <div key={i} className="p-8 border-r border-b" style={{ borderColor: "#E5E3EE" }}>
                <div className="flex items-center gap-3 mb-4">
                  <CheckCircle className="h-4 w-4 flex-shrink-0" style={{ color: "#F85C70" }} />
                  <h3 className="font-display text-xl" style={{ color: "#181F4F", fontWeight: 400 }}>{dim.label}</h3>
                </div>
                <p className="font-sans text-sm leading-relaxed" style={{ color: "#65677B" }}>{dim.desc}</p>
              </div>
            ))}

            {/* Sixth cell: outcomes panel */}
            <div className="p-8 border-r border-b" style={{ borderColor: "#E5E3EE", backgroundColor: "#181F4F" }}>
              <p className="font-mono text-xs uppercase tracking-[0.12em] mb-4" style={{ color: "#F85C70" }}>
                The outcome
              </p>
              <p className="font-display text-xl mb-4" style={{ color: "#FFFFFF", fontWeight: 400 }}>
                A team that performs predictably, consistently, and independently
              </p>
              <button
                onClick={() => onOpenConsultation("stable-teams")}
                className="amp-focus-ring-on-navy rounded inline-flex items-center gap-2 text-sm font-semibold hover:gap-3 transition-all duration-200"
                style={{ color: "#F85C70" }}
                data-testid="button-discuss-framework"
              >
                Discuss the framework <ArrowRight className="h-3 w-3" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* WHO IT IS FOR */}
      <section className="py-24 lg:py-32 border-t" style={{ backgroundColor: "#F2F0F7", borderColor: "#DDD9EA" }}>
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.12em] mb-4" style={{ color: "#6B6E81" }}>
                Who It Is For
              </p>
              <h2 className="font-display text-4xl mb-8" style={{ color: "#181F4F", fontWeight: 400 }}>
                Built for organisations where team performance is non-negotiable
              </h2>
              <ul className="space-y-5">
                {[
                  "Delivery directors whose programmes are underperforming despite good people",
                  "CIOs who have restructured but not seen the performance shift they expected",
                  "Transformation leads who need teams to hold pace across a multi-year programme",
                  "Technology organisations scaling squads and losing consistency across them",
                  "Regulated industries where team instability creates governance and compliance risk",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <CheckCircle className="h-5 w-5 flex-shrink-0 mt-0.5" style={{ color: "#F85C70" }} />
                    <p className="font-sans text-base leading-relaxed" style={{ color: "#65677B" }}>{item}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div
              className="p-10 rounded"
              style={{ backgroundColor: "#181F4F" }}
            >
              <p className="font-mono text-xs uppercase tracking-[0.12em] mb-6" style={{ color: "#F85C70" }}>
                AmplifiedTeams
              </p>
              <h3 className="font-display text-2xl mb-4" style={{ color: "#FFFFFF", fontWeight: 400 }}>
                The Stable Teams framework is delivered by AmplifiedTeams, our specialist team performance subsidiary
              </h3>
              <p className="font-sans text-base leading-relaxed mb-8" style={{ color: "rgba(255,255,255,0.6)" }}>
                AmplifiedTeams works alongside the Amplified consulting partnership to deliver the framework
                inside client environments. Where our consulting work diagnoses systemic issues, Stable Teams
                provides the structured route to resolution at team level.
              </p>
              <div className="flex flex-wrap gap-4">
                <button
                  onClick={() => onOpenConsultation("stable-teams")}
                  className="amp-focus-ring-on-navy inline-flex items-center gap-2 px-8 h-11 font-sans font-bold text-sm rounded transition-colors duration-200"
                  style={{ backgroundColor: "#F85C70", color: "#181F4F" }}
                  onMouseOver={(e) => { (e.currentTarget as HTMLButtonElement).style.backgroundColor = "#d94a5e"; }}
                  onMouseOut={(e) => { (e.currentTarget as HTMLButtonElement).style.backgroundColor = "#F85C70"; }}
                  data-testid="button-start-conversation"
                >
                  Start the Conversation
                </button>
                <a
                  href="https://amplifiedteams.co.uk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 h-11 font-sans font-bold text-sm rounded transition-colors duration-200"
                  style={{ border: "1px solid rgba(255,255,255,0.2)", color: "#FFFFFF", backgroundColor: "transparent" }}
                  onMouseOver={(e) => { (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "rgba(255,255,255,0.07)"; }}
                  onMouseOut={(e) => { (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "transparent"; }}
                  data-testid="button-visit-amplifiedteams"
                >
                  <ExternalLink className="h-4 w-4" />
                  amplifiedteams.co.uk
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
});

export default Teams;
