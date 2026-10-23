'use client';

import { memo } from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";
import {
  AmpButton,
  BorderCell,
  BorderGrid,
  Eyebrow,
  Grid,
  PageShell,
  Section,
  Stack,
  Surface,
  Text,
} from "@/components/system";
import heroImage from "@assets/56_1760470571209.webp";
import modernWorkImage from "@assets/35_1760470608291.webp";
import strategicThinkingImage from "@assets/50_1760470599806.webp";

interface AboutProps {
  onOpenConsultation: (serviceType?: string) => void;
}

const beliefs = [
  {
    value: "Rigorous",
    statement: "We earn the right to be trusted by doing the work properly.",
    body: "High standards are not a selling point. They are the minimum. We hold ourselves to them because we have seen what happens when organisations do not, and we have spent careers cleaning up the results.",
  },
  {
    value: "Curious",
    statement: "The day you stop asking questions is the day your advice stops being useful.",
    body: "Regulated industries change. Regulation changes. Technology changes faster than either. We stay genuinely curious because our clients cannot afford advisers who stopped learning two years ago.",
  },
  {
    value: "Trusting",
    statement: "People do their best thinking when they have room to think.",
    body: "Approval chains kill good ideas before they reach the surface. We build environments where people at every level feel safe to challenge, to experiment, and to be honest about what is not working.",
  },
  {
    value: "People-Centred",
    statement: "Technology serves people. Not the other way around.",
    body: "AI governance, digital delivery, platform modernisation: all of it is meaningless if it does not make things better for the people inside and around the organisations we work with. That is the measure we use.",
  },
  {
    value: "Pragmatic",
    statement: "Good and delivered is better than perfect and waiting.",
    body: "Perfectionism is often fear with a professional veneer. We push for the best outcome achievable within the real constraints of time, budget, governance, and organisational appetite. Then we improve from there.",
  },
  {
    value: "Tech Excellence",
    statement: "We recommend what we understand, because we use it.",
    body: "We are practitioners first. Our partners have built systems, shipped products, and governed AI implementations inside regulated environments. We do not advise on tools we have never touched.",
  },
];

