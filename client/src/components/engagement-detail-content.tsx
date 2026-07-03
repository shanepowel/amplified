'use client';

import Link from "next/link";
import { ArrowRight, CheckCircle, Clock, Tag, XCircle, Users, Check, CalendarDays } from "lucide-react";
import type { Engagement } from "@/lib/engagements";
import AskAmplified from "@/components/ask-amplified";
import EngagementPlaybookDownload from "@/components/engagement-playbook-download";

interface Props {
  engagement: Engagement;
  onOpenConsultation: (serviceType?: string) => void;
}

export default function EngagementDetailContent({ engagement, onOpenConsultation }: Props) {
  const e = engagement;

  return (
    <div className="min-h-screen font-sans" style={{ backgroundColor: "#ffffff" }}>
      {/* Breadcrumb */}
      <div className="py-5" style={{ backgroundColor: "#F2F0F7" }}>
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="font-mono text-xs uppercase tracking-[0.1em]">
            <ol className="flex items-center gap-2" style={{ color: "#5A5D72" }}>
              <li><Link href="/" className="hover:underline">Home</Link></li>
              <li aria-hidden="true">/</li>
              <li><Link href="/engagements" className="hover:underline">Engagements</Link></li>
              <li aria-hidden="true">/</li>
              <li style={{ color: "#181F4F" }}>{e.name}</li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="py-24 lg:py-32" style={{ backgroundColor: "#181F4F" }}>
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <p className="font-mono text-xs uppercase tracking-[0.15em] mb-6" style={{ color: "#F85C70" }}>
            Engagement {e.forBuyer}
          </p>
          <h1
            className="font-display text-5xl md:text-6xl lg:text-7xl text-white mb-6 leading-[1.05]"
            style={{ fontWeight: 400 }}
          >
            {e.name}
          </h1>
          <p
            className="font-display text-2xl md:text-3xl mb-12 max-w-[760px] leading-tight"
            style={{ color: "#F85C70", fontWeight: 400 }}
          >
            {e.tagline}.
          </p>

          <p className="font-sans text-lg max-w-[680px] leading-relaxed mb-16" style={{ color: "rgba(255,255,255,0.8)" }}>
            {e.buyerSentence}
          </p>

          {/* Key facts */}
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-0 border-l border-t" style={{ borderColor: "rgba(255,255,255,0.12)" }}>
            <div className="p-6 border-r border-b" style={{ borderColor: "rgba(255,255,255,0.12)" }}>
              <div className="flex items-center gap-2 mb-2">
                <Clock className="h-3.5 w-3.5" style={{ color: "#F85C70" }} />
                <p className="font-mono text-xs uppercase tracking-[0.1em]" style={{ color: "rgba(255,255,255,0.5)" }}>Duration</p>
              </div>
              <p className="font-display text-2xl text-white" style={{ fontWeight: 400 }}>{e.duration}</p>
            </div>
            <div className="p-6 border-r border-b" style={{ borderColor: "rgba(255,255,255,0.12)" }}>
              <div className="flex items-center gap-2 mb-2">
                <Tag className="h-3.5 w-3.5" style={{ color: "#F85C70" }} />
                <p className="font-mono text-xs uppercase tracking-[0.1em]" style={{ color: "rgba(255,255,255,0.5)" }}>Investment</p>
              </div>
              <p className="font-sans text-sm leading-snug text-white" style={{ fontWeight: 400 }}>{e.price}</p>
            </div>
            <div className="p-6 border-r border-b col-span-2 lg:col-span-1" style={{ borderColor: "rgba(255,255,255,0.12)" }}>
              <div className="flex items-center gap-2 mb-2">
                <Users className="h-3.5 w-3.5" style={{ color: "#F85C70" }} />
                <p className="font-mono text-xs uppercase tracking-[0.1em]" style={{ color: "rgba(255,255,255,0.5)" }}>Built for</p>
              </div>
              <p className="font-display text-xl text-white capitalize" style={{ fontWeight: 400 }}>
                {e.forBuyer.replace("for ", "")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Is this you? qualifier */}
      <section className="py-20 lg:py-24" style={{ backgroundColor: "#F2F0F7" }}>
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-4">
              <p className="font-mono text-xs uppercase tracking-[0.15em] mb-4" style={{ color: "#F85C70" }}>
                Is this you?
              </p>
              <h2 className="font-display text-3xl md:text-4xl leading-tight mb-4" style={{ color: "#181F4F", fontWeight: 400 }}>
                Three quick checks before you read on.
              </h2>
              <p className="font-sans text-base leading-relaxed" style={{ color: "#65677B" }}>
                If two or three of these describe your situation today, {e.name} is likely the right
                engagement to scope. If none of them do, talk to us anyway and we will point you to
                a better fit.
              </p>
            </div>
            <div className="lg:col-span-7 lg:col-start-6">
              <ul className="space-y-3" data-testid={`list-engagement-qualifiers-${e.slug}`}>
                {e.qualifiers.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-4 p-5 rounded border"
                    style={{ backgroundColor: "#FFFFFF", borderColor: "#E5E3EE" }}
                  >
                    <span
                      className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center mt-0.5"
                      style={{ backgroundColor: "#181F4F" }}
                    >
                      <Check className="h-4 w-4" style={{ color: "#F85C70" }} aria-hidden="true" />
                    </span>
                    <span className="font-sans text-base leading-relaxed" style={{ color: "#181F4F" }}>
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Problem we solve */}
      <section className="py-24 lg:py-28" style={{ backgroundColor: "#FFFFFF" }}>
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4">
              <p className="font-mono text-xs uppercase tracking-[0.15em] mb-4" style={{ color: "#F85C70" }}>
                01 · The problem we solve
              </p>
              <h2 className="font-display text-3xl md:text-4xl leading-tight" style={{ color: "#181F4F", fontWeight: 400 }}>
                Why this engagement exists.
              </h2>
            </div>
            <div className="lg:col-span-7 lg:col-start-6 space-y-6">
              {e.problem.map((para, i) => (
                <p key={i} className="font-sans text-lg leading-relaxed" style={{ color: "#65677B" }}>
                  {para}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What's included */}
      <section className="py-24 lg:py-28" style={{ backgroundColor: "#F2F0F7" }}>
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4">
              <p className="font-mono text-xs uppercase tracking-[0.15em] mb-4" style={{ color: "#F85C70" }}>
                02 · What is included
              </p>
              <h2 className="font-display text-3xl md:text-4xl leading-tight mb-6" style={{ color: "#181F4F", fontWeight: 400 }}>
                Deliverables, by name.
              </h2>
              <p className="font-sans text-base leading-relaxed" style={{ color: "#65677B" }}>
                Every engagement is scoped to a fixed list of artefacts and decisions. Nothing implied,
                nothing left until the closeout meeting.
              </p>
            </div>
            <div className="lg:col-span-7 lg:col-start-6">
              <ol className="space-y-5">
                {e.included.map((item, i) => (
                  <li key={i} className="flex items-start gap-5 pb-5 border-b" style={{ borderColor: "#E5E3EE" }}>
                    <span
                      className="font-mono text-sm font-bold flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: "#181F4F", color: "#F85C70" }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="font-sans text-base leading-relaxed pt-0.5" style={{ color: "#181F4F" }}>
                      {item}
                    </span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* How the weeks unfold (timeline) */}
      <section className="py-24 lg:py-28" style={{ backgroundColor: "#181F4F" }}>
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-[820px] mb-14">
            <p className="font-mono text-xs uppercase tracking-[0.15em] mb-4" style={{ color: "#F85C70" }}>
              How the weeks unfold
            </p>
            <h2 className="font-display text-3xl md:text-4xl leading-tight mb-6 text-white" style={{ fontWeight: 400 }}>
              {e.duration}, paced like this.
            </h2>
            <p className="font-sans text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.65)" }}>
              No open-ended retainer. The work is sequenced so you have visibility of what is being
              produced each week, and named handover points along the way.
            </p>
          </div>

          <ol
            className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border-l border-t"
            style={{ borderColor: "rgba(255,255,255,0.12)" }}
            data-testid={`list-engagement-timeline-${e.slug}`}
          >
            {e.timeline.map((step, i) => (
              <li
                key={i}
                className="p-7 lg:p-8 border-r border-b flex flex-col"
                style={{ borderColor: "rgba(255,255,255,0.12)" }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <span
                    className="font-mono text-xs flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: "rgba(248,92,112,0.15)", color: "#F85C70" }}
                    aria-hidden="true"
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="font-mono text-xs uppercase tracking-[0.12em]" style={{ color: "rgba(255,255,255,0.55)" }}>
                    {step.label}
                  </p>
                </div>
                <h3 className="font-display text-xl text-white mb-3 leading-snug" style={{ fontWeight: 400 }}>
                  {step.focus}
                </h3>
                <p className="font-sans text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.7)" }}>
                  {step.detail}
                </p>
              </li>
            ))}
          </ol>

          <div className="mt-10 flex items-center gap-3">
            <CalendarDays className="h-4 w-4" style={{ color: "#F85C70" }} aria-hidden="true" />
            <p className="font-sans text-sm" style={{ color: "rgba(255,255,255,0.6)" }}>
              Start date is agreed during the discovery call and held in the diary before contract sign-off.
            </p>
          </div>
        </div>
      </section>

      {/* What you have at the end */}
      <section className="py-24 lg:py-28" style={{ backgroundColor: "#FFFFFF" }}>
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4">
              <p className="font-mono text-xs uppercase tracking-[0.15em] mb-4" style={{ color: "#F85C70" }}>
                03 · What you have at the end
              </p>
              <h2 className="font-display text-3xl md:text-4xl leading-tight" style={{ color: "#181F4F", fontWeight: 400 }}>
                The handover, in one paragraph.
              </h2>
            </div>
            <div className="lg:col-span-7 lg:col-start-6">
              <div
                className="p-8 lg:p-10 border-l-4"
                style={{ backgroundColor: "#F2F0F7", borderColor: "#F85C70" }}
              >
                <CheckCircle className="h-6 w-6 mb-5" style={{ color: "#F85C70" }} />
                <p className="font-display text-xl lg:text-2xl leading-relaxed" style={{ color: "#181F4F", fontWeight: 400 }}>
                  {e.outcome}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case study reference */}
      <section className="py-24 lg:py-28" style={{ backgroundColor: "#181F4F" }}>
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <p className="font-mono text-xs uppercase tracking-[0.15em] mb-4" style={{ color: "#F85C70" }}>
            04 · Case study
          </p>
          <h2 className="font-display text-3xl md:text-4xl text-white mb-12 leading-tight" style={{ fontWeight: 400 }}>
            Where this engagement has been delivered.
          </h2>

          <Link href={`/case-studies#${e.caseStudyId}`}>
            <div
              className="p-10 lg:p-12 border cursor-pointer transition-colors duration-200 hover:bg-white/5"
              style={{ borderColor: "rgba(255,255,255,0.12)" }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-center">
                <div>
                  <p className="font-mono text-xs uppercase tracking-[0.1em] mb-2" style={{ color: "rgba(255,255,255,0.5)" }}>
                    {e.caseStudySector}
                  </p>
                  <h3 className="font-display text-2xl text-white" style={{ fontWeight: 400 }}>
                    {e.caseStudyName}
                  </h3>
                </div>
                <div className="lg:col-span-2 flex items-center gap-6">
                  <p className="font-sans text-base leading-relaxed flex-1" style={{ color: "rgba(255,255,255,0.8)" }}>
                    {e.caseStudyOutcome}
                  </p>
                  <ArrowRight className="h-5 w-5 flex-shrink-0" style={{ color: "#F85C70" }} />
                </div>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Not for you if */}
      <section className="py-24 lg:py-28" style={{ backgroundColor: "#FFFFFF" }}>
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4">
              <p className="font-mono text-xs uppercase tracking-[0.15em] mb-4" style={{ color: "#F85C70" }}>
                05 · Not for you if
              </p>
              <h2 className="font-display text-3xl md:text-4xl leading-tight mb-6" style={{ color: "#181F4F", fontWeight: 400 }}>
                We work better when we are honest about fit.
              </h2>
              <p className="font-sans text-base leading-relaxed" style={{ color: "#65677B" }}>
                The fastest way to waste a client's money is to take on work we are not built for.
                If any of the following describes you, this engagement is not the right one. Talk to
                us anyway, we will point you to the right thing.
              </p>
            </div>
            <div className="lg:col-span-7 lg:col-start-6">
              <ul className="space-y-4">
                {e.notForYouIf.map((item, i) => (
                  <li key={i} className="flex items-start gap-4 p-5 rounded" style={{ backgroundColor: "#F2F0F7" }}>
                    <XCircle className="h-5 w-5 flex-shrink-0 mt-0.5" style={{ color: "#65677B" }} />
                    <span className="font-sans text-base leading-relaxed" style={{ color: "#181F4F" }}>
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24" style={{ backgroundColor: "#60266A" }}>
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="font-mono text-xs uppercase tracking-[0.15em] mb-6" style={{ color: "#F85C70" }}>
            Start a conversation
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-white mb-8 leading-tight" style={{ fontWeight: 400 }}>
            Ready to scope a {e.name} engagement?
          </h2>
          <p className="font-sans text-lg max-w-[640px] mx-auto mb-10 leading-relaxed" style={{ color: "rgba(255,255,255,0.8)" }}>
            We start every engagement with a 30-minute discovery call. Bring the situation,
            we will tell you whether {e.name} is the right fit before we send a proposal.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => onOpenConsultation(e.name)}
              className="amp-focus-ring-on-navy inline-flex items-center gap-2 px-10 h-12 font-sans font-bold text-base rounded transition-colors duration-200"
              style={{ backgroundColor: "#F85C70", color: "#181F4F" }}
              onMouseOver={(ev) => { (ev.currentTarget as HTMLButtonElement).style.backgroundColor = "#d94a5e"; }}
              onMouseOut={(ev) => { (ev.currentTarget as HTMLButtonElement).style.backgroundColor = "#F85C70"; }}
              data-testid={`button-engagement-cta-${e.slug}`}
            >
              Book a Discovery Call <ArrowRight className="h-4 w-4" />
            </button>
            <div className="amp-playbook-cta-on-purple">
              <EngagementPlaybookDownload engagement={e} />
            </div>
          </div>
          <p className="font-sans text-sm mt-6" style={{ color: "rgba(255,255,255,0.5)" }}>
            No pitch. No deck. Just a 30-minute call — or grab the full playbook as a PDF.
          </p>

          {/* Cross-links */}
          <div className="mt-16 pt-10 border-t flex items-center justify-center gap-6 flex-wrap" style={{ borderColor: "rgba(255,255,255,0.15)" }}>
            <p className="font-mono text-xs uppercase tracking-[0.1em]" style={{ color: "rgba(255,255,255,0.5)" }}>
              Other engagements
            </p>
            <Link href="/engagements">
              <span className="font-sans text-sm font-semibold inline-flex items-center gap-2" style={{ color: "#F85C70" }}>
                See all three engagements <ArrowRight className="h-3 w-3" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      <AskAmplified engagementSlug={e.slug} engagementName={e.name} />
    </div>
  );
}
