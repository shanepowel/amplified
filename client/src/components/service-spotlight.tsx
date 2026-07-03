'use client';

import { useState, useEffect, useRef, useCallback, memo } from "react";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

interface SpotlightService {
  tag: string;
  title: string;
  subtitle: string;
  body: string;
  extended: string;
  bullets: string[];
  href: string;
  accent: string;
}

const services: SpotlightService[] = [
  {
    tag: "AMP 01",
    title: "AI Governance",
    subtitle: "Responsible AI for regulated industries",
    body: "We build the governance foundations AI adoption requires, before your teams write a line of code or sign a platform contract.",
    extended:
      "In regulated industries, AI governance is not a compliance checkbox. It is a delivery prerequisite. Without it, even well-intentioned AI implementations accumulate model risk, opacity, and regulatory exposure that compound over time. We work with boards, CIOs, and delivery directors to establish governance frameworks that are rigorous enough to satisfy regulators and practical enough that engineering and product teams can actually work within them.",
    bullets: [
      "AI risk frameworks and readiness assessments",
      "Responsible AI policy design and board-level reporting",
      "EU AI Act and UK AI framework alignment",
      "Auditability, explainability, and model risk standards",
      "AI ethics governance and ongoing assurance",
    ],
    href: "/ai-governance",
    accent: "#F85C70",
  },
  {
    tag: "AMP 02",
    title: "AI Implementation",
    subtitle: "End-to-end delivery built within your governance",
    body: "We don't just advise. We embed with your teams and deliver AI capabilities that work inside your existing accountability structures.",
    extended:
      "Most AI implementation fails not because the technology doesn't work but because the delivery approach ignores the environment it lands in. Regulated industries have assurance gates, change advisory boards, procurement cycles, and risk appetites that a standard AI consultancy will clash with. We are built for this. Our practitioners embed into your programme, work within your governance, and hand over capability rather than dependency.",
    bullets: [
      "AI use case identification and prioritisation against your risk appetite",
      "Proof of concept through to production-grade delivery",
      "Integration with existing PMO and delivery frameworks",
      "Handover and internal capability transfer",
      "Post-implementation review and optimisation",
    ],
    href: "/ai-implementation",
    accent: "#60266A",
  },
  {
    tag: "AMP 03",
    title: "Structured Delivery",
    subtitle: "Agile without the chaos",
    body: "Squad-based delivery models designed for organisations where governance, auditability, and structured programme management are non-negotiable.",
    extended:
      "The agile methods most consultancies import were designed for product companies without procurement cycles or public accountability. We practise a form of agile that is structured enough for infrastructure, energy, and public sector environments without losing the delivery pace that makes it worthwhile. Sprint cadences that sit inside assurance gates. Squads that have accountability to programme boards. Backlogs that align to business cases. Delivery that can be audited.",
    bullets: [
      "Agile operating model design for PM-heavy industries",
      "Squad and tribe model implementation",
      "Agile and waterfall hybrid frameworks",
      "Delivery governance, reporting, and audit trails",
      "Sprint cadences aligned to existing assurance gates",
    ],
    href: "/structured-delivery",
    accent: "#F85C70",
  },
  {
    tag: "AMP 04",
    title: "Capability Building",
    subtitle: "Build it in, not bolted on",
    body: "We build lasting internal capability so your teams can run it themselves twelve months later.",
    extended:
      "The measure of a good capability programme is whether anyone notices when the consultants leave. We design and run development programmes that transfer real skill: not awareness, not familiarity, not confidence in the theory. Product Owners who can hold a backlog. Programme managers who understand agile without abandoning governance. Leaders who can talk to both their board and their engineering teams about AI. Capability that compounds.",
    bullets: [
      "Product Owner and Product Manager development programmes",
      "Centre of Excellence design, setup, and operating model",
      "Agile practitioner training and coaching",
      "AI literacy programmes for non-technical teams",
      "Embedded upskilling alongside live delivery",
    ],
    href: "/capability",
    accent: "#60266A",
  },
  {
    tag: "AMP 05",
    title: "Coaching",
    subtitle: "At every level, from board to practitioner",
    body: "Senior operators coaching leaders, teams and practitioners through technology adoption, organisational transformation, and the realities of operating in regulated environments.",
    extended:
      "Our coaches are not career coaches who have read technology books. They are practitioners who have run delivery programmes, sat in boards, and navigated the specific pressure of leading transformation in sectors where failure has consequences beyond the quarterly report. They bring that experience directly to your leaders, your programme managers, and your teams: structured engagements, one-to-one sessions, and cohort programmes designed to build confidence and clarity, not dependency.",
    bullets: [
      "Executive and board-level AI coaching",
      "Delivery lead and programme manager coaching",
      "Agile practitioner coaching and mentoring",
      "Change leadership support through transformation",
      "One-to-one and cohort programme formats",
    ],
    href: "/coaching",
    accent: "#F85C70",
  },
  {
    tag: "AMP 06",
    title: "Tech Build",
    subtitle: "Custom software and platform delivery",
    body: "We design and build software that solves real problems. From greenfield digital products to platform modernisation and AI-native systems.",
    extended:
      "We build software the same way we run delivery: with rigour, accountability, and a clear handover plan. Our engineering teams work alongside strategy and product, which means what gets built reflects a real business case and can be maintained by the people inheriting it. We are particularly experienced in legacy modernisation for regulated environments, AI-native application development, and cloud-native infrastructure built to public sector and financial services standards.",
    bullets: [
      "Custom software development for regulated environments",
      "Platform modernisation and re-architecture",
      "AI-native application development",
      "Cloud-native infrastructure and DevOps",
      "Digital product design and end-to-end delivery",
    ],
    href: "/transformation",
    accent: "#60266A",
  },
];

