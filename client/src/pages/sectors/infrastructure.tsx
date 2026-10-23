'use client';

import { memo } from "react";
import Link from "next/link";
import heroImg from "@assets/stock_images/infrastructure-hero.webp";
import Image from "next/image";
import { ArrowRight, CheckCircle } from "lucide-react";
import { StructuredData } from "@/components/structured-data";
import {
  PageShell,
  Section,
  Container,
  Stack,
  Grid,
  Text,
  Eyebrow,
  Surface,
  AmpButton,
  ContentCard,
  CtaBand,
  BreadcrumbBar,
} from "@/components/system";
import { createServiceSchema, createBreadcrumbSchema, infrastructureFAQSchema } from "@/lib/schemas";

interface Props {
  onOpenConsultation: (serviceType?: string) => void;
}

const deliverables = [
  {
    title: "AI Governance Framework for Infrastructure Programmes",
    body: "A governance structure built to operate within your existing PMO controls, not alongside them. We map AI accountability to named programme roles, build risk registers aligned to your stage-gate process, and ensure every AI use case has documented assurance evidence before it reaches approval. Your board, your client, and your auditors can interrogate the framework without needing to understand the technology.",
    link: "/ai-governance",
    linkLabel: "AI Governance",
  },
  {
    title: "Structured Agile Delivery within NEC and JCT Contracts",
    body: "Sprint-based delivery does not break your contract structure. We adapt agile squad models to work within NEC compensation event processes, stage-gate approval cycles, and the documentation requirements of infrastructure clients. Delivery is faster and more responsive without compromising the audit trail or contractual traceability.",
    link: "/structured-delivery",
    linkLabel: "Structured Delivery",
  },
  {
    title: "Digital Programme Setup and PMO Integration",
    body: "We embed digital workstreams directly within your programme structure. Change management, benefits tracking, and risk reporting all feed into existing PMO governance rather than creating a parallel digital governance layer that no one reads. Deliverables meet the same assurance standards as physical programme outputs.",
    link: "/transformation",
    linkLabel: "Tech Build",
  },
  {
    title: "AI Readiness Assessment for Capital Programmes",
    body: "A structured review of your programme's readiness to adopt AI tools for planning, scheduling, risk management, and site safety. We assess data availability, governance maturity, regulatory constraints, and workforce readiness, and deliver a prioritised roadmap of AI use cases with risk-adjusted business cases ready for board approval.",
    link: "/ai-governance",
    linkLabel: "AI Governance",
  },
  {
    title: "Capability Building for Programme Delivery Teams",
    body: "Practical training and coaching for programme managers, digital leads, and site teams on working with AI tools, understanding AI outputs, and maintaining the oversight standards your governance framework requires. Not classroom theory but applied capability built within your live programme context.",
    link: "/capability",
    linkLabel: "Capability Building",
  },
  {
    title: "Stable Teams for Infrastructure Delivery",
    body: "When you need embedded delivery capability, Stable Teams provides pre-assembled squads of delivery professionals who are mobilised within 48 hours and structured to work within your programme governance from day one. Not contractors who happen to know agile but teams built specifically for governed delivery environments.",
    link: "/teams",
    linkLabel: "Stable Teams",
  },
];

const challenges = [
  "NEC and JCT contract structures that require documented compensation events, early warnings, and stage-gate approvals that are incompatible with how most AI tools are designed to be used",
  "PMO governance that demands an audit trail for every significant decision, which means AI-assisted decisions need to be explainable in terms your assurance board can interrogate",
  "Distributed workforces across multiple sites, where digital adoption requires training, change management, and ongoing support that head-office technology teams cannot provide alone",
  "Regulatory frameworks, Network Licence conditions, planning requirements, environmental obligations, that create hard constraints on what data can be used, how, and by whom",
  "Client and supply chain relationships where AI adoption in one tier creates risk or opportunity for others, requiring governance that spans organisational boundaries",
];

