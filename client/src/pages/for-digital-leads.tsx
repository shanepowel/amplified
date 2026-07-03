'use client';

import { memo } from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle, AlertTriangle } from "lucide-react";
import { StructuredData } from "@/components/structured-data";
import { digitalLeadsFAQSchema, createBreadcrumbSchema } from "@/lib/schemas";

interface ForDigitalLeadsProps {
  onOpenConsultation?: (serviceType?: string) => void;
}

const challenges = [
  {
    title: "Transformation that leaves no capability behind",
    body: "Consultants deliver the change, then leave. The tools are in place but the skills are not. Six months later the programme has reverted. Digital leads are left holding technology that their teams cannot sustain, scale, or build on.",
  },
  {
    title: "AI adoption stuck in the pilot phase",
    body: "Proof of concepts succeed in controlled conditions and then fail to scale. The reason is rarely the technology. It is the absence of the governance framework, internal capability, and operating model that make scale possible in a regulated environment.",
  },
  {
    title: "Building capability versus managing consultant dependency",
    body: "Every day your organisation relies on external capability is a day it is not building its own. Digital leads feel the tension between needing outside expertise to move quickly and knowing that expertise needs to transfer inward to be sustainable.",
  },
  {
    title: "Navigating innovation pressure alongside delivery accountability",
    body: "Boards and senior leadership want innovation and AI adoption. Regulators want controlled, evidence-based adoption. Your delivery teams want stability. Digital leads absorb the pressure from all three directions and are expected to reconcile them.",
  },
];

const howWeHelp = [
  {
    service: "Capability Building (AMP 04)",
    href: "/capability",
    title: "Skills that stay when we leave",
    body: "Every capability programme we design is tied to real delivery. Product Owner development, AI literacy, Centres of Excellence, and agile practitioner training built around your regulatory context. Skills transferred through doing, not slides.",
  },
  {
    service: "Coaching (AMP 05)",
    href: "/coaching",
    title: "A thinking partner who has held the role",
    body: "One-to-one and team coaching for digital leads, heads of digital, and CDOs navigating technology adoption, team upskilling, and the politics of transformation inside regulated organisations. Honest, not comfortable.",
  },
  {
    service: "ampStore",
    href: "/amp-store",
    title: "Curated learning built for practitioners",
    body: "A curated library of frameworks, templates, and learning resources built by practitioners for practitioners. Agile delivery, AI governance, product management, and digital leadership. Designed for people who learn through application, not theory.",
  },
];

const faqs = [
  {
    q: "How does Amplified avoid the 'training course' trap?",
    a: "Every capability programme we design is tied to real delivery. Skills are built through doing, not through slide decks. We embed practitioners alongside your teams on live work, so learning happens in context and sticks. We also build in structured knowledge transfer so the capability stays when we leave.",
  },
  {
    q: "What does embedded upskilling look like in practice?",
    a: "An Amplified practitioner joins your team in a coaching and doing capacity. They model the behaviours, challenge the gaps, and transfer the skills through the actual work. This is not instruction from the front of a room. It is collaborative work with explicit capability transfer built into every sprint or workstream.",
  },
  {
    q: "How long does it take to build real internal AI capability?",
    a: "For most organisations, meaningful capability takes 6 to 12 months to embed properly. We are honest about this because quick programmes rarely change behaviour. We structure programmes around defined milestones so you can see progress, and we build internal communities of practice that sustain the capability after the engagement ends.",
  },
  {
    q: "Do you work with teams that have limited technical background?",
    a: "Yes. Our AI literacy programmes are designed specifically for non-technical leaders, governance teams, and operational staff. We make AI concepts accessible without oversimplifying them, so people can make informed decisions, interrogate vendor claims, and own AI adoption rather than just approving it.",
  },
  {
    q: "Can you help us move from pilot to scaled adoption?",
    a: "This is one of the most common challenges we help with. Pilots succeed in controlled conditions but fail to scale because the governance, capability, and operating model are not ready. We help you build the foundation that makes scale possible: the policies, the trained people, the decision frameworks, and the ways of working.",
  },
];

