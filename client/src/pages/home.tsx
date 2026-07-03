'use client';

import { useState, memo } from "react";
import Link from "next/link";
import { CheckCircle, ArrowRight } from "lucide-react";
import { useReveal } from "@/hooks/use-intersection-observer";
import ServiceSpotlight from "@/components/service-spotlight";
import Image from "next/image";
import strategicThinkingImage from "@assets/50_1760470599806.webp";
import networkImage from "@assets/46_1760470581285.webp";

interface HomeProps {
  onOpenConsultation: (serviceType?: string) => void;
}

const heroEngagements = [
  {
    name: "Squad Blueprint",
    duration: "6 weeks",
    slug: "squad-blueprint",
    outcome: "A delivery operating model your leadership has signed off on.",
  },
  {
    name: "The Forge",
    duration: "4 weeks",
    slug: "the-forge",
    outcome: "A programme that runs from day one rather than discovering itself in flight.",
  },
  {
    name: "Delivery Compass",
    duration: "8 weeks",
    slug: "delivery-compass",
    outcome: "An AI governance framework integrated with how you actually deliver.",
  },
];

const proofPoints = [
  { metric: "40+", label: "Engagements delivered", detail: "Discovery to handover, no open-ended retainers" },
  { metric: "5", label: "Regulated sectors", detail: "Infrastructure, energy, financial services, public sector, technology" },
  { metric: "FCA · NCSC · EU AI Act", label: "Governance frameworks we work to", detail: "AI oversight aligned to the regulators that apply to you" },
  { metric: "UK & EU", label: "Remote-first, on the ground when it matters", detail: "London office at 7 Bell Yard, Porto operations" },
];


const sectorLinks = [
  { label: "Infrastructure & Construction", href: "/sectors/infrastructure" },
  { label: "Energy & Utilities", href: "/sectors/energy-utilities" },
  { label: "Financial Services", href: "/sectors/financial-services" },
  { label: "Public Sector", href: "/sectors/public-sector" },
  { label: "Technology & Private Sector", href: "/sectors/technology" },
];

const ampCards = [
  {
    tag: "AMP 01",
    title: "AI Governance",
    subtitle: "Responsible AI for serious organisations",
    body: "We build the governance foundations AI adoption requires, before your teams write a line of code or sign a platform contract.",
    bullets: [
      "AI risk frameworks and readiness assessments",
      "Responsible AI policy design",
      "EU AI Act and UK AI framework alignment",
      "Auditability and explainability standards",
      "AI ethics governance and board-level reporting",
    ],
    href: "/ai-governance",
  },
  {
    tag: "AMP 02",
    title: "AI Implementation",
    subtitle: "End-to-end delivery built within your governance",
    body: "We don't just advise. We embed with your teams and deliver AI capabilities that work inside your existing accountability structures.",
    bullets: [
      "AI use case identification and prioritisation",
      "Proof of concept through to production",
      "Integration with existing PMO and delivery frameworks",
      "Handover and internal capability transfer",
      "Post-implementation review and optimisation",
    ],
    href: "/ai-implementation",
  },
  {
    tag: "AMP 03",
    title: "Structured Delivery",
    subtitle: "Agile without the chaos",
    body: "Squad-based delivery models designed for organisations where governance, auditability, and structured programme management are non-negotiable.",
    bullets: [
      "Agile operating model design for PM-heavy industries",
      "Squad and tribe model implementation",
      "Agile and waterfall hybrid frameworks",
      "Delivery governance and reporting",
      "Sprint cadences that work within existing assurance gates",
    ],
    href: "/structured-delivery",
  },
  {
    tag: "AMP 04",
    title: "Capability Building",
    subtitle: "Build it in, not bolted on",
    body: "We build lasting internal capability so your teams can run it themselves twelve months later.",
    bullets: [
      "Product Owner and Product Manager development programmes",
      "Centre of Excellence design and setup",
      "Agile practitioner training and coaching",
      "AI literacy programmes for non-technical teams",
      "Embedded upskilling alongside live delivery",
    ],
    href: "/capability",
  },
  {
    tag: "AMP 05",
    title: "Coaching",
    subtitle: "At every level, from board to practitioner",
    body: "Senior operators coaching leaders, teams and practitioners through technology adoption, organisational transformation and the realities of operating in regulated environments.",
    bullets: [
      "Executive and board-level AI coaching",
      "Delivery lead and programme manager coaching",
      "Agile practitioner coaching and mentoring",
      "Change leadership support",
      "One-to-one and cohort programmes",
    ],
    href: "/coaching",
  },
  {
    tag: "AMP 06",
    title: "Tech Build",
    subtitle: "Custom software and platform delivery",
    body: "We design and build software that solves real problems. From greenfield digital products to platform modernisation and AI-native systems.",
    bullets: [
      "Custom software development",
      "Platform modernisation and re-architecture",
      "AI-native application development",
      "Cloud-native infrastructure and DevOps",
      "Digital product design and delivery",
    ],
    href: "/transformation",
  },
];

