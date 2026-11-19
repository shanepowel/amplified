'use client';

import Image from "next/image";
import amplifiedLogo from "@assets/amplified-logo-pink-purple.png";
import { cn } from "@/lib/utils";

interface HeroBrandProps {
  centerAlign?: boolean;
  size?: "small" | "medium" | "large";
  className?: string;
  children?: React.ReactNode;
  /** @deprecated Decorative infrastructure marks removed — ignored. */
  showVisualElements?: boolean;
}

const logoHeights = {
  small: "h-8 sm:h-9",
  medium: "h-9 sm:h-10",
  large: "h-10 sm:h-12",
} as const;

/**
 * Compact brand mark for hero/intro slots.
 * Wordmark only — no oversized decorative layers.
 */
export function HeroBrand({
  centerAlign = false,
  size = "medium",
  className,
  children,
}: HeroBrandProps) {
  return (
    <div
      className={cn(
        "relative flex flex-col",
        centerAlign ? "items-center text-center" : "items-start text-left",
        className,
      )}
    >
      <Image
        src={amplifiedLogo}
        alt="bmkrs"
        priority
        sizes="(max-width: 640px) 120px, 160px"
        className={cn(
          logoHeights[size],
          "w-auto object-contain",
          centerAlign && "mx-auto",
        )}
        data-testid="img-hero-brand-logo"
      />
      {children ? <div className="mt-4">{children}</div> : null}
    </div>
  );
}
