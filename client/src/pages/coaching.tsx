'use client';

import { memo } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle } from "lucide-react";
import coachImage from "@assets/35_1760470608291.webp";
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
import { coachingFAQSchema, createBreadcrumbSchema } from "@/lib/schemas";
import { FurtherReading } from "@/components/further-reading";

interface CoachingProps {
  onOpenConsultation?: (serviceType?: string) => void;
}

const coachingFormats = [
  {
    title: "Executive and Board-Level Coaching",
    body: "One-to-one coaching for senior leaders navigating technology adoption, organisational change, and the accountability pressures that come with regulated environments. Focused on decision-making, stakeholder management, and leading change without losing control.",
    deliverable: "Typically 6 to 12 sessions. Individual programme designed around your context.",
  },
  {
    title: "Delivery Lead and Programme Director Coaching",
    body: "For programme directors, delivery managers, and product leads who need a thinking partner with genuine delivery experience. We work through the real challenges: governance pressure, team underperformance, scope creep, and the politics of large programmes.",
    deliverable: null,
  },
  {
    title: "Agile Practitioner Coaching",
    body: "Embedded or regular coaching for scrum masters, product owners, and agile practitioners operating inside regulated environments where standard agile playbooks do not always apply. Practical, honest, and grounded in what actually works.",
    deliverable: null,
  },
  {
    title: "Team and Squad Coaching",
    body: "Coaching at the team level for squads that are underperforming, newly formed, or operating in a context they have not navigated before. We work with the team as a system, not just the individuals within it.",
    deliverable: "Typically structured as a 90-day programme with defined outcomes.",
  },
  {
    title: "AI Literacy Coaching for Non-Technical Leaders",
    body: "Helping senior leaders and governance boards develop the literacy they need to interrogate AI proposals, challenge vendors, and make informed decisions about AI adoption. Not a training course. A coaching relationship built around your actual decisions.",
    deliverable: null,
  },
  {
    title: "Cohort Programmes",
    body: "Structured group coaching for cohorts of leaders or practitioners going through a common challenge: a transformation, an agile transition, a new technology adoption. Peer learning combined with individual accountability.",
    deliverable: null,
  },
];

const differentiators = [
  {
    title: "Practitioners coaching practitioners",
    body: "Our coaches have held the roles they are coaching. They have run delivery programmes, led governance boards, navigated regulatory scrutiny, and made the decisions that sit on your desk right now. That experience is not a backdrop. It is the point.",
  },
  {
    title: "Context-specific, not generic",
    body: "We do not run coaching programmes with generic frameworks applied to any industry. We work inside the specific pressures of regulated environments: infrastructure, energy, financial services, and public sector. The coaching reflects that.",
  },
  {
    title: "Honest, not comfortable",
    body: "Good coaching involves challenge. We will ask the questions you might be avoiding and hold up the mirror you might not want to look in. That is not because we are confrontational. It is because it is the only kind of coaching that moves things forward.",
  },
  {
    title: "Outcomes, not hours",
    body: "We are not interested in filling a coaching contract. We are interested in whether your capability, your team's performance, or your organisation's decision-making is genuinely better at the end of it. That is the measure we use.",
  },
];

const whoWeCoach = [
  "Senior leaders and board members",
  "Programme directors and delivery managers",
  "Product owners and product managers",
  "Scrum masters and agile practitioners",
  "Technical leads and architects navigating organisational complexity",
  "Teams and squads going through structural change",
  "Cohorts of practitioners in shared transition",
];

const related = [
  {
    tag: "AMP 04",
    title: "Capability Building",
    body: "Structured programmes that build lasting internal capability alongside live delivery. Where coaching develops the individual, capability building develops the organisation.",
    href: "/capability",
  },
  {
    tag: "AMP 03",
    title: "Structured Delivery",
    body: "Squad-based delivery models that give practitioners the context in which coaching conversations become immediately applicable.",
    href: "/structured-delivery",
  },
  {
    tag: "AMP 01",
    title: "AI Governance",
    body: "AI literacy coaching is often most effective alongside a governance framework that makes the learning immediately practical.",
    href: "/ai-governance",
  },
];

