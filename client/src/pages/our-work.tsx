'use client';

import { memo, useEffect, type ReactNode } from "react";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle,
  Leaf,
  Heart,
  ShoppingBag,
  Globe,
  Smartphone,
  Zap,
  ExternalLink,
  BarChart3,
  Award,
  TrendingUp,
} from "lucide-react";
import {
  AmpButton,
  BorderCell,
  BorderGrid,
  BreadcrumbBar,
  ContentCard,
  CtaBand,
  Eyebrow,
  Grid,
  PageHero,
  PageShell,
  Section,
  Stack,
  Surface,
  Text,
} from "@/components/system";

interface OurWorkProps {
  onOpenConsultation?: (serviceType?: string) => void;
}

const websiteBuilds = [
  {
    name: "FreelanceNearMe",
    url: "https://freelancenearme.com",
    domain: "freelancenearme.com",
    category: "Marketplace Platform",
    desc: "A location-based marketplace connecting freelancers with local clients. Full-stack build from discovery to launch, including matching algorithm, profile system, and payment integration.",
    tags: ["Marketplace", "Full-Stack", "Search & Match"],
  },
  {
    name: "BMKRS",
    url: "https://bmkrs.com",
    domain: "bmkrs.com",
    category: "Digital Platform",
    desc: "A bookmarking and content curation platform built for professionals who need to organise, share, and discover quality content without the noise of social media.",
    tags: ["Content Tools", "Productivity", "Web App"],
  },
  {
    name: "Three18 Media",
    url: "https://three18media.com",
    domain: "three18media.com",
    category: "Agency Website",
    desc: "Brand identity and full website build for a creative media agency. Editorial design, custom animations, and a bespoke CMS integration built to the studio's workflow.",
    tags: ["Brand", "Design System", "CMS"],
  },
  {
    name: "Kaizened",
    url: "https://kaizened.co.uk",
    domain: "kaizened.co.uk",
    category: "Learning Platform",
    desc: "A continuous improvement learning platform rooted in Kaizen principles. Built for organisations embedding improvement culture through structured, self-paced learning.",
    tags: ["EdTech", "Platform", "UK"],
  },
  {
    name: "Podcast Studio London",
    url: "https://podcaststudiolondon.com",
    domain: "podcaststudiolondon.com",
    category: "Studio Website",
    desc: "Website build for a professional podcast recording studio in London. Clean editorial design, online booking flow, and studio showcase built to convert visiting talent and corporate clients.",
    tags: ["Hospitality", "Booking", "UK"],
  },
];

const appBuilds = [
  {
    name: "Scout Social",
    url: null as string | null,
    domain: null as string | null,
    category: "Social Discovery App",
    desc: "A social discovery platform built to surface authentic, interest-driven connections. AI-assisted content surfacing, real-time feed, and community management tools designed to reward genuine engagement over reach.",
    tags: ["Mobile App", "Social", "AI Features"],
    status: "Live",
    placeholderClass: "bg-gradient-to-br from-[#60266A] to-[#181F4F]",
    placeholderIcon: "👥",
  },
  {
    name: "Viralyz",
    url: "https://viralyz.com",
    domain: "viralyz.com",
    category: "Analytics Platform",
    desc: "A viral content analytics platform for creators and brand teams. Tracks content performance across channels, identifies virality signals early, and generates actionable insight reports without the noise of traditional dashboards.",
    tags: ["Analytics", "Creator Tools", "Data"],
    status: "Live",
    placeholderClass: "bg-gradient-to-br from-[#d94a5e] to-[#60266A]",
    placeholderIcon: "📈",
  },
];

