'use client';

import { memo } from "react";
import Link from "next/link";
import heroImg from "@assets/stock_images/ai-governance-hero.webp";
import Image from 'next/image';
import { ArrowRight, CheckCircle, Shield } from "lucide-react";
import { ServiceSchema, StructuredData } from "@/components/structured-data";
import { aiGovernanceFAQSchema, createBreadcrumbSchema } from "@/lib/schemas";
import { FurtherReading } from "@/components/further-reading";

interface AiGovernanceProps {
  onOpenConsultation: (serviceType?: string) => void;
}

const services = [
  {
    title: "AI Readiness Assessment",
    body: "A structured review of your current readiness to adopt AI responsibly. We assess governance maturity, data infrastructure, team capability, regulatory alignment, and risk appetite, and deliver a clear sequenced roadmap.",
    deliverable: "AI Readiness Report with prioritised action plan.",
  },
  {
    title: "Responsible AI Framework Design",
    body: "We design AI governance frameworks built for your sector, covering decision accountability, bias and fairness standards, explainability requirements, data governance, and ongoing monitoring.",
    deliverable: "Aligned to: EU AI Act, UK AI Governance Framework, ISO/IEC 42001, FCA guidance, GDS standards.",
  },
  {
    title: "AI Policy Development",
    body: "End-to-end policy design covering acceptable use, data handling, model governance, procurement standards for AI vendors, and board-level AI risk reporting.",
    deliverable: null,
  },
  {
    title: "Regulatory Alignment Review",
    body: "We map your AI plans against the standards you'll be assessed against, OFGEM, FCA, GDS, NEC, and identify gaps before they become audit findings.",
    deliverable: null,
  },
  {
    title: "AI Governance Training",
    body: "Practical training for technical teams, senior leaders, and governance boards, covering AI risk, responsible AI principles, and how to interrogate AI suppliers.",
    deliverable: null,
  },
];

const standards = [
  "EU AI Act (2024), risk classification, conformity assessments, prohibited practices",
  "UK AI Governance Framework, DSIT guidance on responsible AI adoption",
  "ISO/IEC 42001, AI management system standard",
  "FCA Consumer Duty, explainability and fairness requirements",
  "GDS Service Standard, public sector digital and AI delivery standards",
  "OFGEM AI guidance, energy sector considerations",
  "NCSC AI Security Guidelines, securing AI in critical infrastructure",
];

const gaps = [
  "Regulatory requirements that apply directly to how AI is used and audited",
  "Procurement and assurance processes that need to interrogate AI decisions",
  "Operational risk profiles that make 'move fast and break things' commercially unacceptable",
  "Workforces and leadership teams who need to trust AI outputs before they act on them",
];

