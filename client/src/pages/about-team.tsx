'use client';

import { memo } from "react";
import Link from "next/link";
import { ArrowRight, ArrowLeft } from "lucide-react";

interface AboutTeamProps {
  onOpenConsultation: (serviceType?: string) => void;
}

const partners = [
  {
    initial: "A",
    role: "Operations & Governance Partner",
    focus: "AMP 01 / AMP 03",
    bio: "Twenty years building and running delivery functions inside regulated organisations. Brings a PMO director's instinct for accountability to every AI engagement. Believes that governance is not a constraint on delivery. It is what makes delivery trustworthy.",
    philosophy: "We build the governance structure before anyone writes a line of code. Every other sequence is just optimism.",
    specialties: ["Governance Framework Design", "PMO Transformation", "AI Readiness Assessment", "Regulatory Alignment"],
    accentColor: "#181F4F",
  },
  {
    initial: "B",
    role: "Technology & AI Partner",
    focus: "AMP 02",
    bio: "Hands-on technical leader with deep experience in AI implementation across financial services and energy sectors. Brings the rigour of a regulated-industry background to every architectural decision. Knows that AI systems that cannot be explained cannot be trusted.",
    philosophy: "AI without accountability is just risk wearing a suit. We build systems that can answer for themselves.",
    specialties: ["AI Implementation", "Cloud-Native Architecture", "Responsible AI Design", "Technical Due Diligence"],
    accentColor: "#60266A",
  },
  {
    initial: "C",
    role: "Structured Delivery Partner",
    focus: "AMP 03",
    bio: "Career programme director with a track record across major infrastructure and public sector programmes. Designed the hybrid agile model that sits at the heart of Amplified's structured delivery practice. Has run delivery at scale under some of the toughest governance environments in the UK.",
    philosophy: "Speed without structure is expensive chaos. The organisations we respect most move fast inside a governance envelope that never breaks.",
    specialties: ["Hybrid Delivery Design", "Agile at Scale", "Programme Governance", "Stage Gate Management"],
    accentColor: "#F85C70",
  },
  {
    initial: "D",
    role: "Capability & Change Partner",
    focus: "AMP 04",
    bio: "Organisation development specialist who has built internal capability programmes for some of the UK's largest regulated employers. Focuses on the human side of AI adoption: the knowledge, the confidence, and the culture that organisations need to govern AI themselves.",
    philosophy: "The measure of a good engagement is whether you need us twelve months later. We build capability, not dependency.",
    specialties: ["Capability Programme Design", "AI Literacy", "Leadership Development", "Change Management"],
    accentColor: "#181F4F",
  },
];

const values = [
  { label: "Rigorous", desc: "We do not cut corners. Especially not in governance." },
  { label: "Trusting", desc: "We say what we think, even when it is not what you hoped to hear." },
  { label: "People-Centred", desc: "Technology serves people. Not the other way around." },
  { label: "Pragmatic", desc: "We work in the real world, with real constraints." },
  { label: "Curious", desc: "We keep learning so our clients stay ahead." },
  { label: "Technically Excellent", desc: "We practise what we preach on AI and delivery." },
];

