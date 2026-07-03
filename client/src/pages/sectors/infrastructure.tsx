'use client';

import { memo } from "react";
import Link from "next/link";
import heroImg from "@assets/stock_images/infrastructure-hero.webp";
import Image from 'next/image';
import { ArrowRight, CheckCircle, Building2, Shield, Layers, Users } from "lucide-react";
import { StructuredData } from "@/components/structured-data";
import { createServiceSchema, createBreadcrumbSchema, infrastructureFAQSchema } from "@/lib/schemas";

interface Props {
  onOpenConsultation: (serviceType?: string) => void;
}

const deliverables = [
  {
    title: "AI Governance Framework for Infrastructure Programmes",
    body: "A governance structure built to operate within your existing PMO controls, not alongside them. We map AI accountability to named programme roles, build risk registers aligned to your stage-gate process, and ensure every AI use case has documented assurance evidence before it reaches approval. Your board, your client, and your auditors can interrogate the framework without needing to understand the technology.",
    link: "/ai-governance",
    linkLabel: "AI Governance",
  },
  {
    title: "Structured Agile Delivery within NEC and JCT Contracts",
    body: "Sprint-based delivery does not break your contract structure. We adapt agile squad models to work within NEC compensation event processes, stage-gate approval cycles, and the documentation requirements of infrastructure clients. Delivery is faster and more responsive without compromising the audit trail or contractual traceability.",
    link: "/structured-delivery",
    linkLabel: "Structured Delivery",
  },
  {
    title: "Digital Programme Setup and PMO Integration",
    body: "We embed digital workstreams directly within your programme structure. Change management, benefits tracking, and risk reporting all feed into existing PMO governance rather than creating a parallel digital governance layer that no one reads. Deliverables meet the same assurance standards as physical programme outputs.",
    link: "/transformation",
    linkLabel: "Tech Build",
  },
  {
    title: "AI Readiness Assessment for Capital Programmes",
    body: "A structured review of your programme's readiness to adopt AI tools for planning, scheduling, risk management, and site safety. We assess data availability, governance maturity, regulatory constraints, and workforce readiness, and deliver a prioritised roadmap of AI use cases with risk-adjusted business cases ready for board approval.",
    link: "/ai-governance",
    linkLabel: "AI Governance",
  },
  {
    title: "Capability Building for Programme Delivery Teams",
    body: "Practical training and coaching for programme managers, digital leads, and site teams on working with AI tools, understanding AI outputs, and maintaining the oversight standards your governance framework requires. Not classroom theory but applied capability built within your live programme context.",
    link: "/capability",
    linkLabel: "Capability Building",
  },
  {
    title: "Stable Teams for Infrastructure Delivery",
    body: "When you need embedded delivery capability, Stable Teams provides pre-assembled squads of delivery professionals who are mobilised within 48 hours and structured to work within your programme governance from day one. Not contractors who happen to know agile but teams built specifically for governed delivery environments.",
    link: "/teams",
    linkLabel: "Stable Teams",
  },
];

const challenges = [
  "NEC and JCT contract structures that require documented compensation events, early warnings, and stage-gate approvals that are incompatible with how most AI tools are designed to be used",
  "PMO governance that demands an audit trail for every significant decision, which means AI-assisted decisions need to be explainable in terms your assurance board can interrogate",
  "Distributed workforces across multiple sites, where digital adoption requires training, change management, and ongoing support that head-office technology teams cannot provide alone",
  "Regulatory frameworks, Network Licence conditions, planning requirements, environmental obligations, that create hard constraints on what data can be used, how, and by whom",
  "Client and supply chain relationships where AI adoption in one tier creates risk or opportunity for others, requiring governance that spans organisational boundaries",
];

const infrastructureSchema = createServiceSchema({
  name: 'AI Governance & Technology Delivery for Infrastructure Organisations',
  url: 'https://amplified.co.uk/sectors/infrastructure',
  description: 'AI governance, structured delivery, and digital programme management for infrastructure and construction organisations operating under NEC/JCT contracts with PMO governance requirements.',
  keywords: [
    'AI governance infrastructure',
    'technology delivery infrastructure programmes',
    'agile delivery NEC contracts',
    'digital transformation construction',
    'PMO governance AI',
    'infrastructure digital programme',
  ],
});

const breadcrumbSchema = createBreadcrumbSchema([
  { name: 'Home', url: 'https://amplified.co.uk/' },
  { name: 'Sectors', url: 'https://amplified.co.uk/sectors/infrastructure' },
  { name: 'Infrastructure', url: 'https://amplified.co.uk/sectors/infrastructure' },
]);

