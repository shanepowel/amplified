'use client';

import Image from "next/image";
import amplifiedLogo from "@assets/amplified-logo-pink-purple.png";
import infrastructureElement from "@assets/amplified-final-logo.png";

interface HeroBrandProps {
  showVisualElements?: boolean;
  centerAlign?: boolean;
  size?: "small" | "medium" | "large";
  className?: string;
  children?: React.ReactNode;
}

export function HeroBrand({ 
  showVisualElements = true, 
  centerAlign = false, 
  size = "medium",
  className = "",
  children 
}: HeroBrandProps) {
  const logoSizes = {
    small: "h-16 sm:h-20 md:h-24",
    medium: "h-20 sm:h-24 md:h-32", 
    large: "h-24 sm:h-32 md:h-40"
  };

  const taglineSizes = {
    small: "text-sm",
    medium: "text-lg",
    large: "text-base md:text-lg"
  };

  const alignmentClasses = centerAlign ? "text-center items-center" : "text-left items-start";

  return (
    <div className={`flex flex-col ${alignmentClasses} ${className}`}>
      {/* Official Amplified Logo */}
      <div className="mb-6">
        <Image
          src={amplifiedLogo}
          alt="Amplified. Business Operations Consulting"
          priority
          sizes="(max-width: 640px) 96px, (max-width: 768px) 128px, 160px"
          className={`${logoSizes[size]} !w-auto ${centerAlign ? 'mx-auto' : ''} drop-shadow-lg filter brightness-105 contrast-110`}
          style={{ objectFit: "contain", height: "100%" }}
          data-testid="img-hero-brand-logo"
        />
      </div>
      
      {/* Official Brand Tagline */}
      <div className="mb-8">
        <span 
          className={`inline-block text-primary ${taglineSizes[size]} font-semibold tracking-widest uppercase`} 
          data-testid="text-3xl md:text-4xl-brand-tagline"
        >
          analyse • activate • augment
        </span>
      </div>

      {/* Optional Visual Elements */}
      {showVisualElements && (
        <>
          {/* Infrastructure Brand Element. Optimized */}
          <div className={`${centerAlign ? 'flex justify-center' : 'flex justify-start'} mt-4 mb-6`}>
            <div className="relative w-48 h-12">
              <Image
                src={infrastructureElement}
                alt="Connected infrastructure supporting amplified operations"
                fill
                sizes="192px"
                className="object-contain rounded-lg opacity-30"
                data-testid="img-hero-infrastructure"
              />
            </div>
          </div>

          {/* Infrastructure Decorative Element. Optimized */}
          <div className={`absolute ${centerAlign ? 'left-1/2 transform -translate-x-1/2' : 'left-0'} -top-4 pointer-events-none`}>
            <div className="relative w-8 h-8 overflow-hidden">
              <Image
                src={infrastructureElement}
                alt=""
                aria-hidden="true"
                fill
                sizes="32px"
                className="object-contain animate-pulse rounded-full opacity-10"
                data-testid="img-hero-infrastructure-accent"
              />
            </div>
          </div>
        </>
      )}

      {/* Optional Children Content */}
      {children && (
        <div className="mt-4">
          {children}
        </div>
      )}
    </div>
  );
}