'use client';

import Link from "next/link";
import Image from "next/image";
import { memo } from "react";
import { Linkedin, Mail } from "lucide-react";
import { SiInstagram, SiYoutube, SiPinterest } from "react-icons/si";
import amplifiedLogo from "@assets/amplified-logo-pink-purple.png";

const Footer = memo(function Footer() {
  return (
    <footer
      className="font-sans"
      style={{ backgroundColor: "#181F4F", borderTop: "1px solid rgba(96,38,106,0.4)" }}
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 mb-10 pb-10 border-b" style={{ borderColor: "rgba(96,38,106,0.3)" }}>
          {/* Brand */}
          <div className="md:col-span-2">
            <Image
              src={amplifiedLogo}
              alt="Amplified"
              sizes="160px"
              className="!h-10 !w-auto mb-4 brightness-200"
              style={{ objectFit: "contain" }}
              data-testid="footer-logo"
            />
            <p className="text-sm mb-2" style={{ color: "rgba(255,255,255,0.6)" }}>
              Built for industries where rigour is not optional.
            </p>
            <p className="text-sm mb-1" style={{ color: "rgba(255,255,255,0.4)" }}>
              London, UK
            </p>
            <a
              href="mailto:hello@amplified.co.uk"
              className="text-sm transition-colors"
              style={{ color: "rgba(255,255,255,0.4)" }}
              onMouseOver={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "#F85C70")}
              onMouseOut={(e) =>
                ((e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.4)")
              }
            >
              hello@amplified.co.uk
            </a>
          </div>

          {/* Services */}
          <div>
            <p
              className="font-mono text-xs uppercase tracking-[0.1em] mb-4"
              style={{ color: "#F85C70" }}
            >
              Services
            </p>
            <ul className="space-y-2">
              {[
                { label: "AI Governance", href: "/ai-governance" },
                { label: "AI Implementation", href: "/ai-implementation" },
                { label: "Structured Delivery", href: "/structured-delivery" },
                { label: "Capability Building", href: "/capability" },
                { label: "Autonomous Organisations", href: "/org-design" },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm transition-colors"
                    style={{ color: "rgba(255,255,255,0.5)" }}
                    onMouseOver={(e) =>
                      ((e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.9)")
                    }
                    onMouseOut={(e) =>
                      ((e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.5)")
                    }
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <p
              className="font-mono text-xs uppercase tracking-[0.1em] mb-4"
              style={{ color: "#F85C70" }}
            >
              Company
            </p>
            <ul className="space-y-2">
              {[
                { label: "How We Work", href: "/how-we-work" },
                { label: "Our Work", href: "/our-work" },
                { label: "Insights", href: "/insights" },
                { label: "Careers", href: "/careers" },
                { label: "Contact", href: "/contact" },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm transition-colors"
                    style={{ color: "rgba(255,255,255,0.5)" }}
                    onMouseOver={(e) =>
                      ((e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.9)")
                    }
                    onMouseOut={(e) =>
                      ((e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.5)")
                    }
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Who we work with */}
          <div>
            <p
              className="font-mono text-xs uppercase tracking-[0.1em] mb-4"
              style={{ color: "#F85C70" }}
            >
              Who We Work With
            </p>
            <ul className="space-y-2">
              {[
                { label: "For CIOs", href: "/for-cios" },
                { label: "For Delivery Directors", href: "/for-delivery-directors" },
                { label: "For Digital Leads", href: "/for-digital-leads" },
                { label: "Infrastructure", href: "/sectors/infrastructure" },
                { label: "Financial Services", href: "/sectors/financial-services" },
                { label: "Energy & Utilities", href: "/sectors/energy-utilities" },
                { label: "Public Sector", href: "/sectors/public-sector" },
                { label: "Technology & Private Sector", href: "/sectors/technology" },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm transition-colors"
                    style={{ color: "rgba(255,255,255,0.5)" }}
                    onMouseOver={(e) =>
                      ((e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.9)")
                    }
                    onMouseOut={(e) =>
                      ((e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.5)")
                    }
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-6">
            <p className="text-xs" style={{ color: "rgba(255,255,255,0.3)" }}>
              © 2026 Amplified Ltd · London, UK · Company No. 08589016
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            {[
              { label: "Privacy", href: "/privacy" },
              { label: "Terms", href: "/terms" },
              { label: "Accessibility", href: "/accessibility" },
              { label: "Modern Slavery", href: "/modern-slavery" },
              { label: "Press", href: "/press" },
            ].map((link, i) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-xs transition-colors"
                style={{ color: "rgba(255,255,255,0.3)" }}
                onMouseOver={(e) =>
                  ((e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.7)")
                }
                onMouseOut={(e) =>
                  ((e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.3)")
                }
                data-testid={`footer-link-${link.label.toLowerCase().replace(/\s+/g, "-")}`}
              >
                {link.label}
              </Link>
            ))}

            <div className="flex items-center gap-3 ml-2">
              {[
                { href: "https://linkedin.com/company/amplifiedlimited/", label: "LinkedIn", icon: <Linkedin className="h-4 w-4" /> },
                { href: "https://www.instagram.com/amplifiedguide", label: "Instagram", icon: <SiInstagram className="h-4 w-4" /> },
                { href: "https://www.youtube.com/@amplifiedguide", label: "YouTube", icon: <SiYoutube className="h-4 w-4" /> },
                { href: "https://uk.pinterest.com/AmplifiedGuide/", label: "Pinterest", icon: <SiPinterest className="h-4 w-4" /> },
                { href: "mailto:hello@amplified.co.uk", label: "Email", icon: <Mail className="h-4 w-4" /> },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.href.startsWith("mailto") ? undefined : "_blank"}
                  rel={s.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                  aria-label={s.label}
                  style={{ color: "rgba(255,255,255,0.3)" }}
                  onMouseOver={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "#F85C70")}
                  onMouseOut={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.3)")}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
});

export default Footer;
