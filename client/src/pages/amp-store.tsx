'use client';

import { memo } from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle, ExternalLink, BookOpen, Layers, Target, Users, Zap, Award } from "lucide-react";
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

const AmpStore = memo(function AmpStore({ onOpenConsultation }: AmpStoreProps) {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#FAFAF9" }}>

      {/* HERO */}
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-28" style={{ backgroundColor: "#60266A" }}>
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.14em] mb-6" style={{ color: "rgba(255,255,255,0.6)" }}>
                The Amplified Ecosystem
              </p>
              <h1
                className="font-display text-5xl lg:text-6xl mb-8 leading-tight"
                style={{ color: "#FFFFFF", fontWeight: 400 }}
                data-testid="text-ampstore-title"
              >
                ampStore
              </h1>
              <p className="font-sans text-xl mb-4 leading-relaxed" style={{ color: "rgba(255,255,255,0.85)" }}>
                Practitioner-grade capability resources, curated for regulated and complex industries.
              </p>
              <p className="font-sans text-base leading-relaxed mb-10" style={{ color: "rgba(255,255,255,0.55)" }}>
                Not a training platform. Not an eLearning library. The ampStore is a curated catalogue of
                frameworks, tools, playbooks, and learning resources built directly around the six AMP
                service lines. Everything your teams need to build lasting capability, not just pass a module.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="https://theampstore.co.uk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="amp-focus-ring-on-navy inline-flex items-center gap-2 px-8 h-11 font-sans font-bold text-sm rounded transition-colors duration-200"
                  style={{ backgroundColor: "#F85C70", color: "#181F4F" }}
                  onMouseOver={(e) => { (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "#d94a5e"; }}
                  onMouseOut={(e) => { (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "#F85C70"; }}
                  data-testid="link-ampstore-login"
                >
                  <ExternalLink className="h-4 w-4" />
                  Access ampStore
                </a>
                <button
                  onClick={() => onOpenConsultation("amp-store")}
                  className="amp-focus-ring-on-navy inline-flex items-center gap-2 px-8 h-11 font-sans font-bold text-sm rounded transition-colors duration-200"
                  style={{ border: "1px solid rgba(255,255,255,0.3)", color: "#FFFFFF", backgroundColor: "transparent" }}
                  onMouseOver={(e) => { (e.currentTarget as HTMLButtonElement).style.backgroundColor = "rgba(255,255,255,0.07)"; }}
                  onMouseOut={(e) => { (e.currentTarget as HTMLButtonElement).style.backgroundColor = "transparent"; }}
                >
                  Talk to Us About Access
                </button>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="rounded overflow-hidden" style={{ aspectRatio: "4/3" }}>
                <img
                  src={workspaceImage.src}
                  alt="Practitioners using ampStore resources"
                  className="w-full h-full object-cover"
                  data-testid="img-ampstore-hero"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY AMPSTORE */}
      <section className="py-24 lg:py-32 border-b" style={{ borderColor: "#E5E3EE" }}>
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <p className="font-mono text-xs uppercase tracking-[0.12em] mb-4" style={{ color: "#6B6E81" }}>
            Why ampStore
          </p>
          <h2 className="font-display text-4xl mb-6" style={{ color: "#181F4F", fontWeight: 400 }}>
            Capability that sticks because it is built for the work
          </h2>
          <p className="font-sans text-base max-w-[560px] mb-16 leading-relaxed" style={{ color: "#65677B" }}>
            Generic training does not change how teams work. Resources built around your actual delivery
            context do.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border-l border-t" style={{ borderColor: "#E5E3EE" }}>
            {whyAmpStore.map((item, i) => {
              const Icon = item.icon;
              return (
                <div key={i} className="p-8 border-r border-b" style={{ borderColor: "#E5E3EE" }}>
                  <Icon className="h-5 w-5 mb-5" style={{ color: "#60266A" }} />
                  <h3 className="font-display text-xl mb-3" style={{ color: "#181F4F", fontWeight: 400 }}>
                    {item.title}
                  </h3>
                  <p className="font-sans text-sm leading-relaxed" style={{ color: "#65677B" }}>
                    {item.body}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CATALOGUE */}
      <section className="py-24 lg:py-32" style={{ backgroundColor: "#F2F0F7" }}>
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <p className="font-mono text-xs uppercase tracking-[0.12em] mb-4" style={{ color: "#6B6E81" }}>
            The Catalogue
          </p>
          <h2 className="font-display text-4xl mb-6" style={{ color: "#181F4F", fontWeight: 400 }}>
            Six areas. One joined-up capability system.
          </h2>
          <p className="font-sans text-base max-w-[540px] mb-16 leading-relaxed" style={{ color: "#65677B" }}>
            Every resource maps to a specific AMP service line. Teams build capability in the same
            areas their consultancy engagement is structured around.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 border-l border-t" style={{ borderColor: "#C8C4D8" }}>
            {catalogueAreas.map((area, i) => (
              <div key={i} className="p-8 border-r border-b" style={{ borderColor: "#C8C4D8" }}>
                <div className="flex items-center gap-3 mb-4">
                  <span className="font-mono text-xs uppercase tracking-[0.1em]" style={{ color: "#F85C70" }}>
                    {area.tag}
                  </span>
                  <BookOpen className="h-3.5 w-3.5" style={{ color: "#C8C4D8" }} />
                  <span className="font-sans text-sm font-semibold" style={{ color: "#181F4F" }}>
                    {area.title}
                  </span>
                </div>
                <p className="font-sans text-sm leading-relaxed mb-5" style={{ color: "#65677B" }}>
                  {area.desc}
                </p>
                <ul className="space-y-2">
                  {area.modules.map((mod, j) => (
                    <li key={j} className="flex items-center gap-2">
                      <CheckCircle className="h-3.5 w-3.5 flex-shrink-0" style={{ color: "#60266A" }} />
                      <span className="font-sans text-xs" style={{ color: "#65677B" }}>{mod}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW TO ACCESS */}
      <section className="py-24 lg:py-32 border-t" style={{ borderColor: "#E5E3EE" }}>
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.12em] mb-4" style={{ color: "#6B6E81" }}>
                How to Access
              </p>
              <h2 className="font-display text-4xl mb-6" style={{ color: "#181F4F", fontWeight: 400 }}>
                Three ways to bring ampStore into your organisation
              </h2>

              <div className="space-y-8 mt-10">
                {[
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
                ].map((item, i) => (
                  <div key={i} className="flex gap-6">
                    <p className="font-mono text-3xl flex-shrink-0 leading-none mt-0.5" style={{ color: "#DDD9EA", fontWeight: 400 }}>
                      {item.num}
                    </p>
                    <div>
                      <h3 className="font-sans text-base font-semibold mb-2" style={{ color: "#181F4F" }}>{item.title}</h3>
                      <p className="font-sans text-sm leading-relaxed" style={{ color: "#65677B" }}>{item.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <img
                src={networkImage.src}
                alt="Connected learning and capability building"
                className="w-full rounded mb-8"
                loading="lazy"
              />
              <div
                className="p-10 rounded"
                style={{ backgroundColor: "#181F4F" }}
              >
                <p className="font-mono text-xs uppercase tracking-[0.12em] mb-4" style={{ color: "#F85C70" }}>
                  Access the Store
                </p>
                <p className="font-display text-2xl mb-6" style={{ color: "#FFFFFF", fontWeight: 400 }}>
                  Login or create an account at theampstore.co.uk
                </p>
                <div className="flex flex-wrap gap-4">
                  <a
                    href="https://theampstore.co.uk"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="amp-focus-ring-on-navy inline-flex items-center gap-2 px-8 h-11 font-sans font-bold text-sm rounded transition-colors duration-200"
                    style={{ backgroundColor: "#F85C70", color: "#181F4F" }}
                    onMouseOver={(e) => { (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "#d94a5e"; }}
                    onMouseOut={(e) => { (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "#F85C70"; }}
                    data-testid="button-get-access"
                  >
                    <ExternalLink className="h-4 w-4" />
                    Go to ampStore
                  </a>
                  <button
                    onClick={() => onOpenConsultation("amp-store")}
                    className="amp-focus-ring-on-navy inline-flex items-center gap-2 px-8 h-11 font-sans font-bold text-sm rounded transition-colors duration-200"
                    style={{ border: "1px solid rgba(255,255,255,0.2)", color: "#FFFFFF", backgroundColor: "transparent" }}
                    onMouseOver={(e) => { (e.currentTarget as HTMLButtonElement).style.backgroundColor = "rgba(255,255,255,0.07)"; }}
                    onMouseOut={(e) => { (e.currentTarget as HTMLButtonElement).style.backgroundColor = "transparent"; }}
                    data-testid="button-schedule-demo"
                  >
                    Talk About Org Access
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
});

export default AmpStore;
