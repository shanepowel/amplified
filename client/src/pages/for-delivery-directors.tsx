'use client';

import { memo } from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle, AlertTriangle } from "lucide-react";
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
import { deliveryDirectorsFAQSchema, createBreadcrumbSchema } from "@/lib/schemas";

interface ForDeliveryDirectorsProps {
  onOpenConsultation?: (serviceType?: string) => void;
}

const challenges = [
  {
    title: "Accountability that diffuses across vendors",
    body: "Multi-vendor programmes create accountability gaps that every vendor fills differently. When something goes wrong, ownership is unclear. Governance frameworks that were designed for single-supplier delivery do not hold up under the weight of a complex delivery ecosystem.",
  },
  {
    title: "Team instability driving rework",
    body: "High contractor turnover means institutional knowledge leaves with the person. Onboarding costs accumulate silently. Rework happens because context is lost. The programme moves slower than the velocity metrics suggest.",
  },
  {
    title: "Governance that slows rather than enables",
    body: "Stage gates that have become bureaucratic exercises. Reporting that consumes the time it should create. Assurance processes that produce evidence of activity rather than evidence of progress. Governance designed to cover risk rather than manage it.",
  },
  {
    title: "Pace pressure without delivery confidence",
    body: "Senior stakeholders want acceleration. Your team knows the risks of cutting corners. The pressure to report green when amber is the honest position is real and familiar. Delivery directors absorb that tension alone.",
  },
];

const howWeHelp = [
  {
    service: "Structured Delivery (AMP 03)",
    href: "/structured-delivery",
    title: "Governance that enables pace, not just assurance",
    body: "We design delivery governance frameworks that produce accountability without bureaucracy. Assurance built into cadences. Reporting that gives stakeholders real confidence rather than managed perception. Stage gates that test readiness, not compliance.",
  },
  {
    service: "AmplifiedTeams",
    href: "/teams",
    title: "Stable teams mobilised in 48 hours",
    body: "IR35-compliant multi-disciplinary delivery teams with established ways of working. Not assembled from a contractor pool. Stable units that start delivering from day one rather than spending weeks forming. Available across delivery, product, and technology disciplines.",
  },
  {
    service: "AI Implementation (AMP 02)",
    href: "/ai-implementation",
    title: "Technology that integrates with delivery accountability",
    body: "AI tools that are implemented within proper governance boundaries, not alongside them. Every implementation includes a structured accountability framework, a risk assessment, and a clear chain of decision-making from the technology to the senior responsible owner.",
  },
];

const faqs = [
  {
    q: "What is different about Amplified's approach to structured delivery?",
    a: "We combine proper governance rigour with delivery pace. Most delivery frameworks treat governance as a checkpoint process. We build governance into delivery cadences so that assurance happens continuously, not at stage gates. Programmes move faster because there are fewer surprises.",
  },
  {
    q: "How does the Stable Teams model work?",
    a: "AmplifiedTeams provides IR35-compliant, multi-disciplinary delivery teams mobilised within 48 hours. Teams are not assembled ad hoc from a contractor pool. They are stable units with established ways of working, which means onboarding friction is minimal and delivery starts immediately.",
  },
  {
    q: "Can you come into a programme that is already in trouble?",
    a: "Yes. Programme recovery is one of the most common reasons organisations come to us. We assess the current state quickly, identify the root causes rather than just the symptoms, stabilise governance and team accountability, and establish a credible path forward. We have done this in infrastructure, financial services, and public sector contexts.",
  },
  {
    q: "What does governance recovery actually look like in practice?",
    a: "We typically start with a rapid diagnostic: reviewing delivery artefacts, governance documentation, and stakeholder reporting. Within two weeks we produce a clear view of what is working, what is not, and what needs to change. Recovery then follows a structured 90-day stabilisation plan.",
  },
  {
    q: "Do you work on public sector frameworks and NEC contracts?",
    a: "Yes. Our team has direct experience across Crown Commercial Service frameworks, NEC contract environments, GDS delivery standards, and major capital programme governance. We understand the accountability structures and reporting requirements these environments demand.",
  },
];

