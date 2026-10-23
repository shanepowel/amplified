'use client';

import { memo } from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";
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
import { createBreadcrumbSchema, technologySectorFAQSchema } from "@/lib/schemas";

interface Props {
  onOpenConsultation: (serviceType?: string) => void;
}

const deliverables = [
  {
    title: "AI Governance for Technology Companies and Scale-ups",
    body: "A governance framework proportionate to your current context and designed to scale into the regulatory landscape your product trajectory will require. Whether you are preparing for FCA authorisation, entering healthcare markets, or simply building AI products that enterprise customers will scrutinise, we build the accountability structures that hold up under external review.",
    link: "/ai-governance",
    linkLabel: "AI Governance",
  },
  {
    title: "AI Implementation from Prototype to Production",
    body: "Taking AI from proof of concept to a production system is a different problem from building the prototype. We design the data pipelines, model integrations, observability layers, and governance controls that make AI reliable and defensible in a commercial context. Particularly for AI-native products where the model is the product.",
    link: "/ai-implementation",
    linkLabel: "AI Implementation",
  },
  {
    title: "Product-Led Delivery and Squad Accountability",
    body: "Structured delivery that works for product organisations: sprint governance, backlog accountability, stakeholder reporting, and the decision frameworks that let you move fast without accumulating governance debt. Particularly valuable for organisations scaling from a single squad to a multi-team product organisation.",
    link: "/structured-delivery",
    linkLabel: "Structured Delivery",
  },
  {
    title: "Tech Build: Custom Software and Platform Engineering",
    body: "Production-grade software built alongside or independently of your team. Greenfield builds, platform rewrites, microservices architectures, and data infrastructure designed for scale, operability, and the audit requirements of the markets you are entering. We build, document, and hand over.",
    link: "/transformation",
    linkLabel: "Tech Build",
  },
  {
    title: "Capability Building Within Engineering Teams",
    body: "AI literacy for product managers, governance frameworks for technical leads, and capability programmes that embed inside your existing squad structure. We transfer the skills to interrogate AI outputs, manage model risk, and maintain accountability as the engineering organisation grows.",
    link: "/capability",
    linkLabel: "Capability Building",
  },
  {
    title: "Stable Teams for Technology Scale-ups",
    body: "When you need to accelerate delivery without the overhead of a traditional recruitment process, Stable Teams provides pre-assembled squads mobilised in 48 hours. IR35-compliant, multi-disciplinary, and structured to integrate with your existing ways of working rather than impose a different set of them.",
    link: "/teams",
    linkLabel: "Stable Teams",
  },
];

const challenges = [
  "Moving fast creates governance debt that compounds quickly. AI tools adopted without accountability structures become technical and regulatory liabilities at exactly the moment the business is trying to scale.",
  "Enterprise customers and regulated market buyers now conduct AI governance due diligence as standard. Without a defensible governance framework, sales cycles lengthen and deals fall through at the diligence stage.",
  "AI regulation is expanding rapidly. Technology companies that are not currently regulated are frequently entering markets, building products, or taking investment that will bring them into scope of the EU AI Act, FCA, ICO, or sector-specific frameworks.",
  "Engineering velocity and governance rigour feel like they are in tension. Most technology organisations have not found a way to build accountability into their delivery cadence without adding process that slows the team down.",
  "Scaling from a single product squad to a multi-team organisation creates accountability gaps. What worked when everyone was in the same room stops working when four squads are building on the same platform.",
];

const engagementPhases = [
  {
    phase: "Weeks 1-2",
    title: "Discovery and diagnostic",
    body: "We review your current AI use, delivery governance, and accountability structures. We identify the specific gaps between where you are and where your customers, investors, or target markets expect you to be. For technology companies entering regulated markets, this includes a regulatory landscape mapping of the obligations that will apply.",
  },
  {
    phase: "Weeks 3-10",
    title: "Framework design and delivery setup",
    body: "We build the governance framework, accountability structures, and delivery operating model your context requires. For AI governance engagements this includes risk assessment templates, model inventory documentation, usage policies, and board-facing reporting. For delivery engagements this includes squad governance, escalation pathways, and stakeholder reporting.",
  },
  {
    phase: "Ongoing",
    title: "Embedding and handover",
    body: "We support your team through the first implementation cycle, train the people who will own the framework, and structure a clean handover so the capability stays internal. The goal is always for your team to own and operate what we have built without needing us to maintain it.",
  },
];

