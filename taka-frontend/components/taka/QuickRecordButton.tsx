"use client";

import React from "react";
import { PlusIcon } from "@heroicons/react/24/outline";

interface QuickRecordButtonProps {
  onClick: () => void;
  className?: string;
}

export const QuickRecordButton: React.FC<QuickRecordButtonProps> = ({
  onClick,
  className = "",
}) => {
  return (
    <button
      onClick={onClick}
      className={`
        fixed bottom-6 right-6 z-40
        w-16 h-16 bg-gradient-to-r from-green-500 to-green-600
        text-white rounded-full shadow-lg
        hover:from-green-600 hover:to-green-700
        hover:scale-110 active:scale-95
        transition-all duration-200
        flex items-center justify-center
        ${className}
      `}
    >
      <PlusIcon className="h-8 w-8" />
    </button>
  );
};
