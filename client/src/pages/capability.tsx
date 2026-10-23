'use client';

import { memo } from "react";
import Link from "next/link";
import { ArrowRight, Users } from "lucide-react";
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
} from "@/components/system";
import { capabilityBuildingFAQSchema, createBreadcrumbSchema } from "@/lib/schemas";
import { FurtherReading } from "@/components/further-reading";

interface CapabilityProps {
  onOpenConsultation: (serviceType?: string) => void;
}

const services = [
  {
    title: "Product Owner Development Programmes",
    body: "Structured programmes for Product Owners and Product Managers moving from project to product delivery. Covers backlog management, stakeholder engagement, value prioritisation, and governance responsibilities.",
    note: "Available as: intensive bootcamp, 12-week embedded programme, or Centre of Excellence model.",
  },
  {
    title: "Centre of Excellence Design",
    body: "We design and set up Centres of Excellence for Product Ownership, Agile Delivery, and AI Governance, including the governance model, community of practice, standards library, and onboarding pathway.",
    note: null,
  },
  {
    title: "AI Literacy Programmes",
    body: "Practical AI literacy training for non-technical teams, covering what AI is, what it can and can't do, how to evaluate AI outputs critically, and what governance responsibilities apply to different roles.",
    note: "Designed for: senior leaders, programme managers, governance teams, procurement, and operational staff.",
  },
  {
    title: "Agile Practitioner Training",
    body: "Training and coaching for teams making the transition to agile ways of working, tailored for the hybrid agile/governance context your teams will be operating in.",
    note: null,
  },
  {
    title: "Embedded Upskilling",
    body: "Amplified practitioners work alongside your teams on live delivery, coaching as they go. Skills transfer happens through doing, not just training. Every implementation includes an explicit upskilling plan.",
    note: null,
  },
];

const stats = [
  { number: "12", label: "Weeks typical programme" },
  { number: "3mo", label: "Post-engagement check-in" },
  { number: "CoE", label: "Centre of Excellence model" },
  { number: "100%", label: "Embedded alongside delivery" },
];

const faqs = [
  {
    q: "Why do most capability building programmes fail to create lasting change?",
    a: "Most capability programmes fail because they focus on training events rather than embedded practice. A course creates awareness; working alongside experienced practitioners on real problems creates AI capability. Amplified structures all capability work around live engagements, coaching real decisions in real contexts, with deliberate handover at the end so the learning is retained by your people rather than residing in an external consultant.",
  },
  {
    q: "What AI and digital capabilities does Amplified help organisations build?",
    a: "The most common areas are: AI literacy for senior leaders and executives, data governance and data management practices, product thinking and user-centred design in regulated contexts, programme delivery using structured agile approaches, and AI governance and responsible AI frameworks. Amplified also builds bespoke AI capability programmes for specific roles, for example delivery directors leading technology change for the first time.",
  },
  {
    q: "How does Amplified measure the impact of AI capability building?",
    a: "We establish baseline capability measures at the start of each engagement, agree what good looks like with programme sponsors, and track measurable indicators throughout: decisions made without external input, reduction in escalations to consultants, quality of artefacts produced by internal teams, and confidence assessments from participants. Impact measurement is built into the engagement structure, not treated as an afterthought.",
  },
  {
    q: "Can Amplified deliver capability building alongside a live programme?",
    a: "Yes, and this is often the most effective approach. Building AI capability in the context of real delivery decisions accelerates learning and ensures the capability is immediately applicable. Amplified structures embedded capability programmes to work alongside active programmes without adding significant overhead, integrating learning activities into existing team ceremonies and decision points.",
  },
];