const faqs = [
  {
    q: "Does Amplified only work with regulated industries, or do you work with technology companies too?",
    a: "Amplified works with technology companies, scale-ups, and private sector organisations as well as regulated industries. Our methods and governance frameworks are designed for environments where rigour matters, whether that rigour is imposed by a regulator or by the demands of operating at scale. Many of our technology clients are moving into regulated markets, building AI-native products, or operating inside enterprises where delivery accountability has become critical.",
  },
  {
    q: "What does AI governance look like for a technology company that is not yet in a regulated market?",
    a: "For technology companies not yet subject to external regulation, AI governance is primarily about internal accountability, product risk management, and preparing for the regulatory landscape you will inevitably enter. We help you build governance frameworks that are proportionate to your current context but designed to scale into the FCA, ICO, EU AI Act, or sector-specific frameworks your product trajectory will require.",
  },
  {
    q: "We already have strong engineering processes. What does Amplified add?",
    a: "Most strong engineering organisations have excellent delivery processes at the squad or product level. The gaps we address are typically governance above the squad level: how AI decisions are made and documented, how accountability flows from engineering to product to board, how you demonstrate responsible AI use to enterprise customers, regulators, or investors, and how you build the leadership capability to govern technology at scale.",
  },
  {
    q: "Can you work within our existing product and engineering culture?",
    a: "Yes. We do not impose delivery frameworks that conflict with engineering culture. We work within your existing rituals and tooling, identifying the governance and accountability gaps without adding unnecessary process. Our goal is to make your teams more effective, not to slow them down with frameworks built for a different context.",
  },
  {
    q: "What does a Tech Build engagement with Amplified look like?",
    a: "Tech Build engagements start with a clear brief: what you need to build, the constraints you are working within, and the accountability you need to maintain. We build alongside your team or independently depending on your preference, with a strong emphasis on architecture that is maintainable and governance that satisfies your enterprise and regulatory obligations. We document as we go so the handover is clean.",
  },
];

