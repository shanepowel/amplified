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
import { digitalLeadsFAQSchema, createBreadcrumbSchema } from "@/lib/schemas";

interface ForDigitalLeadsProps {
  onOpenConsultation?: (serviceType?: string) => void;
}

const challenges = [
  {
    title: "Transformation that leaves no capability behind",
    body: "Consultants deliver the change, then leave. The tools are in place but the skills are not. Six months later the programme has reverted. Digital leads are left holding technology that their teams cannot sustain, scale, or build on.",
  },
  {
    title: "AI adoption stuck in the pilot phase",
    body: "Proof of concepts succeed in controlled conditions and then fail to scale. The reason is rarely the technology. It is the absence of the governance framework, internal capability, and operating model that make scale possible in a regulated environment.",
  },
  {
    title: "Building capability versus managing consultant dependency",
    body: "Every day your organisation relies on external capability is a day it is not building its own. Digital leads feel the tension between needing outside expertise to move quickly and knowing that expertise needs to transfer inward to be sustainable.",
  },
  {
    title: "Navigating innovation pressure alongside delivery accountability",
    body: "Boards and senior leadership want innovation and AI adoption. Regulators want controlled, evidence-based adoption. Your delivery teams want stability. Digital leads absorb the pressure from all three directions and are expected to reconcile them.",
  },
];

const howWeHelp = [
  {
    service: "Capability Building (AMP 04)",
    href: "/capability",
    title: "Skills that stay when we leave",
    body: "Every capability programme we design is tied to real delivery. Product Owner development, AI literacy, Centres of Excellence, and agile practitioner training built around your regulatory context. Skills transferred through doing, not slides.",
  },
  {
    service: "Coaching (AMP 05)",
    href: "/coaching",
    title: "A thinking partner who has held the role",
    body: "One-to-one and team coaching for digital leads, heads of digital, and CDOs navigating technology adoption, team upskilling, and the politics of transformation inside regulated organisations. Honest, not comfortable.",
  },
  {
    service: "ampStore",
    href: "/amp-store",
    title: "Curated learning built for practitioners",
    body: "A curated library of frameworks, templates, and learning resources built by practitioners for practitioners. Agile delivery, AI governance, product management, and digital leadership. Designed for people who learn through application, not theory.",
  },
];

const faqs = [
  {
    q: "How does Amplified avoid the 'training course' trap?",
    a: "Every capability programme we design is tied to real delivery. Skills are built through doing, not through slide decks. We embed practitioners alongside your teams on live work, so learning happens in context and sticks. We also build in structured knowledge transfer so the capability stays when we leave.",
  },
  {
    q: "What does embedded upskilling look like in practice?",
    a: "An Amplified practitioner joins your team in a coaching and doing capacity. They model the behaviours, challenge the gaps, and transfer the skills through the actual work. This is not instruction from the front of a room. It is collaborative work with explicit capability transfer built into every sprint or workstream.",
  },
  {
    q: "How long does it take to build real internal AI capability?",
    a: "For most organisations, meaningful capability takes 6 to 12 months to embed properly. We are honest about this because quick programmes rarely change behaviour. We structure programmes around defined milestones so you can see progress, and we build internal communities of practice that sustain the capability after the engagement ends.",
  },
  {
    q: "Do you work with teams that have limited technical background?",
    a: "Yes. Our AI literacy programmes are designed specifically for non-technical leaders, governance teams, and operational staff. We make AI concepts accessible without oversimplifying them, so people can make informed decisions, interrogate vendor claims, and own AI adoption rather than just approving it.",
  },
  {
    q: "Can you help us move from pilot to scaled adoption?",
    a: "This is one of the most common challenges we help with. Pilots succeed in controlled conditions but fail to scale because the governance, capability, and operating model are not ready. We help you build the foundation that makes scale possible: the policies, the trained people, the decision frameworks, and the ways of working.",
  },
];

const outcomes = [
  "An AI adoption programme that moves from pilot to scale without reverting",
  "Internal teams that own, operate, and build on the technology",
  "A governance framework your regulator and board can see into",
  "Capability that is genuinely embedded rather than performed for a review",
  "No consultant dependency after the engagement ends",
  "A Centre of Excellence that outlasts the project that created it",
];

