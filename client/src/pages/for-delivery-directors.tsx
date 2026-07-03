'use client';

import { memo } from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle, AlertTriangle } from "lucide-react";
import { StructuredData } from "@/components/structured-data";
import { deliveryDirectorsFAQSchema, createBreadcrumbSchema } from "@/lib/schemas";

interface ForDeliveryDirectorsProps {
  onOpenConsultation?: (serviceType?: string) => void;
}

const challenges = [
  {
    title: "Accountability that diffuses across vendors",
    body: "Multi-vendor programmes create accountability gaps that every vendor fills differently. When something goes wrong, ownership is unclear. Governance frameworks that were designed for single-supplier delivery do not hold up under the weight of a complex delivery ecosystem.",
  },
  {
    title: "Team instability driving rework",
    body: "High contractor turnover means institutional knowledge leaves with the person. Onboarding costs accumulate silently. Rework happens because context is lost. The programme moves slower than the velocity metrics suggest.",
  },
  {
    title: "Governance that slows rather than enables",
    body: "Stage gates that have become bureaucratic exercises. Reporting that consumes the time it should create. Assurance processes that produce evidence of activity rather than evidence of progress. Governance designed to cover risk rather than manage it.",
  },
  {
    title: "Pace pressure without delivery confidence",
    body: "Senior stakeholders want acceleration. Your team knows the risks of cutting corners. The pressure to report green when amber is the honest position is real and familiar. Delivery directors absorb that tension alone.",
  },
];

const howWeHelp = [
  {
    service: "Structured Delivery (AMP 03)",
    href: "/structured-delivery",
    title: "Governance that enables pace, not just assurance",
    body: "We design delivery governance frameworks that produce accountability without bureaucracy. Assurance built into cadences. Reporting that gives stakeholders real confidence rather than managed perception. Stage gates that test readiness, not compliance.",
  },
  {
    service: "AmplifiedTeams",
    href: "/teams",
    title: "Stable teams mobilised in 48 hours",
    body: "IR35-compliant multi-disciplinary delivery teams with established ways of working. Not assembled from a contractor pool. Stable units that start delivering from day one rather than spending weeks forming. Available across delivery, product, and technology disciplines.",
  },
  {
    service: "AI Implementation (AMP 02)",
    href: "/ai-implementation",
    title: "Technology that integrates with delivery accountability",
    body: "AI tools that are implemented within proper governance boundaries, not alongside them. Every implementation includes a structured accountability framework, a risk assessment, and a clear chain of decision-making from the technology to the senior responsible owner.",
  },
];

const faqs = [
  {
    q: "What is different about Amplified's approach to structured delivery?",
    a: "We combine proper governance rigour with delivery pace. Most delivery frameworks treat governance as a checkpoint process. We build governance into delivery cadences so that assurance happens continuously, not at stage gates. Programmes move faster because there are fewer surprises.",
  },
  {
    q: "How does the Stable Teams model work?",
    a: "AmplifiedTeams provides IR35-compliant, multi-disciplinary delivery teams mobilised within 48 hours. Teams are not assembled ad hoc from a contractor pool. They are stable units with established ways of working, which means onboarding friction is minimal and delivery starts immediately.",
  },
  {
    q: "Can you come into a programme that is already in trouble?",
    a: "Yes. Programme recovery is one of the most common reasons organisations come to us. We assess the current state quickly, identify the root causes rather than just the symptoms, stabilise governance and team accountability, and establish a credible path forward. We have done this in infrastructure, financial services, and public sector contexts.",
  },
  {
    q: "What does governance recovery actually look like in practice?",
    a: "We typically start with a rapid diagnostic: reviewing delivery artefacts, governance documentation, and stakeholder reporting. Within two weeks we produce a clear view of what is working, what is not, and what needs to change. Recovery then follows a structured 90-day stabilisation plan.",
  },
  {
    q: "Do you work on public sector frameworks and NEC contracts?",
    a: "Yes. Our team has direct experience across Crown Commercial Service frameworks, NEC contract environments, GDS delivery standards, and major capital programme governance. We understand the accountability structures and reporting requirements these environments demand.",
  },
];

