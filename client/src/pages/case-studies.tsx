'use client';

import Link from "next/link";
import { memo } from "react";
import { ArrowRight, CheckCircle, Users, Clock, TrendingUp, Award, type LucideIcon } from "lucide-react";
import { caseStudies as caseStudiesFallback, type CaseStudy, type CaseStudyIconKey } from "@/lib/case-studies";

interface CaseStudiesProps {
  onOpenConsultation: (serviceType?: string) => void;
  items?: CaseStudy[];
}

const STAT_ICONS: Record<CaseStudyIconKey, LucideIcon> = {
  users: Users,
  clock: Clock,
  trending: TrendingUp,
  award: Award,
};

function StatIcon({ name, className }: { name: CaseStudyIconKey; className?: string }) {
  const Icon = STAT_ICONS[name];
  return <Icon className={className} />;
}

export default memo(function CaseStudies({ onOpenConsultation, items }: CaseStudiesProps) {
  const caseStudies = items && items.length > 0 ? items : caseStudiesFallback;
  return (
    <div className="min-h-screen font-sans" style={{ backgroundColor: "#ffffff" }}>

      {/* HERO */}
      <section className="py-28 lg:py-36" style={{ backgroundColor: "#181F4F" }}>
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <p className="font-mono text-xs uppercase tracking-[0.15em] mb-6" style={{ color: "#F85C70" }}>
            Case Studies
          </p>
          <h1
            className="font-display text-5xl md:text-6xl text-white mb-8 leading-tight max-w-[720px]"
            style={{ fontWeight: 400 }}
            data-testid="text-ourwork-title"
          >
            Delivered in the field.<br />Measured at board level.
          </h1>
          <p className="font-sans text-lg max-w-[580px] leading-relaxed" style={{ color: "rgba(255,255,255,0.75)" }}>
            Real engagements with named outcomes. Every case study below reflects work that
            was scoped, delivered, and handed over by Amplified practitioners operating inside
            the client organisation.
          </p>
        </div>
      </section>

      {/* CASE STUDIES */}
      <section className="py-24 lg:py-32">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 space-y-0">
          {caseStudies.map((study, i) => (
            <div
              key={study.id}
              className="grid grid-cols-1 lg:grid-cols-5 gap-0 border-b"
              style={{ borderColor: "#E5E3EE" }}
              data-testid={`card-case-study-${study.id}`}
            >
              {/* Left: sector / stats panel */}
              <div
                className="lg:col-span-2 p-10 lg:p-14"
                style={{ backgroundColor: i % 2 === 0 ? "#181F4F" : "#60266A" }}
              >
                <p className="font-mono text-xs uppercase tracking-[0.12em] mb-2" style={{ color: "rgba(255,255,255,0.45)" }}>
                  {study.sector}
                </p>
                <h2
                  className="font-display text-3xl lg:text-4xl text-white mb-3 leading-tight"
                  style={{ fontWeight: 400 }}
                  data-testid={`text-case-study-${study.id}-title`}
                >
                  {study.company}
                </h2>
                <p className="font-mono text-xs uppercase tracking-[0.1em] mb-10" style={{ color: "#F85C70" }}>
                  {study.service}
                </p>

                <div className="space-y-6 pt-6 border-t" style={{ borderColor: "rgba(255,255,255,0.12)" }}>
                  {study.stats.map((stat) => (
                    <div key={stat.label} className="flex items-center gap-4">
                      <div
                        className="w-10 h-10 rounded flex items-center justify-center flex-shrink-0"
                        style={{ backgroundColor: "rgba(255,255,255,0.1)" }}
                      >
                        <StatIcon name={stat.icon} className="h-4 w-4 text-white" />
                      </div>
                      <div>
                        <p className="font-display text-2xl text-white" style={{ fontWeight: 400 }}>{stat.value}</p>
                        <p className="font-sans text-xs" style={{ color: "rgba(255,255,255,0.55)" }}>{stat.label}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right: detail panel */}
              <div className="lg:col-span-3 p-10 lg:p-14">
                <div className="mb-10">
                  <p className="font-mono text-xs uppercase tracking-[0.12em] mb-3" style={{ color: "#6B6E81" }}>
                    The challenge
                  </p>
                  <p className="font-sans text-base leading-relaxed" style={{ color: "#65677B" }}>
                    {study.challenge}
                  </p>
                </div>

                <div className="mb-10">
                  <p className="font-mono text-xs uppercase tracking-[0.12em] mb-3" style={{ color: "#6B6E81" }}>
                    What we did
                  </p>
                  <p className="font-sans text-base leading-relaxed" style={{ color: "#65677B" }}>
                    {study.solution}
                  </p>
                </div>

                <div className="mb-8">
                  <p className="font-mono text-xs uppercase tracking-[0.12em] mb-4" style={{ color: "#6B6E81" }}>
                    Results
                  </p>
                  <ul className="space-y-3">
                    {study.results.map((result) => (
                      <li key={result} className="flex items-start gap-3">
                        <CheckCircle className="h-4 w-4 flex-shrink-0 mt-0.5" style={{ color: "#F85C70" }} />
                        <span className="font-sans text-sm leading-relaxed" style={{ color: "#181F4F" }}>{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div
                  className="p-4 rounded border-l-2"
                  style={{ backgroundColor: "#F2F0F7", borderLeftColor: "#F85C70" }}
                >
                  <p className="font-sans text-sm italic" style={{ color: "#65677B" }}>
                    {study.outcome}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA BAND */}
      <section className="py-24" style={{ backgroundColor: "#181F4F" }}>
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.15em] mb-4" style={{ color: "#F85C70" }}>
                Start a conversation
              </p>
              <h2 className="font-display text-4xl text-white" style={{ fontWeight: 400 }}>
                Ready to discuss your engagement?
              </h2>
            </div>
            <div className="space-y-4">
              <p className="font-sans text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.7)" }}>
                Every engagement starts with a structured discovery conversation. No slide decks,
                no proposals before we understand your situation. Just a straight conversation
                about what you are trying to do and whether we are the right fit.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <button
                  onClick={() => onOpenConsultation()}
                  className="amp-focus-ring-on-navy inline-flex items-center gap-2 px-8 h-11 font-sans font-bold text-sm rounded transition-colors duration-200"
                  style={{ backgroundColor: "#F85C70", color: "#181F4F" }}
                  onMouseOver={(e) => { (e.currentTarget as HTMLButtonElement).style.backgroundColor = "#d94a5e"; }}
                  onMouseOut={(e) => { (e.currentTarget as HTMLButtonElement).style.backgroundColor = "#F85C70"; }}
                  data-testid="button-case-studies-consultation"
                >
                  Book a Discovery Call <ArrowRight className="h-4 w-4" />
                </button>
                <Link
                  href="/our-work"
                  className="amp-focus-ring-on-navy inline-flex items-center gap-2 px-8 h-11 font-sans font-semibold text-sm rounded border transition-colors duration-200"
                  style={{ border: "1px solid rgba(255,255,255,0.25)", color: "rgba(255,255,255,0.85)", backgroundColor: "transparent" }}
                  data-testid="button-case-studies-our-work"
                  onMouseOver={(e) => { (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(255,255,255,0.6)"; }}
                  onMouseOut={(e) => { (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(255,255,255,0.25)"; }}
                >
                  See all our work
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
});
