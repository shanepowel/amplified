'use client';

import { useState, useEffect, useRef, useCallback, memo } from "react";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { AmpButton, Container, Eyebrow, Text } from "@/components/system";

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
      className="bg-[#181F4F] py-0"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      aria-label="Service Spotlight"
    >
      {/* Tab navigation */}
      <div className="overflow-x-auto border-b border-white/[0.08]">
        <Container className="flex !px-4 sm:!px-6 lg:!px-8">
          {services.map((s, i) => (
            <button
              key={s.tag}
              onClick={() => goTo(i, i > active ? "next" : "prev")}
              className={`relative flex flex-shrink-0 flex-col items-center px-5 py-5 transition-colors duration-200 focus:outline-none ${
                active === i ? "text-[#F85C70]" : "text-white/40"
              }`}
              aria-pressed={active === i}
              aria-label={`${s.tag} ${s.title}`}
            >
              <span className="mb-0.5 font-mono text-xs tracking-[0.12em]">{s.tag}</span>
              <span
                className={`hidden font-sans text-xs font-semibold sm:block ${
                  active === i ? "text-white" : "text-white/40"
                }`}
              >
                {s.title}
              </span>
              {active === i && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 rounded-t bg-[#F85C70]" />
              )}
            </button>
          ))}
        </Container>
      </div>

      {/* Spotlight panel */}
      <Container className="py-16 lg:py-20">
        <div
          style={{
            opacity: animating ? 0 : 1,
            transform: animating
              ? `translateX(${direction === "next" ? "20px" : "-20px"})`
              : "translateX(0)",
            transition: "opacity 0.22s ease, transform 0.22s ease",
          }}
        >
          <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-12 lg:gap-16">
            {/* Left: tag + title */}
            <div className="lg:col-span-4">
              <div className="mb-6">
                <span
                  className="font-mono text-5xl font-light tracking-tight text-white/[0.08] md:text-6xl"
                  aria-hidden="true"
                >
                  {current.tag.replace("AMP ", "")}
                </span>
              </div>
              <Eyebrow className="mb-3">{current.tag}</Eyebrow>
              <Text variant="h3" tone="white" className="mb-3">
                {current.title}
              </Text>
              <Text variant="small" className="mb-8 text-white/50">
                {current.subtitle}
              </Text>
              <div className="flex flex-wrap gap-3">
                <AmpButton asChild size="md" className="!h-10 !px-6 !text-sm">
                  <Link href={current.href}>
                    Learn more about {current.title} <ArrowRight className="h-4 w-4" />
                  </Link>
                </AmpButton>
                <AmpButton
                  size="md"
                  variant="outlineLight"
                  className="!h-10 !border-white/20 !px-6 !text-sm !font-semibold !text-white/80 hover:!border-white/40 hover:!bg-white/[0.06]"
                  onClick={() => onOpenConsultation(current.tag.toLowerCase().replace(" ", "-"))}
                >
                  Discuss this
                </AmpButton>
              </div>
            </div>

            {/* Right: description + bullets */}
            <div className="lg:col-span-8">
              <Text variant="body" tone="white-75" className="mb-4">
                {current.body}
              </Text>
              <Text variant="small" className="mb-8 text-white/50">
                {current.extended}
              </Text>
              <div className="rounded border border-white/[0.08] bg-white/[0.04] p-6">
                <Eyebrow className="mb-4">What this includes</Eyebrow>
                <ul className="space-y-3">
                  {current.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-3">
                      <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#F85C70]" />
                      <Text variant="small" tone="white-70">
                        {b}
                      </Text>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Progress bar + nav */}
        <div className="mt-12 flex items-center justify-between border-t border-white/[0.08] pt-8">
          {/* Progress dots */}
          <div className="flex items-center gap-2">
            {services.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i, i > active ? "next" : "prev")}
                aria-label={`Go to ${services[i].tag}`}
                className={`h-1.5 rounded-full transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-white ${
                  active === i ? "w-6 bg-[#F85C70]" : "w-1.5 bg-white/20"
                }`}
              />
            ))}
          </div>

          {/* Arrow navigation */}
          <div className="flex items-center gap-2">
            <button
              onClick={prev}
              aria-label="Previous service"
              className="flex h-10 w-10 items-center justify-center rounded border border-white/15 text-white/60 transition-colors duration-200 hover:border-white/40 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              onClick={next}
              aria-label="Next service"
              className="flex h-10 w-10 items-center justify-center rounded border border-white/15 text-white/60 transition-colors duration-200 hover:border-white/40 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
});

export default ServiceSpotlight;