const faqs = [
  {
    q: "Who is Amplified teaching and coaching designed for?",
    a: "Amplified teaching and coaching is designed for delivery directors, programme managers, and CIOs who are leading technology change in regulated industries, either for the first time or as experienced leaders navigating a particularly complex programme. The most common coaching clients are senior professionals who are technically capable in their domain but need a thinking partner with specific experience in technology delivery, AI governance, or leading change in regulated contexts.",
  },
  {
    q: "How is Amplified coaching different from executive coaching?",
    a: "General executive coaching focuses on leadership behaviour and personal development. Amplified coaching combines that with deep subject matter expertise in technology delivery and AI governance. Clients work through real delivery challenges, governance decisions, and stakeholder situations with a coach who has led similar programmes. The sessions are structured around your specific context, not a generic coaching framework.",
  },
  {
    q: "What does a typical coaching engagement look like?",
    a: "A structured coaching engagement runs for three to six months, with fortnightly sessions of sixty to ninety minutes. Each session is centred on a live challenge the client is navigating. Between sessions, clients have access to resources, frameworks, and tools relevant to their situation. Amplified also offers cohort coaching for teams of delivery leaders within the same organisation, which builds shared language and mutual accountability.",
  },
  {
    q: "Can coaching help with a specific programme crisis or challenge?",
    a: "Yes. Amplified offers intensive coaching for programme leaders navigating a specific crisis, major decision, or difficult stakeholder situation. These engagements are shorter and more focused, typically four to eight sessions over four to six weeks, designed to give a leader the thinking support and practical frameworks they need to navigate a specific challenge rather than a sustained development programme.",
  },
];

