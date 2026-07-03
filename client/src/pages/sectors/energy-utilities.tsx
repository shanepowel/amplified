'use client';

import { memo } from "react";
import Link from "next/link";
import heroImg from "@assets/stock_images/energy-sector.webp";
import Image from 'next/image';
import { ArrowRight, CheckCircle } from "lucide-react";
import { StructuredData } from "@/components/structured-data";
import { createServiceSchema, createBreadcrumbSchema, energyFAQSchema } from "@/lib/schemas";

interface Props {
  onOpenConsultation: (serviceType?: string) => void;
}

const deliverables = [
  {
    title: "AI Governance Framework for Energy Programmes",
    body: "Governance structures built for Ofgem-regulated activities, safety-critical systems, and the specific accountability requirements of energy and utilities organisations. We map AI accountability to your existing operating model, build risk frameworks that integrate with your safety management system, and produce the assurance documentation your regulator and board require.",
    link: "/ai-governance",
    linkLabel: "AI Governance",
  },
  {
    title: "Safety-Critical AI Risk Assessment",
    body: "Structured risk assessments for AI systems that interact with physical infrastructure, safety-critical operations, or real-time control environments. We assess failure modes, human override procedures, accountability chains, and integration points with your existing safety management and operational technology frameworks.",
    link: "/ai-governance",
    linkLabel: "AI Governance",
  },
  {
    title: "Smart Grid and Asset Intelligence Governance",
    body: "Governance frameworks for AI use cases in demand forecasting, predictive maintenance, load balancing, and network optimisation. We assess the regulatory constraints on each use case, build the assurance structures required for Ofgem-regulated activities, and design the data governance framework that makes these use cases operationally viable.",
    link: "/ai-governance",
    linkLabel: "AI Governance",
  },
  {
    title: "Digital Transformation Programme Delivery",
    body: "End-to-end delivery of digital transformation programmes within your existing operational governance. We embed within your programme structure, produce outputs that meet your regulatory reporting requirements, and build change management plans that work for field teams as well as corporate offices.",
    link: "/ai-implementation",
    linkLabel: "AI Implementation",
  },
  {
    title: "Capability Building for OT and IT Teams",
    body: "Practical training for operational technology teams, control room staff, and corporate technology functions on AI tools, data literacy, and the governance standards they need to operate within. Built for energy and utilities professionals, not technology specialists.",
    link: "/capability",
    linkLabel: "Capability Building",
  },
  {
    title: "Net Zero and Sustainability Technology Governance",
    body: "Governance frameworks for AI and digital tools used in emissions tracking, carbon accounting, sustainability reporting, and net zero programme management. We ensure the data and model governance meets the standards required by your regulator, your investors, and the reporting frameworks you are committed to.",
    link: "/ai-governance",
    linkLabel: "AI Governance",
  },
];

const challenges = [
  "Ofgem regulation creates specific obligations around transparency, customer fairness, and accountability for algorithmic systems used in pricing, billing, and network management, and most AI governance frameworks do not address these obligations",
  "Safety-critical environments require AI governance to integrate with existing safety management systems and functional safety standards, not sit alongside them as a separate IT governance process",
  "The operational technology and information technology boundary creates governance complexity when AI systems bridge both environments, as most OT governance frameworks were not designed with machine learning in mind",
  "The pace of regulatory change in energy, from smart metering to flexibility markets to net zero obligations, means AI governance frameworks need to be built to adapt rather than requiring complete redesign with each regulatory update",
  "Workforce distribution across control rooms, field teams, and corporate offices creates change management challenges that most digital transformation programmes underestimate, leading to adoption failures that undermine the business case",
];

const energySchema = createServiceSchema({
  name: 'AI Governance & Technology Delivery for Energy and Utilities Organisations',
  url: 'https://amplified.co.uk/sectors/energy-utilities',
  description: 'Ofgem-aligned AI governance, safety-critical technology frameworks, and digital transformation for energy transmission, distribution, and utilities organisations.',
  keywords: [
    'AI governance energy sector UK',
    'digital transformation utilities UK',
    'technology delivery Ofgem regulated',
    'smart grid AI governance',
    'safety-critical AI governance',
    'energy sector digital transformation',
  ],
});

const breadcrumbSchema = createBreadcrumbSchema([
  { name: 'Home', url: 'https://amplified.co.uk/' },
  { name: 'Sectors', url: 'https://amplified.co.uk/sectors/energy-utilities' },
  { name: 'Energy & Utilities', url: 'https://amplified.co.uk/sectors/energy-utilities' },
]);

