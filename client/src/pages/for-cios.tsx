'use client';

import { memo } from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle, Shield, BarChart3, AlertTriangle } from "lucide-react";
import { StructuredData } from "@/components/structured-data";
import { ciosFAQSchema, createBreadcrumbSchema } from "@/lib/schemas";

interface ForCIOsProps {
  onOpenConsultation?: (serviceType?: string) => void;
}

const challenges = [
  {
    title: "Board accountability without clear precedent",
    body: "Boards expect CIOs to govern AI adoption, but there is no established playbook for what good AI governance looks like in a regulated environment. You are expected to have answers before the frameworks exist.",
  },
  {
    title: "Regulatory pressure from multiple directions",
    body: "The EU AI Act, FCA SYSC requirements, GDS standards, and sector-specific frameworks are all moving simultaneously. Staying ahead of each without duplicating effort is a genuine operational challenge.",
  },
  {
    title: "Vendor relationships that are hard to scrutinise",
    body: "Your AI capability increasingly lives inside third-party platforms and system integrators. Assuring that capability, understanding its risks, and holding vendors accountable requires a level of technical fluency that is difficult to resource internally.",
  },
  {
    title: "The gap between AI ambition and operational reality",
    body: "Pilots succeed. Scaled adoption fails. The gap is usually governance, not technology. Organisations move from proof of concept to widespread use without putting in place the controls, policies, or accountability structures that regulated environments require.",
  },
];

const howWeHelp = [
  {
    service: "AI Governance (AMP 01)",
    href: "/ai-governance",
    title: "A governance framework built for your regulatory context",
    body: "We build AI governance frameworks that map to your existing assurance structures rather than sitting alongside them. AI risk registers, model inventories, usage policies, approval pathways, and board reporting packs. Everything documented to be owned and operated by your team.",
  },
  {
    service: "Structured Delivery (AMP 03)",
    href: "/structured-delivery",
    title: "Delivery governance that enables pace",
    body: "Governance that slows delivery is governance that gets bypassed. We design assurance into delivery cadences so accountability happens continuously rather than at stage gates. Programmes move faster and boards have better visibility.",
  },
  {
    service: "Capability Building (AMP 04)",
    href: "/capability",
    title: "AI literacy for boards and governance teams",
    body: "Your board cannot govern what it does not understand. We run structured AI literacy programmes for senior leaders and governance teams: practical, honest, and built around the decisions they actually need to make.",
  },
];

const faqs = [
  {
    q: "How does Amplified work alongside our existing technology governance?",
    a: "We work inside your existing governance structures, not around them. Our AI governance frameworks are designed to slot into established assurance, risk, and compliance processes. We map existing controls first, identify gaps, and build only what is missing rather than starting from scratch.",
  },
  {
    q: "What does an AI governance framework from Amplified actually include?",
    a: "A framework built around your regulatory context: an AI risk register, model inventory, usage policies, approval and escalation pathways, third-party AI assessment criteria, and a governance board pack template. Everything is documented to be owned and operated by your team, not us.",
  },
  {
    q: "How do you handle EU AI Act and sector-specific regulatory requirements?",
    a: "We have deep familiarity with EU AI Act obligations, FCA SYSC requirements, GDS standards, and infrastructure-sector assurance frameworks. We do not offer generic compliance templates. Every framework is built around the specific regulatory obligations your organisation carries.",
  },
  {
    q: "Can you work alongside our existing delivery partners and system integrators?",
    a: "Yes. Most of our engagements sit alongside existing SI relationships. We operate as the governance and assurance layer, not a competitor to implementation partners. We define the standards your partners work to and hold the accountability framework that vendors report into.",
  },
  {
    q: "What does a first engagement typically look like?",
    a: "We start with a 30-minute conversation to understand your specific context. From there, most CIO engagements begin with a governance readiness assessment: a structured review of your current AI posture, risk exposure, and the gaps between where you are and where regulators and your board expect you to be.",
  },
];

