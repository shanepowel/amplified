'use client';

import { memo } from "react";
import Link from "next/link";
import heroImg from "@assets/stock_images/ai-implementation-service.webp";
import Image from "next/image";
import { ArrowRight, CheckCircle, Zap } from "lucide-react";
import { ServiceSchema, StructuredData } from "@/components/structured-data";
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
import { aiImplementationFAQSchema, createBreadcrumbSchema } from "@/lib/schemas";

interface AiImplementationProps {
  onOpenConsultation: (serviceType?: string) => void;
}

const services = [
  {
    title: "Use Case Identification and Prioritisation",
    body: "We work with your teams to identify where AI can deliver genuine value inside your existing processes and governance structures. We prioritise by feasibility, regulatory risk, and organisational readiness, not by what is technically exciting.",
    deliverable: "Use case register with prioritised implementation roadmap.",
  },
  {
    title: "Proof of Concept Development",
    body: "We build and test AI capabilities in a controlled, governed environment before any production commitment. Every POC is designed with production in mind from day one, including auditability, explainability, and handover requirements.",
    deliverable: null,
  },
  {
    title: "Production-Grade AI Delivery",
    body: "From POC to live system, embedded with your engineering and programme teams. We manage delivery within your existing PMO frameworks, stage gates, and assurance structures. No shortcuts on governance to hit a sprint deadline.",
    deliverable: null,
  },
  {
    title: "Integration with Existing Systems and Frameworks",
    body: "AI systems that work within your existing enterprise architecture, not around it. We design integrations that respect your data governance requirements, security posture, and operational constraints.",
    deliverable: null,
  },
  {
    title: "Capability Transfer and Handover",
    body: "Every implementation includes structured knowledge transfer to your internal teams. Documentation, training, and embedded upskilling so your organisation can operate and evolve the system without us in the room twelve months later.",
    deliverable: "Handover pack, runbook, and internal capability programme.",
  },
  {
    title: "Post-Implementation Review",
    body: "We return at agreed intervals to review performance, identify drift, assess emerging risks, and recommend iterative improvements. AI systems are not static and neither is our support.",
    deliverable: null,
  },
];

const principles = [
  {
    title: "Governance-first, always",
    body: "We do not start building until the governance framework is in place. That is not bureaucracy. That is how you avoid building something you cannot defend.",
  },
  {
    title: "Embedded, not parachuted",
    body: "Our practitioners work inside your teams. We do not deliver from a distance and hand over a document. We sit in your standups, attend your governance boards, and work through the hard parts with you.",
  },
  {
    title: "Accountability throughout",
    body: "Every AI system we deliver has a clear owner, a clear risk register, and a clear audit trail. If your governance board asks a question, you can answer it.",
  },
  {
    title: "No vendor lock-in",
    body: "We are platform and vendor agnostic. We recommend what is right for your organisation and your operating constraints, not what earns us a referral fee.",
  },
];

const gaps = [
  "POC completed, production delivery stalled at governance review",
  "Vendor solution deployed, but internal teams cannot support or evolve it",
  "AI system live, but no audit trail and no explainability framework",
  "Implementation delivered, but organisational capability not transferred",
  "AI project approved, but no integration with existing PMO or assurance structures",
];

const related = [
  {
    tag: "AMP 01",
    title: "AI Governance",
    body: "The governance framework that makes responsible AI implementation possible. We typically run AMP 01 and AMP 02 together.",
    href: "/ai-governance",
  },
  {
    tag: "AMP 03",
    title: "Structured Delivery",
    body: "Squad-based delivery models designed for organisations where governance and programme rigour are non-negotiable.",
    href: "/structured-delivery",
  },
  {
    tag: "AMP 04",
    title: "Capability Building",
    body: "Building the internal capability your teams need to operate and evolve AI systems after we have left.",
    href: "/capability",
  },
];

