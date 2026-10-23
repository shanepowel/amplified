'use client';

import { memo } from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle, Layers, Cpu, Users, Zap, Repeat, Shield } from "lucide-react";
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

interface OrgDesignProps {
  onOpenConsultation: (serviceType?: string) => void;
}

const problemPoints = [
  "Decisions pile up at the top. Teams wait for sign-off on things they already know how to solve.",
  "Product ownership is blurry. No one is sure who has the authority to say yes.",
  "Managers spend more time coordinating than leading.",
  "Every new framework adds process without changing the underlying structure.",
  "Agile transformations stall and teams revert to the old habits within months.",
];

const approachPillars = [
  {
    icon: Layers,
    label: "Holacracy",
    title: "Distributed Authority",
    body: "A governance framework that places authority with roles, not job titles. Clear accountabilities, structured decision-making, and the ability to evolve continuously without waiting for management approval. Every role has explicit authority. Every tension has a path to resolution.",
  },
  {
    icon: Users,
    label: "Product Org Design",
    title: "Squad-Based Structure",
    body: "Operating structures aligned to products and outcomes, not functions. Cross-functional teams with clear ownership, embedded delivery capability, and a product leadership layer that actually leads rather than coordinates. Teams that know what they are responsible for and have what they need to deliver it.",
  },
  {
    icon: Cpu,
    label: "AI Integration",
    title: "AI-Powered Coordination",
    body: "AI woven into governance, communication, and delivery from the start. Autonomous role execution, AI-assisted decision support, and intelligent coordination that reduces the need for human overhead. Not bolted on after the fact. Built into how the organisation operates.",
  },
];

const audiences = [
  {
    title: "Scale-ups and growth-stage companies",
    body: "Struggling with the transition from founder-led to professionally managed. The informal structures that worked at twenty people are breaking at two hundred.",
  },
  {
    title: "Mid-size enterprises where agile has stalled",
    body: "Teams that have done Scrum, done SAFe, and are still not getting the outcomes they expected. The methodology is in place. The mindset and authority structure are not.",
  },
  {
    title: "Public sector organisations building product capability",
    body: "Trying to introduce genuine product thinking and squad-based delivery within legacy governance structures that were not built for it.",
  },
  {
    title: "Leadership teams ready for something fundamentally different",
    body: "Organisations that have tried the incremental improvements and know that the issue is structural, not behavioural. Ready to redesign the model, not just the process.",
  },
];

const services = [
  {
    icon: Zap,
    label: "Fixed Fee / 3-4 Weeks",
    title: "Organisational Design Sprint",
    body: "A rapid assessment and design engagement that produces a clear blueprint for your new operating model. We assess your current structure, governance, and AI readiness and design your future state.",
    outputs: [
      "Current-state organisational diagnosis",
      "Holacracy constitution adaptation for your context",
      "Squad and circle structure design",
      "Role map with accountabilities and authorities",
      "AI tooling stack recommendation",
      "Implementation roadmap",
    ],
  },
  {
    icon: Repeat,
    label: "Retained / 3-6 Months",
    title: "Implementation Partner",
    body: "Embedded delivery support for organisations moving from design to reality. We work alongside your leadership team to roll out the model, coach role holders, facilitate governance meetings, and integrate AI tools into your workflow.",
    outputs: [
      "Hands-on implementation alongside your team",
      "Role holder coaching and governance facilitation",
      "AI tooling integration into daily operations",
      "Internal capability built to sustain the model independently",
      "Measurable outcome tracking throughout",
    ],
  },
  {
    icon: Shield,
    label: "Ongoing Retainer",
    title: "Governance Advisory",
    body: "A lighter-touch ongoing relationship for organisations that have implemented and need a thinking partner. Regular governance reviews, AI integration support, and leadership coaching to keep the model evolving.",
    outputs: [
      "Quarterly governance reviews",
      "AI integration support as tooling evolves",
      "Leadership coaching for role holders",
      "Continuous improvement facilitation",
      "On-call advisory for governance tensions",
    ],
  },
];

const whyPoints = [
  "We have built and run these models in practice, not designed them in slides.",
  "Our background spans agile delivery transformation, squad operating models in complex programmes, and practical AI implementation at team and organisational level.",
  "We know that most organisations cannot go from traditional hierarchy to full holacracy overnight. Our approach is modular and pragmatic.",
  "You can start with product org design. You can pilot a single circle. You can introduce AI tooling before changing governance. We meet you where you are.",
  "We are not selling a methodology off a shelf. We are working from direct experience of what makes self-managing organisations function and what causes them to fail.",
];

