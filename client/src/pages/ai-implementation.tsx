'use client';

import { memo } from "react";
import Link from "next/link";
import heroImg from "@assets/stock_images/ai-implementation-service.webp";
import Image from 'next/image';
import { ArrowRight, CheckCircle, Zap } from "lucide-react";
import { ServiceSchema, StructuredData } from "@/components/structured-data";
import { aiImplementationFAQSchema, createBreadcrumbSchema } from "@/lib/schemas";

interface AiImplementationProps {
  onOpenConsultation: (serviceType?: string) => void;
}

const services = [
  {
    title: "Use Case Identification and Prioritisation",
    body: "We work with your teams to identify where AI can deliver genuine value inside your existing processes and governance structures. We prioritise by feasibility, regulatory risk, and organisational readiness, not by what is technically exciting.",
    deliverable: "Use case register with prioritised implementation roadmap.",
  },
  {
    title: "Proof of Concept Development",
    body: "We build and test AI capabilities in a controlled, governed environment before any production commitment. Every POC is designed with production in mind from day one, including auditability, explainability, and handover requirements.",
    deliverable: null,
  },
  {
    title: "Production-Grade AI Delivery",
    body: "From POC to live system, embedded with your engineering and programme teams. We manage delivery within your existing PMO frameworks, stage gates, and assurance structures. No shortcuts on governance to hit a sprint deadline.",
    deliverable: null,
  },
  {
    title: "Integration with Existing Systems and Frameworks",
    body: "AI systems that work within your existing enterprise architecture, not around it. We design integrations that respect your data governance requirements, security posture, and operational constraints.",
    deliverable: null,
  },
  {
    title: "Capability Transfer and Handover",
    body: "Every implementation includes structured knowledge transfer to your internal teams. Documentation, training, and embedded upskilling so your organisation can operate and evolve the system without us in the room twelve months later.",
    deliverable: "Handover pack, runbook, and internal capability programme.",
  },
  {
    title: "Post-Implementation Review",
    body: "We return at agreed intervals to review performance, identify drift, assess emerging risks, and recommend iterative improvements. AI systems are not static and neither is our support.",
    deliverable: null,
  },
];

const principles = [
  {
    title: "Governance-first, always",
    body: "We do not start building until the governance framework is in place. That is not bureaucracy. That is how you avoid building something you cannot defend.",
  },
  {
    title: "Embedded, not parachuted",
    body: "Our practitioners work inside your teams. We do not deliver from a distance and hand over a document. We sit in your standups, attend your governance boards, and work through the hard parts with you.",
  },
  {
    title: "Accountability throughout",
    body: "Every AI system we deliver has a clear owner, a clear risk register, and a clear audit trail. If your governance board asks a question, you can answer it.",
  },
  {
    title: "No vendor lock-in",
    body: "We are platform and vendor agnostic. We recommend what is right for your organisation and your operating constraints, not what earns us a referral fee.",
  },
];

