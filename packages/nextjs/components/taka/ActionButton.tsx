"use client";

import React from "react";
import { ReactNode } from "react";

interface ActionButtonProps {
  title: string;
  description: string;
  icon: ReactNode;
  onClick: () => void;
  variant?: "primary" | "secondary" | "accent";
  size?: "sm" | "md" | "lg";
  className?: string;
  glowing?: boolean;
}

export const ActionButton: React.FC<ActionButtonProps> = ({
  title,
  description,
  icon,
  onClick,
  variant = "primary",
  size = "md",
  className = "",
  glowing = false,
}) => {
  const variantClasses = {
    primary: "bg-gradient-to-br from-taka-primary-400 to-taka-primary-600 text-white shadow-glow-emerald border-taka-primary-500/30",
    secondary: "bg-gradient-to-br from-taka-teal-400 to-taka-teal-600 text-white shadow-glow-teal border-taka-teal-500/30",
    accent: "bg-gradient-to-br from-taka-accent-400 to-taka-accent-600 text-white shadow-glow-amber border-taka-accent-500/30",
  }[variant];

  const sizeClasses = {
    sm: "p-6 text-sm",
    md: "p-8 text-base",
    lg: "p-10 text-lg",
  }[size];

  const iconSizeClass = {
    sm: "h-6 w-6",
    md: "h-8 w-8", 
    lg: "h-10 w-10",
  }[size];

  return (
    <button
      onClick={onClick}
      className={`
        glass glass-hover gradient-border group relative overflow-hidden
        ${variantClasses} ${sizeClasses} ${className}
        ${glowing ? "animate-glow" : ""}
        transform transition-all duration-500 ease-out
        hover:scale-105 hover:-translate-y-2 active:scale-95
        focus:outline-none focus:ring-4 focus:ring-white/20
        border border-white/10
      `}
    >
      {/* Background glow effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      
      <div className="relative flex flex-col items-center space-y-4">
        {/* Icon container */}
        <div className="p-4 rounded-2xl bg-white/10 group-hover:bg-white/20 group-hover:scale-110 transition-all duration-300 backdrop-blur-sm border border-white/20">
          <div className={iconSizeClass}>
            {icon}
          </div>
        </div>
        
        {/* Text content */}
        <div className="text-center space-y-2">
          <h3 className="font-bold tracking-wide">{title}</h3>
          <p className="text-sm opacity-90 font-medium leading-relaxed">{description}</p>
        </div>
      </div>

      {/* Ripple effect on hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500">
        <div className="absolute inset-2 rounded-2xl bg-gradient-to-br from-white/20 to-transparent"></div>
      </div>
    </button>
  );
};
