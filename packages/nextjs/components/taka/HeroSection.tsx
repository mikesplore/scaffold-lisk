"use client";

import React from "react";
import { TakaLogo } from "./TakaLogo";

interface HeroSectionProps {
  title?: string;
  subtitle?: string;
  showLogo?: boolean;
  children?: React.ReactNode;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  title = "Welcome to Taka",
  subtitle = "Transform waste into wealth. Earn TAKA tokens by collecting and recycling trash while building a sustainable future.",
  showLogo = true,
  children
}) => {
  return (
    <div className="relative glass p-12 text-center overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-4 left-4 w-20 h-20 bg-taka-primary-500/20 rounded-full blur-xl animate-gentleFloat"></div>
      <div className="absolute bottom-6 right-6 w-16 h-16 bg-taka-accent-500/20 rounded-full blur-xl animate-gentleFloat" style={{ animationDelay: "2s" }}></div>
      <div className="absolute top-1/2 left-1/4 w-12 h-12 bg-taka-teal-500/15 rounded-full blur-lg animate-gentleFloat" style={{ animationDelay: "4s" }}></div>
      
      {/* Eco illustration */}
      <div className="relative mb-8">
        {showLogo && (
          <div className="flex justify-center items-center mb-6">
            <TakaLogo size={80} className="animate-gentleFloat" />
          </div>
        )}
        
        {/* Simple eco elements */}
        <div className="flex justify-center items-center space-x-8 mb-6 opacity-60">
          <div className="text-4xl animate-gentleFloat" style={{ animationDelay: "1s" }}>🌱</div>
          <div className="text-3xl animate-gentleFloat" style={{ animationDelay: "2s" }}>♻️</div>
          <div className="text-4xl animate-gentleFloat" style={{ animationDelay: "3s" }}>🌍</div>
        </div>
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          {title.split(' ').map((word, index) => (
            <span key={index}>
              {word === 'Taka' ? (
                <span className="bg-gradient-cozy bg-clip-text text-transparent">
                  {word}
                </span>
              ) : (
                word
              )}
              {index < title.split(' ').length - 1 && ' '}
            </span>
          ))}
        </h1>
        
        <p className="text-xl md:text-2xl text-slate-300 mb-8 leading-relaxed max-w-3xl mx-auto font-light">
          {subtitle}
        </p>

        {children}
      </div>

      {/* Bottom decorative gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-taka-primary-500/50 to-transparent"></div>
    </div>
  );
};
