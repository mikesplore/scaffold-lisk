"use client";

import React from "react";
import { ReactNode } from "react";

interface DashboardCardProps {
  title: string;
  value: string | number;
  subtitle?: string;
  icon: ReactNode;
  trend?: {
    value: number;
    isPositive: boolean;
  };
  className?: string;
  glowColor?: "emerald" | "amber" | "teal";
}

export const DashboardCard: React.FC<DashboardCardProps> = ({
  title,
  value,
  subtitle,
  icon,
  trend,
  className = "",
  glowColor = "emerald",
}) => {
  const glowClass = {
    emerald: "glow-emerald",
    amber: "glow-amber", 
    teal: "glow-teal",
  }[glowColor];

  const iconColorClass = {
    emerald: "text-taka-primary-400",
    amber: "text-taka-accent-400",
    teal: "text-taka-teal-400",
  }[glowColor];

  const gradientClass = {
    emerald: "from-taka-primary-500/20 to-taka-primary-600/20",
    amber: "from-taka-accent-500/20 to-taka-accent-600/20",
    teal: "from-taka-teal-500/20 to-taka-teal-600/20",
  }[glowColor];

  return (
    <div
      className={`glass glass-hover gradient-border p-8 ${glowClass} float-animation group cursor-pointer ${className}`}
      style={{ animationDelay: Math.random() * 3 + "s" }}
    >
      {/* Icon and Trend Section */}
      <div className="flex items-center justify-between mb-6">
        <div className={`p-4 rounded-2xl bg-gradient-to-br ${gradientClass} backdrop-blur-sm border border-white/10 group-hover:scale-110 transition-transform duration-300`}>
          <div className={iconColorClass}>
            {icon}
          </div>
        </div>
        {trend && (
          <div
            className={`flex items-center text-sm font-semibold px-3 py-1 rounded-full backdrop-blur-sm ${
              trend.isPositive 
                ? "text-taka-primary-400 bg-taka-primary-500/20" 
                : "text-red-400 bg-red-500/20"
            }`}
          >
            <span className="mr-1 text-lg">
              {trend.isPositive ? "↗" : "↘"}
            </span>
            {Math.abs(trend.value)}%
          </div>
        )}
      </div>
      
      {/* Content Section */}
      <div className="space-y-3">
        <h3 className="text-sm font-medium text-slate-300 uppercase tracking-wider">
          {title}
        </h3>
        <div className="text-4xl font-bold text-white group-hover:text-white transition-colors duration-300">
          {value}
        </div>
        {subtitle && (
          <p className="text-sm text-slate-400 leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>

      {/* Subtle bottom accent */}
      <div className={`mt-6 h-1 w-full bg-gradient-to-r ${gradientClass} rounded-full opacity-50 group-hover:opacity-100 transition-opacity duration-300`}></div>
    </div>
  );
};