const AiImplementation = memo(function AiImplementation({
  onOpenConsultation,
}: AiImplementationProps) {
  return (
    <PageShell>
      <ServiceSchema
        name="AI Implementation"
        description="End-to-end AI implementation with governance built in. Use case identification, proof of concept, production-grade delivery, and capability transfer for regulated industries."
        url="https://amplified.co.uk/ai-implementation"
      />
      <StructuredData data={aiImplementationFAQSchema} id="ai-implementation-faq-schema" />
      <StructuredData
        data={createBreadcrumbSchema([
          { name: "Home", url: "https://amplified.co.uk/" },
          { name: "AI Implementation", url: "https://amplified.co.uk/ai-implementation" },
        ])}
        id="ai-implementation-breadcrumb"
      />
      <BreadcrumbBar items={[{ label: "Home", href: "/" }, { label: "AI Implementation" }]} />

      <PageHero
        eyebrow="AMP 02"
        title="AI Implementation"
        lead="We do not just advise on AI. We build it with you, inside your governance, all the way from use case identification to production deployment and capability handover."
      >
        <Text variant="lead" tone="white-75" className="max-w-[580px]">
          In regulated industries, AI implementation is not just a technical challenge. It is a
          governance, accountability, and change management challenge. We have done all three.
        </Text>
        <Surface
          variant="inset"
          padding="md"
          radius="sm"
          className="max-w-[540px] border-l-4 border-[#F85C70] bg-[rgba(248,92,112,0.08)]"
        >
          <Text variant="h4" tone="white" className="font-normal italic">
            &ldquo;A proof of concept that cannot pass your governance board is not a proof of
            anything.&rdquo;
          </Text>
        </Surface>
        <AmpButton onClick={() => onOpenConsultation("ai-implementation")}>
          Start a Conversation <ArrowRight className="h-4 w-4" />
        </AmpButton>
      </PageHero>

      <Section tone="white" padding="md" className="border-b border-[#E5E3EE]">
        <div className="relative mx-auto hidden aspect-[21/9] max-w-[960px] overflow-hidden rounded lg:block">
          <Image
            src={heroImg}
            alt="AI implementation in regulated environments"
            fill
            className="object-cover"
            priority
            sizes="960px"
          />
        </div>
      </Section>

      <Section tone="mist" padding="lg">
        <Grid cols="2-lg" gap="xl" equal={false}>
          <Stack gap="md">
            <Eyebrow tone="subtle" className="text-[#60266A]">
              The implementation gap most AI consultancies leave
            </Eyebrow>
            <Text variant="h2">
              Most AI projects stall between POC and production. We specialise in the part most
              consultancies skip.
            </Text>
            <Text variant="body" tone="muted">
              Getting an AI model to work in a sandbox is not the same as deploying it in a regulated
              environment where every decision needs to be explainable, every data flow needs to be
              auditable, and every risk needs to be signed off by a governance board.
            </Text>
            <Text variant="body" tone="muted">
              We bridge that gap. From the first use case assessment through to production delivery,
              change management, and internal capability transfer, we stay for the full journey.
            </Text>
          </Stack>
          <Stack gap="sm" className="pt-8 lg:pt-16">
            {gaps.map((gap) => (
              <Surface
                key={gap}
                variant="panel"
                padding="md"
                radius="sm"
                className="flex items-start gap-3"
              >
                <Zap className="mt-0.5 h-5 w-5 shrink-0 text-[#F85C70]" aria-hidden="true" />
                <Text variant="small" tone="muted">
                  {gap}
                </Text>
              </Surface>
            ))}
          </Stack>
        </Grid>
      </Section>

      <Section tone="white" padding="lg">
        <Stack gap="xl">
          <Eyebrow tone="subtle">What we deliver</Eyebrow>
          <Text variant="h2">AI Implementation Services</Text>
          <BorderGrid cols={3} className="border-l border-t border-[#E5E3EE]">
            {services.map((service) => (
              <BorderCell key={service.title} className="flex h-full flex-col border-[#E5E3EE] p-8">
                <div className="mb-6 h-8 w-1 rounded bg-[#F85C70]" />
                <Text variant="h3" className="mb-4">
                  {service.title}
                </Text>
                <Text variant="small" tone="muted" className="mb-3 flex-1">
                  {service.body}
                </Text>
                {service.deliverable ? (
                  <Text variant="caption" className="italic text-[#60266A]">
                    {service.deliverable}
                  </Text>
                ) : null}
              </BorderCell>
            ))}
          </BorderGrid>
        </Stack>
      </Section>

      <Section tone="navy" padding="lg">
        <Stack gap="xl">
          <Eyebrow>How we work</Eyebrow>
          <Text variant="h2" tone="white">
            Four things that make our implementation different
          </Text>
          <BorderGrid cols={2} className="border-l border-t border-white/10">
            {principles.map((principle) => (
              <BorderCell key={principle.title} className="border-white/10 p-8">
                <CheckCircle className="mb-4 h-5 w-5 text-[#F85C70]" aria-hidden="true" />
                <Text variant="h4" tone="white" className="mb-3">
                  {principle.title}
                </Text>
                <Text variant="small" tone="white-70">
                  {principle.body}
                </Text>
              </BorderCell>
            ))}
          </BorderGrid>
        </Stack>
      </Section>

      <Section tone="white" padding="md" className="border-b border-[#E5E3EE]">
        <Stack gap="lg">
          <Eyebrow tone="subtle">Works alongside</Eyebrow>
          <BorderGrid cols={3} className="border-l border-t border-[#E5E3EE]">
            {related.map((item) => (
              <BorderCell key={item.tag} className="group border-[#E5E3EE] p-0">
                <Link
                  href={item.href}
                  className="flex h-full flex-col p-8 transition-colors duration-150 hover:bg-[#F9F8FC]"
                >
                  <Eyebrow className="mb-3">{item.tag}</Eyebrow>
                  <Text variant="h4" className="mb-3">
                    {item.title}
                  </Text>
                  <Text variant="small" tone="muted" className="mb-6 flex-1">
                    {item.body}
                  </Text>
                  <span className="inline-flex items-center gap-2 text-sm font-semibold text-[#F85C70] transition-all duration-200 group-hover:gap-3">
                    Learn more <ArrowRight className="h-3 w-3" />
                  </span>
                </Link>
              </BorderCell>
            ))}
          </BorderGrid>
        </Stack>
      </Section>

      <CtaBand
        tone="purple"
        title="Ready to Move Beyond the POC?"
        lead="Start with a use case assessment. We will tell you exactly what it will take to deliver your AI ambition inside your governance constraints."
      >
        <AmpButton asChild size="xl" data-testid="button-ai-implementation-cta">
          <Link href="/contact">
            Start a Conversation <ArrowRight className="h-4 w-4" />
          </Link>
        </AmpButton>
        <Text variant="small" tone="white-45">
          No pitch. No deck. Just a 30-minute call.
        </Text>
      </CtaBand>
    </PageShell>
  );
});

export default AiImplementation;
