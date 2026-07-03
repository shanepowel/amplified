'use client';

import { useState, useEffect, useRef, ReactNode } from "react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  duration?: number;
}

export function ScrollReveal({
  children,
  className = "",
  delay = 0,
  direction = "up",
  duration = 600,
}: ScrollRevealProps) {
  const { ref, isVisible } = useScrollAnimation();

  const getTransform = () => {
    switch (direction) {
      case "up":
        return "translateY(30px)";
      case "down":
        return "translateY(-30px)";
      case "left":
        return "translateX(30px)";
      case "right":
        return "translateX(-30px)";
      case "none":
        return "none";
      default:
        return "translateY(30px)";
    }
  };

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "none" : getTransform(),
        transition: `opacity ${duration}ms ease-out ${delay}ms, transform ${duration}ms ease-out ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

interface StaggerRevealProps {
  children: ReactNode[];
  className?: string;
  staggerDelay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
}

export function StaggerReveal({
  children,
  className = "",
  staggerDelay = 100,
  direction = "up",
}: StaggerRevealProps) {
  return (
    <div className={className}>
      {children.map((child, index) => (
        <ScrollReveal key={index} delay={index * staggerDelay} direction={direction}>
          {child}
        </ScrollReveal>
      ))}
    </div>
  );
}

interface CountUpStatProps {
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
  className?: string;
  valueClassName?: string;
  labelClassName?: string;
}

export function CountUpStat({ 
  value, 
  suffix = "", 
  prefix = "", 
  label, 
  className = "",
  valueClassName = "text-4xl md:text-5xl font-bold text-primary",
  labelClassName = "text-muted-foreground"
}: CountUpStatProps) {
  const { ref, isVisible } = useScrollAnimation();
  const [count, setCount] = useState(0);
  const hasStarted = useRef(false);

  useEffect(() => {
    if (!isVisible || hasStarted.current) return;
    hasStarted.current = true;

    const duration = 2000;
    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentValue = Math.floor(value * easeOutQuart);
      
      setCount(currentValue);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isVisible, value]);
  
  return (
    <div ref={ref} className={className}>
      <div className={valueClassName}>
        {prefix}{count}{suffix}
      </div>
      <p className={labelClassName}>{label}</p>
    </div>
  );
}
