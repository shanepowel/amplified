'use client';

import { memo } from "react";
import Link from "next/link";
import heroImg from "@assets/stock_images/energy-sector.webp";
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
import { createServiceSchema, createBreadcrumbSchema, energyFAQSchema } from "@/lib/schemas";

interface Props {
  onOpenConsultation: (serviceType?: string) => void;
}

const deliverables = [
  {
    title: "AI Governance Framework for Energy Programmes",
    body: "Governance structures built for Ofgem-regulated activities, safety-critical systems, and the specific accountability requirements of energy and utilities organisations. We map AI accountability to your existing operating model, build risk frameworks that integrate with your safety management system, and produce the assurance documentation your regulator and board require.",
    link: "/ai-governance",
    linkLabel: "AI Governance",
  },
  {
    title: "Safety-Critical AI Risk Assessment",
    body: "Structured risk assessments for AI systems that interact with physical infrastructure, safety-critical operations, or real-time control environments. We assess failure modes, human override procedures, accountability chains, and integration points with your existing safety management and operational technology frameworks.",
    link: "/ai-governance",
    linkLabel: "AI Governance",
  },
  {
    title: "Smart Grid and Asset Intelligence Governance",
    body: "Governance frameworks for AI use cases in demand forecasting, predictive maintenance, load balancing, and network optimisation. We assess the regulatory constraints on each use case, build the assurance structures required for Ofgem-regulated activities, and design the data governance framework that makes these use cases operationally viable.",
    link: "/ai-governance",
    linkLabel: "AI Governance",
  },
  {
    title: "Digital Transformation Programme Delivery",
    body: "End-to-end delivery of digital transformation programmes within your existing operational governance. We embed within your programme structure, produce outputs that meet your regulatory reporting requirements, and build change management plans that work for field teams as well as corporate offices.",
    link: "/ai-implementation",
    linkLabel: "AI Implementation",
  },
  {
    title: "Capability Building for OT and IT Teams",
    body: "Practical training for operational technology teams, control room staff, and corporate technology functions on AI tools, data literacy, and the governance standards they need to operate within. Built for energy and utilities professionals, not technology specialists.",
    link: "/capability",
    linkLabel: "Capability Building",
  },
  {
    title: "Net Zero and Sustainability Technology Governance",
    body: "Governance frameworks for AI and digital tools used in emissions tracking, carbon accounting, sustainability reporting, and net zero programme management. We ensure the data and model governance meets the standards required by your regulator, your investors, and the reporting frameworks you are committed to.",
    link: "/ai-governance",
    linkLabel: "AI Governance",
  },
];

const challenges = [
  "Ofgem regulation creates specific obligations around transparency, customer fairness, and accountability for algorithmic systems used in pricing, billing, and network management, and most AI governance frameworks do not address these obligations",
  "Safety-critical environments require AI governance to integrate with existing safety management systems and functional safety standards, not sit alongside them as a separate IT governance process",
  "The operational technology and information technology boundary creates governance complexity when AI systems bridge both environments, as most OT governance frameworks were not designed with machine learning in mind",
  "The pace of regulatory change in energy, from smart metering to flexibility markets to net zero obligations, means AI governance frameworks need to be built to adapt rather than requiring complete redesign with each regulatory update",
  "Workforce distribution across control rooms, field teams, and corporate offices creates change management challenges that most digital transformation programmes underestimate, leading to adoption failures that undermine the business case",
];

const energySchema = createServiceSchema({
  name: 'AI Governance & Technology Delivery for Energy and Utilities Organisations',
  url: 'https://amplified.co.uk/sectors/energy-utilities',
  description: 'Ofgem-aligned AI governance, safety-critical technology frameworks, and digital transformation for energy transmission, distribution, and utilities organisations.',
  keywords: [
    'AI governance energy sector UK',
    'digital transformation utilities UK',
    'technology delivery Ofgem regulated',
    'smart grid AI governance',
    'safety-critical AI governance',
    'energy sector digital transformation',
  ],
});

const breadcrumbSchema = createBreadcrumbSchema([
  { name: 'Home', url: 'https://amplified.co.uk/' },
  { name: 'Sectors', url: 'https://amplified.co.uk/sectors/energy-utilities' },
  { name: 'Energy & Utilities', url: 'https://amplified.co.uk/sectors/energy-utilities' },
]);