const SectorInfrastructure = memo(function SectorInfrastructure({ onOpenConsultation }: Props) {
  return (
    <div className="min-h-screen font-sans" style={{ backgroundColor: "#ffffff" }}>
      <StructuredData data={infrastructureSchema} id="infrastructure-service-schema" />
      <StructuredData data={breadcrumbSchema} id="infrastructure-breadcrumb-schema" />
      <StructuredData data={infrastructureFAQSchema} id="infrastructure-faq-schema" />

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
              <li style={{ color: "#F85C70" }}>Infrastructure</li>
            </ol>
          </nav>
          <p className="font-mono text-xs uppercase tracking-[0.15em] mb-6" style={{ color: "#F85C70" }}>
            Sector Focus
          </p>
          <h1
            className="font-bold leading-[1.1] mb-8"
            style={{ fontSize: "clamp(2.2rem, 5vw, 3.5rem)", color: "#ffffff" }}
          >
            AI Governance for<br />Infrastructure Organisations
          </h1>
          <p className="text-xl leading-relaxed mb-10 max-w-2xl" style={{ color: "#E5E3EE" }}>
            Infrastructure and construction programmes run on governance structures that most technology consultancies have never encountered. NEC contracts, PMO stage-gates, Network Licence conditions, and supply chains that span dozens of organisations. We build AI and digital delivery frameworks that work within those structures, not despite them.
          </p>
          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => onOpenConsultation("Infrastructure AI Governance")}
              className="amp-focus-ring-on-navy inline-flex items-center gap-2 px-7 py-3.5 rounded-lg font-semibold text-white transition-all hover:opacity-90"
              style={{ backgroundColor: "#F85C70" }}
              data-testid="button-infrastructure-hero"
            >
              Discuss your programme
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
                Why infrastructure programmes need a different approach to AI
              </h2>
              <p className="text-lg leading-relaxed mb-6" style={{ color: "#65677B" }}>
                The technology sector built its AI adoption playbook for software businesses, where you can iterate quickly, tolerate failure, and ship to a user base that can be asked to accept imperfect tools. Infrastructure programmes operate in a completely different environment.
              </p>
              <p className="text-lg leading-relaxed mb-6" style={{ color: "#65677B" }}>
                Your outputs are physical. Your contracts are legally binding. Your governance is audited. Your supply chain is watching what you do. And the consequences of a technology failure, whether an AI model that misjudges ground conditions or a scheduling tool that creates a compensation event, are measured in millions rather than user complaints.
              </p>
              <p className="text-lg leading-relaxed" style={{ color: "#65677B" }}>
                Amplified was built for organisations where rigour is not optional. We understand programme governance because we have worked inside it, not observed it from the outside. Our AI and digital delivery frameworks are designed to strengthen your existing controls, not circumvent them.
              </p>
            </div>
            <div>
              <div className="rounded-2xl p-8" style={{ backgroundColor: "#F2F0F7" }}>
                <h3 className="font-bold mb-6" style={{ color: "#181F4F", fontSize: "1.1rem" }}>
                  Sectors within infrastructure we work with
                </h3>
                <ul className="space-y-3">
                  {[
                    "Major capital programme management and delivery",
                    "Highways, rail, and transport infrastructure",
                    "Water and wastewater infrastructure",
                    "Energy transmission and distribution networks",
                    "Construction and built environment",
                    "Ports, airports, and logistics infrastructure",
                    "Defence and secure infrastructure programmes",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: "#F85C70" }} />
                      <span className="text-base" style={{ color: "#65677B" }}>{item}</span>
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
            What makes infrastructure different
          </h2>
          <p className="text-lg leading-relaxed mb-10 max-w-3xl" style={{ color: "#65677B" }}>
            Generic AI governance and delivery frameworks fail in infrastructure environments because they were not built for them. These are the specific constraints that determine how technology adoption must work in your sector.
          </p>
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
            Services for infrastructure organisations
          </h2>
          <p className="text-lg leading-relaxed mb-12 max-w-3xl" style={{ color: "#65677B" }}>
            Each service is adapted for the governance, contractual, and regulatory environment that infrastructure programmes operate within.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {deliverables.map((item) => (
              <div key={item.title} className="rounded-2xl p-7" style={{ backgroundColor: "#F2F0F7", border: "1px solid #E5E3EE" }}>
                <h3 className="font-bold mb-3" style={{ color: "#181F4F", fontSize: "1.1rem" }}>{item.title}</h3>
                <p className="text-base leading-relaxed mb-4" style={{ color: "#65677B" }}>{item.body}</p>
                <Link
                  href={item.link}
                  className="amp-focus-ring-on-light inline-flex items-center gap-1.5 text-sm font-semibold hover:opacity-80 transition-opacity"
                  style={{ color: "#F85C70" }}
                >
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
                phase: "Weeks 1–3",
                title: "Programme immersion",
                body: "We embed in your programme governance structure, map the decision-making hierarchy, review existing PMO documentation, and identify where technology can add value without creating governance risk. We meet your client team, review contract structures, and agree the governance framework that will apply to everything we deliver.",
              },
              {
                phase: "Weeks 4–10",
                title: "Framework and roadmap",
                body: "We deliver the governance framework, AI readiness assessment, or structured delivery setup, depending on the engagement scope. All outputs are reviewed against your programme's assurance requirements before sign-off. Your PMO team is involved throughout so they can own the framework when we step back.",
              },
              {
                phase: "Ongoing",
                title: "Embedded delivery or handover",
                body: "For longer engagements, Stable Teams embeds within the programme for the delivery phase. For advisory engagements, we run a structured handover that includes documentation, training, and a defined period of retained support. You own the capability. We make sure it works without us.",
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

      {/* Evidence */}
      <section className="py-20 lg:py-24" style={{ backgroundColor: "#ffffff" }}>
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <p className="font-mono text-xs uppercase tracking-[0.15em] mb-4" style={{ color: "#F85C70" }}>
            Track Record
          </p>
          <h2 className="font-bold mb-10" style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)", color: "#181F4F" }}>
            Evidence from the sector
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                stat: "40+",
                label: "Projects delivered",
                detail: "Across infrastructure, energy, financial services, and public sector programmes.",
              },
              {
                stat: "10+",
                label: "Years in delivery",
                detail: "Our partners have worked inside major capital programmes before advising on them.",
              },
              {
                stat: "5",
                label: "Sectors covered",
                detail: "Infrastructure, energy, financial services, public sector, and technology.",
              },
            ].map((item) => (
              <div key={item.stat} className="rounded-2xl p-7 text-center" style={{ backgroundColor: "#F2F0F7" }}>
                <p className="font-bold mb-1" style={{ fontSize: "2.5rem", color: "#F85C70" }}>{item.stat}</p>
                <p className="font-semibold mb-2" style={{ color: "#181F4F" }}>{item.label}</p>
                <p className="text-sm leading-relaxed" style={{ color: "#65677B" }}>{item.detail}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 rounded-2xl p-8" style={{ backgroundColor: "#F2F0F7", border: "1px solid #E5E3EE" }}>
            <p className="text-base italic leading-relaxed mb-4" style={{ color: "#65677B" }}>
              "A major regulated infrastructure programme engaged Amplified to design an AI governance framework ahead of their first AI procurement. The framework mapped accountability to the existing programme structure, produced the assurance documentation required by their client's PMO, and was completed before any technology was selected. The procurement process ran against the framework rather than retrofitting governance after selection."
            </p>
            <p className="text-sm font-semibold" style={{ color: "#181F4F" }}>Major capital programme, UK regulated infrastructure sector (details anonymised)</p>
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
            Questions infrastructure organisations ask
          </h2>
          <div className="space-y-4">
            {[
              {
                q: "What AI governance challenges are specific to infrastructure organisations?",
                a: "Infrastructure organisations face a unique set of AI governance challenges: their programmes run on NEC or JCT contracts with fixed stage-gate approvals, their PMO structures require auditability and paper trails that most AI tools do not provide natively, their workforce is distributed across sites rather than desks, and the consequences of AI failure are physical, not just financial. Generic AI governance frameworks built for software businesses do not account for any of this.",
              },
              {
                q: "Can agile delivery work in infrastructure programmes?",
                a: "Yes, but it requires structured adaptation. Pure agile sprint cycles are incompatible with stage-gate approvals, NEC compensation events, and regulatory sign-off requirements. Amplified implements a structured agile model that retains sprint-based delivery while preserving the governance rigour, documentation standards, and audit trails that infrastructure programmes require.",
              },
              {
                q: "How does digital transformation work alongside a live infrastructure programme?",
                a: "The most effective approach is to embed digital capability within the existing programme structure rather than running it in parallel. Amplified maps the digital workstream to existing programme governance, ensures all outputs meet the same assurance standards as physical deliverables, and builds handover plans so internal teams maintain the capability after the engagement ends.",
              },
              {
                q: "What does an AI readiness assessment cover for an infrastructure organisation?",
                a: "An Amplified AI readiness assessment for infrastructure covers: data maturity and availability across the programme, existing governance structures and where AI accountability would sit, regulatory and contractual constraints on AI use, workforce readiness and change management requirements, and a prioritised roadmap of AI use cases with risk-adjusted business cases.",
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
            Discuss your infrastructure AI programme
          </h2>
          <p className="text-xl mb-10 max-w-2xl mx-auto" style={{ color: "#E5E3EE" }}>
            Whether you are at the readiness assessment stage or already procuring AI tools for a live programme, we can help you build the governance framework that lets you move forward with confidence.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button
              onClick={() => onOpenConsultation("Infrastructure AI Governance")}
              className="amp-focus-ring-on-navy inline-flex items-center gap-2 px-8 py-4 rounded-lg font-semibold text-white transition-all hover:opacity-90"
              style={{ backgroundColor: "#F85C70" }}
              data-testid="button-infrastructure-consultation"
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

export default SectorInfrastructure;
