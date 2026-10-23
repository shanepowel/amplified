'use client';

import { memo } from "react";
import Link from "next/link";
import heroImg from "@assets/stock_images/structured-delivery-hero.webp";
import Image from 'next/image';
import { ArrowRight, AlertTriangle } from "lucide-react";
import { ServiceSchema, StructuredData } from "@/components/structured-data";
import {
  PageShell,
  BreadcrumbBar,
  Container,
  Section,
  Stack,
  Grid,
  Text,
  Eyebrow,
  Surface,
  AmpButton,
} from "@/components/system";
import { structuredDeliveryFAQSchema, createBreadcrumbSchema } from "@/lib/schemas";

interface StructuredDeliveryProps {
  onOpenConsultation: (serviceType?: string) => void;
}

const whyFails = [
  "Programme-level reporting that maps to investment decisions and business cases",
  "Stage gates, assurance reviews, and approval processes that can't be bypassed",
  "NEC, FIDIC, or similar contract structures that assume defined outputs and change control",
  "PMO functions that need visibility, predictability, and risk transparency",
];

const services = [
  {
    title: "Agile Operating Model Design",
    body: "We design agile operating models that fit your sector, defining squad structures, programme governance interfaces, how sprint outputs map to stage gate requirements, and how your PMO maintains visibility without becoming a blocker.",
  },
  {
    title: "Squad Implementation",
    body: "We set up and embed cross-functional squads within your existing programme structure, including role design, ways of working, ceremonies, tooling, and governance interfaces. We stay embedded until squads are self-sufficient.",
  },
  {
    title: "Hybrid Framework Design",
    body: "For organisations that need both agile and waterfall, which is most of our clients, we design the hybrid model. Clear delineation of what runs in sprints, what runs in stages, how handoffs work, and how risk and change are managed across both tracks.",
  },
  {
    title: "Delivery Governance and Reporting",
    body: "We build the reporting and governance layer above agile delivery, programme dashboards, risk registers, RAID logs, and stakeholder reporting your board can interrogate.",
  },
  {
    title: "PMO Integration",
    body: "We work directly with your PMO to define the interface between agile delivery and programme governance, ensuring neither function undermines the other.",
  },
];

const StructuredDelivery = memo(function StructuredDelivery({
  onOpenConsultation,
}: StructuredDeliveryProps) {
  return (
    <PageShell>
      <ServiceSchema name="Structured Delivery" description="Squad-based delivery models designed for PM-heavy industries. Agile operating models, hybrid frameworks, PMO integration for infrastructure, energy, financial services and public sector." url="https://amplified.co.uk/structured-delivery" />
      <StructuredData data={structuredDeliveryFAQSchema} id="structured-delivery-faq-schema" />
      <StructuredData data={createBreadcrumbSchema([{ name: 'Home', url: 'https://amplified.co.uk/' }, { name: 'Structured Delivery', url: 'https://amplified.co.uk/structured-delivery' }])} id="structured-delivery-breadcrumb" />
      <BreadcrumbBar items={[{ label: "Home", href: "/" }, { label: "Structured Delivery" }]} />

      <Section tone="navy" padding="xl" className="relative overflow-hidden" contained={false}>
        <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-[48%] lg:block" aria-hidden="true">
          <Image src={heroImg} alt="" aria-hidden="true" fill className="object-cover opacity-30" priority sizes="48vw" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#181F4F] via-[#181F4F]/80 to-transparent" />
        </div>
        <Container className="relative">
          <Stack gap="lg" className="max-w-[720px]">
            <Eyebrow>AMP 03</Eyebrow>
            <Text variant="display" tone="white">Structured Delivery</Text>
            <Text variant="h3" tone="coral">
              Agile done right for industries where governance isn&apos;t optional.
            </Text>
            <Text variant="lead" tone="white-75">
              Most agile transformations fail in project-driven organisations because they ignore the
              governance structures those organisations were built on. Amplified&apos;s delivery model
              bridges both worlds, agile pace and flexibility, with the accountability and
              auditability your industry requires.
            </Text>
          </Stack>
        </Container>
      </Section>

      <Section tone="mist" padding="lg">
        <Grid cols="2-lg" gap="xl" equal={false}>
          <Stack gap="md">
            <Eyebrow tone="subtle" className="text-[#60266A]">
              Why agile often fails in your sector
            </Eyebrow>
            <Text variant="body" tone="muted">
              We&apos;ve seen it repeatedly. An organisation adopts agile, squads, sprints, backlogs,
              standups. Six months in, the PMO is fighting with the delivery team. Senior
              stakeholders can&apos;t report progress in a format their governance board recognises.
            </Text>
            <Text variant="body" className="font-medium">
              It wasn&apos;t a mistake. It was implemented without understanding the environment.
            </Text>
            <Text variant="body" tone="muted">
              Project-driven organisations have legitimate governance requirements:
            </Text>
          </Stack>
          <Stack gap="sm">
            {whyFails.map((item) => (
              <Surface key={item} variant="plain" padding="md" radius="sm" className="flex items-start gap-3">
                <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-[#F85C70]" aria-hidden="true" />
                <Text variant="small" tone="muted">{item}</Text>
              </Surface>
            ))}
          </Stack>
        </Grid>
      </Section>

      <Section tone="white" padding="lg">
        <Stack gap="xl">
          <Eyebrow tone="subtle">What we deliver</Eyebrow>
          <Text variant="h2">Structured Delivery Services</Text>
          <Stack gap="none" className="divide-y divide-[#E5E3EE] border-t border-[#E5E3EE]">
            {services.map((service, i) => (
              <Grid key={service.title} cols="3-lg" gap="lg" className="py-10">
                <Stack gap="sm">
                  <Eyebrow>{String(i + 1).padStart(2, "0")}</Eyebrow>
                  <Text variant="h3">{service.title}</Text>
                </Stack>
                <Text variant="body" tone="muted" className="lg:col-span-2">{service.body}</Text>
              </Grid>
            ))}
          </Stack>
        </Stack>
      </Section>

      <Section tone="mist" padding="md">
        <Stack gap="md">
          <Text variant="small" tone="muted">
            This service is designed for specific roles. Read more about how we work with:
          </Text>
          <Stack direction="row" gap="sm" className="flex-wrap">
            {[
              { label: "Chief Information Officers", href: "/for-cios" },
              { label: "Delivery Directors", href: "/for-delivery-directors" },
            ].map((link) => (
              <AmpButton key={link.label} asChild variant="navy" size="sm">
                <Link href={link.href}>{link.label} &rarr;</Link>
              </AmpButton>
            ))}
          </Stack>
        </Stack>
      </Section>

      {/* CTA */}
      <Section tone="purple" padding="lg">
        <Stack gap="lg" align="center" className="text-center">
          <Text variant="h2" tone="white">Ready to Deliver Differently?</Text>
          <Text variant="lead" tone="white-80" className="max-w-[480px]">Let's design a delivery model that works for your governance environment, not despite
            it.</Text>
          <AmpButton asChild size="xl" data-testid="button-structured-delivery-cta">
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

export default StructuredDelivery;