const SectorTechnology = memo(function SectorTechnology({ onOpenConsultation }: Props) {
  return (
    <PageShell>
      <StructuredData data={technologySectorFAQSchema} id="technology-faq-schema" />
      <StructuredData
        data={createBreadcrumbSchema([
          { name: "Home", url: "https://amplified.co.uk/" },
          { name: "Sectors", url: "https://amplified.co.uk/sectors/technology" },
          { name: "Technology & Private Sector", url: "https://amplified.co.uk/sectors/technology" },
        ])}
        id="technology-breadcrumb"
      />

      <BreadcrumbBar
        items={[
          { label: "Home", href: "/" },
          { label: "Sectors", href: "/sectors/infrastructure" },
          { label: "Technology & Private Sector" },
        ]}
      />

      <PageHero
        padding="hero"
        eyebrow="Sector"
        title={
          <>
            Technology &
            <br />
            Private Sector
          </>
        }
        lead="Private sector organisations move fast. Governance gaps compound fast too. We help technology companies and commercial enterprises build AI delivery that keeps pace without creating the liabilities that stall enterprise sales or attract regulatory attention."
      >
        <Stack direction="row-responsive" gap="md" className="flex-wrap">
          <AmpButton
            onClick={() => onOpenConsultation("Technology AI Governance")}
            data-testid="button-technology-hero"
          >
            Book a consultation <ArrowRight className="h-4 w-4" />
          </AmpButton>
          <AmpButton asChild variant="outlineLight" size="lg">
            <Link href="/ai-governance" data-testid="button-technology-ai-governance">
              AI Governance service
            </Link>
          </AmpButton>
        </Stack>
      </PageHero>

      <Section tone="mist" padding="lg" containerClassName="max-w-[760px]">
        <Stack gap="md">
          <Eyebrow>The challenge</Eyebrow>
          <Text variant="h2">
            Velocity and governance are not opposites. But you have to build them together.
          </Text>
          <Text variant="lead" tone="muted">
            Technology companies often encounter AI governance as a problem for the first time
            when an enterprise customer asks a question they cannot answer, a regulator sends
            a letter, or an investor asks for a due diligence pack that should have existed
            twelve months ago. By then, the governance debt is real and the work to address
            it is disruptive.
          </Text>
          <Text variant="lead" tone="muted">
            Amplified works with technology companies, scale-ups, and private sector
            organisations that want to build accountability frameworks before they become
            urgent, and delivery structures that scale beyond the founding team's ability
            to hold everything in their heads.
          </Text>
        </Stack>
      </Section>

      <Section tone="white" padding="lg">
        <Stack gap="lg">
          <Eyebrow>Common challenges</Eyebrow>
          <Text variant="h2">What technology organisations navigate</Text>
          <Stack gap="md" className="max-w-[840px]">
            {challenges.map((c) => (
              <Stack key={c} direction="row" gap="md" align="start">
                <CheckCircle className="mt-1 h-5 w-5 shrink-0 text-[#60266A]" aria-hidden="true" />
                <Text variant="body" tone="muted">{c}</Text>
              </Stack>
            ))}
          </Stack>
        </Stack>
      </Section>

      <Section tone="mist" padding="lg">
        <Stack gap="lg">
          <Eyebrow>What we deliver</Eyebrow>
          <Text variant="h2">Services for technology and private sector organisations</Text>
          <Grid cols={3} gap="md">
            {deliverables.map((item) => (
              <ContentCard
                key={item.title}
                variant="panel"
                className="border border-[#E5E3EE]"
                title={item.title}
                description={item.body}
                titleClamp={4}
                descriptionClamp={6}
                footer={
                  <Link
                    href={item.link}
                    className="amp-focus-ring-on-light inline-flex items-center gap-1.5 text-sm font-semibold text-[#F85C70] transition-opacity hover:opacity-80"
                  >
                    {item.linkLabel}
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                }
              />
            ))}
          </Grid>
        </Stack>
      </Section>

      <Section tone="navy" padding="lg">
        <Stack gap="lg">
          <Eyebrow>How we work</Eyebrow>
          <Text variant="h2" tone="white">What an engagement looks like</Text>
          <Grid cols="3-lg" gap="md" className="mt-4">
            {engagementPhases.map((phase) => (
              <Surface key={phase.phase} variant="inset" padding="md" radius="lg">
                <Eyebrow className="mb-3">{phase.phase}</Eyebrow>
                <Text variant="h4" tone="white" className="mb-3 font-bold">{phase.title}</Text>
                <Text variant="body" tone="white-75">{phase.body}</Text>
              </Surface>
            ))}
          </Grid>
        </Stack>
      </Section>

      <Section tone="mist" padding="lg" containerSize="narrow" containerClassName="max-w-[900px]">
        <Stack gap="lg">
          <Eyebrow>Common questions</Eyebrow>
          <Text variant="h2">Questions technology companies ask</Text>
          <Stack gap="md">
            {faqs.map((item) => (
              <details
                key={item.q}
                className="cursor-pointer rounded-xl border border-[#E5E3EE] bg-white p-6"
              >
                <summary className="amp-focus-ring-on-light flex cursor-pointer list-none items-center justify-between gap-4 text-base font-semibold text-[#181F4F]">
                  {item.q}
                  <span className="ml-4 shrink-0 text-lg text-[#F85C70]">+</span>
                </summary>
                <Text variant="body" tone="muted" className="mt-4">{item.a}</Text>
              </details>
            ))}
          </Stack>
        </Stack>
      </Section>

      <CtaBand
        title="Discuss your technology or private sector programme"
        lead="Whether you are building AI governance into a commercial product, scaling a delivery organisation, or preparing for regulated market entry, we can help you do it with the rigour that enterprise customers and regulators will expect."
      >
        <Stack direction="row-responsive" gap="md" align="center" justify="center" className="flex-wrap">
          <AmpButton
            onClick={() => onOpenConsultation("Technology AI Governance")}
            data-testid="button-technology-consultation"
          >
            Book a consultation
            <ArrowRight className="h-4 w-4" />
          </AmpButton>
          <AmpButton asChild variant="outlineLight" size="lg">
            <Link href="/ai-governance">AI Governance service</Link>
          </AmpButton>
        </Stack>
      </CtaBand>
    </PageShell>
  );
});

export default SectorTechnology;
