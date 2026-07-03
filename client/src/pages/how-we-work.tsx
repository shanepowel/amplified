'use client';

import { memo } from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";
import { StructuredData } from "@/components/structured-data";
import { howWeWorkSchema, createBreadcrumbSchema } from "@/lib/schemas";
import { FurtherReading } from "@/components/further-reading";

interface HowWeWorkProps {
  onOpenConsultation: (serviceType?: string) => void;
}

const phases = [
  {
    tag: "AMP 01: ASSESS",
    title: "We start by understanding what's actually there.",
    body: "Before any implementation, governance framework, or delivery model is designed, we conduct a structured assessment of your current state, covering AI readiness, delivery capability, governance maturity, and team structure.",
    note: "Typical duration: 2–4 weeks.",
    outputs: [
      "AI Readiness Report, where you are, where the gaps are, what's needed before you can implement responsibly",
      "Governance Maturity Assessment, mapped against sector standards and regulatory requirements",
      "Delivery Capability Review, how your operating model and PMO will interact with the changes ahead",
      "Prioritised Roadmap, sequenced and realistic, reflecting your constraints, not just best-practice theory",
    ],
  },
  {
    tag: "AMP 02: IMPLEMENT",
    title: "We build it with you, not for you.",
    body: "Implementation at Amplified is always embedded. Our practitioners work inside your teams, alongside your people, delivering AI capabilities, governance frameworks, or new operating models within your existing structures.",
    outputs: [
      "AI implementation or governance framework, fully built and tested",
      "Squad or agile operating model configured for your sector and governance requirements",
      "Integration with existing PMO, programme governance, and assurance frameworks",
      "Live delivery with weekly check-ins, sprint reviews, and stakeholder reporting in formats your governance board recognises",
    ],
  },
  {
    tag: "AMP 03: AMPLIFY",
    title: "We build the capability so you don't need us again.",
    body: "The measure of a good engagement is whether your teams can run it without us twelve months later. Every implementation phase includes a structured embedding programme that transfers real capability, not just documentation.",
    note: "Amplified's goal is always to make itself unnecessary. That is how you know it worked.",
    outputs: [
      "Internal capability programme tailored to your team's current skills",
      "Centre of Excellence design and initial setup",
      "Knowledge transfer your team will actually use",
      "Coaching programme for leads and practitioners",
      "3-month post-engagement check-in to review adoption and address drift",
    ],
  },
];

const HowWeWork = memo(function HowWeWork({ onOpenConsultation }: HowWeWorkProps) {

  const breadcrumb = createBreadcrumbSchema([
    { name: 'Home', url: 'https://amplified.co.uk/' },
    { name: 'How We Work', url: 'https://amplified.co.uk/how-we-work' },
  ]);

  return (
    <>
      <StructuredData data={howWeWorkSchema as Record<string, unknown>} id="how-we-work-schema" />
      <StructuredData data={breadcrumb as Record<string, unknown>} id="how-we-work-breadcrumb" />
    <div className="min-h-screen font-sans" style={{ backgroundColor: "#ffffff" }}>
      {/* Hero */}
      <section
        className="py-28 lg:py-36"
        style={{ backgroundColor: "#181F4F" }}
      >
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <p
            className="font-mono text-xs uppercase tracking-[0.15em] mb-6"
            style={{ color: "#F85C70" }}
          >
            The Amp Model
          </p>
          <h1
            className="font-display text-5xl md:text-6xl text-white mb-8 max-w-[720px] leading-tight"
            style={{ fontWeight: 400 }}
          >
            How We Work
          </h1>
          <p
            className="font-sans text-xl mb-4"
            style={{ color: "#F85C70" }}
          >
            Digital transformation, delivered with discipline.
          </p>
          <p
            className="font-sans text-lg max-w-[580px] leading-relaxed"
            style={{ color: "rgba(255,255,255,0.75)" }}
          >
            We don't arrive with a methodology and leave you to figure out the rest. Every
            digital transformation engagement runs through three clear phases, each with defined
            outputs, governance checkpoints, and a built-in transfer of capability to your team.
          </p>
        </div>
      </section>

      {/* Three phases */}
      <section className="py-20 lg:py-28">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 space-y-0">
          {phases.map((phase, i) => (
            <div
              key={phase.tag}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 py-16 border-b"
              style={{ borderColor: "#E5E3EE" }}
            >
              <div>
                <p
                  className="font-mono text-xs uppercase tracking-[0.15em] mb-6"
                  style={{ color: "#F85C70" }}
                >
                  {phase.tag}
                </p>
                <h2
                  className="font-display text-3xl md:text-4xl mb-6 leading-tight"
                  style={{ color: "#181F4F", fontWeight: 400 }}
                >
                  {phase.title}
                </h2>
                <p
                  className="font-sans text-base leading-relaxed mb-4"
                  style={{ color: "#65677B" }}
                >
                  {phase.body}
                </p>
                {phase.note && (
                  <p
                    className="font-sans text-sm italic"
                    style={{ color: "#60266A" }}
                  >
                    {phase.note}
                  </p>
                )}
              </div>
              <div
                className="p-8 rounded"
                style={{ backgroundColor: "#F2F0F7" }}
              >
                <p
                  className="font-mono text-xs uppercase tracking-[0.12em] mb-5"
                  style={{ color: "#60266A" }}
                >
                  Outputs
                </p>
                <ul className="space-y-4">
                  {phase.outputs.map((output) => (
                    <li key={output} className="flex items-start gap-3">
                      <CheckCircle
                        className="h-5 w-5 flex-shrink-0 mt-0.5"
                        style={{ color: "#F85C70" }}
                      />
                      <span
                        className="font-sans text-sm leading-relaxed"
                        style={{ color: "#65677B" }}
                      >
                        {output}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      <FurtherReading tags={["Digital Transformation", "Structured Delivery", "Governance"]} maxArticles={3} />

      {/* CTA */}
      <section
        className="py-24 text-center"
        style={{ backgroundColor: "#60266A" }}
      >
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            className="font-display text-4xl md:text-5xl text-white mb-6"
            style={{ fontWeight: 400 }}
          >
            Ready to Amp Up?
          </h2>
          <p
            className="font-sans text-lg max-w-[480px] mx-auto mb-10"
            style={{ color: "rgba(255,255,255,0.8)" }}
          >
            Whether you're starting an AI strategy or untangling a delivery model, we'll give you
            a straight answer on where to begin.
          </p>
          <Link href="/contact">
            <button
              className="amp-focus-ring-on-navy inline-flex items-center gap-2 px-10 h-12 font-sans font-bold text-base rounded transition-colors duration-200"
              style={{ backgroundColor: "#F85C70", color: "#181F4F" }}
              data-testid="button-how-we-work-cta"
              onMouseOver={(e) =>
                ((e.currentTarget as HTMLButtonElement).style.backgroundColor = "#d94a5e")
              }
              onMouseOut={(e) =>
                ((e.currentTarget as HTMLButtonElement).style.backgroundColor = "#F85C70")
              }
            >
              Start a Conversation <ArrowRight className="h-4 w-4" />
            </button>
          </Link>
          <p
            className="font-sans text-sm mt-6"
            style={{ color: "rgba(255,255,255,0.5)" }}
          >
            No pitch. No deck. Just a 30-minute call.
          </p>
        </div>
      </section>
    </div>
    </>
  );
});

export default HowWeWork;
