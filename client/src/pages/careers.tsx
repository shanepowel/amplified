'use client';

import { memo } from "react";
import Link from "next/link";
import { ExternalLink, ArrowRight, CheckCircle, Users, Zap, BookOpen } from "lucide-react";
import peopleWorkingImage from "@assets/68_1760470836673.webp";
import modernWorkImage from "@assets/35_1760470608291.webp";

interface CareersProps {
  onOpenConsultation: (serviceType?: string) => void;
}

const values = [
  {
    word: "Rigorous",
    body: "We hold ourselves and our clients to high standards because shortcuts compound into bigger problems.",
  },
  {
    word: "Trusting",
    body: "We build cultures where people are empowered to make decisions, not paralysed by approval chains.",
  },
  {
    word: "People-Centred",
    body: "Organisations succeed when their people are truly at the centre of strategy, not an afterthought.",
  },
  {
    word: "Pragmatic",
    body: "We deliver excellence in what matters most and resist the perfectionism that prevents progress.",
  },
  {
    word: "Curious",
    body: "We stay ahead of change by learning constantly and challenging our own assumptions.",
  },
  {
    word: "Tech Excellence",
    body: "We deeply understand AI, data, and security, using technology responsibly as a smart solution, not a new problem.",
  },
];

const traits = [
  "Combine expertise with intellectual humility. You are the expert and the student.",
  "Think systemically. You see how decisions ripple through organisations.",
  "Work with ambiguity. You are energised by 'we need to figure this out'.",
  "Have intellectual integrity. You will challenge clients respectfully.",
  "Care about real outcomes, not just impressive-looking analysis.",
  "Bring diverse perspectives. Different backgrounds make better thinking.",
];

const successItems = [
  "You are doing work that genuinely moves the needle, not just generating invoices",
  "You are learning constantly with people who push your thinking",
  "You have autonomy and trust, not bureaucracy and oversight",
  "You are compensated fairly with clarity on progression",
  "You can build a sustainable career here, not a sprint to burnout",
];

const talentHRJobsUrl = "https://jobs.talenthr.io/amplified/";