const Coaching = memo(function Coaching({ onOpenConsultation }: CoachingProps) {
  return (
    <PageShell>
      <ServiceSchema
        name="Coaching"
        description="Executive, team, and practitioner coaching from senior operators who have held the roles they coach. Designed for leaders and delivery professionals in regulated industries."
        url="https://amplified.co.uk/coaching"
      />
      <StructuredData data={coachingFAQSchema} id="coaching-faq-schema" />
      <StructuredData
        data={createBreadcrumbSchema([
          { name: "Home", url: "https://amplified.co.uk/" },
          { name: "Coaching", url: "https://amplified.co.uk/coaching" },
        ])}
        id="coaching-breadcrumb"
      />
      <BreadcrumbBar items={[{ label: "Home", href: "/" }, { label: "Coaching" }]} />

      <PageHero
        eyebrow="AMP 05"
        title={<span data-testid="text-page-title">Teaching &amp; Coaching</span>}
        lead="Senior operators teaching and coaching leaders, delivery professionals, and practitioners through the realities of technology adoption and organisational transformation in regulated environments."
      >
        <Text variant="lead" tone="white-75" className="max-w-[520px]">
          We coach from experience, not from theory. Every coach at Amplified has operated inside the
          environments our clients work in.
        </Text>
        <Surface
          variant="inset"
          padding="md"
          radius="sm"
          className="max-w-[520px] border-l-4 border-[#F85C70] bg-[rgba(248,92,112,0.08)]"
        >
          <Text variant="h4" tone="white" className="font-normal italic">
            &ldquo;The most useful coaching conversation is the one that asks the question you were
            already avoiding.&rdquo;
          </Text>
        </Surface>
        {onOpenConsultation ? (
          <AmpButton onClick={() => onOpenConsultation("coaching")}>
            Start a Conversation <ArrowRight className="h-4 w-4" />
          </AmpButton>
        ) : null}
      </PageHero>

      <Section tone="white" padding="md" className="border-b border-[#E5E3EE]">
        <div className="relative mx-auto hidden aspect-[4/3] max-w-[720px] overflow-hidden rounded lg:block">
          <Image
            src={coachImage}
            alt="Amplified coaching in practice"
            fill
            className="object-cover"
            priority
            sizes="720px"
            data-testid="img-hero"
          />
        </div>
      </Section>

      <Section tone="mist" padding="lg">
        <Grid cols="2-lg" gap="xl" equal={false}>
          <Stack gap="md">
            <Eyebrow tone="subtle" className="text-[#60266A]">
              Who we work with
            </Eyebrow>
            <Text variant="h2">
              Coaching that is designed for the specific pressures of your role.
            </Text>
            <Text variant="body" tone="muted">
              Most coaching programmes are designed for corporate environments where the pressures are
              relatively generic. Regulated industries are not generic. The governance accountability,
              the regulatory scrutiny, and the scale of consequence are different in kind, not just
              degree.
            </Text>
            <Text variant="body" tone="muted">
              We design coaching programmes around those specific pressures. Whether you are a board
              member navigating AI adoption, a programme director under delivery pressure, or a product
              owner trying to make agile work inside a waterfall organisation.
            </Text>
          </Stack>
          <Stack gap="sm" className="pt-8 lg:pt-14">
            {whoWeCoach.map((item) => (
              <Surface
                key={item}
                variant="panel"
                padding="md"
                radius="sm"
                className="flex items-start gap-3"
              >
                <CheckCircle
                  className="mt-0.5 h-5 w-5 shrink-0 text-[#F85C70]"
                  aria-hidden="true"
                />
                <Text variant="small" tone="muted">
                  {item}
                </Text>
              </Surface>
            ))}
          </Stack>
        </Grid>
      </Section>

      <Section tone="white" padding="lg">
        <Stack gap="xl">
          <Eyebrow tone="subtle">What we offer</Eyebrow>
          <Text variant="h2">Coaching Formats</Text>
          <BorderGrid cols={3} className="border-l border-t border-[#E5E3EE]">
            {coachingFormats.map((format) => (
              <BorderCell key={format.title} className="flex h-full flex-col border-[#E5E3EE] p-8">
                <div className="mb-6 h-8 w-1 rounded bg-[#F85C70]" />
                <Text variant="h4" className="mb-4">
                  {format.title}
                </Text>
                <Text variant="small" tone="muted" className="mb-3 flex-1">
                  {format.body}
                </Text>
                {format.deliverable ? (
                  <Text variant="caption" className="italic text-[#60266A]">
                    {format.deliverable}
                  </Text>
                ) : null}
              </BorderCell>
            ))}
          </BorderGrid>
        </Stack>
      </Section>

      <Section tone="navy" padding="lg">
        <Stack gap="xl">
          <Eyebrow>Why it works</Eyebrow>
          <Text variant="h2" tone="white">
            What makes our coaching different
          </Text>
          <BorderGrid cols={2} className="border-l border-t border-white/10">
            {differentiators.map((item) => (
              <BorderCell key={item.title} className="border-white/10 p-8">
                <CheckCircle className="mb-4 h-5 w-5 text-[#F85C70]" aria-hidden="true" />
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

      <Section tone="white" padding="lg">
        <Stack gap="lg">
          <Eyebrow tone="subtle" className="text-[#60266A]">
            Common questions
          </Eyebrow>
          <Text variant="h2">Frequently Asked Questions</Text>
          <Stack gap="none" className="divide-y divide-[#E5E3EE] border-t border-[#E5E3EE]">
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
        tags={["Executive Coaching", "Teaching & Coaching", "Digital Leadership"]}
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
              { label: "Delivery Directors", href: "/for-delivery-directors" },
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
        title="Ready to Have the Honest Conversation?"
        lead="Tell us what you are working through and we will tell you honestly whether coaching is the right intervention and whether we are the right people to deliver it."
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

export default Coaching;
