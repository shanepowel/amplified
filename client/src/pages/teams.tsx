'use client';

import { memo } from "react";
import Image from "next/image";
import { ArrowRight, CheckCircle, ExternalLink } from "lucide-react";
import { ServiceSchema } from "@/components/structured-data";
import {
  PageShell,
  PageHero,
  BreadcrumbBar,
  CtaBand,
  Section,
  Stack,
  Grid,
  Text,
  Eyebrow,
  Surface,
  AmpButton,
  BorderGrid,
  BorderCell,
} from "@/components/system";
import heroImage from "@assets/68_1760470836673.webp";
import strategicThinkingImage from "@assets/50_1760470599806.webp";

interface TeamsProps {
  onOpenConsultation: (serviceType?: string) => void;
}

const stagesOfStableTeams = [
  {
    number: "01",
    title: "Diagnose",
    body: "We assess where the team is against five dimensions: clarity, capability, collaboration, cadence, and culture. Not a survey. A structured diagnostic conducted with the team and its leadership.",
  },
  {
    number: "02",
    title: "Rebaseline",
    body: "We reset the fundamentals. Roles, accountabilities, ways of working, and decision rights are clarified and agreed. The team establishes what good looks like and how it will know when it gets there.",
  },
  {
    number: "03",
    title: "Stabilise",
    body: "Operating rhythms are embedded. Communication patterns become predictable. Delivery cadences hold. The team begins to perform consistently rather than in bursts of effort followed by recovery.",
  },
  {
    number: "04",
    title: "Amplify",
    body: "With stability as the foundation, we build the conditions for high performance. Continuous improvement becomes a team behaviour, not a management initiative. The framework becomes self-sustaining.",
  },
];

const dimensions = [
  {
    label: "Clarity",
    desc: "Purpose, direction, and individual accountabilities are unambiguous. Every team member knows what they are responsible for and why it matters.",
  },
  {
    label: "Capability",
    desc: "The skills and experience within the team match the demands placed on it. Gaps are identified, named, and addressed, not worked around.",
  },
  {
    label: "Collaboration",
    desc: "The team operates as a coherent unit. Information flows. Decisions are made at the right level. Conflict is productive, not avoided or destructive.",
  },
  {
    label: "Cadence",
    desc: "Delivery is predictable. Rituals and rhythms are established and held. The team does not lurch from crisis to crisis or rely on heroics to hit targets.",
  },
  {
    label: "Culture",
    desc: "Psychological safety exists. People challenge ideas, not each other. Standards are upheld because the team believes in them, not because they are monitored.",
  },
];

const whoFor = [
  "Delivery directors whose programmes are underperforming despite good people",
  "CIOs who have restructured but not seen the performance shift they expected",
  "Transformation leads who need teams to hold pace across a multi-year programme",
  "Technology organisations scaling squads and losing consistency across them",
  "Regulated industries where team instability creates governance and compliance risk",
];

const notPoints = [
  "It is not a recruitment solution",
  "It is not a training programme bolted on after the fact",
  "It is not a culture survey with an action plan",
  "It is not a reorg wrapped in different language",
];