const resultPoints = [
  "Faster decision cycles at every level",
  "Higher team engagement and ownership",
  "Better product outcomes and delivery speed",
  "Significant reduction in coordination overhead",
];

const OrgDesign = memo(function OrgDesign({ onOpenConsultation }: OrgDesignProps) {
  return (
    <PageShell>
      <ServiceSchema
        name="Autonomous Organisations"
        description="Amplified helps ambitious organisations replace slow hierarchies with self-managing, product-led operating models powered by AI. Holacracy, product org design, and AI integration."
        url="https://amplified.co.uk/org-design"
      />

      <BreadcrumbBar
        items={[{ label: "Home", href: "/" }, { label: "Autonomous Organisations" }]}
      />

      <PageHero
        eyebrow="AMP 07 / Autonomous Organisations"
        title="The organisation of the future runs itself."
        lead="We help leadership teams move from slow, manager-dependent hierarchies to product-led, self-managing organisations powered by AI. Less coordination overhead. Faster decisions. Teams that know what to do without being told."
      >
        <Stack direction="row-responsive" gap="md" className="flex-wrap">
          <AmpButton onClick={() => onOpenConsultation("org-design")} data-testid="button-hero-cta">
            Start the Conversation <ArrowRight className="h-4 w-4" />
          </AmpButton>
          <AmpButton asChild variant="outlineLight" size="lg">
            <a href="#how-it-works">See How It Works</a>
          </AmpButton>
        </Stack>
      </PageHero>

      <Section tone="white" padding="lg">
        <Grid cols="2-lg" gap="xl" equal={false}>
          <Stack gap="md">
            <Eyebrow tone="subtle">The Problem</Eyebrow>
            <Text variant="h2" data-testid="text-page-title">
              Most growing organisations hit the same wall.
            </Text>
            <Text variant="body" tone="muted">
              The real issue is not your people. It is the model. Traditional hierarchies were built
              for a world where information was scarce and decisions needed to flow upward to be made
              well. That world no longer exists.
            </Text>
            <Text variant="body" tone="muted">
              Every attempt to fix it within the existing structure (a new process, a new framework, a
              new tool) adds complexity without changing the underlying architecture. The only way out
              is to redesign the architecture itself.
            </Text>
          </Stack>
          <Stack gap="none" className="border-l-2 border-[#F85C70]">
            {problemPoints.map((point) => (
              <div key={point} className="border-b border-[#E5E3EE] py-5 pl-6">
                <Text variant="small" tone="muted">
                  {point}
                </Text>
              </div>
            ))}
          </Stack>
        </Grid>
      </Section>

      <Section id="how-it-works" tone="navy" padding="lg" className="scroll-mt-20">
        <Stack gap="xl">
          <Eyebrow>What We Do</Eyebrow>
          <Grid cols="2-lg" gap="xl" equal={false} className="items-end">
            <Text variant="h2" tone="white">
              Three proven approaches. One coherent system.
            </Text>
            <Text variant="body" tone="white-70">
              Together, these create an organisation that is genuinely self-managing. Authority sits
              with the people closest to the work. AI handles the coordination load. Leadership focuses
              on strategy rather than traffic management.
            </Text>
          </Grid>
          <BorderGrid cols={3} className="border-l border-t border-white/10">
            {approachPillars.map((pillar) => (
              <BorderCell key={pillar.label} className="border-white/10 p-8">
                <pillar.icon className="mb-5 h-6 w-6 text-[#F85C70]" aria-hidden="true" />
                <Eyebrow className="mb-2">{pillar.label}</Eyebrow>
                <Text variant="h3" tone="white" className="mb-4">
                  {pillar.title}
                </Text>
                <Text variant="small" tone="white-70">
                  {pillar.body}
                </Text>
              </BorderCell>
            ))}
          </BorderGrid>
        </Stack>
      </Section>

      <Section tone="mist" padding="lg">
        <Stack gap="xl">
          <Eyebrow tone="subtle">Who This Is For</Eyebrow>
          <Text variant="h2">
            Organisations ready to think differently about how they operate.
          </Text>
          <BorderGrid cols={2} className="border-l border-t border-[#E5E3EE]">
            {audiences.map((audience) => (
              <BorderCell key={audience.title} className="border-[#E5E3EE] bg-white p-8">
                <div className="mb-5 h-6 w-0.5 rounded bg-[#F85C70]" />
                <Text variant="h4" className="mb-3">
                  {audience.title}
                </Text>
                <Text variant="small" tone="muted">
                  {audience.body}
                </Text>
              </BorderCell>
            ))}
          </BorderGrid>
        </Stack>
      </Section>

      <Section tone="white" padding="lg">
        <Stack gap="xl">
          <Eyebrow tone="subtle">Our Services</Eyebrow>
          <Text variant="h2">Three ways to engage.</Text>
          <BorderGrid cols={3} className="border-l border-t border-[#E5E3EE]">
            {services.map((service, i) => (
              <BorderCell
                key={service.title}
                className="flex h-full flex-col border-[#E5E3EE] p-8"
              >
                <div className="mb-5 flex items-start justify-between gap-3">
                  <service.icon className="h-5 w-5 text-[#F85C70]" aria-hidden="true" />
                  <span className="rounded bg-[#F2F0F7] px-2.5 py-1 font-mono text-xs text-[#60266A]">
                    {service.label}
                  </span>
                </div>
                <Text variant="h3" className="mb-4">
                  {service.title}
                </Text>
                <Text variant="small" tone="muted" className="mb-6">
                  {service.body}
                </Text>
                <div className="mt-auto border-t border-[#E5E3EE] pt-5">
                  <Eyebrow tone="subtle" className="mb-3">
                    {i === 0 ? "Outputs include" : "What this covers"}
                  </Eyebrow>
                  <ul className="space-y-2">
                    {service.outputs.map((output) => (
                      <li key={output} className="flex items-start gap-2.5">
                        <CheckCircle
                          className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#F85C70]"
                          aria-hidden="true"
                        />
                        <Text variant="caption" tone="muted">
                          {output}
                        </Text>
                      </li>
                    ))}
                  </ul>
                </div>
              </BorderCell>
            ))}
          </BorderGrid>
          <AmpButton onClick={() => onOpenConsultation("org-design")}>
            Book a 45-Minute Diagnostic Call <ArrowRight className="h-4 w-4" />
          </AmpButton>
        </Stack>
      </Section>

      <Section tone="navy" padding="lg">
        <Grid cols="2-lg" gap="xl" equal={false}>
          <Stack gap="md">
            <Eyebrow>Why Amplified</Eyebrow>
            <Text variant="h2" tone="white">
              We have built and run these models. Not just designed them.
            </Text>
            <Text variant="body" tone="white-70">
              Our background spans agile delivery transformation, squad-based operating models in
              complex infrastructure and digital programmes, and practical AI implementation at team
              and organisational level.
            </Text>
            <AmpButton onClick={() => onOpenConsultation("org-design")}>
              Start a Conversation <ArrowRight className="h-4 w-4" />
            </AmpButton>
          </Stack>
          <Stack gap="none">
            {whyPoints.map((point) => (
              <div
                key={point}
                className="flex items-start gap-4 border-b border-white/10 py-5"
              >
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-[#F85C70]/30 bg-[#F85C70]/15">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#F85C70]" />
                </span>
                <Text variant="small" tone="white-70">
                  {point}
                </Text>
              </div>
            ))}
          </Stack>
        </Grid>
      </Section>

      <Section tone="mist" padding="md" className="border-t border-[#E5E3EE]">
        <Grid cols="3-lg" gap="lg" equal={false} className="items-center">
          <Stack gap="sm" className="lg:col-span-2">
            <Eyebrow tone="subtle">Results</Eyebrow>
            <Text variant="body" tone="muted">
              Organisations that have moved to distributed authority and product-aligned structures
              consistently report faster decision cycles, higher team engagement, and better product
              outcomes. AI integration compounds these gains, reducing coordination overhead and
              enabling smaller teams to operate at a scale previously requiring significantly more
              headcount.
            </Text>
          </Stack>
          <Surface variant="bordered" padding="md" radius="sm">
            <Eyebrow className="mb-4">What organisations report</Eyebrow>
            <Stack gap="sm">
              {resultPoints.map((result) => (
                <Stack key={result} direction="row" gap="sm" align="start">
                  <CheckCircle
                    className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#F85C70]"
                    aria-hidden="true"
                  />
                  <Text variant="caption" tone="muted">
                    {result}
                  </Text>
                </Stack>
              ))}
            </Stack>
          </Surface>
        </Grid>
      </Section>

      <CtaBand
        tone="purple"
        title="Ready to think differently about how your organisation operates?"
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

export default OrgDesign;
