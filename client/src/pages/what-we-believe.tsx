'use client';

import Link from "next/link";
import { memo } from "react";
import { ArrowRight } from "lucide-react";
import { manifestoClaims as manifestoClaimsFallback, type ManifestoClaim } from "@/lib/manifesto";

interface Props {
  onOpenConsultation: (serviceType?: string) => void;
  items?: ManifestoClaim[];
}

export default memo(function WhatWeBelieve({ onOpenConsultation, items }: Props) {
  const claims = items && items.length > 0 ? items : manifestoClaimsFallback;
  return (
    <div className="min-h-screen font-sans" style={{ backgroundColor: "#FFFFFF" }}>
      {/* Breadcrumb */}
      <div className="py-5" style={{ backgroundColor: "#F2F0F7" }}>
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="font-mono text-xs uppercase tracking-[0.1em]">
            <ol className="flex items-center gap-2" style={{ color: "#6B6E81" }}>
              <li><Link href="/" className="hover:underline">Home</Link></li>
              <li aria-hidden="true">/</li>
              <li style={{ color: "#181F4F" }}>What we believe</li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="py-28 lg:py-36" style={{ backgroundColor: "#181F4F" }}>
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <p className="font-mono text-xs uppercase tracking-[0.15em] mb-6" style={{ color: "#F85C70" }}>
            What we believe
          </p>
          <h1
            className="font-display text-5xl md:text-6xl lg:text-7xl text-white mb-8 leading-[1.05] max-w-[920px]"
            style={{ fontWeight: 400 }}
          >
            Five claims about how delivery should actually work.
          </h1>
          <p className="font-sans text-lg max-w-[680px] leading-relaxed" style={{ color: "rgba(255,255,255,0.75)" }}>
            We have spent more than a decade running technology programmes inside regulated organisations.
            These are the things we have come to believe, written down so you know what you are buying
            before you buy it.
          </p>
        </div>
      </section>

      {/* Claims */}
      <section className="py-24 lg:py-28" style={{ backgroundColor: "#FFFFFF" }}>
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-0 border-t" style={{ borderColor: "#E5E3EE" }}>
            {claims.map((claim) => (
              <article
                key={claim.number}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 py-16 lg:py-20 border-b"
                style={{ borderColor: "#E5E3EE" }}
              >
                <div className="lg:col-span-3">
                  <p
                    className="font-display text-6xl lg:text-7xl"
                    style={{ color: "#F85C70", fontWeight: 400 }}
                    aria-hidden="true"
                  >
                    {claim.number}
                  </p>
                </div>
                <div className="lg:col-span-9">
                  <h2
                    className="font-display text-3xl md:text-4xl mb-6 leading-tight"
                    style={{ color: "#181F4F", fontWeight: 400 }}
                  >
                    {claim.headline}
                  </h2>
                  <div className="space-y-5">
                    {claim.body.map((para, i) => (
                      <p key={i} className="font-sans text-lg leading-relaxed" style={{ color: "#65677B" }}>
                        {para}
                      </p>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24" style={{ backgroundColor: "#60266A" }}>
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="font-mono text-xs uppercase tracking-[0.15em] mb-6" style={{ color: "#F85C70" }}>
            If this resonates
          </p>
          <h2 className="font-display text-3xl md:text-4xl text-white mb-8 leading-tight max-w-[760px] mx-auto" style={{ fontWeight: 400 }}>
            See how we put these beliefs into productised engagements.
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/engagements"
              className="amp-focus-ring-on-navy inline-flex items-center gap-2 px-8 h-12 font-sans font-bold text-base rounded transition-colors duration-200"
              style={{ backgroundColor: "#F85C70", color: "#181F4F" }}
              data-testid="button-what-we-believe-engagements"
              onMouseOver={(ev) => { (ev.currentTarget as HTMLAnchorElement).style.backgroundColor = "#d94a5e"; }}
              onMouseOut={(ev) => { (ev.currentTarget as HTMLAnchorElement).style.backgroundColor = "#F85C70"; }}
            >
              View our three engagements <ArrowRight className="h-4 w-4" />
            </Link>
            <button
              onClick={() => onOpenConsultation()}
              className="amp-focus-ring-on-navy inline-flex items-center gap-2 px-8 h-12 font-sans font-semibold text-base rounded border transition-colors duration-200"
              style={{ backgroundColor: "transparent", color: "white", borderColor: "rgba(255,255,255,0.4)" }}
              onMouseOver={(ev) => { (ev.currentTarget as HTMLButtonElement).style.borderColor = "rgba(255,255,255,0.8)"; }}
              onMouseOut={(ev) => { (ev.currentTarget as HTMLButtonElement).style.borderColor = "rgba(255,255,255,0.4)"; }}
              data-testid="button-what-we-believe-consultation"
            >
              Book a Discovery Call
            </button>
          </div>
        </div>
      </section>
    </div>
  );
});
