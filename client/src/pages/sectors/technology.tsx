'use client';

import { memo } from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";
import { StructuredData } from "@/components/structured-data";
import { createBreadcrumbSchema, technologySectorFAQSchema } from "@/lib/schemas";

interface Props {
  onOpenConsultation: (serviceType?: string) => void;
}

const deliverables = [
  {
    title: "AI Governance for Technology Companies and Scale-ups",
    body: "A governance framework proportionate to your current context and designed to scale into the regulatory landscape your product trajectory will require. Whether you are preparing for FCA authorisation, entering healthcare markets, or simply building AI products that enterprise customers will scrutinise, we build the accountability structures that hold up under external review.",
    link: "/ai-governance",
    linkLabel: "AI Governance",
  },
  {
    title: "AI Implementation from Prototype to Production",
    body: "Taking AI from proof of concept to a production system is a different problem from building the prototype. We design the data pipelines, model integrations, observability layers, and governance controls that make AI reliable and defensible in a commercial context. Particularly for AI-native products where the model is the product.",
    link: "/ai-implementation",
    linkLabel: "AI Implementation",
  },
  {
    title: "Product-Led Delivery and Squad Accountability",
    body: "Structured delivery that works for product organisations: sprint governance, backlog accountability, stakeholder reporting, and the decision frameworks that let you move fast without accumulating governance debt. Particularly valuable for organisations scaling from a single squad to a multi-team product organisation.",
    link: "/structured-delivery",
    linkLabel: "Structured Delivery",
  },
  {
    title: "Tech Build: Custom Software and Platform Engineering",
    body: "Production-grade software built alongside or independently of your team. Greenfield builds, platform rewrites, microservices architectures, and data infrastructure designed for scale, operability, and the audit requirements of the markets you are entering. We build, document, and hand over.",
    link: "/transformation",
    linkLabel: "Tech Build",
  },
  {
    title: "Capability Building Within Engineering Teams",
    body: "AI literacy for product managers, governance frameworks for technical leads, and capability programmes that embed inside your existing squad structure. We transfer the skills to interrogate AI outputs, manage model risk, and maintain accountability as the engineering organisation grows.",
    link: "/capability",
    linkLabel: "Capability Building",
  },
  {
    title: "Stable Teams for Technology Scale-ups",
    body: "When you need to accelerate delivery without the overhead of a traditional recruitment process, Stable Teams provides pre-assembled squads mobilised in 48 hours. IR35-compliant, multi-disciplinary, and structured to integrate with your existing ways of working rather than impose a different set of them.",
    link: "/teams",
    linkLabel: "Stable Teams",
  },
];

const challenges = [
  "Moving fast creates governance debt that compounds quickly. AI tools adopted without accountability structures become technical and regulatory liabilities at exactly the moment the business is trying to scale.",
  "Enterprise customers and regulated market buyers now conduct AI governance due diligence as standard. Without a defensible governance framework, sales cycles lengthen and deals fall through at the diligence stage.",
  "AI regulation is expanding rapidly. Technology companies that are not currently regulated are frequently entering markets, building products, or taking investment that will bring them into scope of the EU AI Act, FCA, ICO, or sector-specific frameworks.",
  "Engineering velocity and governance rigour feel like they are in tension. Most technology organisations have not found a way to build accountability into their delivery cadence without adding process that slows the team down.",
  "Scaling from a single product squad to a multi-team organisation creates accountability gaps. What worked when everyone was in the same room stops working when four squads are building on the same platform.",
];

