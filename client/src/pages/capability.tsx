'use client';

import { memo } from "react";
import Link from "next/link";
import { ArrowRight, Users } from "lucide-react";
import { ServiceSchema, StructuredData } from "@/components/structured-data";
import { capabilityBuildingFAQSchema, createBreadcrumbSchema } from "@/lib/schemas";
import { FurtherReading } from "@/components/further-reading";

interface CapabilityProps {
  onOpenConsultation: (serviceType?: string) => void;
}

const services = [
  {
    title: "Product Owner Development Programmes",
    body: "Structured programmes for Product Owners and Product Managers moving from project to product delivery. Covers backlog management, stakeholder engagement, value prioritisation, and governance responsibilities.",
    note: "Available as: intensive bootcamp, 12-week embedded programme, or Centre of Excellence model.",
  },
  {
    title: "Centre of Excellence Design",
    body: "We design and set up Centres of Excellence for Product Ownership, Agile Delivery, and AI Governance, including the governance model, community of practice, standards library, and onboarding pathway.",
    note: null,
  },
  {
    title: "AI Literacy Programmes",
    body: "Practical AI literacy training for non-technical teams, covering what AI is, what it can and can't do, how to evaluate AI outputs critically, and what governance responsibilities apply to different roles.",
    note: "Designed for: senior leaders, programme managers, governance teams, procurement, and operational staff.",
  },
  {
    title: "Agile Practitioner Training",
    body: "Training and coaching for teams making the transition to agile ways of working, tailored for the hybrid agile/governance context your teams will be operating in.",
    note: null,
  },
  {
    title: "Embedded Upskilling",
    body: "Amplified practitioners work alongside your teams on live delivery, coaching as they go. Skills transfer happens through doing, not just training. Every implementation includes an explicit upskilling plan.",
    note: null,
  },
];

