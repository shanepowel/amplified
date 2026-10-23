'use client';

import { memo } from "react";
import Link from "next/link";
import heroImg from "@assets/stock_images/public-sector.webp";
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
import { createServiceSchema, createBreadcrumbSchema, publicSectorFAQSchema } from "@/lib/schemas";

interface Props {
  onOpenConsultation: (serviceType?: string) => void;
}

const deliverables = [
  {
    title: "GDS-Aligned AI Delivery Framework",
    body: "AI governance and delivery frameworks built to satisfy the GDS Service Standard, the Algorithmic Transparency Recording Standard, and CDDO guidance on responsible AI adoption. We adapt these standards to your specific programme context, whether a central government department, arm's length body, or local authority.",
    link: "/ai-governance",
    linkLabel: "AI Governance",
  },
  {
    title: "Automated Decision-Making Governance",
    body: "Governance frameworks for AI systems used in public sector decision-making that satisfy UK GDPR Article 22, the ATRS, and the explainability requirements that elected members, scrutiny committees, and the public can interrogate. We design accountability structures that work within public sector governance, not around it.",
    link: "/ai-governance",
    linkLabel: "AI Governance",
  },
  {
    title: "AI Readiness Assessment for Public Bodies",
    body: "A structured assessment of your organisation's readiness to adopt AI responsibly, covering data maturity, governance structures, workforce capability, procurement constraints, and regulatory obligations. Outputs include a business case structure, risk register, and prioritised roadmap ready for your SRO and governance board.",
    link: "/ai-governance",
    linkLabel: "AI Governance",
  },
  {
    title: "Structured Delivery within Public Sector Governance",
    body: "Sprint-based delivery adapted for public sector operating environments: business case approvals, spend controls, Cabinet Office assurance, and the documentation standards that Treasury, CDDO, and your departmental governance require. Delivery is faster and more responsive without compromising the assurance trail.",
    link: "/structured-delivery",
    linkLabel: "Structured Delivery",
  },
  {
    title: "Digital Capability Building for Public Sector Teams",
    body: "Practical training for policy, operations, and technology teams on AI tools, data literacy, and governance standards. We build capability that your internal teams can own and develop after the engagement ends, reducing long-term dependency on external partners and satisfying the GDS requirement for sustainable internal capability.",
    link: "/capability",
    linkLabel: "Capability Building",
  },
  {
    title: "AI Ethics and Responsible Technology Advisory",
    body: "Advisory support for organisations navigating the ethical dimensions of AI adoption in public services: algorithmic fairness, bias assessment, community impact, and the public accountability requirements that do not apply in the private sector. We bring both technical rigour and public sector experience to these questions.",
    link: "/ai-governance",
    linkLabel: "AI Governance",
  },
];

const challenges = [
  "The GDS Service Standard, Algorithmic Transparency Recording Standard, and CDDO guidance create specific governance obligations for AI in public services that most commercial AI governance frameworks do not address",
  "Public sector procurement constraints, including G-Cloud, DOS, and spend control approvals, require governance work and business cases to be structured in ways that are compatible with public sector buying processes, not just commercial contract terms",
  "Elected accountability and public transparency requirements mean that AI systems used in public sector decision-making must be explainable to non-technical audiences including elected members, scrutiny committees, and the public themselves",
  "The breadth of services delivered by public bodies, from benefit assessments to planning decisions to enforcement, creates a diverse AI governance landscape where a single framework must accommodate very different risk profiles and accountability requirements",
  "Budget constraints and capability gaps mean public bodies often need governance frameworks that their own teams can operate without sustained external support, requiring a different approach to handover and capability building than private sector engagements",
];

const publicSectorServiceSchema = createServiceSchema({
  name: 'AI Governance & Technology Delivery for Public Sector Organisations',
  url: 'https://amplified.co.uk/sectors/public-sector',
  description: 'GDS-aligned AI governance, responsible AI frameworks, and structured digital delivery for central government, local authorities, and arm\'s length bodies.',
  keywords: [
    'AI governance public sector UK',
    'GDS aligned AI delivery',
    'technology delivery local government',
    'AI Act public sector UK',
    'algorithmic transparency public sector',
    'public sector digital transformation',
  ],
});

const breadcrumbSchema = createBreadcrumbSchema([
  { name: 'Home', url: 'https://amplified.co.uk/' },
  { name: 'Sectors', url: 'https://amplified.co.uk/sectors/public-sector' },
  { name: 'Public Sector', url: 'https://amplified.co.uk/sectors/public-sector' },
]);