const transformationProjects = [
  {
    sector: "Financial Services",
    title: "AI Governance Framework Implementation",
    desc: "Designed and embedded an enterprise AI governance framework for a regulated UK financial services firm. Covered model risk policy, AI risk appetite statement, governance committee structure, and alignment to FCA AI guidance.",
    outcome: "Governance framework ratified at board level within 14 weeks.",
    tags: ["AMP 01", "AI Governance", "Financial Services"],
  },
  {
    sector: "Public Sector",
    title: "Agile Transformation Programme",
    desc: "End-to-end agile transformation for a central government department. Introduced structured sprint practices, squad models, and delivery governance to replace waterfall processes across a 120-person programme.",
    outcome: "Time-to-delivery reduced by 38% in the first two quarters.",
    tags: ["AMP 03", "Structured Delivery", "Public Sector"],
  },
  {
    sector: "Energy",
    title: "AI Readiness and Implementation Roadmap",
    desc: "Full AI readiness assessment for a UK energy provider. Identified 11 viable AI use cases, prioritised three for immediate implementation, and produced a 24-month roadmap including resourcing, governance, and change management.",
    outcome: "Board-approved AI roadmap delivered on time and within budget.",
    tags: ["AMP 02", "AI Implementation", "Energy"],
  },
  {
    sector: "Infrastructure",
    title: "Digital Product and Platform Build",
    desc: "Designed and delivered a customer-facing digital platform for an infrastructure organisation managing maintenance operations. Included field team mobile tooling, management dashboard, and third-party system integrations.",
    outcome: "Platform went live on schedule, adopted by 400+ users in week one.",
    tags: ["AMP 06", "Tech Build", "Infrastructure"],
  },
  {
    sector: "Technology",
    title: "Product Capability and Coaching Programme",
    desc: "A structured 12-month capability programme for a private technology company scaling its product function. Included Product Owner coaching, Centre of Excellence setup, and tooling standardisation across four squads.",
    outcome: "Squad velocity improved by 44% within six months of programme start.",
    tags: ["AMP 04", "AMP 05", "Capability Building"],
  },
  {
    sector: "Private Sector",
    title: "Tech Build and Legacy Modernisation",
    desc: "Led the modernisation of a legacy system for a UK professional services firm. Replaced a monolithic architecture with a modular, API-first platform, reducing operational risk and enabling faster product iteration.",
    outcome: "System downtime eliminated. Deployment frequency increased sixfold.",
    tags: ["AMP 06", "Tech Build", "Modernisation"],
  },
];

const credibilityStats: { value: string; label: string; icon: typeof BarChart3; desc: string; sub?: string }[] = [
  { value: "40+", label: "Projects Delivered", icon: BarChart3, desc: "Full-cycle engagements from discovery and scoping through to handover" },
  { value: "5", label: "Sectors Served", icon: TrendingUp, desc: "Infrastructure, energy, financial services, public sector, and technology" },
  { value: "3", label: "Live Products", icon: Smartphone, desc: "Apps and platforms built and operated by Amplified beyond client work" },
  { value: "10+", label: "Years of Practice", icon: Award, desc: "Combined practitioner experience across our partnership and associate network" },
];

const ampStoreAreas = [
  { tag: "AMP 01", title: "AI Governance", modules: ["AI Act Fundamentals", "Board-Level AI Briefing", "Responsible AI Policy Writing", "Governance Framework Design"] },
  { tag: "AMP 02", title: "AI Implementation", modules: ["AI Readiness Self-Assessment", "Use Case Prioritisation", "Implementation Planning Toolkit", "Handover and Transfer"] },
  { tag: "AMP 03", title: "Structured Delivery", modules: ["Structured Agile Fundamentals", "Squad Model Design", "Hybrid Delivery Playbook", "Sprint Governance Integration"] },
  { tag: "AMP 04", title: "Capability Building", modules: ["Product Owner Foundations", "Centre of Excellence Blueprint", "AI Literacy for Leaders", "Agile Practitioner Toolkit"] },
  { tag: "AMP 05", title: "Coaching", modules: ["Executive Coaching Frameworks", "Team Performance Tools", "Delivery Lead Coaching", "Practitioner Reflection Guides"] },
  { tag: "AMP 06", title: "Tech Build", modules: ["Platform Engineering Playbook", "DevOps Foundations", "API Design Standards", "Legacy Modernisation Toolkit"] },
];

