'use client';

import { memo } from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle, Layers, Cpu, Users, Zap, Calendar, Repeat, Shield } from "lucide-react";
import { ServiceSchema } from "@/components/structured-data";

interface OrgDesignProps {
  onOpenConsultation: (serviceType?: string) => void;
}

const problemPoints = [
  "Decisions pile up at the top. Teams wait for sign-off on things they already know how to solve.",
  "Product ownership is blurry. No one is sure who has the authority to say yes.",
  "Managers spend more time coordinating than leading.",
  "Every new framework adds process without changing the underlying structure.",
  "Agile transformations stall and teams revert to the old habits within months.",
];

const approachPillars = [
  {
    icon: Layers,
    label: "Holacracy",
    title: "Distributed Authority",
    body: "A governance framework that places authority with roles, not job titles. Clear accountabilities, structured decision-making, and the ability to evolve continuously without waiting for management approval. Every role has explicit authority. Every tension has a path to resolution.",
  },
  {
    icon: Users,
    label: "Product Org Design",
    title: "Squad-Based Structure",
    body: "Operating structures aligned to products and outcomes, not functions. Cross-functional teams with clear ownership, embedded delivery capability, and a product leadership layer that actually leads rather than coordinates. Teams that know what they are responsible for and have what they need to deliver it.",
  },
  {
    icon: Cpu,
    label: "AI Integration",
    title: "AI-Powered Coordination",
    body: "AI woven into governance, communication, and delivery from the start. Autonomous role execution, AI-assisted decision support, and intelligent coordination that reduces the need for human overhead. Not bolted on after the fact. Built into how the organisation operates.",
  },
];

const audiences = [
  {
    title: "Scale-ups and growth-stage companies",
    body: "Struggling with the transition from founder-led to professionally managed. The informal structures that worked at twenty people are breaking at two hundred.",
  },
  {
    title: "Mid-size enterprises where agile has stalled",
    body: "Teams that have done Scrum, done SAFe, and are still not getting the outcomes they expected. The methodology is in place. The mindset and authority structure are not.",
  },
  {
    title: "Public sector organisations building product capability",
    body: "Trying to introduce genuine product thinking and squad-based delivery within legacy governance structures that were not built for it.",
  },
  {
    title: "Leadership teams ready for something fundamentally different",
    body: "Organisations that have tried the incremental improvements and know that the issue is structural, not behavioural. Ready to redesign the model, not just the process.",
  },
];

const services = [
  {
    icon: Zap,
    label: "Fixed Fee / 3-4 Weeks",
    title: "Organisational Design Sprint",
    body: "A rapid assessment and design engagement that produces a clear blueprint for your new operating model. We assess your current structure, governance, and AI readiness and design your future state.",
    outputs: [
      "Current-state organisational diagnosis",
      "Holacracy constitution adaptation for your context",
      "Squad and circle structure design",
      "Role map with accountabilities and authorities",
      "AI tooling stack recommendation",
      "Implementation roadmap",
    ],
  },
  {
    icon: Repeat,
    label: "Retained / 3-6 Months",
    title: "Implementation Partner",
    body: "Embedded delivery support for organisations moving from design to reality. We work alongside your leadership team to roll out the model, coach role holders, facilitate governance meetings, and integrate AI tools into your workflow.",
    outputs: [
      "Hands-on implementation alongside your team",
      "Role holder coaching and governance facilitation",
      "AI tooling integration into daily operations",
      "Internal capability built to sustain the model independently",
      "Measurable outcome tracking throughout",
    ],
  },
  {
    icon: Shield,
    label: "Ongoing Retainer",
    title: "Governance Advisory",
    body: "A lighter-touch ongoing relationship for organisations that have implemented and need a thinking partner. Regular governance reviews, AI integration support, and leadership coaching to keep the model evolving.",
    outputs: [
      "Quarterly governance reviews",
      "AI integration support as tooling evolves",
      "Leadership coaching for role holders",
      "Continuous improvement facilitation",
      "On-call advisory for governance tensions",
    ],
  },
];

const whyPoints = [
  "We have built and run these models in practice, not designed them in slides.",
  "Our background spans agile delivery transformation, squad operating models in complex programmes, and practical AI implementation at team and organisational level.",
  "We know that most organisations cannot go from traditional hierarchy to full holacracy overnight. Our approach is modular and pragmatic.",
  "You can start with product org design. You can pilot a single circle. You can introduce AI tooling before changing governance. We meet you where you are.",
  "We are not selling a methodology off a shelf. We are working from direct experience of what makes self-managing organisations function and what causes them to fail.",
];