const Capability = memo(function Capability({ onOpenConsultation }: CapabilityProps) {
  return (
    <PageShell>
      <ServiceSchema
        name="Capability Building"
        description="Product Owner development, Centres of Excellence, AI literacy programmes, agile practitioner training. We transfer real skills to your teams so you can run it yourselves."
        url="https://amplified.co.uk/capability"
      />
      <StructuredData data={capabilityBuildingFAQSchema} id="capability-faq-schema" />
      <StructuredData
        data={createBreadcrumbSchema([
          { name: "Home", url: "https://amplified.co.uk/" },
          { name: "Capability Building", url: "https://amplified.co.uk/capability" },
        ])}
        id="capability-breadcrumb"
      />
      <BreadcrumbBar items={[{ label: "Home", href: "/" }, { label: "Capability Building" }]} />

      <PageHero
        eyebrow="AMP 04"
        title="AI Capability Building"
        subtitle="Build it in. Not bolted on."
        lead="Consultants who make themselves indispensable aren't doing their job. Amplified's AI capability programmes are designed to transfer real skill to your teams, so you can run it yourselves."
      >
        <Text variant="body" tone="white-70" className="max-w-[580px]">
          From AI literacy for senior leaders to Product Owner development and Centres of Excellence:
          we build the internal AI capability that regulated organisations need to operate confidently
          without external dependency.
        </Text>
        <AmpButton onClick={() => onOpenConsultation("capability")}>
          Start a Conversation <ArrowRight className="h-4 w-4" />
        </AmpButton>
      </PageHero>

      <Section tone="mist" padding="lg">
        <Grid cols="2-lg" gap="xl" equal={false} className="items-center">
          <Stack gap="md">
            <Text variant="h2">
              The measure of a good engagement is whether your teams can run it without us twelve
              months later.
            </Text>
            <Text variant="body" tone="muted">
              That&apos;s not a nice-to-have. It&apos;s the design principle behind every Amplified
              engagement. We build capability programmes that transfer real skill, not dependency.
            </Text>
          </Stack>
          <Grid cols={2} gap="sm">
            {stats.map((item) => (
              <Surface key={item.label} variant="panel" padding="md" radius="sm" className="text-center">
                <Text variant="h3" tone="coral" className="mb-2">
                  {item.number}
                </Text>
                <Text variant="caption" tone="subtle">
                  {item.label}
                </Text>
              </Surface>
            ))}
          </Grid>
        </Grid>
      </Section>

      <Section tone="white" padding="lg">
        <Stack gap="xl">
          <Eyebrow tone="subtle">What we deliver</Eyebrow>
          <Text variant="h2">Capability Building Services</Text>
          <Stack gap="none" className="divide-y divide-[#E5E3EE] border-t border-[#E5E3EE]">
            {services.map((service) => (
              <Grid key={service.title} cols="3-lg" gap="lg" className="py-10">
                <Stack gap="md">
                  <div className="flex h-10 w-10 items-center justify-center rounded bg-[#F85C70]/10">
                    <Users className="h-5 w-5 text-[#F85C70]" aria-hidden="true" />
                  </div>
                  <Text variant="h3">{service.title}</Text>
                </Stack>
                <Stack gap="sm" className="lg:col-span-2">
                  <Text variant="body" tone="muted">
                    {service.body}
                  </Text>
                  {service.note ? (
                    <Text variant="small" className="italic text-[#60266A]">
                      {service.note}
                    </Text>
                  ) : null}
                </Stack>
              </Grid>
            ))}
          </Stack>
        </Stack>
      </Section>

      <Section tone="mist" padding="lg">
        <Stack gap="lg">
          <Eyebrow tone="subtle" className="text-[#60266A]">
            Common questions
          </Eyebrow>
          <Text variant="h2">Frequently Asked Questions</Text>
          <Stack gap="none" className="divide-y divide-[#DDD9EA] border-t border-[#DDD9EA]">
            {faqs.map((item) => (
              <details key={item.q} className="group py-6">
                <summary className="amp-focus-ring-on-light flex cursor-pointer list-none items-center justify-between gap-4 font-display text-xl text-[#181F4F]">
                  {item.q}
                  <span className="shrink-0 text-2xl text-[#F85C70] transition-transform duration-200 group-open:rotate-45">
                    +
                  </span>
                </summary>
                <Text variant="body" tone="muted" className="mt-4">
                  {item.a}
                </Text>
              </details>
            ))}
          </Stack>
        </Stack>
      </Section>

      <FurtherReading
        tags={["AI Capability", "Capability Building", "Teaching & Coaching"]}
        maxArticles={3}
      />

      <Section tone="mist" padding="md">
        <Stack gap="md">
          <Text variant="small" tone="muted">
            This service is designed for specific roles. Read more about how we work with:
          </Text>
          <Stack direction="row" gap="sm" className="flex-wrap">
            {[
              { label: "Digital Leads and Heads of Digital", href: "/for-digital-leads" },
              { label: "Chief Information Officers", href: "/for-cios" },
            ].map((link) => (
              <AmpButton key={link.label} asChild variant="navy" size="sm">
                <Link href={link.href}>{link.label} &rarr;</Link>
              </AmpButton>
            ))}
          </Stack>
        </Stack>
      </Section>

      <CtaBand
        tone="purple"
        title="Build Lasting Capability"
        lead="Let's design a capability programme that transfers real skills, and makes us unnecessary within twelve months."
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

export default Capability;
