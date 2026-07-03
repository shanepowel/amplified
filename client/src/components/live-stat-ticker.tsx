'use client';

import { useEffect, useState } from "react";

interface StatItem {
  label: string;
  value: string;
}

const stats: StatItem[] = [
  { label: "Client Satisfaction", value: "94%" },
  { label: "Projects Delivered", value: "45+" },
  { label: "Team Mobilisation", value: "72h" },
  { label: "Avg Cost Reduction", value: "18%" },
  { label: "Productivity Gains", value: "15%" },
];

export function LiveStatTicker() {
  const [isPaused, setIsPaused] = useState(false);
  
  const duplicatedStats = [...stats, ...stats];

  return (
    <div 
      className="w-full overflow-hidden bg-primary/5 border-y border-primary/10 py-3"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div 
        className={`flex gap-12 ${isPaused ? '' : 'stat-ticker'}`}
        style={{ width: 'max-content' }}
      >
        {duplicatedStats.map((stat, index) => (
          <div key={index} className="flex items-center gap-3 px-4">
            <span className="text-lg font-bold text-primary">{stat.value}</span>
            <span className="text-sm text-muted-foreground whitespace-nowrap">{stat.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function CompactStatTicker() {
  return (
    <div className="flex items-center gap-6 flex-wrap justify-center py-4">
      {stats.slice(0, 4).map((stat, index) => (
        <div key={index} className="flex items-center gap-2">
          <span className="text-sm font-bold text-primary">{stat.value}</span>
          <span className="text-xs text-muted-foreground">{stat.label}</span>
        </div>
      ))}
    </div>
  );
}
