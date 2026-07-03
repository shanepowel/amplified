'use client';

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Calendar, X, MessageCircle } from "lucide-react";

interface FloatingCTAProps {
  onOpenConsultation: () => void;
}

export function FloatingCTA({ onOpenConsultation }: FloatingCTAProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const shouldShow = scrollY > 500 && !isDismissed;
      setIsVisible(shouldShow);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isDismissed]);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {isExpanded && (
        <div className="bg-background/95 backdrop-blur-lg rounded-2xl shadow-strong border border-border/50 p-4 animate-in slide-in-from-bottom-2 fade-in duration-300">
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm font-medium text-foreground">Ready to get amplified?</span>
            <button
              onClick={() => setIsExpanded(false)}
              className="amp-focus-ring text-muted-foreground hover:text-foreground transition-colors rounded p-0.5"
              aria-label="Close consultation menu"
              data-testid="floating-cta-close"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
          <div className="flex flex-col gap-2">
            <Button
              size="sm"
              className="bg-primary text-primary-foreground hover:bg-primary/90 w-full justify-start"
              onClick={() => {
                onOpenConsultation();
                setIsExpanded(false);
              }}
              data-testid="floating-cta-book-call"
            >
              <Calendar className="h-4 w-4 mr-2" />
              Book Discovery Call
            </Button>
            <p className="text-xs text-muted-foreground text-center">
              Response within 2 hours
            </p>
          </div>
        </div>
      )}
      
      <Button
        size="lg"
        className="rounded-full h-14 w-14 bg-primary text-primary-foreground hover:bg-primary/90 shadow-glow hover:shadow-strong transition-all duration-300 hover:scale-105"
        onClick={() => setIsExpanded(!isExpanded)}
        aria-label="Book consultation"
        data-testid="floating-cta-trigger"
      >
        {isExpanded ? (
          <X className="h-6 w-6" />
        ) : (
          <MessageCircle className="h-6 w-6" />
        )}
      </Button>
    </div>
  );
}