const AiImplementation = memo(function AiImplementation({ onOpenConsultation }: AiImplementationProps) {
  return (
    <div className="min-h-screen font-sans" style={{ backgroundColor: "#ffffff" }}>
      <ServiceSchema name="AI Implementation" description="End-to-end AI implementation with governance built in. Use case identification, proof of concept, production-grade delivery, and capability transfer for regulated industries." url="https://amplified.co.uk/ai-implementation" />
      <StructuredData data={aiImplementationFAQSchema} id="ai-implementation-faq-schema" />
      <StructuredData data={createBreadcrumbSchema([{ name: 'Home', url: 'https://amplified.co.uk/' }, { name: 'AI Implementation', url: 'https://amplified.co.uk/ai-implementation' }])} id="ai-implementation-breadcrumb" />

      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="border-b border-gray-100">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <ol className="flex items-center gap-2 text-xs text-gray-500 flex-wrap">
            <li><Link href="/" className="hover:text-gray-800 transition-colors">Home</Link></li>
            <li aria-hidden="true">/</li>
            <li aria-current="page" className="text-gray-800 font-medium">AI Implementation</li>
          </ol>
        </div>
      </nav>

      {/* HERO */}
      <section className="py-28 lg:py-36 relative overflow-hidden" style={{ backgroundColor: "#181F4F" }}>
        <div className="hidden lg:block absolute inset-y-0 right-0 w-[48%] pointer-events-none" aria-hidden="true">
          <Image src={heroImg} alt="" aria-hidden="true" fill className="object-cover" style={{ opacity: 0.3 }} priority sizes="48vw" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to right, #181F4F 0%, transparent 60%)" }} />
        </div>
        <div className="relative max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <p className="font-mono text-xs uppercase tracking-[0.15em] mb-6" style={{ color: "#F85C70" }}>
            AMP 02
          </p>
          <h1
            className="font-display text-5xl md:text-6xl text-white mb-8 max-w-[720px] leading-tight"
            style={{ fontWeight: 400 }}
          >
            AI Implementation
          </h1>
          <p className="font-sans text-lg max-w-[580px] leading-relaxed mb-6" style={{ color: "rgba(255,255,255,0.75)" }}>
            We do not just advise on AI. We build it with you, inside your governance, all the way
            from use case identification to production deployment and capability handover.
          </p>
          <p className="font-sans text-lg max-w-[580px] leading-relaxed" style={{ color: "rgba(255,255,255,0.75)" }}>
            In regulated industries, AI implementation is not just a technical challenge. It is a
            governance, accountability, and change management challenge. We have done all three.
          </p>
          <blockquote
            className="mt-10 p-6 border-l-4 max-w-[540px]"
            style={{ borderColor: "#F85C70", backgroundColor: "rgba(248,92,112,0.08)" }}
          >
            <p className="font-display text-xl text-white italic" style={{ fontWeight: 400 }}>
              "A proof of concept that cannot pass your governance board is not a proof of anything."
            </p>
          </blockquote>
        </div>
      </section>

      {/* THE IMPLEMENTATION GAP */}
      <section className="py-20 lg:py-28" style={{ backgroundColor: "#F2F0F7" }}>
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.12em] mb-6" style={{ color: "#60266A" }}>
                The implementation gap most AI consultancies leave
              </p>
              <h2
                className="font-display text-3xl md:text-4xl mb-8 leading-tight"
                style={{ color: "#181F4F", fontWeight: 400 }}
              >
                Most AI projects stall between POC and production. We specialise in the
                part most consultancies skip.
              </h2>
              <p className="font-sans text-base leading-relaxed mb-6" style={{ color: "#65677B" }}>
                Getting an AI model to work in a sandbox is not the same as deploying it in a
                regulated environment where every decision needs to be explainable, every data flow
                needs to be auditable, and every risk needs to be signed off by a governance board.
              </p>
              <p className="font-sans text-base leading-relaxed" style={{ color: "#65677B" }}>
                We bridge that gap. From the first use case assessment through to production delivery,
                change management, and internal capability transfer, we stay for the full journey.
              </p>
            </div>
            <div className="space-y-4 pt-8 lg:pt-16">
              {[
                "POC completed, production delivery stalled at governance review",
                "Vendor solution deployed, but internal teams cannot support or evolve it",
                "AI system live, but no audit trail and no explainability framework",
                "Implementation delivered, but organisational capability not transferred",
                "AI project approved, but no integration with existing PMO or assurance structures",
              ].map((gap) => (
                <div
                  key={gap}
                  className="flex items-start gap-3 p-4 rounded"
                  style={{ backgroundColor: "#ffffff" }}
                >
                  <Zap className="h-5 w-5 flex-shrink-0 mt-0.5" style={{ color: "#F85C70" }} />
                  <span className="font-sans text-sm leading-relaxed" style={{ color: "#65677B" }}>
                    {gap}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* WHAT WE DELIVER */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <p className="font-mono text-xs uppercase tracking-[0.12em] mb-4" style={{ color: "#6B6E81" }}>
            What we deliver
          </p>
          <h2 className="font-display text-4xl md:text-5xl mb-16" style={{ color: "#181F4F", fontWeight: 400 }}>
            AI Implementation Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border-l border-t" style={{ borderColor: "#E5E3EE" }}>
            {services.map((service) => (
              <div key={service.title} className="p-8 border-r border-b" style={{ borderColor: "#E5E3EE" }}>
                <div className="w-1 h-8 mb-6 rounded" style={{ backgroundColor: "#F85C70" }} />
                <h3 className="font-display text-2xl mb-4" style={{ color: "#181F4F", fontWeight: 400 }}>
                  {service.title}
                </h3>
                <p className="font-sans text-sm leading-relaxed mb-3" style={{ color: "#65677B" }}>
                  {service.body}
                </p>
                {service.deliverable && (
                  <p className="font-sans text-xs italic" style={{ color: "#60266A" }}>
                    {service.deliverable}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW WE DO IT DIFFERENTLY */}
      <section className="py-20 lg:py-28" style={{ backgroundColor: "#181F4F" }}>
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <p className="font-mono text-xs uppercase tracking-[0.12em] mb-4" style={{ color: "#F85C70" }}>
            How we work
          </p>
          <h2 className="font-display text-4xl text-white mb-12" style={{ fontWeight: 400 }}>
            Four things that make our implementation different
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border-l border-t" style={{ borderColor: "rgba(255,255,255,0.1)" }}>
            {principles.map((principle) => (
              <div
                key={principle.title}
                className="p-8 border-r border-b"
                style={{ borderColor: "rgba(255,255,255,0.1)" }}
              >
                <CheckCircle className="h-5 w-5 mb-4" style={{ color: "#F85C70" }} />
                <h3 className="font-display text-xl text-white mb-3" style={{ fontWeight: 400 }}>
                  {principle.title}
                </h3>
                <p className="font-sans text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.6)" }}>
                  {principle.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RELATED SERVICES */}
      <section className="py-16 lg:py-20 border-b" style={{ borderColor: "#E5E3EE" }}>
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <p className="font-mono text-xs uppercase tracking-[0.12em] mb-8" style={{ color: "#6B6E81" }}>
            Works alongside
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-l border-t" style={{ borderColor: "#E5E3EE" }}>
            {[
              {
                tag: "AMP 01",
                title: "AI Governance",
                body: "The governance framework that makes responsible AI implementation possible. We typically run AMP 01 and AMP 02 together.",
                href: "/ai-governance",
              },
              {
                tag: "AMP 03",
                title: "Structured Delivery",
                body: "Squad-based delivery models designed for organisations where governance and programme rigour are non-negotiable.",
                href: "/structured-delivery",
              },
              {
                tag: "AMP 04",
                title: "Capability Building",
                body: "Building the internal capability your teams need to operate and evolve AI systems after we have left.",
                href: "/capability",
              },
            ].map((item) => (
              <Link href={item.href} key={item.tag} className="group block">
                <div
                  className="p-8 border-r border-b h-full flex flex-col transition-colors duration-150"
                  style={{ borderColor: "#E5E3EE" }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.backgroundColor = "#F9F8FC"; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.backgroundColor = "transparent"; }}
                >
                  <p className="font-mono text-xs uppercase tracking-[0.12em] mb-3" style={{ color: "#F85C70" }}>
                    {item.tag}
                  </p>
                  <h3 className="font-display text-xl mb-3" style={{ color: "#181F4F", fontWeight: 400 }}>
                    {item.title}
                  </h3>
                  <p className="font-sans text-sm leading-relaxed mb-6 flex-1" style={{ color: "#65677B" }}>
                    {item.body}
                  </p>
                  <span
                    className="inline-flex items-center gap-2 text-sm font-semibold group-hover:gap-3 transition-all duration-200"
                    style={{ color: "#F85C70" }}
                  >
                    Learn more <ArrowRight className="h-3 w-3" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 text-center" style={{ backgroundColor: "#60266A" }}>
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-4xl md:text-5xl text-white mb-6" style={{ fontWeight: 400 }}>
            Ready to Move Beyond the POC?
          </h2>
          <p className="font-sans text-lg max-w-[480px] mx-auto mb-10" style={{ color: "rgba(255,255,255,0.8)" }}>
            Start with a use case assessment. We will tell you exactly what it will take to deliver
            your AI ambition inside your governance constraints.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button
              onClick={() => onOpenConsultation("amplified-teams")}
              className="amp-focus-ring-on-navy inline-flex items-center gap-2 px-10 h-12 font-sans font-bold text-base rounded transition-colors duration-200"
              style={{ backgroundColor: "#F85C70", color: "#181F4F" }}
              data-testid="button-ai-implementation-cta"
              onMouseOver={(e) => ((e.currentTarget as HTMLButtonElement).style.backgroundColor = "#d94a5e")}
              onMouseOut={(e) => ((e.currentTarget as HTMLButtonElement).style.backgroundColor = "#F85C70")}
            >
              Start a Conversation <ArrowRight className="h-4 w-4" />
            </button>
            <Link href="/ai-governance">
              <button
                className="amp-focus-ring-on-navy inline-flex items-center gap-2 px-10 h-12 font-sans font-bold text-base rounded transition-colors duration-200"
                style={{ border: "1px solid rgba(255,255,255,0.3)", color: "#FFFFFF", backgroundColor: "transparent" }}
                data-testid="button-ai-implementation-governance"
                onMouseOver={(e) => ((e.currentTarget as HTMLButtonElement).style.backgroundColor = "rgba(255,255,255,0.08)")}
                onMouseOut={(e) => ((e.currentTarget as HTMLButtonElement).style.backgroundColor = "transparent")}
              >
                View AI Governance (AMP 01)
              </button>
            </Link>
          </div>
          <p className="font-sans text-sm mt-6" style={{ color: "rgba(255,255,255,0.5)" }}>
            No pitch. No deck. Just a 30-minute call.
          </p>
        </div>
      </section>
    </div>
  );
});

export default AiImplementation;