const AboutTeam = memo(function AboutTeam({ onOpenConsultation }: AboutTeamProps) {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#FAFAF9" }}>

      {/* HERO */}
      <section
        className="pt-40 pb-28"
        style={{ backgroundColor: "#181F4F" }}
      >
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/">
            <span
              className="inline-flex items-center gap-2 text-sm mb-12 cursor-pointer"
              style={{ color: "rgba(255,255,255,0.45)" }}
            >
              <ArrowLeft className="h-4 w-4" />
              Back to home
            </span>
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-end">
            <div>
              <p
                className="font-mono text-xs uppercase tracking-[0.14em] mb-6"
                style={{ color: "#F85C70" }}
              >
                The Partnership
              </p>
              <h1
                className="text-5xl md:text-6xl leading-tight mb-8"
                style={{ color: "#FFFFFF", fontWeight: 600 }}
              >
                Built by leaders who have done it.
              </h1>
              <p
                className="text-lg leading-relaxed"
                style={{ color: "rgba(255,255,255,0.6)" }}
              >
                A partnership of seasoned practitioners from all walks of life. What they share
                is not a background: it is deep experience inside regulated organisations, a commitment
                to rigour, and the ability to adapt to what each client genuinely needs.
              </p>
            </div>
            <div
              className="lg:pl-16"
              style={{ borderLeft: "1px solid rgba(255,255,255,0.1)" }}
            >
              <div className="space-y-6">
                {["20+ years combined programme leadership", "Regulated industries only", "Built for accountability, not just delivery", "We practise what we preach on AI"].map((item) => (
                  <div key={item} className="flex items-center gap-4">
                    <div
                      className="w-1 h-1 rounded-full flex-shrink-0"
                      style={{ backgroundColor: "#F85C70" }}
                    />
                    <span
                      className="text-base"
                      style={{ color: "rgba(255,255,255,0.7)" }}
                    >
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PARTNERS */}
      <section className="py-28" style={{ backgroundColor: "#FAFAF9" }}>
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <p
              className="font-mono text-xs uppercase tracking-[0.14em] mb-4"
              style={{ color: "#F85C70" }}
            >
              The partnership
            </p>
            <h2
              className="text-4xl md:text-5xl"
              style={{ color: "#181F4F", fontWeight: 600 }}
            >
              Senior practitioners,<br />named accountabilities.
            </h2>
          </div>
          <div className="space-y-6">
            {partners.map((p, i) => (
              <PartnerCard key={i} partner={p} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* VALUES WALL */}
      <section className="py-28" style={{ backgroundColor: "#F2F0F7" }}>
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <p
              className="font-mono text-xs uppercase tracking-[0.14em] mb-4"
              style={{ color: "#F85C70" }}
            >
              What we stand for
            </p>
            <h2
              className="text-4xl md:text-5xl"
              style={{ color: "#181F4F", fontWeight: 600 }}
            >
              Six values.<br />Zero compromises.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px" style={{ backgroundColor: "#DDD9EA" }}>
            {values.map((v, i) => (
              <div
                key={i}
                className="p-10 group transition-all duration-300"
                style={{ backgroundColor: "#F2F0F7" }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.backgroundColor = "#181F4F";
                  (e.currentTarget.querySelector(".val-label") as HTMLElement)!.style.color = "#FFFFFF";
                  (e.currentTarget.querySelector(".val-desc") as HTMLElement)!.style.color = "rgba(255,255,255,0.65)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.backgroundColor = "#F2F0F7";
                  (e.currentTarget.querySelector(".val-label") as HTMLElement)!.style.color = "#181F4F";
                  (e.currentTarget.querySelector(".val-desc") as HTMLElement)!.style.color = "#65677B";
                }}
              >
                <p
                  className="val-label text-xl font-semibold mb-3 transition-colors duration-300"
                  style={{ color: "#181F4F" }}
                >
                  {v.label}
                </p>
                <p
                  className="val-desc text-sm leading-relaxed transition-colors duration-300"
                  style={{ color: "#65677B" }}
                >
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COLLECTIVE STATEMENT */}
      <section className="py-28" style={{ backgroundColor: "#FFFFFF" }}>
        <div className="max-w-[800px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p
            className="font-mono text-xs uppercase tracking-[0.14em] mb-8"
            style={{ color: "#F85C70" }}
          >
            Our commitment
          </p>
          <blockquote
            className="text-3xl md:text-4xl leading-relaxed mb-12"
            style={{ color: "#181F4F", fontWeight: 400 }}
          >
            "We are not here to make AI adoption sound easy.
            We are here to make it work, in industries where getting it wrong has consequences."
          </blockquote>
          <div
            className="w-12 h-px mx-auto mb-12"
            style={{ backgroundColor: "#F85C70" }}
          />
          <p
            className="text-lg leading-relaxed"
            style={{ color: "#65677B" }}
          >
            Every engagement we take on is with an organisation that operates under genuine
            governance pressure. Our job is to make AI adoption rigorous enough to survive that pressure.
            Not to persuade you the pressure does not matter.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28" style={{ backgroundColor: "#60266A" }}>
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2
                className="text-4xl md:text-5xl text-white mb-6"
                style={{ fontWeight: 600 }}
              >
                Ready to meet the team properly?
              </h2>
              <p
                className="text-lg leading-relaxed"
                style={{ color: "rgba(255,255,255,0.65)" }}
              >
                Book a first conversation. No pitch deck. Just an honest discussion
                about where you are, what you need, and whether we are the right fit.
              </p>
            </div>
            <div className="lg:flex lg:justify-end">
              <button
                onClick={() => onOpenConsultation()}
                className="amp-focus-ring-on-navy inline-flex items-center gap-3 px-10 py-5 text-base font-semibold transition-all duration-200 hover:gap-4"
                style={{
                  backgroundColor: "#F85C70",
                  color: "#FFFFFF",
                  borderRadius: "4px",
                }}
                data-testid="button-about-team-cta"
              >
                Book a conversation
                <ArrowRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
});

function PartnerCard({ partner, index }: { partner: typeof partners[0]; index: number }) {
  const isEven = index % 2 === 0;

  return (
    <div
      className="grid grid-cols-1 lg:grid-cols-12 overflow-hidden transition-all duration-500 group"
      style={{
        backgroundColor: "#FFFFFF",
        border: "1px solid #E8E4F0",
        borderRadius: "8px",
      }}
    >
      {/* Avatar block */}
      <div
        className="lg:col-span-3 flex items-center justify-center p-12 relative overflow-hidden"
        style={{ backgroundColor: partner.accentColor, minHeight: "280px" }}
      >
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `radial-gradient(circle at 70% 30%, rgba(255,255,255,0.4) 0%, transparent 60%)`,
          }}
        />
        <div
          className="relative z-10 flex flex-col items-center"
        >
          <div
            className="w-20 h-20 rounded-full flex items-center justify-center mb-6"
            style={{
              border: "1.5px solid rgba(255,255,255,0.3)",
              color: "#FFFFFF",
              fontSize: "2rem",
              fontWeight: 700,
              letterSpacing: "-0.02em",
            }}
          >
            {partner.initial}
          </div>
          <p
            className="font-mono text-xs uppercase tracking-[0.12em] text-center"
            style={{ color: "rgba(255,255,255,0.55)" }}
          >
            {partner.focus}
          </p>
        </div>
      </div>

      {/* Content block */}
      <div className="lg:col-span-9 p-10 lg:p-12 flex flex-col justify-between">
        <div>
          <div className="flex items-start justify-between gap-6 mb-6">
            <h3
              className="text-2xl"
              style={{ color: "#181F4F", fontWeight: 600 }}
            >
              {partner.role}
            </h3>
          </div>
          <p
            className="text-base leading-relaxed mb-8"
            style={{ color: "#65677B" }}
          >
            {partner.bio}
          </p>
          <blockquote
            className="text-base italic mb-8 pl-5"
            style={{
              color: "#60266A",
              borderLeft: `3px solid ${partner.accentColor === "#F85C70" ? "#F85C70" : "#60266A"}`,
              fontWeight: 400,
            }}
          >
            "{partner.philosophy}"
          </blockquote>
        </div>
        <div className="flex flex-wrap gap-2">
          {partner.specialties.map((s) => (
            <span
              key={s}
              className="text-xs px-3 py-1.5"
              style={{
                backgroundColor: "#F2F0F7",
                color: "#181F4F",
                borderRadius: "3px",
                fontWeight: 500,
                letterSpacing: "0.01em",
              }}
            >
              {s}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AboutTeam;
