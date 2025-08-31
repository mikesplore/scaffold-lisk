"use client";

import React from "react";
import { ReactNode } from "react";

interface ActionButtonProps {
  title: string;
  description: string;
  icon: ReactNode;
  onClick: () => void;
  variant?: "primary" | "secondary" | "accent";
  className?: string;
}

export const ActionButton: React.FC<ActionButtonProps> = ({
  title,
  description,
  icon,
  onClick,
  variant = "primary",
  className = "",
}) => {
  const variantClasses = {
    primary: "bg-gradient-to-r from-green-500 to-green-600 text-white",
    secondary: "bg-gradient-to-r from-green-400 to-green-500 text-white",
    accent: "bg-gradient-to-r from-green-600 to-green-700 text-white",
  }[variant];

  const iconSizeClass = "h-6 w-6";

  return (
    <button
      onClick={onClick}
      className={`
        clean-card p-6 text-center
        ${variantClasses} ${className}
        hover:scale-105 transition-transform duration-200
        focus:outline-none focus:ring-2 focus:ring-white/20
      `}
    >
      <div className="flex flex-col items-center space-y-4">
        <div className="p-3 rounded-xl bg-white/10">
          <div className={iconSizeClass}>
            {icon}
          </div>
        </div>
        
        <div className="space-y-1">
          <h3 className="font-semibold">{title}</h3>
          <p className="text-sm opacity-80">{description}</p>
        </div>
      </div>
    </button>
  );
};