const sustainabilityCommitments = [
  {
    title: "Remote-first by design",
    body: "Our operating model is deliberately remote-first. Reducing unnecessary travel is the single most direct action a consultancy can take on its carbon footprint, and we have built our delivery approach around it from the start.",
  },
  {
    title: "Offices on public transport",
    body: "Both our London office (7 Bell Yard, WC2A) and Porto operations are chosen for accessibility by public transport. We do not provide or incentivise car use for commuting.",
  },
  {
    title: "Ethical supplier selection",
    body: "We prioritise suppliers with published sustainability commitments, particularly for cloud infrastructure, office providers, and professional services. We favour UK and EU-based suppliers where practicable.",
  },
  {
    title: "Proportionate resource use",
    body: "We do not over-hire to fill capacity and then reduce. We scale engagements deliberately, which means lower churn, less wasted resource, and more stable employment for our people.",
  },
  {
    title: "Annual review and honest reporting",
    body: "We commit to an annual review of our environmental impact, including travel, office energy use, and supply chain. We will publish our findings and set improvement targets. We do not claim to be carbon neutral. We commit to making honest progress.",
  },
  {
    title: "Regulated industries as the multiplier",
    body: "Helping a national energy provider govern AI better, or helping a public sector body implement technology that works, has environmental and social effects that extend far beyond our own footprint.",
  },
];

const charitableEfforts = [
  {
    title: "Pro-bono consulting for social enterprises",
    body: "Each year, Amplified commits a proportion of consulting capacity to charities, social enterprises, and not-for-profit organisations that would not otherwise be able to access this level of expertise.",
  },
  {
    title: "Digital literacy programmes",
    body: "We support programmes that help people from all backgrounds access the skills they need to participate in a digitally-driven economy. This includes partnerships with coding programmes, mentoring networks, and workforce development schemes.",
  },
  {
    title: "Public sector as social good",
    body: "We regard our work inside the public sector as inherently charitable in nature. Better-delivered government technology means better services for citizens.",
  },
  {
    title: "Community and mentoring",
    body: "Our practitioners regularly give time to mentoring, speaking at industry events, and contributing to open-source learning resources.",
  },
  {
    title: "Inclusive hiring and career development",
    body: "We hire from every walk of life and invest in the long-term development of everyone who joins us. Creating sustainable, well-paid careers for people who would not otherwise access the consulting industry is a form of social commitment we take seriously.",
  },
];

const ampStoreFacts: [string, string][] = [
  ["What it is", "A curated digital platform delivering practitioner-led learning resources aligned to each Amplified service line."],
  ["Who it is for", "Delivery leads, product owners, technical leads, and senior leaders in regulated industries who need learning that applies to their actual context."],
  ["How you access it", "Annual or rolling subscription. Module sets can be licensed per team or accessed as part of a broader Amplified engagement."],
  ["What makes it different", "Every resource is built or reviewed by practitioners who have done the work. No generic content. Every module reflects real delivery experience."],
];

function SectionHeading({
  icon: Icon,
  eyebrow,
  title,
  lead,
  dark = false,
}: {
  icon: typeof Globe;
  eyebrow: string;
  title: ReactNode;
  lead?: string;
  dark?: boolean;
}) {
  return (
    <Stack gap="md" className="mb-12">
      <Stack direction="row" gap="md" align="start">
        <Icon className="mt-1 h-5 w-5 shrink-0 text-[#F85C70]" aria-hidden="true" />
        <Stack gap="xs">
          <Eyebrow className={dark ? undefined : "text-[#6B6E81]"}>{eyebrow}</Eyebrow>
          <Text variant="h2" tone={dark ? "white" : "ink"}>
            {title}
          </Text>
        </Stack>
      </Stack>
      {lead ? (
        <Text variant="body" tone={dark ? "white-70" : "muted"} className="max-w-[600px]">
          {lead}
        </Text>
      ) : null}
    </Stack>
  );
}

