"use client";

import React from "react";

export const TakaLogo: React.FC<{ size?: number; className?: string }> = ({ 
  size = 32, 
  className = "" 
}) => {
  return (
    <div className={`relative ${className}`} style={{ width: size, height: size }}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="drop-shadow-lg"
      >
        {/* Outer recycling circle */}
        <circle
          cx="24"
          cy="24"
          r="22"
          stroke="url(#gradient1)"
          strokeWidth="2"
          fill="none"
          className="animate-pulse"
        />
        
        {/* Recycling arrows */}
        <path
          d="M24 8 L32 20 L28 20 L28 16 L20 16 L20 20 L16 20 L24 8Z"
          fill="url(#gradient2)"
          transform="rotate(0 24 24)"
        />
        <path
          d="M24 8 L32 20 L28 20 L28 16 L20 16 L20 20 L16 20 L24 8Z"
          fill="url(#gradient2)"
          transform="rotate(120 24 24)"
        />
        <path
          d="M24 8 L32 20 L28 20 L28 16 L20 16 L20 20 L16 20 L24 8Z"
          fill="url(#gradient2)"
          transform="rotate(240 24 24)"
        />
        
        {/* Center circle with T */}
        <circle cx="24" cy="24" r="8" fill="url(#gradient3)" />
        <text
          x="24"
          y="28"
          textAnchor="middle"
          className="text-white font-bold text-sm"
          fontSize="10"
        >
          T
        </text>
        
        <defs>
          <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#10B981" />
            <stop offset="50%" stopColor="#06B6D4" />
            <stop offset="100%" stopColor="#059669" />
          </linearGradient>
          <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#34D399" />
            <stop offset="100%" stopColor="#22D3EE" />
          </linearGradient>
          <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#10B981" />
            <stop offset="100%" stopColor="#047857" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};
