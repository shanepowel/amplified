'use client';

import { memo } from "react";
import Link from "next/link";
import heroImg from "@assets/stock_images/financial-services-sector.webp";
import Image from 'next/image';
import { ArrowRight, CheckCircle } from "lucide-react";
import { StructuredData } from "@/components/structured-data";
import { createServiceSchema, createBreadcrumbSchema, financialServicesFAQSchema } from "@/lib/schemas";

interface Props {
  onOpenConsultation: (serviceType?: string) => void;
}

const deliverables = [
  {
    title: "FCA-Aligned AI Governance Framework",
    body: "A governance structure that satisfies FCA principles, Consumer Duty requirements, and SMCR accountability obligations for AI systems used in regulated activities. Every AI system is mapped to a named Senior Manager, every customer-facing model has documented explainability standards, and your board can answer FCA questions about your AI programme without preparation.",
    link: "/ai-governance",
    linkLabel: "AI Governance",
  },
  {
    title: "EU AI Act Dual-Compliance Programme",
    body: "For firms operating in both UK and EU markets, we build governance frameworks that satisfy both regimes simultaneously. We map your AI systems to EU AI Act risk classifications, identify the conformity assessment requirements for high-risk applications, and document the technical and governance controls required under both frameworks.",
    link: "/ai-governance",
    linkLabel: "AI Governance",
  },
  {
    title: "AI Risk Assessment and Model Risk Management",
    body: "Structured AI and model risk assessments aligned to SR 11-7 principles and your firm's existing risk framework. We assess model risk across explainability, fairness, data quality, operational resilience, and regulatory exposure, and produce documentation that satisfies your second and third lines of defence.",
    link: "/ai-governance",
    linkLabel: "AI Governance",
  },
  {
    title: "Structured AI Programme Delivery",
    body: "End-to-end delivery of AI implementation programmes within your governance and change management structures. We work within your change control process, produce the artefacts your Risk and Compliance teams require before going live, and build handover documentation that satisfies your internal audit function.",
    link: "/ai-implementation",
    linkLabel: "AI Implementation",
  },
  {
    title: "AI Capability Building for Financial Services Teams",
    body: "Practical training for Compliance, Risk, Technology, and Operations teams on understanding AI systems, conducting effective challenge of AI model outputs, and maintaining oversight standards under SMCR. Built for financial services professionals, not data scientists.",
    link: "/capability",
    linkLabel: "Capability Building",
  },
  {
    title: "AI Procurement and Vendor Assurance",
    body: "Governance and due diligence frameworks for procuring AI tools and platforms from third-party vendors. We assess vendor AI governance practices, build contractual requirements for explainability and audit access, and produce the third-party risk documentation your procurement and Risk functions require.",
    link: "/ai-governance",
    linkLabel: "AI Governance",
  },
];

const challenges = [
  "FCA Principles and Consumer Duty require AI systems affecting customer outcomes to be explainable, fair, and subject to documented human oversight, requirements most commercial AI tools do not address natively",
  "SMCR accountability means a named Senior Manager must own and be able to demonstrate oversight of every material AI system, which requires governance structures that go beyond what Technology teams alone can build",
  "The EU AI Act classifies several financial services AI applications as high-risk, including credit scoring, insurance underwriting, and employment decisions, triggering conformity assessment requirements that must be built before deployment",
  "Model risk management frameworks, whether based on SR 11-7 or internal standards, must be extended to cover machine learning models, which have different failure modes and explainability challenges than traditional quantitative models",
  "Third-party AI vendor risk is growing as firms adopt AI platforms where the underlying model is a black box, creating regulatory exposure if the vendor cannot satisfy FCA questions about model behaviour",
];

const fsSchema = createServiceSchema({
  name: 'AI Governance & Technology Delivery for Financial Services Organisations',
  url: 'https://amplified.co.uk/sectors/financial-services',
  description: 'FCA-aligned AI governance frameworks, EU AI Act compliance, and model risk management for banks, insurers, and regulated financial services firms.',
  keywords: [
    'AI governance financial services UK',
    'FCA AI compliance framework',
    'responsible AI financial regulation',
    'EU AI Act financial services',
    'SMCR AI accountability',
    'model risk management AI',
  ],
});

