'use client';

import { memo } from "react";
import Link from "next/link";
import heroImg from "@assets/stock_images/ai-governance-hero.webp";
import Image from 'next/image';
import { ArrowRight, CheckCircle, Shield } from "lucide-react";
import { ServiceSchema, StructuredData } from "@/components/structured-data";
import {
  PageShell,
  BreadcrumbBar,
  CtaBand,
  Container,
  Section,
  Stack,
  Grid,
  Text,
  Eyebrow,
  Surface,
  AmpButton,
  ContentCard,
  BorderGrid,
  BorderCell,
} from "@/components/system";
import { aiGovernanceFAQSchema, createBreadcrumbSchema } from "@/lib/schemas";
import { FurtherReading } from "@/components/further-reading";

interface AiGovernanceProps {
  onOpenConsultation: (serviceType?: string) => void;
}

const services = [
  {
    title: "AI Readiness Assessment",
    body: "A structured review of your current readiness to adopt AI responsibly. We assess governance maturity, data infrastructure, team capability, regulatory alignment, and risk appetite, and deliver a clear sequenced roadmap.",
    deliverable: "AI Readiness Report with prioritised action plan.",
  },
  {
    title: "Responsible AI Framework Design",
    body: "We design AI governance frameworks built for your sector, covering decision accountability, bias and fairness standards, explainability requirements, data governance, and ongoing monitoring.",
    deliverable: "Aligned to: EU AI Act, UK AI Governance Framework, ISO/IEC 42001, FCA guidance, GDS standards.",
  },
  {
    title: "AI Policy Development",
    body: "End-to-end policy design covering acceptable use, data handling, model governance, procurement standards for AI vendors, and board-level AI risk reporting.",
    deliverable: null,
  },
  {
    title: "Regulatory Alignment Review",
    body: "We map your AI plans against the standards you'll be assessed against, OFGEM, FCA, GDS, NEC, and identify gaps before they become audit findings.",
    deliverable: null,
  },
  {
    title: "AI Governance Training",
    body: "Practical training for technical teams, senior leaders, and governance boards, covering AI risk, responsible AI principles, and how to interrogate AI suppliers.",
    deliverable: null,
  },
];

const standards = [
  "EU AI Act (2024), risk classification, conformity assessments, prohibited practices",
  "UK AI Governance Framework, DSIT guidance on responsible AI adoption",
  "ISO/IEC 42001, AI management system standard",
  "FCA Consumer Duty, explainability and fairness requirements",
  "GDS Service Standard, public sector digital and AI delivery standards",
  "OFGEM AI guidance, energy sector considerations",
  "NCSC AI Security Guidelines, securing AI in critical infrastructure",
];

const gaps = [
  "Regulatory requirements that apply directly to how AI is used and audited",
  "Procurement and assurance processes that need to interrogate AI decisions",
  "Operational risk profiles that make 'move fast and break things' commercially unacceptable",
  "Workforces and leadership teams who need to trust AI outputs before they act on them",
];

