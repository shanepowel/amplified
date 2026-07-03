'use client';

import type { Engagement } from "@/lib/engagements";
import { engagements as fallbackEngagements } from "@/lib/engagements";
import Link from "next/link";
import { memo } from "react";
import { ArrowRight, Clock, Tag } from "lucide-react";

interface Props {
  onOpenConsultation: (serviceType?: string) => void;
  engagements?: Engagement[];
}

const accentBgs = ["#181F4F", "#60266A", "#181F4F"];

export default memo(function Engagements({ onOpenConsultation, engagements: engagementsProp }: Props) {
  const engagements = engagementsProp ?? fallbackEngagements;
  return (
    <div className="min-h-screen font-sans" style={{ backgroundColor: "#FFFFFF" }}>
      {/* Breadcrumb */}
      <div className="py-5" style={{ backgroundColor: "#F2F0F7" }}>
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="font-mono text-xs uppercase tracking-[0.1em]">
            <ol className="flex items-center gap-2" style={{ color: "#6B6E81" }}>
              <li><Link href="/" className="hover:underline">Home</Link></li>
              <li aria-hidden="true">/</li>
              <li style={{ color: "#181F4F" }}>Engagements</li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="py-28 lg:py-36" style={{ backgroundColor: "#181F4F" }}>
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <p className="font-mono text-xs uppercase tracking-[0.15em] mb-6" style={{ color: "#F85C70" }}>
            Engagements
          </p>
          <h1
            className="font-display text-5xl md:text-6xl lg:text-7xl text-white mb-8 leading-[1.05] max-w-[920px]"
            style={{ fontWeight: 400 }}
          >
            Named work. Scoped to outcome, and delivered to a deadline.
          </h1>
          <p className="font-sans text-lg max-w-[680px] leading-relaxed" style={{ color: "rgba(255,255,255,0.75)" }}>
            Three productised engagements for the leaders accountable for delivery in regulated industries.
            Each one has a fixed scope, a fixed timeline, and a fixed list of artefacts you take with you
            at the end. We do not run open-ended retainers.
          </p>
        </div>
      </section>

      {/* Engagement cards */}
      <section className="py-24 lg:py-28">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-0 border-t" style={{ borderColor: "#E5E3EE" }}>
            {engagements.map((e, i) => (
              <article
                key={e.slug}
                className="grid grid-cols-1 lg:grid-cols-12 gap-0 border-b"
                style={{ borderColor: "#E5E3EE" }}
                data-testid={`card-engagement-${e.slug}`}
              >
                {/* Left: name panel */}
                <div
                  className="lg:col-span-4 p-10 lg:p-12 flex flex-col justify-between"
                  style={{ backgroundColor: accentBgs[i % accentBgs.length] }}
                >
                  <div>
                    <p className="font-mono text-xs uppercase tracking-[0.12em] mb-4" style={{ color: "#F85C70" }}>
                      0{i + 1} {e.forBuyer}
                    </p>
                    <h2
                      className="font-display text-4xl lg:text-5xl text-white mb-4 leading-[1.05]"
                      style={{ fontWeight: 400 }}
                    >
                      {e.name}
                    </h2>
                    <p className="font-sans text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.7)" }}>
                      {e.tagline}
                    </p>
                  </div>

                  <div className="mt-10 pt-6 border-t flex flex-wrap gap-x-8 gap-y-4" style={{ borderColor: "rgba(255,255,255,0.15)" }}>
                    <div>
                      <div className="flex items-center gap-1.5 mb-1">
                        <Clock className="h-3 w-3" style={{ color: "#F85C70" }} />
                        <p className="font-mono text-xs uppercase tracking-[0.08em]" style={{ color: "rgba(255,255,255,0.5)" }}>Duration</p>
                      </div>
                      <p className="font-display text-lg text-white" style={{ fontWeight: 400 }}>{e.duration}</p>
                    </div>
                    <div className="flex-1 min-w-[200px]">
                      <div className="flex items-center gap-1.5 mb-1">
                        <Tag className="h-3 w-3" style={{ color: "#F85C70" }} />
                        <p className="font-mono text-xs uppercase tracking-[0.08em]" style={{ color: "rgba(255,255,255,0.5)" }}>Investment</p>
                      </div>
                      <p className="font-sans text-xs leading-snug text-white" style={{ fontWeight: 400 }}>{e.price}</p>
                    </div>
                  </div>
                </div>

                {/* Right: detail */}
                <div className="lg:col-span-8 p-10 lg:p-12 flex flex-col">
                  <div className="mb-6">
                    <p className="font-mono text-xs uppercase tracking-[0.1em] mb-3" style={{ color: "#6B6E81" }}>
                      Who it is for
                    </p>
                    <p className="font-sans text-base leading-relaxed" style={{ color: "#181F4F" }}>
                      {e.buyerSentence}
                    </p>
                  </div>

                  <div className="mb-8">
                    <p className="font-mono text-xs uppercase tracking-[0.1em] mb-3" style={{ color: "#6B6E81" }}>
                      The problem we solve
                    </p>
                    <p className="font-sans text-base leading-relaxed" style={{ color: "#65677B" }}>
                      {e.problem[0]}
                    </p>
                  </div>

                  <div className="mb-8">
                    <p className="font-mono text-xs uppercase tracking-[0.1em] mb-3" style={{ color: "#6B6E81" }}>
                      What you have at the end
                    </p>
                    <p className="font-sans text-base leading-relaxed font-medium" style={{ color: "#181F4F" }}>
                      {e.outcome}
                    </p>
                  </div>

                  <div className="mt-auto pt-6 border-t flex items-center gap-4 flex-wrap" style={{ borderColor: "#E5E3EE" }}>
                    <Link href={`/engagements/${e.slug}`}>
                      <button
                        className="amp-focus-ring-on-light inline-flex items-center gap-2 px-6 h-11 font-sans font-bold text-sm rounded transition-colors duration-200"
                        style={{ backgroundColor: "#F85C70", color: "#181F4F" }}
                        onMouseOver={(ev) => { (ev.currentTarget as HTMLButtonElement).style.backgroundColor = "#d94a5e"; }}
                        onMouseOut={(ev) => { (ev.currentTarget as HTMLButtonElement).style.backgroundColor = "#F85C70"; }}
                        data-testid={`button-engagement-detail-${e.slug}`}
                      >
                        See full engagement <ArrowRight className="h-4 w-4" />
                      </button>
                    </Link>
                    <button
                      onClick={() => onOpenConsultation(e.name)}
                      className="amp-focus-ring-on-light rounded font-sans text-sm font-semibold underline-offset-4 hover:underline"
                      style={{ color: "#181F4F" }}
                      data-testid={`button-engagement-discovery-${e.slug}`}
                    >
                      Or book a 30-minute discovery call
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Tail CTA */}
      <section className="py-24" style={{ backgroundColor: "#181F4F" }}>
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="font-mono text-xs uppercase tracking-[0.15em] mb-6" style={{ color: "#F85C70" }}>
            Not sure which engagement fits?
          </p>
          <h2 className="font-display text-3xl md:text-4xl text-white mb-8 leading-tight max-w-[760px] mx-auto" style={{ fontWeight: 400 }}>
            Bring the situation. We will tell you which engagement is right, or whether you need something else entirely.
          </h2>
          <button
            onClick={() => onOpenConsultation()}
            className="amp-focus-ring-on-navy inline-flex items-center gap-2 px-10 h-12 font-sans font-bold text-base rounded transition-colors duration-200"
            style={{ backgroundColor: "#F85C70", color: "#181F4F" }}
            onMouseOver={(ev) => { (ev.currentTarget as HTMLButtonElement).style.backgroundColor = "#d94a5e"; }}
            onMouseOut={(ev) => { (ev.currentTarget as HTMLButtonElement).style.backgroundColor = "#F85C70"; }}
            data-testid="button-engagements-cta"
          >
            Book a Discovery Call <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </section>
    </div>
  );
});
