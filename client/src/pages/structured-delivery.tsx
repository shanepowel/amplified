'use client';

import { memo } from "react";
import Link from "next/link";
import heroImg from "@assets/stock_images/structured-delivery-hero.webp";
import Image from 'next/image';
import { ArrowRight, AlertTriangle } from "lucide-react";
import { ServiceSchema, StructuredData } from "@/components/structured-data";
import { structuredDeliveryFAQSchema, createBreadcrumbSchema } from "@/lib/schemas";

interface StructuredDeliveryProps {
  onOpenConsultation: (serviceType?: string) => void;
}

const whyFails = [
  "Programme-level reporting that maps to investment decisions and business cases",
  "Stage gates, assurance reviews, and approval processes that can't be bypassed",
  "NEC, FIDIC, or similar contract structures that assume defined outputs and change control",
  "PMO functions that need visibility, predictability, and risk transparency",
];

const services = [
  {
    title: "Agile Operating Model Design",
    body: "We design agile operating models that fit your sector, defining squad structures, programme governance interfaces, how sprint outputs map to stage gate requirements, and how your PMO maintains visibility without becoming a blocker.",
  },
  {
    title: "Squad Implementation",
    body: "We set up and embed cross-functional squads within your existing programme structure, including role design, ways of working, ceremonies, tooling, and governance interfaces. We stay embedded until squads are self-sufficient.",
  },
  {
    title: "Hybrid Framework Design",
    body: "For organisations that need both agile and waterfall, which is most of our clients, we design the hybrid model. Clear delineation of what runs in sprints, what runs in stages, how handoffs work, and how risk and change are managed across both tracks.",
  },
  {
    title: "Delivery Governance and Reporting",
    body: "We build the reporting and governance layer above agile delivery, programme dashboards, risk registers, RAID logs, and stakeholder reporting your board can interrogate.",
  },
  {
    title: "PMO Integration",
    body: "We work directly with your PMO to define the interface between agile delivery and programme governance, ensuring neither function undermines the other.",
  },
];