const AiGovernance = memo(function AiGovernance({ onOpenConsultation }: AiGovernanceProps) {
  return (
    <PageShell>
      <ServiceSchema name="AI Governance" description="Responsible AI governance frameworks, policies, and assurance structures for infrastructure, energy, financial services and public sector organisations. EU AI Act, FCA, GDS aligned." url="https://amplified.co.uk/ai-governance" />
      <StructuredData data={aiGovernanceFAQSchema} id="ai-governance-faq-schema" />
      <StructuredData data={createBreadcrumbSchema([{ name: 'Home', url: 'https://amplified.co.uk/' }, { name: 'AI Governance', url: 'https://amplified.co.uk/ai-governance' }])} id="ai-governance-breadcrumb" />

      <BreadcrumbBar items={[{ label: "Home", href: "/" }, { label: "AI Governance" }]} />

      <Section tone="navy" padding="xl" className="relative overflow-hidden" contained={false}>
        <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-[48%] lg:block" aria-hidden="true">
          <Image src={heroImg} alt="" aria-hidden="true" fill className="object-cover opacity-30" priority sizes="48vw" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#181F4F] via-[#181F4F]/80 to-transparent" />
        </div>
        <Container className="relative">
          <Stack gap="lg" className="max-w-[720px]">
            <Eyebrow>AMP 01</Eyebrow>
            <Text variant="display" tone="white">AI Governance</Text>
            <Text variant="lead" tone="white-75">
              AI implementation without governance isn&apos;t innovation. In a regulated industry, it&apos;s a
              liability.
            </Text>
            <Text variant="lead" tone="white-75">
              Amplified builds the governance frameworks, policies, and assurance structures your
              organisation needs to adopt AI with confidence, before your board asks the question.
            </Text>
            <Surface variant="inset" padding="md" radius="sm" className="max-w-[540px] border-l-4 border-[#F85C70] bg-[rgba(248,92,112,0.08)]">
              <Text variant="h4" tone="white" className="italic font-normal">
                &ldquo;The question isn&apos;t whether to adopt AI. It&apos;s whether your governance can support it.&rdquo;
              </Text>
            </Surface>
          </Stack>
        </Container>
      </Section>

      <Section tone="mist" padding="lg">
        <Grid cols="2-lg" gap="xl" equal={false}>
          <Stack gap="md">
            <Eyebrow tone="subtle" className="text-[#60266A]">
              The governance gap most AI consultancies ignore
            </Eyebrow>
            <Text variant="h2">
              Most AI consultancies are built for tech companies and scale-ups. They know how to
              ship fast. They don&apos;t always know how to ship accountably.
            </Text>
            <Text variant="body" tone="muted">
              Project-driven organisations operate under fundamentally different constraints:
            </Text>
          </Stack>
          <Stack gap="sm" className="pt-8 lg:pt-16">
            {gaps.map((gap) => (
              <Surface key={gap} variant="plain" padding="md" radius="sm" className="flex items-start gap-3">
                <Shield className="mt-0.5 h-5 w-5 shrink-0 text-[#F85C70]" aria-hidden="true" />
                <Text variant="small" tone="muted">{gap}</Text>
              </Surface>
            ))}
          </Stack>
        </Grid>
      </Section>

      <Section tone="white" padding="lg">
        <Stack gap="xl">
          <Eyebrow tone="subtle">What we deliver</Eyebrow>
          <Text variant="h2">AI Governance Services</Text>
          <BorderGrid cols={3} className="border-l border-t border-[#E5E3EE]">
            {services.map((service) => (
              <BorderCell key={service.title} className="flex h-full flex-col border-[#E5E3EE]">
                <div className="mb-6 h-8 w-1 rounded bg-[#F85C70]" />
                <Text variant="h3" className="mb-4">{service.title}</Text>
                <Text variant="small" tone="muted" className="mb-3 flex-1">{service.body}</Text>
                {service.deliverable ? (
                  <Text variant="caption" className="italic text-[#60266A]">{service.deliverable}</Text>
                ) : null}
              </BorderCell>
            ))}
          </BorderGrid>
        </Stack>
      </Section>

      <Section tone="navy" padding="lg">
        <Stack gap="lg">
          <Eyebrow>Standards we align to</Eyebrow>
          <Text variant="h2" tone="white">Regulatory Alignment</Text>
          <Grid cols={2} gap="md">
            {standards.map((standard) => (
              <Surface
                key={standard}
                variant="inset"
                padding="md"
                radius="sm"
                className="flex items-start gap-3 border border-white/10"
              >
                <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-[#F85C70]" aria-hidden="true" />
                <Text variant="small" tone="white-75">{standard}</Text>
              </Surface>
            ))}
          </Grid>
        </Stack>
      </Section>

      <FurtherReading tags={["AI Governance", "Regulated Industries", "AI Capability"]} maxArticles={3} />

      <Section tone="mist" padding="md">
        <Stack gap="md">
          <Text variant="small" tone="muted">
            This service is designed for specific roles. Read more about how we work with:
          </Text>
          <Stack direction="row" gap="sm" className="flex-wrap">
            {[
              { label: "Chief Information Officers", href: "/for-cios" },
              { label: "Digital Leads", href: "/for-digital-leads" },
            ].map((link) => (
              <AmpButton key={link.label} asChild variant="navy" size="sm">
                <Link href={link.href}>{link.label} &rarr;</Link>
              </AmpButton>
            ))}
          </Stack>
        </Stack>
      </Section>

      <Section tone="purple" padding="lg">
        <Stack gap="lg" align="center" className="text-center">
          <Text variant="h2" tone="white">Ready to Build Your Governance?</Text>
          <Text variant="lead" tone="white-80" className="max-w-[480px]">
            Start with an AI Readiness Assessment. We&apos;ll tell you exactly where you are and what
            needs to happen before you implement.
          </Text>
          <AmpButton asChild size="xl" data-testid="button-ai-governance-cta">
            <Link href="/contact">
              Start a Conversation <ArrowRight className="h-4 w-4" />
            </Link>
          </AmpButton>
          <Text variant="small" tone="white-45">No pitch. No deck. Just a 30-minute call.</Text>
        </Stack>
      </Section>
    </PageShell>
  );
});

export default AiGovernance;
