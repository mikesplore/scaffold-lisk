"use client";

import React, { useState } from "react";
import type { NextPage } from "next";
import { 
  ShoppingBagIcon, 
  CurrencyDollarIcon, 
  DevicePhoneMobileIcon,
  GiftIcon,
  BanknotesIcon,
  ArrowPathIcon
} from "@heroicons/react/24/outline";
import { DashboardCard } from "~~/components/taka/DashboardCard";
import { ActionButton } from "~~/components/taka/ActionButton";

interface RedemptionOption {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  rate: number; // TAKA tokens per unit
  minAmount: number;
  maxAmount: number;
  processingTime: string;
  category: "mobile_money" | "cash" | "rewards" | "investments";
}

const redemptionOptions: RedemptionOption[] = [
  {
    id: "mpesa",
    title: "M-Pesa Transfer",
    description: "Instant mobile money transfer",
    icon: <DevicePhoneMobileIcon className="h-8 w-8" />,
    rate: 100, // 100 TAKA = 1 KSH
    minAmount: 50,
    maxAmount: 10000,
    processingTime: "Instant",
    category: "mobile_money",
  },
  {
    id: "airtel",
    title: "Airtel Money",
    description: "Direct airtel money transfer",
    icon: <DevicePhoneMobileIcon className="h-8 w-8" />,
    rate: 100,
    minAmount: 50,
    maxAmount: 10000,
    processingTime: "Instant",
    category: "mobile_money",
  },
  {
    id: "bank",
    title: "Bank Transfer",
    description: "Direct bank account deposit",
    icon: <BanknotesIcon className="h-8 w-8" />,
    rate: 95, // Slightly better rate for bank transfers
    minAmount: 500,
    maxAmount: 50000,
    processingTime: "1-2 hours",
    category: "cash",
  },
  {
    id: "vouchers",
    title: "Shopping Vouchers",
    description: "Retail store gift cards",
    icon: <GiftIcon className="h-8 w-8" />,
    rate: 110, // Better rate for vouchers
    minAmount: 100,
    maxAmount: 5000,
    processingTime: "Instant",
    category: "rewards",
  },
  {
    id: "investment",
    title: "Taka Investment",
    description: "Invest in recycling infrastructure",
    icon: <ArrowPathIcon className="h-8 w-8" />,
    rate: 1, // 1:1 ratio for investments
    minAmount: 1000,
    maxAmount: 100000,
    processingTime: "Immediate",
    category: "investments",
  },
];

