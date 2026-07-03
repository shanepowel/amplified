'use client';

import { memo } from "react";
import Link from "next/link";
import { ArrowRight, ArrowLeft, CheckCircle } from "lucide-react";

interface AboutMethodologyProps {
  onOpenConsultation: (serviceType?: string) => void;
}

const phases = [
  {
    number: "01",
    label: "Assess",
    title: "We start by understanding what is actually there.",
    body: "Before any implementation, governance framework, or delivery model is designed, we conduct a structured assessment of your current state. No assumptions. No templates. A genuine audit of where you are and what you need.",
    outputs: [
      "AI Readiness Report with clear gap analysis and sequenced recommendations",
      "Governance Maturity Assessment mapped against your sector's regulatory standards",
      "Delivery Capability Review covering your operating model, PMO, and team structure",
      "Realistic, constraint-aware roadmap that reflects your organisation, not an ideal one",
    ],
    duration: "2 to 4 weeks",
    accentColor: "#181F4F",
  },
  {
    number: "02",
    label: "Implement",
    title: "We build it with you, not for you.",
    body: "Amplified practitioners embed inside your teams. We do not parachute in, hand over a report, and leave. We deliver alongside your people, inside your accountability structures, producing outputs that work in your governance environment.",
    outputs: [
      "AI capability, governance framework, or operating model, fully built and tested",
      "Custom software, platform, or AI system delivered to production",
      "Squad or agile model configured for your sector and governance requirements",
      "Integration with your existing PMO, programme governance, and assurance frameworks",
      "Weekly check-ins, sprint reviews, and reporting in formats your board recognises",
    ],
    duration: "Engagement-dependent",
    accentColor: "#60266A",
  },
  {
    number: "03",
    label: "Amplify",
    title: "We build the capability so you don't need us again.",
    body: "The measure of a good engagement is whether your teams can run it without us twelve months later. Every implementation phase includes a structured capability transfer programme. Coaching. Documentation. Centres of Excellence. The things that make the change stick.",
    outputs: [
      "Internal capability programme tailored to your team's current skills and gaps",
      "Centre of Excellence design, governance model, and initial setup",
      "Coaching programme for delivery leads, practitioners, and leadership",
      "Knowledge transfer documentation your team will actually use and maintain",
      "3-month post-engagement check-in to review adoption and address drift",
    ],
    duration: "Ongoing through implementation",
    accentColor: "#F85C70",
  },
];

const principles = [
  {
    title: "Governance first",
    desc: "We design the governance structure before any implementation begins. Every other sequence creates risk.",
  },
  {
    title: "Embedded delivery",
    desc: "We work inside your teams, not alongside them. The difference matters to the quality of what gets built.",
  },
  {
    title: "Capability transfer",
    desc: "Every engagement ends with your teams stronger than they started. We build capacity, not dependency.",
  },
  {
    title: "Sector rigour",
    desc: "We know the regulatory environments, the governance pressures, and the accountability structures our clients operate in.",
  },
  {
    title: "Honest sequencing",
    desc: "We tell you what needs to happen first, even when that is not what you hoped to hear.",
  },
  {
    title: "Measurable outputs",
    desc: "Every phase ends with defined, documented outputs. You always know what you got.",
  },
];

