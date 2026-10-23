'use client';

import { memo } from "react";
import Link from "next/link";
import { ArrowRight, ArrowLeft, CheckCircle } from "lucide-react";
import {
  AmpButton,
  BorderCell,
  BorderGrid,
  Container,
  Eyebrow,
  Grid,
  PageShell,
  Section,
  Stack,
  Surface,
  Text,
} from "@/components/system";

interface AboutMethodologyProps {
  onOpenConsultation: (serviceType?: string) => void;
}

const phases = [
  {
    number: "01",
    label: "Assess",
    title: "We start by understanding what is actually there.",
    body: "Before any implementation, governance framework, or delivery model is designed, we conduct a structured assessment of your current state. No assumptions. No templates. A genuine audit of where you are and what you need.",
    outputs: [
      "AI Readiness Report with clear gap analysis and sequenced recommendations",
      "Governance Maturity Assessment mapped against your sector's regulatory standards",
      "Delivery Capability Review covering your operating model, PMO, and team structure",
      "Realistic, constraint-aware roadmap that reflects your organisation, not an ideal one",
    ],
    duration: "2 to 4 weeks",
    accentClass: "bg-[#181F4F]",
    eyebrowClass: "text-[#181F4F]",
  },
  {
    number: "02",
    label: "Implement",
    title: "We build it with you, not for you.",
    body: "Amplified practitioners embed inside your teams. We do not parachute in, hand over a report, and leave. We deliver alongside your people, inside your accountability structures, producing outputs that work in your governance environment.",
    outputs: [
      "AI capability, governance framework, or operating model, fully built and tested",
      "Custom software, platform, or AI system delivered to production",
      "Squad or agile model configured for your sector and governance requirements",
      "Integration with your existing PMO, programme governance, and assurance frameworks",
      "Weekly check-ins, sprint reviews, and reporting in formats your board recognises",
    ],
    duration: "Engagement-dependent",
    accentClass: "bg-[#60266A]",
    eyebrowClass: "text-[#60266A]",
  },
  {
    number: "03",
    label: "Amplify",
    title: "We build the capability so you don't need us again.",
    body: "The measure of a good engagement is whether your teams can run it without us twelve months later. Every implementation phase includes a structured capability transfer programme. Coaching. Documentation. Centres of Excellence. The things that make the change stick.",
    outputs: [
      "Internal capability programme tailored to your team's current skills and gaps",
      "Centre of Excellence design, governance model, and initial setup",
      "Coaching programme for delivery leads, practitioners, and leadership",
      "Knowledge transfer documentation your team will actually use and maintain",
      "3-month post-engagement check-in to review adoption and address drift",
    ],
    duration: "Ongoing through implementation",
    accentClass: "bg-[#F85C70]",
    eyebrowClass: "text-[#F85C70]",
  },
];

const principles = [
  {
    title: "Governance first",
    desc: "We design the governance structure before any implementation begins. Every other sequence creates risk.",
  },
  {
    title: "Embedded delivery",
    desc: "We work inside your teams, not alongside them. The difference matters to the quality of what gets built.",
  },
  {
    title: "Capability transfer",
    desc: "Every engagement ends with your teams stronger than they started. We build capacity, not dependency.",
  },
  {
    title: "Sector rigour",
    desc: "We know the regulatory environments, the governance pressures, and the accountability structures our clients operate in.",
  },
  {
    title: "Honest sequencing",
    desc: "We tell you what needs to happen first, even when that is not what you hoped to hear.",
  },
  {
    title: "Measurable outputs",
    desc: "Every phase ends with defined, documented outputs. You always know what you got.",
  },
];