interface ServiceSpotlightProps {
  onOpenConsultation: (serviceType?: string) => void;
}

const ServiceSpotlight = memo(function ServiceSpotlight({ onOpenConsultation }: ServiceSpotlightProps) {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [animating, setAnimating] = useState(false);
  const [direction, setDirection] = useState<"next" | "prev">("next");
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const goTo = useCallback(
    (index: number, dir: "next" | "prev" = "next") => {
      if (animating) return;
      setDirection(dir);
      setAnimating(true);
      setTimeout(() => {
        setActive(index);
        setAnimating(false);
      }, 220);
    },
    [animating]
  );

  const next = useCallback(() => {
    goTo((active + 1) % services.length, "next");
  }, [active, goTo]);

  const prev = useCallback(() => {
    goTo((active - 1 + services.length) % services.length, "prev");
  }, [active, goTo]);

  useEffect(() => {
    if (paused) return;
    timerRef.current = setTimeout(next, 6000);
    return () => { if (timerRef.current) clearTimeout(timerRef.current); };
  }, [active, paused, next]);

  const current = services[active];

  return (
    <section
      className="py-0"
      style={{ backgroundColor: "#181F4F" }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      aria-label="Service Spotlight"
    >
      {/* Tab navigation */}
      <div
        className="border-b overflow-x-auto"
        style={{ borderColor: "rgba(255,255,255,0.08)" }}
      >
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 flex">
          {services.map((s, i) => (
            <button
              key={s.tag}
              onClick={() => goTo(i, i > active ? "next" : "prev")}
              className="relative flex-shrink-0 flex flex-col items-center px-5 py-5 transition-colors duration-200 focus:outline-none"
              style={{ color: active === i ? "#F85C70" : "rgba(255,255,255,0.4)" }}
              aria-pressed={active === i}
              aria-label={`${s.tag} ${s.title}`}
            >
              <span className="font-mono text-xs tracking-[0.12em] mb-0.5">{s.tag}</span>
              <span className="font-sans text-xs font-semibold hidden sm:block" style={{ color: active === i ? "#ffffff" : "rgba(255,255,255,0.4)" }}>
                {s.title}
              </span>
              {active === i && (
                <span
                  className="absolute bottom-0 left-0 right-0 h-0.5 rounded-t"
                  style={{ backgroundColor: "#F85C70" }}
                />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Spotlight panel */}
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div
          style={{
            opacity: animating ? 0 : 1,
            transform: animating
              ? `translateX(${direction === "next" ? "20px" : "-20px"})`
              : "translateX(0)",
            transition: "opacity 0.22s ease, transform 0.22s ease",
          }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            {/* Left: tag + title */}
            <div className="lg:col-span-4">
              <div className="mb-6">
                <span
                  className="font-mono text-5xl md:text-6xl font-light"
                  style={{ color: "rgba(255,255,255,0.08)", letterSpacing: "-0.02em" }}
                  aria-hidden="true"
                >
                  {current.tag.replace("AMP ", "")}
                </span>
              </div>
              <p className="font-mono text-xs uppercase tracking-[0.15em] mb-3" style={{ color: "#F85C70" }}>
                {current.tag}
              </p>
              <h2
                className="font-display text-3xl md:text-4xl text-white mb-3"
                style={{ fontWeight: 400, lineHeight: 1.2 }}
              >
                {current.title}
              </h2>
              <p className="font-sans text-sm mb-8" style={{ color: "rgba(255,255,255,0.5)" }}>
                {current.subtitle}
              </p>
              <div className="flex gap-3">
                <Link href={current.href}>
                  <button
                    className="inline-flex items-center gap-2 px-6 h-10 font-sans text-sm font-bold rounded transition-colors duration-200"
                    style={{ backgroundColor: "#F85C70", color: "#181F4F" }}
                    onMouseOver={(e) => ((e.currentTarget as HTMLButtonElement).style.backgroundColor = "#d94a5e")}
                    onMouseOut={(e) => ((e.currentTarget as HTMLButtonElement).style.backgroundColor = "#F85C70")}
                  >
                    Learn more about {current.title} <ArrowRight className="h-4 w-4" />
                  </button>
                </Link>
                <button
                  onClick={() => onOpenConsultation(current.tag.toLowerCase().replace(" ", "-"))}
                  className="inline-flex items-center gap-2 px-6 h-10 font-sans text-sm font-semibold rounded transition-colors duration-200"
                  style={{ border: "1px solid rgba(255,255,255,0.2)", color: "rgba(255,255,255,0.8)", backgroundColor: "transparent" }}
                  onMouseOver={(e) => { (e.currentTarget as HTMLButtonElement).style.backgroundColor = "rgba(255,255,255,0.06)"; (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(255,255,255,0.4)"; }}
                  onMouseOut={(e) => { (e.currentTarget as HTMLButtonElement).style.backgroundColor = "transparent"; (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(255,255,255,0.2)"; }}
                >
                  Discuss this
                </button>
              </div>
            </div>

            {/* Right: description + bullets */}
            <div className="lg:col-span-8">
              <p className="font-sans text-base leading-relaxed mb-4" style={{ color: "rgba(255,255,255,0.75)" }}>
                {current.body}
              </p>
              <p className="font-sans text-sm leading-relaxed mb-8" style={{ color: "rgba(255,255,255,0.5)" }}>
                {current.extended}
              </p>
              <div
                className="p-6 rounded"
                style={{ backgroundColor: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}
              >
                <p className="font-mono text-xs uppercase tracking-[0.12em] mb-4" style={{ color: "#F85C70" }}>
                  What this includes
                </p>
                <ul className="space-y-3">
                  {current.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-3">
                      <span
                        className="flex-shrink-0 mt-2 w-1.5 h-1.5 rounded-full"
                        style={{ backgroundColor: "#F85C70" }}
                      />
                      <span className="font-sans text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.7)" }}>
                        {b}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Progress bar + nav */}
        <div className="flex items-center justify-between mt-12 pt-8 border-t" style={{ borderColor: "rgba(255,255,255,0.08)" }}>
          {/* Progress dots */}
          <div className="flex items-center gap-2">
            {services.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i, i > active ? "next" : "prev")}
                aria-label={`Go to ${services[i].tag}`}
                className="transition-all duration-300 rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
                style={{
                  width: active === i ? "24px" : "6px",
                  height: "6px",
                  backgroundColor: active === i ? "#F85C70" : "rgba(255,255,255,0.2)",
                }}
              />
            ))}
          </div>

          {/* Arrow navigation */}
          <div className="flex items-center gap-2">
            <button
              onClick={prev}
              aria-label="Previous service"
              className="flex items-center justify-center w-10 h-10 rounded transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
              style={{ border: "1px solid rgba(255,255,255,0.15)", color: "rgba(255,255,255,0.6)" }}
              onMouseOver={(e) => { (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(255,255,255,0.4)"; (e.currentTarget as HTMLButtonElement).style.color = "#ffffff"; }}
              onMouseOut={(e) => { (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(255,255,255,0.15)"; (e.currentTarget as HTMLButtonElement).style.color = "rgba(255,255,255,0.6)"; }}
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              onClick={next}
              aria-label="Next service"
              className="flex items-center justify-center w-10 h-10 rounded transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
              style={{ border: "1px solid rgba(255,255,255,0.15)", color: "rgba(255,255,255,0.6)" }}
              onMouseOver={(e) => { (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(255,255,255,0.4)"; (e.currentTarget as HTMLButtonElement).style.color = "#ffffff"; }}
              onMouseOut={(e) => { (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(255,255,255,0.15)"; (e.currentTarget as HTMLButtonElement).style.color = "rgba(255,255,255,0.6)"; }}
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
});

export default ServiceSpotlight;
