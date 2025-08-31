"use client";

import Image from 'next/image';

type Props = {
  size?: number;
  color?: string;
  className?: string;
};

/**
 * Lisk logo.
 */
export const Logo: React.FC<Props> = ({ color = "#FFFFFF", size = 32, className = "", ...props }) => {
  return (
    <div className={`relative ${className}`} style={{ width: size, height: size }}>
      <Image
        src="/assets/logo.png"
        alt="Lisk Logo"
        width={size}
        height={size}
        className="object-contain"
      />
    </div>
  );
};