const breadcrumbSchema = createBreadcrumbSchema([
  { name: 'Home', url: 'https://amplified.co.uk/' },
  { name: 'Sectors', url: 'https://amplified.co.uk/sectors/financial-services' },
  { name: 'Financial Services', url: 'https://amplified.co.uk/sectors/financial-services' },
]);

const SectorFinancialServices = memo(function SectorFinancialServices({ onOpenConsultation }: Props) {
  return (
    <div className="min-h-screen font-sans" style={{ backgroundColor: "#ffffff" }}>
      <StructuredData data={fsSchema} id="financial-services-schema" />
      <StructuredData data={breadcrumbSchema} id="financial-services-breadcrumb" />
      <StructuredData data={financialServicesFAQSchema} id="financial-services-faq" />

      {/* Hero */}
      <section className="py-28 lg:py-36 relative overflow-hidden" style={{ backgroundColor: "#181F4F" }}>
        <div className="hidden lg:block absolute inset-y-0 right-0 w-[48%] pointer-events-none" aria-hidden="true">
          <Image src={heroImg} alt="" aria-hidden="true" fill className="object-cover" style={{ opacity: 0.3 }} priority sizes="48vw" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to right, #181F4F 0%, transparent 60%)" }} />
        </div>
        <div className="relative max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="mb-8" aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 text-sm" style={{ color: "#65677B" }}>
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li style={{ color: "#65677B" }}>/</li>
              <li style={{ color: "#F85C70" }}>Financial Services</li>
            </ol>
          </nav>
          <p className="font-mono text-xs uppercase tracking-[0.15em] mb-6" style={{ color: "#F85C70" }}>
            Sector Focus
          </p>
          <h1
            className="font-bold leading-[1.1] mb-8"
            style={{ fontSize: "clamp(2.2rem, 5vw, 3.5rem)", color: "#ffffff" }}
          >
            AI Governance for<br />Financial Services Organisations
          </h1>
          <p className="text-xl leading-relaxed mb-10 max-w-2xl" style={{ color: "#E5E3EE" }}>
            Banks, insurers, and regulated financial services firms face the most demanding AI governance environment of any sector. FCA principles, Consumer Duty, SMCR, EU AI Act, SR 11-7 model risk standards. We build governance frameworks that satisfy all of them, without creating a parallel compliance process that slows down your technology programme.
          </p>
          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => onOpenConsultation("Financial Services AI Governance")}
              className="amp-focus-ring-on-navy inline-flex items-center gap-2 px-7 py-3.5 rounded-lg font-semibold text-white transition-all hover:opacity-90"
              style={{ backgroundColor: "#F85C70" }}
              data-testid="button-financial-services-hero"
            >
              Discuss your AI programme
              <ArrowRight className="w-4 h-4" />
            </button>
            <Link
              href="/ai-governance"
              className="amp-focus-ring-on-navy inline-flex items-center gap-2 px-7 py-3.5 rounded-lg font-semibold border transition-all hover:bg-white/10"
              style={{ color: "#ffffff", borderColor: "rgba(255,255,255,0.3)" }}
            >
              AI Governance service
            </Link>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-20 lg:py-24" style={{ backgroundColor: "#ffffff" }}>
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="font-bold mb-6" style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)", color: "#181F4F" }}>
                Why generic AI governance fails in financial services
              </h2>
              <p className="text-lg leading-relaxed mb-6" style={{ color: "#65677B" }}>
                The AI governance frameworks published by technology vendors, most consulting firms, and even regulators are written for organisations where failure is recoverable. In financial services, AI failure can mean regulatory enforcement, customer harm at scale, or individual accountability under SMCR. The tolerance for error is different. The governance framework must reflect that.
              </p>
              <p className="text-lg leading-relaxed mb-6" style={{ color: "#65677B" }}>
                We build AI governance specifically for firms where the regulatory context, FCA Principles, Consumer Duty, EU AI Act, Senior Managers and Certification Regime, is the governing constraint, not a compliance checkbox. This means governance that is built into your operating model, not bolted on top of it.
              </p>
              <p className="text-lg leading-relaxed" style={{ color: "#65677B" }}>
                Our partners have worked inside regulated financial services organisations. We understand the difference between what passes a model risk review and what a CRO will actually sign off. We build to the higher standard.
              </p>
            </div>
            <div>
              <div className="rounded-2xl p-8" style={{ backgroundColor: "#F2F0F7" }}>
                <h3 className="font-bold mb-6" style={{ color: "#181F4F", fontSize: "1.1rem" }}>
                  Regulatory frameworks we align to
                </h3>
                <ul className="space-y-3">
                  {[
                    "FCA Principles for Businesses (Principles 3, 6, 7, 9, 11, 12)",
                    "Consumer Duty (fair outcomes, price and value, understanding, support)",
                    "SMCR (Senior Manager accountability, individual responsibility)",
                    "EU AI Act (risk classification, conformity assessments, high-risk applications)",
                    "UK AI Regulatory Framework (DSIT, cross-sector guidance)",
                    "SR 11-7 (model risk management principles, validation standards)",
                    "UK GDPR Article 22 (automated decision-making rights)",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: "#F85C70" }} />
                      <span className="text-sm leading-relaxed" style={{ color: "#65677B" }}>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Challenge */}
      <section className="py-20 lg:py-24" style={{ backgroundColor: "#F2F0F7" }}>
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <p className="font-mono text-xs uppercase tracking-[0.15em] mb-4" style={{ color: "#F85C70" }}>
            The Challenge
          </p>
          <h2 className="font-bold mb-6" style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)", color: "#181F4F" }}>
            What makes financial services AI governance harder
          </h2>
          <div className="space-y-4">
            {challenges.map((item, i) => (
              <div key={i} className="flex items-start gap-4 bg-white rounded-xl p-5" style={{ border: "1px solid #E5E3EE" }}>
                <span className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold text-white mt-0.5" style={{ backgroundColor: "#F85C70" }}>
                  {i + 1}
                </span>
                <p className="text-base leading-relaxed" style={{ color: "#65677B" }}>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Deliver */}
      <section className="py-20 lg:py-24" style={{ backgroundColor: "#ffffff" }}>
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <p className="font-mono text-xs uppercase tracking-[0.15em] mb-4" style={{ color: "#F85C70" }}>
            What Amplified Delivers
          </p>
          <h2 className="font-bold mb-6" style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)", color: "#181F4F" }}>
            Services for financial services organisations
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {deliverables.map((item) => (
              <div key={item.title} className="rounded-2xl p-7" style={{ backgroundColor: "#F2F0F7", border: "1px solid #E5E3EE" }}>
                <h3 className="font-bold mb-3" style={{ color: "#181F4F", fontSize: "1.1rem" }}>{item.title}</h3>
                <p className="text-base leading-relaxed mb-4" style={{ color: "#65677B" }}>{item.body}</p>
                <Link href={item.link} className="amp-focus-ring-on-light inline-flex items-center gap-1.5 text-sm font-semibold hover:opacity-80 transition-opacity" style={{ color: "#F85C70" }}>
                  {item.linkLabel}
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="py-20 lg:py-24" style={{ backgroundColor: "#181F4F" }}>
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <p className="font-mono text-xs uppercase tracking-[0.15em] mb-4" style={{ color: "#F85C70" }}>
            How We Work
          </p>
          <h2 className="font-bold mb-6" style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)", color: "#ffffff" }}>
            What an engagement looks like
          </h2>
          <div className="grid lg:grid-cols-3 gap-6 mt-10">
            {[
              {
                phase: "Weeks 1–4",
                title: "Regulatory and AI landscape mapping",
                body: "We map your current AI use against the regulatory frameworks that apply, identify the highest-risk systems for immediate governance attention, and agree the scope and structure of the governance framework. We work with your Compliance, Risk, and Technology leads from the start so the framework reflects operational reality.",
              },
              {
                phase: "Weeks 5–12",
                title: "Framework design and documentation",
                body: "We build the governance framework, including accountability mapping, risk assessment templates, model risk documentation, board reporting structures, and change management processes. All outputs go through review by your second-line functions before finalisation. The framework is built to last, not to be replaced in the next regulatory cycle.",
              },
              {
                phase: "Ongoing",
                title: "Embedding and assurance",
                body: "We support the implementation of the framework within your change management process, train the teams who will use it, and provide retained advisory support through your first AI deployment cycle. The goal is for your Compliance and Technology teams to own and operate the framework independently within twelve months.",
              },
            ].map((phase) => (
              <div key={phase.phase} className="rounded-2xl p-7" style={{ backgroundColor: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.12)" }}>
                <p className="font-mono text-xs uppercase tracking-[0.15em] mb-3" style={{ color: "#F85C70" }}>{phase.phase}</p>
                <h3 className="font-bold mb-3 text-white">{phase.title}</h3>
                <p className="text-base leading-relaxed" style={{ color: "#E5E3EE" }}>{phase.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 lg:py-24" style={{ backgroundColor: "#F2F0F7" }}>
        <div className="max-w-[900px] mx-auto px-4 sm:px-6 lg:px-8">
          <p className="font-mono text-xs uppercase tracking-[0.15em] mb-4" style={{ color: "#F85C70" }}>
            Common Questions
          </p>
          <h2 className="font-bold mb-10" style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)", color: "#181F4F" }}>
            Questions financial services firms ask
          </h2>
          <div className="space-y-4">
            {[
              {
                q: "What does FCA-aligned AI governance look like in practice?",
                a: "FCA-aligned AI governance means every AI system used in regulated activities has a documented accountability owner, a model risk assessment aligned to SR 11-7 principles, explainability standards that satisfy Principle 6 (fair treatment of customers), and a change management process that triggers regulatory notification where required. It also means your board can answer questions about your AI systems if the FCA asks.",
              },
              {
                q: "How does the EU AI Act affect UK financial services firms?",
                a: "UK financial services firms operating in EU markets, offering products to EU customers, or processing data from EU subjects must comply with the EU AI Act. High-risk AI applications in credit scoring, insurance underwriting, and employment decisions face the strictest requirements. Amplified builds dual-compliance frameworks that satisfy both UK FCA requirements and EU AI Act obligations.",
              },
              {
                q: "What is SMCR accountability for AI systems?",
                a: "Under SMCR, Senior Managers are individually accountable for the areas they oversee, including technology and AI systems. This means a named Senior Manager must own every material AI system, understand its risk profile, and be able to demonstrate adequate oversight if the FCA investigates. Amplified structures AI governance frameworks to satisfy SMCR accountability requirements explicitly.",
              },
              {
                q: "How quickly can Amplified implement an AI governance framework?",
                a: "For most financial services organisations, an initial AI governance framework covering existing systems and controls can be delivered in eight to twelve weeks. This includes a risk assessment of current AI use, an accountability mapping exercise, policy documentation, and board reporting templates. Ongoing assurance and monitoring is then structured as a retained service.",
              },
            ].map((item, i) => (
              <details key={i} className="bg-white rounded-xl p-6 cursor-pointer" style={{ border: "1px solid #E5E3EE" }}>
                <summary className="amp-focus-ring-on-light font-semibold text-base list-none flex items-center justify-between cursor-pointer" style={{ color: "#181F4F" }}>
                  {item.q}
                  <span className="text-lg ml-4 flex-shrink-0" style={{ color: "#F85C70" }}>+</span>
                </summary>
                <p className="mt-4 text-base leading-relaxed" style={{ color: "#65677B" }}>{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-24" style={{ backgroundColor: "#181F4F" }}>
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-bold mb-6 text-white" style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)" }}>
            Discuss your financial services AI governance programme
          </h2>
          <p className="text-xl mb-10 max-w-2xl mx-auto" style={{ color: "#E5E3EE" }}>
            Whether you are preparing for your first FCA question about AI or building a governance framework for a major AI implementation programme, we can help you get it right before it becomes a regulatory issue.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button
              onClick={() => onOpenConsultation("Financial Services AI Governance")}
              className="amp-focus-ring-on-navy inline-flex items-center gap-2 px-8 py-4 rounded-lg font-semibold text-white transition-all hover:opacity-90"
              style={{ backgroundColor: "#F85C70" }}
              data-testid="button-financial-services-consultation"
            >
              Book a consultation
              <ArrowRight className="w-4 h-4" />
            </button>
            <Link
              href="/ai-governance"
              className="amp-focus-ring-on-navy inline-flex items-center gap-2 px-8 py-4 rounded-lg font-semibold border transition-all hover:bg-white/10"
              style={{ color: "#ffffff", borderColor: "rgba(255,255,255,0.3)" }}
            >
              AI Governance service
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
});

export default SectorFinancialServices;
