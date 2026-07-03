'use client';

import { memo } from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";
import transformImage from "@assets/59_1760471391711.webp";
import { ServiceSchema } from "@/components/structured-data";
import { FurtherReading } from "@/components/further-reading";

interface TransformationProps {
  onOpenConsultation?: (serviceType?: string) => void;
}

const whatWeBuild = [
  {
    title: "Custom Software and Platform Engineering",
    body: "Greenfield builds, platform rewrites, and microservices architectures designed from the start for scale, reliability, and operability. Our engineers architect and build alongside your teams.",
  },
  {
    title: "AI-Native Systems",
    body: "Production-grade AI systems built within your governance and accountability structures. We design the data pipelines, model integrations, and observability layers that make AI reliable in regulated environments.",
  },
  {
    title: "Data Infrastructure and Analytics Platforms",
    body: "Data engineering, event-driven architectures, and analytics platforms built for organisations where data quality and lineage are non-negotiable. We go beyond dashboards to the infrastructure underneath.",
  },
  {
    title: "Legacy Modernisation",
    body: "Systematic migration from legacy systems without big-bang risk. We assess, sequence, and deliver modernisation programmes that keep the organisation running while the foundations change.",
  },
  {
    title: "API-First Integration Architecture",
    body: "Connecting systems that were never designed to connect, inside organisations where integration risk is real. We design for resilience, observability, and the realities of production failure.",
  },
  {
    title: "DevOps and Infrastructure as Code",
    body: "CI/CD pipelines, cloud-native infrastructure, and platform engineering practices that give your delivery teams the ground to move quickly without losing control.",
  },
];

const howWeWork = [
  {
    step: "01",
    title: "We embed, not advise",
    body: "Our engineers and architects sit inside your delivery organisation. They attend standups, write code, review pull requests, and carry joint accountability for the outcome. This is not consultancy in the traditional sense.",
  },
  {
    step: "02",
    title: "We bring the technical depth",
    body: "Platform engineers, solution architects, and delivery leads who have built production systems at scale. Current hands-on experience across AWS, Azure, GCP, Kubernetes, event streaming, and modern development practices.",
  },
  {
    step: "03",
    title: "We work inside your governance",
    body: "Tech Build engagements are structured inside your existing programme governance and accountability structures. We do not operate as a parallel stream. We are part of your delivery organisation.",
  },
  {
    step: "04",
    title: "We transfer capability, not dependency",
    body: "Every engagement includes a deliberate plan for internal capability transfer. By the time we leave, your teams should be able to operate, extend, and evolve the systems we built together.",
  },
];

const capabilities = [
  "Platform engineering and cloud-native architecture",
  "AI and machine learning production systems",
  "Microservices and event-driven architectures",
  "DevOps, CI/CD and infrastructure as code",
  "API-first design and integration architecture",
  "Data engineering and analytics platforms",
  "Legacy modernisation and technical migration",
  "Technical leadership and engineering management",
  "Security-by-design and compliance engineering",
  "Observability, reliability, and site reliability engineering",
];