const ForCIOs = memo(function ForCIOs({ onOpenConsultation }: ForCIOsProps) {

  return (
    <div className="min-h-screen font-sans" style={{ backgroundColor: "#ffffff" }}>
      <StructuredData data={ciosFAQSchema} id="cios-faq-schema" />
      <StructuredData
        data={createBreadcrumbSchema([
          { name: "Home", url: "https://amplified.co.uk/" },
          { name: "For CIOs", url: "https://amplified.co.uk/for-cios" },
        ])}
        id="cios-breadcrumb"
      />

      {/* Breadcrumb */}
      <nav
        aria-label="Breadcrumb"
        className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-0"
      >
        <ol className="flex items-center gap-2 text-sm" style={{ color: "#65677B" }}>
          <li>
            <Link href="/" className="hover:underline" style={{ color: "#65677B" }}>
              Home
            </Link>
          </li>
          <li aria-hidden="true" className="text-xs">
            /
          </li>
          <li aria-current="page" style={{ color: "#181F4F" }}>
            For CIOs
          </li>
        </ol>
      </nav>

      {/* Hero */}
      <section style={{ backgroundColor: "#181F4F" }} className="relative py-24 lg:py-32 overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: "repeating-linear-gradient(135deg, rgba(255,255,255,0.03) 0px, rgba(255,255,255,0.03) 1px, transparent 1px, transparent 60px)",
          }}
          aria-hidden="true"
        />
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative">
          <p
            className="font-mono text-xs uppercase tracking-[0.15em] mb-5"
            style={{ color: "#F85C70" }}
          >
            Who We Work With
          </p>
          <h1
            className="font-display text-5xl md:text-6xl lg:text-7xl text-white mb-6"
            style={{ fontWeight: 400, lineHeight: 1.05 }}
          >
            For Chief
            <br />
            Information Officers
          </h1>
          <p
            className="font-sans text-xl max-w-[600px] mb-10 leading-relaxed"
            style={{ color: "rgba(255,255,255,0.75)" }}
          >
            Govern the technology. Protect the programme. Meet the board's expectations without
            sacrificing the delivery pace your organisation needs.
          </p>
          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => onOpenConsultation?.("ai-governance")}
              className="amp-focus-ring-on-navy inline-flex items-center gap-2 px-8 h-12 font-sans font-bold text-base rounded transition-colors duration-200"
              style={{ backgroundColor: "#F85C70", color: "#181F4F" }}
              onMouseOver={(e) =>
                ((e.currentTarget as HTMLButtonElement).style.backgroundColor = "#d94a5e")
              }
              onMouseOut={(e) =>
                ((e.currentTarget as HTMLButtonElement).style.backgroundColor = "#F85C70")
              }
            >
              Talk to Us <ArrowRight className="h-4 w-4" />
            </button>
            <Link href="/ai-governance">
              <button
                className="amp-focus-ring-on-navy inline-flex items-center gap-2 px-8 h-12 font-sans font-bold text-base rounded transition-colors duration-200"
                style={{
                  border: "1px solid rgba(255,255,255,0.3)",
                  color: "#FFFFFF",
                  backgroundColor: "transparent",
                }}
                onMouseOver={(e) =>
                  ((e.currentTarget as HTMLButtonElement).style.backgroundColor =
                    "rgba(255,255,255,0.08)")
                }
                onMouseOut={(e) =>
                  ((e.currentTarget as HTMLButtonElement).style.backgroundColor = "transparent")
                }
              >
                View AI Governance
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-20" style={{ backgroundColor: "#F2F0F7" }}>
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-[760px]">
            <h2
              className="font-display text-4xl md:text-5xl mb-6"
              style={{ color: "#181F4F", fontWeight: 400 }}
            >
              The CIO's accountability gap
            </h2>
            <p className="font-sans text-lg leading-relaxed mb-6" style={{ color: "#65677B" }}>
              You are accountable for AI adoption across your organisation. The board wants
              progress. Regulators want compliance. Operational teams want pace. And the gap
              between those expectations is yours to close.
            </p>
            <p className="font-sans text-lg leading-relaxed" style={{ color: "#65677B" }}>
              Amplified works with CIOs in infrastructure, energy, financial services, and public
              sector organisations to build the governance frameworks, delivery accountability
              structures, and board-facing reporting that make AI adoption responsible and
              auditable. Built for industries where rigour is not optional.
            </p>
          </div>
        </div>
      </section>

      {/* Challenges */}
      <section className="py-20" style={{ backgroundColor: "#ffffff" }}>
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <p
            className="font-mono text-xs uppercase tracking-[0.1em] mb-3"
            style={{ color: "#F85C70" }}
          >
            The challenges CIOs bring to us
          </p>
          <h2
            className="font-display text-4xl md:text-5xl mb-14"
            style={{ color: "#181F4F", fontWeight: 400 }}
          >
            What you are navigating
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {challenges.map((item) => (
              <div
                key={item.title}
                className="p-8 rounded-lg"
                style={{ backgroundColor: "#F2F0F7", border: "1px solid #E5E3EE" }}
              >
                <div className="flex items-start gap-4">
                  <AlertTriangle
                    className="h-5 w-5 flex-shrink-0 mt-1"
                    style={{ color: "#F85C70" }}
                  />
                  <div>
                    <h3
                      className="font-sans text-lg font-bold mb-3"
                      style={{ color: "#181F4F" }}
                    >
                      {item.title}
                    </h3>
                    <p className="font-sans text-base leading-relaxed" style={{ color: "#65677B" }}>
                      {item.body}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How we help */}
      <section className="py-20" style={{ backgroundColor: "#F2F0F7" }}>
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <p
            className="font-mono text-xs uppercase tracking-[0.1em] mb-3"
            style={{ color: "#F85C70" }}
          >
            What Amplified delivers
          </p>
          <h2
            className="font-display text-4xl md:text-5xl mb-14"
            style={{ color: "#181F4F", fontWeight: 400 }}
          >
            How we help CIOs
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {howWeHelp.map((item) => (
              <div
                key={item.service}
                className="p-8 rounded-lg bg-white"
                style={{ border: "1px solid #E5E3EE" }}
              >
                <Link
                  href={item.href}
                  className="font-mono text-xs uppercase tracking-[0.1em] mb-4 block transition-colors"
                  style={{ color: "#60266A" }}
                  onMouseOver={(e) =>
                    ((e.currentTarget as HTMLAnchorElement).style.color = "#F85C70")
                  }
                  onMouseOut={(e) =>
                    ((e.currentTarget as HTMLAnchorElement).style.color = "#60266A")
                  }
                >
                  {item.service} &rarr;
                </Link>
                <h3
                  className="font-sans text-lg font-bold mb-3"
                  style={{ color: "#181F4F" }}
                >
                  {item.title}
                </h3>
                <p className="font-sans text-base leading-relaxed" style={{ color: "#65677B" }}>
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case example */}
      <section className="py-20" style={{ backgroundColor: "#ffffff" }}>
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-[760px]">
            <p
              className="font-mono text-xs uppercase tracking-[0.1em] mb-3"
              style={{ color: "#F85C70" }}
            >
              Example engagement
            </p>
            <h2
              className="font-display text-4xl md:text-5xl mb-8"
              style={{ color: "#181F4F", fontWeight: 400 }}
            >
              From exposure to assurance in twelve weeks
            </h2>
            <p className="font-sans text-lg leading-relaxed mb-6" style={{ color: "#65677B" }}>
              A public sector CIO came to us six weeks before a major programme board review.
              Three AI tools were already in production across operational teams with no formal
              risk assessment, no usage policy, and no accountability trail. The board had started
              asking questions.
            </p>
            <p className="font-sans text-lg leading-relaxed mb-6" style={{ color: "#65677B" }}>
              We ran a rapid AI posture assessment, mapped the existing exposure, and built a
              governance framework that gave the CIO a credible position for the board: what was
              in use, what the risks were, and what was being done about them. The framework
              included an AI risk register, a third-party assessment process, and a clear
              escalation pathway.
            </p>
            <p className="font-sans text-lg leading-relaxed mb-8" style={{ color: "#65677B" }}>
              The board review passed. The framework remained operational twelve months later,
              managed entirely by the internal team. Amplified was no longer required.
            </p>
            <div
              className="p-6 rounded-lg"
              style={{ backgroundColor: "#F2F0F7", borderLeft: "3px solid #60266A" }}
            >
              <p className="font-sans text-base leading-relaxed font-medium" style={{ color: "#181F4F" }}>
                "We needed to move from exposure to a defensible position quickly. Amplified gave
                us a framework that held up under proper scrutiny."
              </p>
              <p className="font-sans text-sm mt-3" style={{ color: "#65677B" }}>
                CIO, UK public sector organisation
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What good looks like */}
      <section className="py-20" style={{ backgroundColor: "#F2F0F7" }}>
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <p
            className="font-mono text-xs uppercase tracking-[0.1em] mb-3"
            style={{ color: "#F85C70" }}
          >
            The outcome
          </p>
          <h2
            className="font-display text-4xl md:text-5xl mb-10"
            style={{ color: "#181F4F", fontWeight: 400 }}
          >
            What good looks like for a CIO
          </h2>
          <div className="grid md:grid-cols-2 gap-4 max-w-[760px]">
            {[
              "A board pack that answers AI governance questions before they are asked",
              "A risk register that is current, owned, and maintained by your team",
              "Vendor and third-party AI assessed against documented criteria",
              "An escalation pathway your governance team actually uses",
              "Delivery accountability structures that produce visible assurance",
              "A programme that your regulators can see into, not through",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 flex-shrink-0 mt-0.5" style={{ color: "#60266A" }} />
                <p className="font-sans text-base leading-relaxed" style={{ color: "#181F4F" }}>
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20" style={{ backgroundColor: "#ffffff" }}>
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <p
            className="font-mono text-xs uppercase tracking-[0.1em] mb-3"
            style={{ color: "#F85C70" }}
          >
            Common questions
          </p>
          <h2
            className="font-display text-4xl md:text-5xl mb-12"
            style={{ color: "#181F4F", fontWeight: 400 }}
          >
            Questions from CIOs
          </h2>
          <div className="max-w-[760px] divide-y" style={{ borderColor: "#E5E3EE" }}>
            {faqs.map((item) => (
              <details key={item.q} className="group py-5">
                <summary
                  className="flex items-center justify-between gap-4 cursor-pointer list-none font-sans font-semibold text-base"
                  style={{ color: "#181F4F" }}
                >
                  {item.q}
                  <span
                    className="flex-shrink-0 text-2xl transition-transform duration-200 group-open:rotate-45"
                    style={{ color: "#F85C70" }}
                  >
                    +
                  </span>
                </summary>
                <p
                  className="font-sans text-base leading-relaxed mt-4"
                  style={{ color: "#65677B" }}
                >
                  {item.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 text-center" style={{ backgroundColor: "#181F4F" }}>
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <p
            className="font-mono text-xs uppercase tracking-[0.15em] mb-5"
            style={{ color: "#F85C70" }}
          >
            Next step
          </p>
          <h2
            className="font-display text-4xl md:text-5xl text-white mb-6"
            style={{ fontWeight: 400 }}
          >
            Start with a governance readiness conversation
          </h2>
          <p
            className="font-sans text-lg max-w-[520px] mx-auto mb-10"
            style={{ color: "rgba(255,255,255,0.75)" }}
          >
            Thirty minutes. We will tell you honestly what your governance exposure looks like and
            what, if anything, needs to change before your next board review.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button
              onClick={() => onOpenConsultation?.("ai-governance")}
              className="amp-focus-ring-on-navy inline-flex items-center gap-2 px-10 h-12 font-sans font-bold text-base rounded transition-colors duration-200"
              style={{ backgroundColor: "#F85C70", color: "#181F4F" }}
              onMouseOver={(e) =>
                ((e.currentTarget as HTMLButtonElement).style.backgroundColor = "#d94a5e")
              }
              onMouseOut={(e) =>
                ((e.currentTarget as HTMLButtonElement).style.backgroundColor = "#F85C70")
              }
            >
              Book a Conversation <ArrowRight className="h-4 w-4" />
            </button>
            <Link href="/ai-governance">
              <button
                className="amp-focus-ring-on-navy inline-flex items-center gap-2 px-10 h-12 font-sans font-bold text-base rounded transition-colors duration-200"
                style={{
                  border: "1px solid rgba(255,255,255,0.3)",
                  color: "#FFFFFF",
                  backgroundColor: "transparent",
                }}
                onMouseOver={(e) =>
                  ((e.currentTarget as HTMLButtonElement).style.backgroundColor =
                    "rgba(255,255,255,0.08)")
                }
                onMouseOut={(e) =>
                  ((e.currentTarget as HTMLButtonElement).style.backgroundColor = "transparent")
                }
              >
                View AI Governance
              </button>
            </Link>
          </div>
          <p
            className="font-sans text-sm mt-6"
            style={{ color: "rgba(255,255,255,0.4)" }}
          >
            No pitch. No deck. Just a conversation.
          </p>
        </div>
      </section>
    </div>
  );
});

export default ForCIOs;