const AboutMethodology = memo(function AboutMethodology({ onOpenConsultation }: AboutMethodologyProps) {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#FAFAF9" }}>

      {/* HERO */}
      <section className="pt-40 pb-28" style={{ backgroundColor: "#181F4F" }}>
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/how-we-work">
            <span className="inline-flex items-center gap-2 text-sm mb-12 cursor-pointer" style={{ color: "rgba(255,255,255,0.45)" }}>
              <ArrowLeft className="h-4 w-4" />
              Back to How We Work
            </span>
          </Link>

          <p className="font-mono text-xs uppercase tracking-[0.14em] mb-6" style={{ color: "#F85C70" }}>
            The Amp Model
          </p>
          <h1 className="text-5xl md:text-6xl text-white mb-8 leading-tight" style={{ fontWeight: 600 }}>
            Assess.<br />Implement.<br />Amplify.
          </h1>
          <p className="text-lg max-w-[560px] leading-relaxed" style={{ color: "rgba(255,255,255,0.65)" }}>
            Three phases. Clear outputs at every stage. A structured approach to embedding new
            technologies, from AI to platform modernisation, and building the capability to sustain them
            in organisations where governance is not optional.
          </p>

          {/* Phase flow */}
          <div className="flex items-center gap-4 mt-14">
            {["Assess", "Implement", "Amplify"].map((phase, i) => (
              <div key={phase} className="flex items-center gap-4">
                <div
                  className="px-6 py-3 rounded text-sm font-semibold"
                  style={{
                    backgroundColor: i === 1 ? "#F85C70" : "rgba(255,255,255,0.08)",
                    color: i === 1 ? "#ffffff" : "rgba(255,255,255,0.8)",
                    border: i === 1 ? "none" : "1px solid rgba(255,255,255,0.15)",
                  }}
                >
                  {phase}
                </div>
                {i < 2 && (
                  <span className="text-base font-bold" style={{ color: "#F85C70" }}>→</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PHASES */}
      <section className="py-0" style={{ backgroundColor: "#FFFFFF" }}>
        {phases.map((phase, i) => (
          <div
            key={phase.label}
            className="border-b"
            style={{ borderColor: "#E8E4F0" }}
          >
            <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-24">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">

                {/* Phase identifier */}
                <div className="lg:col-span-1 flex lg:flex-col lg:items-center lg:pt-1">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0"
                    style={{ backgroundColor: phase.accentColor, color: "#FFFFFF" }}
                  >
                    {phase.number}
                  </div>
                </div>

                {/* Phase content */}
                <div className="lg:col-span-5">
                  <p
                    className="font-mono text-xs uppercase tracking-[0.14em] mb-4"
                    style={{ color: phase.accentColor === "#F85C70" ? "#F85C70" : "#60266A" }}
                  >
                    {phase.label}
                  </p>
                  <h2 className="text-3xl md:text-4xl mb-6 leading-tight" style={{ color: "#181F4F", fontWeight: 600 }}>
                    {phase.title}
                  </h2>
                  <p className="text-base leading-relaxed mb-6" style={{ color: "#65677B" }}>
                    {phase.body}
                  </p>
                  {phase.duration && (
                    <p className="font-mono text-xs" style={{ color: "#60266A" }}>
                      Typical duration: {phase.duration}
                    </p>
                  )}
                </div>

                {/* Outputs */}
                <div className="lg:col-span-6">
                  <div className="rounded-lg p-8" style={{ backgroundColor: "#F2F0F7" }}>
                    <p className="font-mono text-xs uppercase tracking-[0.12em] mb-5" style={{ color: "#60266A" }}>
                      What you get
                    </p>
                    <ul className="space-y-4">
                      {phase.outputs.map((output) => (
                        <li key={output} className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 flex-shrink-0 mt-0.5" style={{ color: "#F85C70" }} />
                          <span className="text-sm leading-relaxed" style={{ color: "#65677B" }}>
                            {output}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* PRINCIPLES */}
      <section className="py-28" style={{ backgroundColor: "#F2F0F7" }}>
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <p className="font-mono text-xs uppercase tracking-[0.14em] mb-4" style={{ color: "#F85C70" }}>
              How we operate
            </p>
            <h2 className="text-4xl md:text-5xl" style={{ color: "#181F4F", fontWeight: 600 }}>
              The principles behind<br />every engagement.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px" style={{ backgroundColor: "#DDD9EA" }}>
            {principles.map((p, i) => (
              <div key={i} className="p-10" style={{ backgroundColor: "#F2F0F7" }}>
                <div className="w-6 h-px mb-5" style={{ backgroundColor: "#F85C70" }} />
                <h3 className="text-base font-semibold mb-3" style={{ color: "#181F4F" }}>
                  {p.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "#65677B" }}>
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT WE DELIVER */}
      <section className="py-28" style={{ backgroundColor: "#FFFFFF" }}>
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.14em] mb-4" style={{ color: "#F85C70" }}>
                The full scope
              </p>
              <h2 className="text-4xl md:text-5xl mb-6" style={{ color: "#181F4F", fontWeight: 600 }}>
                We cover everything from strategy to code.
              </h2>
              <p className="text-lg leading-relaxed" style={{ color: "#65677B" }}>
                The Amp Model is the delivery structure. The services that run through it cover the full
                spectrum: AI governance, AI implementation, structured delivery, capability building,
                coaching at every level, and custom software and platform development.
              </p>
              <p className="text-lg leading-relaxed mt-4" style={{ color: "#65677B" }}>
                Whether you need to govern AI responsibly, build a digital product, coach your leadership
                team through transformation, or redesign your delivery model, the methodology stays the same.
                Assess what is there. Implement with rigour. Amplify so it sticks.
              </p>
            </div>
            <div className="space-y-4">
              {[
                { tag: "AMP 01", name: "AI Governance", href: "/ai-governance" },
                { tag: "AMP 02", name: "AI Implementation", href: "/ai-governance" },
                { tag: "AMP 03", name: "Structured Delivery", href: "/structured-delivery" },
                { tag: "AMP 04", name: "Capability Building", href: "/capability" },
                { tag: "AMP 05", name: "Coaching", href: "/coaching" },
                { tag: "AMP 06", name: "Tech Build", href: "/transformation" },
              ].map((service) => (
                <Link key={service.tag} href={service.href}>
                  <div
                    className="flex items-center justify-between px-6 py-4 rounded transition-all duration-200 cursor-pointer group"
                    style={{ border: "1px solid #E8E4F0" }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.borderColor = "#60266A";
                      (e.currentTarget as HTMLElement).style.backgroundColor = "#F2F0F7";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.borderColor = "#E8E4F0";
                      (e.currentTarget as HTMLElement).style.backgroundColor = "transparent";
                    }}
                  >
                    <div className="flex items-center gap-4">
                      <span className="font-mono text-xs" style={{ color: "#F85C70" }}>{service.tag}</span>
                      <span className="text-sm font-semibold" style={{ color: "#181F4F" }}>{service.name}</span>
                    </div>
                    <ArrowRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" style={{ color: "#60266A" }} />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28" style={{ backgroundColor: "#60266A" }}>
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl text-white mb-6" style={{ fontWeight: 600 }}>
                Ready to see the Amp Model in action?
              </h2>
              <p className="text-lg leading-relaxed" style={{ color: "rgba(255,255,255,0.65)" }}>
                A first conversation takes 30 minutes. We will tell you honestly where you are,
                what needs to happen first, and whether we are the right fit.
              </p>
            </div>
            <div className="lg:flex lg:justify-end">
              <button
                onClick={() => onOpenConsultation()}
                className="amp-focus-ring-on-navy inline-flex items-center gap-3 px-10 py-5 text-base font-semibold transition-all duration-200 hover:gap-4"
                style={{ backgroundColor: "#F85C70", color: "#FFFFFF", borderRadius: "4px" }}
                data-testid="button-about-methodology-cta"
              >
                Start a conversation
                <ArrowRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
});

export default AboutMethodology;
