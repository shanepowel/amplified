'use client';

import { memo, useEffect } from "react";
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
    url: null,
    domain: null,
    category: "Social Discovery App",
    desc: "A social discovery platform built to surface authentic, interest-driven connections. AI-assisted content surfacing, real-time feed, and community management tools designed to reward genuine engagement over reach.",
    tags: ["Mobile App", "Social", "AI Features"],
    status: "Live",
    placeholderBg: "linear-gradient(135deg, #60266A 0%, #181F4F 100%)",
    placeholderIcon: "👥",
    placeholderAccent: "#F85C70",
  },
  {
    name: "Viralyz",
    url: "https://viralyz.com",
    domain: "viralyz.com",
    category: "Analytics Platform",
    desc: "A viral content analytics platform for creators and brand teams. Tracks content performance across channels, identifies virality signals early, and generates actionable insight reports without the noise of traditional dashboards.",
    tags: ["Analytics", "Creator Tools", "Data"],
    status: "Live",
    placeholderBg: "linear-gradient(135deg, #d94a5e 0%, #60266A 100%)",
    placeholderIcon: "📈",
    placeholderAccent: "#ffffff",
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
    <div className="min-h-screen font-sans" style={{ backgroundColor: "#ffffff" }}>

      {/* HERO */}
      <section className="py-28 lg:py-36" style={{ backgroundColor: "#181F4F" }}>
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <p className="font-mono text-xs uppercase tracking-[0.15em] mb-6" style={{ color: "#F85C70" }}>
            Our Work
          </p>
          <h1
            className="font-display text-5xl md:text-6xl text-white mb-8 leading-tight max-w-[760px]"
            style={{ fontWeight: 400 }}
            data-testid="text-page-title"
          >
            Clients, Products,<br />and Commitments
          </h1>
          <p className="font-sans text-lg max-w-[600px] leading-relaxed" style={{ color: "rgba(255,255,255,0.75)" }}>
            The engagements we have delivered, the platforms we have built, and the values
            we hold ourselves to beyond the client relationship.
          </p>

          <div className="flex flex-wrap gap-3 mt-12">
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
                className="inline-flex items-center gap-2 px-4 h-9 font-sans text-xs font-semibold rounded transition-colors duration-200"
                style={{ border: "1px solid rgba(255,255,255,0.15)", color: "rgba(255,255,255,0.7)", backgroundColor: "transparent" }}
                onMouseOver={(e) => { (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "rgba(255,255,255,0.08)"; (e.currentTarget as HTMLAnchorElement).style.color = "#ffffff"; }}
                onMouseOut={(e) => { (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "transparent"; (e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.7)"; }}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ACHIEVEMENTS / SCORES */}
      <section id="achievements" className="py-16 scroll-mt-20" style={{ backgroundColor: "#F2F0F7" }}>
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-0 border-l border-t" style={{ borderColor: "#E5E3EE" }}>
            {credibilityStats.map((stat) => (
              <div key={stat.label} className="p-8 border-r border-b text-center" style={{ borderColor: "#E5E3EE", backgroundColor: "#ffffff" }}>
                <stat.icon className="h-5 w-5 mx-auto mb-4" style={{ color: "#F85C70" }} />
                <p className="font-display text-4xl md:text-5xl mb-1" style={{ color: "#181F4F", fontWeight: 400 }}>
                  {stat.value}
                </p>
                {stat.sub && (
                  <p className="font-mono text-xs mb-2" style={{ color: "#F85C70" }}>{stat.sub}</p>
                )}
                <p className="font-sans text-xs font-bold uppercase tracking-[0.08em] mb-2" style={{ color: "#181F4F" }}>
                  {stat.label}
                </p>
                <p className="font-sans text-xs leading-relaxed" style={{ color: "#65677B" }}>
                  {stat.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WEBSITE BUILDS */}
      <section id="client-work" className="py-20 lg:py-28 bg-white scroll-mt-20">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-start gap-4 mb-4">
            <Globe className="h-5 w-5 flex-shrink-0 mt-1" style={{ color: "#F85C70" }} />
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.12em] mb-1" style={{ color: "#6B6E81" }}>
                Website Builds
              </p>
              <h2 className="font-display text-4xl md:text-5xl" style={{ color: "#181F4F", fontWeight: 400 }}>
                Platforms and Websites<br />We Have Built
              </h2>
            </div>
          </div>
          <p className="font-sans text-base leading-relaxed max-w-[600px] mt-6 mb-12" style={{ color: "#65677B" }}>
            From marketplace platforms to editorial brand sites, these are products we have taken from
            brief to live. Each one built with the same rigour we bring to enterprise delivery.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border-l border-t" style={{ borderColor: "#E5E3EE" }}>
            {websiteBuilds.map((project) => (
              <div
                key={project.name}
                className="border-r border-b flex flex-col overflow-hidden"
                style={{ borderColor: "#E5E3EE" }}
              >
                {/* Browser chrome + screenshot */}
                <div className="flex flex-col" style={{ backgroundColor: "#F2F0F7" }}>
                  <div
                    className="flex items-center gap-1.5 px-3 py-2 border-b"
                    style={{ backgroundColor: "#E5E3EE", borderColor: "#d8d5e6" }}
                  >
                    <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: "#F85C70" }} />
                    <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: "#60266A", opacity: 0.4 }} />
                    <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: "#181F4F", opacity: 0.3 }} />
                    <span
                      className="ml-2 flex-1 font-mono text-xs px-2 py-0.5 rounded text-center"
                      style={{ backgroundColor: "#ffffff", color: "#65677B", maxWidth: "200px" }}
                    >
                      {project.domain}
                    </span>
                  </div>
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block overflow-hidden relative"
                    style={{ height: "200px" }}
                    aria-label={`Visit ${project.domain}`}
                  >
                    <img
                      src={`https://image.thum.io/get/width/640/crop/400/${project.url}`}
                      alt={project.name}
                      width={640}
                      height={400}
                      className="w-full object-cover object-top transition-transform duration-500 hover:scale-105"
                      style={{ height: "200px" }}
                      loading="lazy"
                      onError={(e) => {
                        const img = e.currentTarget as HTMLImageElement;
                        img.style.display = "none";
                        const parent = img.parentElement;
                        if (parent) {
                          parent.style.display = "flex";
                          parent.style.alignItems = "center";
                          parent.style.justifyContent = "center";
                          parent.style.backgroundColor = "#F2F0F7";
                          parent.innerHTML = `<span style="font-mono; font-size:12px; color:#6B6E81;">${project.domain}</span>`;
                        }
                      }}
                    />
                    <div
                      className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-200 flex items-center justify-center"
                      style={{ backgroundColor: "rgba(24,31,79,0.6)" }}
                    >
                      <span className="font-sans text-white text-sm font-semibold flex items-center gap-2">
                        Visit site <ExternalLink className="h-4 w-4" />
                      </span>
                    </div>
                  </a>
                </div>

                {/* Content */}
                <div className="p-7 flex flex-col flex-1">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <p className="font-mono text-xs uppercase tracking-[0.1em] mb-1" style={{ color: "#F85C70" }}>
                        {project.category}
                      </p>
                      <h3 className="font-display text-xl" style={{ color: "#181F4F", fontWeight: 400 }}>
                        {project.name}
                      </h3>
                    </div>
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-shrink-0 flex items-center gap-1 font-mono text-xs px-2.5 h-7 rounded transition-colors duration-150 ml-3"
                      style={{ border: "1px solid #E5E3EE", color: "#65677B" }}
                      onMouseOver={(e) => { (e.currentTarget as HTMLAnchorElement).style.borderColor = "#F85C70"; (e.currentTarget as HTMLAnchorElement).style.color = "#F85C70"; }}
                      onMouseOut={(e) => { (e.currentTarget as HTMLAnchorElement).style.borderColor = "#E5E3EE"; (e.currentTarget as HTMLAnchorElement).style.color = "#65677B"; }}
                    >
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  </div>
                  <p className="font-sans text-sm leading-relaxed mb-4 flex-1" style={{ color: "#65677B" }}>
                    {project.desc}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="font-mono text-xs px-2.5 py-1 rounded"
                        style={{ backgroundColor: "#F2F0F7", color: "#6B6E81" }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* APPS */}
      <section id="apps" className="py-20 lg:py-28 scroll-mt-20" style={{ backgroundColor: "#181F4F" }}>
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-start gap-4 mb-4">
            <Smartphone className="h-5 w-5 flex-shrink-0 mt-1" style={{ color: "#F85C70" }} />
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.12em] mb-1" style={{ color: "#F85C70" }}>
                Apps and Platforms
              </p>
              <h2 className="font-display text-4xl md:text-5xl text-white" style={{ fontWeight: 400 }}>
                Products We Have<br />Designed and Shipped
              </h2>
            </div>
          </div>
          <p className="font-sans text-base leading-relaxed max-w-[600px] mt-6 mb-12" style={{ color: "rgba(255,255,255,0.65)" }}>
            These are applications we have built end-to-end: product strategy, UX, engineering, and
            go-to-market. Social platforms, analytics tools, and community products for real audiences.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 border-l border-t" style={{ borderColor: "rgba(255,255,255,0.08)" }}>
            {appBuilds.map((app) => (
              <div
                key={app.name}
                className="border-r border-b flex flex-col overflow-hidden"
                style={{ borderColor: "rgba(255,255,255,0.08)" }}
              >
                {/* Styled placeholder card */}
                <div
                  className="relative flex flex-col items-center justify-center"
                  style={{ background: app.placeholderBg, height: "180px" }}
                >
                  <div
                    className="absolute inset-0 opacity-10"
                    style={{
                      backgroundImage: "repeating-linear-gradient(45deg, rgba(255,255,255,0.05) 0px, rgba(255,255,255,0.05) 1px, transparent 1px, transparent 40px)",
                    }}
                  />
                  <span className="text-5xl mb-3 relative z-10" role="img" aria-label={app.name}>
                    {app.placeholderIcon}
                  </span>
                  <span
                    className="font-display text-lg text-white relative z-10"
                    style={{ fontWeight: 400, letterSpacing: "0.02em" }}
                  >
                    {app.name}
                  </span>
                  <span
                    className="font-mono text-xs mt-2 px-2.5 py-0.5 rounded relative z-10"
                    style={{ backgroundColor: "rgba(248,92,112,0.25)", color: "#F85C70" }}
                  >
                    {app.status}
                  </span>
                </div>

                {/* Content */}
                <div className="p-7 flex flex-col flex-1">
                  <p className="font-mono text-xs uppercase tracking-[0.1em] mb-1" style={{ color: "#F85C70" }}>
                    {app.category}
                  </p>
                  <h3 className="font-display text-xl text-white mb-4" style={{ fontWeight: 400 }}>
                    {app.name}
                  </h3>
                  <p className="font-sans text-sm leading-relaxed mb-5 flex-1" style={{ color: "rgba(255,255,255,0.6)" }}>
                    {app.desc}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-5">
                    {app.tags.map((tag) => (
                      <span
                        key={tag}
                        className="font-mono text-xs px-2.5 py-1 rounded"
                        style={{ backgroundColor: "rgba(255,255,255,0.06)", color: "rgba(255,255,255,0.5)" }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  {app.url && (
                    <a
                      href={app.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 font-sans text-xs font-semibold transition-colors duration-150"
                      style={{ color: "#F85C70" }}
                      onMouseOver={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "#ffffff")}
                      onMouseOut={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "#F85C70")}
                    >
                      Visit {app.domain} <ExternalLink className="h-3 w-3" />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DIGITAL TRANSFORMATION */}
      <section id="transformation" className="py-20 lg:py-28 bg-white scroll-mt-20">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-start gap-4 mb-4">
            <Zap className="h-5 w-5 flex-shrink-0 mt-1" style={{ color: "#F85C70" }} />
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.12em] mb-1" style={{ color: "#6B6E81" }}>
                Digital Transformation
              </p>
              <h2 className="font-display text-4xl md:text-5xl" style={{ color: "#181F4F", fontWeight: 400 }}>
                Enterprise Implementations<br />Across Five Sectors
              </h2>
            </div>
          </div>
          <p className="font-sans text-base leading-relaxed max-w-[600px] mt-6 mb-12" style={{ color: "#65677B" }}>
            Selected examples of the consulting, implementation, and transformation work we have
            delivered for clients in infrastructure, energy, financial services, public sector, and
            technology. Client details are anonymised in line with confidentiality agreements.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border-l border-t" style={{ borderColor: "#E5E3EE" }}>
            {transformationProjects.map((project) => (
              <div key={project.title} className="p-8 border-r border-b flex flex-col" style={{ borderColor: "#E5E3EE" }}>
                <div className="w-0.5 h-5 mb-5 rounded" style={{ backgroundColor: "#F85C70" }} />
                <p className="font-mono text-xs uppercase tracking-[0.1em] mb-2" style={{ color: "#F85C70" }}>
                  {project.sector}
                </p>
                <h3 className="font-display text-xl mb-3 flex-1" style={{ color: "#181F4F", fontWeight: 400 }}>
                  {project.title}
                </h3>
                <p className="font-sans text-sm leading-relaxed mb-5" style={{ color: "#65677B" }}>
                  {project.desc}
                </p>
                <div
                  className="p-4 rounded mb-5"
                  style={{ backgroundColor: "#F2F0F7" }}
                >
                  <p className="font-sans text-xs font-bold uppercase tracking-[0.06em] mb-1" style={{ color: "#60266A" }}>
                    Outcome
                  </p>
                  <p className="font-sans text-sm" style={{ color: "#181F4F" }}>
                    {project.outcome}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-mono text-xs px-2.5 py-1 rounded"
                      style={{ backgroundColor: "#F2F0F7", color: "#6B6E81" }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            <button
              onClick={() => onOpenConsultation?.("our-work")}
              className="amp-focus-ring-on-navy inline-flex items-center gap-2 px-8 h-11 font-sans font-bold text-sm rounded transition-colors duration-200"
              style={{ backgroundColor: "#F85C70", color: "#181F4F" }}
              onMouseOver={(e) => ((e.currentTarget as HTMLButtonElement).style.backgroundColor = "#d94a5e")}
              onMouseOut={(e) => ((e.currentTarget as HTMLButtonElement).style.backgroundColor = "#F85C70")}
              data-testid="button-our-work-hero"
            >
              Discuss a Transformation <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </section>

      {/* AMPSTORE */}
      <section id="amp-store" className="py-20 lg:py-28 scroll-mt-20" style={{ backgroundColor: "#F2F0F7" }}>
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-start gap-4 mb-4">
            <ShoppingBag className="h-5 w-5 flex-shrink-0 mt-1" style={{ color: "#F85C70" }} />
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.12em] mb-1" style={{ color: "#6B6E81" }}>
                ampStore
              </p>
              <h2 className="font-display text-4xl md:text-5xl" style={{ color: "#181F4F", fontWeight: 400 }}>
                Practitioner Learning.<br />Built Into the Work.
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mt-10 mb-12">
            <div>
              <p className="font-sans text-base leading-relaxed mb-4" style={{ color: "#65677B" }}>
                ampStore is our curated learning platform designed for practitioners in regulated
                industries. Not generic e-learning. Not certification for its own sake. Content
                built by the people who deliver the work, for the people doing it.
              </p>
              <p className="font-sans text-base leading-relaxed mb-4" style={{ color: "#65677B" }}>
                Each module aligns directly to one of our six AMP service lines. The tools,
                frameworks, and playbooks in ampStore are the same ones our consultants use on live
                engagements. No gap between theory and practice.
              </p>
              <p className="font-sans text-base leading-relaxed" style={{ color: "#65677B" }}>
                Available as a standalone subscription, as part of a Capability Building engagement,
                or integrated into a broader Amplified programme as a continuous development layer.
              </p>
            </div>
            <div className="space-y-3">
              {[
                ["What it is", "A curated digital platform delivering practitioner-led learning resources aligned to each Amplified service line."],
                ["Who it is for", "Delivery leads, product owners, technical leads, and senior leaders in regulated industries who need learning that applies to their actual context."],
                ["How you access it", "Annual or rolling subscription. Module sets can be licensed per team or accessed as part of a broader Amplified engagement."],
                ["What makes it different", "Every resource is built or reviewed by practitioners who have done the work. No generic content. Every module reflects real delivery experience."],
              ].map(([label, value]) => (
                <div key={label as string} className="p-5 rounded" style={{ backgroundColor: "#ffffff" }}>
                  <p className="font-sans text-xs font-bold uppercase tracking-[0.08em] mb-1.5" style={{ color: "#60266A" }}>
                    {label}
                  </p>
                  <p className="font-sans text-sm leading-relaxed" style={{ color: "#65677B" }}>{value}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <p className="font-mono text-xs uppercase tracking-[0.12em] mb-8" style={{ color: "#6B6E81" }}>
              Catalogue areas
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border-l border-t" style={{ borderColor: "#E5E3EE" }}>
              {ampStoreAreas.map((area) => (
                <div key={area.tag} className="p-7 border-r border-b" style={{ borderColor: "#E5E3EE", backgroundColor: "#ffffff" }}>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="font-mono text-xs" style={{ color: "#F85C70" }}>{area.tag}</span>
                    <span className="font-sans text-sm font-bold" style={{ color: "#181F4F" }}>{area.title}</span>
                  </div>
                  <ul className="space-y-2">
                    {area.modules.map((mod) => (
                      <li key={mod} className="flex items-start gap-2">
                        <span className="flex-shrink-0 mt-1.5 w-1 h-1 rounded-full" style={{ backgroundColor: "#F85C70" }} />
                        <span className="font-sans text-xs leading-relaxed" style={{ color: "#65677B" }}>{mod}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link href="/amp-store">
              <button
                className="amp-focus-ring-on-light inline-flex items-center gap-2 px-8 h-11 font-sans font-bold text-sm rounded transition-colors duration-200"
                style={{ backgroundColor: "#F85C70", color: "#181F4F" }}
                onMouseOver={(e) => ((e.currentTarget as HTMLButtonElement).style.backgroundColor = "#d94a5e")}
                onMouseOut={(e) => ((e.currentTarget as HTMLButtonElement).style.backgroundColor = "#F85C70")}
                data-testid="button-explore-amp-store"
              >
                Explore ampStore <ArrowRight className="h-4 w-4" />
              </button>
            </Link>
            <button
              onClick={() => onOpenConsultation?.("amp-store")}
              className="amp-focus-ring-on-light inline-flex items-center gap-2 px-8 h-11 font-sans font-bold text-sm rounded transition-colors duration-200"
              style={{ border: "1px solid #E5E3EE", color: "#181F4F", backgroundColor: "transparent" }}
              data-testid="button-amp-store-access"
              onMouseOver={(e) => ((e.currentTarget as HTMLButtonElement).style.backgroundColor = "#ffffff")}
              onMouseOut={(e) => ((e.currentTarget as HTMLButtonElement).style.backgroundColor = "transparent")}
            >
              Talk to us about access
            </button>
          </div>
        </div>
      </section>

      {/* SUSTAINABILITY */}
      <section id="sustainability" className="py-20 lg:py-28 scroll-mt-20" style={{ backgroundColor: "#181F4F" }}>
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-start gap-4 mb-4">
            <Leaf className="h-5 w-5 flex-shrink-0 mt-1" style={{ color: "#F85C70" }} />
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.12em] mb-1" style={{ color: "#F85C70" }}>
                Sustainability
              </p>
              <h2 className="font-display text-4xl md:text-5xl text-white" style={{ fontWeight: 400 }}>
                Our Commitments to<br />Sustainable Practice
              </h2>
            </div>
          </div>
          <p className="font-sans text-base leading-relaxed max-w-[580px] mt-6 mb-12" style={{ color: "rgba(255,255,255,0.65)" }}>
            We do not make ambitious sustainability claims we cannot substantiate. What we can tell
            you is what we actually do, why we do it, and what we are committed to improving.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border-l border-t" style={{ borderColor: "rgba(255,255,255,0.1)" }}>
            {sustainabilityCommitments.map((item) => (
              <div key={item.title} className="p-8 border-r border-b" style={{ borderColor: "rgba(255,255,255,0.1)" }}>
                <div className="w-0.5 h-6 mb-5 rounded" style={{ backgroundColor: "#F85C70" }} />
                <h3 className="font-display text-xl text-white mb-3" style={{ fontWeight: 400 }}>
                  {item.title}
                </h3>
                <p className="font-sans text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.6)" }}>
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CHARITABLE EFFORTS */}
      <section id="charitable" className="py-20 lg:py-28 bg-white scroll-mt-20">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-start gap-4 mb-4">
            <Heart className="h-5 w-5 flex-shrink-0 mt-1" style={{ color: "#F85C70" }} />
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.12em] mb-1" style={{ color: "#6B6E81" }}>
                Charitable Efforts
              </p>
              <h2 className="font-display text-4xl md:text-5xl" style={{ color: "#181F4F", fontWeight: 400 }}>
                Putting Expertise<br />Where It Matters
              </h2>
            </div>
          </div>
          <p className="font-sans text-base leading-relaxed max-w-[580px] mt-6 mb-12" style={{ color: "#65677B" }}>
            Organisations with deep expertise have an obligation to share it. Our charitable
            commitments are structured and deliberate, not ad hoc.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border-l border-t" style={{ borderColor: "#E5E3EE" }}>
            {charitableEfforts.map((item) => (
              <div key={item.title} className="p-8 border-r border-b" style={{ borderColor: "#E5E3EE" }}>
                <CheckCircle className="h-5 w-5 mb-4" style={{ color: "#F85C70" }} />
                <h3 className="font-display text-xl mb-3" style={{ color: "#181F4F", fontWeight: 400 }}>
                  {item.title}
                </h3>
                <p className="font-sans text-sm leading-relaxed" style={{ color: "#65677B" }}>
                  {item.body}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10 p-6 rounded flex items-start gap-4" style={{ backgroundColor: "#F2F0F7" }}>
            <Heart className="h-5 w-5 flex-shrink-0 mt-0.5" style={{ color: "#F85C70" }} />
            <div>
              <p className="font-sans text-sm font-bold mb-1" style={{ color: "#181F4F" }}>
                Work with a charity or social enterprise?
              </p>
              <p className="font-sans text-sm leading-relaxed" style={{ color: "#65677B" }}>
                If you lead or work with a charitable organisation that could benefit from pro-bono
                support in technology, AI governance, or structured delivery, contact us at{" "}
                <a href="mailto:hello@amplified.co.uk" style={{ color: "#F85C70" }}>
                  hello@amplified.co.uk
                </a>{" "}
                with a brief description of your organisation and the challenge you are working on.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 text-center" style={{ backgroundColor: "#60266A" }}>
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <p className="font-mono text-xs uppercase tracking-[0.15em] mb-6" style={{ color: "rgba(255,255,255,0.5)" }}>
            Work with Amplified
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-white mb-6" style={{ fontWeight: 400 }}>
            Ready to Start Something?
          </h2>
          <p className="font-sans text-lg max-w-[480px] mx-auto mb-10" style={{ color: "rgba(255,255,255,0.8)" }}>
            Whether you want to explore ampStore, discuss a transformation challenge, or find
            out about our pro-bono programme, we would like to hear from you.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button
              onClick={() => onOpenConsultation?.("our-work")}
              className="amp-focus-ring-on-navy inline-flex items-center gap-2 px-10 h-12 font-sans font-bold text-base rounded transition-colors duration-200"
              style={{ backgroundColor: "#F85C70", color: "#181F4F" }}
              onMouseOver={(e) => ((e.currentTarget as HTMLButtonElement).style.backgroundColor = "#d94a5e")}
              onMouseOut={(e) => ((e.currentTarget as HTMLButtonElement).style.backgroundColor = "#F85C70")}
              data-testid="button-cta"
            >
              Start a Conversation <ArrowRight className="h-4 w-4" />
            </button>
            <Link href="/amp-store">
              <button
                className="amp-focus-ring-on-navy inline-flex items-center gap-2 px-10 h-12 font-sans font-bold text-base rounded transition-colors duration-200"
                style={{ border: "1px solid rgba(255,255,255,0.3)", color: "#FFFFFF", backgroundColor: "transparent" }}
                onMouseOver={(e) => ((e.currentTarget as HTMLButtonElement).style.backgroundColor = "rgba(255,255,255,0.08)")}
                onMouseOut={(e) => ((e.currentTarget as HTMLButtonElement).style.backgroundColor = "transparent")}
                data-testid="button-browse-amp-store"
              >
                Browse ampStore
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
});

export default OurWork;
