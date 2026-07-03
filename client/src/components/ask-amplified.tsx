'use client';

import { useEffect, useRef, useState } from "react";
import { MessageCircle, X, Send, Sparkles } from "lucide-react";

interface Props {
  engagementSlug: string;
  engagementName: string;
}

interface Turn {
  role: "user" | "assistant";
  content: string;
}

const STARTER_QUESTIONS = [
  "Is this engagement right for my situation?",
  "How does this differ from the other two engagements?",
  "What does pricing depend on?",
  "What happens after the engagement ends?",
];

export default function AskAmplified({ engagementSlug, engagementName }: Props) {
  const [open, setOpen] = useState(false);
  const [question, setQuestion] = useState("");
  const [email, setEmail] = useState("");
  const [turns, setTurns] = useState<Turn[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [turns, loading]);

  async function ask(text: string) {
    const trimmed = text.trim();
    if (!trimmed || loading) return;
    setError(null);
    const nextTurns: Turn[] = [...turns, { role: "user", content: trimmed }];
    setTurns(nextTurns);
    setQuestion("");
    setLoading(true);

    try {
      const res = await fetch("/api/ask-amplified", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          question: trimmed,
          engagementSlug,
          email: email || undefined,
          history: turns.slice(-6),
        }),
      });
      const data = await res.json();
      if (!data.success) throw new Error(data.error || "Request failed");
      setTurns([...nextTurns, { role: "assistant", content: data.answer }]);
    } catch (e) {
      const msg = e instanceof Error ? e.message : "Something went wrong";
      setError(msg);
      setTurns(nextTurns);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      {/* Launcher button */}
      {!open && (
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="amp-focus-ring-on-navy fixed z-40 bottom-6 right-6 inline-flex items-center gap-2 px-5 h-12 font-sans font-semibold text-sm rounded-full shadow-lg transition-transform duration-200 hover:scale-[1.03]"
          style={{ backgroundColor: "#181F4F", color: "#FFFFFF" }}
          data-testid="button-ask-amplified-open"
          aria-label={`Ask Amplified about ${engagementName}`}
        >
          <Sparkles className="h-4 w-4" style={{ color: "#F85C70" }} />
          Ask Amplified
        </button>
      )}

      {/* Panel */}
      {open && (
        <div
          className="fixed z-50 bottom-6 right-6 w-[min(420px,calc(100vw-32px))] max-h-[min(640px,calc(100vh-48px))] flex flex-col rounded-lg shadow-2xl border"
          style={{ backgroundColor: "#FFFFFF", borderColor: "#E5E3EE" }}
          role="dialog"
          aria-label="Ask Amplified assistant"
          data-testid="dialog-ask-amplified"
        >
          {/* Header */}
          <div
            className="flex items-start justify-between p-4 rounded-t-lg"
            style={{ backgroundColor: "#181F4F" }}
          >
            <div>
              <p
                className="font-mono text-[10px] uppercase tracking-[0.15em] mb-1"
                style={{ color: "#F85C70" }}
              >
                Ask Amplified
              </p>
              <h3 className="font-display text-base text-white" style={{ fontWeight: 400 }}>
                Questions about {engagementName}?
              </h3>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="amp-focus-ring-on-navy rounded p-1 transition-colors hover:bg-white/10"
              aria-label="Close Ask Amplified"
              data-testid="button-ask-amplified-close"
            >
              <X className="h-5 w-5 text-white" />
            </button>
          </div>

          {/* Conversation */}
          <div
            ref={scrollRef}
            className="flex-1 overflow-y-auto p-4 space-y-4"
            style={{ backgroundColor: "#F8F7FB" }}
          >
            {turns.length === 0 && (
              <div className="space-y-3">
                <p className="font-sans text-sm leading-relaxed" style={{ color: "#65677B" }}>
                  Grounded answers from the engagement page, our manifesto, and our case studies.
                  No sales pitch — if it isn&apos;t a fit, we&apos;ll say so.
                </p>
                <div className="space-y-2">
                  {STARTER_QUESTIONS.map((q) => (
                    <button
                      key={q}
                      type="button"
                      onClick={() => ask(q)}
                      className="amp-focus-ring-on-navy w-full text-left px-3 py-2 rounded border font-sans text-sm transition-colors hover:bg-white"
                      style={{ borderColor: "#E5E3EE", color: "#181F4F", backgroundColor: "#FFFFFF" }}
                      data-testid={`button-ask-amplified-starter-${q.length}`}
                    >
                      {q}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {turns.map((t, i) => (
              <div
                key={i}
                className={`flex ${t.role === "user" ? "justify-end" : "justify-start"}`}
                data-testid={`message-ask-amplified-${t.role}-${i}`}
              >
                <div
                  className="max-w-[85%] px-3 py-2 rounded-lg font-sans text-sm leading-relaxed whitespace-pre-wrap"
                  style={
                    t.role === "user"
                      ? { backgroundColor: "#181F4F", color: "#FFFFFF" }
                      : { backgroundColor: "#FFFFFF", color: "#181F4F", border: "1px solid #E5E3EE" }
                  }
                >
                  {t.content}
                </div>
              </div>
            ))}

            {loading && (
              <div className="flex justify-start">
                <div
                  className="px-3 py-2 rounded-lg font-sans text-sm"
                  style={{ backgroundColor: "#FFFFFF", color: "#65677B", border: "1px solid #E5E3EE" }}
                >
                  <span className="inline-flex items-center gap-1">
                    <span className="amp-pulse-dot" />
                    <span className="amp-pulse-dot" style={{ animationDelay: "0.15s" }} />
                    <span className="amp-pulse-dot" style={{ animationDelay: "0.3s" }} />
                  </span>
                </div>
              </div>
            )}

            {error && (
              <div
                className="px-3 py-2 rounded font-sans text-xs"
                style={{ backgroundColor: "#FDECEE", color: "#B0364B" }}
                role="alert"
              >
                {error}
              </div>
            )}
          </div>

          {/* Composer */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              ask(question);
            }}
            className="p-3 border-t space-y-2"
            style={{ borderColor: "#E5E3EE", backgroundColor: "#FFFFFF" }}
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email (optional, for sales follow-up)"
              className="amp-focus-ring-on-navy w-full px-3 h-9 font-sans text-xs rounded border"
              style={{ borderColor: "#E5E3EE", color: "#181F4F" }}
              data-testid="input-ask-amplified-email"
              autoComplete="email"
            />
            <div className="flex gap-2">
              <input
                type="text"
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                placeholder="Ask about fit, scope, timeline…"
                className="amp-focus-ring-on-navy flex-1 px-3 h-10 font-sans text-sm rounded border"
                style={{ borderColor: "#E5E3EE", color: "#181F4F" }}
                disabled={loading}
                data-testid="input-ask-amplified-question"
              />
              <button
                type="submit"
                disabled={loading || !question.trim()}
                className="amp-focus-ring-on-navy inline-flex items-center justify-center w-10 h-10 rounded transition-colors disabled:opacity-50"
                style={{ backgroundColor: "#F85C70", color: "#181F4F" }}
                aria-label="Send question"
                data-testid="button-ask-amplified-send"
              >
                <Send className="h-4 w-4" />
              </button>
            </div>
            <p className="font-mono text-[10px] uppercase tracking-[0.1em]" style={{ color: "#9092A4" }}>
              AI assistant · answers grounded in this site
            </p>
          </form>

          <style jsx>{`
            .amp-pulse-dot {
              display: inline-block;
              width: 6px;
              height: 6px;
              border-radius: 50%;
              background-color: #181f4f;
              opacity: 0.4;
              margin-right: 3px;
              animation: amp-pulse 1.2s ease-in-out infinite;
            }
            @keyframes amp-pulse {
              0%, 80%, 100% { transform: scale(0.6); opacity: 0.4; }
              40% { transform: scale(1); opacity: 1; }
            }
          `}</style>
        </div>
      )}
    </>
  );
}