const AiGovernance = memo(function AiGovernance({ onOpenConsultation }: AiGovernanceProps) {
  return (
    <div className="min-h-screen font-sans" style={{ backgroundColor: "#ffffff" }}>
      <ServiceSchema name="AI Governance" description="Responsible AI governance frameworks, policies, and assurance structures for infrastructure, energy, financial services and public sector organisations. EU AI Act, FCA, GDS aligned." url="https://amplified.co.uk/ai-governance" />
      <StructuredData data={aiGovernanceFAQSchema} id="ai-governance-faq-schema" />
      <StructuredData data={createBreadcrumbSchema([{ name: 'Home', url: 'https://amplified.co.uk/' }, { name: 'AI Governance', url: 'https://amplified.co.uk/ai-governance' }])} id="ai-governance-breadcrumb" />

      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="border-b border-gray-100">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <ol className="flex items-center gap-2 text-xs text-gray-500 flex-wrap">
            <li><Link href="/" className="hover:text-gray-800 transition-colors">Home</Link></li>
            <li aria-hidden="true">/</li>
            <li aria-current="page" className="text-gray-800 font-medium">AI Governance</li>
          </ol>
        </div>
      </nav>

      {/* Hero */}
      <section
        className="py-28 lg:py-36 relative overflow-hidden"
        style={{ backgroundColor: "#181F4F" }}
      >
        <div className="hidden lg:block absolute inset-y-0 right-0 w-[48%] pointer-events-none" aria-hidden="true">
          <Image src={heroImg} alt="" aria-hidden="true" fill className="object-cover" style={{ opacity: 0.3 }} priority sizes="48vw" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to right, #181F4F 0%, transparent 60%)" }} />
        </div>
        <div className="relative max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <p
            className="font-mono text-xs uppercase tracking-[0.15em] mb-6"
            style={{ color: "#F85C70" }}
          >
            AMP 01
          </p>
          <h1
            className="font-display text-5xl md:text-6xl text-white mb-8 max-w-[720px] leading-tight"
            style={{ fontWeight: 400 }}
          >
            AI Governance
          </h1>
          <p
            className="font-sans text-lg max-w-[580px] leading-relaxed mb-6"
            style={{ color: "rgba(255,255,255,0.75)" }}
          >
            AI implementation without governance isn't innovation. In a regulated industry, it's a
            liability.
          </p>
          <p
            className="font-sans text-lg max-w-[580px] leading-relaxed"
            style={{ color: "rgba(255,255,255,0.75)" }}
          >
            Amplified builds the governance frameworks, policies, and assurance structures your
            organisation needs to adopt AI with confidence, before your board asks the question.
          </p>
          <blockquote
            className="mt-10 p-6 border-l-4 max-w-[540px]"
            style={{ borderColor: "#F85C70", backgroundColor: "rgba(248,92,112,0.08)" }}
          >
            <p
              className="font-display text-xl text-white italic"
              style={{ fontWeight: 400 }}
            >
              "The question isn't whether to adopt AI. It's whether your governance can support it."
            </p>
          </blockquote>
        </div>
      </section>

      {/* The governance gap */}
      <section
        className="py-20 lg:py-28"
        style={{ backgroundColor: "#F2F0F7" }}
      >
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <p
                className="font-mono text-xs uppercase tracking-[0.12em] mb-6"
                style={{ color: "#60266A" }}
              >
                The governance gap most AI consultancies ignore
              </p>
              <h2
                className="font-display text-3xl md:text-4xl mb-8 leading-tight"
                style={{ color: "#181F4F", fontWeight: 400 }}
              >
                Most AI consultancies are built for tech companies and scale-ups. They know how to
                ship fast. They don't always know how to ship accountably.
              </h2>
              <p
                className="font-sans text-base leading-relaxed"
                style={{ color: "#65677B" }}
              >
                Project-driven organisations operate under fundamentally different constraints:
              </p>
            </div>
            <div className="space-y-4 pt-8 lg:pt-16">
              {gaps.map((gap) => (
                <div
                  key={gap}
                  className="flex items-start gap-3 p-4 rounded"
                  style={{ backgroundColor: "#ffffff" }}
                >
                  <Shield
                    className="h-5 w-5 flex-shrink-0 mt-0.5"
                    style={{ color: "#F85C70" }}
                  />
                  <span className="font-sans text-sm leading-relaxed" style={{ color: "#65677B" }}>
                    {gap}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <p
            className="font-mono text-xs uppercase tracking-[0.12em] mb-4"
            style={{ color: "#6B6E81" }}
          >
            What we deliver
          </p>
          <h2
            className="font-display text-4xl md:text-5xl mb-16"
            style={{ color: "#181F4F", fontWeight: 400 }}
          >
            AI Governance Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border-l border-t" style={{ borderColor: "#E5E3EE" }}>
            {services.map((service) => (
              <div
                key={service.title}
                className="p-8 border-r border-b"
                style={{ borderColor: "#E5E3EE" }}
              >
                <div
                  className="w-1 h-8 mb-6 rounded"
                  style={{ backgroundColor: "#F85C70" }}
                />
                <h3
                  className="font-display text-2xl mb-4"
                  style={{ color: "#181F4F", fontWeight: 400 }}
                >
                  {service.title}
                </h3>
                <p
                  className="font-sans text-sm leading-relaxed mb-3"
                  style={{ color: "#65677B" }}
                >
                  {service.body}
                </p>
                {service.deliverable && (
                  <p
                    className="font-sans text-xs italic"
                    style={{ color: "#60266A" }}
                  >
                    {service.deliverable}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Standards */}
      <section
        className="py-20 lg:py-28"
        style={{ backgroundColor: "#181F4F" }}
      >
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <p
            className="font-mono text-xs uppercase tracking-[0.12em] mb-4"
            style={{ color: "#F85C70" }}
          >
            Standards we align to
          </p>
          <h2
            className="font-display text-4xl text-white mb-12"
            style={{ fontWeight: 400 }}
          >
            Regulatory Alignment
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {standards.map((standard) => (
              <div
                key={standard}
                className="flex items-start gap-3 p-4 rounded border"
                style={{ borderColor: "rgba(255,255,255,0.1)", backgroundColor: "rgba(255,255,255,0.04)" }}
              >
                <CheckCircle
                  className="h-4 w-4 flex-shrink-0 mt-0.5"
                  style={{ color: "#F85C70" }}
                />
                <span
                  className="font-sans text-sm leading-relaxed"
                  style={{ color: "rgba(255,255,255,0.75)" }}
                >
                  {standard}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FurtherReading tags={["AI Governance", "Regulated Industries", "AI Capability"]} maxArticles={3} />

      {/* Role pages cross-link */}
      <section className="py-12" style={{ backgroundColor: "#F2F0F7" }}>
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <p className="font-sans text-sm mb-4" style={{ color: "#65677B" }}>
            This service is designed for specific roles. Read more about how we work with:
          </p>
          <div className="flex flex-wrap gap-3">
            {[
              { label: "Chief Information Officers", href: "/for-cios" },
              { label: "Digital Leads", href: "/for-digital-leads" },
            ].map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="inline-flex items-center gap-2 px-5 h-9 font-sans text-sm font-semibold rounded transition-colors duration-200"
                style={{ backgroundColor: "#181F4F", color: "#ffffff" }}
                onMouseOver={(e) =>
                  ((e.currentTarget as HTMLAnchorElement).style.backgroundColor = "#60266A")
                }
                onMouseOut={(e) =>
                  ((e.currentTarget as HTMLAnchorElement).style.backgroundColor = "#181F4F")
                }
              >
                {link.label} &rarr;
              </Link>
            ))}
          </div>
        </div>
      </section>

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
            Ready to Build Your Governance?
          </h2>
          <p
            className="font-sans text-lg max-w-[480px] mx-auto mb-10"
            style={{ color: "rgba(255,255,255,0.8)" }}
          >
            Start with an AI Readiness Assessment. We'll tell you exactly where you are and what
            needs to happen before you implement.
          </p>
          <Link href="/contact">
            <button
              className="amp-focus-ring-on-navy inline-flex items-center gap-2 px-10 h-12 font-sans font-bold text-base rounded transition-colors duration-200"
              style={{ backgroundColor: "#F85C70", color: "#181F4F" }}
              data-testid="button-ai-governance-cta"
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
  );
});

export default AiGovernance;