const Careers = memo(function Careers({ onOpenConsultation }: CareersProps) {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#FAFAF9" }}>

      {/* HERO */}
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-28" style={{ backgroundColor: "#181F4F" }}>
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.14em] mb-6" style={{ color: "#F85C70" }}>
                Join the Partnership
              </p>
              <h1
                className="font-display text-5xl lg:text-6xl mb-8 leading-tight"
                style={{ color: "#FFFFFF", fontWeight: 400 }}
                data-testid="text-careers-title"
              >
                This is what<br />we are building.
              </h1>
              <p className="font-sans text-lg leading-relaxed mb-4" style={{ color: "rgba(255,255,255,0.65)" }}>
                A management consultancy that works across infrastructure, energy, financial services,
                public sector, and technology organisations. Specialists in AI governance, structured
                delivery, coaching, tech build, and capability development.
              </p>
              <p className="font-sans text-base leading-relaxed mb-10 italic" style={{ color: "rgba(255,255,255,0.45)" }}>
                If it resonates, let's talk.
              </p>
              <div className="flex flex-wrap gap-4">
                <button
                  onClick={() => window.open(talentHRJobsUrl, "_blank")}
                  className="amp-focus-ring-on-navy inline-flex items-center gap-2 px-8 h-11 font-sans font-bold text-sm rounded transition-colors duration-200"
                  style={{ backgroundColor: "#F85C70", color: "#181F4F" }}
                  onMouseOver={(e) => { (e.currentTarget as HTMLButtonElement).style.backgroundColor = "#d94a5e"; }}
                  onMouseOut={(e) => { (e.currentTarget as HTMLButtonElement).style.backgroundColor = "#F85C70"; }}
                  data-testid="button-view-roles-hero"
                >
                  <ExternalLink className="h-4 w-4" />
                  View Open Roles
                </button>
                <button
                  onClick={() => onOpenConsultation("careers")}
                  className="amp-focus-ring-on-navy inline-flex items-center gap-2 px-8 h-11 font-sans font-bold text-sm rounded transition-colors duration-200"
                  style={{ border: "1px solid rgba(255,255,255,0.25)", color: "#FFFFFF", backgroundColor: "transparent" }}
                  onMouseOver={(e) => { (e.currentTarget as HTMLButtonElement).style.backgroundColor = "rgba(255,255,255,0.07)"; }}
                  onMouseOut={(e) => { (e.currentTarget as HTMLButtonElement).style.backgroundColor = "transparent"; }}
                  data-testid="button-careers-consultation"
                >
                  Start a Conversation
                </button>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="rounded overflow-hidden" style={{ aspectRatio: "4/3" }}>
                <img
                  src={peopleWorkingImage.src}
                  alt="Amplified team members at work"
                  className="w-full h-full object-cover"
                  data-testid="img-careers-hero"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT WE ARE BUILDING */}
      <section className="py-24 lg:py-32 border-b" style={{ borderColor: "#E5E3EE" }}>
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.12em] mb-4" style={{ color: "#6B6E81" }}>
                What We Are Building
              </p>
              <h2 className="font-display text-4xl mb-6" style={{ color: "#181F4F", fontWeight: 400 }}>
                Every walk of life.<br />One standard of rigour.
              </h2>
              <p className="font-sans text-base leading-relaxed mb-6" style={{ color: "#65677B" }}>
                We are not a one-size-fits-all consultancy, and we do not hire one-size-fits-all people.
                We bring together practitioners from every sector, every background, and every career path.
                Former civil servants, infrastructure programme directors, startup founders, technical architects,
                coaches, and organisational designers. What matters is whether your experience or your ambitions
                match the work we do, not where you started.
              </p>
              <p className="font-sans text-base leading-relaxed mb-6" style={{ color: "#65677B" }}>
                We work across infrastructure and construction, energy and utilities, financial services,
                public sector, and technology and private sector organisations. Rigour is not optional in
                any of them.
              </p>
              <p className="font-sans text-base leading-relaxed italic" style={{ color: "#65677B" }}>
                We measure our impact not in billable hours, but in sustained behaviour change and
                organisational capability that outlasts our involvement.
              </p>
            </div>
            <div>
              <img
                src={modernWorkImage.src}
                alt="Thoughtful strategy and delivery"
                className="w-full rounded"
                loading="lazy"
              />
              <div className="mt-8 grid grid-cols-2 gap-0 border-l border-t" style={{ borderColor: "#DDD9EA" }}>
                {[
                  { icon: Users, label: "AmplifiedTeams", desc: "Stable Teams and Ops as a Service" },
                  { icon: BookOpen, label: "ampStore", desc: "Curated learning and capability programmes" },
                  { icon: Zap, label: "Six AMP Lines", desc: "Governance, delivery, coaching, build" },
                  { icon: CheckCircle, label: "Five Sectors", desc: "Infrastructure, energy, finance, public, private" },
                ].map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <div key={i} className="p-5 border-r border-b" style={{ borderColor: "#DDD9EA" }}>
                      <Icon className="h-4 w-4 mb-3" style={{ color: "#F85C70" }} />
                      <p className="font-sans text-sm font-semibold mb-1" style={{ color: "#181F4F" }}>{item.label}</p>
                      <p className="font-sans text-xs leading-relaxed" style={{ color: "#65677B" }}>{item.desc}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OUR VALUES */}
      <section className="py-24 lg:py-32" style={{ backgroundColor: "#F2F0F7" }}>
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <p className="font-mono text-xs uppercase tracking-[0.12em] mb-4" style={{ color: "#6B6E81" }}>
            Our Values
          </p>
          <h2 className="font-display text-4xl mb-6" style={{ color: "#181F4F", fontWeight: 400 }}>
            These are operational, not aspirational
          </h2>
          <p className="font-sans text-base max-w-[560px] mb-16 leading-relaxed" style={{ color: "#65677B" }}>
            They shape how we hire, how we work with clients, and how we hold ourselves accountable.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border-l border-t" style={{ borderColor: "#C8C4D8" }}>
            {values.map((v, i) => (
              <div
                key={i}
                className="p-8 border-r border-b"
                style={{ borderColor: "#C8C4D8" }}
                data-testid={`card-value-${v.word.toLowerCase().replace(/\s+/g, "-")}`}
              >
                <h3
                  className="font-display text-2xl mb-4"
                  style={{ color: "#181F4F", fontWeight: 400 }}
                  data-testid={`text-value-title-${v.word.toLowerCase().replace(/\s+/g, "-")}`}
                >
                  {v.word}
                </h3>
                <p
                  className="font-sans text-sm leading-relaxed"
                  style={{ color: "#65677B" }}
                  data-testid={`text-value-description-${v.word.toLowerCase().replace(/\s+/g, "-")}`}
                >
                  {v.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHO WE ARE LOOKING FOR + WHAT SUCCESS LOOKS LIKE */}
      <section className="py-24 lg:py-32 border-t" style={{ borderColor: "#E5E3EE" }}>
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.12em] mb-4" style={{ color: "#6B6E81" }}>
                The Fit
              </p>
              <h2 className="font-display text-3xl mb-8" style={{ color: "#181F4F", fontWeight: 400 }}>
                Who we are<br />looking for
              </h2>
              <ul className="space-y-5">
                {traits.map((trait, i) => (
                  <li key={i} className="flex items-start gap-4" data-testid={`item-trait-${i}`}>
                    <CheckCircle className="h-5 w-5 flex-shrink-0 mt-0.5" style={{ color: "#F85C70" }} />
                    <p className="font-sans text-base leading-relaxed" style={{ color: "#65677B" }}>{trait}</p>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="font-mono text-xs uppercase tracking-[0.12em] mb-4" style={{ color: "#6B6E81" }}>
                Success
              </p>
              <h2 className="font-display text-3xl mb-8" style={{ color: "#181F4F", fontWeight: 400 }}>
                What success<br />looks like here
              </h2>
              <ul className="space-y-5">
                {successItems.map((item, i) => (
                  <li key={i} className="flex items-start gap-4" data-testid={`card-success-${i}`}>
                    <CheckCircle className="h-5 w-5 flex-shrink-0 mt-0.5" style={{ color: "#60266A" }} />
                    <p className="font-sans text-base leading-relaxed" style={{ color: "#65677B" }}>{item}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* THE AMPLIFIED ECOSYSTEM - CAREER PATHS */}
      <section className="py-24 lg:py-32 border-t" style={{ backgroundColor: "#F2F0F7", borderColor: "#DDD9EA" }}>
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <p className="font-mono text-xs uppercase tracking-[0.12em] mb-4" style={{ color: "#6B6E81" }}>
            Where You Could Work
          </p>
          <h2 className="font-display text-4xl mb-6" style={{ color: "#181F4F", fontWeight: 400 }}>
            The Amplified Ecosystem
          </h2>
          <p className="font-sans text-base max-w-[540px] mb-14 leading-relaxed" style={{ color: "#65677B" }}>
            Roles span our six AMP consulting service lines, our Stable Teams capability through AmplifiedTeams,
            and learning design through the ampStore.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-l border-t" style={{ borderColor: "#C8C4D8" }}>
            {[
              {
                tag: "Consulting",
                title: "AMP 01 to AMP 06",
                body: "Governance, implementation, structured delivery, capability building, coaching, and tech build across five sectors.",
                cta: "See the services",
                href: "/how-we-work",
              },
              {
                tag: "Stable Teams",
                title: "AmplifiedTeams",
                body: "Roles delivering the Stable Teams framework inside client organisations. Helping teams rebaseline and achieve sustained high performance.",
                cta: "Visit AmplifiedTeams",
                href: "https://amplifiedteams.co.uk",
                external: true,
              },
              {
                tag: "Learning",
                title: "ampStore",
                body: "Curriculum design, learning experience development, and practitioner coaching for regulated-industry capability programmes.",
                cta: "Explore ampStore",
                href: "/amp-store",
              },
            ].map((col, i) => (
              <div key={i} className="p-8 border-r border-b flex flex-col" style={{ borderColor: "#C8C4D8" }}>
                <p className="font-mono text-xs uppercase tracking-[0.12em] mb-4" style={{ color: "#F85C70" }}>
                  {col.tag}
                </p>
                <h3 className="font-display text-xl mb-4" style={{ color: "#181F4F", fontWeight: 400 }}>{col.title}</h3>
                <p className="font-sans text-sm leading-relaxed mb-6 flex-1" style={{ color: "#65677B" }}>{col.body}</p>
                {col.external ? (
                  <a
                    href={col.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="amp-focus-ring-on-light inline-flex items-center gap-2 text-sm font-semibold hover:gap-3 transition-all duration-200"
                    style={{ color: "#F85C70" }}
                  >
                    {col.cta} <ArrowRight className="h-3 w-3" />
                  </a>
                ) : (
                  <Link
                    href={col.href}
                    className="amp-focus-ring-on-light inline-flex items-center gap-2 text-sm font-semibold hover:gap-3 transition-all duration-200 cursor-pointer"
                    style={{ color: "#F85C70" }}
                  >
                    {col.cta} <ArrowRight className="h-3 w-3" />
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OPEN ROLES */}
      <section className="py-24 lg:py-32 border-t" style={{ borderColor: "#E5E3EE" }}>
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <p className="font-mono text-xs uppercase tracking-[0.12em] mb-4" style={{ color: "#6B6E81" }}>
            Current Opportunities
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="font-display text-4xl mb-6" style={{ color: "#181F4F", fontWeight: 400 }}>
                See what is open
              </h2>
              <p className="font-sans text-base leading-relaxed mb-8" style={{ color: "#65677B" }}>
                We are always looking for exceptional people who share our values and want to do work that matters.
                Browse current openings or reach out directly if nothing fits, we keep a watch list for the right people.
              </p>
              <div className="flex flex-wrap gap-4">
                <button
                  onClick={() => window.open(talentHRJobsUrl, "_blank")}
                  className="amp-focus-ring-on-light inline-flex items-center gap-2 px-8 h-11 font-sans font-bold text-sm rounded transition-colors duration-200"
                  style={{ backgroundColor: "#181F4F", color: "#FFFFFF" }}
                  onMouseOver={(e) => { (e.currentTarget as HTMLButtonElement).style.backgroundColor = "#0d1230"; }}
                  onMouseOut={(e) => { (e.currentTarget as HTMLButtonElement).style.backgroundColor = "#181F4F"; }}
                  data-testid="button-view-jobs"
                >
                  <ExternalLink className="h-4 w-4" />
                  View Open Roles
                </button>
                <button
                  onClick={() => onOpenConsultation("careers")}
                  className="amp-focus-ring-on-light inline-flex items-center gap-2 px-8 h-11 font-sans font-bold text-sm rounded transition-colors duration-200"
                  style={{ border: "1px solid #181F4F", color: "#181F4F", backgroundColor: "transparent" }}
                  onMouseOver={(e) => { (e.currentTarget as HTMLButtonElement).style.backgroundColor = "rgba(24,31,79,0.04)"; }}
                  onMouseOut={(e) => { (e.currentTarget as HTMLButtonElement).style.backgroundColor = "transparent"; }}
                  data-testid="button-start-conversation"
                >
                  Start a Conversation
                </button>
              </div>
            </div>
            <div
              className="p-10 rounded"
              style={{ backgroundColor: "#181F4F" }}
            >
              <p className="font-mono text-xs uppercase tracking-[0.12em] mb-6" style={{ color: "#F85C70" }}>
                We practice what we preach
              </p>
              <p className="font-display text-2xl mb-6" style={{ color: "#FFFFFF", fontWeight: 400 }}>
                We are honest about how hard change is. We build capability so clients do not need us forever. We walk away from work that does not fit our values.
              </p>
              <p className="font-sans text-base italic" style={{ color: "rgba(255,255,255,0.55)" }}>
                If this resonates with you, let's talk.
              </p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
});

export default Careers;