const ForDeliveryDirectors = memo(function ForDeliveryDirectors({
  onOpenConsultation,
}: ForDeliveryDirectorsProps) {

  return (
    <div className="min-h-screen font-sans" style={{ backgroundColor: "#ffffff" }}>
      <StructuredData data={deliveryDirectorsFAQSchema} id="delivery-directors-faq-schema" />
      <StructuredData
        data={createBreadcrumbSchema([
          { name: "Home", url: "https://amplified.co.uk/" },
          { name: "For Delivery Directors", url: "https://amplified.co.uk/for-delivery-directors" },
        ])}
        id="delivery-directors-breadcrumb"
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
            For Delivery Directors
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
            For Delivery Directors
            <br />
            and Programme Directors
          </h1>
          <p
            className="font-sans text-xl max-w-[600px] mb-10 leading-relaxed"
            style={{ color: "rgba(255,255,255,0.75)" }}
          >
            Deliver at pace without losing control. Governance that enables rather than
            impedes. Teams that are stable. Accountability that is visible.
          </p>
          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => onOpenConsultation?.("structured-delivery")}
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
            <Link href="/structured-delivery">
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
                View Structured Delivery
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
              The delivery director's dilemma
            </h2>
            <p className="font-sans text-lg leading-relaxed mb-6" style={{ color: "#65677B" }}>
              You are accountable for programmes that span multiple vendors, complex technology
              stacks, and governance environments that were not designed for the way you are
              delivering. Pace is demanded. Rigour is required. The two feel like they are in
              permanent tension.
            </p>
            <p className="font-sans text-lg leading-relaxed" style={{ color: "#65677B" }}>
              Amplified works with delivery directors and programme directors in infrastructure,
              energy, financial services, and public sector to build the delivery governance
              frameworks, stable team structures, and accountability models that let programmes
              move fast without losing control. We have been in the delivery seats you are in.
              We know what the pressure feels like.
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
            What delivery directors deal with
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
            How we help delivery directors
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
              Stabilising a programme in distress
            </h2>
            <p className="font-sans text-lg leading-relaxed mb-6" style={{ color: "#65677B" }}>
              A major infrastructure programme had been reporting amber-to-green for three
              consecutive quarters. The delivery director knew the real position was red. A
              contract renewal review was three months away, and the existing governance
              artefacts would not survive proper scrutiny.
            </p>
            <p className="font-sans text-lg leading-relaxed mb-6" style={{ color: "#65677B" }}>
              Amplified ran a two-week rapid diagnostic. We mapped the genuine delivery position,
              identified the accountability gaps between the three system integrators, and built
              a recovery plan that the delivery director could present to the SRO with confidence.
              The plan was honest about the position and credible about the path forward.
            </p>
            <p className="font-sans text-lg leading-relaxed mb-8" style={{ color: "#65677B" }}>
              The contract renewal review was passed. The programme moved from distress to
              controlled delivery over the following 90 days. The governance framework remained
              in place and was subsequently adopted across two other programmes in the same
              organisation.
            </p>
            <div
              className="p-6 rounded-lg"
              style={{ backgroundColor: "#F2F0F7", borderLeft: "3px solid #60266A" }}
            >
              <p
                className="font-sans text-base leading-relaxed font-medium"
                style={{ color: "#181F4F" }}
              >
                "For the first time in two years, I had a governance pack I could present without
                caveating every line. That changed the conversation with the SRO entirely."
              </p>
              <p className="font-sans text-sm mt-3" style={{ color: "#65677B" }}>
                Delivery Director, UK infrastructure programme
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
            What good looks like for a delivery director
          </h2>
          <div className="grid md:grid-cols-2 gap-4 max-w-[760px]">
            {[
              "A governance framework that produces real confidence, not managed perception",
              "Accountability that is clear across every delivery partner and vendor",
              "Teams stable enough to accumulate and retain institutional knowledge",
              "Reporting that stakeholders trust because it reflects the real position",
              "Stage gates that test readiness rather than evidence of process compliance",
              "A recovery plan you can defend under proper scrutiny",
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
            Questions from delivery directors
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
            Start with an honest delivery conversation
          </h2>
          <p
            className="font-sans text-lg max-w-[520px] mx-auto mb-10"
            style={{ color: "rgba(255,255,255,0.75)" }}
          >
            Thirty minutes. Tell us where the programme is, not where the reporting says it is.
            We will give you an honest view of the options.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button
              onClick={() => onOpenConsultation?.("structured-delivery")}
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
            <Link href="/structured-delivery">
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
                View Structured Delivery
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

export default ForDeliveryDirectors;