const StructuredDelivery = memo(function StructuredDelivery({
  onOpenConsultation,
}: StructuredDeliveryProps) {
  return (
    <div className="min-h-screen font-sans" style={{ backgroundColor: "#ffffff" }}>
      <ServiceSchema name="Structured Delivery" description="Squad-based delivery models designed for PM-heavy industries. Agile operating models, hybrid frameworks, PMO integration for infrastructure, energy, financial services and public sector." url="https://amplified.co.uk/structured-delivery" />
      <StructuredData data={structuredDeliveryFAQSchema} id="structured-delivery-faq-schema" />
      <StructuredData data={createBreadcrumbSchema([{ name: 'Home', url: 'https://amplified.co.uk/' }, { name: 'Structured Delivery', url: 'https://amplified.co.uk/structured-delivery' }])} id="structured-delivery-breadcrumb" />

      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="border-b border-gray-100">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <ol className="flex items-center gap-2 text-xs text-gray-500 flex-wrap">
            <li><Link href="/" className="hover:text-gray-800 transition-colors">Home</Link></li>
            <li aria-hidden="true">/</li>
            <li aria-current="page" className="text-gray-800 font-medium">Structured Delivery</li>
          </ol>
        </div>
      </nav>

      {/* Hero */}
      <section
        className="py-28 lg:py-36 relative overflow-hidden"
        style={{ backgroundColor: "#181F4F" }}
      >
        <div className="hidden lg:block absolute inset-y-0 right-0 w-[48%] pointer-events-none" aria-hidden="true">
          <Image src={heroImg} alt="" aria-hidden="true" fill className="object-cover" style={{ opacity: 0.3 }} priority sizes="48vw" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to right, #181F4F 0%, transparent 60%)" }} />
        </div>
        <div className="relative max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <p
            className="font-mono text-xs uppercase tracking-[0.15em] mb-6"
            style={{ color: "#F85C70" }}
          >
            AMP 03
          </p>
          <h1
            className="font-display text-5xl md:text-6xl text-white mb-8 max-w-[720px] leading-tight"
            style={{ fontWeight: 400 }}
          >
            Structured Delivery
          </h1>
          <p
            className="font-sans text-xl mb-4"
            style={{ color: "#F85C70" }}
          >
            Agile done right for industries where governance isn't optional.
          </p>
          <p
            className="font-sans text-lg max-w-[580px] leading-relaxed"
            style={{ color: "rgba(255,255,255,0.75)" }}
          >
            Most agile transformations fail in project-driven organisations because they ignore the
            governance structures those organisations were built on. Amplified's delivery model
            bridges both worlds, agile pace and flexibility, with the accountability and
            auditability your industry requires.
          </p>
        </div>
      </section>

      {/* Why agile fails */}
      <section
        className="py-20 lg:py-28"
        style={{ backgroundColor: "#F2F0F7" }}
      >
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <p
                className="font-mono text-xs uppercase tracking-[0.12em] mb-6"
                style={{ color: "#60266A" }}
              >
                Why agile often fails in your sector
              </p>
              <p
                className="font-sans text-base leading-relaxed mb-6"
                style={{ color: "#65677B" }}
              >
                We've seen it repeatedly. An organisation adopts agile, squads, sprints, backlogs,
                standups. Six months in, the PMO is fighting with the delivery team. Senior
                stakeholders can't report progress in a format their governance board recognises.
              </p>
              <p
                className="font-sans text-base leading-relaxed font-medium"
                style={{ color: "#181F4F" }}
              >
                It wasn't a mistake. It was implemented without understanding the environment.
              </p>
              <p
                className="font-sans text-base leading-relaxed mt-4"
                style={{ color: "#65677B" }}
              >
                Project-driven organisations have legitimate governance requirements:
              </p>
            </div>
            <div className="space-y-4">
              {whyFails.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 p-5 rounded"
                  style={{ backgroundColor: "#ffffff" }}
                >
                  <AlertTriangle
                    className="h-5 w-5 flex-shrink-0 mt-0.5"
                    style={{ color: "#F85C70" }}
                  />
                  <span className="font-sans text-sm leading-relaxed" style={{ color: "#65677B" }}>
                    {item}
                  </span>
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
            Structured Delivery Services
          </h2>
          <div className="space-y-0 border-t" style={{ borderColor: "#E5E3EE" }}>
            {services.map((service, i) => (
              <div
                key={service.title}
                className="grid grid-cols-1 lg:grid-cols-3 gap-8 py-10 border-b"
                style={{ borderColor: "#E5E3EE" }}
              >
                <div>
                  <p
                    className="font-mono text-xs uppercase tracking-[0.1em] mb-3"
                    style={{ color: "#F85C70" }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <h3
                    className="font-display text-2xl"
                    style={{ color: "#181F4F", fontWeight: 400 }}
                  >
                    {service.title}
                  </h3>
                </div>
                <div className="lg:col-span-2">
                  <p
                    className="font-sans text-base leading-relaxed"
                    style={{ color: "#65677B" }}
                  >
                    {service.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Role pages cross-link */}
      <section className="py-12" style={{ backgroundColor: "#F2F0F7" }}>
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <p className="font-sans text-sm mb-4" style={{ color: "#65677B" }}>
            This service is designed for specific roles. Read more about how we work with:
          </p>
          <div className="flex flex-wrap gap-3">
            {[
              { label: "Chief Information Officers", href: "/for-cios" },
              { label: "Delivery Directors", href: "/for-delivery-directors" },
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
            Ready to Deliver Differently?
          </h2>
          <p
            className="font-sans text-lg max-w-[480px] mx-auto mb-10"
            style={{ color: "rgba(255,255,255,0.8)" }}
          >
            Let's design a delivery model that works for your governance environment, not despite
            it.
          </p>
          <Link href="/contact">
            <button
              className="amp-focus-ring-on-navy inline-flex items-center gap-2 px-10 h-12 font-sans font-bold text-base rounded transition-colors duration-200"
              style={{ backgroundColor: "#F85C70", color: "#181F4F" }}
              data-testid="button-structured-delivery-cta"
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

export default StructuredDelivery;
