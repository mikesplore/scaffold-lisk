"use client";

import React from "react";
import Image from 'next/image';

export const TakaLogo: React.FC<{ size?: number; className?: string }> = ({ 
  size = 32, 
  className = "" 
}) => {
  return (
    <div className={`relative ${className}`} style={{ width: size, height: size }}>
      <Image
        src="/assets/logo.png"
        alt="Taka Logo"
        width={size}
        height={size}
        className={`drop-shadow-lg object-contain ${className}`}
      />
    </div>
  );
};
