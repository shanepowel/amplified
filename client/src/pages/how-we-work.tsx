'use client';

import { memo } from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";
import { StructuredData } from "@/components/structured-data";
import { howWeWorkSchema, createBreadcrumbSchema } from "@/lib/schemas";
import { FurtherReading } from "@/components/further-reading";
import {
  AmpButton,
  Eyebrow,
  Grid,
  PageHero,
  PageShell,
  Section,
  Stack,
  Surface,
  Text,
} from "@/components/system";

interface HowWeWorkProps {
  onOpenConsultation: (serviceType?: string) => void;
}

const phases = [
  {
    tag: "AMP 01: ASSESS",
    title: "We start by understanding what's actually there.",
    body: "Before any implementation, governance framework, or delivery model is designed, we conduct a structured assessment of your current state, covering AI readiness, delivery capability, governance maturity, and team structure.",
    note: "Typical duration: 2–4 weeks.",
    outputs: [
      "AI Readiness Report, where you are, where the gaps are, what's needed before you can implement responsibly",
      "Governance Maturity Assessment, mapped against sector standards and regulatory requirements",
      "Delivery Capability Review, how your operating model and PMO will interact with the changes ahead",
      "Prioritised Roadmap, sequenced and realistic, reflecting your constraints, not just best-practice theory",
    ],
  },
  {
    tag: "AMP 02: IMPLEMENT",
    title: "We build it with you, not for you.",
    body: "Implementation at Amplified is always embedded. Our practitioners work inside your teams, alongside your people, delivering AI capabilities, governance frameworks, or new operating models within your existing structures.",
    outputs: [
      "AI implementation or governance framework, fully built and tested",
      "Squad or agile operating model configured for your sector and governance requirements",
      "Integration with existing PMO, programme governance, and assurance frameworks",
      "Live delivery with weekly check-ins, sprint reviews, and stakeholder reporting in formats your governance board recognises",
    ],
  },
  {
    tag: "AMP 03: AMPLIFY",
    title: "We build the capability so you don't need us again.",
    body: "The measure of a good engagement is whether your teams can run it without us twelve months later. Every implementation phase includes a structured embedding programme that transfers real capability, not just documentation.",
    note: "Amplified's goal is always to make itself unnecessary. That is how you know it worked.",
    outputs: [
      "Internal capability programme tailored to your team's current skills",
      "Centre of Excellence design and initial setup",
      "Knowledge transfer your team will actually use",
      "Coaching programme for leads and practitioners",
      "3-month post-engagement check-in to review adoption and address drift",
    ],
  },
];

const HowWeWork = memo(function HowWeWork({ onOpenConsultation }: HowWeWorkProps) {

  const breadcrumb = createBreadcrumbSchema([
    { name: 'Home', url: 'https://amplified.co.uk/' },
    { name: 'How We Work', url: 'https://amplified.co.uk/how-we-work' },
  ]);

  return (
    <>
      <StructuredData data={howWeWorkSchema as Record<string, unknown>} id="how-we-work-schema" />
      <StructuredData data={breadcrumb as Record<string, unknown>} id="how-we-work-breadcrumb" />
      <PageShell>
        <PageHero
          eyebrow="The Amp Model"
          title="How We Work"
          subtitle="Digital transformation, delivered with discipline."
          lead="We don't arrive with a methodology and leave you to figure out the rest. Every digital transformation engagement runs through three clear phases, each with defined outputs, governance checkpoints, and a built-in transfer of capability to your team."
        />

        <Section tone="white" padding="lg">
          <Stack gap="none">
            {phases.map((phase) => (
              <Grid
                key={phase.tag}
                cols={2}
                gap="xl"
                className="border-b border-[#E5E3EE] py-16 lg:grid-cols-2"
              >
                <Stack gap="md">
                  <Eyebrow>{phase.tag}</Eyebrow>
                  <Text variant="h2" tone="ink">
                    {phase.title}
                  </Text>
                  <Text variant="body" tone="muted">
                    {phase.body}
                  </Text>
                  {phase.note ? (
                    <Text variant="small" className="italic text-[#60266A]">
                      {phase.note}
                    </Text>
                  ) : null}
                </Stack>
                <Surface variant="mist" padding="lg" radius="md">
                  <Eyebrow className="mb-5 text-[#60266A]">
                    Outputs
                  </Eyebrow>
                  <ul className="space-y-4">
                    {phase.outputs.map((output) => (
                      <li key={output} className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 shrink-0 mt-0.5 text-[#F85C70]" />
                        <Text as="span" variant="small" tone="muted">
                          {output}
                        </Text>
                      </li>
                    ))}
                  </ul>
                </Surface>
              </Grid>
            ))}
          </Stack>
        </Section>

        <FurtherReading tags={["Digital Transformation", "Structured Delivery", "Governance"]} maxArticles={3} />

        <Section tone="purple" padding="lg">
          <Stack gap="lg" align="center" className="text-center">
            <Text variant="h2" tone="white">
              Ready to Amp Up?
            </Text>
            <Text variant="lead" tone="white-80" className="max-w-[480px]">
              Whether you're starting an AI strategy or untangling a delivery model, we'll give you
              a straight answer on where to begin.
            </Text>
            <AmpButton asChild size="xl" data-testid="button-how-we-work-cta">
              <Link href="/contact">
                Start a Conversation <ArrowRight className="h-4 w-4" />
              </Link>
            </AmpButton>
            <Text variant="small" tone="white-45">
              No pitch. No deck. Just a 30-minute call.
            </Text>
          </Stack>
        </Section>
      </PageShell>
    </>
  );
});

export default HowWeWork;
