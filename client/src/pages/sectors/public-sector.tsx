'use client';

import { memo } from "react";
import Link from "next/link";
import heroImg from "@assets/stock_images/public-sector.webp";
import Image from 'next/image';
import { ArrowRight, CheckCircle } from "lucide-react";
import { StructuredData } from "@/components/structured-data";
import { createServiceSchema, createBreadcrumbSchema, publicSectorFAQSchema } from "@/lib/schemas";

interface Props {
  onOpenConsultation: (serviceType?: string) => void;
}

const deliverables = [
  {
    title: "GDS-Aligned AI Delivery Framework",
    body: "AI governance and delivery frameworks built to satisfy the GDS Service Standard, the Algorithmic Transparency Recording Standard, and CDDO guidance on responsible AI adoption. We adapt these standards to your specific programme context, whether a central government department, arm's length body, or local authority.",
    link: "/ai-governance",
    linkLabel: "AI Governance",
  },
  {
    title: "Automated Decision-Making Governance",
    body: "Governance frameworks for AI systems used in public sector decision-making that satisfy UK GDPR Article 22, the ATRS, and the explainability requirements that elected members, scrutiny committees, and the public can interrogate. We design accountability structures that work within public sector governance, not around it.",
    link: "/ai-governance",
    linkLabel: "AI Governance",
  },
  {
    title: "AI Readiness Assessment for Public Bodies",
    body: "A structured assessment of your organisation's readiness to adopt AI responsibly, covering data maturity, governance structures, workforce capability, procurement constraints, and regulatory obligations. Outputs include a business case structure, risk register, and prioritised roadmap ready for your SRO and governance board.",
    link: "/ai-governance",
    linkLabel: "AI Governance",
  },
  {
    title: "Structured Delivery within Public Sector Governance",
    body: "Sprint-based delivery adapted for public sector operating environments: business case approvals, spend controls, Cabinet Office assurance, and the documentation standards that Treasury, CDDO, and your departmental governance require. Delivery is faster and more responsive without compromising the assurance trail.",
    link: "/structured-delivery",
    linkLabel: "Structured Delivery",
  },
  {
    title: "Digital Capability Building for Public Sector Teams",
    body: "Practical training for policy, operations, and technology teams on AI tools, data literacy, and governance standards. We build capability that your internal teams can own and develop after the engagement ends, reducing long-term dependency on external partners and satisfying the GDS requirement for sustainable internal capability.",
    link: "/capability",
    linkLabel: "Capability Building",
  },
  {
    title: "AI Ethics and Responsible Technology Advisory",
    body: "Advisory support for organisations navigating the ethical dimensions of AI adoption in public services: algorithmic fairness, bias assessment, community impact, and the public accountability requirements that do not apply in the private sector. We bring both technical rigour and public sector experience to these questions.",
    link: "/ai-governance",
    linkLabel: "AI Governance",
  },
];

const challenges = [
  "The GDS Service Standard, Algorithmic Transparency Recording Standard, and CDDO guidance create specific governance obligations for AI in public services that most commercial AI governance frameworks do not address",
  "Public sector procurement constraints, including G-Cloud, DOS, and spend control approvals, require governance work and business cases to be structured in ways that are compatible with public sector buying processes, not just commercial contract terms",
  "Elected accountability and public transparency requirements mean that AI systems used in public sector decision-making must be explainable to non-technical audiences including elected members, scrutiny committees, and the public themselves",
  "The breadth of services delivered by public bodies, from benefit assessments to planning decisions to enforcement, creates a diverse AI governance landscape where a single framework must accommodate very different risk profiles and accountability requirements",
  "Budget constraints and capability gaps mean public bodies often need governance frameworks that their own teams can operate without sustained external support, requiring a different approach to handover and capability building than private sector engagements",
];

