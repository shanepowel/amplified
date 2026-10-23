'use client';

import { memo } from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle, AlertTriangle } from "lucide-react";
import { StructuredData } from "@/components/structured-data";
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
  ContentCard,
} from "@/components/system";
import { ciosFAQSchema, createBreadcrumbSchema } from "@/lib/schemas";

interface ForCIOsProps {
  onOpenConsultation?: (serviceType?: string) => void;
}

const challenges = [
  {
    title: "Board accountability without clear precedent",
    body: "Boards expect CIOs to govern AI adoption, but there is no established playbook for what good AI governance looks like in a regulated environment. You are expected to have answers before the frameworks exist.",
  },
  {
    title: "Regulatory pressure from multiple directions",
    body: "The EU AI Act, FCA SYSC requirements, GDS standards, and sector-specific frameworks are all moving simultaneously. Staying ahead of each without duplicating effort is a genuine operational challenge.",
  },
  {
    title: "Vendor relationships that are hard to scrutinise",
    body: "Your AI capability increasingly lives inside third-party platforms and system integrators. Assuring that capability, understanding its risks, and holding vendors accountable requires a level of technical fluency that is difficult to resource internally.",
  },
  {
    title: "The gap between AI ambition and operational reality",
    body: "Pilots succeed. Scaled adoption fails. The gap is usually governance, not technology. Organisations move from proof of concept to widespread use without putting in place the controls, policies, or accountability structures that regulated environments require.",
  },
];

const howWeHelp = [
  {
    service: "AI Governance (AMP 01)",
    href: "/ai-governance",
    title: "A governance framework built for your regulatory context",
    body: "We build AI governance frameworks that map to your existing assurance structures rather than sitting alongside them. AI risk registers, model inventories, usage policies, approval pathways, and board reporting packs. Everything documented to be owned and operated by your team.",
  },
  {
    service: "Structured Delivery (AMP 03)",
    href: "/structured-delivery",
    title: "Delivery governance that enables pace",
    body: "Governance that slows delivery is governance that gets bypassed. We design assurance into delivery cadences so accountability happens continuously rather than at stage gates. Programmes move faster and boards have better visibility.",
  },
  {
    service: "Capability Building (AMP 04)",
    href: "/capability",
    title: "AI literacy for boards and governance teams",
    body: "Your board cannot govern what it does not understand. We run structured AI literacy programmes for senior leaders and governance teams: practical, honest, and built around the decisions they actually need to make.",
  },
];

const faqs = [
  {
    q: "How does Amplified work alongside our existing technology governance?",
    a: "We work inside your existing governance structures, not around them. Our AI governance frameworks are designed to slot into established assurance, risk, and compliance processes. We map existing controls first, identify gaps, and build only what is missing rather than starting from scratch.",
  },
  {
    q: "What does an AI governance framework from Amplified actually include?",
    a: "A framework built around your regulatory context: an AI risk register, model inventory, usage policies, approval and escalation pathways, third-party AI assessment criteria, and a governance board pack template. Everything is documented to be owned and operated by your team, not us.",
  },
  {
    q: "How do you handle EU AI Act and sector-specific regulatory requirements?",
    a: "We have deep familiarity with EU AI Act obligations, FCA SYSC requirements, GDS standards, and infrastructure-sector assurance frameworks. We do not offer generic compliance templates. Every framework is built around the specific regulatory obligations your organisation carries.",
  },
  {
    q: "Can you work alongside our existing delivery partners and system integrators?",
    a: "Yes. Most of our engagements sit alongside existing SI relationships. We operate as the governance and assurance layer, not a competitor to implementation partners. We define the standards your partners work to and hold the accountability framework that vendors report into.",
  },
  {
    q: "What does a first engagement typically look like?",
    a: "We start with a 30-minute conversation to understand your specific context. From there, most CIO engagements begin with a governance readiness assessment: a structured review of your current AI posture, risk exposure, and the gaps between where you are and where regulators and your board expect you to be.",
  },
];

const outcomes = [
  "A board pack that answers AI governance questions before they are asked",
  "A risk register that is current, owned, and maintained by your team",
  "Vendor and third-party AI assessed against documented criteria",
  "An escalation pathway your governance team actually uses",
  "Delivery accountability structures that produce visible assurance",
  "A programme that your regulators can see into, not through",
];