const Transformation = memo(function Transformation({ onOpenConsultation }: TransformationProps) {

  return (
    <div className="min-h-screen font-sans" style={{ backgroundColor: "#ffffff" }}>
      <ServiceSchema name="Tech Build" description="Hands-on technology build from engineers and architects who embed inside your teams. Custom software, AI-native systems, platform engineering, and legacy modernisation for regulated industries." url="https://amplified.co.uk/transformation" serviceType="TechnologyService" />

      {/* HERO */}
      <section className="py-28 lg:py-36" style={{ backgroundColor: "#181F4F" }}>
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-end">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.15em] mb-6" style={{ color: "#F85C70" }}>
                AMP 06
              </p>
              <h1
                className="font-display text-5xl md:text-6xl text-white mb-8 leading-tight"
                style={{ fontWeight: 400 }}
                data-testid="text-page-title"
              >
                Tech Build
              </h1>
              <p className="font-sans text-xl mb-4" style={{ color: "#F85C70" }}>
                Digital transformation, delivered in code.
              </p>
              <p className="font-sans text-lg max-w-[520px] leading-relaxed mb-6" style={{ color: "rgba(255,255,255,0.75)" }}>
                Hands-on digital transformation delivery from engineers and architects who embed
                inside your teams. We build custom software, AI-native systems, and data
                platforms for regulated industries where getting it wrong is not an option.
              </p>
              <p className="font-sans text-lg max-w-[520px] leading-relaxed" style={{ color: "rgba(255,255,255,0.75)" }}>
                We do not produce recommendations and leave. We write code, architect systems,
                and carry joint accountability for what gets built.
              </p>
              <blockquote
                className="mt-10 p-6 border-l-4 max-w-[520px]"
                style={{ borderColor: "#F85C70", backgroundColor: "rgba(248,92,112,0.08)" }}
              >
                <p className="font-display text-xl text-white italic" style={{ fontWeight: 400 }}>
                  "Built for industries where rigour isn't optional."
                </p>
              </blockquote>
            </div>
            <div className="hidden lg:block">
              <div className="rounded overflow-hidden" style={{ aspectRatio: "4/3" }}>
                <img
                  src={transformImage.src}
                  alt="Amplified Tech Build in practice"
                  className="w-full h-full object-cover"
                  loading="eager"
                  data-testid="img-hero"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT WE BUILD */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <p className="font-mono text-xs uppercase tracking-[0.12em] mb-4" style={{ color: "#6B6E81" }}>
            What we build
          </p>
          <h2
            className="font-display text-4xl md:text-5xl mb-16"
            style={{ color: "#181F4F", fontWeight: 400 }}
          >
            Technology That Has to Work in Production
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border-l border-t" style={{ borderColor: "#E5E3EE" }}>
            {whatWeBuild.map((item) => (
              <div key={item.title} className="p-8 border-r border-b" style={{ borderColor: "#E5E3EE" }}>
                <div className="w-1 h-8 mb-6 rounded" style={{ backgroundColor: "#F85C70" }} />
                <h3 className="font-display text-xl mb-4" style={{ color: "#181F4F", fontWeight: 400 }}>
                  {item.title}
                </h3>
                <p className="font-sans text-sm leading-relaxed" style={{ color: "#65677B" }}>
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW WE WORK */}
      <section className="py-20 lg:py-28" style={{ backgroundColor: "#181F4F" }}>
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <p className="font-mono text-xs uppercase tracking-[0.12em] mb-4" style={{ color: "#F85C70" }}>
            Our approach
          </p>
          <h2
            className="font-display text-4xl text-white mb-12"
            style={{ fontWeight: 400 }}
          >
            How we work
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border-l border-t" style={{ borderColor: "rgba(255,255,255,0.1)" }}>
            {howWeWork.map((item) => (
              <div
                key={item.step}
                className="p-8 border-r border-b"
                style={{ borderColor: "rgba(255,255,255,0.1)" }}
              >
                <p
                  className="font-mono text-3xl font-bold mb-4 block"
                  style={{ color: "#F85C70", opacity: 0.5 }}
                >
                  {item.step}
                </p>
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

      {/* CAPABILITIES */}
      <section className="py-20 lg:py-28" style={{ backgroundColor: "#F2F0F7" }}>
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.12em] mb-4" style={{ color: "#60266A" }}>
                Technical depth
              </p>
              <h2
                className="font-display text-4xl mb-6"
                style={{ color: "#181F4F", fontWeight: 400 }}
              >
                What our engineers bring to every engagement
              </h2>
              <p className="font-sans text-base leading-relaxed mb-6" style={{ color: "#65677B" }}>
                Our engineers and architects are practitioners with current, hands-on experience
                in production systems. They are not generalists who can learn on the job at your
                expense. They bring deep expertise in the platforms and practices that regulated
                industries require.
              </p>
              <p className="font-sans text-base leading-relaxed" style={{ color: "#65677B" }}>
                Every Tech Build engagement is led by a senior engineer or architect who has operated
                at this level before. They are supported by specialists across the capabilities below.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-0 border-l border-t" style={{ borderColor: "#E5E3EE" }}>
              {capabilities.map((cap) => (
                <div key={cap} className="flex items-center gap-4 p-4 border-r border-b" style={{ borderColor: "#E5E3EE", backgroundColor: "#ffffff" }}>
                  <CheckCircle className="h-4 w-4 flex-shrink-0" style={{ color: "#F85C70" }} />
                  <span className="font-sans text-sm" style={{ color: "#65677B" }}>
                    {cap}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* RELATED */}
      <section className="py-16 lg:py-20 border-b bg-white" style={{ borderColor: "#E5E3EE" }}>
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <p className="font-mono text-xs uppercase tracking-[0.12em] mb-8" style={{ color: "#6B6E81" }}>
            Works alongside
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-l border-t" style={{ borderColor: "#E5E3EE" }}>
            {[
              {
                tag: "AMP 01",
                title: "AI Governance",
                body: "Tech Build engagements involving AI systems are designed inside the governance frameworks we establish through AMP 01. Accountability and auditability are built in from the start.",
                href: "/ai-governance",
              },
              {
                tag: "AMP 02",
                title: "AI Implementation",
                body: "For organisations with an AI strategy already in place, Tech Build delivers the production systems. AMP 02 and AMP 06 frequently run as a single integrated engagement.",
                href: "/ai-implementation",
              },
              {
                tag: "AMP 03",
                title: "Structured Delivery",
                body: "Tech Build engagements are run inside delivery frameworks that provide the governance and accountability structures your organisation requires.",
                href: "/structured-delivery",
              },
            ].map((item) => (
              <Link href={item.href} key={item.tag} className="group block">
                <div
                  className="p-8 border-r border-b h-full flex flex-col transition-colors duration-150"
                  style={{ borderColor: "#E5E3EE" }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.backgroundColor = "#F9F8FC"; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.backgroundColor = "transparent"; }}
                >
                  <p className="font-mono text-xs uppercase tracking-[0.12em] mb-3" style={{ color: "#F85C70" }}>
                    {item.tag}
                  </p>
                  <h3 className="font-display text-xl mb-3" style={{ color: "#181F4F", fontWeight: 400 }}>
                    {item.title}
                  </h3>
                  <p className="font-sans text-sm leading-relaxed mb-6 flex-1" style={{ color: "#65677B" }}>
                    {item.body}
                  </p>
                  <span
                    className="inline-flex items-center gap-2 text-sm font-semibold group-hover:gap-3 transition-all duration-200"
                    style={{ color: "#F85C70" }}
                  >
                    Learn more <ArrowRight className="h-3 w-3" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <FurtherReading tags={["Digital Transformation", "Governance", "Infrastructure"]} maxArticles={3} />

      {/* CTA */}
      <section className="py-24 text-center" style={{ backgroundColor: "#60266A" }}>
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            className="font-display text-4xl md:text-5xl text-white mb-6"
            style={{ fontWeight: 400 }}
          >
            Ready to Start Building?
          </h2>
          <p className="font-sans text-lg max-w-[480px] mx-auto mb-10" style={{ color: "rgba(255,255,255,0.8)" }}>
            Tell us what you are trying to build and we will tell you honestly what it will take,
            who you need, and whether we are the right people to help you build it.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button
              onClick={() => onOpenConsultation?.("tech-build")}
              className="amp-focus-ring-on-navy inline-flex items-center gap-2 px-10 h-12 font-sans font-bold text-base rounded transition-colors duration-200"
              style={{ backgroundColor: "#F85C70", color: "#181F4F" }}
              onMouseOver={(e) => ((e.currentTarget as HTMLButtonElement).style.backgroundColor = "#d94a5e")}
              onMouseOut={(e) => ((e.currentTarget as HTMLButtonElement).style.backgroundColor = "#F85C70")}
              data-testid="button-cta"
            >
              Start a Conversation <ArrowRight className="h-4 w-4" />
            </button>
            <Link href="/ai-implementation">
              <button
                className="amp-focus-ring-on-navy inline-flex items-center gap-2 px-10 h-12 font-sans font-bold text-base rounded transition-colors duration-200"
                style={{ border: "1px solid rgba(255,255,255,0.3)", color: "#FFFFFF", backgroundColor: "transparent" }}
                onMouseOver={(e) => ((e.currentTarget as HTMLButtonElement).style.backgroundColor = "rgba(255,255,255,0.08)")}
                onMouseOut={(e) => ((e.currentTarget as HTMLButtonElement).style.backgroundColor = "transparent")}
              >
                View AI Implementation (AMP 02)
              </button>
            </Link>
          </div>
          <p className="font-sans text-sm mt-6" style={{ color: "rgba(255,255,255,0.5)" }}>
            No pitch. No deck. Just a 30-minute call.
          </p>
        </div>
      </section>
    </div>
  );
});

export default Transformation;
