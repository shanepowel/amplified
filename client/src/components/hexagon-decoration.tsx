'use client';

import React from 'react';

interface HexagonDecorationProps {
  className?: string;
  colour?: 'primary' | 'accent' | 'muted';
  size?: 'sm' | 'md' | 'lg';
  opacity?: number;
}

export const HexagonDecoration: React.FC<HexagonDecorationProps> = ({
  className = '',
  colour = 'primary',
  size = 'md',
  opacity = 0.1
}) => {
  const sizeMap = {
    sm: 40,
    md: 80,
    lg: 120
  };

  const colorMap = {
    primary: 'hsl(265, 67.6%, 37.4%)',
    accent: 'hsl(5.8, 97.7%, 57.5%)',
    muted: 'hsl(0, 0%, 50%)'
  };

  const dimension = sizeMap[size];

  return (
    <svg
      width={dimension}
      height={dimension}
      viewBox={`0 0 ${dimension} ${dimension}`}
      className={`absolute pointer-events-none ${className}`}
      style={{ opacity }}
      aria-hidden="true"
    >
      <polygon
        points={`${dimension / 2},0 ${dimension},${dimension / 4} ${dimension},${(dimension * 3) / 4} ${dimension / 2},${dimension} 0,${(dimension * 3) / 4} 0,${dimension / 4}`}
        fill={colorMap[colour]}
        stroke={colorMap[colour]}
        strokeWidth="1"
      />
    </svg>
  );
};
