"use client";

import React from "react";

interface ProgressBarProps {
  label: string;
  current: number;
  target: number;
  unit?: string;
  color?: "emerald" | "teal";
  showPercentage?: boolean;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({
  label,
  current,
  target,
  unit = "",
  color = "emerald",
  showPercentage = true,
}) => {
  const percentage = Math.min((current / target) * 100, 100);
  
  const colorClasses = {
    emerald: "from-green-400 via-green-500 to-green-600",
    teal: "from-green-300 via-green-400 to-green-500", 
  }[color];

  const glowClass = {
    emerald: "shadow-glow-emerald",
    teal: "shadow-glow-teal",
  }[color];

  return (
    <div className="w-full space-y-4">
      {/* Header */}
      <div className="flex justify-between items-center">
        <span className="text-base font-semibold text-slate-200">{label}</span>
        <div className="text-right">
          <div className="text-sm text-slate-300 font-medium">
            {current}{unit} / {target}{unit}
          </div>
          {showPercentage && (
            <div className="text-xs text-slate-400">
              {percentage.toFixed(1)}% complete
            </div>
          )}
        </div>
      </div>
      
      {/* Progress Bar */}
      <div className="relative">
        {/* Background track */}
        <div className="w-full bg-slate-800/50 rounded-full h-4 backdrop-blur-sm border border-slate-700/50 overflow-hidden">
          {/* Progress fill */}
          <div
            className={`h-full bg-gradient-to-r ${colorClasses} rounded-full transition-all duration-1000 ease-out relative overflow-hidden ${glowClass} progress-glow`}
            style={{ width: `${percentage}%` }}
          >
            {/* Shimmer overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 animate-shimmer"></div>
            
            {/* Inner highlight */}
            <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-transparent to-transparent rounded-full"></div>
          </div>
        </div>

        {/* Milestone indicators (optional) */}
        {target > 0 && (
          <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
            {[25, 50, 75].map((milestone) => (
              <div
                key={milestone}
                className="absolute top-0 w-0.5 h-full bg-slate-600/50"
                style={{ left: `${milestone}%` }}
              >
                <div className="absolute -top-1 -left-1 w-3 h-3 bg-slate-600/70 rounded-full border border-slate-500"></div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Achievement message */}
      {percentage >= 100 && (
        <div className="flex items-center justify-center text-taka-primary-400 font-medium text-sm">
          <span className="mr-2">🎉</span>
          Goal achieved!
        </div>
      )}
    </div>
  );
};