const ForCIOs = memo(function ForCIOs({ onOpenConsultation }: ForCIOsProps) {
  return (
    <PageShell>
      <StructuredData data={ciosFAQSchema} id="cios-faq-schema" />
      <StructuredData
        data={createBreadcrumbSchema([
          { name: "Home", url: "https://amplified.co.uk/" },
          { name: "For CIOs", url: "https://amplified.co.uk/for-cios" },
        ])}
        id="cios-breadcrumb"
      />

      <BreadcrumbBar items={[{ label: "Home", href: "/" }, { label: "For CIOs" }]} />

      <PageHero
        eyebrow="Who We Work With"
        title={
          <>
            For Chief
            <br />
            Information Officers
          </>
        }
        lead="Govern the technology. Protect the programme. Meet the board's expectations without sacrificing the delivery pace your organisation needs."
      >
        <Stack direction="row-responsive" gap="md" className="flex-wrap">
          <AmpButton onClick={() => onOpenConsultation?.("ai-governance")}>
            Talk to Us <ArrowRight className="h-4 w-4" />
          </AmpButton>
          <AmpButton asChild variant="outlineLight" size="lg">
            <Link href="/ai-governance">View AI Governance</Link>
          </AmpButton>
        </Stack>
      </PageHero>

      <Section tone="mist" padding="lg" containerClassName="max-w-[760px]">
        <Stack gap="md">
          <Text variant="h2">The CIO's accountability gap</Text>
          <Text variant="lead" tone="muted">
            You are accountable for AI adoption across your organisation. The board wants progress.
            Regulators want compliance. Operational teams want pace. And the gap between those
            expectations is yours to close.
          </Text>
          <Text variant="lead" tone="muted">
            Amplified works with CIOs in infrastructure, energy, financial services, and public
            sector organisations to build the governance frameworks, delivery accountability
            structures, and board-facing reporting that make AI adoption responsible and auditable.
            Built for industries where rigour is not optional.
          </Text>
        </Stack>
      </Section>

      <Section tone="white" padding="lg">
        <Stack gap="xl">
          <Eyebrow>The challenges CIOs bring to us</Eyebrow>
          <Text variant="h2">What you are navigating</Text>
          <Grid cols={2} gap="md">
            {challenges.map((item) => (
              <Surface
                key={item.title}
                variant="mist"
                padding="lg"
                radius="lg"
                className="flex items-start gap-4"
              >
                <AlertTriangle className="mt-1 h-5 w-5 shrink-0 text-[#F85C70]" aria-hidden="true" />
                <Stack gap="sm">
                  <Text variant="h4">{item.title}</Text>
                  <Text variant="body" tone="muted">{item.body}</Text>
                </Stack>
              </Surface>
            ))}
          </Grid>
        </Stack>
      </Section>

      <Section tone="mist" padding="lg">
        <Stack gap="xl">
          <Eyebrow>What Amplified delivers</Eyebrow>
          <Text variant="h2">How we help CIOs</Text>
          <Grid cols={3} gap="md">
            {howWeHelp.map((item) => (
              <ContentCard
                key={item.service}
                variant="plain"
                eyebrow={
                  <Link
                    href={item.href}
                    className="text-[#60266A] transition-colors hover:text-[#F85C70]"
                  >
                    {item.service} &rarr;
                  </Link>
                }
                title={item.title}
                description={item.body}
                titleClamp={3}
                descriptionClamp={6}
              />
            ))}
          </Grid>
        </Stack>
      </Section>

      <Section tone="white" padding="lg" containerClassName="max-w-[760px]">
        <Stack gap="md">
          <Eyebrow>Example engagement</Eyebrow>
          <Text variant="h2">From exposure to assurance in twelve weeks</Text>
          <Text variant="lead" tone="muted">
            A public sector CIO came to us six weeks before a major programme board review. Three AI
            tools were already in production across operational teams with no formal risk assessment,
            no usage policy, and no accountability trail. The board had started asking questions.
          </Text>
          <Text variant="lead" tone="muted">
            We ran a rapid AI posture assessment, mapped the existing exposure, and built a governance
            framework that gave the CIO a credible position for the board: what was in use, what the
            risks were, and what was being done about them. The framework included an AI risk
            register, a third-party assessment process, and a clear escalation pathway.
          </Text>
          <Text variant="lead" tone="muted">
            The board review passed. The framework remained operational twelve months later, managed
            entirely by the internal team. Amplified was no longer required.
          </Text>
          <Surface variant="mist" padding="lg" radius="lg" className="border-l-4 border-[#60266A]">
            <Text variant="body" className="font-medium">
              &ldquo;We needed to move from exposure to a defensible position quickly. Amplified gave us
              a framework that held up under proper scrutiny.&rdquo;
            </Text>
            <Text variant="small" tone="muted" className="mt-3">
              CIO, UK public sector organisation
            </Text>
          </Surface>
        </Stack>
      </Section>

      <Section tone="mist" padding="lg" containerClassName="max-w-[760px]">
        <Stack gap="lg">
          <Eyebrow>The outcome</Eyebrow>
          <Text variant="h2">What good looks like for a CIO</Text>
          <Grid cols={2} gap="sm">
            {outcomes.map((item) => (
              <Stack key={item} direction="row" gap="sm" align="start">
                <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-[#60266A]" aria-hidden="true" />
                <Text variant="body">{item}</Text>
              </Stack>
            ))}
          </Grid>
        </Stack>
      </Section>

      <Section tone="white" padding="lg" containerSize="narrow" containerClassName="max-w-[900px]">
        <Stack gap="lg">
          <Eyebrow>Common questions</Eyebrow>
          <Text variant="h2">Questions from CIOs</Text>
          <Stack gap="md">
            {faqs.map((item) => (
              <details
                key={item.q}
                className="group cursor-pointer rounded-xl border border-[#E5E3EE] bg-white p-6"
              >
                <summary className="amp-focus-ring-on-light flex cursor-pointer list-none items-center justify-between gap-4 text-base font-semibold text-[#181F4F]">
                  {item.q}
                  <span className="shrink-0 text-2xl text-[#F85C70] transition-transform duration-200 group-open:rotate-45">
                    +
                  </span>
                </summary>
                <Text variant="body" tone="muted" className="mt-4">{item.a}</Text>
              </details>
            ))}
          </Stack>
        </Stack>
      </Section>

      <CtaBand
        eyebrow="Next step"
        title="Start with a governance readiness conversation"
        lead="Thirty minutes. We will tell you honestly what your governance exposure looks like and what, if anything, needs to change before your next board review."
      >
        <Stack direction="row-responsive" gap="md" align="center" justify="center" className="flex-wrap">
          <AmpButton onClick={() => onOpenConsultation?.("ai-governance")}>
            Book a Conversation <ArrowRight className="h-4 w-4" />
          </AmpButton>
          <AmpButton asChild variant="outlineLight" size="lg">
            <Link href="/ai-governance">View AI Governance</Link>
          </AmpButton>
        </Stack>
        <Text variant="small" tone="white-45">No pitch. No deck. Just a conversation.</Text>
      </CtaBand>
    </PageShell>
  );
});

export default ForCIOs;