const infrastructureSchema = createServiceSchema({
  name: "AI Governance & Technology Delivery for Infrastructure Organisations",
  url: "https://amplified.co.uk/sectors/infrastructure",
  description:
    "AI governance, structured delivery, and digital programme management for infrastructure and construction organisations operating under NEC/JCT contracts with PMO governance requirements.",
  keywords: [
    "AI governance infrastructure",
    "technology delivery infrastructure programmes",
    "agile delivery NEC contracts",
    "digital transformation construction",
    "PMO governance AI",
    "infrastructure digital programme",
  ],
});

const breadcrumbSchema = createBreadcrumbSchema([
  { name: "Home", url: "https://amplified.co.uk/" },
  { name: "Sectors", url: "https://amplified.co.uk/sectors/infrastructure" },
  { name: "Infrastructure", url: "https://amplified.co.uk/sectors/infrastructure" },
]);

const SectorInfrastructure = memo(function SectorInfrastructure({ onOpenConsultation }: Props) {
  return (
    <PageShell>
      <StructuredData data={infrastructureSchema} id="infrastructure-service-schema" />
      <StructuredData data={breadcrumbSchema} id="infrastructure-breadcrumb-schema" />
      <StructuredData data={infrastructureFAQSchema} id="infrastructure-faq-schema" />

      <BreadcrumbBar
        items={[
          { label: "Home", href: "/" },
          { label: "Sectors", href: "/sectors/infrastructure" },
          { label: "Infrastructure" },
        ]}
      />

      <Section tone="navy" padding="xl" className="relative overflow-hidden" contained={false}>
        <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-[48%] lg:block" aria-hidden="true">
          <Image
            src={heroImg}
            alt=""
            aria-hidden="true"
            fill
            className="object-cover opacity-30"
            priority
            sizes="48vw"
          />
          <div
            className="absolute inset-0 bg-gradient-to-r from-[#181F4F] via-[#181F4F]/60 to-transparent"
            aria-hidden="true"
          />
        </div>
        <Container className="relative">
          <Stack gap="lg" className="max-w-[920px]">
            <Eyebrow>Sector Focus</Eyebrow>
            <Text variant="display" tone="white">
              AI Governance for
              <br />
              Infrastructure Organisations
            </Text>
            <Text variant="lead" tone="white-75" className="max-w-2xl">
              Infrastructure and construction programmes run on governance structures that most technology
              consultancies have never encountered. NEC contracts, PMO stage-gates, Network Licence
              conditions, and supply chains that span dozens of organisations. We build AI and digital
              delivery frameworks that work within those structures, not despite them.
            </Text>
            <Stack direction="row-responsive" gap="md" className="flex-wrap">
              <AmpButton
                onClick={() => onOpenConsultation("Infrastructure AI Governance")}
                data-testid="button-infrastructure-hero"
              >
                Discuss your programme
                <ArrowRight className="h-4 w-4" />
              </AmpButton>
              <AmpButton asChild variant="outlineLight" size="lg">
                <Link href="/ai-governance">AI Governance service</Link>
              </AmpButton>
            </Stack>
          </Stack>
        </Container>
      </Section>

      <Section tone="white" padding="lg">
        <Grid cols="2-lg" gap="xl" equal={false}>
          <Stack gap="md">
            <Text variant="h2">Why infrastructure programmes need a different approach to AI</Text>
            <Text variant="lead" tone="muted">
              The technology sector built its AI adoption playbook for software businesses, where you can
              iterate quickly, tolerate failure, and ship to a user base that can be asked to accept
              imperfect tools. Infrastructure programmes operate in a completely different environment.
            </Text>
            <Text variant="lead" tone="muted">
              Your outputs are physical. Your contracts are legally binding. Your governance is audited.
              Your supply chain is watching what you do. And the consequences of a technology failure,
              whether an AI model that misjudges ground conditions or a scheduling tool that creates a
              compensation event, are measured in millions rather than user complaints.
            </Text>
            <Text variant="lead" tone="muted">
              Amplified was built for organisations where rigour is not optional. We understand programme
              governance because we have worked inside it, not observed it from the outside. Our AI and
              digital delivery frameworks are designed to strengthen your existing controls, not circumvent
              them.
            </Text>
          </Stack>
          <Surface variant="mist" padding="lg" radius="lg">
            <Text variant="h4" className="mb-6 font-bold">
              Sectors within infrastructure we work with
            </Text>
            <ul className="space-y-3">
              {[
                "Major capital programme management and delivery",
                "Highways, rail, and transport infrastructure",
                "Water and wastewater infrastructure",
                "Energy transmission and distribution networks",
                "Construction and built environment",
                "Ports, airports, and logistics infrastructure",
                "Defence and secure infrastructure programmes",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-[#F85C70]" />
                  <Text variant="body" tone="muted">{item}</Text>
                </li>
              ))}
            </ul>
          </Surface>
        </Grid>
      </Section>

      <Section tone="mist" padding="lg">
        <Stack gap="lg">
          <Eyebrow>The Challenge</Eyebrow>
          <Text variant="h2">What makes infrastructure different</Text>
          <Text variant="lead" tone="muted" className="max-w-3xl">
            Generic AI governance and delivery frameworks fail in infrastructure environments because they
            were not built for them. These are the specific constraints that determine how technology
            adoption must work in your sector.
          </Text>
          <Stack gap="md">
            {challenges.map((item, i) => (
              <Surface key={i} variant="bordered" padding="md" radius="lg" className="flex items-start gap-4">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#F85C70] text-xs font-bold text-white">
                  {i + 1}
                </span>
                <Text variant="body" tone="muted">{item}</Text>
              </Surface>
            ))}
          </Stack>
        </Stack>
      </Section>

      <Section tone="white" padding="lg">
        <Stack gap="lg">
          <Eyebrow>What Amplified Delivers</Eyebrow>
          <Text variant="h2">Services for infrastructure organisations</Text>
          <Text variant="lead" tone="muted" className="max-w-3xl">
            Each service is adapted for the governance, contractual, and regulatory environment that
            infrastructure programmes operate within.
          </Text>
          <Grid cols={2} gap="md">
            {deliverables.map((item) => (
              <ContentCard
                key={item.title}
                variant="mist"
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
          <Eyebrow>How We Work</Eyebrow>
          <Text variant="h2" tone="white">What an engagement looks like</Text>
          <Grid cols="3-lg" gap="md" className="mt-4">
            {[
              {
                phase: "Weeks 1–3",
                title: "Programme immersion",
                body:
                  "We embed in your programme governance structure, map the decision-making hierarchy, review existing PMO documentation, and identify where technology can add value without creating governance risk. We meet your client team, review contract structures, and agree the governance framework that will apply to everything we deliver.",
              },
              {
                phase: "Weeks 4–10",
                title: "Framework and roadmap",
                body:
                  "We deliver the governance framework, AI readiness assessment, or structured delivery setup, depending on the engagement scope. All outputs are reviewed against your programme's assurance requirements before sign-off. Your PMO team is involved throughout so they can own the framework when we step back.",
              },
              {
                phase: "Ongoing",
                title: "Embedded delivery or handover",
                body:
                  "For longer engagements, Stable Teams embeds within the programme for the delivery phase. For advisory engagements, we run a structured handover that includes documentation, training, and a defined period of retained support. You own the capability. We make sure it works without us.",
              },
            ].map((phase) => (
              <Surface key={phase.phase} variant="inset" padding="md" radius="lg">
                <Eyebrow className="mb-3">{phase.phase}</Eyebrow>
                <Text variant="h4" tone="white" className="mb-3 font-bold">{phase.title}</Text>
                <Text variant="body" tone="white-75">{phase.body}</Text>
              </Surface>
            ))}
          </Grid>
        </Stack>
      </Section>

      <Section tone="white" padding="lg">
        <Stack gap="lg">
          <Eyebrow>Track Record</Eyebrow>
          <Text variant="h2">Evidence from the sector</Text>
          <Grid cols={3} gap="md">
            {[
              {
                stat: "40+",
                label: "Projects delivered",
                detail: "Across infrastructure, energy, financial services, and public sector programmes.",
              },
              {
                stat: "10+",
                label: "Years in delivery",
                detail: "Our partners have worked inside major capital programmes before advising on them.",
              },
              {
                stat: "5",
                label: "Sectors covered",
                detail: "Infrastructure, energy, financial services, public sector, and technology.",
              },
            ].map((item) => (
              <Surface key={item.stat} variant="mist" padding="md" radius="lg" className="text-center">
                <Text variant="display" tone="coral" className="mb-1 text-[2.5rem]">{item.stat}</Text>
                <Text variant="body" className="mb-2 font-semibold">{item.label}</Text>
                <Text variant="small" tone="muted">{item.detail}</Text>
              </Surface>
            ))}
          </Grid>
          <Surface variant="mist" padding="lg" radius="lg" border="hairline">
            <Text variant="body" tone="muted" className="mb-4 italic">
              "A major regulated infrastructure programme engaged Amplified to design an AI governance
              framework ahead of their first AI procurement. The framework mapped accountability to the
              existing programme structure, produced the assurance documentation required by their client's
              PMO, and was completed before any technology was selected. The procurement process ran against
              the framework rather than retrofitting governance after selection."
            </Text>
            <Text variant="small" className="font-semibold">
              Major capital programme, UK regulated infrastructure sector (details anonymised)
            </Text>
          </Surface>
        </Stack>
      </Section>

      <Section tone="mist" padding="lg" containerSize="narrow" containerClassName="max-w-[900px]">
        <Stack gap="lg">
          <Eyebrow>Common Questions</Eyebrow>
          <Text variant="h2">Questions infrastructure organisations ask</Text>
          <Stack gap="md">
            {[
              {
                q: "What AI governance challenges are specific to infrastructure organisations?",
                a:
                  "Infrastructure organisations face a unique set of AI governance challenges: their programmes run on NEC or JCT contracts with fixed stage-gate approvals, their PMO structures require auditability and paper trails that most AI tools do not provide natively, their workforce is distributed across sites rather than desks, and the consequences of AI failure are physical, not just financial. Generic AI governance frameworks built for software businesses do not account for any of this.",
              },
              {
                q: "Can agile delivery work in infrastructure programmes?",
                a:
                  "Yes, but it requires structured adaptation. Pure agile sprint cycles are incompatible with stage-gate approvals, NEC compensation events, and regulatory sign-off requirements. Amplified implements a structured agile model that retains sprint-based delivery while preserving the governance rigour, documentation standards, and audit trails that infrastructure programmes require.",
              },
              {
                q: "How does digital transformation work alongside a live infrastructure programme?",
                a:
                  "The most effective approach is to embed digital capability within the existing programme structure rather than running it in parallel. Amplified maps the digital workstream to existing programme governance, ensures all outputs meet the same assurance standards as physical deliverables, and builds handover plans so internal teams maintain the capability after the engagement ends.",
              },
              {
                q: "What does an AI readiness assessment cover for an infrastructure organisation?",
                a:
                  "An Amplified AI readiness assessment for infrastructure covers: data maturity and availability across the programme, existing governance structures and where AI accountability would sit, regulatory and contractual constraints on AI use, workforce readiness and change management requirements, and a prioritised roadmap of AI use cases with risk-adjusted business cases.",
              },
            ].map((item, i) => (
              <details key={i} className="cursor-pointer rounded-xl border border-[#E5E3EE] bg-white p-6">
                <summary className="amp-focus-ring-on-light flex cursor-pointer list-none items-center justify-between text-base font-semibold text-[#181F4F]">
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
        title="Discuss your infrastructure AI programme"
        lead="Whether you are at the readiness assessment stage or already procuring AI tools for a live programme, we can help you build the governance framework that lets you move forward with confidence."
      >
        <Stack direction="row-responsive" gap="md" align="center" justify="center" className="flex-wrap">
          <AmpButton
            onClick={() => onOpenConsultation("Infrastructure AI Governance")}
            data-testid="button-infrastructure-consultation"
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

export default SectorInfrastructure;
