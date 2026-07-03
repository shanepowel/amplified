'use client';

import { memo } from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";
import coachImage from "@assets/35_1760470608291.webp";
import { ServiceSchema, StructuredData } from "@/components/structured-data";
import { coachingFAQSchema, createBreadcrumbSchema } from "@/lib/schemas";
import { FurtherReading } from "@/components/further-reading";

interface CoachingProps {
  onOpenConsultation?: (serviceType?: string) => void;
}

const coachingFormats = [
  {
    title: "Executive and Board-Level Coaching",
    body: "One-to-one coaching for senior leaders navigating technology adoption, organisational change, and the accountability pressures that come with regulated environments. Focused on decision-making, stakeholder management, and leading change without losing control.",
    deliverable: "Typically 6 to 12 sessions. Individual programme designed around your context.",
  },
  {
    title: "Delivery Lead and Programme Director Coaching",
    body: "For programme directors, delivery managers, and product leads who need a thinking partner with genuine delivery experience. We work through the real challenges: governance pressure, team underperformance, scope creep, and the politics of large programmes.",
    deliverable: null,
  },
  {
    title: "Agile Practitioner Coaching",
    body: "Embedded or regular coaching for scrum masters, product owners, and agile practitioners operating inside regulated environments where standard agile playbooks do not always apply. Practical, honest, and grounded in what actually works.",
    deliverable: null,
  },
  {
    title: "Team and Squad Coaching",
    body: "Coaching at the team level for squads that are underperforming, newly formed, or operating in a context they have not navigated before. We work with the team as a system, not just the individuals within it.",
    deliverable: "Typically structured as a 90-day programme with defined outcomes.",
  },
  {
    title: "AI Literacy Coaching for Non-Technical Leaders",
    body: "Helping senior leaders and governance boards develop the literacy they need to interrogate AI proposals, challenge vendors, and make informed decisions about AI adoption. Not a training course. A coaching relationship built around your actual decisions.",
    deliverable: null,
  },
  {
    title: "Cohort Programmes",
    body: "Structured group coaching for cohorts of leaders or practitioners going through a common challenge: a transformation, an agile transition, a new technology adoption. Peer learning combined with individual accountability.",
    deliverable: null,
  },
];

const differentiators = [
  {
    title: "Practitioners coaching practitioners",
    body: "Our coaches have held the roles they are coaching. They have run delivery programmes, led governance boards, navigated regulatory scrutiny, and made the decisions that sit on your desk right now. That experience is not a backdrop. It is the point.",
  },
  {
    title: "Context-specific, not generic",
    body: "We do not run coaching programmes with generic frameworks applied to any industry. We work inside the specific pressures of regulated environments: infrastructure, energy, financial services, and public sector. The coaching reflects that.",
  },
  {
    title: "Honest, not comfortable",
    body: "Good coaching involves challenge. We will ask the questions you might be avoiding and hold up the mirror you might not want to look in. That is not because we are confrontational. It is because it is the only kind of coaching that moves things forward.",
  },
  {
    title: "Outcomes, not hours",
    body: "We are not interested in filling a coaching contract. We are interested in whether your capability, your team's performance, or your organisation's decision-making is genuinely better at the end of it. That is the measure we use.",
  },
];

