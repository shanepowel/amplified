'use client';

import { memo } from "react";
import Link from "next/link";
import heroImg from "@assets/stock_images/financial-services-sector.webp";
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
import { createServiceSchema, createBreadcrumbSchema, financialServicesFAQSchema } from "@/lib/schemas";

interface Props {
  onOpenConsultation: (serviceType?: string) => void;
}

const deliverables = [
  {
    title: "FCA-Aligned AI Governance Framework",
    body: "A governance structure that satisfies FCA principles, Consumer Duty requirements, and SMCR accountability obligations for AI systems used in regulated activities. Every AI system is mapped to a named Senior Manager, every customer-facing model has documented explainability standards, and your board can answer FCA questions about your AI programme without preparation.",
    link: "/ai-governance",
    linkLabel: "AI Governance",
  },
  {
    title: "EU AI Act Dual-Compliance Programme",
    body: "For firms operating in both UK and EU markets, we build governance frameworks that satisfy both regimes simultaneously. We map your AI systems to EU AI Act risk classifications, identify the conformity assessment requirements for high-risk applications, and document the technical and governance controls required under both frameworks.",
    link: "/ai-governance",
    linkLabel: "AI Governance",
  },
  {
    title: "AI Risk Assessment and Model Risk Management",
    body: "Structured AI and model risk assessments aligned to SR 11-7 principles and your firm's existing risk framework. We assess model risk across explainability, fairness, data quality, operational resilience, and regulatory exposure, and produce documentation that satisfies your second and third lines of defence.",
    link: "/ai-governance",
    linkLabel: "AI Governance",
  },
  {
    title: "Structured AI Programme Delivery",
    body: "End-to-end delivery of AI implementation programmes within your governance and change management structures. We work within your change control process, produce the artefacts your Risk and Compliance teams require before going live, and build handover documentation that satisfies your internal audit function.",
    link: "/ai-implementation",
    linkLabel: "AI Implementation",
  },
  {
    title: "AI Capability Building for Financial Services Teams",
    body: "Practical training for Compliance, Risk, Technology, and Operations teams on understanding AI systems, conducting effective challenge of AI model outputs, and maintaining oversight standards under SMCR. Built for financial services professionals, not data scientists.",
    link: "/capability",
    linkLabel: "Capability Building",
  },
  {
    title: "AI Procurement and Vendor Assurance",
    body: "Governance and due diligence frameworks for procuring AI tools and platforms from third-party vendors. We assess vendor AI governance practices, build contractual requirements for explainability and audit access, and produce the third-party risk documentation your procurement and Risk functions require.",
    link: "/ai-governance",
    linkLabel: "AI Governance",
  },
];

const challenges = [
  "FCA Principles and Consumer Duty require AI systems affecting customer outcomes to be explainable, fair, and subject to documented human oversight, requirements most commercial AI tools do not address natively",
  "SMCR accountability means a named Senior Manager must own and be able to demonstrate oversight of every material AI system, which requires governance structures that go beyond what Technology teams alone can build",
  "The EU AI Act classifies several financial services AI applications as high-risk, including credit scoring, insurance underwriting, and employment decisions, triggering conformity assessment requirements that must be built before deployment",
  "Model risk management frameworks, whether based on SR 11-7 or internal standards, must be extended to cover machine learning models, which have different failure modes and explainability challenges than traditional quantitative models",
  "Third-party AI vendor risk is growing as firms adopt AI platforms where the underlying model is a black box, creating regulatory exposure if the vendor cannot satisfy FCA questions about model behaviour",
];

const fsSchema = createServiceSchema({
  name: 'AI Governance & Technology Delivery for Financial Services Organisations',
  url: 'https://amplified.co.uk/sectors/financial-services',
  description: 'FCA-aligned AI governance frameworks, EU AI Act compliance, and model risk management for banks, insurers, and regulated financial services firms.',
  keywords: [
    'AI governance financial services UK',
    'FCA AI compliance framework',
    'responsible AI financial regulation',
    'EU AI Act financial services',
    'SMCR AI accountability',
    'model risk management AI',
  ],
});

const breadcrumbSchema = createBreadcrumbSchema([
  { name: 'Home', url: 'https://amplified.co.uk/' },
  { name: 'Sectors', url: 'https://amplified.co.uk/sectors/financial-services' },
  { name: 'Financial Services', url: 'https://amplified.co.uk/sectors/financial-services' },
]);