const outcomes = [
  "A governance framework that produces real confidence, not managed perception",
  "Accountability that is clear across every delivery partner and vendor",
  "Teams stable enough to accumulate and retain institutional knowledge",
  "Reporting that stakeholders trust because it reflects the real position",
  "Stage gates that test readiness rather than evidence of process compliance",
  "A recovery plan you can defend under proper scrutiny",
];

const ForDeliveryDirectors = memo(function ForDeliveryDirectors({ onOpenConsultation }: ForDeliveryDirectorsProps) {
  return (
    <PageShell>
      <StructuredData data={deliveryDirectorsFAQSchema} id="delivery-directors-faq-schema" />
      <StructuredData
        data={createBreadcrumbSchema([
          { name: "Home", url: "https://amplified.co.uk/" },
          { name: "For Delivery Directors", url: "https://amplified.co.uk/for-delivery-directors" },
        ])}
        id="cios-breadcrumb"
      />

      <BreadcrumbBar items={[{ label: "Home", href: "/" }, { label: "For Delivery Directors" }]} />

      <PageHero
        eyebrow="Who We Work With"
        title={
          <>
            For Delivery Directors
            <br />
            and Programme Directors
          </>
        }
        lead="Deliver at pace without losing control. Governance that enables rather than impedes. Teams that are stable. Accountability that is visible."
      >
        <Stack direction="row-responsive" gap="md" className="flex-wrap">
          <AmpButton onClick={() => onOpenConsultation?.("structured-delivery")}>
            Talk to Us <ArrowRight className="h-4 w-4" />
          </AmpButton>
          <AmpButton asChild variant="outlineLight" size="lg">
            <Link href="/structured-delivery">View Structured Delivery</Link>
          </AmpButton>
        </Stack>
      </PageHero>

      <Section tone="mist" padding="lg" containerClassName="max-w-[760px]">
        <Stack gap="md">
          <Text variant="h2">The delivery director's dilemma</Text>
          <Text variant="lead" tone="muted">
            You are accountable for programmes that span multiple vendors, complex technology
            stacks, and governance environments that were not designed for the way you are
            delivering. Pace is demanded. Rigour is required. The two feel like they are in
            permanent tension.
          </Text>
          <Text variant="lead" tone="muted">
            Amplified works with delivery directors and programme directors in infrastructure,
            energy, financial services, and public sector to build the delivery governance
            frameworks, stable team structures, and accountability models that let programmes
            move fast without losing control. We have been in the delivery seats you are in.
            We know what the pressure feels like.
          </Text>
        </Stack>
      </Section>

      <Section tone="white" padding="lg">
        <Stack gap="xl">
          <Eyebrow>What delivery directors deal with</Eyebrow>
          <Text variant="h2">What you are navigating</Text>
          <Grid cols={2} gap="md">
            {challenges.map((item) => (
              <Surface
                key={item.title}
                variant="mist"
                padding="lg"
                radius="lg"
                className="flex items-start gap-4"
              >
                <AlertTriangle className="mt-1 h-5 w-5 shrink-0 text-[#F85C70]" aria-hidden="true" />
                <Stack gap="sm">
                  <Text variant="h4">{item.title}</Text>
                  <Text variant="body" tone="muted">{item.body}</Text>
                </Stack>
              </Surface>
            ))}
          </Grid>
        </Stack>
      </Section>

      <Section tone="mist" padding="lg">
        <Stack gap="xl">
          <Eyebrow>What Amplified delivers</Eyebrow>
          <Text variant="h2">How we help delivery directors</Text>
          <Grid cols={3} gap="md">
            {howWeHelp.map((item) => (
              <ContentCard
                key={item.service}
                variant="plain"
                eyebrow={
                  <Link
                    href={item.href}
                    className="text-[#60266A] transition-colors hover:text-[#F85C70]"
                  >
                    {item.service} &rarr;
                  </Link>
                }
                title={item.title}
                description={item.body}
                titleClamp={3}
                descriptionClamp={6}
              />
            ))}
          </Grid>
        </Stack>
      </Section>

      <Section tone="white" padding="lg" containerClassName="max-w-[760px]">
        <Stack gap="md">
          <Eyebrow>Example engagement</Eyebrow>
          <Text variant="h2">Stabilising a programme in distress</Text>
          <Text variant="lead" tone="muted">
            A major infrastructure programme had been reporting amber-to-green for three
            consecutive quarters. The delivery director knew the real position was red. A
            contract renewal review was three months away, and the existing governance
            artefacts would not survive proper scrutiny.
          </Text>
          <Text variant="lead" tone="muted">
            Amplified ran a two-week rapid diagnostic. We mapped the genuine delivery position,
            identified the accountability gaps between the three system integrators, and built
            a recovery plan that the delivery director could present to the SRO with confidence.
            The plan was honest about the position and credible about the path forward.
          </Text>
          <Text variant="lead" tone="muted">
            The contract renewal review was passed. The programme moved from distress to
            controlled delivery over the following 90 days. The governance framework remained
            in place and was subsequently adopted across two other programmes in the same
            organisation.
          </Text>
          <Surface variant="mist" padding="lg" radius="lg" className="border-l-4 border-[#60266A]">
            <Text variant="body" className="font-medium">
              &ldquo;For the first time in two years, I had a governance pack I could present without
              caveating every line. That changed the conversation with the SRO entirely.&rdquo;
            </Text>
            <Text variant="small" tone="muted" className="mt-3">
              Delivery Director, UK infrastructure programme
            </Text>
          </Surface>
        </Stack>
      </Section>

      <Section tone="mist" padding="lg" containerClassName="max-w-[760px]">
        <Stack gap="lg">
          <Eyebrow>The outcome</Eyebrow>
          <Text variant="h2">What good looks like for a delivery director</Text>
          <Grid cols={2} gap="sm">
            {outcomes.map((item) => (
              <Stack key={item} direction="row" gap="sm" align="start">
                <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-[#60266A]" aria-hidden="true" />
                <Text variant="body">{item}</Text>
              </Stack>
            ))}
          </Grid>
        </Stack>
      </Section>

      <Section tone="white" padding="lg" containerSize="narrow" containerClassName="max-w-[900px]">
        <Stack gap="lg">
          <Eyebrow>Common questions</Eyebrow>
          <Text variant="h2">Questions from delivery directors</Text>
          <Stack gap="md">
            {faqs.map((item) => (
              <details
                key={item.q}
                className="group cursor-pointer rounded-xl border border-[#E5E3EE] bg-white p-6"
              >
                <summary className="amp-focus-ring-on-light flex cursor-pointer list-none items-center justify-between gap-4 text-base font-semibold text-[#181F4F]">
                  {item.q}
                  <span className="shrink-0 text-2xl text-[#F85C70] transition-transform duration-200 group-open:rotate-45">
                    +
                  </span>
                </summary>
                <Text variant="body" tone="muted" className="mt-4">{item.a}</Text>
              </details>
            ))}
          </Stack>
        </Stack>
      </Section>

      <CtaBand
        eyebrow="Next step"
        title="Start with an honest delivery conversation"
        lead="Thirty minutes. Tell us where the programme is, not where the reporting says it is. We will give you an honest view of the options."
      >
        <Stack direction="row-responsive" gap="md" align="center" justify="center" className="flex-wrap">
          <AmpButton onClick={() => onOpenConsultation?.("structured-delivery")}>
            Book a Conversation <ArrowRight className="h-4 w-4" />
          </AmpButton>
          <AmpButton asChild variant="outlineLight" size="lg">
            <Link href="/structured-delivery">View Structured Delivery</Link>
          </AmpButton>
        </Stack>
        <Text variant="small" tone="white-45">No pitch. No deck. Just a conversation.</Text>
      </CtaBand>
    </PageShell>
  );
});

export default ForDeliveryDirectors;