const MarketplacePage: NextPage = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedOption, setSelectedOption] = useState<RedemptionOption | null>(null);
  const [redeemAmount, setRedeemAmount] = useState<number>(0);
  
  // Mock user balance
  const userBalance = 2847;

  const categories = [
    { key: "all", label: "All Options" },
    { key: "mobile_money", label: "Mobile Money" },
    { key: "cash", label: "Cash & Bank" },
    { key: "rewards", label: "Rewards" },
    { key: "investments", label: "Investments" },
  ];

  const filteredOptions = redemptionOptions.filter(option => 
    selectedCategory === "all" || option.category === selectedCategory
  );

  const calculateReceiveAmount = (takaAmount: number, rate: number) => {
    return (takaAmount / rate).toFixed(2);
  };

  const handleRedeem = () => {
    if (selectedOption && redeemAmount >= selectedOption.minAmount) {
      console.log(`Redeeming ${redeemAmount} TAKA for ${selectedOption.title}`);
      // Implement redemption logic here
      setSelectedOption(null);
      setRedeemAmount(0);
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-taka-accent-500/20 rounded-full blur-3xl float-animation"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-taka-secondary-500/20 rounded-full blur-3xl float-animation" style={{ animationDelay: "2s" }}></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-8 space-y-8">
        {/* Header */}
        <div className="glass p-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Token <span className="bg-gradient-emerald-cyan bg-clip-text text-transparent">Marketplace</span>
          </h1>
          <p className="text-xl text-white/80 mb-6 max-w-2xl mx-auto">
            Redeem your TAKA tokens for real value. Convert your environmental impact into tangible rewards.
          </p>
        </div>

        {/* Balance and Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <DashboardCard
            title="TAKA Balance"
            value={userBalance.toLocaleString()}
            subtitle="Available tokens"
            icon={<CurrencyDollarIcon className="h-8 w-8 text-taka-primary-400" />}
            glowColor="emerald"
            variant="subtle"
          />
          
          <DashboardCard
            title="Total Redeemed"
            value="$12,450"
            subtitle="This month"
            icon={<ShoppingBagIcon className="h-8 w-8 text-taka-accent-400" />}
            glowColor="amber"
            variant="subtle"
          />
          
          <DashboardCard
            title="Best Rate"
            value="1:110"
            subtitle="TAKA to KSH"
            icon={<ArrowPathIcon className="h-8 w-8 text-taka-secondary-400" />}
            glowColor="cyan"
            variant="subtle"
          />
        </div>

        {/* Category Filters */}
        <div className="glass p-6">
          <div className="flex flex-wrap gap-4 items-center">
            <span className="text-white font-medium">Categories:</span>
            {categories.map((category) => (
              <button
                key={category.key}
                onClick={() => setSelectedCategory(category.key)}
                className={`px-4 py-2 rounded-xl font-medium transition-all duration-300 ${
                  selectedCategory === category.key
                    ? "glass-strong text-white shadow-glow-emerald"
                    : "glass-subtle text-white/70 hover:text-white hover:glass"
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>

        {/* Redemption Options */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredOptions.map((option) => (
            <div
              key={option.id}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 cursor-pointer hover:bg-white/8 hover:border-taka-primary-500/30 transition-all duration-300 backdrop-blur-md"
              onClick={() => setSelectedOption(option)}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 rounded-2xl bg-white/5 border border-white/10">
                  {option.icon}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">{option.title}</h3>
                  <p className="text-white/70 text-sm">{option.description}</p>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-white/70 text-sm">Exchange Rate:</span>
                  <span className="text-taka-primary-400 font-medium">
                    {option.rate} TAKA = $1
                  </span>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-white/70 text-sm">Min Amount:</span>
                  <span className="text-white">{option.minAmount} TAKA</span>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-white/70 text-sm">Max Amount:</span>
                  <span className="text-white">{option.maxAmount.toLocaleString()} TAKA</span>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-white/70 text-sm">Processing:</span>
                  <span className="text-taka-secondary-400">{option.processingTime}</span>
                </div>
              </div>

              <div className="mt-4 p-3 bg-white/5 rounded-xl">
                <div className="text-center">
                  <span className="text-white/70 text-sm">You can receive up to:</span>
                  <div className="text-xl font-bold text-taka-accent-400">
                    ${calculateReceiveAmount(userBalance, option.rate)}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Featured Investment Opportunity */}
        <div className="glass gradient-border p-8">
          <div className="text-center mb-6">
            <h2 className="text-3xl font-bold text-white mb-4">
              Investment <span className="text-taka-accent-400">Opportunity</span>
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              Invest your TAKA tokens in recycling infrastructure and earn returns while building a sustainable future.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-taka-primary-400 mb-2">12.5%</div>
              <div className="text-white/70">Annual Returns</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-taka-secondary-400 mb-2">$2.4M</div>
              <div className="text-white/70">Total Invested</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-taka-accent-400 mb-2">156</div>
              <div className="text-white/70">Active Investors</div>
            </div>
          </div>

          <div className="mt-6 text-center">
            <ActionButton
              title="Learn More"
              description="About investment opportunities"
              icon={<ArrowPathIcon className="h-6 w-6" />}
              onClick={() => console.log("Investment info")}
              variant="accent"
            />
          </div>
        </div>

        {/* Redemption Modal */}
        {selectedOption && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="glass-strong max-w-md w-full p-8 border border-white/20">
              <div className="text-center mb-6">
                <div className="mx-auto w-16 h-16 bg-gradient-emerald-cyan bg-opacity-20 rounded-2xl flex items-center justify-center mb-4">
                  {selectedOption.icon}
                </div>
                <h2 className="text-2xl font-bold text-white mb-2">{selectedOption.title}</h2>
                <p className="text-white/70">{selectedOption.description}</p>
              </div>

              <div className="space-y-4 mb-6">
                <div>
                  <label className="block text-white/70 text-sm mb-2">
                    Amount to Redeem (TAKA)
                  </label>
                  <input
                    type="number"
                    value={redeemAmount || ""}
                    onChange={(e) => setRedeemAmount(Number(e.target.value))}
                    min={selectedOption.minAmount}
                    max={Math.min(userBalance, selectedOption.maxAmount)}
                    className="w-full p-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:border-taka-primary-500 focus:outline-none"
                    placeholder={`Min: ${selectedOption.minAmount} TAKA`}
                  />
                </div>

                {redeemAmount > 0 && (
                  <div className="glass-subtle p-4 rounded-xl">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-white/70">You will receive:</span>
                      <span className="text-xl font-bold text-taka-accent-400">
                        ${calculateReceiveAmount(redeemAmount, selectedOption.rate)}
                      </span>
                    </div>
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-white/60">Processing time:</span>
                      <span className="text-taka-secondary-400">{selectedOption.processingTime}</span>
                    </div>
                  </div>
                )}

                {selectedOption.category === "mobile_money" && (
                  <div>
                    <label className="block text-white/70 text-sm mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      className="w-full p-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:border-taka-primary-500 focus:outline-none"
                      placeholder="+234 123 456 7890"
                    />
                  </div>
                )}
              </div>

              <div className="flex gap-4">
                <button
                  onClick={() => setSelectedOption(null)}
                  className="flex-1 glass text-white py-3 rounded-xl font-medium hover:glass-strong transition-all duration-300"
                >
                  Cancel
                </button>
                <button
                  onClick={handleRedeem}
                  disabled={redeemAmount < selectedOption.minAmount || redeemAmount > userBalance}
                  className="flex-1 bg-gradient-emerald-cyan text-white py-3 rounded-xl font-medium hover:shadow-glow-emerald transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Redeem Now
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MarketplacePage;