const SectorPublicSector = memo(function SectorPublicSector({ onOpenConsultation }: Props) {
  return (
    <PageShell>
      <StructuredData data={publicSectorServiceSchema} id="public-sector-schema" />
      <StructuredData data={breadcrumbSchema} id="public-sector-breadcrumb" />
      <StructuredData data={publicSectorFAQSchema} id="public-sector-faq" />

      <BreadcrumbBar
        items={[
          { label: "Home", href: "/" },
          { label: "Sectors", href: "/sectors/infrastructure" },
          { label: "Public Sector" },
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
              Public Sector Organisations
            </Text>
            <Text variant="lead" tone="white-75" className="max-w-2xl">
              Public sector AI adoption carries accountability to citizens that private sector organisations
              do not face. Elected scrutiny, freedom of information, public transparency, and the
              consequences of algorithmic decisions affecting people's lives, benefits, planning,
              enforcement. We build AI governance that meets the public sector standard, not the commercial
              standard.
            </Text>
            <Stack direction="row-responsive" gap="md" className="flex-wrap">
              <AmpButton
                onClick={() => onOpenConsultation("Public Sector AI Governance")}
                data-testid="button-public-sector-hero"
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
            <Text variant="h2">Why public sector AI governance is different</Text>
            <Text variant="lead" tone="muted">
              Public sector organisations face AI governance obligations that have no equivalent in the private
              sector. The GDS Service Standard, the Algorithmic Transparency Recording Standard, and the
              public accountability requirements that apply when government decisions affect citizens create a
              governance environment that most commercial AI frameworks simply do not address.
            </Text>
            <Text variant="lead" tone="muted">
              At the same time, public bodies often have less internal capability to build and operate
              governance frameworks than their private sector counterparts, face procurement constraints that
              shape what is and is not possible, and are under pressure to demonstrate value for public money
              in ways that commercial organisations are not.
            </Text>
            <Text variant="lead" tone="muted">
              We understand this context. Our frameworks are built to be operated by your teams, within your
              budget constraints, and within the procurement and governance structures of a public sector
              organisation.
            </Text>
          </Stack>
          <Surface variant="mist" padding="lg" radius="lg">
            <Text variant="h4" className="mb-6 font-bold">
              Public bodies we work with
            </Text>
            <ul className="space-y-3">
              {[
                "Central government departments and agencies",
                "Arm's length bodies and non-departmental public bodies",
                "Local authorities and combined authorities",
                "NHS trusts and integrated care boards",
                "Police forces and justice organisations",
                "Regulatory bodies and inspectorates",
                "Public sector shared services and delivery organisations",
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
          <Text variant="h2">What makes public sector AI governance harder</Text>
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
          <Text variant="h2">Services for public sector organisations</Text>
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
                title: "Programme and governance mapping",
                body:
                  "We map your AI use cases against the governance and regulatory requirements that apply, review your existing internal governance structures, and agree the engagement scope with your SRO and Digital Director. We work within your approvals process from the start, not around it.",
              },
              {
                phase: "Weeks 4–10",
                title: "Framework design and assurance",
                body:
                  "We build the governance framework, produce the ATRS documentation, design the accountability structures, and produce the board-level reporting that your governance requires. All outputs go through your second-line and legal review before finalisation. The framework is built for your teams to operate, not for us to maintain.",
              },
              {
                phase: "Ongoing",
                title: "Embedding and capability transfer",
                body:
                  "We build the internal capability for your teams to own and evolve the framework, provide training for policy and operations teams as well as technology teams, and structure handover to reduce long-term external dependency. Procurement-compliant retained support is available through G-Cloud.",
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
          <Text variant="h2">Questions public sector organisations ask</Text>
          <Stack gap="md">
            {[
              {
                q: "What is the GDS Service Standard and how does it apply to AI?",
                a:
                  "The GDS Service Standard sets out 14 principles for designing and delivering government digital services. For AI systems, the most relevant standards are: understanding users and their needs (including how AI affects them), making the service accessible, testing with real users, and making source code open. Amplified applies the GDS Service Standard to AI delivery specifically, adapting it for systems that use machine learning and automated decision-making.",
              },
              {
                q: "How does the UK AI in Public Sector framework affect local authorities?",
                a:
                  "The UK Government's AI in Public Sector framework, combined with CDDO guidance, sets expectations for how public bodies should assess, procure, and govern AI systems. Local authorities using AI in benefit assessments, planning decisions, or enforcement must ensure those systems are explainable, regularly audited, and do not produce discriminatory outcomes. Amplified builds governance structures that satisfy these requirements and prepare organisations for DSIT scrutiny.",
              },
              {
                q: "Can public sector organisations use AI in decision-making?",
                a:
                  "Yes, but with specific governance requirements. The Algorithmic Transparency Recording Standard (ATRS) requires public sector bodies to publish records of algorithms used in significant decisions. Automated decisions affecting individuals must comply with UK GDPR Article 22. Amplified structures AI governance to ensure all automated and AI-assisted decision-making is properly documented, explainable, and has appropriate human oversight.",
              },
              {
                q: "How does Amplified work within public sector procurement constraints?",
                a:
                  "Amplified is experienced working within public sector procurement frameworks including G-Cloud, DOS/Digital Outcomes, and Crown Commercial Service agreements. Engagements are structured to comply with procurement rules, with clear statement of work, defined deliverables, and milestone-based payment structures. We also support organisations through the business case and approval process before an engagement begins.",
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
        title="Discuss your public sector AI programme"
        lead="Whether you are building governance for a new AI service, responding to scrutiny about existing algorithmic systems, or developing your AI strategy, we can help you get it right for the public sector context."
      >
        <Stack direction="row-responsive" gap="md" align="center" justify="center" className="flex-wrap">
          <AmpButton
            onClick={() => onOpenConsultation("Public Sector AI Governance")}
            data-testid="button-public-sector-consultation"
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

export default SectorPublicSector;