const SectorFinancialServices = memo(function SectorFinancialServices({ onOpenConsultation }: Props) {
  return (
    <PageShell>
      <StructuredData data={fsSchema} id="financial-services-schema" />
      <StructuredData data={breadcrumbSchema} id="financial-services-breadcrumb" />
      <StructuredData data={financialServicesFAQSchema} id="financial-services-faq" />

      <BreadcrumbBar
        items={[
          { label: "Home", href: "/" },
          { label: "Sectors", href: "/sectors/infrastructure" },
          { label: "Financial Services" },
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
              Financial Services Organisations
            </Text>
            <Text variant="lead" tone="white-75" className="max-w-2xl">
              Banks, insurers, and regulated financial services firms face the most demanding AI governance
              environment of any sector. FCA principles, Consumer Duty, SMCR, EU AI Act, SR 11-7 model risk
              standards. We build governance frameworks that satisfy all of them, without creating a parallel
              compliance process that slows down your technology programme.
            </Text>
            <Stack direction="row-responsive" gap="md" className="flex-wrap">
              <AmpButton
                onClick={() => onOpenConsultation("Financial Services AI Governance")}
                data-testid="button-financial-services-hero"
              >
                Discuss your AI programme
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
            <Text variant="h2">Why generic AI governance fails in financial services</Text>
            <Text variant="lead" tone="muted">
              The AI governance frameworks published by technology vendors, most consulting firms, and even
              regulators are written for organisations where failure is recoverable. In financial services, AI
              failure can mean regulatory enforcement, customer harm at scale, or individual accountability
              under SMCR. The tolerance for error is different. The governance framework must reflect that.
            </Text>
            <Text variant="lead" tone="muted">
              We build AI governance specifically for firms where the regulatory context, FCA Principles,
              Consumer Duty, EU AI Act, Senior Managers and Certification Regime, is the governing
              constraint, not a compliance checkbox. This means governance that is built into your operating
              model, not bolted on top of it.
            </Text>
            <Text variant="lead" tone="muted">
              Our partners have worked inside regulated financial services organisations. We understand the
              difference between what passes a model risk review and what a CRO will actually sign off. We
              build to the higher standard.
            </Text>
          </Stack>
          <Surface variant="mist" padding="lg" radius="lg">
            <Text variant="h4" className="mb-6 font-bold">
              Regulatory frameworks we align to
            </Text>
            <ul className="space-y-3">
              {[
                "FCA Principles for Businesses (Principles 3, 6, 7, 9, 11, 12)",
                "Consumer Duty (fair outcomes, price and value, understanding, support)",
                "SMCR (Senior Manager accountability, individual responsibility)",
                "EU AI Act (risk classification, conformity assessments, high-risk applications)",
                "UK AI Regulatory Framework (DSIT, cross-sector guidance)",
                "SR 11-7 (model risk management principles, validation standards)",
                "UK GDPR Article 22 (automated decision-making rights)",
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
          <Text variant="h2">What makes financial services AI governance harder</Text>
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
          <Text variant="h2">Services for financial services organisations</Text>
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
                phase: "Weeks 1–4",
                title: "Regulatory and AI landscape mapping",
                body:
                  "We map your current AI use against the regulatory frameworks that apply, identify the highest-risk systems for immediate governance attention, and agree the scope and structure of the governance framework. We work with your Compliance, Risk, and Technology leads from the start so the framework reflects operational reality.",
              },
              {
                phase: "Weeks 5–12",
                title: "Framework design and documentation",
                body:
                  "We build the governance framework, including accountability mapping, risk assessment templates, model risk documentation, board reporting structures, and change management processes. All outputs go through review by your second-line functions before finalisation. The framework is built to last, not to be replaced in the next regulatory cycle.",
              },
              {
                phase: "Ongoing",
                title: "Embedding and assurance",
                body:
                  "We support the implementation of the framework within your change management process, train the teams who will use it, and provide retained advisory support through your first AI deployment cycle. The goal is for your Compliance and Technology teams to own and operate the framework independently within twelve months.",
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
          <Text variant="h2">Questions financial services firms ask</Text>
          <Stack gap="md">
            {[
              {
                q: "What does FCA-aligned AI governance look like in practice?",
                a:
                  "FCA-aligned AI governance means every AI system used in regulated activities has a documented accountability owner, a model risk assessment aligned to SR 11-7 principles, explainability standards that satisfy Principle 6 (fair treatment of customers), and a change management process that triggers regulatory notification where required. It also means your board can answer questions about your AI systems if the FCA asks.",
              },
              {
                q: "How does the EU AI Act affect UK financial services firms?",
                a:
                  "UK financial services firms operating in EU markets, offering products to EU customers, or processing data from EU subjects must comply with the EU AI Act. High-risk AI applications in credit scoring, insurance underwriting, and employment decisions face the strictest requirements. Amplified builds dual-compliance frameworks that satisfy both UK FCA requirements and EU AI Act obligations.",
              },
              {
                q: "What is SMCR accountability for AI systems?",
                a:
                  "Under SMCR, Senior Managers are individually accountable for the areas they oversee, including technology and AI systems. This means a named Senior Manager must own every material AI system, understand its risk profile, and be able to demonstrate adequate oversight if the FCA investigates. Amplified structures AI governance frameworks to satisfy SMCR accountability requirements explicitly.",
              },
              {
                q: "How quickly can Amplified implement an AI governance framework?",
                a:
                  "For most financial services organisations, an initial AI governance framework covering existing systems and controls can be delivered in eight to twelve weeks. This includes a risk assessment of current AI use, an accountability mapping exercise, policy documentation, and board reporting templates. Ongoing assurance and monitoring is then structured as a retained service.",
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
        title="Discuss your financial services AI governance programme"
        lead="Whether you are preparing for your first FCA question about AI or building a governance framework for a major AI implementation programme, we can help you get it right before it becomes a regulatory issue."
      >
        <Stack direction="row-responsive" gap="md" align="center" justify="center" className="flex-wrap">
          <AmpButton
            onClick={() => onOpenConsultation("Financial Services AI Governance")}
            data-testid="button-financial-services-consultation"
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

export default SectorFinancialServices;