const About = memo(function About({ onOpenConsultation }: AboutProps) {
  return (
    <PageShell className="bg-[#FAFAF9]">
      <Section tone="navy" padding="hero" className="pt-32 pb-20 lg:pt-40 lg:pb-28">
        <Stack gap="lg">
          <Eyebrow>About Amplified</Eyebrow>
          <Grid cols="2-lg" gap="xl" className="items-end">
            <Text variant="h1" tone="white" data-testid="text-about-title">
              Founded by<br />practitioners.<br />Built from the inside.
            </Text>
            <Stack gap="md">
              <Text variant="lead" tone="white-70">
                We are a consultancy founded by practitioners who had operated inside the industries we now serve.
                We did not build Amplified by reading about regulated delivery. We built it because we had lived it,
                and we saw a gap that most consultancies were not closing.
              </Text>
              <button
                type="button"
                onClick={() => onOpenConsultation()}
                className="amp-focus-ring-on-navy inline-flex w-fit items-center gap-2 text-sm font-semibold text-[#F85C70] transition-all duration-200 hover:gap-3"
                data-testid="button-about-consultation"
              >
                Start a conversation <ArrowRight className="h-3 w-3" />
              </button>
            </Stack>
          </Grid>
        </Stack>
      </Section>

      {/* HERO IMAGE */}
      <div className="w-full max-h-[480px] overflow-hidden">
        <img
          src={heroImage.src}
          alt="Amplified partnership at work"
          className="max-h-[480px] w-full object-cover object-center"
          loading="eager"
        />
      </div>

      <Section tone="transparent" padding="lg" className="border-b border-[#E5E3EE] bg-[#FAFAF9]">
        <Grid cols="2-lg" gap="xl" className="items-start">
          <Stack gap="md">
            <Eyebrow tone="subtle">Our Origins</Eyebrow>
            <Text variant="h2" tone="ink">
              Why Amplified exists
            </Text>
            <Text variant="body" tone="muted" className="mb-6">
                Amplified was founded by delivery practitioners who had seen the same pattern repeat across
                infrastructure programmes, energy organisations, financial services firms, and public sector
                bodies. The pattern was this: good people, unclear governance, and external consultancies who
                had never actually operated inside a regulated environment advising on how to run one.
            </Text>
            <Text variant="body" tone="muted" className="mb-6">
                The gap was not technical. These organisations were not short of smart people or capable technology.
                The gap was structural. AI was being adopted without governance frameworks. Agile was being
                implemented without understanding how it had to sit alongside PMO rigour and contractual accountability.
                Capability programmes were being bolted on after delivery rather than embedded inside it.
            </Text>
            <Text variant="body" tone="muted" className="mb-6">
                We founded Amplified to close that gap. Not as generalists who could turn their hand to anything,
                but as specialists who had operated under the same governance pressure our clients face every day.
            </Text>
            <Text variant="body" tone="muted" className="italic">
              We measure our impact not in billable hours, but in sustained behaviour change and organisational
              capability that outlasts our involvement.
            </Text>
          </Stack>
          <Stack gap="md">
              <img
                src={modernWorkImage.src}
                alt="Amplified at work"
                className="w-full rounded"
                loading="lazy"
              />
            <BorderGrid cols={2} className="border-l border-t border-[#E5E3EE]">
              {[
                { num: "10+", label: "Years of delivery leadership" },
                { num: "5", label: "Sectors we specialise in" },
                { num: "6", label: "AMP service lines" },
                { num: "2", label: "Offices: London and Porto" },
              ].map((stat, i) => (
                <BorderCell key={i} className="p-6">
                  <Text variant="h2" tone="coral" className="mb-1 text-4xl">{stat.num}</Text>
                  <Text variant="caption" tone="muted">{stat.label}</Text>
                </BorderCell>
              ))}
            </BorderGrid>
          </Stack>
        </Grid>
      </Section>

      <Section tone="navy" padding="lg">
        <Grid cols="2-lg" gap="xl" className="items-center">
          <Stack gap="md">
            <Eyebrow>What Our Name Means</Eyebrow>
            <Text variant="h2" tone="white">
              To amplify is to make something bigger without distorting it
            </Text>
            <Text variant="body" tone="white-70" className="mb-6">
                Not to replace. Not to overhaul. To take what is already working and give it the conditions
                it needs to perform at full volume. That is the belief at the centre of everything we do.
            </Text>
            <Text variant="body" tone="white-70" className="mb-6">
                Every organisation we work with already has capable people, existing governance structures, and
                delivery ambitions that matter. What they often lack is the framework, the expertise, or the
                external challenge to bring those things together and make them work at the level they should.
            </Text>
            <Text variant="body" tone="white-70">
              The Amp Model, Assess then Implement then Amplify, mirrors this directly. We start by understanding
              what you have. We implement what is needed. And then we amplify the result so it sustains itself
              long after we have left the building.
            </Text>
          </Stack>
          <BorderGrid cols={1} className="border-l border-t border-white/10">
            {[
              { phase: "Assess", desc: "Understand the real problem before proposing any solution. Most organisations are solving the wrong thing." },
              { phase: "Implement", desc: "Deliver with your teams, not at them. Build the thing and transfer the capability at the same time." },
              { phase: "Amplify", desc: "Create the conditions for sustained performance that does not depend on us being in the room." },
            ].map((item, i) => (
              <BorderCell key={i} className="border-white/10 p-8">
                <Eyebrow className="mb-3">{item.phase}</Eyebrow>
                <Text variant="small" tone="white-70">{item.desc}</Text>
              </BorderCell>
            ))}
          </BorderGrid>
        </Grid>
      </Section>

      <Section tone="mist" padding="md" className="border-b border-[#DDD9EA]">
        <Stack gap="md" align="center" className="text-center">
          <Eyebrow tone="subtle">Our Mission</Eyebrow>
          <Text variant="h2" tone="ink" className="mx-auto max-w-[860px]" data-testid="text-about-description">
            To make rigour the foundation of every technology transformation we touch.
          </Text>
        </Stack>
      </Section>

      <Section tone="white" padding="lg" className="border-b border-[#E5E3EE] bg-[#FAFAF9]">
        <Eyebrow tone="subtle" className="mb-4">Our Values</Eyebrow>
        <Grid cols="2-lg" gap="xl" className="mb-16 items-end">
          <Text variant="h2" tone="ink">Six beliefs we actually live by</Text>
          <Text variant="body" tone="muted">
            These are not aspirational wall posters. They shape how we hire, how we challenge clients, how we
            hold ourselves accountable, and what we walk away from. Every one of them has been tested in practice
            inside regulated environments where the consequences of getting things wrong are real.
          </Text>
        </Grid>

        <BorderGrid cols={2} className="border-l border-t border-[#E5E3EE]">
          {beliefs.map((belief, i) => (
            <BorderCell
              key={i}
              className="p-10"
              data-testid={`card-value-${belief.value.toLowerCase().replace(/\s+/g, "-")}`}
            >
              <Eyebrow className="mb-4">{belief.value}</Eyebrow>
              <Text
                variant="h4"
                tone="ink"
                className="mb-4"
                data-testid={`text-value-title-${belief.value.toLowerCase().replace(/\s+/g, "-")}`}
              >
                "{belief.statement}"
              </Text>
              <Text
                variant="small"
                tone="muted"
                data-testid={`text-value-description-${belief.value.toLowerCase().replace(/\s+/g, "-")}`}
              >
                {belief.body}
              </Text>
            </BorderCell>
          ))}
        </BorderGrid>
      </Section>

      <Section tone="mist" padding="lg">
        <Grid cols="2-lg" gap="xl" className="items-start">
          <Stack gap="md">
            <Eyebrow tone="subtle">In Practice</Eyebrow>
            <Text variant="h2" tone="ink">What working with us actually looks like</Text>
            <ul className="space-y-6">
                {[
                  { title: "We give you the honest view", body: "Not the comfortable one. If the problem is not what you think it is, we will tell you. If your team is the issue, we will say so respectfully. Candour is a form of respect." },
                  { title: "We work inside your constraints", body: "Every organisation operates within real limitations. Budget, governance, political capital, appetite for change. We do not design solutions that ignore the world you operate in." },
                  { title: "We build your capability, not dependency", body: "Our goal is to be unnecessary. We document, we train, we transfer, and we leave your organisation better equipped to run things without us than when we arrived." },
                  { title: "We walk away from work that does not fit", body: "If a client wants a rubber-stamp rather than a genuine governance review, we are not the right partner. Our reputation is worth more than any single engagement." },
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-5">
                    <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-[#F85C70]" />
                    <div>
                      <Text variant="body" tone="ink" className="mb-1 font-semibold">{item.title}</Text>
                      <Text variant="small" tone="muted">{item.body}</Text>
                    </div>
                  </li>
                ))}
            </ul>
          </Stack>
          <Stack gap="md">
              <img
                src={strategicThinkingImage.src}
                alt="Amplified in practice"
                className="w-full rounded mb-8"
                loading="lazy"
              />
            <Surface variant="navy" padding="lg" radius="sm">
              <Text variant="h4" tone="white" className="mb-6 leading-relaxed">
                "We practice what we preach. Not because it is a good line. Because we built this consultancy
                by living through the same pressures we now help our clients navigate."
              </Text>
              <Eyebrow>The Amplified Partnership</Eyebrow>
            </Surface>
          </Stack>
        </Grid>
      </Section>

      <Section tone="white" padding="lg" className="border-t border-[#E5E3EE] bg-[#FAFAF9]">
        <Eyebrow tone="subtle" className="mb-4">Explore Further</Eyebrow>
        <Text variant="h2" tone="ink" className="mb-14">There is more to discover</Text>

        <BorderGrid cols={3} className="border-l border-t border-[#E5E3EE]">
          {[
              {
                tag: "The Partnership",
                title: "Meet the team",
                body: "Four partners with deep experience inside the industries we serve. Delivery directors, technical leads, and programme architects who have operated under real governance pressure.",
                href: "/about/team",
                cta: "Meet the partnership",
              },
              {
                tag: "The Amp Model",
                title: "How we work",
                body: "The Assess, Implement, Amplify methodology in full. How we structure every engagement to build lasting capability, not consulting dependency.",
                href: "/about/methodology",
                cta: "Explore the methodology",
              },
              {
                tag: "Work With Us",
                title: "Careers at Amplified",
                body: "We hire from all walks of life, as long as the experience or ambitions match. If what we do resonates and you want to do the most interesting work of your career, we would like to hear from you.",
                href: "/careers",
                cta: "See open roles",
              },
          ].map((card, i) => (
            <Link href={card.href} key={i} className="group block h-full">
              <BorderCell className="flex h-full flex-col p-10 transition-colors duration-200 hover:bg-[#F9F8FC]">
                <Eyebrow className="mb-4">{card.tag}</Eyebrow>
                <Text variant="h3" tone="ink" className="mb-4">{card.title}</Text>
                <Text variant="small" tone="muted" className="mb-8 flex-1">{card.body}</Text>
                <span className="inline-flex items-center gap-2 text-sm font-semibold text-[#F85C70] transition-all duration-200 group-hover:gap-3">
                  {card.cta} <ArrowRight className="h-3 w-3" />
                </span>
              </BorderCell>
            </Link>
          ))}
        </BorderGrid>
      </Section>

      <Section tone="purple" padding="lg">
        <Stack gap="lg" align="center" className="text-center">
          <Eyebrow className="text-white/55">Start Here</Eyebrow>
          <Text variant="h1" tone="white" className="text-5xl">
            If it resonates, let's talk
          </Text>
          <Text variant="body" tone="white-70" className="mx-auto max-w-[480px]">
            We will give you an honest view of whether and how we can help. No commitment required. No slide decks in the first meeting.
          </Text>
          <Stack direction="row-responsive" gap="md" className="justify-center">
            <AmpButton onClick={() => onOpenConsultation()} data-testid="button-about-cta">
              Start a Conversation <ArrowRight className="h-4 w-4" />
            </AmpButton>
            <AmpButton asChild variant="outlineLight" data-testid="button-about-contact-options">
              <Link href="/contact">View Contact Options</Link>
            </AmpButton>
          </Stack>
        </Stack>
      </Section>

    </PageShell>
  );
});

export default About;