const ForDigitalLeads = memo(function ForDigitalLeads({ onOpenConsultation }: ForDigitalLeadsProps) {
  return (
    <PageShell>
      <StructuredData data={digitalLeadsFAQSchema} id="digital-leads-faq-schema" />
      <StructuredData
        data={createBreadcrumbSchema([
          { name: "Home", url: "https://amplified.co.uk/" },
          { name: "For Digital Leads", url: "https://amplified.co.uk/for-digital-leads" },
        ])}
        id="cios-breadcrumb"
      />

      <BreadcrumbBar items={[{ label: "Home", href: "/" }, { label: "For Digital Leads" }]} />

      <PageHero
        eyebrow="Who We Work With"
        title={
          <>
            For Digital Leads
            <br />
            and Heads of Digital
          </>
        }
        lead="Build it in, not bolted on. Capability that stays when the consultants leave. AI adoption that scales because the foundation is right."
      >
        <Stack direction="row-responsive" gap="md" className="flex-wrap">
          <AmpButton onClick={() => onOpenConsultation?.("capability")}>
            Talk to Us <ArrowRight className="h-4 w-4" />
          </AmpButton>
          <AmpButton asChild variant="outlineLight" size="lg">
            <Link href="/capability">View Capability Building</Link>
          </AmpButton>
        </Stack>
      </PageHero>

      <Section tone="mist" padding="lg" containerClassName="max-w-[760px]">
        <Stack gap="md">
          <Text variant="h2">The capability gap digital leads inherit</Text>
                    <Text variant="lead" tone="muted">
            You are leading digital transformation in an organisation where the capability to
            sustain that transformation is still being built. External consultants know things
            your teams do not yet know. Technology is being implemented faster than the skills
            to own and operate it are developing.
          </Text>
          <Text variant="lead" tone="muted">
            Amplified works with digital leads, heads of digital, and CDOs in infrastructure,
            energy, financial services, and public sector to close the gap between what has been
            deployed and what internal teams can own. Every engagement is designed to make us
            unnecessary. The skills transfer. The dependency does not.
          </Text>
        </Stack>
      </Section>

      <Section tone="white" padding="lg">
        <Stack gap="xl">
          <Eyebrow>What digital leads deal with</Eyebrow>
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
          <Text variant="h2">How we help digital leads</Text>
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
          <Text variant="h2">Moving from AI pilots to embedded practice</Text>
          <Text variant="lead" tone="muted">
            A head of digital at a financial services organisation had run three successful AI
            pilots in twelve months. All three had stalled at scale. The technology worked.
            The governance framework was not in place. The internal teams did not have the
            capability to own the tools beyond the pilot environment. A fourth pilot was being
            proposed by the board.
          </Text>
          <Text variant="lead" tone="muted">
            Amplified worked with the head of digital to build the capability foundation before
            the next pilot began. An AI literacy programme for the governance and operational
            teams. A usage policy framework. A Centre of Excellence model for AI ownership.
            Embedded practitioners who coached the internal team through the implementation
            rather than doing it for them.
          </Text>
          <Text variant="lead" tone="muted">
            The fourth pilot moved to scaled deployment. The internal team owned the tool,
            the governance, and the ongoing development. Amplified left. The capability stayed.
          </Text>
          <Surface variant="mist" padding="lg" radius="lg" className="border-l-4 border-[#60266A]">
                        <Text variant="body" className="font-medium">
              &ldquo;Every other consultancy had helped us run the pilot. Amplified helped us work
              out why the pilots kept failing and then built the thing that made scale possible.&rdquo;
            </Text>
            <Text variant="small" tone="muted" className="mt-3">
              Head of Digital, UK financial services organisation
            </Text>
          </Surface>
        </Stack>
      </Section>

      <Section tone="mist" padding="lg" containerClassName="max-w-[760px]">
        <Stack gap="lg">
          <Eyebrow>The outcome</Eyebrow>
          <Text variant="h2">What good looks like for a digital lead</Text>
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
          <Text variant="h2">Questions from digital leads</Text>
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
        title="Start a capability conversation"
        lead="Thirty minutes. Tell us where your teams are and where they need to be. We will tell you honestly what a real capability programme looks like for your context."
      >
        <Stack direction="row-responsive" gap="md" align="center" justify="center" className="flex-wrap">
          <AmpButton onClick={() => onOpenConsultation?.("capability")}>
            Book a Conversation <ArrowRight className="h-4 w-4" />
          </AmpButton>
          <AmpButton asChild variant="outlineLight" size="lg">
            <Link href="/capability">View Capability Building</Link>
          </AmpButton>
        </Stack>
        <Text variant="small" tone="white-45">No pitch. No deck. Just a conversation.</Text>
      </CtaBand>
    </PageShell>
  );
});

export default ForDigitalLeads;
