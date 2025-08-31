"use client";

import React from "react";
import { 
  CurrencyDollarIcon, 
  ArrowTrendingUpIcon, 
  GiftIcon,
  ChartBarIcon 
} from "@heroicons/react/24/outline";

interface TokenSummaryProps {
  totalTokens?: number;
  todayEarned?: number;
  weeklyEarned?: number;
  monthlyEarned?: number;
  redeemableValue?: number;
  className?: string;
}

export const TokenSummary: React.FC<TokenSummaryProps> = ({
  totalTokens = 2847,
  todayEarned = 85,
  weeklyEarned = 340,
  monthlyEarned = 1450,
  redeemableValue = 28.47,
  className = "",
}) => {
  return (
    <div className={`glass-gradient p-6 rounded-2xl border border-white/20 shadow-vibrant backdrop-blur-md ${className}`}>
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-bold text-white flex items-center gap-3">
          <CurrencyDollarIcon className="h-6 w-6 text-[var(--primary-start)]" />
          Token Balance
        </h3>
        <button className="text-sm text-[var(--primary-start)] hover:text-[var(--primary-mid)] transition-colors font-medium">
          Redeem
        </button>
      </div>

      {/* Main Balance */}
      <div className="text-center mb-8">
        <div className="text-4xl lg:text-5xl font-bold text-white mb-2 drop-shadow-sm">
          {totalTokens.toLocaleString()}
        </div>
        <div className="text-lg text-white/80 mb-1">TAKA Tokens</div>
        <div className="text-sm text-[var(--primary-start)] font-medium">
          ≈ ₦{redeemableValue.toFixed(2)}
        </div>
      </div>

      {/* Earnings Breakdown */}
      <div className="grid grid-cols-3 gap-4 mb-6">
        <div className="text-center p-3 bg-white/10 rounded-xl backdrop-blur-sm border border-white/20">
          <div className="text-lg font-bold text-white">{todayEarned}</div>
          <div className="text-xs text-white/60">Today</div>
        </div>
        <div className="text-center p-3 bg-white/10 rounded-xl backdrop-blur-sm border border-white/20">
          <div className="text-lg font-bold text-white">{weeklyEarned}</div>
          <div className="text-xs text-white/60">This Week</div>
        </div>
        <div className="text-center p-3 bg-white/10 rounded-xl backdrop-blur-sm border border-white/20">
          <div className="text-lg font-bold text-white">{monthlyEarned}</div>
          <div className="text-xs text-white/60">This Month</div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-2 gap-3">
        <button className="flex items-center justify-center gap-2 p-3 bg-[var(--primary-start)]/10 border border-[var(--primary-start)]/30 text-[var(--primary-start)] rounded-xl hover:bg-[var(--primary-start)]/20 transition-all duration-300 hover:shadow-glow">
          <ArrowTrendingUpIcon className="h-4 w-4" />
          <span className="text-sm font-medium">Analytics</span>
        </button>
        <button className="flex items-center justify-center gap-2 p-3 bg-[var(--primary-mid)]/10 border border-[var(--primary-mid)]/30 text-[var(--primary-mid)] rounded-xl hover:bg-[var(--primary-mid)]/20 transition-all duration-300 hover:shadow-glow">
          <GiftIcon className="h-4 w-4" />
          <span className="text-sm font-medium">Rewards</span>
        </button>
      </div>

      {/* Token Rate Info */}
      <div className="mt-6 p-4 bg-white/5 rounded-xl border border-white/20 backdrop-blur-sm">
        <div className="text-xs text-white/70 text-center">
          Current Rate: 1 TAKA = ₦0.01 | Updated 2 hours ago
        </div>
      </div>
    </div>
  );
};