const publicSectorServiceSchema = createServiceSchema({
  name: 'AI Governance & Technology Delivery for Public Sector Organisations',
  url: 'https://amplified.co.uk/sectors/public-sector',
  description: 'GDS-aligned AI governance, responsible AI frameworks, and structured digital delivery for central government, local authorities, and arm\'s length bodies.',
  keywords: [
    'AI governance public sector UK',
    'GDS aligned AI delivery',
    'technology delivery local government',
    'AI Act public sector UK',
    'algorithmic transparency public sector',
    'public sector digital transformation',
  ],
});

const breadcrumbSchema = createBreadcrumbSchema([
  { name: 'Home', url: 'https://amplified.co.uk/' },
  { name: 'Sectors', url: 'https://amplified.co.uk/sectors/public-sector' },
  { name: 'Public Sector', url: 'https://amplified.co.uk/sectors/public-sector' },
]);

const SectorPublicSector = memo(function SectorPublicSector({ onOpenConsultation }: Props) {
  return (
    <div className="min-h-screen font-sans" style={{ backgroundColor: "#ffffff" }}>
      <StructuredData data={publicSectorServiceSchema} id="public-sector-schema" />
      <StructuredData data={breadcrumbSchema} id="public-sector-breadcrumb" />
      <StructuredData data={publicSectorFAQSchema} id="public-sector-faq" />

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
              <li style={{ color: "#F85C70" }}>Public Sector</li>
            </ol>
          </nav>
          <p className="font-mono text-xs uppercase tracking-[0.15em] mb-6" style={{ color: "#F85C70" }}>
            Sector Focus
          </p>
          <h1
            className="font-bold leading-[1.1] mb-8"
            style={{ fontSize: "clamp(2.2rem, 5vw, 3.5rem)", color: "#ffffff" }}
          >
            AI Governance for<br />Public Sector Organisations
          </h1>
          <p className="text-xl leading-relaxed mb-10 max-w-2xl" style={{ color: "#E5E3EE" }}>
            Public sector AI adoption carries accountability to citizens that private sector organisations do not face. Elected scrutiny, freedom of information, public transparency, and the consequences of algorithmic decisions affecting people's lives, benefits, planning, enforcement. We build AI governance that meets the public sector standard, not the commercial standard.
          </p>
          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => onOpenConsultation("Public Sector AI Governance")}
              className="amp-focus-ring-on-navy inline-flex items-center gap-2 px-7 py-3.5 rounded-lg font-semibold text-white transition-all hover:opacity-90"
              style={{ backgroundColor: "#F85C70" }}
              data-testid="button-public-sector-hero"
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
                Why public sector AI governance is different
              </h2>
              <p className="text-lg leading-relaxed mb-6" style={{ color: "#65677B" }}>
                Public sector organisations face AI governance obligations that have no equivalent in the private sector. The GDS Service Standard, the Algorithmic Transparency Recording Standard, and the public accountability requirements that apply when government decisions affect citizens create a governance environment that most commercial AI frameworks simply do not address.
              </p>
              <p className="text-lg leading-relaxed mb-6" style={{ color: "#65677B" }}>
                At the same time, public bodies often have less internal capability to build and operate governance frameworks than their private sector counterparts, face procurement constraints that shape what is and is not possible, and are under pressure to demonstrate value for public money in ways that commercial organisations are not.
              </p>
              <p className="text-lg leading-relaxed" style={{ color: "#65677B" }}>
                We understand this context. Our frameworks are built to be operated by your teams, within your budget constraints, and within the procurement and governance structures of a public sector organisation.
              </p>
            </div>
            <div>
              <div className="rounded-2xl p-8" style={{ backgroundColor: "#F2F0F7" }}>
                <h3 className="font-bold mb-6" style={{ color: "#181F4F", fontSize: "1.1rem" }}>
                  Public bodies we work with
                </h3>
                <ul className="space-y-3">
                  {[
                    "Central government departments and agencies",
                    "Arm's length bodies and non-departmental public bodies",
                    "Local authorities and combined authorities",
                    "NHS trusts and integrated care boards",
                    "Police forces and justice organisations",
                    "Regulatory bodies and inspectorates",
                    "Public sector shared services and delivery organisations",
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
            What makes public sector AI governance harder
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
            Services for public sector organisations
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
                title: "Programme and governance mapping",
                body: "We map your AI use cases against the governance and regulatory requirements that apply, review your existing internal governance structures, and agree the engagement scope with your SRO and Digital Director. We work within your approvals process from the start, not around it.",
              },
              {
                phase: "Weeks 4–10",
                title: "Framework design and assurance",
                body: "We build the governance framework, produce the ATRS documentation, design the accountability structures, and produce the board-level reporting that your governance requires. All outputs go through your second-line and legal review before finalisation. The framework is built for your teams to operate, not for us to maintain.",
              },
              {
                phase: "Ongoing",
                title: "Embedding and capability transfer",
                body: "We build the internal capability for your teams to own and evolve the framework, provide training for policy and operations teams as well as technology teams, and structure handover to reduce long-term external dependency. Procurement-compliant retained support is available through G-Cloud.",
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
            Questions public sector organisations ask
          </h2>
          <div className="space-y-4">
            {[
              {
                q: "What is the GDS Service Standard and how does it apply to AI?",
                a: "The GDS Service Standard sets out 14 principles for designing and delivering government digital services. For AI systems, the most relevant standards are: understanding users and their needs (including how AI affects them), making the service accessible, testing with real users, and making source code open. Amplified applies the GDS Service Standard to AI delivery specifically, adapting it for systems that use machine learning and automated decision-making.",
              },
              {
                q: "How does the UK AI in Public Sector framework affect local authorities?",
                a: "The UK Government's AI in Public Sector framework, combined with CDDO guidance, sets expectations for how public bodies should assess, procure, and govern AI systems. Local authorities using AI in benefit assessments, planning decisions, or enforcement must ensure those systems are explainable, regularly audited, and do not produce discriminatory outcomes. Amplified builds governance structures that satisfy these requirements and prepare organisations for DSIT scrutiny.",
              },
              {
                q: "Can public sector organisations use AI in decision-making?",
                a: "Yes, but with specific governance requirements. The Algorithmic Transparency Recording Standard (ATRS) requires public sector bodies to publish records of algorithms used in significant decisions. Automated decisions affecting individuals must comply with UK GDPR Article 22. Amplified structures AI governance to ensure all automated and AI-assisted decision-making is properly documented, explainable, and has appropriate human oversight.",
              },
              {
                q: "How does Amplified work within public sector procurement constraints?",
                a: "Amplified is experienced working within public sector procurement frameworks including G-Cloud, DOS/Digital Outcomes, and Crown Commercial Service agreements. Engagements are structured to comply with procurement rules, with clear statement of work, defined deliverables, and milestone-based payment structures. We also support organisations through the business case and approval process before an engagement begins.",
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
            Discuss your public sector AI programme
          </h2>
          <p className="text-xl mb-10 max-w-2xl mx-auto" style={{ color: "#E5E3EE" }}>
            Whether you are building governance for a new AI service, responding to scrutiny about existing algorithmic systems, or developing your AI strategy, we can help you get it right for the public sector context.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button
              onClick={() => onOpenConsultation("Public Sector AI Governance")}
              className="amp-focus-ring-on-navy inline-flex items-center gap-2 px-8 py-4 rounded-lg font-semibold text-white transition-all hover:opacity-90"
              style={{ backgroundColor: "#F85C70" }}
              data-testid="button-public-sector-consultation"
            >
              Book a consultation
              <ArrowRight className="w-4 h-4" />
            </button>
            <Link
              href="/structured-delivery"
              className="amp-focus-ring-on-navy inline-flex items-center gap-2 px-8 py-4 rounded-lg font-semibold border transition-all hover:bg-white/10"
              style={{ color: "#ffffff", borderColor: "rgba(255,255,255,0.3)" }}
            >
              Structured Delivery service
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
});

export default SectorPublicSector;