const Coaching = memo(function Coaching({ onOpenConsultation }: CoachingProps) {

  return (
    <div className="min-h-screen font-sans" style={{ backgroundColor: "#ffffff" }}>
      <ServiceSchema name="Coaching" description="Executive, team, and practitioner coaching from senior operators who have held the roles they coach. Designed for leaders and delivery professionals in regulated industries." url="https://amplified.co.uk/coaching" />
      <StructuredData data={coachingFAQSchema} id="coaching-faq-schema" />
      <StructuredData data={createBreadcrumbSchema([{ name: 'Home', url: 'https://amplified.co.uk/' }, { name: 'Coaching', url: 'https://amplified.co.uk/coaching' }])} id="coaching-breadcrumb" />

      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="border-b border-gray-100">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <ol className="flex items-center gap-2 text-xs text-gray-500 flex-wrap">
            <li><Link href="/" className="hover:text-gray-800 transition-colors">Home</Link></li>
            <li aria-hidden="true">/</li>
            <li aria-current="page" className="text-gray-800 font-medium">Coaching</li>
          </ol>
        </div>
      </nav>

      {/* HERO */}
      <section className="py-28 lg:py-36" style={{ backgroundColor: "#181F4F" }}>
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-end">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.15em] mb-6" style={{ color: "#F85C70" }}>
                AMP 05
              </p>
              <h1
                className="font-display text-5xl md:text-6xl text-white mb-8 leading-tight"
                style={{ fontWeight: 400 }}
                data-testid="text-page-title"
              >
                Teaching &amp; Coaching
              </h1>
              <p className="font-sans text-lg max-w-[520px] leading-relaxed mb-6" style={{ color: "rgba(255,255,255,0.75)" }}>
                Senior operators teaching and coaching leaders, delivery professionals, and
                practitioners through the realities of technology adoption and organisational
                transformation in regulated environments.
              </p>
              <p className="font-sans text-lg max-w-[520px] leading-relaxed" style={{ color: "rgba(255,255,255,0.75)" }}>
                We coach from experience, not from theory. Every coach at Amplified has operated
                inside the environments our clients work in.
              </p>
              <blockquote
                className="mt-10 p-6 border-l-4 max-w-[520px]"
                style={{ borderColor: "#F85C70", backgroundColor: "rgba(248,92,112,0.08)" }}
              >
                <p className="font-display text-xl text-white italic" style={{ fontWeight: 400 }}>
                  "The most useful coaching conversation is the one that asks the question
                  you were already avoiding."
                </p>
              </blockquote>
            </div>
            <div className="hidden lg:block">
              <div className="rounded overflow-hidden" style={{ aspectRatio: "4/3" }}>
                <img
                  src={coachImage.src}
                  alt="Amplified coaching in practice"
                  className="w-full h-full object-cover"
                  loading="eager"
                  data-testid="img-hero"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHO WE COACH */}
      <section className="py-20 lg:py-28" style={{ backgroundColor: "#F2F0F7" }}>
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.12em] mb-6" style={{ color: "#60266A" }}>
                Who we work with
              </p>
              <h2
                className="font-display text-3xl md:text-4xl mb-8 leading-tight"
                style={{ color: "#181F4F", fontWeight: 400 }}
              >
                Coaching that is designed for the specific pressures of your role.
              </h2>
              <p className="font-sans text-base leading-relaxed mb-6" style={{ color: "#65677B" }}>
                Most coaching programmes are designed for corporate environments where the pressures
                are relatively generic. Regulated industries are not generic. The governance
                accountability, the regulatory scrutiny, and the scale of consequence are different
                in kind, not just degree.
              </p>
              <p className="font-sans text-base leading-relaxed" style={{ color: "#65677B" }}>
                We design coaching programmes around those specific pressures. Whether you are a
                board member navigating AI adoption, a programme director under delivery pressure,
                or a product owner trying to make agile work inside a waterfall organisation.
              </p>
            </div>
            <div className="space-y-3 pt-8 lg:pt-14">
              {[
                "Senior leaders and board members",
                "Programme directors and delivery managers",
                "Product owners and product managers",
                "Scrum masters and agile practitioners",
                "Technical leads and architects navigating organisational complexity",
                "Teams and squads going through structural change",
                "Cohorts of practitioners in shared transition",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 p-4 rounded"
                  style={{ backgroundColor: "#ffffff" }}
                >
                  <CheckCircle className="h-5 w-5 flex-shrink-0 mt-0.5" style={{ color: "#F85C70" }} />
                  <span className="font-sans text-sm leading-relaxed" style={{ color: "#65677B" }}>
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* COACHING FORMATS */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <p className="font-mono text-xs uppercase tracking-[0.12em] mb-4" style={{ color: "#6B6E81" }}>
            What we offer
          </p>
          <h2
            className="font-display text-4xl md:text-5xl mb-16"
            style={{ color: "#181F4F", fontWeight: 400 }}
          >
            Coaching Formats
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border-l border-t" style={{ borderColor: "#E5E3EE" }}>
            {coachingFormats.map((format) => (
              <div key={format.title} className="p-8 border-r border-b" style={{ borderColor: "#E5E3EE" }}>
                <div className="w-1 h-8 mb-6 rounded" style={{ backgroundColor: "#F85C70" }} />
                <h3 className="font-display text-xl mb-4" style={{ color: "#181F4F", fontWeight: 400 }}>
                  {format.title}
                </h3>
                <p className="font-sans text-sm leading-relaxed mb-3" style={{ color: "#65677B" }}>
                  {format.body}
                </p>
                {format.deliverable && (
                  <p className="font-sans text-xs italic" style={{ color: "#60266A" }}>
                    {format.deliverable}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT MAKES IT DIFFERENT */}
      <section className="py-20 lg:py-28" style={{ backgroundColor: "#181F4F" }}>
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <p className="font-mono text-xs uppercase tracking-[0.12em] mb-4" style={{ color: "#F85C70" }}>
            Why it works
          </p>
          <h2
            className="font-display text-4xl text-white mb-12"
            style={{ fontWeight: 400 }}
          >
            What makes our coaching different
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border-l border-t" style={{ borderColor: "rgba(255,255,255,0.1)" }}>
            {differentiators.map((item) => (
              <div
                key={item.title}
                className="p-8 border-r border-b"
                style={{ borderColor: "rgba(255,255,255,0.1)" }}
              >
                <CheckCircle className="h-5 w-5 mb-4" style={{ color: "#F85C70" }} />
                <h3 className="font-display text-xl text-white mb-3" style={{ fontWeight: 400 }}>
                  {item.title}
                </h3>
                <p className="font-sans text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.6)" }}>
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RELATED */}
      <section className="py-16 lg:py-20 border-b" style={{ borderColor: "#E5E3EE" }}>
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <p className="font-mono text-xs uppercase tracking-[0.12em] mb-8" style={{ color: "#6B6E81" }}>
            Works alongside
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-l border-t" style={{ borderColor: "#E5E3EE" }}>
            {[
              {
                tag: "AMP 04",
                title: "Capability Building",
                body: "Structured programmes that build lasting internal capability alongside live delivery. Where coaching develops the individual, capability building develops the organisation.",
                href: "/capability",
              },
              {
                tag: "AMP 03",
                title: "Structured Delivery",
                body: "Squad-based delivery models that give practitioners the context in which coaching conversations become immediately applicable.",
                href: "/structured-delivery",
              },
              {
                tag: "AMP 01",
                title: "AI Governance",
                body: "AI literacy coaching is often most effective alongside a governance framework that makes the learning immediately practical.",
                href: "/ai-governance",
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

      {/* FAQ */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <p className="font-mono text-xs uppercase tracking-[0.12em] mb-4" style={{ color: "#60266A" }}>
            Common questions
          </p>
          <h2 className="font-display text-4xl md:text-5xl mb-12" style={{ color: "#181F4F", fontWeight: 400 }}>
            Frequently Asked Questions
          </h2>
          <div className="space-y-0 border-t" style={{ borderColor: "#E5E3EE" }}>
            {[
              {
                q: "Who is Amplified teaching and coaching designed for?",
                a: "Amplified teaching and coaching is designed for delivery directors, programme managers, and CIOs who are leading technology change in regulated industries, either for the first time or as experienced leaders navigating a particularly complex programme. The most common coaching clients are senior professionals who are technically capable in their domain but need a thinking partner with specific experience in technology delivery, AI governance, or leading change in regulated contexts.",
              },
              {
                q: "How is Amplified coaching different from executive coaching?",
                a: "General executive coaching focuses on leadership behaviour and personal development. Amplified coaching combines that with deep subject matter expertise in technology delivery and AI governance. Clients work through real delivery challenges, governance decisions, and stakeholder situations with a coach who has led similar programmes. The sessions are structured around your specific context, not a generic coaching framework.",
              },
              {
                q: "What does a typical coaching engagement look like?",
                a: "A structured coaching engagement runs for three to six months, with fortnightly sessions of sixty to ninety minutes. Each session is centred on a live challenge the client is navigating. Between sessions, clients have access to resources, frameworks, and tools relevant to their situation. Amplified also offers cohort coaching for teams of delivery leaders within the same organisation, which builds shared language and mutual accountability.",
              },
              {
                q: "Can coaching help with a specific programme crisis or challenge?",
                a: "Yes. Amplified offers intensive coaching for programme leaders navigating a specific crisis, major decision, or difficult stakeholder situation. These engagements are shorter and more focused, typically four to eight sessions over four to six weeks, designed to give a leader the thinking support and practical frameworks they need to navigate a specific challenge rather than a sustained development programme.",
              },
            ].map((item, i) => (
              <details
                key={i}
                className="group border-b py-6"
                style={{ borderColor: "#E5E3EE" }}
              >
                <summary
                  className="font-display text-xl cursor-pointer list-none flex items-center justify-between gap-4"
                  style={{ color: "#181F4F", fontWeight: 400 }}
                >
                  {item.q}
                  <span className="flex-shrink-0 text-2xl transition-transform duration-200 group-open:rotate-45" style={{ color: "#F85C70" }}>+</span>
                </summary>
                <p className="font-sans text-base leading-relaxed mt-4" style={{ color: "#65677B" }}>
                  {item.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <FurtherReading tags={["Executive Coaching", "Teaching & Coaching", "Digital Leadership"]} maxArticles={3} />

      {/* Role pages cross-link */}
      <section className="py-12" style={{ backgroundColor: "#F2F0F7" }}>
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <p className="font-sans text-sm mb-4" style={{ color: "#65677B" }}>
            This service is designed for specific roles. Read more about how we work with:
          </p>
          <div className="flex flex-wrap gap-3">
            {[
              { label: "Digital Leads and Heads of Digital", href: "/for-digital-leads" },
              { label: "Delivery Directors", href: "/for-delivery-directors" },
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
      <section className="py-24 text-center" style={{ backgroundColor: "#60266A" }}>
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            className="font-display text-4xl md:text-5xl text-white mb-6"
            style={{ fontWeight: 400 }}
          >
            Ready to Have the Honest Conversation?
          </h2>
          <p className="font-sans text-lg max-w-[480px] mx-auto mb-10" style={{ color: "rgba(255,255,255,0.8)" }}>
            Tell us what you are working through and we will tell you honestly whether coaching
            is the right intervention and whether we are the right people to deliver it.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button
              onClick={() => onOpenConsultation?.("amplified-coach")}
              className="amp-focus-ring-on-navy inline-flex items-center gap-2 px-10 h-12 font-sans font-bold text-base rounded transition-colors duration-200"
              style={{ backgroundColor: "#F85C70", color: "#181F4F" }}
              onMouseOver={(e) => ((e.currentTarget as HTMLButtonElement).style.backgroundColor = "#d94a5e")}
              onMouseOut={(e) => ((e.currentTarget as HTMLButtonElement).style.backgroundColor = "#F85C70")}
              data-testid="button-cta"
            >
              Start a Conversation <ArrowRight className="h-4 w-4" />
            </button>
            <Link href="/capability">
              <button
                className="amp-focus-ring-on-navy inline-flex items-center gap-2 px-10 h-12 font-sans font-bold text-base rounded transition-colors duration-200"
                style={{ border: "1px solid rgba(255,255,255,0.3)", color: "#FFFFFF", backgroundColor: "transparent" }}
                onMouseOver={(e) => ((e.currentTarget as HTMLButtonElement).style.backgroundColor = "rgba(255,255,255,0.08)")}
                onMouseOut={(e) => ((e.currentTarget as HTMLButtonElement).style.backgroundColor = "transparent")}
              >
                View Capability Building (AMP 04)
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

export default Coaching;