const OrgDesign = memo(function OrgDesign({ onOpenConsultation }: OrgDesignProps) {
  return (
    <div className="min-h-screen font-sans" style={{ backgroundColor: "#ffffff" }}>
      <ServiceSchema name="Autonomous Organisations" description="Amplified helps ambitious organisations replace slow hierarchies with self-managing, product-led operating models powered by AI. Holacracy, product org design, and AI integration." url="https://amplified.co.uk/org-design" />

      {/* HERO */}
      <section className="py-28 lg:py-36" style={{ backgroundColor: "#181F4F" }}>
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <p className="font-mono text-xs uppercase tracking-[0.15em] mb-6" style={{ color: "#F85C70" }}>
            AMP 07 / Autonomous Organisations
          </p>
          <h1
            className="font-display text-5xl md:text-6xl lg:text-7xl text-white mb-8 leading-tight max-w-[800px]"
            style={{ fontWeight: 400 }}
            data-testid="text-page-title"
          >
            The organisation of the future runs itself.
          </h1>
          <p className="font-sans text-lg md:text-xl max-w-[600px] leading-relaxed mb-12" style={{ color: "rgba(255,255,255,0.7)" }}>
            We help leadership teams move from slow, manager-dependent hierarchies to product-led,
            self-managing organisations powered by AI. Less coordination overhead. Faster decisions.
            Teams that know what to do without being told.
          </p>
          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => onOpenConsultation("org-design")}
              className="amp-focus-ring-on-navy inline-flex items-center gap-2 px-8 h-12 font-sans font-bold text-base rounded transition-colors duration-200"
              style={{ backgroundColor: "#F85C70", color: "#181F4F" }}
              onMouseOver={(e) => ((e.currentTarget as HTMLButtonElement).style.backgroundColor = "#d94a5e")}
              onMouseOut={(e) => ((e.currentTarget as HTMLButtonElement).style.backgroundColor = "#F85C70")}
              data-testid="button-hero-cta"
            >
              Start the Conversation <ArrowRight className="h-4 w-4" />
            </button>
            <a
              href="#how-it-works"
              className="inline-flex items-center gap-2 px-8 h-12 font-sans font-semibold text-base rounded transition-colors duration-200"
              style={{ border: "1px solid rgba(255,255,255,0.25)", color: "rgba(255,255,255,0.85)", backgroundColor: "transparent" }}
              onMouseOver={(e) => { (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "rgba(255,255,255,0.08)"; }}
              onMouseOut={(e) => { (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "transparent"; }}
            >
              See How It Works
            </a>
          </div>
        </div>
      </section>

      {/* THE PROBLEM */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.12em] mb-5" style={{ color: "#6B6E81" }}>
                The Problem
              </p>
              <h2 className="font-display text-4xl md:text-5xl mb-6" style={{ color: "#181F4F", fontWeight: 400 }}>
                Most growing organisations hit the same wall.
              </h2>
              <p className="font-sans text-base leading-relaxed mb-4" style={{ color: "#65677B" }}>
                The real issue is not your people. It is the model. Traditional hierarchies were
                built for a world where information was scarce and decisions needed to flow upward
                to be made well. That world no longer exists.
              </p>
              <p className="font-sans text-base leading-relaxed" style={{ color: "#65677B" }}>
                Every attempt to fix it within the existing structure (a new process, a new
                framework, a new tool) adds complexity without changing the underlying
                architecture. The only way out is to redesign the architecture itself.
              </p>
            </div>
            <div className="space-y-0 border-l-2" style={{ borderColor: "#F85C70" }}>
              {problemPoints.map((point, i) => (
                <div
                  key={i}
                  className="pl-6 py-5 border-b"
                  style={{ borderColor: "#E5E3EE" }}
                >
                  <p className="font-sans text-sm leading-relaxed" style={{ color: "#65677B" }}>
                    {point}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* WHAT WE DO */}
      <section id="how-it-works" className="py-20 lg:py-28 scroll-mt-20" style={{ backgroundColor: "#181F4F" }}>
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <p className="font-mono text-xs uppercase tracking-[0.12em] mb-5" style={{ color: "#F85C70" }}>
            What We Do
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end mb-16">
            <h2 className="font-display text-4xl md:text-5xl text-white" style={{ fontWeight: 400 }}>
              Three proven approaches. One coherent system.
            </h2>
            <p className="font-sans text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.65)" }}>
              Together, these create an organisation that is genuinely self-managing. Authority sits
              with the people closest to the work. AI handles the coordination load. Leadership
              focuses on strategy rather than traffic management.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 border-l border-t" style={{ borderColor: "rgba(255,255,255,0.08)" }}>
            {approachPillars.map((pillar) => (
              <div key={pillar.label} className="p-8 border-r border-b" style={{ borderColor: "rgba(255,255,255,0.08)" }}>
                <pillar.icon className="h-6 w-6 mb-5" style={{ color: "#F85C70" }} />
                <p className="font-mono text-xs uppercase tracking-[0.12em] mb-2" style={{ color: "#F85C70" }}>
                  {pillar.label}
                </p>
                <h3 className="font-display text-2xl text-white mb-4" style={{ fontWeight: 400 }}>
                  {pillar.title}
                </h3>
                <p className="font-sans text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.6)" }}>
                  {pillar.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHO THIS IS FOR */}
      <section className="py-20 lg:py-28" style={{ backgroundColor: "#F2F0F7" }}>
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <p className="font-mono text-xs uppercase tracking-[0.12em] mb-5" style={{ color: "#6B6E81" }}>
            Who This Is For
          </p>
          <h2 className="font-display text-4xl md:text-5xl mb-12" style={{ color: "#181F4F", fontWeight: 400 }}>
            Organisations ready to think differently about how they operate.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border-l border-t" style={{ borderColor: "#E5E3EE" }}>
            {audiences.map((audience) => (
              <div key={audience.title} className="p-8 border-r border-b" style={{ borderColor: "#E5E3EE", backgroundColor: "#ffffff" }}>
                <div className="w-0.5 h-6 mb-5 rounded" style={{ backgroundColor: "#F85C70" }} />
                <h3 className="font-display text-xl mb-3" style={{ color: "#181F4F", fontWeight: 400 }}>
                  {audience.title}
                </h3>
                <p className="font-sans text-sm leading-relaxed" style={{ color: "#65677B" }}>
                  {audience.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <p className="font-mono text-xs uppercase tracking-[0.12em] mb-5" style={{ color: "#6B6E81" }}>
            Our Services
          </p>
          <h2 className="font-display text-4xl md:text-5xl mb-12" style={{ color: "#181F4F", fontWeight: 400 }}>
            Three ways to engage.
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 border-l border-t" style={{ borderColor: "#E5E3EE" }}>
            {services.map((service, i) => (
              <div key={service.title} className="p-8 border-r border-b flex flex-col" style={{ borderColor: "#E5E3EE" }}>
                <div className="flex items-start justify-between mb-5">
                  <service.icon className="h-5 w-5" style={{ color: "#F85C70" }} />
                  <span
                    className="font-mono text-xs px-2.5 py-1 rounded"
                    style={{ backgroundColor: "#F2F0F7", color: "#60266A" }}
                  >
                    {service.label}
                  </span>
                </div>
                <h3 className="font-display text-2xl mb-4" style={{ color: "#181F4F", fontWeight: 400 }}>
                  {service.title}
                </h3>
                <p className="font-sans text-sm leading-relaxed mb-6" style={{ color: "#65677B" }}>
                  {service.body}
                </p>
                <div className="mt-auto pt-5 border-t" style={{ borderColor: "#E5E3EE" }}>
                  <p className="font-mono text-xs uppercase tracking-[0.1em] mb-3" style={{ color: "#6B6E81" }}>
                    {i === 0 ? "Outputs include" : "What this covers"}
                  </p>
                  <ul className="space-y-2">
                    {service.outputs.map((output) => (
                      <li key={output} className="flex items-start gap-2.5">
                        <CheckCircle className="h-3.5 w-3.5 flex-shrink-0 mt-0.5" style={{ color: "#F85C70" }} />
                        <span className="font-sans text-xs leading-relaxed" style={{ color: "#65677B" }}>
                          {output}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            <button
              onClick={() => onOpenConsultation("org-design")}
              className="amp-focus-ring-on-light inline-flex items-center gap-2 px-8 h-11 font-sans font-bold text-sm rounded transition-colors duration-200"
              style={{ backgroundColor: "#F85C70", color: "#181F4F" }}
              onMouseOver={(e) => ((e.currentTarget as HTMLButtonElement).style.backgroundColor = "#d94a5e")}
              onMouseOut={(e) => ((e.currentTarget as HTMLButtonElement).style.backgroundColor = "#F85C70")}
            >
              Book a 45-Minute Diagnostic Call <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </section>

      {/* WHY AMPLIFIED */}
      <section className="py-20 lg:py-28" style={{ backgroundColor: "#181F4F" }}>
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.12em] mb-5" style={{ color: "#F85C70" }}>
                Why Amplified
              </p>
              <h2 className="font-display text-4xl md:text-5xl text-white mb-6" style={{ fontWeight: 400 }}>
                We have built and run these models. Not just designed them.
              </h2>
              <p className="font-sans text-base leading-relaxed mb-6" style={{ color: "rgba(255,255,255,0.65)" }}>
                Our background spans agile delivery transformation, squad-based operating models
                in complex infrastructure and digital programmes, and practical AI implementation
                at team and organisational level.
              </p>
              <button
                onClick={() => onOpenConsultation("org-design")}
                className="amp-focus-ring-on-light inline-flex items-center gap-2 px-7 h-11 font-sans font-bold text-sm rounded transition-colors duration-200"
                style={{ backgroundColor: "#F85C70", color: "#181F4F" }}
                onMouseOver={(e) => ((e.currentTarget as HTMLButtonElement).style.backgroundColor = "#d94a5e")}
                onMouseOut={(e) => ((e.currentTarget as HTMLButtonElement).style.backgroundColor = "#F85C70")}
              >
                Start a Conversation <ArrowRight className="h-4 w-4" />
              </button>
            </div>

            <div className="space-y-0">
              {whyPoints.map((point, i) => (
                <div
                  key={i}
                  className="flex items-start gap-4 py-5 border-b"
                  style={{ borderColor: "rgba(255,255,255,0.08)" }}
                >
                  <span
                    className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5"
                    style={{ backgroundColor: "rgba(248,92,112,0.15)", border: "1px solid rgba(248,92,112,0.3)" }}
                  >
                    <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: "#F85C70" }} />
                  </span>
                  <p className="font-sans text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.65)" }}>
                    {point}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* RESULTS BAND */}
      <section className="py-16" style={{ backgroundColor: "#F2F0F7", borderTop: "1px solid #E5E3EE" }}>
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            <div className="lg:col-span-2">
              <p className="font-mono text-xs uppercase tracking-[0.12em] mb-3" style={{ color: "#6B6E81" }}>
                Results
              </p>
              <p className="font-sans text-base leading-relaxed" style={{ color: "#65677B" }}>
                Organisations that have moved to distributed authority and product-aligned structures
                consistently report faster decision cycles, higher team engagement, and better product
                outcomes. AI integration compounds these gains, reducing coordination overhead and
                enabling smaller teams to operate at a scale previously requiring significantly more headcount.
              </p>
            </div>
            <div className="p-6 rounded" style={{ backgroundColor: "#ffffff", border: "1px solid #E5E3EE" }}>
              <p className="font-mono text-xs uppercase tracking-[0.1em] mb-4" style={{ color: "#F85C70" }}>
                What organisations report
              </p>
              {[
                "Faster decision cycles at every level",
                "Higher team engagement and ownership",
                "Better product outcomes and delivery speed",
                "Significant reduction in coordination overhead",
              ].map((result) => (
                <div key={result} className="flex items-start gap-2.5 mb-3">
                  <CheckCircle className="h-3.5 w-3.5 flex-shrink-0 mt-0.5" style={{ color: "#F85C70" }} />
                  <span className="font-sans text-xs leading-relaxed" style={{ color: "#65677B" }}>
                    {result}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24" style={{ backgroundColor: "#60266A" }}>
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="font-mono text-xs uppercase tracking-[0.15em] mb-6" style={{ color: "rgba(255,255,255,0.5)" }}>
            Get Started
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-white mb-6" style={{ fontWeight: 400 }}>
            Ready to think differently about how your organisation operates?
          </h2>
          <p className="font-sans text-lg max-w-[520px] mx-auto mb-4" style={{ color: "rgba(255,255,255,0.75)" }}>
            There is no sales process here. Just a direct discussion about where you are, what
            you are trying to achieve, and whether we are the right people to help you get there.
          </p>
          <p className="font-sans text-sm mb-10" style={{ color: "rgba(255,255,255,0.5)" }}>
            Book a 45-minute diagnostic call.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button
              onClick={() => onOpenConsultation("org-design")}
              className="amp-focus-ring-on-navy inline-flex items-center gap-2 px-10 h-12 font-sans font-bold text-base rounded transition-colors duration-200"
              style={{ backgroundColor: "#F85C70", color: "#181F4F" }}
              onMouseOver={(e) => ((e.currentTarget as HTMLButtonElement).style.backgroundColor = "#d94a5e")}
              onMouseOut={(e) => ((e.currentTarget as HTMLButtonElement).style.backgroundColor = "#F85C70")}
              data-testid="button-cta"
            >
              Book a Diagnostic Call <ArrowRight className="h-4 w-4" />
            </button>
            <a
              href="mailto:hello@amplified.co.uk"
              className="inline-flex items-center gap-2 px-10 h-12 font-sans font-semibold text-base rounded transition-colors duration-200"
              style={{ border: "1px solid rgba(255,255,255,0.3)", color: "#ffffff", backgroundColor: "transparent" }}
              onMouseOver={(e) => { (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "rgba(255,255,255,0.08)"; }}
              onMouseOut={(e) => { (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "transparent"; }}
            >
              hello@amplified.co.uk
            </a>
          </div>
        </div>
      </section>
    </div>
  );
});

export default OrgDesign;
