"use client";

import React from "react";

interface HeroSectionProps {
  title: string;
  subtitle: string;
  description: string;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  title,
  subtitle,
  description,
}) => {
  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
      {/* Subtle background accent */}
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-amber-500/8 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Small eco icon */}
          <div className="mb-8 flex justify-center">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-emerald-500/20 to-amber-500/20 flex items-center justify-center backdrop-blur-sm border border-white/10">
              <svg className="w-8 h-8 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
            </div>
          </div>
          
          {/* Main heading */}
          <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            {title}
          </h1>
          
          {/* Subtitle with gradient */}
          <h2 className="text-xl lg:text-2xl font-medium mb-8 bg-gradient-to-r from-emerald-400 via-teal-400 to-amber-400 bg-clip-text text-transparent">
            {subtitle}
          </h2>
          
          {/* Description */}
          <p className="text-lg lg:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            {description}
          </p>
          
          {/* Subtle scroll indicator */}
          <div className="mt-16 flex justify-center">
            <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white/40 rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
