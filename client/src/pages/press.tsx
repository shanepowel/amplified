'use client';

import { Mail, Linkedin, Instagram, Youtube } from "lucide-react";
import { SiPinterest } from "react-icons/si";
import amplifiedLogo from "@assets/amplified-logo-pink-purple.png";

export default function Press() {
  const socialLinks = [
    {
      name: "LinkedIn",
      href: "https://linkedin.com/company/amplifiedlimited/",
      icon: Linkedin,
      handle: "amplifiedlimited",
      testId: "link-press-linkedin",
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/amplifiedguide",
      icon: Instagram,
      handle: "@amplifiedguide",
      testId: "link-press-instagram",
    },
    {
      name: "YouTube",
      href: "https://www.youtube.com/@amplifiedguide",
      icon: Youtube,
      handle: "@amplifiedguide",
      testId: "link-press-youtube",
    },
  ];

  const companyFacts = [
    ["Legal name", "AMPLIFIED LTD"],
    ["Company number", "08589016"],
    ["Incorporated", "28 June 2013"],
    ["Headquarters", "7 Bell Yard, London WC2A 2JR"],
    ["Additional office", "Porto, Portugal"],
    ["Industry classification", "Information technology consultancy (SIC 62020)"],
    ["Core positioning", "AI governance, structured delivery, and technology embedding for regulated industries"],
    ["Tagline", "Built for industries where rigour isn't optional."],
  ];

  const colours = [
    { name: "Deep Navy", hex: "#181F4F", role: "Primary brand colour" },
    { name: "Coral Red", hex: "#F85C70", role: "Accent and action colour" },
    { name: "Deep Purple", hex: "#60266A", role: "Secondary accent" },
    { name: "Slate Grey", hex: "#65677B", role: "Body text" },
  ];

  return (
    <div className="min-h-screen font-sans" style={{ backgroundColor: "#ffffff" }}>

      <section className="py-20 lg:py-28" style={{ backgroundColor: "#181F4F" }}>
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <p className="font-mono text-xs uppercase tracking-[0.15em] mb-5" style={{ color: "#F85C70" }}>
            Company
          </p>
          <h1
            className="font-display text-4xl md:text-5xl text-white mb-5"
            style={{ fontWeight: 400 }}
            data-testid="text-press-title"
          >
            Press Centre
          </h1>
          <p className="font-sans text-lg max-w-[520px]" style={{ color: "rgba(255,255,255,0.7)" }}>
            Media resources, company background, and press contact information for journalists
            and media professionals.
          </p>
        </div>
      </section>

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 space-y-20">

        <section>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.12em] mb-4" style={{ color: "#6B6E81" }}>
                About Amplified
              </p>
              <h2
                className="font-display text-3xl mb-6"
                style={{ color: "#181F4F", fontWeight: 400 }}
              >
                Who we are
              </h2>
              <div className="space-y-4">
                <p className="font-sans text-base leading-relaxed" style={{ color: "#65677B" }}>
                  AMPLIFIED LTD is an AI governance and technology consultancy focused on helping
                  delivery directors, CIOs, and digital leads implement new technologies
                  effectively inside regulated industries: infrastructure, energy, financial services,
                  public sector, and technology.
                </p>
                <p className="font-sans text-base leading-relaxed" style={{ color: "#65677B" }}>
                  Founded in June 2013, we are headquartered in London with operations in Porto,
                  Portugal. Our positioning is built on a single idea: that rigour and effective
                  technology adoption are not in tension. We make rigour the foundation of every
                  technology transformation we touch.
                </p>
                <p className="font-sans text-base leading-relaxed" style={{ color: "#65677B" }}>
                  Our six service lines span AI Governance (AMP 01), AI Implementation (AMP 02),
                  Structured Delivery (AMP 03), Capability Building (AMP 04), Coaching (AMP 05),
                  and Tech Build (AMP 06), supported by two ecosystem offerings: AmplifiedTeams
                  (stable, mobilised delivery teams) and ampStore (practitioner learning).
                </p>
              </div>
            </div>

            <div>
              <p className="font-mono text-xs uppercase tracking-[0.12em] mb-4" style={{ color: "#6B6E81" }}>
                Press contact
              </p>
              <h2
                className="font-display text-3xl mb-6"
                style={{ color: "#181F4F", fontWeight: 400 }}
              >
                Get in touch
              </h2>
              <div className="space-y-6">
                <div
                  className="p-6 rounded"
                  style={{ backgroundColor: "#F2F0F7" }}
                >
                  <p className="font-sans text-sm font-bold mb-1" style={{ color: "#181F4F" }}>Press enquiries</p>
                  <a
                    href="mailto:press@amplified.co.uk"
                    className="inline-flex items-center gap-2 font-sans text-sm transition-colors duration-150"
                    style={{ color: "#F85C70" }}
                    data-testid="link-press-email"
                  >
                    <Mail className="h-4 w-4 flex-shrink-0" />
                    press@amplified.co.uk
                  </a>
                  <p className="font-sans text-xs mt-2" style={{ color: "#65677B" }}>
                    For urgent media enquiries, include "URGENT" in the subject line. We aim to
                    respond within 4 hours during business hours.
                  </p>
                </div>
                <div
                  className="p-6 rounded"
                  style={{ backgroundColor: "#F2F0F7" }}
                >
                  <p className="font-sans text-sm font-bold mb-1" style={{ color: "#181F4F" }}>General enquiries</p>
                  <a
                    href="mailto:hello@amplified.co.uk"
                    className="inline-flex items-center gap-2 font-sans text-sm transition-colors duration-150"
                    style={{ color: "#F85C70" }}
                    data-testid="link-general-email"
                  >
                    <Mail className="h-4 w-4 flex-shrink-0" />
                    hello@amplified.co.uk
                  </a>
                  <p className="font-sans text-xs mt-2" style={{ color: "#65677B" }}>
                    Response time: within 1 working day.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <p className="font-mono text-xs uppercase tracking-[0.12em] mb-4" style={{ color: "#6B6E81" }}>
            Brand assets
          </p>
          <h2
            className="font-display text-3xl mb-10"
            style={{ color: "#181F4F", fontWeight: 400 }}
          >
            Logo and brand colours
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <p className="font-sans text-sm mb-4" style={{ color: "#65677B" }}>Primary logo</p>
              <div
                className="flex items-center justify-center p-10 rounded mb-4"
                style={{ backgroundColor: "#F2F0F7" }}
              >
                <img
                  src={amplifiedLogo.src}
                  alt="Amplified logo"
                  className="h-20"
                  data-testid="img-press-logo"
                />
              </div>
              <p className="font-sans text-xs" style={{ color: "#9597A5" }}>
                To request the full logo package including reversed, monochrome, and symbol-only
                variants, email press@amplified.co.uk.
              </p>
            </div>
            <div>
              <p className="font-sans text-sm mb-4" style={{ color: "#65677B" }}>Brand colours</p>
              <div className="grid grid-cols-1 gap-3">
                {colours.map((colour) => (
                  <div key={colour.hex} className="flex items-center gap-4">
                    <div
                      className="w-10 h-10 rounded flex-shrink-0"
                      style={{ backgroundColor: colour.hex, border: "1px solid #E5E3EE" }}
                    />
                    <div>
                      <p className="font-sans text-sm font-semibold" style={{ color: "#181F4F" }}>
                        {colour.name}
                      </p>
                      <p className="font-mono text-xs" style={{ color: "#9597A5" }}>
                        {colour.hex} &middot; {colour.role}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section>
          <p className="font-mono text-xs uppercase tracking-[0.12em] mb-4" style={{ color: "#6B6E81" }}>
            Company facts
          </p>
          <h2
            className="font-display text-3xl mb-10"
            style={{ color: "#181F4F", fontWeight: 400 }}
          >
            Key information
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border-l border-t" style={{ borderColor: "#E5E3EE" }}>
            {companyFacts.map(([label, value]) => (
              <div key={label} className="p-6 border-r border-b" style={{ borderColor: "#E5E3EE" }}>
                <p className="font-sans text-xs uppercase tracking-[0.08em] mb-1" style={{ color: "#9597A5" }}>
                  {label}
                </p>
                <p className="font-sans text-sm" style={{ color: "#181F4F" }}>
                  {value}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <p className="font-mono text-xs uppercase tracking-[0.12em] mb-4" style={{ color: "#6B6E81" }}>
            Social
          </p>
          <h2
            className="font-display text-3xl mb-8"
            style={{ color: "#181F4F", fontWeight: 400 }}
          >
            Follow Amplified
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-l border-t" style={{ borderColor: "#E5E3EE" }}>
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-6 border-r border-b flex items-center gap-4 transition-colors duration-150"
                style={{ borderColor: "#E5E3EE" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.backgroundColor = "#F9F8FC"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.backgroundColor = "transparent"; }}
                data-testid={link.testId}
              >
                <div
                  className="w-10 h-10 rounded flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: "#F2F0F7" }}
                >
                  <link.icon className="h-5 w-5" style={{ color: "#181F4F" }} />
                </div>
                <div>
                  <p className="font-sans text-sm font-bold" style={{ color: "#181F4F" }}>{link.name}</p>
                  <p className="font-sans text-xs" style={{ color: "#9597A5" }}>{link.handle}</p>
                </div>
              </a>
            ))}
            <a
              href="https://uk.pinterest.com/AmplifiedGuide/"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-6 border-r border-b flex items-center gap-4 transition-colors duration-150"
              style={{ borderColor: "#E5E3EE" }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.backgroundColor = "#F9F8FC"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.backgroundColor = "transparent"; }}
              data-testid="link-press-pinterest"
            >
              <div
                className="w-10 h-10 rounded flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: "#F2F0F7" }}
              >
                <SiPinterest className="h-5 w-5" style={{ color: "#181F4F" }} />
              </div>
              <div>
                <p className="font-sans text-sm font-bold" style={{ color: "#181F4F" }}>Pinterest</p>
                <p className="font-sans text-xs" style={{ color: "#9597A5" }}>AmplifiedGuide</p>
              </div>
            </a>
          </div>
        </section>

        <section>
          <p className="font-mono text-xs uppercase tracking-[0.12em] mb-4" style={{ color: "#6B6E81" }}>
            Usage guidelines
          </p>
          <h2
            className="font-display text-3xl mb-6"
            style={{ color: "#181F4F", fontWeight: 400 }}
          >
            Using our brand assets
          </h2>
          <p className="font-sans text-base leading-relaxed mb-6" style={{ color: "#65677B" }}>
            We welcome media coverage and are happy to provide assets and information to support
            your story. When using Amplified brand assets, please observe the following:
          </p>
          <ul className="space-y-3">
            {[
              "Use the official logo without modification, cropping, recolouring, or distortion.",
              "Maintain clear space around the logo equivalent to the height of the A in the wordmark.",
              "Do not place the logo on backgrounds that reduce legibility. Use the reversed (white) version on dark backgrounds.",
              "Use approved brand colours. Do not introduce substitute colours.",
              "Provide attribution when quoting Amplified materials or spokespeople.",
              "Contact press@amplified.co.uk before creating derivative works or using assets in advertising.",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span
                  className="flex-shrink-0 mt-2 w-1.5 h-1.5 rounded-full"
                  style={{ backgroundColor: "#F85C70" }}
                />
                <span className="font-sans text-base leading-relaxed" style={{ color: "#65677B" }}>
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </section>

      </div>
    </div>
  );
}
