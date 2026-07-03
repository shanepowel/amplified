'use client';

import { ReactNode } from 'react';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';

interface LazySectionProps {
  children: ReactNode;
  fallback?: ReactNode;
  className?: string;
  rootMargin?: string;
  threshold?: number;
}

export function LazySection({
  children,
  fallback = <div className="min-h-[200px] bg-gray-50 animate-pulse" />,
  className,
  rootMargin = '100px',
  threshold = 0.1,
}: LazySectionProps) {
  const [ref, isIntersecting] = useIntersectionObserver({
    rootMargin,
    threshold,
    triggerOnce: true,
  });

  return (
    <div ref={ref} className={className}>
      {isIntersecting ? children : fallback}
    </div>
  );
}