const insightCards = [
  {
    tag: "GOVERNANCE",
    readTime: "6 min read",
    title: "The AI Governance Gap in Infrastructure Delivery",
    body: "Why complex delivery organisations need a different AI governance framework entirely, and why most AI consultancies won't tell you that.",
    href: "/insights/ai-governance-gap-infrastructure",
  },
  {
    tag: "AGILE",
    readTime: "8 min read",
    title: "Structured Agile: What It Actually Means for PM-Heavy Industries",
    body: "Agile without the chaos, a practical guide to adapting squad models for governance-first organisations without losing delivery pace.",
    href: "/insights/structured-agile-pm-industries",
  },
  {
    tag: "AI IMPLEMENTATION",
    readTime: "5 min read",
    title: "Before You Implement AI: A Readiness Checklist for Regulated Industries",
    body: "The questions your governance board will ask before approving an AI implementation, answered before you're in the room.",
    href: "/insights/ai-readiness-checklist-regulated-industries",
  },
];

const Home = memo(function Home({ onOpenConsultation }: HomeProps) {
  const [heroRef, heroVisible] = useReveal(0.05);
  const [tensionRef, tensionVisible] = useReveal();
  const [ampRef, ampVisible] = useReveal();
  const [sectorRef, sectorVisible] = useReveal();
  const [statsRef, statsVisible] = useReveal();
  const [insightsRef, insightsVisible] = useReveal();
  const [teamRef, teamVisible] = useReveal();
  const [ctaRef, ctaVisible] = useReveal();


  return (
    <div className="min-h-screen font-sans">
      {/* SECTION 1: HERO */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center overflow-hidden"
        style={{ backgroundColor: "#181F4F" }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(circle at 80% 20%, rgba(96, 38, 106, 0.15) 0%, transparent 60%)",
          }}
        />
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 w-full py-32 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 items-center">
            {/* Left column */}
            <div
              className="lg:col-span-3 space-y-8"
              style={{
                opacity: heroVisible ? 1 : 0,
                transform: heroVisible ? "translateY(0)" : "translateY(24px)",
                transition: "opacity 0.7s ease, transform 0.7s ease",
              }}
            >
              <p
                className="font-mono text-xs uppercase tracking-[0.12em]"
                style={{ color: "#F85C70" }}
              >
                A productised digital consultancy
              </p>

              <h1
                className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white leading-[1.05] break-words"
                style={{ fontWeight: 400 }}
              >
                Rigour for serious change, in the work and in the room.
              </h1>

              <p
                className="text-lg leading-relaxed max-w-[560px]"
                style={{ color: "rgba(255,255,255,0.80)" }}
              >
                We partner with leaders accountable for AI, delivery, and the change that has to land in front of a board.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-2 items-start">
                <a href="#how-we-work">
                  <button
                    className="amp-focus-ring-on-navy inline-flex items-center gap-2 px-8 h-12 font-sans font-bold text-base rounded transition-colors duration-200"
                    style={{ backgroundColor: "#F85C70", color: "#181F4F" }}
                    onMouseOver={(e) => { (e.currentTarget as HTMLButtonElement).style.backgroundColor = "#d94a5e"; }}
                    onMouseOut={(e) => { (e.currentTarget as HTMLButtonElement).style.backgroundColor = "#F85C70"; }}
                    data-testid="button-hero-see-how-we-work"
                  >
                    See how we work <ArrowRight className="h-4 w-4" />
                  </button>
                </a>
                <Link href="/contact">
                  <button
                    className="amp-focus-ring-on-navy inline-flex items-center gap-2 px-8 h-12 font-sans font-semibold text-base rounded border transition-colors duration-200"
                    style={{ backgroundColor: "transparent", color: "white", borderColor: "rgba(255,255,255,0.45)" }}
                    onMouseOver={(e) => { (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(255,255,255,0.80)"; }}
                    onMouseOut={(e) => { (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(255,255,255,0.45)"; }}
                    data-testid="button-hero-talk-to-us"
                  >
                    Talk to us
                  </button>
                </Link>
              </div>
            </div>

            {/* Right column, quiet engagement summary */}
            <div
              className="lg:col-span-2"
              style={{
                opacity: heroVisible ? 1 : 0,
                transform: heroVisible ? "translateY(0)" : "translateY(24px)",
                transition: "opacity 0.7s ease 0.2s, transform 0.7s ease 0.2s",
              }}
            >
              <div
                className="rounded-lg p-6"
                style={{ backgroundColor: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.10)" }}
              >
                <p
                  className="font-mono text-xs uppercase tracking-[0.12em] mb-5"
                  style={{ color: "rgba(255,255,255,0.45)" }}
                >
                  Three productised engagements
                </p>
                <ul className="space-y-0">
                  {heroEngagements.map((eng) => (
                    <li key={eng.slug}>
                      <Link
                        href={`/engagements/${eng.slug}`}
                        className="amp-focus-ring-on-navy group block py-4 border-t"
                        style={{ borderColor: "rgba(255,255,255,0.10)" }}
                        data-testid={`link-hero-engagement-${eng.slug}`}
                      >
                        <div className="flex items-baseline justify-between gap-4">
                          <span
                            className="font-display text-xl text-white group-hover:text-[#F85C70] transition-colors duration-200"
                            style={{ fontWeight: 400 }}
                          >
                            {eng.name}
                          </span>
                          <span
                            className="font-mono text-xs uppercase tracking-[0.12em] flex-shrink-0"
                            style={{ color: "rgba(255,255,255,0.45)" }}
                          >
                            {eng.duration}
                          </span>
                        </div>
                        <p
                          className="font-sans text-sm leading-snug max-h-24 opacity-100 mt-2 overflow-hidden [@media(hover:hover)]:max-h-0 [@media(hover:hover)]:opacity-0 [@media(hover:hover)]:mt-0 group-hover:[@media(hover:hover)]:max-h-24 group-hover:[@media(hover:hover)]:opacity-100 group-hover:[@media(hover:hover)]:mt-2 group-focus-visible:[@media(hover:hover)]:max-h-24 group-focus-visible:[@media(hover:hover)]:opacity-100 group-focus-visible:[@media(hover:hover)]:mt-2 transition-all duration-300 ease-out"
                          style={{ color: "rgba(255,255,255,0.7)" }}
                        >
                          {eng.outcome}
                        </p>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* Bottom accent line */}
        <div
          className="absolute bottom-0 left-0 right-0 h-px"
          style={{ backgroundColor: "rgba(248,92,112,0.4)" }}
        />
      </section>

      {/* SECTION 1b: PROOF STRIP */}
      <section
        aria-label="Credentials and reach"
        className="py-12 lg:py-14 border-b"
        style={{ backgroundColor: "#FFFFFF", borderColor: "#E5E3EE" }}
      >
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <p className="font-mono text-xs uppercase tracking-[0.12em] mb-6" style={{ color: "#6B6E81" }}>
            Built for industries where rigour is not optional
          </p>
          <dl
            className="grid grid-cols-2 lg:grid-cols-4 gap-0 border-l border-t"
            style={{ borderColor: "#E5E3EE" }}
            data-testid="list-home-proof-strip"
          >
            {proofPoints.map((p) => (
              <div
                key={p.label}
                className="p-6 lg:p-7 border-r border-b flex flex-col"
                style={{ borderColor: "#E5E3EE" }}
              >
                <dt
                  className="font-display text-2xl lg:text-3xl mb-3 leading-tight"
                  style={{ color: "#181F4F", fontWeight: 400 }}
                >
                  {p.metric}
                </dt>
                <dd className="flex-1">
                  <p className="font-sans text-sm font-semibold mb-1.5" style={{ color: "#181F4F" }}>
                    {p.label}
                  </p>
                  <p className="font-sans text-xs leading-relaxed" style={{ color: "#65677B" }}>
                    {p.detail}
                  </p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* SECTION 2: HOW WE WORK WITH YOU */}
      <section
        id="how-we-work"
        className="py-24 lg:py-28"
        style={{ backgroundColor: "#F2F0F7" }}
      >
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-[820px] mb-14">
            <p className="font-mono text-xs uppercase tracking-[0.12em] mb-4" style={{ color: "#F85C70" }}>
              How we work with you
            </p>
            <h2
              className="font-display text-4xl md:text-5xl leading-tight mb-6"
              style={{ color: "#181F4F", fontWeight: 400 }}
            >
              Three engagements. Each one named, scoped, and designed to leave your organisation with something concrete in hand.
            </h2>
            <p className="font-sans text-lg leading-relaxed" style={{ color: "#65677B" }}>
              An operating model, an evidence pack, a governance roadmap. Not a slide deck nobody opens again.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-l border-t" style={{ borderColor: "#E5E3EE" }}>
            {[
              {
                slug: "squad-blueprint",
                duration: "Six weeks",
                title: "Squad Blueprint",
                body: "A redesigned delivery operating model for engineering and delivery functions of fifty people or more. You leave with squads, charters, and accountabilities your leadership has signed off on, and a 90-day adoption plan in execution.",
              },
              {
                slug: "the-forge",
                duration: "Four weeks",
                title: "The Forge",
                body: "A launch intensive for new programmes, designed to get governance, operating cadence, and supplier model right before delivery starts. You leave with a programme that is ready to run rather than one that is still figuring itself out in flight.",
              },
              {
                slug: "delivery-compass",
                duration: "Eight weeks",
                title: "Delivery Compass",
                body: "AI governance and delivery alignment for organisations where AI usage has outpaced oversight. You leave with an inventory of what is running where, a governance framework aligned to the regulators that apply to you, and a 90-day action plan.",
              },
            ].map((card) => (
              <Link
                href={`/engagements/${card.slug}`}
                key={card.slug}
                className="amp-focus-ring-on-light block h-full"
              >
                <article
                  className="p-8 lg:p-10 border-r border-b h-full flex flex-col cursor-pointer transition-colors duration-200"
                  style={{ borderColor: "#E5E3EE", backgroundColor: "#FFFFFF" }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.backgroundColor = "#FAF9FD"; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.backgroundColor = "#FFFFFF"; }}
                  data-testid={`card-how-we-work-${card.slug}`}
                >
                  <p className="font-mono text-xs uppercase tracking-[0.12em] mb-3" style={{ color: "#F85C70" }}>
                    {card.duration}
                  </p>
                  <h3 className="font-display text-2xl mb-5 leading-snug" style={{ color: "#181F4F", fontWeight: 400 }}>
                    {card.title}
                  </h3>
                  <p className="font-sans text-base leading-relaxed flex-1" style={{ color: "#65677B" }}>
                    {card.body}
                  </p>
                  <span className="mt-8 inline-flex items-center gap-2 font-sans text-sm font-semibold" style={{ color: "#F85C70" }}>
                    See full engagement <ArrowRight className="h-3 w-3" />
                  </span>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 2b: WHO WE WORK WITH */}
      <section className="py-24 lg:py-28" style={{ backgroundColor: "#FFFFFF" }}>
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-12 flex-wrap gap-6">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.12em] mb-3" style={{ color: "#F85C70" }}>
                Who we work with
              </p>
              <h2 className="font-display text-4xl md:text-5xl leading-tight max-w-[640px]" style={{ color: "#181F4F", fontWeight: 400 }}>
                Real engagements.<br />Named outcomes.
              </h2>
            </div>
            <Link href="/case-studies">
              <span className="font-mono text-xs uppercase tracking-[0.12em] flex items-center gap-2 hover:gap-3 transition-all" style={{ color: "#F85C70" }}>
                See all case studies <ArrowRight className="h-3 w-3" />
              </span>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-l border-t" style={{ borderColor: "#E5E3EE" }}>
            {[
              {
                id: "payment-provider",
                sector: "Financial Services",
                client: "Global Payment Provider PLC",
                situation: "A 150-person delivery function across two legacy cultures was missing its targets following a major acquisition.",
                action: "Designed and embedded a structured squad model with coaching and Kanban workflow improvement inside the existing PMO.",
                outcome: "Over 12% productivity gain in four months, with the new operating model ratified at board level.",
              },
              {
                id: "elsevier",
                sector: "Publishing & Technology",
                client: "Elsevier",
                situation: "Architecture expertise was siloed and inconsistent across product teams during a period of acquisition-led growth.",
                action: "Embedded coaches restructured roles to build genuine architectural competence inside the teams rather than in a separate centre.",
                outcome: "Significant six-figure HR cost savings, with the engagement extended after measurable improvement across all four squads.",
              },
              {
                id: "public-sector",
                sector: "Public Sector",
                client: "Central Government Programme",
                situation: "A digital delivery programme was running at half pace because governance and delivery operated on different cadences.",
                action: "Aligned the operating model to the existing assurance framework using the Delivery Compass approach, with weekly governance integrated into delivery.",
                outcome: "38% reduction in time-to-delivery within two quarters, with a single board-level dashboard adopted as the standard.",
              },
            ].map((c) => (
              <Link
                href={`/case-studies${c.id !== "public-sector" ? "#" + c.id : ""}`}
                key={c.id}
                className="amp-focus-ring-on-light block h-full"
              >
                <article
                  className="p-8 lg:p-10 border-r border-b h-full flex flex-col cursor-pointer transition-colors duration-200"
                  style={{ borderColor: "#E5E3EE", backgroundColor: "transparent" }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.backgroundColor = "#F2F0F7"; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.backgroundColor = "transparent"; }}
                  data-testid={`card-home-case-${c.id}`}
                >
                  <p className="font-mono text-xs uppercase tracking-[0.12em] mb-3" style={{ color: "#F85C70" }}>
                    {c.sector}
                  </p>
                  <h3 className="font-display text-xl mb-8 leading-snug" style={{ color: "#181F4F", fontWeight: 400 }}>
                    {c.client}
                  </h3>

                  <div className="space-y-5 flex-1">
                    <div>
                      <p className="font-mono text-xs uppercase tracking-[0.12em] mb-2" style={{ color: "#6B6E81" }}>
                        Situation
                      </p>
                      <p className="font-sans text-sm leading-relaxed" style={{ color: "#65677B" }}>{c.situation}</p>
                    </div>
                    <div>
                      <p className="font-mono text-xs uppercase tracking-[0.12em] mb-2" style={{ color: "#6B6E81" }}>
                        What we did
                      </p>
                      <p className="font-sans text-sm leading-relaxed" style={{ color: "#65677B" }}>{c.action}</p>
                    </div>
                    <div>
                      <p className="font-mono text-xs uppercase tracking-[0.12em] mb-2" style={{ color: "#6B6E81" }}>
                        Outcome
                      </p>
                      <p className="font-sans text-sm leading-relaxed font-medium" style={{ color: "#181F4F" }}>{c.outcome}</p>
                    </div>
                  </div>

                  <span className="mt-8 inline-flex items-center gap-2 font-sans text-xs font-semibold" style={{ color: "#F85C70" }}>
                    Read the case study <ArrowRight className="h-3 w-3" />
                  </span>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: CREDIBILITY BAR */}
      <section
        className="py-0 border-y"
        style={{
          backgroundColor: "#ffffff",
          borderColor: "#E5E3EE",
        }}
      >
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 py-5">
            {[
              "10+ Years Delivery Leadership",
              "Cross-Sector Delivery Experience",
              "AI Governance Specialists",
              "Structured Agile Practitioners",
            ].map((item, i) => (
              <span
                key={i}
                className="font-sans text-xs uppercase tracking-[0.12em] whitespace-nowrap"
                style={{ color: "#6B6E81" }}
              >
                {i > 0 && (
                  <span className="mr-8" style={{ color: "#E5E3EE" }}>
                    ·
                  </span>
                )}
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: THE TENSION */}
      <section
        ref={tensionRef}
        className="py-28 lg:py-36 border-t"
        style={{ backgroundColor: "#F2F0F7", borderColor: "#DDD9EA" }}
      >
        <div
          className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8"
          style={{
            opacity: tensionVisible ? 1 : 0,
            transform: tensionVisible ? "translateY(0)" : "translateY(24px)",
            transition: "opacity 0.6s ease, transform 0.6s ease",
          }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2
                className="font-display text-4xl md:text-5xl mb-8 leading-tight"
                style={{ color: "#181F4F", fontWeight: 400 }}
              >
                "Most technology consultancies were built for companies like theirs.
                <br />
                Not yours."
              </h2>
              <p
                className="font-sans text-lg leading-relaxed mb-6"
                style={{ color: "#65677B" }}
              >
                Your organisation runs on process, auditability, and governance. Agile
                transformations often ignore that. Technology implementations frequently make it worse.
              </p>
              <p
                className="font-sans text-lg leading-relaxed"
                style={{ color: "#65677B" }}
              >
                Amplified bridges the gap, embedding new technologies and delivering structured change
                that respects the way your industry actually works.
              </p>
              <div className="mt-8">
                <Link href="/how-we-work">
                  <span
                    className="font-sans text-sm font-semibold flex items-center gap-2 hover:gap-3 transition-all duration-200"
                    style={{ color: "#F85C70" }}
                  >
                    See how we work <ArrowRight className="h-4 w-4" />
                  </span>
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="relative w-full h-80 rounded-2xl overflow-hidden">
                <Image
                  src={strategicThinkingImage}
                  alt="Strategic thinking and governance"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                  loading="lazy"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 rounded-xl overflow-hidden border-4 border-white shadow-lg">
                <Image
                  src={networkImage}
                  alt="Network collaboration"
                  fill
                  sizes="128px"
                  className="object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: AMP MODEL */}
      <section
        id="services"
        ref={ampRef}
        className="py-24 lg:py-28 bg-white"
      >
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="mb-16"
            style={{
              opacity: ampVisible ? 1 : 0,
              transform: ampVisible ? "translateY(0)" : "translateY(24px)",
              transition: "opacity 0.6s ease, transform 0.6s ease",
            }}
          >
            <p
              className="font-mono text-xs uppercase tracking-[0.12em] mb-4"
              style={{ color: "#6B6E81" }}
            >
              How We Work
            </p>
            <h2
              className="font-display text-4xl md:text-5xl"
              style={{ color: "#181F4F", fontWeight: 400 }}
            >
              We Have an Amp for That
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border-l border-t" style={{ borderColor: "#C8C4D8" }}>
            {ampCards.map((card, i) => (
              <AmpCard key={card.tag} card={card} index={i} visible={ampVisible} />
            ))}
          </div>
        </div>
      </section>

      {/* SERVICE SPOTLIGHT */}
      <ServiceSpotlight onOpenConsultation={onOpenConsultation} />

      {/* THE AMP MODEL BAND */}
      <section style={{ backgroundColor: "#F2F0F7", borderTop: "1px solid #DDD9EA" }}>
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-center">
            <div className="lg:col-span-1">
              <p className="font-mono text-xs uppercase tracking-[0.12em] mb-2" style={{ color: "#F85C70" }}>
                Our Methodology
              </p>
              <h3 className="text-xl font-semibold" style={{ color: "#181F4F" }}>
                The Amp Model
              </h3>
            </div>
            <div className="lg:col-span-2 flex items-center gap-0">
              {[
                { label: "Assess", desc: "Understand your current state" },
                { label: "Implement", desc: "Build it with you, not for you" },
                { label: "Amplify", desc: "Embed capability, exit with confidence" },
              ].map((phase, i) => (
                <div key={phase.label} className="flex items-center flex-1">
                  <div className="flex-1">
                    <div
                      className="px-4 py-3 rounded-lg text-center"
                      style={{ backgroundColor: "#FFFFFF", border: "1px solid #DDD9EA" }}
                    >
                      <p className="font-semibold text-sm" style={{ color: "#181F4F" }}>
                        {phase.label}
                      </p>
                      <p className="text-xs mt-0.5" style={{ color: "#65677B" }}>
                        {phase.desc}
                      </p>
                    </div>
                  </div>
                  {i < 2 && (
                    <div className="flex-shrink-0 px-1" style={{ color: "#C8C4D8", fontWeight: 400, fontSize: "1rem" }}>
                      →
                    </div>
                  )}
                </div>
              ))}
            </div>
            <div className="lg:col-span-1 lg:text-right">
              <Link href="/how-we-work">
                <span
                  className="inline-flex items-center gap-2 text-sm font-semibold hover:gap-3 transition-all duration-200"
                  style={{ color: "#60266A" }}
                >
                  See how it works <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: WHERE WE WORK */}
      <section
        ref={sectorRef}
        className="py-24 lg:py-28 bg-white border-t"
        style={{ borderColor: "#E5E3EE" }}
      >
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div
            style={{
              opacity: sectorVisible ? 1 : 0,
              transform: sectorVisible ? "translateY(0)" : "translateY(24px)",
              transition: "opacity 0.6s ease, transform 0.6s ease",
            }}
          >
            <p
              className="font-mono text-xs uppercase tracking-[0.12em] mb-4"
              style={{ color: "#6B6E81" }}
            >
              Where we work
            </p>
            <h2
              className="font-display text-4xl md:text-5xl mb-6 max-w-[820px] leading-tight"
              style={{ color: "#181F4F", fontWeight: 400 }}
            >
              Built for organisations that cannot afford to guess.
            </h2>
            <p
              className="font-sans text-lg leading-relaxed max-w-[760px] mb-10"
              style={{ color: "#65677B" }}
            >
              We work across sectors and stages, wherever delivery is complex, accountability is real,
              and the cost of getting it wrong is measured in more than a missed deadline. The
              frameworks adapt to your context. The rigour does not.
            </p>
            <div
              className="flex flex-wrap gap-x-8 gap-y-4 pt-6 border-t"
              style={{ borderColor: "#E5E3EE" }}
            >
              {sectorLinks.map((s) => (
                <Link
                  key={s.href}
                  href={s.href}
                  className="amp-focus-ring-on-light font-mono text-xs uppercase tracking-[0.12em] inline-flex items-center gap-2 hover:gap-3 transition-all"
                  style={{ color: "#F85C70" }}
                >
                  {s.label} <ArrowRight className="h-3 w-3" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: STATS BAR */}
      <section
        ref={statsRef}
        className="py-28 lg:py-36"
        style={{ backgroundColor: "#181F4F" }}
      >
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="grid grid-cols-3"
            style={{
              opacity: statsVisible ? 1 : 0,
              transform: statsVisible ? "translateY(0)" : "translateY(24px)",
              transition: "opacity 0.6s ease, transform 0.6s ease",
            }}
          >
            {[
              { stat: "10+", label: "Years delivery leadership" },
              { stat: "3", label: "Productised engagements" },
              { stat: "100%", label: "Structured delivery every time" },
            ].map((item, i) => (
              <div
                key={i}
                className="px-8 text-center"
                style={{
                  borderLeft: i > 0 ? "1px solid rgba(255,255,255,0.10)" : "none",
                }}
              >
                <div
                  className="font-display text-6xl lg:text-7xl mb-3"
                  style={{ color: "#F85C70", fontWeight: 400 }}
                >
                  {item.stat}
                </div>
                <p
                  className="font-sans text-sm"
                  style={{ color: "rgba(255,255,255,0.80)" }}
                >
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7: INSIGHTS PREVIEW */}
      <section
        ref={insightsRef}
        className="py-24 lg:py-28 bg-white border-t"
        style={{ borderColor: "#E5E3EE" }}
      >
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div
            style={{
              opacity: insightsVisible ? 1 : 0,
              transform: insightsVisible ? "translateY(0)" : "translateY(24px)",
              transition: "opacity 0.6s ease, transform 0.6s ease",
            }}
          >
            <p
              className="font-mono text-xs uppercase tracking-[0.12em] mb-4"
              style={{ color: "#6B6E81" }}
            >
              Insights
            </p>
            <h2
              className="font-display text-4xl md:text-5xl mb-16"
              style={{ color: "#181F4F", fontWeight: 400 }}
            >
              Practical thinking for delivery-led organisations
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {insightCards.map((card) => (
                <Link key={card.title} href={card.href}>
                  <div
                    className="p-8 rounded transition-all duration-300 flex flex-col h-full group cursor-pointer"
                    style={{ backgroundColor: "#F2F0F7" }}
                  >
                    <div className="flex items-center gap-4 mb-6">
                      <span
                        className="font-mono text-xs uppercase tracking-[0.12em]"
                        style={{ color: "#F85C70" }}
                      >
                        {card.tag}
                      </span>
                      <span
                        className="font-sans text-xs"
                        style={{ color: "#6B6E81" }}
                      >
                        · {card.readTime}
                      </span>
                    </div>
                    <h3
                      className="font-display text-xl mb-4 group-hover:opacity-80 transition-opacity"
                      style={{ color: "#181F4F", fontWeight: 400 }}
                    >
                      {card.title}
                    </h3>
                    <p
                      className="font-sans text-sm leading-relaxed flex-1 mb-6"
                      style={{ color: "#65677B" }}
                    >
                      {card.body}
                    </p>
                    <span
                      className="font-sans text-sm font-medium flex items-center gap-2 group-hover:gap-3 transition-all duration-200"
                      style={{ color: "#F85C70" }}
                    >
                      Read more <ArrowRight className="h-3 w-3" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7B: AMPLIFIED ECOSYSTEM */}
      <section className="py-28 lg:py-36 border-t" style={{ backgroundColor: "#F2F0F7", borderColor: "#DDD9EA" }}>
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <p className="font-mono text-xs uppercase tracking-[0.12em] mb-4" style={{ color: "#6B6E81" }}>
            The Amplified Ecosystem
          </p>
          <h2 className="font-display text-4xl md:text-5xl mb-6" style={{ color: "#181F4F", fontWeight: 400 }}>
            Consulting is only part of the picture
          </h2>
          <p className="font-sans text-lg max-w-[640px] mb-16 leading-relaxed" style={{ color: "#65677B" }}>
            Alongside our six consulting service lines, we bring two specialist capabilities that extend what
            we can do for your organisation from day one.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 border-l border-t" style={{ borderColor: "#C8C4D8" }}>
            {/* Stable Teams */}
            <div className="p-10 border-r border-b" style={{ borderColor: "#C8C4D8" }}>
              <div className="flex items-start gap-4 mb-6">
                <span className="font-mono text-xs uppercase tracking-[0.12em] pt-0.5" style={{ color: "#F85C70" }}>
                  AmplifiedTeams
                </span>
              </div>
              <h3 className="font-display text-2xl mb-4" style={{ color: "#181F4F", fontWeight: 400 }}>
                Stable Teams&trade; Framework
              </h3>
              <p className="font-sans text-base leading-relaxed mb-8" style={{ color: "#65677B" }}>
                AmplifiedTeams delivers the Stable Teams framework, a structured approach to rebaselining
                teams and operations so they achieve sustained high performance. Not a recruitment solution.
                A framework for getting the team you already have to perform at the level you need.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Structured diagnostic across five dimensions of team stability",
                  "Rebaselining of roles, accountability, and ways of working",
                  "Embedded operating rhythms and delivery cadences that hold",
                  "High-performance conditions built in, not bolted on",
                  "Outcomes that outlast the engagement",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="h-4 w-4 flex-shrink-0 mt-0.5" style={{ color: "#181F4F" }} />
                    <span className="font-sans text-sm leading-relaxed" style={{ color: "#65677B" }}>{item}</span>
                  </li>
                ))}
              </ul>
              <a
                href="https://amplifiedteams.co.uk"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold hover:gap-3 transition-all duration-200"
                style={{ color: "#F85C70" }}
              >
                Visit AmplifiedTeams <ArrowRight className="h-3 w-3" />
              </a>
            </div>

            {/* Amp Store */}
            <div className="p-10 border-b" style={{ borderColor: "#C8C4D8" }}>
              <div className="flex items-start gap-4 mb-6">
                <span className="font-mono text-xs uppercase tracking-[0.12em] pt-0.5" style={{ color: "#F85C70" }}>
                  ampStore
                </span>
              </div>
              <h3 className="font-display text-2xl mb-4" style={{ color: "#181F4F", fontWeight: 400 }}>
                Capability Through Practice
              </h3>
              <p className="font-sans text-base leading-relaxed mb-8" style={{ color: "#65677B" }}>
                Learning that sticks. The ampStore is our curated capability catalogue, structured
                learning experiences, tools, and frameworks your teams can use immediately. Built for
                practitioners, not classrooms.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Curated modules aligned to each AMP service line",
                  "AI literacy, governance, agile and delivery fundamentals",
                  "Self-paced and cohort formats",
                  "Assessments that benchmark where your team actually is",
                  "Paired with live coaching for accelerated adoption",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="h-4 w-4 flex-shrink-0 mt-0.5" style={{ color: "#181F4F" }} />
                    <span className="font-sans text-sm leading-relaxed" style={{ color: "#65677B" }}>{item}</span>
                  </li>
                ))}
              </ul>
              <Link href="/amp-store">
                <span
                  className="inline-flex items-center gap-2 text-sm font-semibold hover:gap-3 transition-all duration-200 cursor-pointer"
                  style={{ color: "#60266A" }}
                >
                  Explore the ampStore <ArrowRight className="h-3 w-3" />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 8: MEET THE PARTNERSHIP */}
      <section
        ref={teamRef}
        className="py-28 lg:py-36 border-t"
        style={{ backgroundColor: "#181F4F", borderColor: "rgba(255,255,255,0.10)" }}
      >
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center"
            style={{
              opacity: teamVisible ? 1 : 0,
              transform: teamVisible ? "translateY(0)" : "translateY(24px)",
              transition: "opacity 0.6s ease, transform 0.6s ease",
            }}
          >
            <div>
              <p
                className="font-mono text-xs uppercase tracking-[0.12em] mb-6"
                style={{ color: "#F85C70" }}
              >
                The Partnership
              </p>
              <h2
                className="font-display text-4xl md:text-5xl mb-8 leading-tight"
                style={{ color: "#FFFFFF", fontWeight: 400 }}
              >
                Every walk of life.<br />One standard of rigour.
              </h2>
              <p
                className="text-lg leading-relaxed mb-10"
                style={{ color: "rgba(255,255,255,0.80)" }}
              >
                We are not a silver bullet, and neither are our people. A partnership of seasoned
                practitioners who come from every kind of background, united by deep experience inside
                the industries we serve and a refusal to apply off-the-shelf thinking to complex problems.
              </p>
              <Link href="/about/team">
                <span
                  className="inline-flex items-center gap-2 text-sm font-semibold hover:gap-3 transition-all duration-200 cursor-pointer"
                  style={{ color: "#F85C70" }}
                >
                  Meet the partnership <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
            </div>

            <div className="grid grid-cols-1 gap-4">
              {[
                { initial: "A", role: "Operations & Governance Partner", focus: "AMP 01 / AMP 03" },
                { initial: "B", role: "Technology & AI Partner", focus: "AMP 02" },
                { initial: "C", role: "Structured Delivery Partner", focus: "AMP 03" },
                { initial: "D", role: "Capability & Change Partner", focus: "AMP 04" },
              ].map((p, i) => (
                <Link href="/about/team" key={i}>
                  <div
                    className="flex items-center gap-5 px-6 py-4 rounded-lg cursor-pointer transition-all duration-200 group"
                    style={{
                      border: "1px solid rgba(255,255,255,0.10)",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.borderColor = "rgba(248,92,112,0.45)";
                      (e.currentTarget as HTMLElement).style.backgroundColor = "rgba(255,255,255,0.04)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.10)";
                      (e.currentTarget as HTMLElement).style.backgroundColor = "transparent";
                    }}
                  >
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold"
                      style={{
                        border: "1px solid rgba(255,255,255,0.10)",
                        color: "rgba(255,255,255,0.80)",
                      }}
                    >
                      {p.initial}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium" style={{ color: "rgba(255,255,255,0.80)" }}>
                        {p.role}
                      </p>
                      <p className="font-mono text-xs mt-0.5" style={{ color: "rgba(255,255,255,0.45)" }}>
                        {p.focus}
                      </p>
                    </div>
                    <ArrowRight className="h-4 w-4 flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" style={{ color: "#F85C70" }} />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 8b: WHY AMPLIFIED */}
      <section className="py-24 lg:py-28 border-t" style={{ backgroundColor: "#F2F0F7", borderColor: "#DDD9EA" }}>
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4">
              <p className="font-mono text-xs uppercase tracking-[0.12em] mb-4" style={{ color: "#F85C70" }}>
                Why Amplified
              </p>
              <h2
                className="font-display text-4xl md:text-5xl leading-tight"
                style={{ color: "#181F4F", fontWeight: 400 }}
              >
                Smaller, more senior, and more practical.
              </h2>
            </div>
            <div className="lg:col-span-7 lg:col-start-6 space-y-6">
              <p className="font-sans text-lg leading-relaxed" style={{ color: "#65677B" }}>
                We are smaller and more senior than the Big Four firms, more methodology-led
                than the build shops, and more practical than the strategy houses. Every
                engagement is led by someone with seventeen years or more of delivery experience
                in complex change. The team supporting them is small enough that you will know
                everyone's name by the end of week one.
              </p>
              <p className="font-sans text-lg leading-relaxed" style={{ color: "#65677B" }}>
                We do not do generic transformation, capability uplift, or staff augmentation
                under the Amplified brand. We do three things, well, for a specific kind of
                buyer. Where genuine delivery capacity is what is needed, we run that through
                AmplifiedTeams as a deliberately separate offering, with a different commercial
                model and a different team.
              </p>
              <div className="pt-4">
                <Link href="/contact">
                  <button
                    className="amp-focus-ring-on-light inline-flex items-center gap-2 px-8 h-12 font-sans font-bold text-base rounded transition-colors duration-200"
                    style={{ backgroundColor: "#F85C70", color: "#181F4F" }}
                    onMouseOver={(e) => { (e.currentTarget as HTMLButtonElement).style.backgroundColor = "#d94a5e"; }}
                    onMouseOut={(e) => { (e.currentTarget as HTMLButtonElement).style.backgroundColor = "#F85C70"; }}
                    data-testid="button-why-amplified-talk"
                  >
                    Talk to us <ArrowRight className="h-4 w-4" />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 9: CTA */}
      <section
        ref={ctaRef}
        className="py-28 lg:py-36 text-center"
        style={{ backgroundColor: "#60266A" }}
      >
        <div
          className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8"
          style={{
            opacity: ctaVisible ? 1 : 0,
            transform: ctaVisible ? "translateY(0)" : "translateY(24px)",
            transition: "opacity 0.6s ease, transform 0.6s ease",
          }}
        >
          <h2
            className="font-display text-5xl md:text-6xl text-white mb-6"
            style={{ fontWeight: 400 }}
          >
            Ready to Amp Up?
          </h2>
          <p
            className="font-sans text-lg max-w-[500px] mx-auto mb-10 leading-relaxed"
            style={{ color: "rgba(255,255,255,0.80)" }}
          >
            Whether you're starting an AI strategy or untangling a delivery model, we'll give you a
            straight answer on where to begin.
          </p>
          <Link href="/contact">
            <button
              className="amp-focus-ring-on-navy inline-flex items-center gap-2 px-8 h-12 font-sans font-bold text-base rounded transition-colors duration-200"
              style={{
                backgroundColor: "#F85C70",
                color: "#181F4F",
              }}
              onMouseOver={(e) => {
                (e.currentTarget as HTMLButtonElement).style.backgroundColor = "#d94a5e";
              }}
              onMouseOut={(e) => {
                (e.currentTarget as HTMLButtonElement).style.backgroundColor = "#F85C70";
              }}
              data-testid="button-final-cta-conversation"
            >
              Start a Conversation <ArrowRight className="h-4 w-4" />
            </button>
          </Link>
          <p
            className="font-sans text-sm mt-6"
            style={{ color: "rgba(255,255,255,0.45)" }}
          >
            No pitch. No deck. Just a 30-minute call.
          </p>
        </div>
      </section>
    </div>
  );
});

function AmpCard({
  card,
  index,
  visible,
}: {
  card: (typeof ampCards)[0];
  index: number;
  visible: boolean;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <Link href={card.href}>
      <div
        className="p-8 flex flex-col h-full border-r border-b cursor-pointer"
        style={{
          backgroundColor: hovered ? "#FFFFFF" : "#F2F0F7",
          borderColor: "#C8C4D8",
          borderTopWidth: "1px",
          borderTopColor: hovered ? "#F85C70" : "#C8C4D8",
          borderTopStyle: "solid",
          transition: "background-color 0.3s ease, border-top-color 0.3s ease",
          opacity: visible ? 1 : 0,
          transitionDelay: `${index * 0.08}s`,
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <p
          className="font-mono text-xs uppercase tracking-[0.12em] mb-4"
          style={{ color: "#F85C70" }}
        >
          {card.tag}
        </p>
        <h3
          className="font-display text-2xl mb-2"
          style={{ color: "#181F4F", fontWeight: 400 }}
        >
          {card.title}
        </h3>
        <p
          className="font-sans text-sm mb-4 font-medium"
          style={{ color: "#60266A" }}
        >
          {card.subtitle}
        </p>
        <p
          className="font-sans text-sm leading-relaxed mb-6 flex-1"
          style={{ color: "#65677B" }}
        >
          {card.body}
        </p>
        <ul className="space-y-1.5 mb-6">
          {card.bullets.map((b) => (
            <li key={b} className="flex items-start gap-2 text-xs" style={{ color: "#6B6E81" }}>
              <span style={{ color: "#F85C70", flexShrink: 0 }}>·</span>
              {b}
            </li>
          ))}
        </ul>
        <span
          className="font-sans text-sm font-medium flex items-center gap-1"
          style={{ color: hovered ? "#60266A" : "#F85C70", transition: "color 0.2s" }}
        >
          Learn more about {card.title} <ArrowRight className="h-3 w-3" />
        </span>
      </div>
    </Link>
  );
}

export default Home;
