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
  glowColor?: "emerald" | "cyan" | "amber";
  variant?: "default" | "subtle" | "minimal";
}

export const DashboardCard: React.FC<DashboardCardProps> = ({
  title,
  value,
  subtitle,
  icon,
  trend,
  className = "",
  glowColor = "emerald",
  variant = "default",
}) => {
  const getCardStyles = () => {
    switch (variant) {
      case "subtle":
        return "bg-white/5 border-white/10 shadow-lg hover:bg-white/8";
      case "minimal":
        return "bg-white/3 border-white/5 shadow-md hover:bg-white/6";
      default:
        return "glass-gradient border-white/20 shadow-vibrant hover:shadow-glow";
    }
  };

  const getIconStyles = () => {
    switch (variant) {
      case "subtle":
        return "bg-white/5 border-white/10";
      case "minimal":
        return "bg-white/3 border-white/5";
      default:
        return "bg-white/10 border-white/20";
    }
  };

  return (
    <div className={`${getCardStyles()} p-6 rounded-2xl border transition-all duration-300 backdrop-blur-md ${className}`}>
      <div className="flex items-center justify-between mb-4">
        <div className={`p-3 rounded-2xl ${getIconStyles()} backdrop-blur-sm border shadow-primary`}>
          <div className="text-white/90">
            {icon}
          </div>
        </div>
        {trend && (
          <div
            className={`flex items-center text-sm font-medium px-3 py-1 rounded-full backdrop-blur-sm ${
              trend.isPositive 
                ? "text-[var(--primary-start)] bg-[var(--primary-start)]/10 border border-[var(--primary-start)]/20" 
                : "text-red-400 bg-red-400/10 border border-red-400/20"
            }`}
          >
            <span className="mr-1">
              {trend.isPositive ? "↗" : "↘"}
            </span>
            {Math.abs(trend.value)}%
          </div>
        )}
      </div>
      
      <div className="space-y-2">
        <h3 className="text-sm font-medium text-white/70 uppercase tracking-wide">
          {title}
        </h3>
        <div className="text-3xl font-bold text-white drop-shadow-sm">
          {value}
        </div>
        {subtitle && (
          <p className="text-sm text-white/60">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
};
