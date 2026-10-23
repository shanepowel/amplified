'use client';

import { memo } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle } from "lucide-react";
import transformImage from "@assets/59_1760471391711.webp";
import { ServiceSchema } from "@/components/structured-data";
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
import { FurtherReading } from "@/components/further-reading";

interface TransformationProps {
  onOpenConsultation?: (serviceType?: string) => void;
}

const whatWeBuild = [
  {
    title: "Custom Software and Platform Engineering",
    body: "Greenfield builds, platform rewrites, and microservices architectures designed from the start for scale, reliability, and operability. Our engineers architect and build alongside your teams.",
  },
  {
    title: "AI-Native Systems",
    body: "Production-grade AI systems built within your governance and accountability structures. We design the data pipelines, model integrations, and observability layers that make AI reliable in regulated environments.",
  },
  {
    title: "Data Infrastructure and Analytics Platforms",
    body: "Data engineering, event-driven architectures, and analytics platforms built for organisations where data quality and lineage are non-negotiable. We go beyond dashboards to the infrastructure underneath.",
  },
  {
    title: "Legacy Modernisation",
    body: "Systematic migration from legacy systems without big-bang risk. We assess, sequence, and deliver modernisation programmes that keep the organisation running while the foundations change.",
  },
  {
    title: "API-First Integration Architecture",
    body: "Connecting systems that were never designed to connect, inside organisations where integration risk is real. We design for resilience, observability, and the realities of production failure.",
  },
  {
    title: "DevOps and Infrastructure as Code",
    body: "CI/CD pipelines, cloud-native infrastructure, and platform engineering practices that give your delivery teams the ground to move quickly without losing control.",
  },
];

const howWeWork = [
  {
    step: "01",
    title: "We embed, not advise",
    body: "Our engineers and architects sit inside your delivery organisation. They attend standups, write code, review pull requests, and carry joint accountability for the outcome. This is not consultancy in the traditional sense.",
  },
  {
    step: "02",
    title: "We bring the technical depth",
    body: "Platform engineers, solution architects, and delivery leads who have built production systems at scale. Current hands-on experience across AWS, Azure, GCP, Kubernetes, event streaming, and modern development practices.",
  },
  {
    step: "03",
    title: "We work inside your governance",
    body: "Tech Build engagements are structured inside your existing programme governance and accountability structures. We do not operate as a parallel stream. We are part of your delivery organisation.",
  },
  {
    step: "04",
    title: "We transfer capability, not dependency",
    body: "Every engagement includes a deliberate plan for internal capability transfer. By the time we leave, your teams should be able to operate, extend, and evolve the systems we built together.",
  },
];

const capabilities = [
  "Platform engineering and cloud-native architecture",
  "AI and machine learning production systems",
  "Microservices and event-driven architectures",
  "DevOps, CI/CD and infrastructure as code",
  "API-first design and integration architecture",
  "Data engineering and analytics platforms",
  "Legacy modernisation and technical migration",
  "Technical leadership and engineering management",
  "Security-by-design and compliance engineering",
  "Observability, reliability, and site reliability engineering",
];

const related = [
  {
    tag: "AMP 01",
    title: "AI Governance",
    body: "Tech Build engagements involving AI systems are designed inside the governance frameworks we establish through AMP 01. Accountability and auditability are built in from the start.",
    href: "/ai-governance",
  },
  {
    tag: "AMP 02",
    title: "AI Implementation",
    body: "For organisations with an AI strategy already in place, Tech Build delivers the production systems. AMP 02 and AMP 06 frequently run as a single integrated engagement.",
    href: "/ai-implementation",
  },
  {
    tag: "AMP 03",
    title: "Structured Delivery",
    body: "Tech Build engagements are run inside delivery frameworks that provide the governance and accountability structures your organisation requires.",
    href: "/structured-delivery",
  },
];