const Capability = memo(function Capability({ onOpenConsultation }: CapabilityProps) {

  return (
    <div className="min-h-screen font-sans" style={{ backgroundColor: "#ffffff" }}>
      <ServiceSchema name="Capability Building" description="Product Owner development, Centres of Excellence, AI literacy programmes, agile practitioner training. We transfer real skills to your teams so you can run it yourselves." url="https://amplified.co.uk/capability" />
      <StructuredData data={capabilityBuildingFAQSchema} id="capability-faq-schema" />
      <StructuredData data={createBreadcrumbSchema([{ name: 'Home', url: 'https://amplified.co.uk/' }, { name: 'Capability Building', url: 'https://amplified.co.uk/capability' }])} id="capability-breadcrumb" />

      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="border-b border-gray-100">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <ol className="flex items-center gap-2 text-xs text-gray-500 flex-wrap">
            <li><Link href="/" className="hover:text-gray-800 transition-colors">Home</Link></li>
            <li aria-hidden="true">/</li>
            <li aria-current="page" className="text-gray-800 font-medium">Capability Building</li>
          </ol>
        </div>
      </nav>

      {/* Hero */}
      <section
        className="py-28 lg:py-36"
        style={{ backgroundColor: "#181F4F" }}
      >
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <p
            className="font-mono text-xs uppercase tracking-[0.15em] mb-6"
            style={{ color: "#F85C70" }}
          >
            AMP 04
          </p>
          <h1
            className="font-display text-5xl md:text-6xl text-white mb-8 max-w-[720px] leading-tight"
            style={{ fontWeight: 400 }}
          >
            AI Capability Building
          </h1>
          <p
            className="font-sans text-xl mb-6"
            style={{ color: "#F85C70" }}
          >
            Build it in. Not bolted on.
          </p>
          <p
            className="font-sans text-lg max-w-[580px] leading-relaxed mb-4"
            style={{ color: "rgba(255,255,255,0.75)" }}
          >
            Consultants who make themselves indispensable aren't doing their job. Amplified's
            AI capability programmes are designed to transfer real skill to your teams, so you can
            run it yourselves.
          </p>
          <p
            className="font-sans text-base max-w-[580px] leading-relaxed"
            style={{ color: "rgba(255,255,255,0.6)" }}
          >
            From AI literacy for senior leaders to Product Owner development and Centres of
            Excellence: we build the internal AI capability that regulated organisations need
            to operate confidently without external dependency.
          </p>
        </div>
      </section>

      {/* Principle */}
      <section
        className="py-20 lg:py-24"
        style={{ backgroundColor: "#F2F0F7" }}
      >
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2
                className="font-display text-3xl md:text-4xl mb-6"
                style={{ color: "#181F4F", fontWeight: 400 }}
              >
                The measure of a good engagement is whether your teams can run it without us twelve
                months later.
              </h2>
              <p
                className="font-sans text-base leading-relaxed"
                style={{ color: "#65677B" }}
              >
                That's not a nice-to-have. It's the design principle behind every Amplified
                engagement. We build capability programmes that transfer real skill, not dependency.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { number: "12", label: "Weeks typical programme" },
                { number: "3mo", label: "Post-engagement check-in" },
                { number: "CoE", label: "Centre of Excellence model" },
                { number: "100%", label: "Embedded alongside delivery" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="p-6 rounded text-center"
                  style={{ backgroundColor: "#ffffff" }}
                >
                  <div
                    className="font-display text-3xl mb-2"
                    style={{ color: "#F85C70", fontWeight: 400 }}
                  >
                    {item.number}
                  </div>
                  <p
                    className="font-sans text-xs"
                    style={{ color: "#6B6E81" }}
                  >
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <p
            className="font-mono text-xs uppercase tracking-[0.12em] mb-4"
            style={{ color: "#6B6E81" }}
          >
            What we deliver
          </p>
          <h2
            className="font-display text-4xl md:text-5xl mb-16"
            style={{ color: "#181F4F", fontWeight: 400 }}
          >
            Capability Building Services
          </h2>
          <div className="space-y-0 border-t" style={{ borderColor: "#E5E3EE" }}>
            {services.map((service, i) => (
              <div
                key={service.title}
                className="grid grid-cols-1 lg:grid-cols-3 gap-8 py-10 border-b"
                style={{ borderColor: "#E5E3EE" }}
              >
                <div>
                  <div
                    className="flex items-center justify-center w-10 h-10 rounded mb-4"
                    style={{ backgroundColor: "rgba(248,92,112,0.1)" }}
                  >
                    <Users className="h-5 w-5" style={{ color: "#F85C70" }} />
                  </div>
                  <h3
                    className="font-display text-2xl"
                    style={{ color: "#181F4F", fontWeight: 400 }}
                  >
                    {service.title}
                  </h3>
                </div>
                <div className="lg:col-span-2">
                  <p
                    className="font-sans text-base leading-relaxed mb-3"
                    style={{ color: "#65677B" }}
                  >
                    {service.body}
                  </p>
                  {service.note && (
                    <p
                      className="font-sans text-sm italic"
                      style={{ color: "#60266A" }}
                    >
                      {service.note}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 lg:py-28" style={{ backgroundColor: "#F2F0F7" }}>
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <p className="font-mono text-xs uppercase tracking-[0.12em] mb-4" style={{ color: "#60266A" }}>
            Common questions
          </p>
          <h2 className="font-display text-4xl md:text-5xl mb-12" style={{ color: "#181F4F", fontWeight: 400 }}>
            Frequently Asked Questions
          </h2>
          <div className="space-y-0 border-t" style={{ borderColor: "#DDD9EA" }}>
            {[
              {
                q: "Why do most capability building programmes fail to create lasting change?",
                a: "Most capability programmes fail because they focus on training events rather than embedded practice. A course creates awareness; working alongside experienced practitioners on real problems creates AI capability. Amplified structures all capability work around live engagements, coaching real decisions in real contexts, with deliberate handover at the end so the learning is retained by your people rather than residing in an external consultant.",
              },
              {
                q: "What AI and digital capabilities does Amplified help organisations build?",
                a: "The most common areas are: AI literacy for senior leaders and executives, data governance and data management practices, product thinking and user-centred design in regulated contexts, programme delivery using structured agile approaches, and AI governance and responsible AI frameworks. Amplified also builds bespoke AI capability programmes for specific roles, for example delivery directors leading technology change for the first time.",
              },
              {
                q: "How does Amplified measure the impact of AI capability building?",
                a: "We establish baseline capability measures at the start of each engagement, agree what good looks like with programme sponsors, and track measurable indicators throughout: decisions made without external input, reduction in escalations to consultants, quality of artefacts produced by internal teams, and confidence assessments from participants. Impact measurement is built into the engagement structure, not treated as an afterthought.",
              },
              {
                q: "Can Amplified deliver capability building alongside a live programme?",
                a: "Yes, and this is often the most effective approach. Building AI capability in the context of real delivery decisions accelerates learning and ensures the capability is immediately applicable. Amplified structures embedded capability programmes to work alongside active programmes without adding significant overhead, integrating learning activities into existing team ceremonies and decision points.",
              },
            ].map((item, i) => (
              <details
                key={i}
                className="group border-b py-6"
                style={{ borderColor: "#DDD9EA" }}
              >
                <summary
                  className="font-display text-xl cursor-pointer list-none flex items-center justify-between gap-4"
                  style={{ color: "#181F4F", fontWeight: 400 }}
                >
                  {item.q}
                  <span className="flex-shrink-0 text-2xl transition-transform duration-200 group-open:rotate-45" style={{ color: "#F85C70" }}>+</span>
                </summary>
                <p className="font-sans text-base leading-relaxed mt-4" style={{ color: "#65677B" }}>
                  {item.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <FurtherReading tags={["AI Capability", "Capability Building", "Teaching & Coaching"]} maxArticles={3} />

      {/* Role pages cross-link */}
      <section className="py-12" style={{ backgroundColor: "#F2F0F7" }}>
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <p className="font-sans text-sm mb-4" style={{ color: "#65677B" }}>
            This service is designed for specific roles. Read more about how we work with:
          </p>
          <div className="flex flex-wrap gap-3">
            {[
              { label: "Digital Leads and Heads of Digital", href: "/for-digital-leads" },
              { label: "Chief Information Officers", href: "/for-cios" },
            ].map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="inline-flex items-center gap-2 px-5 h-9 font-sans text-sm font-semibold rounded transition-colors duration-200"
                style={{ backgroundColor: "#181F4F", color: "#ffffff" }}
                onMouseOver={(e) =>
                  ((e.currentTarget as HTMLAnchorElement).style.backgroundColor = "#60266A")
                }
                onMouseOut={(e) =>
                  ((e.currentTarget as HTMLAnchorElement).style.backgroundColor = "#181F4F")
                }
              >
                {link.label} &rarr;
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-24 text-center"
        style={{ backgroundColor: "#60266A" }}
      >
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            className="font-display text-4xl md:text-5xl text-white mb-6"
            style={{ fontWeight: 400 }}
          >
            Build Lasting Capability
          </h2>
          <p
            className="font-sans text-lg max-w-[480px] mx-auto mb-10"
            style={{ color: "rgba(255,255,255,0.8)" }}
          >
            Let's design a capability programme that transfers real skills, and makes us
            unnecessary within twelve months.
          </p>
          <Link href="/contact">
            <button
              className="amp-focus-ring-on-navy inline-flex items-center gap-2 px-10 h-12 font-sans font-bold text-base rounded transition-colors duration-200"
              style={{ backgroundColor: "#F85C70", color: "#181F4F" }}
              onMouseOver={(e) =>
                ((e.currentTarget as HTMLButtonElement).style.backgroundColor = "#d94a5e")
              }
              onMouseOut={(e) =>
                ((e.currentTarget as HTMLButtonElement).style.backgroundColor = "#F85C70")
              }
            >
              Start a Conversation <ArrowRight className="h-4 w-4" />
            </button>
          </Link>
          <p
            className="font-sans text-sm mt-6"
            style={{ color: "rgba(255,255,255,0.5)" }}
          >
            No pitch. No deck. Just a 30-minute call.
          </p>
        </div>
      </section>
    </div>
  );
});

export default Capability;
