'use client';

import { useState, useEffect } from "react";
import Link from "next/link";
import { ChevronDown, ChevronUp, ArrowRight } from "lucide-react";

const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    const cookieConsent = localStorage.getItem("cookie-consent");
    if (!cookieConsent) {
      const timer = setTimeout(() => setIsVisible(true), 800);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAcceptAll = () => {
    localStorage.setItem("cookie-consent", "all");
    localStorage.setItem("analytics-cookies", "accepted");
    setIsVisible(false);
  };

  const handleNecessaryOnly = () => {
    localStorage.setItem("cookie-consent", "necessary");
    localStorage.setItem("analytics-cookies", "rejected");
    setIsVisible(false);
  };

  const handleRejectAll = () => {
    localStorage.setItem("cookie-consent", "rejected");
    localStorage.setItem("analytics-cookies", "rejected");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50"
      role="dialog"
      aria-label="Cookie consent"
      aria-modal="true"
    >
      <div
        style={{
          backgroundColor: "#181F4F",
          borderTop: "3px solid #F85C70",
        }}
      >
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-6 items-start">

            <div>
              <div className="flex items-start gap-3 mb-3">
                <div
                  className="w-1 h-6 rounded flex-shrink-0 mt-0.5"
                  style={{ backgroundColor: "#F85C70" }}
                />
                <p
                  className="font-display text-lg text-white"
                  style={{ fontWeight: 400 }}
                >
                  This site uses cookies
                </p>
              </div>
              <p
                className="font-sans text-sm leading-relaxed mb-4 max-w-[680px]"
                style={{ color: "rgba(255,255,255,0.7)" }}
              >
                We use strictly necessary cookies to make this site work. With your consent, we
                also set optional analytics cookies to help us understand how you use the site so
                we can improve it. You can accept or reject optional cookies below. Your choice
                will be saved for 12 months.
              </p>

              <button
                onClick={() => setShowDetails(!showDetails)}
                className="amp-focus-ring-on-navy inline-flex items-center gap-1.5 font-sans text-sm font-semibold transition-colors duration-150 rounded"
                style={{ color: "#F85C70" }}
                aria-expanded={showDetails}
                aria-label={showDetails ? "Hide cookie details" : "View cookie details"}
                data-testid="button-cookie-details"
              >
                {showDetails ? (
                  <>Hide cookie details <ChevronUp className="h-3.5 w-3.5" /></>
                ) : (
                  <>View cookie details <ChevronDown className="h-3.5 w-3.5" /></>
                )}
              </button>

              {showDetails && (
                <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div
                    className="p-4 rounded"
                    style={{ backgroundColor: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)" }}
                  >
                    <p className="font-sans text-sm font-bold text-white mb-1">Strictly necessary</p>
                    <p className="font-sans text-xs leading-relaxed" style={{ color: "rgba(255,255,255,0.65)" }}>
                      Essential for the website to function. These cannot be turned off. They
                      include security, session management, and your cookie preference itself.
                      No personal data is shared with third parties.
                    </p>
                    <p className="font-mono text-xs mt-2" style={{ color: "#F85C70" }}>Always active</p>
                  </div>
                  <div
                    className="p-4 rounded"
                    style={{ backgroundColor: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)" }}
                  >
                    <p className="font-sans text-sm font-bold text-white mb-1">Analytics</p>
                    <p className="font-sans text-xs leading-relaxed" style={{ color: "rgba(255,255,255,0.65)" }}>
                      Help us understand which pages are visited and how users move through
                      the site. Data is aggregated and anonymised. Used by services such as
                      Mailchimp for visitor tracking. Only set with your consent.
                    </p>
                    <p className="font-mono text-xs mt-2" style={{ color: "rgba(255,255,255,0.4)" }}>Requires consent</p>
                  </div>
                </div>
              )}
            </div>

            <div className="flex flex-col gap-3 lg:min-w-[220px]">
              <button
                onClick={handleAcceptAll}
                className="amp-focus-ring-on-navy w-full inline-flex items-center justify-center gap-2 px-6 h-11 font-sans font-bold text-sm rounded transition-colors duration-150"
                style={{ backgroundColor: "#F85C70", color: "#181F4F" }}
                onMouseOver={(e) => ((e.currentTarget as HTMLButtonElement).style.backgroundColor = "#d94a5e")}
                onMouseOut={(e) => ((e.currentTarget as HTMLButtonElement).style.backgroundColor = "#F85C70")}
                data-testid="button-accept-all-cookies"
              >
                Accept all <ArrowRight className="h-3.5 w-3.5" />
              </button>

              <button
                onClick={handleNecessaryOnly}
                className="amp-focus-ring-on-navy w-full inline-flex items-center justify-center gap-2 px-6 h-11 font-sans font-bold text-sm rounded transition-colors duration-150"
                style={{
                  border: "1px solid rgba(255,255,255,0.3)",
                  color: "#ffffff",
                  backgroundColor: "transparent",
                }}
                onMouseOver={(e) => ((e.currentTarget as HTMLButtonElement).style.backgroundColor = "rgba(255,255,255,0.08)")}
                onMouseOut={(e) => ((e.currentTarget as HTMLButtonElement).style.backgroundColor = "transparent")}
                data-testid="button-accept-necessary-cookies"
              >
                Necessary only
              </button>

              <button
                onClick={handleRejectAll}
                className="amp-focus-ring-on-navy w-full inline-flex items-center justify-center gap-2 px-6 h-11 font-sans font-bold text-sm rounded transition-colors duration-150"
                style={{
                  border: "1px solid rgba(255,255,255,0.15)",
                  color: "rgba(255,255,255,0.55)",
                  backgroundColor: "transparent",
                }}
                onMouseOver={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.color = "rgba(255,255,255,0.8)";
                  (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(255,255,255,0.3)";
                }}
                onMouseOut={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.color = "rgba(255,255,255,0.55)";
                  (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(255,255,255,0.15)";
                }}
                data-testid="button-reject-all-cookies"
              >
                Reject all optional
              </button>

              <Link href="/privacy">
                <span
                  className="block text-center font-sans text-xs underline underline-offset-2 cursor-pointer transition-colors duration-150"
                  style={{ color: "rgba(255,255,255,0.4)" }}
                  onMouseOver={(e) => ((e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.7)")}
                  onMouseOut={(e) => ((e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.4)")}
                >
                  Privacy Policy
                </span>
              </Link>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;