const OurWork = memo(function OurWork({ onOpenConsultation }: OurWorkProps) {
  useEffect(() => {
    const hash = window.location.hash;
    if (!hash) return;
    const id = hash.replace("#", "");
    const scroll = () => {
      const el = document.getElementById(id);
      if (el) {
        const navHeight = 80;
        const top = el.getBoundingClientRect().top + window.scrollY - navHeight;
        window.scrollTo({ top, behavior: "smooth" });
      }
    };
    const timer = setTimeout(scroll, 120);
    return () => clearTimeout(timer);
  }, []);

  return (
    <PageShell>
      <BreadcrumbBar items={[{ label: "Home", href: "/" }, { label: "Our Work" }]} />

      <PageHero
        eyebrow="Our Work"
        title={
          <span data-testid="text-page-title">
            Clients, Products,
            <br />
            and Commitments
          </span>
        }
        lead="The engagements we have delivered, the platforms we have built, and the values we hold ourselves to beyond the client relationship."
        contentClassName="max-w-[760px]"
      >
        <Stack direction="row" gap="sm" className="mt-12 flex-wrap">
          {[
            { label: "Achievements", href: "#achievements" },
            { label: "Client Work", href: "#client-work" },
            { label: "Apps", href: "#apps" },
            { label: "Transformation", href: "#transformation" },
            { label: "ampStore", href: "#amp-store" },
            { label: "Sustainability", href: "#sustainability" },
            { label: "Charitable Efforts", href: "#charitable" },
          ].map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="inline-flex h-9 items-center gap-2 rounded border border-white/15 px-4 text-xs font-semibold text-white/70 transition-colors duration-200 hover:bg-white/10 hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </Stack>
      </PageHero>

      <Section id="achievements" tone="mist" padding="md" className="scroll-mt-20">
        <BorderGrid cols={4} className="border-l border-t border-[#E5E3EE]">
          {credibilityStats.map((stat) => (
            <BorderCell key={stat.label} className="border-[#E5E3EE] bg-white p-8 text-center">
              <stat.icon className="mx-auto mb-4 h-5 w-5 text-[#F85C70]" aria-hidden="true" />
              <Text variant="display" className="mb-1 text-4xl md:text-5xl">{stat.value}</Text>
              {stat.sub ? <Eyebrow className="mb-2 justify-center">{stat.sub}</Eyebrow> : null}
              <Text variant="caption" className="mb-2 font-bold uppercase tracking-[0.08em]">{stat.label}</Text>
              <Text variant="caption" tone="muted">{stat.desc}</Text>
            </BorderCell>
          ))}
        </BorderGrid>
      </Section>

      <Section id="client-work" tone="white" padding="lg" className="scroll-mt-20">
        <SectionHeading
          icon={Globe}
          eyebrow="Website Builds"
          title={
            <>
              Platforms and Websites
              <br />
              We Have Built
            </>
          }
          lead="From marketplace platforms to editorial brand sites, these are products we have taken from brief to live. Each one built with the same rigour we bring to enterprise delivery."
        />

        <BorderGrid cols={2} className="border-l border-t border-[#E5E3EE]">
          {websiteBuilds.map((project) => (
            <BorderCell key={project.name} className="flex h-full flex-col overflow-hidden border-[#E5E3EE] !p-0">
              <div className="flex flex-col bg-[#F2F0F7]">
                <div className="flex items-center gap-1.5 border-b border-[#d8d5e6] bg-[#E5E3EE] px-3 py-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#F85C70]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#60266A]/40" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#181F4F]/30" />
                  <span className="ml-2 max-w-[200px] flex-1 rounded bg-white px-2 py-0.5 text-center font-mono text-xs text-[#65677B]">
                    {project.domain}
                  </span>
                </div>
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative block h-[200px] overflow-hidden"
                  aria-label={`Visit ${project.domain}`}
                >
                  <img
                    src={`https://image.thum.io/get/width/640/crop/400/${project.url}`}
                    alt={project.name}
                    width={640}
                    height={400}
                    className="h-[200px] w-full object-cover object-top transition-transform duration-500 hover:scale-105"
                    loading="lazy"
                    onError={(e) => {
                      const img = e.currentTarget as HTMLImageElement;
                      img.classList.add("hidden");
                      const parent = img.parentElement;
                      if (parent && !parent.querySelector("[data-fallback]")) {
                        parent.classList.add("flex", "items-center", "justify-center", "bg-[#F2F0F7]");
                        const fallback = document.createElement("span");
                        fallback.dataset.fallback = "true";
                        fallback.className = "font-mono text-xs text-[#6B6E81]";
                        fallback.textContent = project.domain;
                        parent.appendChild(fallback);
                      }
                    }}
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-[#181F4F]/60 opacity-0 transition-opacity duration-200 hover:opacity-100">
                    <span className="flex items-center gap-2 font-sans text-sm font-semibold text-white">
                      Visit site <ExternalLink className="h-4 w-4" />
                    </span>
                  </div>
                </a>
              </div>

              <Stack gap="md" className="flex flex-1 flex-col p-7">
                <div className="flex items-start justify-between">
                  <Stack gap="xs">
                    <Eyebrow>{project.category}</Eyebrow>
                    <Text variant="h3">{project.name}</Text>
                  </Stack>
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-3 flex h-7 shrink-0 items-center gap-1 rounded border border-[#E5E3EE] px-2.5 font-mono text-xs text-[#65677B] transition-colors duration-150 hover:border-[#F85C70] hover:text-[#F85C70]"
                  >
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </div>
                <Text variant="small" tone="muted" className="flex-1">
                  {project.desc}
                </Text>
                <Stack direction="row" gap="xs" className="flex-wrap">
                  {project.tags.map((tag) => (
                    <span key={tag} className="rounded bg-[#F2F0F7] px-2.5 py-1 font-mono text-xs text-[#6B6E81]">
                      {tag}
                    </span>
                  ))}
                </Stack>
              </Stack>
            </BorderCell>
          ))}
        </BorderGrid>
      </Section>

      <Section id="apps" tone="navy" padding="lg" className="scroll-mt-20">
        <SectionHeading
          dark
          icon={Smartphone}
          eyebrow="Apps and Platforms"
          title={
            <>
              Products We Have
              <br />
              Designed and Shipped
            </>
          }
          lead="These are applications we have built end-to-end: product strategy, UX, engineering, and go-to-market. Social platforms, analytics tools, and community products for real audiences."
        />

        <BorderGrid cols={3} className="border-l border-t border-white/10">
          {appBuilds.map((app) => (
            <BorderCell key={app.name} className="flex h-full flex-col overflow-hidden border-white/10 !p-0">
              <div className={`relative flex h-[180px] flex-col items-center justify-center ${app.placeholderClass}`}>
                <div
                  className="absolute inset-0 bg-[repeating-linear-gradient(45deg,rgba(255,255,255,0.05)_0px,rgba(255,255,255,0.05)_1px,transparent_1px,transparent_40px)] opacity-10"
                  aria-hidden="true"
                />
                <span className="relative z-10 mb-3 text-5xl" role="img" aria-label={app.name}>
                  {app.placeholderIcon}
                </span>
                <Text variant="h4" tone="white" className="relative z-10 tracking-[0.02em]">
                  {app.name}
                </Text>
                <span className="relative z-10 mt-2 rounded bg-[#F85C70]/25 px-2.5 py-0.5 font-mono text-xs text-[#F85C70]">
                  {app.status}
                </span>
              </div>

              <Stack gap="md" className="flex flex-1 flex-col p-7">
                <Eyebrow>{app.category}</Eyebrow>
                <Text variant="h3" tone="white">
                  {app.name}
                </Text>
                <Text variant="small" tone="white-70" className="flex-1">
                  {app.desc}
                </Text>
                <Stack direction="row" gap="xs" className="flex-wrap">
                  {app.tags.map((tag) => (
                    <span key={tag} className="rounded bg-white/5 px-2.5 py-1 font-mono text-xs text-white/50">
                      {tag}
                    </span>
                  ))}
                </Stack>
                {app.url ? (
                  <a
                    href={app.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 font-sans text-xs font-semibold text-[#F85C70] transition-colors duration-150 hover:text-white"
                  >
                    Visit {app.domain} <ExternalLink className="h-3 w-3" />
                  </a>
                ) : null}
              </Stack>
            </BorderCell>
          ))}
        </BorderGrid>
      </Section>

      <Section id="transformation" tone="white" padding="lg" className="scroll-mt-20">
        <SectionHeading
          icon={Zap}
          eyebrow="Digital Transformation"
          title={
            <>
              Enterprise Implementations
              <br />
              Across Five Sectors
            </>
          }
          lead="Selected examples of the consulting, implementation, and transformation work we have delivered for clients in infrastructure, energy, financial services, public sector, and technology. Client details are anonymised in line with confidentiality agreements."
        />

        <BorderGrid cols={3} className="border-l border-t border-[#E5E3EE]">
          {transformationProjects.map((project) => (
            <BorderCell key={project.title} className="flex h-full flex-col border-[#E5E3EE]">
              <div className="mb-5 h-5 w-0.5 rounded bg-[#F85C70]" />
              <Eyebrow className="mb-2">{project.sector}</Eyebrow>
              <Text variant="h3" className="mb-3 flex-1">{project.title}</Text>
              <Text variant="small" tone="muted" className="mb-5">{project.desc}</Text>
              <Surface variant="mist" padding="md" radius="sm" className="mb-5">
                <Text variant="caption" className="mb-1 font-bold uppercase tracking-[0.06em] text-[#60266A]">
                  Outcome
                </Text>
                <Text variant="small">{project.outcome}</Text>
              </Surface>
              <Stack direction="row" gap="xs" className="mt-auto flex-wrap">
                {project.tags.map((tag) => (
                  <span key={tag} className="rounded bg-[#F2F0F7] px-2.5 py-1 font-mono text-xs text-[#6B6E81]">
                    {tag}
                  </span>
                ))}
              </Stack>
            </BorderCell>
          ))}
        </BorderGrid>

        <div className="mt-10">
          <AmpButton onClick={() => onOpenConsultation?.("our-work")} data-testid="button-our-work-hero">
            Discuss a Transformation <ArrowRight className="h-4 w-4" />
          </AmpButton>
        </div>
      </Section>

      <Section id="amp-store" tone="mist" padding="lg" className="scroll-mt-20">
        <SectionHeading
          icon={ShoppingBag}
          eyebrow="ampStore"
          title={
            <>
              Practitioner Learning.
              <br />
              Built Into the Work.
            </>
          }
        />

        <Grid cols="2-lg" gap="xl" className="mb-12 items-start">
          <Stack gap="md">
            <Text variant="body" tone="muted">
              ampStore is our curated learning platform designed for practitioners in regulated
              industries. Not generic e-learning. Not certification for its own sake. Content
              built by the people who deliver the work, for the people doing it.
            </Text>
            <Text variant="body" tone="muted">
              Each module aligns directly to one of our six AMP service lines. The tools,
              frameworks, and playbooks in ampStore are the same ones our consultants use on live
              engagements. No gap between theory and practice.
            </Text>
            <Text variant="body" tone="muted">
              Available as a standalone subscription, as part of a Capability Building engagement,
              or integrated into a broader Amplified programme as a continuous development layer.
            </Text>
          </Stack>
          <Stack gap="sm">
            {ampStoreFacts.map(([label, value]) => (
              <Surface key={label} variant="plain" padding="md" radius="sm" className="bg-white">
                <Text variant="caption" className="mb-1.5 font-bold uppercase tracking-[0.08em] text-[#60266A]">
                  {label}
                </Text>
                <Text variant="small" tone="muted">{value}</Text>
              </Surface>
            ))}
          </Stack>
        </Grid>

        <Eyebrow tone="subtle" className="mb-8">Catalogue areas</Eyebrow>
        <BorderGrid cols={3} className="border-l border-t border-[#E5E3EE]">
          {ampStoreAreas.map((area) => (
            <BorderCell key={area.tag} className="border-[#E5E3EE] bg-white">
              <Stack direction="row" gap="sm" align="center" className="mb-4">
                <Eyebrow>{area.tag}</Eyebrow>
                <Text variant="small" className="font-bold">{area.title}</Text>
              </Stack>
              <ul className="space-y-2">
                {area.modules.map((mod) => (
                  <li key={mod} className="flex items-start gap-2">
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[#F85C70]" />
                    <Text variant="caption" tone="muted">{mod}</Text>
                  </li>
                ))}
              </ul>
            </BorderCell>
          ))}
        </BorderGrid>

        <Stack direction="row-responsive" gap="md" className="mt-10 flex-wrap">
          <AmpButton asChild data-testid="button-explore-amp-store">
            <Link href="/amp-store">
              Explore ampStore <ArrowRight className="h-4 w-4" />
            </Link>
          </AmpButton>
          <AmpButton variant="outlineDark" onClick={() => onOpenConsultation?.("amp-store")} data-testid="button-amp-store-access">
            Talk to us about access
          </AmpButton>
        </Stack>
      </Section>

      <Section id="sustainability" tone="navy" padding="lg" className="scroll-mt-20">
        <SectionHeading
          dark
          icon={Leaf}
          eyebrow="Sustainability"
          title={
            <>
              Our Commitments to
              <br />
              Sustainable Practice
            </>
          }
          lead="We do not make ambitious sustainability claims we cannot substantiate. What we can tell you is what we actually do, why we do it, and what we are committed to improving."
        />

        <BorderGrid cols={2} className="border-l border-t border-white/10">
          {sustainabilityCommitments.map((item) => (
            <BorderCell key={item.title} className="border-white/10">
              <div className="mb-5 h-6 w-0.5 rounded bg-[#F85C70]" />
              <Text variant="h3" tone="white" className="mb-3">{item.title}</Text>
              <Text variant="small" tone="white-70">{item.body}</Text>
            </BorderCell>
          ))}
        </BorderGrid>
      </Section>

      <Section id="charitable" tone="white" padding="lg" className="scroll-mt-20">
        <SectionHeading
          icon={Heart}
          eyebrow="Charitable Efforts"
          title={
            <>
              Putting Expertise
              <br />
              Where It Matters
            </>
          }
          lead="Organisations with deep expertise have an obligation to share it. Our charitable commitments are structured and deliberate, not ad hoc."
        />

        <BorderGrid cols={3} className="border-l border-t border-[#E5E3EE]">
          {charitableEfforts.map((item) => (
            <ContentCard
              key={item.title}
              variant="bordered"
              className="border-[#E5E3EE]"
              title={item.title}
              description={item.body}
              eyebrow={<CheckCircle className="h-5 w-5 text-[#F85C70]" aria-hidden="true" />}
              titleClamp={3}
              descriptionClamp={6}
            />
          ))}
        </BorderGrid>

        <Surface variant="mist" padding="lg" radius="md" className="mt-10 flex items-start gap-4">
          <Heart className="mt-0.5 h-5 w-5 shrink-0 text-[#F85C70]" aria-hidden="true" />
          <Stack gap="xs">
            <Text variant="small" className="font-bold">Work with a charity or social enterprise?</Text>
            <Text variant="small" tone="muted">
              If you lead or work with a charitable organisation that could benefit from pro-bono
              support in technology, AI governance, or structured delivery, contact us at{" "}
              <a href="mailto:hello@amplified.co.uk" className="text-[#F85C70] hover:underline">
                hello@amplified.co.uk
              </a>{" "}
              with a brief description of your organisation and the challenge you are working on.
            </Text>
          </Stack>
        </Surface>
      </Section>

      <CtaBand
        tone="purple"
        eyebrow="Work with Amplified"
        title="Ready to Start Something?"
        lead="Whether you want to explore ampStore, discuss a transformation challenge, or find out about our pro-bono programme, we would like to hear from you."
      >
        <Stack direction="row-responsive" gap="md" className="justify-center">
          <AmpButton onClick={() => onOpenConsultation?.("our-work")} data-testid="button-cta">
            Start a Conversation <ArrowRight className="h-4 w-4" />
          </AmpButton>
          <AmpButton asChild variant="outlineLight" data-testid="button-browse-amp-store">
            <Link href="/amp-store">Browse ampStore</Link>
          </AmpButton>
        </Stack>
      </CtaBand>
    </PageShell>
  );
});

export default OurWork;