const SectorEnergyUtilities = memo(function SectorEnergyUtilities({ onOpenConsultation }: Props) {
  return (
    <PageShell>
      <StructuredData data={energySchema} id="energy-service-schema" />
      <StructuredData data={breadcrumbSchema} id="energy-breadcrumb" />
      <StructuredData data={energyFAQSchema} id="energy-faq" />

      <BreadcrumbBar
        items={[
          { label: "Home", href: "/" },
          { label: "Sectors", href: "/sectors/infrastructure" },
          { label: "Energy & Utilities" },
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
              Energy & Utilities Organisations
            </Text>
            <Text variant="lead" tone="white-75" className="max-w-2xl">
              Energy and utilities organisations operate AI in environments where failure has physical
              consequences. Safety-critical systems, Ofgem-regulated activities, distributed operational
              teams, and a regulatory environment that is evolving faster than most governance frameworks
              can keep up with. We build AI governance that works in operational reality, not just in policy
              documents.
            </Text>
            <Stack direction="row-responsive" gap="md" className="flex-wrap">
              <AmpButton
                onClick={() => onOpenConsultation("Energy Sector AI Governance")}
                data-testid="button-energy-utilities-hero"
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
            <Text variant="h2">Why AI governance must be built for the energy sector specifically</Text>
            <Text variant="lead" tone="muted">
              The AI governance challenge in energy and utilities is fundamentally different from other
              regulated sectors. Your systems do not just affect customers financially. They affect physical
              infrastructure, supply reliability, safety, and in the case of network operators, the grid
              itself. The accountability structures must reflect that.
            </Text>
            <Text variant="lead" tone="muted">
              Most AI governance frameworks were built for software or financial services environments. They
              do not account for the OT and IT boundary, the safety management integration requirements, the
              Ofgem-specific obligations around transparency and customer outcomes, or the operational
              workforce realities of a sector where many of the people affected by AI decisions are in the
              field, not at a desk.
            </Text>
            <Text variant="lead" tone="muted">
              We build governance that works in your operational context. Not frameworks that satisfy a
              policy review but fail when tested against a real failure scenario.
            </Text>
          </Stack>
          <Surface variant="mist" padding="lg" radius="lg">
            <Text variant="h4" className="mb-6 font-bold">
              Subsectors we work with
            </Text>
            <ul className="space-y-3">
              {[
                "Electricity transmission and distribution",
                "Gas transmission, distribution, and storage",
                "Water and wastewater utilities",
                "Renewable energy generation and storage",
                "Smart metering and demand-side response",
                "Energy retail and customer services",
                "Nuclear and specialist regulated generation",
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
          <Text variant="h2">What makes energy sector AI governance harder</Text>
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
          <Text variant="h2">Services for energy and utilities organisations</Text>
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
                title: "Operational and regulatory landscape",
                body:
                  "We map your AI use cases against your regulatory obligations, safety management framework, and operational context. We review your existing governance structures, meet your OT and IT leads, and identify where AI governance gaps create the greatest risk. We agree the scope with your regulatory and operations leads, not just your technology team.",
              },
              {
                phase: "Weeks 4–10",
                title: "Framework design",
                body:
                  "We build the governance framework integrated with your safety management system, produce the risk documentation your regulator and board require, and design the accountability structures that map to your existing operating model. All outputs are reviewed by your operations, safety, and compliance leads before finalisation.",
              },
              {
                phase: "Ongoing",
                title: "Embedding and capability transfer",
                body:
                  "We support implementation across both your corporate and operational teams, provide training that is adapted for field and control room environments, and build the internal capability for your teams to maintain and evolve the framework. Handover is planned from the start of the engagement.",
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

      <Section tone="mist" padding="lg" containerSize="narrow" containerClassName="max-w-[900px]">
        <Stack gap="lg">
          <Eyebrow>Common Questions</Eyebrow>
          <Text variant="h2">Questions energy organisations ask</Text>
          <Stack gap="md">
            {[
              {
                q: "What AI governance requirements apply to Ofgem-regulated organisations?",
                a:
                  "Ofgem has issued guidance on AI use in regulated energy activities, with particular focus on customer-facing AI systems, algorithmic pricing, and smart grid management. Organisations must be able to demonstrate that AI systems used in regulated activities meet transparency, accountability, and non-discrimination standards. Amplified builds governance frameworks that align to Ofgem guidance while satisfying broader UK AI regulatory requirements.",
              },
              {
                q: "How is AI being used in energy and utilities programmes?",
                a:
                  "The most mature AI use cases in energy and utilities include predictive maintenance for grid infrastructure, demand forecasting and load balancing, smart meter data analytics, customer service automation, and real-time network monitoring. Each of these has distinct governance requirements depending on whether they affect regulated activities, safety-critical systems, or customer outcomes.",
              },
              {
                q: "What makes AI governance different for a safety-critical environment?",
                a:
                  "Safety-critical environments require AI governance to integrate with existing safety management systems, not sit alongside them. Every AI system that could affect physical safety must have a documented failure mode analysis, a human override procedure, and a clear accountability chain that extends to operational teams on the ground. Amplified builds AI governance that satisfies both regulatory and safety management standards simultaneously.",
              },
              {
                q: "How does Amplified work alongside existing operational technology teams?",
                a:
                  "Amplified embeds within your existing programme and OT team structures rather than operating as an external advisory layer. This means governance frameworks are built with the people who will use them, accountability structures map to existing roles, and training is practical rather than theoretical. Handover is planned from day one so your teams own the capability when we leave.",
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
        title="Discuss your energy sector AI programme"
        lead="Whether you are building governance for a new AI deployment or addressing gaps identified by Ofgem or your safety regulator, we can help you build a framework that works in operational reality."
      >
        <Stack direction="row-responsive" gap="md" align="center" justify="center" className="flex-wrap">
          <AmpButton
            onClick={() => onOpenConsultation("Energy Sector AI Governance")}
            data-testid="button-energy-utilities-consultation"
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

export default SectorEnergyUtilities;