const AboutMethodology = memo(function AboutMethodology({ onOpenConsultation }: AboutMethodologyProps) {
  return (
    <PageShell className="bg-[#FAFAF9]">
      <Section tone="navy" padding="hero" className="pt-40 pb-28">
        <Link href="/how-we-work">
          <span className="mb-12 inline-flex cursor-pointer items-center gap-2 text-sm text-white/45">
            <ArrowLeft className="h-4 w-4" />
            Back to How We Work
          </span>
        </Link>

        <Stack gap="lg" className="max-w-[920px]">
          <Eyebrow>The Amp Model</Eyebrow>
          <Text variant="h1" tone="white" className="font-semibold leading-tight">
            Assess.
            <br />
            Implement.
            <br />
            Amplify.
          </Text>
          <Text variant="lead" tone="white-70" className="max-w-[560px]">
            Three phases. Clear outputs at every stage. A structured approach to embedding new
            technologies, from AI to platform modernisation, and building the capability to sustain them
            in organisations where governance is not optional.
          </Text>

          <div className="mt-14 flex flex-wrap items-center gap-4">
            {["Assess", "Implement", "Amplify"].map((phase, i) => (
              <div key={phase} className="flex items-center gap-4">
                <div
                  className={
                    i === 1
                      ? "rounded bg-[#F85C70] px-6 py-3 text-sm font-semibold text-white"
                      : "rounded border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white/80"
                  }
                >
                  {phase}
                </div>
                {i < 2 ? (
                  <span className="text-base font-bold text-[#F85C70]">→</span>
                ) : null}
              </div>
            ))}
          </div>
        </Stack>
      </Section>

      <Section tone="white" padding="none" contained={false}>
        {phases.map((phase) => (
          <div key={phase.label} className="border-b border-[#E8E4F0]">
            <Container>
              <Grid cols="12" gap="xl" className="py-20 lg:py-24">
                <div className="flex lg:col-span-1 lg:flex-col lg:items-center lg:pt-1">
                  <div
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-sm font-bold text-white ${phase.accentClass}`}
                  >
                    {phase.number}
                  </div>
                </div>

                <Stack gap="md" className="lg:col-span-5">
                  <Eyebrow className={phase.eyebrowClass}>
                    {phase.label}
                  </Eyebrow>
                  <Text variant="h2" tone="ink" className="font-semibold">
                    {phase.title}
                  </Text>
                  <Text variant="body" tone="muted">
                    {phase.body}
                  </Text>
                  {phase.duration ? (
                    <Text variant="mono" className="text-[#60266A]">
                      Typical duration: {phase.duration}
                    </Text>
                  ) : null}
                </Stack>

                <div className="lg:col-span-6">
                  <Surface variant="mist" padding="lg" radius="md">
                    <Eyebrow className="mb-5 text-[#60266A]">What you get</Eyebrow>
                    <ul className="space-y-4">
                      {phase.outputs.map((output) => (
                        <li key={output} className="flex items-start gap-3">
                          <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-[#F85C70]" />
                          <Text as="span" variant="small" tone="muted">
                            {output}
                          </Text>
                        </li>
                      ))}
                    </ul>
                  </Surface>
                </div>
              </Grid>
            </Container>
          </div>
        ))}
      </Section>

      <Section tone="mist" padding="lg">
        <Stack gap="lg" className="mb-16">
          <Eyebrow>How we operate</Eyebrow>
          <Text variant="h2" tone="ink" className="font-semibold">
            The principles behind
            <br />
            every engagement.
          </Text>
        </Stack>

        <BorderGrid cols={3} className="gap-px bg-[#DDD9EA]">
          {principles.map((p, i) => (
            <BorderCell key={i} className="bg-[#F2F0F7] p-10">
              <div className="mb-5 h-px w-6 bg-[#F85C70]" />
              <Text variant="body" tone="ink" className="mb-3 font-semibold">
                {p.title}
              </Text>
              <Text variant="small" tone="muted">
                {p.desc}
              </Text>
            </BorderCell>
          ))}
        </BorderGrid>
      </Section>

      <Section tone="white" padding="lg">
        <Grid cols={2} gap="xl" className="items-start lg:grid-cols-2">
          <Stack gap="md">
            <Eyebrow>The full scope</Eyebrow>
            <Text variant="h2" tone="ink" className="font-semibold">
              We cover everything from strategy to code.
            </Text>
            <Text variant="lead" tone="muted">
              The Amp Model is the delivery structure. The services that run through it cover the full
              spectrum: AI governance, AI implementation, structured delivery, capability building,
              coaching at every level, and custom software and platform development.
            </Text>
            <Text variant="lead" tone="muted">
              Whether you need to govern AI responsibly, build a digital product, coach your leadership
              team through transformation, or redesign your delivery model, the methodology stays the same.
              Assess what is there. Implement with rigour. Amplify so it sticks.
            </Text>
          </Stack>
          <Stack gap="sm">
            {[
              { tag: "AMP 01", name: "AI Governance", href: "/ai-governance" },
              { tag: "AMP 02", name: "AI Implementation", href: "/ai-governance" },
              { tag: "AMP 03", name: "Structured Delivery", href: "/structured-delivery" },
              { tag: "AMP 04", name: "Capability Building", href: "/capability" },
              { tag: "AMP 05", name: "Coaching", href: "/coaching" },
              { tag: "AMP 06", name: "Tech Build", href: "/transformation" },
            ].map((service) => (
              <Link key={service.tag} href={service.href}>
                <div
                  className="group flex cursor-pointer items-center justify-between rounded border border-[#E8E4F0] px-6 py-4 transition-all duration-200 hover:border-[#60266A] hover:bg-[#F2F0F7]"
                >
                  <div className="flex items-center gap-4">
                    <Text as="span" variant="mono" tone="coral">{service.tag}</Text>
                    <Text as="span" variant="small" tone="ink" className="font-semibold">
                      {service.name}
                    </Text>
                  </div>
                  <ArrowRight className="h-4 w-4 opacity-0 transition-opacity group-hover:opacity-100 text-[#60266A]" />
                </div>
              </Link>
            ))}
          </Stack>
        </Grid>
      </Section>

      <Section tone="purple" padding="lg">
        <Grid cols={2} gap="xl" className="items-center lg:grid-cols-2">
          <Stack gap="md">
            <Text variant="h2" tone="white" className="font-semibold">
              Ready to see the Amp Model in action?
            </Text>
            <Text variant="lead" tone="white-70">
              A first conversation takes 30 minutes. We will tell you honestly where you are,
              what needs to happen first, and whether we are the right fit.
            </Text>
          </Stack>
          <div className="lg:flex lg:justify-end">
            <AmpButton
              size="xl"
              onClick={() => onOpenConsultation()}
              data-testid="button-about-methodology-cta"
              className="gap-3 px-10 py-5"
            >
              Start a conversation
              <ArrowRight className="h-5 w-5" />
            </AmpButton>
          </div>
        </Grid>
      </Section>
    </PageShell>
  );
});

export default AboutMethodology;