const SectorTechnology = memo(function SectorTechnology({ onOpenConsultation }: Props) {

  return (
    <div className="min-h-screen font-sans" style={{ backgroundColor: "#ffffff" }}>
      <StructuredData data={technologySectorFAQSchema} id="technology-faq-schema" />
      <StructuredData
        data={createBreadcrumbSchema([
          { name: "Home", url: "https://amplified.co.uk/" },
          { name: "Sectors", url: "https://amplified.co.uk/sectors/technology" },
          { name: "Technology & Private Sector", url: "https://amplified.co.uk/sectors/technology" },
        ])}
        id="technology-breadcrumb"
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
          <li aria-hidden="true" className="text-xs">/</li>
          <li>
            <Link href="/sectors/infrastructure" className="hover:underline" style={{ color: "#65677B" }}>
              Sectors
            </Link>
          </li>
          <li aria-hidden="true" className="text-xs">/</li>
          <li aria-current="page" style={{ color: "#181F4F" }}>
            Technology & Private Sector
          </li>
        </ol>
      </nav>

      {/* Hero */}
      <section
        className="relative py-24 lg:py-32 overflow-hidden"
        style={{ backgroundColor: "#181F4F" }}
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
            Sector
          </p>
          <h1
            className="font-display text-5xl md:text-6xl lg:text-7xl text-white mb-6"
            style={{ fontWeight: 400, lineHeight: 1.05 }}
          >
            Technology &
            <br />
            Private Sector
          </h1>
          <p
            className="font-sans text-xl max-w-[640px] leading-relaxed mb-10"
            style={{ color: "rgba(255,255,255,0.75)" }}
          >
            Private sector organisations move fast. Governance gaps compound fast too. We help
            technology companies and commercial enterprises build AI delivery that keeps pace
            without creating the liabilities that stall enterprise sales or attract regulatory
            attention.
          </p>
          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => onOpenConsultation("Technology AI Governance")}
              className="amp-focus-ring-on-navy inline-flex items-center gap-2 px-8 h-12 font-sans font-bold text-base rounded transition-colors duration-200"
              style={{ backgroundColor: "#F85C70", color: "#181F4F" }}
              data-testid="button-technology-hero"
              onMouseOver={(e) =>
                ((e.currentTarget as HTMLButtonElement).style.backgroundColor = "#d94a5e")
              }
              onMouseOut={(e) =>
                ((e.currentTarget as HTMLButtonElement).style.backgroundColor = "#F85C70")
              }
            >
              Book a consultation <ArrowRight className="h-4 w-4" />
            </button>
            <Link
              href="/ai-governance"
              className="amp-focus-ring-on-navy inline-flex items-center gap-2 px-8 h-12 font-sans font-bold text-base rounded transition-colors duration-200"
              style={{
                border: "1px solid rgba(255,255,255,0.3)",
                color: "#FFFFFF",
                backgroundColor: "transparent",
              }}
              data-testid="button-technology-ai-governance"
              onMouseOver={(e) =>
                ((e.currentTarget as HTMLAnchorElement).style.backgroundColor =
                  "rgba(255,255,255,0.08)")
              }
              onMouseOut={(e) =>
                ((e.currentTarget as HTMLAnchorElement).style.backgroundColor = "transparent")
              }
            >
              AI Governance service
            </Link>
          </div>
        </div>
      </section>

      {/* The challenge */}
      <section className="py-20 lg:py-24" style={{ backgroundColor: "#F2F0F7" }}>
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-[760px]">
            <p
              className="font-mono text-xs uppercase tracking-[0.15em] mb-4"
              style={{ color: "#F85C70" }}
            >
              The challenge
            </p>
            <h2
              className="font-display text-4xl md:text-5xl mb-8"
              style={{ color: "#181F4F", fontWeight: 400 }}
            >
              Velocity and governance are not opposites. But you have to build them together.
            </h2>
            <p className="font-sans text-lg leading-relaxed mb-6" style={{ color: "#65677B" }}>
              Technology companies often encounter AI governance as a problem for the first time
              when an enterprise customer asks a question they cannot answer, a regulator sends
              a letter, or an investor asks for a due diligence pack that should have existed
              twelve months ago. By then, the governance debt is real and the work to address
              it is disruptive.
            </p>
            <p className="font-sans text-lg leading-relaxed" style={{ color: "#65677B" }}>
              Amplified works with technology companies, scale-ups, and private sector
              organisations that want to build accountability frameworks before they become
              urgent, and delivery structures that scale beyond the founding team's ability
              to hold everything in their heads.
            </p>
          </div>
        </div>
      </section>

      {/* Challenges */}
      <section className="py-20 lg:py-24" style={{ backgroundColor: "#ffffff" }}>
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <p
            className="font-mono text-xs uppercase tracking-[0.15em] mb-4"
            style={{ color: "#F85C70" }}
          >
            Common challenges
          </p>
          <h2
            className="font-display text-4xl md:text-5xl mb-10"
            style={{ color: "#181F4F", fontWeight: 400 }}
          >
            What technology organisations navigate
          </h2>
          <ul className="space-y-4 max-w-[840px]">
            {challenges.map((c, i) => (
              <li key={i} className="flex items-start gap-4">
                <CheckCircle
                  className="h-5 w-5 flex-shrink-0 mt-1"
                  style={{ color: "#60266A" }}
                />
                <p className="font-sans text-base leading-relaxed" style={{ color: "#65677B" }}>
                  {c}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* What we deliver */}
      <section className="py-20 lg:py-24" style={{ backgroundColor: "#F2F0F7" }}>
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <p
            className="font-mono text-xs uppercase tracking-[0.15em] mb-4"
            style={{ color: "#F85C70" }}
          >
            What we deliver
          </p>
          <h2
            className="font-display text-4xl md:text-5xl mb-12"
            style={{ color: "#181F4F", fontWeight: 400 }}
          >
            Services for technology and private sector organisations
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {deliverables.map((item) => (
              <div
                key={item.title}
                className="rounded-lg p-7 bg-white"
                style={{ border: "1px solid #E5E3EE" }}
              >
                <h3
                  className="font-sans text-base font-bold mb-3"
                  style={{ color: "#181F4F" }}
                >
                  {item.title}
                </h3>
                <p
                  className="font-sans text-sm leading-relaxed mb-5"
                  style={{ color: "#65677B" }}
                >
                  {item.body}
                </p>
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

      {/* How we work */}
      <section className="py-20 lg:py-24" style={{ backgroundColor: "#181F4F" }}>
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <p
            className="font-mono text-xs uppercase tracking-[0.15em] mb-4"
            style={{ color: "#F85C70" }}
          >
            How we work
          </p>
          <h2
            className="font-display text-4xl md:text-5xl mb-10 text-white"
            style={{ fontWeight: 400 }}
          >
            What an engagement looks like
          </h2>
          <div className="grid lg:grid-cols-3 gap-6 mt-10">
            {[
              {
                phase: "Weeks 1-2",
                title: "Discovery and diagnostic",
                body: "We review your current AI use, delivery governance, and accountability structures. We identify the specific gaps between where you are and where your customers, investors, or target markets expect you to be. For technology companies entering regulated markets, this includes a regulatory landscape mapping of the obligations that will apply.",
              },
              {
                phase: "Weeks 3-10",
                title: "Framework design and delivery setup",
                body: "We build the governance framework, accountability structures, and delivery operating model your context requires. For AI governance engagements this includes risk assessment templates, model inventory documentation, usage policies, and board-facing reporting. For delivery engagements this includes squad governance, escalation pathways, and stakeholder reporting.",
              },
              {
                phase: "Ongoing",
                title: "Embedding and handover",
                body: "We support your team through the first implementation cycle, train the people who will own the framework, and structure a clean handover so the capability stays internal. The goal is always for your team to own and operate what we have built without needing us to maintain it.",
              },
            ].map((phase) => (
              <div
                key={phase.phase}
                className="rounded-2xl p-7"
                style={{
                  backgroundColor: "rgba(255,255,255,0.06)",
                  border: "1px solid rgba(255,255,255,0.12)",
                }}
              >
                <p
                  className="font-mono text-xs uppercase tracking-[0.15em] mb-3"
                  style={{ color: "#F85C70" }}
                >
                  {phase.phase}
                </p>
                <h3 className="font-bold mb-3 text-white">{phase.title}</h3>
                <p className="text-base leading-relaxed" style={{ color: "#E5E3EE" }}>
                  {phase.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 lg:py-24" style={{ backgroundColor: "#F2F0F7" }}>
        <div className="max-w-[900px] mx-auto px-4 sm:px-6 lg:px-8">
          <p
            className="font-mono text-xs uppercase tracking-[0.15em] mb-4"
            style={{ color: "#F85C70" }}
          >
            Common questions
          </p>
          <h2
            className="font-display text-4xl md:text-5xl mb-10"
            style={{ color: "#181F4F", fontWeight: 400 }}
          >
            Questions technology companies ask
          </h2>
          <div className="space-y-4">
            {[
              {
                q: "Does Amplified only work with regulated industries, or do you work with technology companies too?",
                a: "Amplified works with technology companies, scale-ups, and private sector organisations as well as regulated industries. Our methods and governance frameworks are designed for environments where rigour matters, whether that rigour is imposed by a regulator or by the demands of operating at scale. Many of our technology clients are moving into regulated markets, building AI-native products, or operating inside enterprises where delivery accountability has become critical.",
              },
              {
                q: "What does AI governance look like for a technology company that is not yet in a regulated market?",
                a: "For technology companies not yet subject to external regulation, AI governance is primarily about internal accountability, product risk management, and preparing for the regulatory landscape you will inevitably enter. We help you build governance frameworks that are proportionate to your current context but designed to scale into the FCA, ICO, EU AI Act, or sector-specific frameworks your product trajectory will require.",
              },
              {
                q: "We already have strong engineering processes. What does Amplified add?",
                a: "Most strong engineering organisations have excellent delivery processes at the squad or product level. The gaps we address are typically governance above the squad level: how AI decisions are made and documented, how accountability flows from engineering to product to board, how you demonstrate responsible AI use to enterprise customers, regulators, or investors, and how you build the leadership capability to govern technology at scale.",
              },
              {
                q: "Can you work within our existing product and engineering culture?",
                a: "Yes. We do not impose delivery frameworks that conflict with engineering culture. We work within your existing rituals and tooling, identifying the governance and accountability gaps without adding unnecessary process. Our goal is to make your teams more effective, not to slow them down with frameworks built for a different context.",
              },
              {
                q: "What does a Tech Build engagement with Amplified look like?",
                a: "Tech Build engagements start with a clear brief: what you need to build, the constraints you are working within, and the accountability you need to maintain. We build alongside your team or independently depending on your preference, with a strong emphasis on architecture that is maintainable and governance that satisfies your enterprise and regulatory obligations. We document as we go so the handover is clean.",
              },
            ].map((item, i) => (
              <details
                key={i}
                className="bg-white rounded-xl p-6 cursor-pointer"
                style={{ border: "1px solid #E5E3EE" }}
              >
                <summary
                  className="amp-focus-ring-on-light font-semibold text-base list-none flex items-center justify-between cursor-pointer"
                  style={{ color: "#181F4F" }}
                >
                  {item.q}
                  <span
                    className="text-lg ml-4 flex-shrink-0"
                    style={{ color: "#F85C70" }}
                  >
                    +
                  </span>
                </summary>
                <p className="mt-4 text-base leading-relaxed" style={{ color: "#65677B" }}>
                  {item.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-24" style={{ backgroundColor: "#181F4F" }}>
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2
            className="font-display text-4xl md:text-5xl mb-6 text-white"
            style={{ fontWeight: 400 }}
          >
            Discuss your technology or private sector programme
          </h2>
          <p
            className="font-sans text-xl mb-10 max-w-2xl mx-auto"
            style={{ color: "rgba(255,255,255,0.75)" }}
          >
            Whether you are building AI governance into a commercial product, scaling a delivery
            organisation, or preparing for regulated market entry, we can help you do it with
            the rigour that enterprise customers and regulators will expect.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button
              onClick={() => onOpenConsultation("Technology AI Governance")}
              className="amp-focus-ring-on-navy inline-flex items-center gap-2 px-8 py-4 rounded-lg font-semibold text-white transition-all hover:opacity-90"
              style={{ backgroundColor: "#F85C70" }}
              data-testid="button-technology-consultation"
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

export default SectorTechnology;