const SectorEnergyUtilities = memo(function SectorEnergyUtilities({ onOpenConsultation }: Props) {
  return (
    <div className="min-h-screen font-sans" style={{ backgroundColor: "#ffffff" }}>
      <StructuredData data={energySchema} id="energy-service-schema" />
      <StructuredData data={breadcrumbSchema} id="energy-breadcrumb" />
      <StructuredData data={energyFAQSchema} id="energy-faq" />

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
              <li style={{ color: "#F85C70" }}>Energy & Utilities</li>
            </ol>
          </nav>
          <p className="font-mono text-xs uppercase tracking-[0.15em] mb-6" style={{ color: "#F85C70" }}>
            Sector Focus
          </p>
          <h1
            className="font-bold leading-[1.1] mb-8"
            style={{ fontSize: "clamp(2.2rem, 5vw, 3.5rem)", color: "#ffffff" }}
          >
            AI Governance for<br />Energy & Utilities Organisations
          </h1>
          <p className="text-xl leading-relaxed mb-10 max-w-2xl" style={{ color: "#E5E3EE" }}>
            Energy and utilities organisations operate AI in environments where failure has physical consequences. Safety-critical systems, Ofgem-regulated activities, distributed operational teams, and a regulatory environment that is evolving faster than most governance frameworks can keep up with. We build AI governance that works in operational reality, not just in policy documents.
          </p>
          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => onOpenConsultation("Energy Sector AI Governance")}
              className="amp-focus-ring-on-navy inline-flex items-center gap-2 px-7 py-3.5 rounded-lg font-semibold text-white transition-all hover:opacity-90"
              style={{ backgroundColor: "#F85C70" }}
              data-testid="button-energy-utilities-hero"
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
                Why AI governance must be built for the energy sector specifically
              </h2>
              <p className="text-lg leading-relaxed mb-6" style={{ color: "#65677B" }}>
                The AI governance challenge in energy and utilities is fundamentally different from other regulated sectors. Your systems do not just affect customers financially. They affect physical infrastructure, supply reliability, safety, and in the case of network operators, the grid itself. The accountability structures must reflect that.
              </p>
              <p className="text-lg leading-relaxed mb-6" style={{ color: "#65677B" }}>
                Most AI governance frameworks were built for software or financial services environments. They do not account for the OT and IT boundary, the safety management integration requirements, the Ofgem-specific obligations around transparency and customer outcomes, or the operational workforce realities of a sector where many of the people affected by AI decisions are in the field, not at a desk.
              </p>
              <p className="text-lg leading-relaxed" style={{ color: "#65677B" }}>
                We build governance that works in your operational context. Not frameworks that satisfy a policy review but fail when tested against a real failure scenario.
              </p>
            </div>
            <div>
              <div className="rounded-2xl p-8" style={{ backgroundColor: "#F2F0F7" }}>
                <h3 className="font-bold mb-6" style={{ color: "#181F4F", fontSize: "1.1rem" }}>
                  Subsectors we work with
                </h3>
                <ul className="space-y-3">
                  {[
                    "Electricity transmission and distribution",
                    "Gas transmission, distribution, and storage",
                    "Water and wastewater utilities",
                    "Renewable energy generation and storage",
                    "Smart metering and demand-side response",
                    "Energy retail and customer services",
                    "Nuclear and specialist regulated generation",
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
            What makes energy sector AI governance harder
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
            Services for energy and utilities organisations
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
                phase: "Weeks 1–3",
                title: "Operational and regulatory landscape",
                body: "We map your AI use cases against your regulatory obligations, safety management framework, and operational context. We review your existing governance structures, meet your OT and IT leads, and identify where AI governance gaps create the greatest risk. We agree the scope with your regulatory and operations leads, not just your technology team.",
              },
              {
                phase: "Weeks 4–10",
                title: "Framework design",
                body: "We build the governance framework integrated with your safety management system, produce the risk documentation your regulator and board require, and design the accountability structures that map to your existing operating model. All outputs are reviewed by your operations, safety, and compliance leads before finalisation.",
              },
              {
                phase: "Ongoing",
                title: "Embedding and capability transfer",
                body: "We support implementation across both your corporate and operational teams, provide training that is adapted for field and control room environments, and build the internal capability for your teams to maintain and evolve the framework. Handover is planned from the start of the engagement.",
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
            Questions energy organisations ask
          </h2>
          <div className="space-y-4">
            {[
              {
                q: "What AI governance requirements apply to Ofgem-regulated organisations?",
                a: "Ofgem has issued guidance on AI use in regulated energy activities, with particular focus on customer-facing AI systems, algorithmic pricing, and smart grid management. Organisations must be able to demonstrate that AI systems used in regulated activities meet transparency, accountability, and non-discrimination standards. Amplified builds governance frameworks that align to Ofgem guidance while satisfying broader UK AI regulatory requirements.",
              },
              {
                q: "How is AI being used in energy and utilities programmes?",
                a: "The most mature AI use cases in energy and utilities include predictive maintenance for grid infrastructure, demand forecasting and load balancing, smart meter data analytics, customer service automation, and real-time network monitoring. Each of these has distinct governance requirements depending on whether they affect regulated activities, safety-critical systems, or customer outcomes.",
              },
              {
                q: "What makes AI governance different for a safety-critical environment?",
                a: "Safety-critical environments require AI governance to integrate with existing safety management systems, not sit alongside them. Every AI system that could affect physical safety must have a documented failure mode analysis, a human override procedure, and a clear accountability chain that extends to operational teams on the ground. Amplified builds AI governance that satisfies both regulatory and safety management standards simultaneously.",
              },
              {
                q: "How does Amplified work alongside existing operational technology teams?",
                a: "Amplified embeds within your existing programme and OT team structures rather than operating as an external advisory layer. This means governance frameworks are built with the people who will use them, accountability structures map to existing roles, and training is practical rather than theoretical. Handover is planned from day one so your teams own the capability when we leave.",
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
            Discuss your energy sector AI programme
          </h2>
          <p className="text-xl mb-10 max-w-2xl mx-auto" style={{ color: "#E5E3EE" }}>
            Whether you are building governance for a new AI deployment or addressing gaps identified by Ofgem or your safety regulator, we can help you build a framework that works in operational reality.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button
              onClick={() => onOpenConsultation("Energy Sector AI Governance")}
              className="amp-focus-ring-on-navy inline-flex items-center gap-2 px-8 py-4 rounded-lg font-semibold text-white transition-all hover:opacity-90"
              style={{ backgroundColor: "#F85C70" }}
              data-testid="button-energy-utilities-consultation"
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

export default SectorEnergyUtilities;
