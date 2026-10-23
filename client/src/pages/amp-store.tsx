'use client';

import { memo } from "react";
import Image from "next/image";
import { ArrowRight, CheckCircle, ExternalLink, BookOpen, Layers, Target, Users, Zap } from "lucide-react";
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
import workspaceImage from "@assets/66_1760470632126.webp";
import networkImage from "@assets/46_1760470581285.webp";

interface AmpStoreProps {
  onOpenConsultation: (serviceType?: string) => void;
}

const catalogueAreas = [
  {
    tag: "AMP 01",
    title: "AI Governance",
    desc: "Frameworks, policy templates, and literacy modules for teams building or overseeing AI governance. Aligned to EU AI Act, FCA, and GDS standards.",
    modules: ["AI Act Fundamentals", "Governance Framework Design", "Board-Level AI Briefing", "Responsible AI Policy Writing"],
  },
  {
    tag: "AMP 02",
    title: "AI Implementation",
    desc: "Practical tools and guides for teams implementing AI in structured delivery environments. From use case identification through to post-implementation review.",
    modules: ["AI Readiness Self-Assessment", "Use Case Prioritisation Workshop", "Implementation Planning Toolkit", "Handover and Capability Transfer"],
  },
  {
    tag: "AMP 03",
    title: "Structured Delivery",
    desc: "Agile and hybrid delivery capability for PM-heavy industries. Squad models, governance integration, and structured sprint practices.",
    modules: ["Structured Agile Fundamentals", "Squad Model Design", "Hybrid Delivery Playbook", "Sprint Governance Integration"],
  },
  {
    tag: "AMP 04",
    title: "Capability Building",
    desc: "Product Owner and Product Manager development, Centre of Excellence setup, and practitioner-level delivery coaching resources.",
    modules: ["Product Owner Foundations", "Centre of Excellence Blueprint", "Agile Practitioner Toolkit", "AI Literacy for Non-Technical Teams"],
  },
  {
    tag: "AMP 05",
    title: "Coaching",
    desc: "Frameworks and tools to support executive and team coaching at every level. Structured for leaders navigating transformation in regulated industries.",
    modules: ["Executive AI Coaching Guide", "Team Coaching Frameworks", "Change Leadership Toolkit", "Cohort Programme Design"],
  },
  {
    tag: "AMP 06",
    title: "Tech Build",
    desc: "Resources for technology teams building digital products and modernising platforms. Architecture decision guides, AI-native development frameworks, and cloud-native practices.",
    modules: ["Platform Modernisation Playbook", "AI-Native Development Guide", "DevOps for Regulated Environments", "Digital Product Design Fundamentals"],
  },
];

const whyAmpStore = [
  {
    icon: Target,
    title: "Built for practitioners, not classrooms",
    body: "Every resource in the ampStore is created by people who have done the work inside regulated industries. No generic eLearning. No off-the-shelf slide decks.",
  },
  {
    icon: Layers,
    title: "Aligned to the AMP Model",
    body: "Content maps directly to the six AMP service lines and the Assess, Implement, Amplify methodology. Your teams learn in the same language your delivery is structured around.",
  },
  {
    icon: Users,
    title: "Designed for teams, not individuals",
    body: "Resources are structured for cohort use, team workshops, and embedded learning alongside live delivery, not just solo consumption.",
  },
  {
    icon: Zap,
    title: "Paired with coaching",
    body: "ampStore resources work best when paired with live coaching from an Amplified partner or AmplifiedTeams practitioner. We can embed that support directly.",
  },
];

const accessWays = [
  {
    num: "01",
    title: "Self-serve access",
    body: "Individuals and teams can access the catalogue directly via theampstore.co.uk. Create an account and browse by AMP service line.",
  },
  {
    num: "02",
    title: "Embedded in a consulting engagement",
    body: "When Amplified is working with your organisation, ampStore resources are integrated into the delivery so your team builds capability alongside the work, not after it.",
  },
  {
    num: "03",
    title: "Organisational licence",
    body: "For organisations wanting to embed ampStore across multiple teams or a whole function, we offer organisational access with facilitated onboarding and progress tracking.",
  },
];

