'use client';

import { useState, memo } from "react";
import Link from "next/link";
import { CheckCircle, ArrowRight } from "lucide-react";
import { useReveal } from "@/hooks/use-intersection-observer";
import ServiceSpotlight from "@/components/service-spotlight";
import Image from "next/image";
import strategicThinkingImage from "@assets/50_1760470599806.webp";
import networkImage from "@assets/46_1760470581285.webp";
import type { Engagement } from "@/lib/engagements";
import { engagements as fallbackEngagements } from "@/lib/engagements";
import {
  AmpButton,
  BorderGrid,
  BorderCell,
  Container,
  ContentCard,
  CtaBand,
  Eyebrow,
  Grid,
  PageShell,
  Section,
  Stack,
  Surface,
  Text,
} from "@/components/system";

interface HomeProps {
  onOpenConsultation: (serviceType?: string) => void;
  engagements?: Engagement[];
}

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

const Home = memo(function Home({ onOpenConsultation, engagements: engagementsProp }: HomeProps) {
  const engagements = engagementsProp ?? fallbackEngagements;
  const heroEngagements = engagements.map((eng) => ({
    name: eng.name,
    duration: eng.duration,
    slug: eng.slug,
    outcome: eng.oneLineOutcome || eng.outcome,
  }));
  const workCards = engagements.map((eng) => ({
    slug: eng.slug,
    duration: eng.duration,
    title: eng.name,
    body: eng.oneLineOutcome || eng.outcome,
  }));
  const [heroRef, heroVisible] = useReveal(0.05);
  const [tensionRef, tensionVisible] = useReveal();
  const [ampRef, ampVisible] = useReveal();
  const [sectorRef, sectorVisible] = useReveal();
  const [statsRef, statsVisible] = useReveal();
  const [insightsRef, insightsVisible] = useReveal();
  const [teamRef, teamVisible] = useReveal();
  const [ctaRef, ctaVisible] = useReveal();


  return (
    <PageShell>
      {/* SECTION 1: HERO */}
      <section
        ref={heroRef}
        className="relative flex min-h-screen items-center overflow-hidden bg-[#181F4F]"
      >
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at 80% 20%, rgba(96, 38, 106, 0.15) 0%, transparent 60%)",
          }}
        />
        <Container className="relative z-10 w-full py-24 lg:py-32">
          <Grid cols="5-hero" gap="xl" equal={false} className="items-center">
            <Stack
              gap="xl"
              className="lg:col-span-3"
              style={{
                opacity: heroVisible ? 1 : 0,
                transform: heroVisible ? "translateY(0)" : "translateY(24px)",
                transition: "opacity 0.7s ease, transform 0.7s ease",
              }}
            >
              <Eyebrow>A productised digital consultancy</Eyebrow>
              <Text variant="display" tone="white">
                Rigour for serious change, in the work and in the room.
              </Text>
              <Text variant="lead" tone="white-80" className="max-w-[560px]">
                We partner with leaders accountable for AI, delivery, and the change that has to land in front of a board.
              </Text>
              <Stack direction="row-responsive" gap="md" align="start" className="pt-2">
                <AmpButton asChild data-testid="button-hero-see-how-we-work">
                  <a href="#how-we-work">
                    See how we work <ArrowRight className="h-4 w-4" />
                  </a>
                </AmpButton>
                <AmpButton asChild variant="outlineLight" data-testid="button-hero-talk-to-us">
                  <Link href="/contact">Talk to us</Link>
                </AmpButton>
              </Stack>
            </Stack>

            <div
              className="min-w-0 lg:col-span-2"
              style={{
                opacity: heroVisible ? 1 : 0,
                transform: heroVisible ? "translateY(0)" : "translateY(24px)",
                transition: "opacity 0.7s ease 0.2s, transform 0.7s ease 0.2s",
              }}
            >
              <Surface variant="inset" padding="md" radius="md" className="h-full">
                <Eyebrow tone="white-45" className="mb-5">
                  Three productised engagements
                </Eyebrow>
                <ul className="min-w-0 space-y-0">
                  {heroEngagements.map((eng) => (
                    <li key={eng.slug} className="min-w-0">
                      <Link
                        href={`/engagements/${eng.slug}`}
                        className="amp-focus-ring-on-navy group block border-t border-white/10 py-4"
                        data-testid={`link-hero-engagement-${eng.slug}`}
                      >
                        <Stack direction="row" justify="between" align="baseline" gap="md">
                          <Text
                            as="span"
                            variant="h4"
                            tone="white"
                            className="text-xl transition-colors duration-200 group-hover:text-[#F85C70]"
                          >
                            {eng.name}
                          </Text>
                          <Text as="span" variant="eyebrow" tone="white-45" className="shrink-0">
                            {eng.duration}
                          </Text>
                        </Stack>
                        <Text variant="small" tone="white-70" clamp={2} className="mt-2">
                          {eng.outcome}
                        </Text>
                      </Link>
                    </li>
                  ))}
                </ul>
              </Surface>
            </div>
          </Grid>
        </Container>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-[#F85C70]/40" />
      </section>

      {/* SECTION 1b: PROOF STRIP */}
      <Section
        aria-label="Credentials and reach"
        tone="white"
        padding="sm"
        className="border-b border-[#E5E3EE]"
      >
        <Eyebrow tone="subtle" className="mb-6">
          Built for industries where rigour is not optional
        </Eyebrow>
        <dl className="amp-border-grid grid grid-cols-2 lg:grid-cols-4" data-testid="list-home-proof-strip">
          {proofPoints.map((p) => (
            <div key={p.label} className="amp-border-cell amp-equal-card p-6 lg:p-7">
              <dt>
                <Text variant="h3" className="mb-3 text-2xl lg:text-3xl" clamp={2}>
                  {p.metric}
                </Text>
              </dt>
              <dd className="min-w-0 flex-1">
                <Text variant="small" className="mb-1.5 font-semibold" clamp={2}>
                  {p.label}
                </Text>
                <Text variant="caption" tone="muted" clamp={3}>
                  {p.detail}
                </Text>
              </dd>
            </div>
          ))}
        </dl>
      </Section>

      {/* SECTION 2: HOW WE WORK WITH YOU */}
      <Section id="how-we-work" tone="mist" padding="lg">
        <Stack gap="md" className="mb-14 max-w-[820px]">
          <Eyebrow>How we work with you</Eyebrow>
          <Text variant="h2">
            Three engagements. Each one named, scoped, and designed to leave your organisation with something concrete in hand.
          </Text>
          <Text variant="lead" tone="muted">
            An operating model, an evidence pack, a governance roadmap. Not a slide deck nobody opens again.
          </Text>
        </Stack>

        <Grid cols={3} gap="none" className="amp-border-grid">
          {workCards.map((card) => (
            <Link
              href={`/engagements/${card.slug}`}
              key={card.slug}
              className="amp-focus-ring-on-light block h-full min-w-0"
            >
              <Surface
                as="article"
                variant="panel"
                padding="lg"
                className="amp-border-cell amp-equal-card transition-colors duration-200 hover:bg-[#FAF9FD]"
                data-testid={`card-how-we-work-${card.slug}`}
              >
                <Eyebrow className="mb-3">{card.duration}</Eyebrow>
                <Text variant="h3" className="mb-5" clamp={2}>
                  {card.title}
                </Text>
                <Text variant="body" tone="muted" clamp={5} className="flex-1">
                  {card.body}
                </Text>
                <span className="mt-8 inline-flex items-center gap-2 font-sans text-sm font-semibold text-[#F85C70]">
                  See full engagement <ArrowRight className="h-3 w-3 shrink-0" />
                </span>
              </Surface>
            </Link>
          ))}
        </Grid>
      </Section>

      {/* SECTION 2b: WHO WE WORK WITH */}
      <Section tone="white" padding="lg">
        <Stack
          direction="row-responsive"
          justify="between"
          align="end"
          gap="lg"
          className="mb-12 flex-wrap"
        >
          <Stack gap="sm" className="max-w-[640px]">
            <Eyebrow>Who we work with</Eyebrow>
            <Text variant="h2">
              Real engagements.
              <br />
              Named outcomes.
            </Text>
          </Stack>
          <Link
            href="/case-studies"
            className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.12em] text-[#F85C70] transition-all hover:gap-3"
          >
            See all case studies <ArrowRight className="h-3 w-3 shrink-0" />
          </Link>
        </Stack>

        <Grid cols={3} gap="none" className="amp-border-grid">
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
              className="amp-focus-ring-on-light block h-full min-w-0"
            >
              <Surface
                as="article"
                variant="plain"
                padding="lg"
                className="amp-border-cell amp-equal-card transition-colors duration-200 hover:bg-[#F2F0F7]"
                data-testid={`card-home-case-${c.id}`}
              >
                <Eyebrow className="mb-3">{c.sector}</Eyebrow>
                <Text variant="h4" className="mb-8 text-xl" clamp={2}>
                  {c.client}
                </Text>
                <Stack gap="md" className="flex-1">
                  <div>
                    <Eyebrow tone="subtle" className="mb-2">Situation</Eyebrow>
                    <Text variant="small" tone="muted" clamp={4}>{c.situation}</Text>
                  </div>
                  <div>
                    <Eyebrow tone="subtle" className="mb-2">What we did</Eyebrow>
                    <Text variant="small" tone="muted" clamp={4}>{c.action}</Text>
                  </div>
                  <div>
                    <Eyebrow tone="subtle" className="mb-2">Outcome</Eyebrow>
                    <Text variant="small" className="font-medium" clamp={4}>{c.outcome}</Text>
                  </div>
                </Stack>
                <span className="mt-8 inline-flex items-center gap-2 font-sans text-xs font-semibold text-[#F85C70]">
                  Read the case study <ArrowRight className="h-3 w-3 shrink-0" />
                </span>
              </Surface>
            </Link>
          ))}
        </Grid>
      </Section>

      {/* SECTION 3: CREDIBILITY BAR */}
      <Section
        tone="white"
        padding="none"
        className="border-y border-[#E5E3EE]"
      >
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 py-5">
          {[
            "10+ Years Delivery Leadership",
            "Cross-Sector Delivery Experience",
            "AI Governance Specialists",
            "Structured Agile Practitioners",
          ].map((item, i) => (
            <Text
              key={i}
              as="span"
              variant="caption"
              tone="subtle"
              className="whitespace-nowrap uppercase tracking-[0.12em]"
            >
              {i > 0 && <span className="mr-8 text-[#E5E3EE]">·</span>}
              {item}
            </Text>
          ))}
        </div>
      </Section>

      {/* SECTION 3: THE TENSION */}
      <Section
        ref={tensionRef}
        tone="mist"
        padding="xl"
        className="border-t border-[#DDD9EA]"
      >
        <Grid
          cols="2-lg"
          gap="xl"
          equal={false}
          className="items-center"
          style={{
            opacity: tensionVisible ? 1 : 0,
            transform: tensionVisible ? "translateY(0)" : "translateY(24px)",
            transition: "opacity 0.6s ease, transform 0.6s ease",
          }}
        >
          <Stack gap="md">
            <Text variant="h2" className="mb-2">
              &ldquo;Most technology consultancies were built for companies like theirs.
              <br />
              Not yours.&rdquo;
            </Text>
            <Text variant="lead" tone="muted">
              Your organisation runs on process, auditability, and governance. Agile
              transformations often ignore that. Technology implementations frequently make it worse.
            </Text>
            <Text variant="lead" tone="muted">
              Amplified bridges the gap, embedding new technologies and delivering structured change
              that respects the way your industry actually works.
            </Text>
            <Link
              href="/how-we-work"
              className="mt-4 inline-flex items-center gap-2 font-sans text-sm font-semibold text-[#F85C70] transition-all duration-200 hover:gap-3"
            >
              See how we work <ArrowRight className="h-4 w-4" />
            </Link>
          </Stack>
          <div className="relative">
            <div className="relative h-80 w-full overflow-hidden rounded-2xl">
              <Image
                src={strategicThinkingImage}
                alt="Strategic thinking and governance"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
                loading="lazy"
              />
            </div>
            <div className="absolute -bottom-4 -left-4 h-32 w-32 overflow-hidden rounded-xl border-4 border-white shadow-lg">
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
        </Grid>
      </Section>

      {/* SECTION 4: AMP MODEL */}
      <Section id="services" ref={ampRef} tone="white" padding="lg">
        <Stack
          gap="sm"
          className="mb-16"
          style={{
            opacity: ampVisible ? 1 : 0,
            transform: ampVisible ? "translateY(0)" : "translateY(24px)",
            transition: "opacity 0.6s ease, transform 0.6s ease",
          }}
        >
          <Eyebrow tone="subtle">How We Work</Eyebrow>
          <Text variant="h2">We Have an Amp for That</Text>
        </Stack>

        <BorderGrid cols={3} className="border-l border-t border-[#C8C4D8]">
          {ampCards.map((card, i) => (
            <AmpCard key={card.tag} card={card} index={i} visible={ampVisible} />
          ))}
        </BorderGrid>
      </Section>

      {/* SERVICE SPOTLIGHT */}
      <ServiceSpotlight onOpenConsultation={onOpenConsultation} />

      {/* THE AMP MODEL BAND */}
      <Section tone="mist" padding="md" className="border-t border-[#DDD9EA]">
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-4">
          <Stack gap="xs" className="lg:col-span-1">
            <Eyebrow>Our Methodology</Eyebrow>
            <Text variant="h4" className="font-semibold">The Amp Model</Text>
          </Stack>
          <div className="flex items-center gap-0 lg:col-span-2">
            {[
              { label: "Assess", desc: "Understand your current state" },
              { label: "Implement", desc: "Build it with you, not for you" },
              { label: "Amplify", desc: "Embed capability, exit with confidence" },
            ].map((phase, i) => (
              <div key={phase.label} className="flex flex-1 items-center">
                <Surface
                  variant="plain"
                  padding="sm"
                  radius="lg"
                  border="hairline"
                  className="flex-1 border-[#DDD9EA] bg-white text-center"
                >
                  <Text variant="small" className="font-semibold">{phase.label}</Text>
                  <Text variant="caption" tone="muted" className="mt-0.5">{phase.desc}</Text>
                </Surface>
                {i < 2 && (
                  <span className="flex-shrink-0 px-1 text-base text-[#C8C4D8]">→</span>
                )}
              </div>
            ))}
          </div>
          <div className="lg:col-span-1 lg:text-right">
            <Link
              href="/how-we-work"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#60266A] transition-all duration-200 hover:gap-3"
            >
              See how it works <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </Section>

      {/* SECTION 5: WHERE WE WORK */}
      <Section
        ref={sectorRef}
        tone="white"
        padding="lg"
        className="border-t border-[#E5E3EE]"
      >
        <Stack
          gap="md"
          style={{
            opacity: sectorVisible ? 1 : 0,
            transform: sectorVisible ? "translateY(0)" : "translateY(24px)",
            transition: "opacity 0.6s ease, transform 0.6s ease",
          }}
        >
          <Eyebrow tone="subtle">Where we work</Eyebrow>
          <Text variant="h2" className="max-w-[820px]">
            Built for organisations that cannot afford to guess.
          </Text>
          <Text variant="lead" tone="muted" className="mb-4 max-w-[760px]">
            We work across sectors and stages, wherever delivery is complex, accountability is real,
            and the cost of getting it wrong is measured in more than a missed deadline. The
            frameworks adapt to your context. The rigour does not.
          </Text>
          <div className="flex flex-wrap gap-x-8 gap-y-4 border-t border-[#E5E3EE] pt-6">
            {sectorLinks.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="amp-focus-ring-on-light inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.12em] text-[#F85C70] transition-all hover:gap-3"
              >
                {s.label} <ArrowRight className="h-3 w-3" />
              </Link>
            ))}
          </div>
        </Stack>
      </Section>

      {/* SECTION 6: STATS BAR */}
      <Section ref={statsRef} tone="navy" padding="xl">
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
              className={`px-8 text-center ${i > 0 ? "border-l border-white/10" : ""}`}
            >
              <Text
                as="div"
                variant="display"
                tone="coral"
                className="mb-3 text-6xl lg:text-7xl"
              >
                {item.stat}
              </Text>
              <Text variant="small" tone="white-80">
                {item.label}
              </Text>
            </div>
          ))}
        </div>
      </Section>

      {/* SECTION 7: INSIGHTS PREVIEW */}
      <Section
        ref={insightsRef}
        tone="white"
        padding="lg"
        className="border-t border-[#E5E3EE]"
      >
        <Stack
          gap="xl"
          style={{
            opacity: insightsVisible ? 1 : 0,
            transform: insightsVisible ? "translateY(0)" : "translateY(24px)",
            transition: "opacity 0.6s ease, transform 0.6s ease",
          }}
        >
          <Stack gap="sm">
            <Eyebrow tone="subtle">Insights</Eyebrow>
            <Text variant="h2">Practical thinking for delivery-led organisations</Text>
          </Stack>

          <Grid cols={3} gap="lg">
            {insightCards.map((card) => (
              <Link key={card.title} href={card.href} className="group block h-full min-w-0">
                <ContentCard
                  variant="mist"
                  radius="md"
                  className="cursor-pointer transition-all duration-300"
                  eyebrow={
                    <span className="inline-flex items-center gap-4">
                      <span>{card.tag}</span>
                      <Text as="span" variant="caption" tone="subtle">
                        · {card.readTime}
                      </Text>
                    </span>
                  }
                  title={
                    <span className="transition-opacity group-hover:opacity-80">{card.title}</span>
                  }
                  description={card.body}
                  titleClamp={3}
                  descriptionClamp={5}
                  footer={
                    <span className="inline-flex items-center gap-2 font-sans text-sm font-medium text-[#F85C70] transition-all duration-200 group-hover:gap-3">
                      Read more <ArrowRight className="h-3 w-3" />
                    </span>
                  }
                />
              </Link>
            ))}
          </Grid>
        </Stack>
      </Section>

      {/* SECTION 7B: AMPLIFIED ECOSYSTEM */}
      <Section tone="mist" padding="xl" className="border-t border-[#DDD9EA]">
        <Stack gap="sm" className="mb-16 max-w-[640px]">
          <Eyebrow tone="subtle">The Amplified Ecosystem</Eyebrow>
          <Text variant="h2">Consulting is only part of the picture</Text>
          <Text variant="lead" tone="muted">
            Alongside our six consulting service lines, we bring two specialist capabilities that extend what
            we can do for your organisation from day one.
          </Text>
        </Stack>

        <BorderGrid cols="2-lg" className="border-l border-t border-[#C8C4D8]">
          <BorderCell className="p-10">
            <Eyebrow className="mb-6">AmplifiedTeams</Eyebrow>
            <Text variant="h3" className="mb-4">
              Stable Teams&trade; Framework
            </Text>
            <Text variant="body" tone="muted" className="mb-8">
              AmplifiedTeams delivers the Stable Teams framework, a structured approach to rebaselining
              teams and operations so they achieve sustained high performance. Not a recruitment solution.
              A framework for getting the team you already have to perform at the level you need.
            </Text>
            <ul className="mb-8 space-y-3">
              {[
                "Structured diagnostic across five dimensions of team stability",
                "Rebaselining of roles, accountability, and ways of working",
                "Embedded operating rhythms and delivery cadences that hold",
                "High-performance conditions built in, not bolted on",
                "Outcomes that outlast the engagement",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#181F4F]" />
                  <Text as="span" variant="small" tone="muted">{item}</Text>
                </li>
              ))}
            </ul>
            <a
              href="https://amplifiedteams.co.uk"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#F85C70] transition-all duration-200 hover:gap-3"
            >
              Visit AmplifiedTeams <ArrowRight className="h-3 w-3" />
            </a>
          </BorderCell>

          <BorderCell className="p-10">
            <Eyebrow className="mb-6">ampStore</Eyebrow>
            <Text variant="h3" className="mb-4">
              Capability Through Practice
            </Text>
            <Text variant="body" tone="muted" className="mb-8">
              Learning that sticks. The ampStore is our curated capability catalogue, structured
              learning experiences, tools, and frameworks your teams can use immediately. Built for
              practitioners, not classrooms.
            </Text>
            <ul className="mb-8 space-y-3">
              {[
                "Curated modules aligned to each AMP service line",
                "AI literacy, governance, agile and delivery fundamentals",
                "Self-paced and cohort formats",
                "Assessments that benchmark where your team actually is",
                "Paired with live coaching for accelerated adoption",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#181F4F]" />
                  <Text as="span" variant="small" tone="muted">{item}</Text>
                </li>
              ))}
            </ul>
            <Link
              href="/amp-store"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#60266A] transition-all duration-200 hover:gap-3"
            >
              Explore the ampStore <ArrowRight className="h-3 w-3" />
            </Link>
          </BorderCell>
        </BorderGrid>
      </Section>

      {/* SECTION 8: MEET THE PARTNERSHIP */}
      <Section
        ref={teamRef}
        tone="navy"
        padding="xl"
        className="border-t border-white/10"
      >
        <Grid
          cols="2-lg"
          gap="xl"
          equal={false}
          className="items-center gap-y-20 lg:gap-x-20"
          style={{
            opacity: teamVisible ? 1 : 0,
            transform: teamVisible ? "translateY(0)" : "translateY(24px)",
            transition: "opacity 0.6s ease, transform 0.6s ease",
          }}
        >
          <Stack gap="lg">
            <Eyebrow>The Partnership</Eyebrow>
            <Text variant="h2" tone="white">
              Every walk of life.<br />One standard of rigour.
            </Text>
            <Text variant="lead" tone="white-80">
              We are not a silver bullet, and neither are our people. A partnership of seasoned
              practitioners who come from every kind of background, united by deep experience inside
              the industries we serve and a refusal to apply off-the-shelf thinking to complex problems.
            </Text>
            <Link
              href="/about/team"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#F85C70] transition-all duration-200 hover:gap-3"
            >
              Meet the partnership <ArrowRight className="h-4 w-4" />
            </Link>
          </Stack>

          <Stack gap="md">
            {[
              { initial: "A", role: "Operations & Governance Partner", focus: "AMP 01 / AMP 03" },
              { initial: "B", role: "Technology & AI Partner", focus: "AMP 02" },
              { initial: "C", role: "Structured Delivery Partner", focus: "AMP 03" },
              { initial: "D", role: "Capability & Change Partner", focus: "AMP 04" },
            ].map((p) => (
              <Link href="/about/team" key={p.initial} className="group block">
                <div className="flex cursor-pointer items-center gap-5 rounded-lg border border-white/10 px-6 py-4 transition-all duration-200 hover:border-[#F85C70]/45 hover:bg-white/[0.04]">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border border-white/10 text-sm font-bold text-white/80">
                    {p.initial}
                  </div>
                  <div className="min-w-0 flex-1">
                    <Text variant="small" tone="white-80" className="font-medium">
                      {p.role}
                    </Text>
                    <Text as="p" variant="mono" tone="white-45" className="mt-0.5">
                      {p.focus}
                    </Text>
                  </div>
                  <ArrowRight className="h-4 w-4 flex-shrink-0 text-[#F85C70] opacity-0 transition-opacity group-hover:opacity-100" />
                </div>
              </Link>
            ))}
          </Stack>
        </Grid>
      </Section>

      {/* SECTION 8b: WHY AMPLIFIED */}
      <Section tone="mist" padding="lg" className="border-t border-[#DDD9EA]">
        <Grid cols="12" gap="xl" equal={false}>
          <Stack gap="sm" className="lg:col-span-4">
            <Eyebrow>Why Amplified</Eyebrow>
            <Text variant="h2">Smaller, more senior, and more practical.</Text>
          </Stack>
          <Stack gap="lg" className="lg:col-span-7 lg:col-start-6">
            <Text variant="lead" tone="muted">
              We are smaller and more senior than the Big Four firms, more methodology-led
              than the build shops, and more practical than the strategy houses. Every
              engagement is led by someone with seventeen years or more of delivery experience
              in complex change. The team supporting them is small enough that you will know
              everyone&apos;s name by the end of week one.
            </Text>
            <Text variant="lead" tone="muted">
              We do not do generic transformation, capability uplift, or staff augmentation
              under the Amplified brand. We do three things, well, for a specific kind of
              buyer. Where genuine delivery capacity is what is needed, we run that through
              AmplifiedTeams as a deliberately separate offering, with a different commercial
              model and a different team.
            </Text>
            <div className="pt-4">
              <AmpButton asChild data-testid="button-why-amplified-talk">
                <Link href="/contact">
                  Talk to us <ArrowRight className="h-4 w-4" />
                </Link>
              </AmpButton>
            </div>
          </Stack>
        </Grid>
      </Section>

      {/* SECTION 9: CTA */}
      <div
        ref={ctaRef}
        style={{
          opacity: ctaVisible ? 1 : 0,
          transform: ctaVisible ? "translateY(0)" : "translateY(24px)",
          transition: "opacity 0.6s ease, transform 0.6s ease",
        }}
      >
        <CtaBand
          tone="purple"
          title="Ready to Amp Up?"
          lead="Whether you're starting an AI strategy or untangling a delivery model, we'll give you a straight answer on where to begin."
          className="py-28 lg:py-36"
        >
          <AmpButton asChild data-testid="button-final-cta-conversation">
            <Link href="/contact">
              Start a Conversation <ArrowRight className="h-4 w-4" />
            </Link>
          </AmpButton>
          <Text variant="small" tone="white-45">
            No pitch. No deck. Just a 30-minute call.
          </Text>
        </CtaBand>
      </div>
    </PageShell>

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
  return (
    <Link href={card.href} className="block h-full min-w-0">
      <Surface
        variant="mist"
        padding="lg"
        className="amp-border-cell amp-equal-card border-t border-[#C8C4D8] transition-[background-color,border-top-color,opacity] duration-300 hover:border-t-[#F85C70] hover:bg-white"
        style={{
          opacity: visible ? 1 : 0,
          transitionDelay: `${index * 0.08}s`,
        }}
      >
        <Eyebrow className="mb-4">{card.tag}</Eyebrow>
        <Text variant="h3" className="mb-2 text-2xl" clamp={2}>
          {card.title}
        </Text>
        <Text variant="small" className="mb-4 font-medium text-[#60266A]" clamp={2}>
          {card.subtitle}
        </Text>
        <Text variant="small" tone="muted" clamp={4} className="mb-6 flex-1">
          {card.body}
        </Text>
        <ul className="mb-6 min-w-0 space-y-1.5">
          {card.bullets.map((b) => (
            <li key={b} className="flex min-w-0 items-start gap-2 text-xs text-[#6B6E81]">
              <span className="shrink-0 text-[#F85C70]">·</span>
              <span className="amp-text-safe min-w-0">{b}</span>
            </li>
          ))}
        </ul>
        <span className="inline-flex items-center gap-1 font-sans text-sm font-medium text-[#F85C70] transition-colors group-hover:text-[#60266A]">
          Learn more about {card.title} <ArrowRight className="h-3 w-3 shrink-0" />
        </span>
      </Surface>
    </Link>
  );
}

export default Home;
