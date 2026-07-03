'use client';

import { memo } from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";
import heroImage from "@assets/56_1760470571209.webp";
import modernWorkImage from "@assets/35_1760470608291.webp";
import strategicThinkingImage from "@assets/50_1760470599806.webp";

interface AboutProps {
  onOpenConsultation: (serviceType?: string) => void;
}

const beliefs = [
  {
    value: "Rigorous",
    statement: "We earn the right to be trusted by doing the work properly.",
    body: "High standards are not a selling point. They are the minimum. We hold ourselves to them because we have seen what happens when organisations do not, and we have spent careers cleaning up the results.",
  },
  {
    value: "Curious",
    statement: "The day you stop asking questions is the day your advice stops being useful.",
    body: "Regulated industries change. Regulation changes. Technology changes faster than either. We stay genuinely curious because our clients cannot afford advisers who stopped learning two years ago.",
  },
  {
    value: "Trusting",
    statement: "People do their best thinking when they have room to think.",
    body: "Approval chains kill good ideas before they reach the surface. We build environments where people at every level feel safe to challenge, to experiment, and to be honest about what is not working.",
  },
  {
    value: "People-Centred",
    statement: "Technology serves people. Not the other way around.",
    body: "AI governance, digital delivery, platform modernisation: all of it is meaningless if it does not make things better for the people inside and around the organisations we work with. That is the measure we use.",
  },
  {
    value: "Pragmatic",
    statement: "Good and delivered is better than perfect and waiting.",
    body: "Perfectionism is often fear with a professional veneer. We push for the best outcome achievable within the real constraints of time, budget, governance, and organisational appetite. Then we improve from there.",
  },
  {
    value: "Tech Excellence",
    statement: "We recommend what we understand, because we use it.",
    body: "We are practitioners first. Our partners have built systems, shipped products, and governed AI implementations inside regulated environments. We do not advise on tools we have never touched.",
  },
];