const AmpStore = memo(function AmpStore({ onOpenConsultation }: AmpStoreProps) {
  return (
    <PageShell>
      <BreadcrumbBar items={[{ label: "Home", href: "/" }, { label: "ampStore" }]} />

      <PageHero
        className="bg-[#60266A]"
        eyebrow="The Amplified Ecosystem"
        title={<span data-testid="text-ampstore-title">ampStore</span>}
        subtitle="Practitioner-grade capability resources, curated for regulated and complex industries."
        lead="Not a training platform. Not an eLearning library. The ampStore is a curated catalogue of frameworks, tools, playbooks, and learning resources built directly around the six AMP service lines. Everything your teams need to build lasting capability, not just pass a module."
      >
        <Stack direction="row-responsive" gap="md" className="flex-wrap">
          <AmpButton asChild data-testid="link-ampstore-login">
            <a href="https://theampstore.co.uk" target="_blank" rel="noopener noreferrer">
              <ExternalLink className="h-4 w-4" />
              Access ampStore
            </a>
          </AmpButton>
          <AmpButton
            variant="outlineLight"
            size="lg"
            onClick={() => onOpenConsultation("amp-store")}
          >
            Talk to Us About Access
          </AmpButton>
        </Stack>
      </PageHero>

      <Section tone="white" padding="md" className="border-b border-[#E5E3EE]">
        <div className="relative mx-auto hidden aspect-[4/3] max-w-[720px] overflow-hidden rounded lg:block">
          <Image
            src={workspaceImage}
            alt="Practitioners using ampStore resources"
            fill
            className="object-cover"
            priority
            sizes="720px"
            data-testid="img-ampstore-hero"
          />
        </div>
      </Section>

      <Section tone="white" padding="lg" className="border-b border-[#E5E3EE]">
        <Stack gap="xl">
          <Eyebrow tone="subtle">Why ampStore</Eyebrow>
          <Text variant="h2">Capability that sticks because it is built for the work</Text>
          <Text variant="body" tone="muted" className="max-w-[560px]">
            Generic training does not change how teams work. Resources built around your actual
            delivery context do.
          </Text>
          <BorderGrid cols={2} className="border-l border-t border-[#E5E3EE]">
            {whyAmpStore.map((item) => {
              const Icon = item.icon;
              return (
                <BorderCell key={item.title} className="border-[#E5E3EE] p-8">
                  <Icon className="mb-5 h-5 w-5 text-[#60266A]" aria-hidden="true" />
                  <Text variant="h4" className="mb-3">
                    {item.title}
                  </Text>
                  <Text variant="small" tone="muted">
                    {item.body}
                  </Text>
                </BorderCell>
              );
            })}
          </BorderGrid>
        </Stack>
      </Section>

      <Section tone="mist" padding="lg">
        <Stack gap="xl">
          <Eyebrow tone="subtle">The Catalogue</Eyebrow>
          <Text variant="h2">Six areas. One joined-up capability system.</Text>
          <Text variant="body" tone="muted" className="max-w-[540px]">
            Every resource maps to a specific AMP service line. Teams build capability in the same
            areas their consultancy engagement is structured around.
          </Text>
          <BorderGrid cols={2} className="border-l border-t border-[#C8C4D8]">
            {catalogueAreas.map((area) => (
              <BorderCell key={area.tag} className="border-[#C8C4D8] p-8">
                <Stack direction="row" gap="sm" align="center" className="mb-4">
                  <Eyebrow>{area.tag}</Eyebrow>
                  <BookOpen className="h-3.5 w-3.5 text-[#C8C4D8]" aria-hidden="true" />
                  <Text variant="small" className="font-semibold">
                    {area.title}
                  </Text>
                </Stack>
                <Text variant="small" tone="muted" className="mb-5">
                  {area.desc}
                </Text>
                <ul className="space-y-2">
                  {area.modules.map((mod) => (
                    <li key={mod} className="flex items-center gap-2">
                      <CheckCircle
                        className="h-3.5 w-3.5 shrink-0 text-[#60266A]"
                        aria-hidden="true"
                      />
                      <Text variant="caption" tone="muted">
                        {mod}
                      </Text>
                    </li>
                  ))}
                </ul>
              </BorderCell>
            ))}
          </BorderGrid>
        </Stack>
      </Section>

      <Section tone="white" padding="lg" className="border-t border-[#E5E3EE]">
        <Grid cols="2-lg" gap="xl" equal={false}>
          <Stack gap="lg">
            <Eyebrow tone="subtle">How to Access</Eyebrow>
            <Text variant="h2">Three ways to bring ampStore into your organisation</Text>
            <Stack gap="xl" className="mt-4">
              {accessWays.map((item) => (
                <Stack key={item.num} direction="row" gap="lg" align="start">
                  <Text variant="display" className="shrink-0 text-3xl leading-none text-[#DDD9EA]">
                    {item.num}
                  </Text>
                  <Stack gap="xs">
                    <Text variant="body" className="font-semibold">
                      {item.title}
                    </Text>
                    <Text variant="small" tone="muted">
                      {item.body}
                    </Text>
                  </Stack>
                </Stack>
              ))}
            </Stack>
          </Stack>
          <Stack gap="lg">
            <Image
              src={networkImage}
              alt="Connected learning and capability building"
              className="h-auto w-full rounded"
              loading="lazy"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <Surface variant="navy" padding="xl" radius="sm">
              <Eyebrow className="mb-4">Access the Store</Eyebrow>
              <Text variant="h3" tone="white" className="mb-6">
                Login or create an account at theampstore.co.uk
              </Text>
              <Stack direction="row-responsive" gap="md" className="flex-wrap">
                <AmpButton asChild data-testid="button-get-access">
                  <a href="https://theampstore.co.uk" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-4 w-4" />
                    Go to ampStore
                  </a>
                </AmpButton>
                <AmpButton
                  variant="outlineLight"
                  size="lg"
                  onClick={() => onOpenConsultation("amp-store")}
                  data-testid="button-schedule-demo"
                >
                  Talk About Org Access
                </AmpButton>
              </Stack>
            </Surface>
          </Stack>
        </Grid>
      </Section>

      <CtaBand
        tone="purple"
        title="Ready to build lasting capability?"
        lead="Access the catalogue directly, or talk to us about organisational licences and embedded learning."
      >
        <Stack direction="row-responsive" gap="md" align="center" justify="center" className="flex-wrap">
          <AmpButton asChild size="xl">
            <a href="https://theampstore.co.uk" target="_blank" rel="noopener noreferrer">
              Access ampStore <ArrowRight className="h-4 w-4" />
            </a>
          </AmpButton>
          <AmpButton
            variant="outlineLight"
            size="lg"
            onClick={() => onOpenConsultation("amp-store")}
          >
            Talk to Us
          </AmpButton>
        </Stack>
        <Text variant="small" tone="white-45">
          No pitch. No deck. Just a conversation.
        </Text>
      </CtaBand>
    </PageShell>
  );
});

export default AmpStore;
