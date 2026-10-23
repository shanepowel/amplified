'use client';

import { useEffect, useRef, useState } from "react";
import { X, Send, Sparkles } from "lucide-react";
import { AmpButton, Eyebrow, Text } from "@/components/system";

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
        <AmpButton
          type="button"
          variant="navy"
          size="lg"
          className="!fixed bottom-6 right-6 z-40 !h-12 !rounded-full !px-5 shadow-lg transition-transform duration-200 hover:scale-[1.03]"
          onClick={() => setOpen(true)}
          data-testid="button-ask-amplified-open"
          aria-label={`Ask Amplified about ${engagementName}`}
        >
          <Sparkles className="h-4 w-4 text-[#F85C70]" />
          Ask Amplified
        </AmpButton>
      )}

      {/* Panel */}
      {open && (
        <div
          className="fixed bottom-6 right-6 z-50 flex max-h-[min(640px,calc(100vh-48px))] w-[min(420px,calc(100vw-32px))] flex-col rounded-lg border border-[#E5E3EE] bg-white shadow-2xl"
          role="dialog"
          aria-label="Ask Amplified assistant"
          data-testid="dialog-ask-amplified"
        >
          {/* Header */}
          <div className="flex items-start justify-between rounded-t-lg bg-[#181F4F] p-4">
            <div>
              <Eyebrow className="mb-1 !text-[10px]">Ask Amplified</Eyebrow>
              <Text variant="small" tone="white" className="font-display !text-base font-normal">
                Questions about {engagementName}?
              </Text>
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
            className="flex-1 space-y-4 overflow-y-auto bg-[#F8F7FB] p-4"
          >
            {turns.length === 0 && (
              <div className="space-y-3">
                <Text variant="small" tone="muted">
                  Grounded answers from the engagement page, our manifesto, and our case studies.
                  No sales pitch — if it isn&apos;t a fit, we&apos;ll say so.
                </Text>
                <div className="space-y-2">
                  {STARTER_QUESTIONS.map((q) => (
                    <button
                      key={q}
                      type="button"
                      onClick={() => ask(q)}
                      className="amp-focus-ring-on-navy w-full rounded border border-[#E5E3EE] bg-white px-3 py-2 text-left font-sans text-sm text-[#181F4F] transition-colors hover:bg-white"
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
                  className={`max-w-[85%] whitespace-pre-wrap rounded-lg px-3 py-2 font-sans text-sm leading-relaxed ${
                    t.role === "user"
                      ? "bg-[#181F4F] text-white"
                      : "border border-[#E5E3EE] bg-white text-[#181F4F]"
                  }`}
                >
                  {t.content}
                </div>
              </div>
            ))}

            {loading && (
              <div className="flex justify-start">
                <div className="rounded-lg border border-[#E5E3EE] bg-white px-3 py-2 font-sans text-sm text-[#65677B]">
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
                className="rounded bg-[#FDECEE] px-3 py-2 font-sans text-xs text-[#B0364B]"
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
            className="space-y-2 border-t border-[#E5E3EE] bg-white p-3"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email (optional, for sales follow-up)"
              className="amp-focus-ring-on-navy h-9 w-full rounded border border-[#E5E3EE] px-3 font-sans text-xs text-[#181F4F]"
              data-testid="input-ask-amplified-email"
              autoComplete="email"
            />
            <div className="flex gap-2">
              <input
                type="text"
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                placeholder="Ask about fit, scope, timeline…"
                className="amp-focus-ring-on-navy h-10 flex-1 rounded border border-[#E5E3EE] px-3 font-sans text-sm text-[#181F4F]"
                disabled={loading}
                data-testid="input-ask-amplified-question"
              />
              <AmpButton
                type="submit"
                disabled={loading || !question.trim()}
                size="sm"
                className="!h-10 !w-10 !shrink-0 !px-0"
                aria-label="Send question"
                data-testid="button-ask-amplified-send"
              >
                <Send className="h-4 w-4" />
              </AmpButton>
            </div>
            <p className="font-mono text-[10px] uppercase tracking-[0.1em] text-[#9092A4]">
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