const About = memo(function About({ onOpenConsultation }: AboutProps) {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#FAFAF9" }}>

      {/* HERO */}
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-28" style={{ backgroundColor: "#181F4F" }}>
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <p className="font-mono text-xs uppercase tracking-[0.14em] mb-6" style={{ color: "#F85C70" }}>
            About Amplified
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-end">
            <div>
              <h1
                className="font-display text-5xl lg:text-6xl leading-tight"
                style={{ color: "#FFFFFF", fontWeight: 400 }}
                data-testid="text-about-title"
              >
                Founded by<br />practitioners.<br />Built from the inside.
              </h1>
            </div>
            <div>
              <p className="font-sans text-lg leading-relaxed mb-6" style={{ color: "rgba(255,255,255,0.65)" }}>
                We are a consultancy founded by practitioners who had operated inside the industries we now serve.
                We did not build Amplified by reading about regulated delivery. We built it because we had lived it,
                and we saw a gap that most consultancies were not closing.
              </p>
              <button
                onClick={() => onOpenConsultation()}
                className="amp-focus-ring-on-light rounded inline-flex items-center gap-2 text-sm font-semibold hover:gap-3 transition-all duration-200"
                style={{ color: "#F85C70" }}
                data-testid="button-about-consultation"
              >
                Start a conversation <ArrowRight className="h-3 w-3" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* HERO IMAGE */}
      <div className="w-full overflow-hidden" style={{ maxHeight: "480px" }}>
        <img
          src={heroImage.src}
          alt="Amplified partnership at work"
          className="w-full object-cover object-center"
          style={{ maxHeight: "480px" }}
          loading="eager"
        />
      </div>

      {/* OUR ORIGINS */}
      <section className="py-24 lg:py-32 border-b" style={{ borderColor: "#E5E3EE" }}>
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.12em] mb-4" style={{ color: "#6B6E81" }}>
                Our Origins
              </p>
              <h2 className="font-display text-4xl mb-8" style={{ color: "#181F4F", fontWeight: 400 }}>
                Why Amplified exists
              </h2>
              <p className="font-sans text-base leading-relaxed mb-6" style={{ color: "#65677B" }}>
                Amplified was founded by delivery practitioners who had seen the same pattern repeat across
                infrastructure programmes, energy organisations, financial services firms, and public sector
                bodies. The pattern was this: good people, unclear governance, and external consultancies who
                had never actually operated inside a regulated environment advising on how to run one.
              </p>
              <p className="font-sans text-base leading-relaxed mb-6" style={{ color: "#65677B" }}>
                The gap was not technical. These organisations were not short of smart people or capable technology.
                The gap was structural. AI was being adopted without governance frameworks. Agile was being
                implemented without understanding how it had to sit alongside PMO rigour and contractual accountability.
                Capability programmes were being bolted on after delivery rather than embedded inside it.
              </p>
              <p className="font-sans text-base leading-relaxed mb-6" style={{ color: "#65677B" }}>
                We founded Amplified to close that gap. Not as generalists who could turn their hand to anything,
                but as specialists who had operated under the same governance pressure our clients face every day.
              </p>
              <p className="font-sans text-base leading-relaxed italic" style={{ color: "#65677B" }}>
                We measure our impact not in billable hours, but in sustained behaviour change and organisational
                capability that outlasts our involvement.
              </p>
            </div>
            <div className="space-y-6">
              <img
                src={modernWorkImage.src}
                alt="Amplified at work"
                className="w-full rounded"
                loading="lazy"
              />
              <div className="grid grid-cols-2 gap-0 border-l border-t" style={{ borderColor: "#E5E3EE" }}>
                {[
                  { num: "10+", label: "Years of delivery leadership" },
                  { num: "5", label: "Sectors we specialise in" },
                  { num: "6", label: "AMP service lines" },
                  { num: "2", label: "Offices: London and Porto" },
                ].map((stat, i) => (
                  <div key={i} className="p-6 border-r border-b" style={{ borderColor: "#E5E3EE" }}>
                    <p className="font-display text-4xl mb-1" style={{ color: "#F85C70", fontWeight: 400 }}>{stat.num}</p>
                    <p className="font-sans text-xs leading-snug" style={{ color: "#65677B" }}>{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT OUR NAME MEANS */}
      <section className="py-24 lg:py-32" style={{ backgroundColor: "#181F4F" }}>
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.12em] mb-4" style={{ color: "#F85C70" }}>
                What Our Name Means
              </p>
              <h2 className="font-display text-4xl mb-8 leading-tight" style={{ color: "#FFFFFF", fontWeight: 400 }}>
                To amplify is to make something bigger without distorting it
              </h2>
              <p className="font-sans text-base leading-relaxed mb-6" style={{ color: "rgba(255,255,255,0.65)" }}>
                Not to replace. Not to overhaul. To take what is already working and give it the conditions
                it needs to perform at full volume. That is the belief at the centre of everything we do.
              </p>
              <p className="font-sans text-base leading-relaxed mb-6" style={{ color: "rgba(255,255,255,0.65)" }}>
                Every organisation we work with already has capable people, existing governance structures, and
                delivery ambitions that matter. What they often lack is the framework, the expertise, or the
                external challenge to bring those things together and make them work at the level they should.
              </p>
              <p className="font-sans text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.65)" }}>
                The Amp Model, Assess then Implement then Amplify, mirrors this directly. We start by understanding
                what you have. We implement what is needed. And then we amplify the result so it sustains itself
                long after we have left the building.
              </p>
            </div>
            <div className="flex flex-col gap-0 border-l border-t" style={{ borderColor: "rgba(255,255,255,0.1)" }}>
              {[
                { phase: "Assess", desc: "Understand the real problem before proposing any solution. Most organisations are solving the wrong thing." },
                { phase: "Implement", desc: "Deliver with your teams, not at them. Build the thing and transfer the capability at the same time." },
                { phase: "Amplify", desc: "Create the conditions for sustained performance that does not depend on us being in the room." },
              ].map((item, i) => (
                <div key={i} className="p-8 border-r border-b" style={{ borderColor: "rgba(255,255,255,0.1)" }}>
                  <p className="font-mono text-xs uppercase tracking-[0.12em] mb-3" style={{ color: "#F85C70" }}>{item.phase}</p>
                  <p className="font-sans text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.6)" }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* OUR MISSION */}
      <section className="py-20 border-b" style={{ backgroundColor: "#F2F0F7", borderColor: "#DDD9EA" }}>
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="font-mono text-xs uppercase tracking-[0.12em] mb-6" style={{ color: "#6B6E81" }}>
            Our Mission
          </p>
          <p
            className="font-display text-3xl md:text-4xl lg:text-5xl max-w-[860px] mx-auto leading-tight"
            style={{ color: "#181F4F", fontWeight: 400 }}
            data-testid="text-about-description"
          >
            To make rigour the foundation of every technology transformation we touch.
          </p>
        </div>
      </section>

      {/* OUR VALUES AS BELIEFS */}
      <section className="py-24 lg:py-32 border-b" style={{ borderColor: "#E5E3EE" }}>
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <p className="font-mono text-xs uppercase tracking-[0.12em] mb-4" style={{ color: "#6B6E81" }}>
            Our Values
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16 items-end">
            <h2 className="font-display text-4xl" style={{ color: "#181F4F", fontWeight: 400 }}>
              Six beliefs we actually live by
            </h2>
            <p className="font-sans text-base leading-relaxed" style={{ color: "#65677B" }}>
              These are not aspirational wall posters. They shape how we hire, how we challenge clients, how we
              hold ourselves accountable, and what we walk away from. Every one of them has been tested in practice
              inside regulated environments where the consequences of getting things wrong are real.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 border-l border-t" style={{ borderColor: "#E5E3EE" }}>
            {beliefs.map((belief, i) => (
              <div
                key={i}
                className="p-10 border-r border-b group"
                style={{ borderColor: "#E5E3EE" }}
                data-testid={`card-value-${belief.value.toLowerCase().replace(/\s+/g, "-")}`}
              >
                <p
                  className="font-mono text-xs uppercase tracking-[0.12em] mb-4"
                  style={{ color: "#F85C70" }}
                >
                  {belief.value}
                </p>
                <h3
                  className="font-display text-xl mb-4 leading-snug"
                  style={{ color: "#181F4F", fontWeight: 400 }}
                  data-testid={`text-value-title-${belief.value.toLowerCase().replace(/\s+/g, "-")}`}
                >
                  "{belief.statement}"
                </h3>
                <p
                  className="font-sans text-sm leading-relaxed"
                  style={{ color: "#65677B" }}
                  data-testid={`text-value-description-${belief.value.toLowerCase().replace(/\s+/g, "-")}`}
                >
                  {belief.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT WE BELIEVE IN PRACTICE */}
      <section className="py-24 lg:py-32" style={{ backgroundColor: "#F2F0F7" }}>
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.12em] mb-4" style={{ color: "#6B6E81" }}>
                In Practice
              </p>
              <h2 className="font-display text-4xl mb-8" style={{ color: "#181F4F", fontWeight: 400 }}>
                What working with us actually looks like
              </h2>
              <ul className="space-y-6">
                {[
                  { title: "We give you the honest view", body: "Not the comfortable one. If the problem is not what you think it is, we will tell you. If your team is the issue, we will say so respectfully. Candour is a form of respect." },
                  { title: "We work inside your constraints", body: "Every organisation operates within real limitations. Budget, governance, political capital, appetite for change. We do not design solutions that ignore the world you operate in." },
                  { title: "We build your capability, not dependency", body: "Our goal is to be unnecessary. We document, we train, we transfer, and we leave your organisation better equipped to run things without us than when we arrived." },
                  { title: "We walk away from work that does not fit", body: "If a client wants a rubber-stamp rather than a genuine governance review, we are not the right partner. Our reputation is worth more than any single engagement." },
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-5">
                    <CheckCircle className="h-5 w-5 flex-shrink-0 mt-0.5" style={{ color: "#F85C70" }} />
                    <div>
                      <p className="font-sans text-base font-semibold mb-1" style={{ color: "#181F4F" }}>{item.title}</p>
                      <p className="font-sans text-sm leading-relaxed" style={{ color: "#65677B" }}>{item.body}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <img
                src={strategicThinkingImage.src}
                alt="Amplified in practice"
                className="w-full rounded mb-8"
                loading="lazy"
              />
              <blockquote
                className="p-8 rounded"
                style={{ backgroundColor: "#181F4F" }}
              >
                <p className="font-display text-xl mb-6 leading-relaxed" style={{ color: "#FFFFFF", fontWeight: 400 }}>
                  "We practice what we preach. Not because it is a good line. Because we built this consultancy
                  by living through the same pressures we now help our clients navigate."
                </p>
                <p className="font-mono text-xs uppercase tracking-[0.1em]" style={{ color: "#F85C70" }}>
                  The Amplified Partnership
                </p>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* EXPLORE MORE */}
      <section className="py-24 lg:py-32 border-t" style={{ borderColor: "#E5E3EE" }}>
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <p className="font-mono text-xs uppercase tracking-[0.12em] mb-4" style={{ color: "#6B6E81" }}>
            Explore Further
          </p>
          <h2 className="font-display text-4xl mb-14" style={{ color: "#181F4F", fontWeight: 400 }}>
            There is more to discover
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-l border-t" style={{ borderColor: "#E5E3EE" }}>
            {[
              {
                tag: "The Partnership",
                title: "Meet the team",
                body: "Four partners with deep experience inside the industries we serve. Delivery directors, technical leads, and programme architects who have operated under real governance pressure.",
                href: "/about/team",
                cta: "Meet the partnership",
              },
              {
                tag: "The Amp Model",
                title: "How we work",
                body: "The Assess, Implement, Amplify methodology in full. How we structure every engagement to build lasting capability, not consulting dependency.",
                href: "/about/methodology",
                cta: "Explore the methodology",
              },
              {
                tag: "Work With Us",
                title: "Careers at Amplified",
                body: "We hire from all walks of life, as long as the experience or ambitions match. If what we do resonates and you want to do the most interesting work of your career, we would like to hear from you.",
                href: "/careers",
                cta: "See open roles",
              },
            ].map((card, i) => (
              <Link href={card.href} key={i} className="group block">
                <div
                  className="p-10 border-r border-b h-full flex flex-col transition-colors duration-200"
                  style={{ borderColor: "#E5E3EE" }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.backgroundColor = "#F9F8FC"; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.backgroundColor = "transparent"; }}
                >
                  <p className="font-mono text-xs uppercase tracking-[0.12em] mb-4" style={{ color: "#F85C70" }}>
                    {card.tag}
                  </p>
                  <h3 className="font-display text-2xl mb-4" style={{ color: "#181F4F", fontWeight: 400 }}>{card.title}</h3>
                  <p className="font-sans text-sm leading-relaxed mb-8 flex-1" style={{ color: "#65677B" }}>{card.body}</p>
                  <span
                    className="inline-flex items-center gap-2 text-sm font-semibold group-hover:gap-3 transition-all duration-200"
                    style={{ color: "#F85C70" }}
                  >
                    {card.cta} <ArrowRight className="h-3 w-3" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 text-center" style={{ backgroundColor: "#60266A" }}>
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <p className="font-mono text-xs uppercase tracking-[0.14em] mb-6" style={{ color: "rgba(255,255,255,0.55)" }}>
            Start Here
          </p>
          <h2 className="font-display text-5xl mb-6" style={{ color: "#FFFFFF", fontWeight: 400 }}>
            If it resonates, let's talk
          </h2>
          <p className="font-sans text-base max-w-[480px] mx-auto mb-10 leading-relaxed" style={{ color: "rgba(255,255,255,0.65)" }}>
            We will give you an honest view of whether and how we can help. No commitment required. No slide decks in the first meeting.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button
              onClick={() => onOpenConsultation()}
              className="amp-focus-ring-on-navy inline-flex items-center gap-2 px-10 h-12 font-sans font-bold text-sm rounded transition-colors duration-200"
              style={{ backgroundColor: "#F85C70", color: "#181F4F" }}
              onMouseOver={(e) => { (e.currentTarget as HTMLButtonElement).style.backgroundColor = "#d94a5e"; }}
              onMouseOut={(e) => { (e.currentTarget as HTMLButtonElement).style.backgroundColor = "#F85C70"; }}
              data-testid="button-about-cta"
            >
              Start a Conversation <ArrowRight className="h-4 w-4" />
            </button>
            <Link href="/contact">
              <button
                className="amp-focus-ring-on-navy inline-flex items-center gap-2 px-10 h-12 font-sans font-bold text-sm rounded transition-colors duration-200"
                style={{ border: "1px solid rgba(255,255,255,0.3)", color: "#FFFFFF", backgroundColor: "transparent" }}
                onMouseOver={(e) => { (e.currentTarget as HTMLButtonElement).style.backgroundColor = "rgba(255,255,255,0.08)"; }}
                onMouseOut={(e) => { (e.currentTarget as HTMLButtonElement).style.backgroundColor = "transparent"; }}
                data-testid="button-about-contact-options"
              >
                View Contact Options
              </button>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
});

export default About;
