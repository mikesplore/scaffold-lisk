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
      {/* Hero Background Image with Blur Effect */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/60 z-10"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{
            backgroundImage: "url('/assets/heroImage.jpg')",
            filter: "blur(8px)",
            transform: "scale(1.1)"
          }}
        ></div>
      </div>

      {/* Enhanced background elements with new theme */}
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-[var(--primary-start)]/20 rounded-full blur-3xl animate-pulse z-20"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[var(--primary-mid)]/15 rounded-full blur-3xl z-20"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-radial from-[var(--primary-end)]/20 to-transparent rounded-full blur-3xl z-20"></div>
      
      <div className="container mx-auto px-4 relative z-30">
        <div className="max-w-4xl mx-auto text-center">
          {/* Enhanced eco icon with new theme */}
          <div className="mb-8 flex justify-center">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[var(--primary-start)]/30 to-[var(--primary-mid)]/20 flex items-center justify-center backdrop-blur-sm border border-white/20 shadow-vibrant">
              <svg className="w-8 h-8 text-[var(--primary-start)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
            </div>
          </div>
          
          {/* Main heading with enhanced styling */}
          <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
            {title}
          </h1>
          
          {/* Subtitle with new gradient theme */}
          <h2 className="text-xl lg:text-2xl font-medium mb-8 text-primary-gradient">
            {subtitle}
          </h2>
          
          {/* Enhanced description */}
          <p className="text-lg lg:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
            {description}
          </p>
          
          {/* Enhanced scroll indicator */}
          <div className="mt-16 flex justify-center">
            <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center backdrop-blur-sm bg-white/5">
              <div className="w-1 h-3 bg-[var(--primary-start)] rounded-full mt-2 animate-pulse shadow-glow"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
   