const Teams = memo(function Teams({ onOpenConsultation }: TeamsProps) {
  return (
    <PageShell>
      <ServiceSchema
        name="Stable Teams"
        description="Stable Teams is a trademarked framework from AmplifiedTeams that helps organisations rebaseline their teams and operations to achieve sustained high performance. Not recruitment."
        url="https://amplified.co.uk/teams"
      />

      <BreadcrumbBar items={[{ label: "Home", href: "/" }, { label: "Stable Teams" }]} />

      <PageHero
        eyebrow="AmplifiedTeams"
        title={
          <span data-testid="text-teams-title">
            Stable Teams&trade;
          </span>
        }
        subtitle="A structured framework for rebaselining teams and operations to achieve sustained high performance."
        lead="Most team problems are not recruitment problems. They are clarity problems, cadence problems, accountability problems. Stable Teams addresses the conditions that determine whether a team performs, not just who is on it."
      >
        <span className="inline-flex w-fit rounded border border-[#F85C70]/30 bg-[#F85C70]/15 px-2 py-1 font-mono text-xs text-[#F85C70]">
          Trademarked Framework
        </span>
        <Stack direction="row-responsive" gap="md" className="flex-wrap">
          <AmpButton
            onClick={() => onOpenConsultation("stable-teams")}
            data-testid="button-stable-teams-cta"
          >
            Start a Conversation
          </AmpButton>
          <AmpButton asChild variant="outlineLight" size="lg">
            <a href="https://amplifiedteams.co.uk" target="_blank" rel="noopener noreferrer">
              <ExternalLink className="h-4 w-4" />
              amplifiedteams.co.uk
            </a>
          </AmpButton>
        </Stack>
      </PageHero>

      <Section tone="white" padding="lg" className="border-b border-[#E5E3EE]">
        <Grid cols="2-lg" gap="xl" equal={false} className="items-center">
          <Stack gap="md">
            <Eyebrow tone="subtle">The Problem</Eyebrow>
            <Text variant="h2">Most team interventions treat symptoms, not causes</Text>
            <Text variant="body" tone="muted">
              Organisations experiencing poor delivery often look for a people solution. They hire
              more, restructure, or bring in contractors. The underlying dysfunction remains. New
              faces, same problems.
            </Text>
            <Text variant="body" tone="muted">
              The Stable Teams framework takes a different starting point. Before you change who is on
              the team, understand why the team is not performing. In most cases, the answer is not a
              capability gap. It is a structural one.
            </Text>
            <Text variant="body" tone="muted" className="italic">
              Stable Teams was developed by AmplifiedTeams, a subsidiary of Amplified, to give
              organisations a repeatable, evidence-based route to team performance that does not
              require a restructure to see results.
            </Text>
          </Stack>
          <Stack gap="lg">
            <div className="relative aspect-[4/3] overflow-hidden rounded">
              <Image
                src={heroImage}
                alt="Stable Teams framework in practice"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                data-testid="img-teams-hero"
              />
            </div>
            <Image
              src={strategicThinkingImage}
              alt="Strategic team thinking and performance rebaselining"
              className="h-auto w-full rounded"
              loading="lazy"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <Surface variant="mist" padding="lg" radius="sm" className="border border-[#DDD9EA]">
              <Eyebrow className="mb-4">What Stable Teams is not</Eyebrow>
              <ul className="space-y-3">
                {notPoints.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1 shrink-0 font-mono text-xs text-[#F85C70]">x</span>
                    <Text variant="small" tone="muted">
                      {item}
                    </Text>
                  </li>
                ))}
              </ul>
            </Surface>
          </Stack>
        </Grid>
      </Section>

      <Section tone="mist" padding="lg">
        <Stack gap="xl">
          <Eyebrow tone="subtle">The Framework</Eyebrow>
          <Text variant="h2">Four stages. One outcome.</Text>
          <Text variant="body" tone="muted" className="max-w-[560px]">
            Stable Teams moves through four structured stages, each building on the last. The goal is
            not a one-off intervention but a team that sustains high performance independently.
          </Text>
          <BorderGrid cols={2} className="border-l border-t border-[#C8C4D8]">
            {stagesOfStableTeams.map((stage) => (
              <BorderCell key={stage.number} className="flex flex-col border-[#C8C4D8] p-10">
                <Text variant="display" className="mb-4 text-4xl text-[#DDD9EA]">
                  {stage.number}
                </Text>
                <Text variant="h3" className="mb-4">
                  {stage.title}
                </Text>
                <Text variant="body" tone="muted">
                  {stage.body}
                </Text>
              </BorderCell>
            ))}
          </BorderGrid>
        </Stack>
      </Section>

      <Section tone="white" padding="lg" className="border-t border-[#E5E3EE]">
        <Stack gap="xl">
          <Eyebrow tone="subtle">What We Assess</Eyebrow>
          <Text variant="h2">The five dimensions of team stability</Text>
          <Text variant="body" tone="muted" className="max-w-[560px]">
            The diagnostic phase of the framework assesses each team across five interconnected
            dimensions. Every rebaselining plan is built from the results.
          </Text>
          <BorderGrid cols={3} className="border-l border-t border-[#E5E3EE]">
            {dimensions.map((dim) => (
              <BorderCell key={dim.label} className="border-[#E5E3EE] p-8">
                <Stack direction="row" gap="sm" align="center" className="mb-4">
                  <CheckCircle className="h-4 w-4 shrink-0 text-[#F85C70]" aria-hidden="true" />
                  <Text variant="h4">{dim.label}</Text>
                </Stack>
                <Text variant="small" tone="muted">
                  {dim.desc}
                </Text>
              </BorderCell>
            ))}
            <BorderCell className="border-[#E5E3EE] bg-[#181F4F] p-8">
              <Eyebrow className="mb-4">The outcome</Eyebrow>
              <Text variant="h4" tone="white" className="mb-4">
                A team that performs predictably, consistently, and independently
              </Text>
              <button
                type="button"
                onClick={() => onOpenConsultation("stable-teams")}
                className="amp-focus-ring-on-navy inline-flex items-center gap-2 rounded text-sm font-semibold text-[#F85C70] transition-all duration-200 hover:gap-3"
                data-testid="button-discuss-framework"
              >
                Discuss the framework <ArrowRight className="h-3 w-3" />
              </button>
            </BorderCell>
          </BorderGrid>
        </Stack>
      </Section>

      <Section tone="mist" padding="lg" className="border-t border-[#DDD9EA]">
        <Grid cols="2-lg" gap="xl" equal={false}>
          <Stack gap="lg">
            <Eyebrow tone="subtle">Who It Is For</Eyebrow>
            <Text variant="h2">
              Built for organisations where team performance is non-negotiable
            </Text>
            <ul className="space-y-5">
              {whoFor.map((item) => (
                <li key={item} className="flex items-start gap-4">
                  <CheckCircle
                    className="mt-0.5 h-5 w-5 shrink-0 text-[#F85C70]"
                    aria-hidden="true"
                  />
                  <Text variant="body" tone="muted">
                    {item}
                  </Text>
                </li>
              ))}
            </ul>
          </Stack>
          <Surface variant="navy" padding="xl" radius="sm">
            <Eyebrow className="mb-6">AmplifiedTeams</Eyebrow>
            <Text variant="h3" tone="white" className="mb-4">
              The Stable Teams framework is delivered by AmplifiedTeams, our specialist team
              performance subsidiary
            </Text>
            <Text variant="body" tone="white-70" className="mb-8">
              AmplifiedTeams works alongside the Amplified consulting partnership to deliver the
              framework inside client environments. Where our consulting work diagnoses systemic
              issues, Stable Teams provides the structured route to resolution at team level.
            </Text>
            <Stack direction="row-responsive" gap="md" className="flex-wrap">
              <AmpButton
                onClick={() => onOpenConsultation("stable-teams")}
                data-testid="button-start-conversation"
              >
                Start the Conversation
              </AmpButton>
              <AmpButton
                asChild
                variant="outlineLight"
                size="lg"
                data-testid="button-visit-amplifiedteams"
              >
                <a href="https://amplifiedteams.co.uk" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="h-4 w-4" />
                  amplifiedteams.co.uk
                </a>
              </AmpButton>
            </Stack>
          </Surface>
        </Grid>
      </Section>

      <CtaBand
        title="Ready to rebaseline your teams?"
        lead="Thirty minutes. We will tell you honestly whether Stable Teams is the right fit for your organisation."
      >
        <Stack direction="row-responsive" gap="md" align="center" justify="center" className="flex-wrap">
          <AmpButton onClick={() => onOpenConsultation("stable-teams")}>
            Start a Conversation <ArrowRight className="h-4 w-4" />
          </AmpButton>
          <AmpButton asChild variant="outlineLight" size="lg">
            <a href="https://amplifiedteams.co.uk" target="_blank" rel="noopener noreferrer">
              Visit AmplifiedTeams
            </a>
          </AmpButton>
        </Stack>
        <Text variant="small" tone="white-45">
          No pitch. No deck. Just a conversation.
        </Text>
      </CtaBand>
    </PageShell>
  );
});

export default Teams;