const Transformation = memo(function Transformation({ onOpenConsultation }: TransformationProps) {
  return (
    <PageShell>
      <ServiceSchema
        name="Tech Build"
        description="Hands-on technology build from engineers and architects who embed inside your teams. Custom software, AI-native systems, platform engineering, and legacy modernisation for regulated industries."
        url="https://amplified.co.uk/transformation"
        serviceType="TechnologyService"
      />

      <BreadcrumbBar items={[{ label: "Home", href: "/" }, { label: "Tech Build" }]} />

      <PageHero
        eyebrow="AMP 06"
        title={<span data-testid="text-page-title">Tech Build</span>}
        subtitle="Digital transformation, delivered in code."
        lead="Hands-on digital transformation delivery from engineers and architects who embed inside your teams. We build custom software, AI-native systems, and data platforms for regulated industries where getting it wrong is not an option."
      >
        <Text variant="lead" tone="white-75" className="max-w-[520px]">
          We do not produce recommendations and leave. We write code, architect systems, and carry
          joint accountability for what gets built.
        </Text>
        <Surface
          variant="inset"
          padding="md"
          radius="sm"
          className="max-w-[520px] border-l-4 border-[#F85C70] bg-[rgba(248,92,112,0.08)]"
        >
          <Text variant="h4" tone="white" className="font-normal italic">
            &ldquo;Built for industries where rigour isn&apos;t optional.&rdquo;
          </Text>
        </Surface>
        {onOpenConsultation ? (
          <AmpButton onClick={() => onOpenConsultation("transformation")}>
            Start a Conversation <ArrowRight className="h-4 w-4" />
          </AmpButton>
        ) : null}
      </PageHero>

      <Section tone="white" padding="md" className="border-b border-[#E5E3EE]">
        <div className="relative mx-auto hidden aspect-[4/3] max-w-[720px] overflow-hidden rounded lg:block">
          <Image
            src={transformImage}
            alt="Amplified Tech Build in practice"
            fill
            className="object-cover"
            priority
            sizes="720px"
            data-testid="img-hero"
          />
        </div>
      </Section>

      <Section tone="white" padding="lg">
        <Stack gap="xl">
          <Eyebrow tone="subtle">What we build</Eyebrow>
          <Text variant="h2">Technology That Has to Work in Production</Text>
          <BorderGrid cols={3} className="border-l border-t border-[#E5E3EE]">
            {whatWeBuild.map((item) => (
              <BorderCell key={item.title} className="border-[#E5E3EE] p-8">
                <div className="mb-6 h-8 w-1 rounded bg-[#F85C70]" />
                <Text variant="h4" className="mb-4">
                  {item.title}
                </Text>
                <Text variant="small" tone="muted">
                  {item.body}
                </Text>
              </BorderCell>
            ))}
          </BorderGrid>
        </Stack>
      </Section>

      <Section tone="navy" padding="lg">
        <Stack gap="xl">
          <Eyebrow>Our approach</Eyebrow>
          <Text variant="h2" tone="white">
            How we work
          </Text>
          <BorderGrid cols={2} className="border-l border-t border-white/10">
            {howWeWork.map((item) => (
              <BorderCell key={item.step} className="border-white/10 p-8">
                <Text variant="mono" className="mb-4 block text-3xl font-bold text-[#F85C70]/50">
                  {item.step}
                </Text>
                <Text variant="h4" tone="white" className="mb-3">
                  {item.title}
                </Text>
                <Text variant="small" tone="white-70">
                  {item.body}
                </Text>
              </BorderCell>
            ))}
          </BorderGrid>
        </Stack>
      </Section>

      <Section tone="mist" padding="lg">
        <Grid cols="2-lg" gap="xl" equal={false}>
          <Stack gap="md">
            <Eyebrow tone="subtle" className="text-[#60266A]">
              Technical depth
            </Eyebrow>
            <Text variant="h2">What our engineers bring to every engagement</Text>
            <Text variant="body" tone="muted">
              Our engineers and architects are practitioners with current, hands-on experience in
              production systems. They are not generalists who can learn on the job at your expense.
              They bring deep expertise in the platforms and practices that regulated industries
              require.
            </Text>
            <Text variant="body" tone="muted">
              Every Tech Build engagement is led by a senior engineer or architect who has operated at
              this level before. They are supported by specialists across the capabilities below.
            </Text>
          </Stack>
          <BorderGrid cols={1} className="border-l border-t border-[#E5E3EE]">
            {capabilities.map((cap) => (
              <BorderCell
                key={cap}
                className="flex items-center gap-4 border-[#E5E3EE] bg-white p-4"
              >
                <CheckCircle className="h-4 w-4 shrink-0 text-[#F85C70]" aria-hidden="true" />
                <Text variant="small" tone="muted">
                  {cap}
                </Text>
              </BorderCell>
            ))}
          </BorderGrid>
        </Grid>
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

      <FurtherReading tags={["Digital Transformation", "Governance", "Infrastructure"]} maxArticles={3} />

      <CtaBand
        tone="purple"
        title="Ready to Start Building?"
        lead="Tell us what you are trying to build and we will tell you honestly what it will take, who you need, and whether we are the right people to help you build it."
      >
        <AmpButton asChild size="xl" data-testid="button-cta">
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

export default Transformation;
