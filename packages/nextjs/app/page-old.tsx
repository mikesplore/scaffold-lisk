"use client";

import React from "react";
import type { NextPage } from "next";
import { useAccount } from "wagmi";
import { 
  CurrencyDollarIcon, 
  TrophyIcon, 
  GlobeAltIcon,
  MapPinIcon,
  ShoppingBagIcon,
  ChartBarIcon,
  HeartIcon
} from "@heroicons/react/24/outline";
import { DashboardCard } from "~~/components/taka/DashboardCard";
import { ActionButton } from "~~/components/taka/ActionButton";
import { ProgressBar } from "~~/components/taka/ProgressBar";
import { HeroSection } from "~~/components/taka/HeroSection";
import { Address } from "~~/components/scaffold-eth";

// Custom Recycle Icon Component
const RecycleIconCustom = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M5.77 15.5l-1.27-2.2L9.06 12l1.27 2.2-1.27 2.2-2.29-1.32L5.77 15.5zm6.23-7.5L10.73 6L12 3.8L13.27 6L12 8.2z"/>
    <path d="M12 20.2l-1.27-2.2L12 15.8l1.27 2.2L12 20.2zm6.23-4.7l-1.27 2.2-2.29-1.32L12 13.8l1.27-2.2L18.23 15.5z"/>
  </svg>
);

const Dashboard: NextPage = () => {
  const { address: connectedAddress } = useAccount();

  // Mock data for dashboard
  const mockData = {
    takaBalance: "2,847",
    trashCollected: "156.7",
    globalRank: "#342",
    co2Impact: "234.5",
    weeklyGoal: { current: 45.2, target: 60 },
    monthlyChallenge: { current: 156.7, target: 200 },
  };

  const handleAction = (action: string) => {
    console.log(`Action triggered: ${action}`);
    // Implement navigation or modal opening logic here
  };

  return (
    <div className="min-h-screen relative">
      {/* Subtle background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-60 -right-60 w-96 h-96 bg-taka-primary-500/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-60 -left-60 w-96 h-96 bg-taka-accent-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 py-12 space-y-12">
        {/* Hero Section */}
        <HeroSection>
          {connectedAddress && (
            <div className="glass-subtle p-6 rounded-2xl inline-flex items-center space-x-4 border border-white/10">
              <span className="text-slate-300 font-medium">Connected Wallet:</span>
              <Address address={connectedAddress} />
            </div>
          )}
        </HeroSection>

        {/* Dashboard Metrics - More spacing */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
          <DashboardCard
            title="TAKA Balance"
            value={mockData.takaBalance}
            subtitle="Tokens earned this month"
            icon={<CurrencyDollarIcon className="h-8 w-8" />}
            trend={{ value: 12.5, isPositive: true }}
            glowColor="emerald"
          />
          
          <DashboardCard
            title="Trash Collected"
            value={`${mockData.trashCollected} kg`}
            subtitle="Environmental impact"
            icon={<RecycleIconCustom className="h-8 w-8" />}
            trend={{ value: 8.3, isPositive: true }}
            glowColor="teal"
          />
          
          <DashboardCard
            title="Global Rank"
            value={mockData.globalRank}
            subtitle="Out of 15,847 collectors"
            icon={<TrophyIcon className="h-8 w-8" />}
            trend={{ value: 5.2, isPositive: true }}
            glowColor="amber"
          />
          
          <DashboardCard
            title="CO₂ Impact"
            value={`${mockData.co2Impact} kg`}
            subtitle="Carbon footprint saved"
            icon={<GlobeAltIcon className="h-8 w-8" />}
            trend={{ value: 15.7, isPositive: true }}
            glowColor="emerald"
          />
        </div>

        {/* Progress Tracking - Plain background instead of cards */}
        <div className="space-y-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-4">Your Progress</h2>
            <p className="text-slate-300">Track your weekly and monthly recycling goals</p>
          </div>
          
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-3 rounded-2xl bg-taka-primary-500/20">
                  <ChartBarIcon className="h-6 w-6 text-taka-primary-400" />
                </div>
                <h3 className="text-2xl font-bold text-white">Weekly Goal</h3>
              </div>
              <ProgressBar
                label="Collection Progress"
                current={mockData.weeklyGoal.current}
                target={mockData.weeklyGoal.target}
                unit=" kg"
                color="emerald"
              />
            </div>
            
            <div className="space-y-6">
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-3 rounded-2xl bg-taka-teal-500/20">
                  <TrophyIcon className="h-6 w-6 text-taka-teal-400" />
                </div>
                <h3 className="text-2xl font-bold text-white">Monthly Challenge</h3>
              </div>
              <ProgressBar
                label="Recycling Challenge"
                current={mockData.monthlyChallenge.current}
                target={mockData.monthlyChallenge.target}
                unit=" kg"
                color="teal"
              />
            </div>
          </div>
        </div>

        {/* Main Actions - Improved layout */}
        <div className="glass p-10">
          <div className="text-center mb-10">
            <h2 className="text-4xl font-bold text-white mb-4">Take Action</h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Start making a difference today. Every small action contributes to a bigger impact.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
            <ActionButton
              title="Collect Trash"
              description="Start earning TAKA tokens"
              icon={<RecycleIconCustom className="h-8 w-8" />}
              onClick={() => handleAction("collect")}
              variant="primary"
              glowing={true}
            />
            
            <ActionButton
              title="Find Stations"
              description="Locate nearby collection points"
              icon={<MapPinIcon className="h-8 w-8" />}
              onClick={() => handleAction("stations")}
              variant="secondary"
            />
            
            <ActionButton
              title="Redeem Tokens"
              description="Convert TAKA to real value"
              icon={<ShoppingBagIcon className="h-8 w-8" />}
              onClick={() => handleAction("redeem")}
              variant="accent"
            />
            
            <ActionButton
              title="View Analytics"
              description="Track your environmental impact"
              icon={<ChartBarIcon className="h-8 w-8" />}
              onClick={() => handleAction("analytics")}
              variant="secondary"
            />
          </div>
        </div>

        {/* Community Impact - Plain background */}
        <div className="py-16">
          <div className="text-center mb-12">
            <div className="flex justify-center items-center space-x-4 mb-6">
              <div className="p-4 rounded-2xl bg-gradient-to-br from-taka-primary-500/20 to-taka-accent-500/20">
                <HeartIcon className="h-8 w-8 text-red-400" />
              </div>
              <h2 className="text-4xl font-bold text-white">Community Impact</h2>
            </div>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Together, we're building a sustainable future, one recycled item at a time.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-taka-primary-400 mb-3">15,847</div>
              <div className="text-slate-300 font-medium">Active Collectors</div>
              <div className="text-sm text-slate-400 mt-2">Growing daily</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-taka-teal-400 mb-3">2.4M kg</div>
              <div className="text-slate-300 font-medium">Trash Collected</div>
              <div className="text-sm text-slate-400 mt-2">This month</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-taka-accent-400 mb-3">₦45.7M</div>
              <div className="text-slate-300 font-medium">Tokens Distributed</div>
              <div className="text-sm text-slate-400 mt-2">Total value</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