const ForDigitalLeads = memo(function ForDigitalLeads({ onOpenConsultation }: ForDigitalLeadsProps) {

  return (
    <div className="min-h-screen font-sans" style={{ backgroundColor: "#ffffff" }}>
      <StructuredData data={digitalLeadsFAQSchema} id="digital-leads-faq-schema" />
      <StructuredData
        data={createBreadcrumbSchema([
          { name: "Home", url: "https://amplified.co.uk/" },
          { name: "For Digital Leads", url: "https://amplified.co.uk/for-digital-leads" },
        ])}
        id="digital-leads-breadcrumb"
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
            For Digital Leads
          </li>
        </ol>
      </nav>

      {/* Hero */}
      <section
        style={{ backgroundColor: "#181F4F" }}
        className="relative py-24 lg:py-32 overflow-hidden"
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "repeating-linear-gradient(135deg, rgba(255,255,255,0.03) 0px, rgba(255,255,255,0.03) 1px, transparent 1px, transparent 60px)",
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
            For Digital Leads
            <br />
            and Heads of Digital
          </h1>
          <p
            className="font-sans text-xl max-w-[600px] mb-10 leading-relaxed"
            style={{ color: "rgba(255,255,255,0.75)" }}
          >
            Build it in, not bolted on. Capability that stays when the consultants leave. AI
            adoption that scales because the foundation is right.
          </p>
          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => onOpenConsultation?.("capability")}
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
            <Link href="/capability">
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
                View Capability Building
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
              The capability gap digital leads inherit
            </h2>
            <p className="font-sans text-lg leading-relaxed mb-6" style={{ color: "#65677B" }}>
              You are leading digital transformation in an organisation where the capability to
              sustain that transformation is still being built. External consultants know things
              your teams do not yet know. Technology is being implemented faster than the skills
              to own and operate it are developing.
            </p>
            <p className="font-sans text-lg leading-relaxed" style={{ color: "#65677B" }}>
              Amplified works with digital leads, heads of digital, and CDOs in infrastructure,
              energy, financial services, and public sector to close the gap between what has been
              deployed and what internal teams can own. Every engagement is designed to make us
              unnecessary. The skills transfer. The dependency does not.
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
            What digital leads deal with
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
                    <p
                      className="font-sans text-base leading-relaxed"
                      style={{ color: "#65677B" }}
                    >
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
            How we help digital leads
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
              Moving from AI pilots to embedded practice
            </h2>
            <p className="font-sans text-lg leading-relaxed mb-6" style={{ color: "#65677B" }}>
              A head of digital at a financial services organisation had run three successful AI
              pilots in twelve months. All three had stalled at scale. The technology worked.
              The governance framework was not in place. The internal teams did not have the
              capability to own the tools beyond the pilot environment. A fourth pilot was being
              proposed by the board.
            </p>
            <p className="font-sans text-lg leading-relaxed mb-6" style={{ color: "#65677B" }}>
              Amplified worked with the head of digital to build the capability foundation before
              the next pilot began. An AI literacy programme for the governance and operational
              teams. A usage policy framework. A Centre of Excellence model for AI ownership.
              Embedded practitioners who coached the internal team through the implementation
              rather than doing it for them.
            </p>
            <p className="font-sans text-lg leading-relaxed mb-8" style={{ color: "#65677B" }}>
              The fourth pilot moved to scaled deployment. The internal team owned the tool,
              the governance, and the ongoing development. Amplified left. The capability stayed.
            </p>
            <div
              className="p-6 rounded-lg"
              style={{ backgroundColor: "#F2F0F7", borderLeft: "3px solid #60266A" }}
            >
              <p
                className="font-sans text-base leading-relaxed font-medium"
                style={{ color: "#181F4F" }}
              >
                "Every other consultancy had helped us run the pilot. Amplified helped us work
                out why the pilots kept failing and then built the thing that made scale possible."
              </p>
              <p className="font-sans text-sm mt-3" style={{ color: "#65677B" }}>
                Head of Digital, UK financial services organisation
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
            What good looks like for a digital lead
          </h2>
          <div className="grid md:grid-cols-2 gap-4 max-w-[760px]">
            {[
              "An AI adoption programme that moves from pilot to scale without reverting",
              "Internal teams that own, operate, and build on the technology",
              "A governance framework your regulator and board can see into",
              "Capability that is genuinely embedded rather than performed for a review",
              "No consultant dependency after the engagement ends",
              "A Centre of Excellence that outlasts the project that created it",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3">
                <CheckCircle
                  className="h-5 w-5 flex-shrink-0 mt-0.5"
                  style={{ color: "#60266A" }}
                />
                <p
                  className="font-sans text-base leading-relaxed"
                  style={{ color: "#181F4F" }}
                >
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
            Questions from digital leads
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
            Start a capability conversation
          </h2>
          <p
            className="font-sans text-lg max-w-[520px] mx-auto mb-10"
            style={{ color: "rgba(255,255,255,0.75)" }}
          >
            Thirty minutes. Tell us where your teams are and where they need to be. We will tell
            you honestly what a real capability programme looks like for your context.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button
              onClick={() => onOpenConsultation?.("capability")}
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
            <Link href="/capability">
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
                View Capability Building
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

export default ForDigitalLeads;
