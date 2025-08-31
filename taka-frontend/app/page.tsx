"use client";

import React, { useState } from "react";
import type { NextPage } from "next";
import { useAccount } from "wagmi";
import { 
  CurrencyDollarIcon, 
  TrophyIcon, 
  GlobeAltIcon,
  MapPinIcon,
  ShoppingBagIcon,
  ChartBarIcon,
  ArrowRightIcon
} from "@heroicons/react/24/outline";
import { HeroSection } from "~~/components/taka/HeroSection";
import { DashboardCard } from "~~/components/taka/DashboardCard";
import { ActionButton } from "~~/components/taka/ActionButton";
import { ProgressBar } from "~~/components/taka/ProgressBar";
// import { WasteRecordForm } from "~~/components/taka/WasteRecordForm";
// import { TransactionHistory } from "~~/components/taka/TransactionHistory";
// import { QuickRecordButton } from "~~/components/taka/QuickRecordButton";
// import { TokenSummary } from "~~/components/taka/TokenSummary";
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
  const [isWasteFormOpen, setIsWasteFormOpen] = useState(false);

  // Mock data
  const mockData = {
    takaBalance: "2,847",
    trashCollected: "156.7",
    globalRank: "#342",
    co2Impact: "234.5",
    weeklyGoal: { current: 45.2, target: 60 },
    monthlyChallenge: { current: 156.7, target: 200 },
  };

  const handleAction = (action: string) => {
    if (action === "collect") {
      setIsWasteFormOpen(true);
    } else {
      console.log(`Action triggered: ${action}`);
    }
  };

  const handleWasteSubmit = (wasteRecord: any) => {
    console.log("New waste record:", wasteRecord);
    // Here you would typically save to blockchain or database
  };

  return (
    <>
    <div className="min-h-screen">
      {/* Hero Section - No card, just content */}
      <HeroSection 
        title="Your Eco Progress"
        subtitle="Track • Earn • Help the Planet"
        description="Transform waste into wealth through blockchain-powered recycling rewards. Every piece of trash you collect makes a difference for our planet's future."
      />

      {/* Wallet Connection Section */}
      {connectedAddress && (
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <div className="inline-flex items-center gap-3 px-6 py-3 glass-effect rounded-full shadow-vibrant border border-white/30">
                <span className="text-white/80 text-sm font-medium">Connected Wallet:</span>
                <Address address={connectedAddress} />
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Dashboard Overview Section */}
      <section className="py-16 section-reveal">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Dashboard Overview</h2>
            <p className="text-slate-300 text-lg max-w-2xl mx-auto">Your environmental impact at a glance</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            <DashboardCard
              title="TAKA Balance"
              value={mockData.takaBalance}
              subtitle="Tokens earned"
              icon={<CurrencyDollarIcon className="h-8 w-8 text-[var(--primary-start)]" />}
              trend={{ value: 12.5, isPositive: true }}
            />
            
            <DashboardCard
              title="Trash Collected"
              value={`${mockData.trashCollected} kg`}
              subtitle="This month"
              icon={<RecycleIconCustom className="h-8 w-8 text-[var(--primary-mid)]" />}
              trend={{ value: 8.3, isPositive: true }}
            />
            
            <DashboardCard
              title="Global Rank"
              value={mockData.globalRank}
              subtitle="Out of 15,847 collectors"
              icon={<TrophyIcon className="h-8 w-8 text-[var(--primary-start)]" />}
              trend={{ value: 5.2, isPositive: true }}
            />
            
            <DashboardCard
              title="CO₂ Impact"
              value={`${mockData.co2Impact} kg`}
              subtitle="Carbon saved"
              icon={<GlobeAltIcon className="h-8 w-8 text-[var(--primary-end)]" />}
              trend={{ value: 15.7, isPositive: true }}
            />
          </div>
          
          {/* Additional Statistics Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto mt-8">
            <DashboardCard
              title="Water Impact"
              value="1,247 L"
              subtitle="Water saved"
              icon={
                <svg className="h-8 w-8 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.1L6.2 8.7c-2.9 3.3-2.9 8.3 0 11.6C7.6 22 9.8 22.8 12 22.8s4.4-.8 5.8-2.5c2.9-3.3 2.9-8.3 0-11.6L12 2.1z"/>
                </svg>
              }
              trend={{ value: 18.2, isPositive: true }}
              variant="subtle"
            />
            
            <DashboardCard
              title="Energy Saved"
              value="89.3 kWh"
              subtitle="This month"
              icon={
                <svg className="h-8 w-8 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 24l3-9h-9l13-15-3 9h9l-13 15z"/>
                </svg>
              }
              trend={{ value: 22.5, isPositive: true }}
              variant="subtle"
            />
            
            <DashboardCard
              title="Collection Streak"
              value="28 days"
              subtitle="Current streak"
              icon={
                <svg className="h-8 w-8 text-orange-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2c1.1 0 2 .9 2 2 0 .74-.4 1.39-1 1.73v1.77l7 7v1.5h-1.5L12 9.5 5.5 16H4v-1.5l7-7V5.73c-.6-.34-1-.99-1-1.73 0-1.1.9-2 2-2z"/>
                </svg>
              }
              trend={{ value: 14.3, isPositive: true }}
              variant="subtle"
            />
            
            <DashboardCard
              title="Trees Equivalent"
              value="47"
              subtitle="CO₂ equivalent"
              icon={
                <svg className="h-8 w-8 text-green-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17,8C8,10 5.9,16.17 3.82,21.34L5.17,22L6.58,19.58C8.81,20.81 11.33,21.5 14,21.5C19.71,21.5 24.5,16.71 24.5,11C24.5,7.5 22.64,4.46 19.86,2.77L17,8M12.5,7A1.5,1.5 0 0,1 14,5.5A1.5,1.5 0 0,1 15.5,7A1.5,1.5 0 0,1 14,8.5A1.5,1.5 0 0,1 12.5,7M10,12.5A1.5,1.5 0 0,1 11.5,11A1.5,1.5 0 0,1 13,12.5A1.5,1.5 0 0,1 11.5,14A1.5,1.5 0 0,1 10,12.5Z"/>
                </svg>
              }
              trend={{ value: 9.8, isPositive: true }}
              variant="subtle"
            />
          </div>
        </div>
      </section>

      {/* Goals & Progress Section */}
      <section className="py-16 section-reveal">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Goals & Progress</h2>
              <p className="text-slate-300 text-lg">Track your journey towards sustainability</p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="glass-gradient p-8 rounded-2xl border border-white/20 shadow-vibrant backdrop-blur-md">
                <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                  <div className="w-2 h-2 bg-[var(--primary-start)] rounded-full shadow-glow"></div>
                  Weekly Collection Goal
                </h3>
                <ProgressBar
                  label="Progress this week"
                  current={mockData.weeklyGoal.current}
                  target={mockData.weeklyGoal.target}
                  unit=" kg"
                  color="emerald"
                />
              </div>
              
              <div className="glass-gradient p-8 rounded-2xl border border-white/20 shadow-vibrant backdrop-blur-md">
                <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                  <div className="w-2 h-2 bg-[var(--primary-mid)] rounded-full shadow-glow"></div>
                  Monthly Challenge
                </h3>
                <ProgressBar
                  label="Recycling challenge"
                  current={mockData.monthlyChallenge.current}
                  target={mockData.monthlyChallenge.target}
                  unit=" kg"
                  color="emerald"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats Section */}
      <section className="py-16 section-reveal">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Your Activity Summary</h2>
              <p className="text-white/80 text-lg">Recent achievements and statistics</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="glass-gradient p-8 rounded-2xl border border-white/20 shadow-vibrant backdrop-blur-md text-center">
                <div className="text-5xl font-bold text-[var(--primary-start)] mb-4">85</div>
                <div className="text-white font-medium mb-2">Collections Today</div>
                <div className="text-white/60 text-sm">+12% from yesterday</div>
              </div>
              
              <div className="glass-gradient p-8 rounded-2xl border border-white/20 shadow-vibrant backdrop-blur-md text-center">
                <div className="text-5xl font-bold text-[var(--primary-mid)] mb-4">340</div>
                <div className="text-white font-medium mb-2">This Week</div>
                <div className="text-white/60 text-sm">On track for monthly goal</div>
              </div>
              
              <div className="glass-gradient p-8 rounded-2xl border border-white/20 shadow-vibrant backdrop-blur-md text-center">
                <div className="text-5xl font-bold text-[var(--primary-end)] mb-4">1,450</div>
                <div className="text-white font-medium mb-2">This Month</div>
                <div className="text-white/60 text-sm">Best month yet!</div>
              </div>
            </div>
            
            {/* Environmental Impact Mini Cards */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="glass-gradient p-6 rounded-2xl border border-white/20 shadow-vibrant backdrop-blur-md text-center">
                <div className="text-3xl mb-2">🌍</div>
                <div className="text-2xl font-bold text-[var(--primary-start)]">234.5 kg</div>
                <div className="text-white/70 text-sm">CO₂ Saved</div>
              </div>
              
              <div className="glass-gradient p-6 rounded-2xl border border-white/20 shadow-vibrant backdrop-blur-md text-center">
                <div className="text-3xl mb-2">💧</div>
                <div className="text-2xl font-bold text-[var(--primary-mid)]">1,247 L</div>
                <div className="text-white/70 text-sm">Water Saved</div>
              </div>
              
              <div className="glass-gradient p-6 rounded-2xl border border-white/20 shadow-vibrant backdrop-blur-md text-center">
                <div className="text-3xl mb-2">⚡</div>
                <div className="text-2xl font-bold text-[var(--primary-end)]">89.3 kWh</div>
                <div className="text-white/70 text-sm">Energy Saved</div>
              </div>
              
              <div className="glass-gradient p-6 rounded-2xl border border-white/20 shadow-vibrant backdrop-blur-md text-center">
                <div className="text-3xl mb-2">🌱</div>
                <div className="text-2xl font-bold text-[var(--primary-start)]">47</div>
                <div className="text-white/70 text-sm">Trees Equivalent</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Dashboard Section */}
      <section className="py-16 section-reveal">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Your Dashboard</h2>
              <p className="text-white/80 text-lg">Track your earnings and activity</p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Token Summary */}
              <div className="lg:col-span-1">
                {/* <TokenSummary /> */}
                <div className="glass-gradient p-8 rounded-2xl border border-white/20 shadow-vibrant backdrop-blur-md">
                  <h3 className="text-xl font-bold text-white mb-6">Token Summary Placeholder</h3>
                  <p className="text-white/70">Component temporarily disabled</p>
                </div>
              </div>
              
              {/* Transaction History */}
              <div className="lg:col-span-2">
                {/* <TransactionHistory /> */}
                <div className="glass-gradient p-8 rounded-2xl border border-white/20 shadow-vibrant backdrop-blur-md">
                  <h3 className="text-xl font-bold text-white mb-6">Transaction History Placeholder</h3>
                  <p className="text-white/70">Component temporarily disabled</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Activity and Achievements */}
      <section className="py-16 section-reveal">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Recent Activity Feed */}
              <div className="glass-gradient p-8 rounded-2xl border border-white/20 shadow-vibrant backdrop-blur-md">
                <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                  <ChartBarIcon className="h-6 w-6 text-[var(--primary-start)]" />
                  Recent Activity
                  <button className="ml-auto text-[var(--primary-start)] hover:text-[var(--primary-mid)] text-sm font-medium">
                    View All
                  </button>
                </h3>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-4 p-4 bg-white/10 rounded-xl border border-white/20">
                    <div className="w-12 h-12 bg-[var(--primary-start)]/20 rounded-xl flex items-center justify-center">
                      <div className="text-lg">🥤</div>
                    </div>
                    <div className="flex-1">
                      <div className="font-medium text-white">Plastic bottles recorded</div>
                      <div className="text-sm text-white/60">Yesterday • Home • 5.2kg</div>
                    </div>
                    <div className="text-[var(--primary-start)] font-bold text-sm">+25 TAKA</div>
                  </div>
                  
                  <div className="flex items-center gap-4 p-4 bg-white/10 rounded-xl border border-white/20">
                    <div className="w-12 h-12 bg-[var(--primary-mid)]/20 rounded-xl flex items-center justify-center">
                      <div className="text-lg">🥫</div>
                    </div>
                    <div className="flex-1">
                      <div className="font-medium text-white">Metal cans collection</div>
                      <div className="text-sm text-white/60">Yesterday • Office • 3.8kg</div>
                    </div>
                    <div className="text-[var(--primary-start)] font-bold text-sm">+40 TAKA</div>
                  </div>
                  
                  <div className="flex items-center gap-4 p-4 bg-white/10 rounded-xl border border-white/20">
                    <div className="w-12 h-12 bg-[var(--primary-end)]/20 rounded-xl flex items-center justify-center">
                      <TrophyIcon className="h-6 w-6 text-[var(--primary-end)]" />
                    </div>
                    <div className="flex-1">
                      <div className="font-medium text-white">Weekly challenge completed</div>
                      <div className="text-sm text-white/60">8/28/2025</div>
                    </div>
                    <div className="text-[var(--primary-start)] font-bold text-sm">+15 TAKA</div>
                  </div>
                  
                  <div className="flex items-center gap-4 p-4 bg-white/10 rounded-xl border border-white/20">
                    <div className="w-12 h-12 bg-red-500/20 rounded-xl flex items-center justify-center">
                      <ShoppingBagIcon className="h-6 w-6 text-red-400" />
                    </div>
                    <div className="flex-1">
                      <div className="font-medium text-white">Redeemed for coffee voucher</div>
                      <div className="text-sm text-white/60">8/27/2025</div>
                    </div>
                    <div className="text-red-400 font-bold text-sm">-50 TAKA</div>
                  </div>
                  
                  <div className="flex items-center gap-4 p-4 bg-white/10 rounded-xl border border-white/20">
                    <div className="w-12 h-12 bg-[var(--primary-start)]/20 rounded-xl flex items-center justify-center">
                      <div className="text-lg">🍾</div>
                    </div>
                    <div className="flex-1">
                      <div className="font-medium text-white">Glass bottles recorded</div>
                      <div className="text-sm text-white/60">8/26/2025 • Park cleanup • 2.1kg</div>
                    </div>
                    <div className="text-[var(--primary-start)] font-bold text-sm">+18 TAKA</div>
                  </div>
                </div>
              </div>
              
              {/* Weekly Challenges */}
              <div className="glass-gradient p-8 rounded-2xl border border-white/20 shadow-vibrant backdrop-blur-md">
                <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                  <div className="w-2 h-2 bg-[var(--primary-start)] rounded-full"></div>
                  🎯 Weekly Challenges
                </h3>
                
                <div className="space-y-6">
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-white font-medium">Plastic Collection</span>
                      <span className="text-[var(--primary-start)] font-bold">15/20 kg</span>
                    </div>
                    <div className="w-full bg-white/10 rounded-full h-3">
                      <div className="bg-gradient-to-r from-[var(--primary-start)] to-[var(--primary-mid)] h-3 rounded-full" style={{ width: '75%' }}></div>
                    </div>
                    <div className="text-sm text-white/70">75% complete • 2 days left</div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-white font-medium">Metal Collection</span>
                      <span className="text-[var(--primary-mid)] font-bold">8/10 kg</span>
                    </div>
                    <div className="w-full bg-white/10 rounded-full h-3">
                      <div className="bg-gradient-to-r from-[var(--primary-mid)] to-[var(--primary-end)] h-3 rounded-full" style={{ width: '80%' }}></div>
                    </div>
                    <div className="text-sm text-white/70">80% complete • Bonus: +50 TAKA</div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-white font-medium">Community Events</span>
                      <span className="text-[var(--primary-end)] font-bold">3/5 events</span>
                    </div>
                    <div className="w-full bg-white/10 rounded-full h-3">
                      <div className="bg-gradient-to-r from-[var(--primary-end)] to-[var(--primary-start)] h-3 rounded-full" style={{ width: '60%' }}></div>
                    </div>
                    <div className="text-sm text-white/70">Attend 2 more events for exclusive badge</div>
                  </div>
                  
                  <div className="mt-6 p-4 bg-[var(--primary-start)]/10 rounded-xl border border-[var(--primary-start)]/30">
                    <div className="flex items-center gap-3">
                      <div className="text-[var(--primary-start)]">💡</div>
                      <div>
                        <div className="text-white font-medium text-sm">Pro Tip</div>
                        <div className="text-white/70 text-xs">Complete all challenges this week for a 100 TAKA bonus!</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leaderboard and Achievements Section */}
      <section className="py-16 section-reveal">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Leaderboard */}
              <div className="glass-gradient p-8 rounded-2xl border border-white/20 shadow-vibrant backdrop-blur-md">
                <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                  <TrophyIcon className="h-6 w-6 text-[var(--primary-start)]" />
                  Top Collectors This Week
                </h3>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-4 p-4 bg-white/10 rounded-xl border border-white/20">
                    <div className="w-8 h-8 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center text-sm font-bold text-black">
                      1
                    </div>
                    <div className="flex-1">
                      <div className="font-medium text-white">EcoWarrior2025</div>
                      <div className="text-sm text-white/60">2,456 kg collected</div>
                    </div>
                    <div className="text-[var(--primary-start)] font-bold">12,350 TAKA</div>
                  </div>
                  
                  <div className="flex items-center gap-4 p-4 bg-white/10 rounded-xl border border-white/20">
                    <div className="w-8 h-8 bg-gradient-to-r from-gray-300 to-gray-500 rounded-full flex items-center justify-center text-sm font-bold text-black">
                      2
                    </div>
                    <div className="flex-1">
                      <div className="font-medium text-white">GreenGuru</div>
                      <div className="text-sm text-white/60">1,892 kg collected</div>
                    </div>
                    <div className="text-[var(--primary-start)] font-bold">9,460 TAKA</div>
                  </div>
                  
                  <div className="flex items-center gap-4 p-4 bg-white/10 rounded-xl border border-white/20">
                    <div className="w-8 h-8 bg-gradient-to-r from-amber-600 to-amber-800 rounded-full flex items-center justify-center text-sm font-bold text-white">
                      3
                    </div>
                    <div className="flex-1">
                      <div className="font-medium text-white">RecycleHero</div>
                      <div className="text-sm text-white/60">1,678 kg collected</div>
                    </div>
                    <div className="text-[var(--primary-start)] font-bold">8,390 TAKA</div>
                  </div>
                  
                  <div className="flex items-center gap-4 p-4 bg-[var(--primary-start)]/10 rounded-xl border border-[var(--primary-start)]/30">
                    <div className="w-8 h-8 bg-[var(--primary-start)] rounded-full flex items-center justify-center text-sm font-bold text-white">
                      #342
                    </div>
                    <div className="flex-1">
                      <div className="font-medium text-white">You</div>
                      <div className="text-sm text-white/60">156.7 kg collected</div>
                    </div>
                    <div className="text-[var(--primary-start)] font-bold">2,847 TAKA</div>
                  </div>
                </div>
              </div>
              
              {/* Achievements */}
              <div className="glass-gradient p-8 rounded-2xl border border-white/20 shadow-vibrant backdrop-blur-md">
                <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                  <TrophyIcon className="h-6 w-6 text-[var(--primary-mid)]" />
                  Recent Achievements
                </h3>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-4 p-4 bg-[var(--primary-start)]/10 rounded-xl border border-[var(--primary-start)]/30">
                    <div className="w-12 h-12 bg-[var(--primary-start)]/20 rounded-xl flex items-center justify-center">
                      <TrophyIcon className="h-6 w-6 text-[var(--primary-start)]" />
                    </div>
                    <div className="flex-1">
                      <div className="font-medium text-white">First 100kg!</div>
                      <div className="text-sm text-white/60">Collected your first 100kg of waste</div>
                    </div>
                    <div className="text-xs text-white/60">2 days ago</div>
                  </div>
                  
                  <div className="flex items-center gap-4 p-4 bg-[var(--primary-mid)]/10 rounded-xl border border-[var(--primary-mid)]/30">
                    <div className="w-12 h-12 bg-[var(--primary-mid)]/20 rounded-xl flex items-center justify-center">
                      <ChartBarIcon className="h-6 w-6 text-[var(--primary-mid)]" />
                    </div>
                    <div className="flex-1">
                      <div className="font-medium text-white">Weekly Champion</div>
                      <div className="text-sm text-white/60">Completed weekly challenge</div>
                    </div>
                    <div className="text-xs text-white/60">5 days ago</div>
                  </div>
                  
                  <div className="flex items-center gap-4 p-4 bg-white/10 rounded-xl border border-white/20">
                    <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center border border-white/20">
                      <GlobeAltIcon className="h-6 w-6 text-[var(--primary-end)]" />
                    </div>
                    <div className="flex-1">
                      <div className="font-medium text-white">Eco Warrior</div>
                      <div className="text-sm text-white/60">30 days of consistent collection</div>
                    </div>
                    <div className="text-xs text-white/60">1 week ago</div>
                  </div>
                  
                  <div className="text-center mt-6">
                    <button className="text-[var(--primary-start)] hover:text-[var(--primary-mid)] text-sm font-medium transition-colors">
                      View All Achievements →
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Environmental Impact Section */}
      <section className="py-16 section-reveal">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Your Environmental Impact</h2>
              <p className="text-white/80 text-lg">See how your actions are helping the planet</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              <div className="glass-gradient p-6 rounded-2xl border border-white/20 shadow-vibrant backdrop-blur-md text-center">
                <div className="w-16 h-16 bg-[var(--primary-start)]/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <GlobeAltIcon className="h-8 w-8 text-[var(--primary-start)]" />
                </div>
                <div className="text-2xl font-bold text-white mb-2">234.5 kg</div>
                <div className="text-sm text-white/70">CO₂ Prevented</div>
              </div>
              
              <div className="glass-gradient p-6 rounded-2xl border border-white/20 shadow-vibrant backdrop-blur-md text-center">
                <div className="w-16 h-16 bg-[var(--primary-mid)]/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <div className="text-[var(--primary-mid)]">💧</div>
                </div>
                <div className="text-2xl font-bold text-white mb-2">1,247 L</div>
                <div className="text-sm text-white/70">Water Saved</div>
              </div>
              
              <div className="glass-gradient p-6 rounded-2xl border border-white/20 shadow-vibrant backdrop-blur-md text-center">
                <div className="w-16 h-16 bg-[var(--primary-end)]/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <div className="text-[var(--primary-end)]">⚡</div>
                </div>
                <div className="text-2xl font-bold text-white mb-2">89.3 kWh</div>
                <div className="text-sm text-white/70">Energy Saved</div>
              </div>
              
              <div className="glass-gradient p-6 rounded-2xl border border-white/20 shadow-vibrant backdrop-blur-md text-center">
                <div className="w-16 h-16 bg-[var(--primary-start)]/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <div className="text-[var(--primary-start)]">🌱</div>
                </div>
                <div className="text-2xl font-bold text-white mb-2">47</div>
                <div className="text-sm text-white/70">Trees Equivalent</div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Collection Tips */}
              <div className="glass-gradient p-8 rounded-2xl border border-white/20 shadow-vibrant backdrop-blur-md">
                <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                  <div className="text-[var(--primary-start)]">💡</div>
                  Collection Tips
                </h3>
                
                <div className="space-y-4">
                  <div className="flex gap-4 p-4 bg-white/10 rounded-xl border border-white/20">
                    <div className="w-8 h-8 bg-[var(--primary-start)]/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-xs font-bold text-[var(--primary-start)]">1</span>
                    </div>
                    <div>
                      <div className="font-medium text-white mb-1">Clean Before Recording</div>
                      <div className="text-sm text-white/70">Rinse containers to improve recycling quality and earn bonus points</div>
                    </div>
                  </div>
                  
                  <div className="flex gap-4 p-4 bg-white/10 rounded-xl border border-white/20">
                    <div className="w-8 h-8 bg-[var(--primary-mid)]/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-xs font-bold text-[var(--primary-mid)]">2</span>
                    </div>
                    <div>
                      <div className="font-medium text-white mb-1">Separate Materials</div>
                      <div className="text-sm text-white/70">Sort plastics, metals, and glass for maximum rewards</div>
                    </div>
                  </div>
                  
                  <div className="flex gap-4 p-4 bg-white/10 rounded-xl border border-white/20">
                    <div className="w-8 h-8 bg-[var(--primary-end)]/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-xs font-bold text-[var(--primary-end)]">3</span>
                    </div>
                    <div>
                      <div className="font-medium text-white mb-1">Join Community Events</div>
                      <div className="text-sm text-white/70">Participate in group cleanups for bonus rewards and social impact</div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Weekly Goals */}
              <div className="glass-gradient p-8 rounded-2xl border border-white/20 shadow-vibrant backdrop-blur-md">
                <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                  <div className="text-[var(--primary-mid)]">🎯</div>
                  Weekly Challenges
                </h3>
                
                <div className="space-y-6">
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-white font-medium">Plastic Collection</span>
                      <span className="text-[var(--primary-start)] font-bold">15/20 kg</span>
                    </div>
                    <div className="w-full bg-white/10 rounded-full h-2">
                      <div className="bg-[var(--primary-start)] h-2 rounded-full" style={{ width: '75%' }}></div>
                    </div>
                    <div className="text-sm text-white/70">75% complete • 2 days left</div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-white font-medium">Metal Collection</span>
                      <span className="text-[var(--primary-mid)] font-bold">8/10 kg</span>
                    </div>
                    <div className="w-full bg-white/10 rounded-full h-2">
                      <div className="bg-[var(--primary-mid)] h-2 rounded-full" style={{ width: '80%' }}></div>
                    </div>
                    <div className="text-sm text-white/70">80% complete • Bonus: +50 TAKA</div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-white font-medium">Community Impact</span>
                      <span className="text-[var(--primary-end)] font-bold">3/5 events</span>
                    </div>
                    <div className="w-full bg-white/10 rounded-full h-2">
                      <div className="bg-[var(--primary-end)] h-2 rounded-full" style={{ width: '60%' }}></div>
                    </div>
                    <div className="text-sm text-white/70">Attend 2 more events for exclusive badge</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call-to-Actions Section */}
      <section className="py-16 section-reveal">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Take Action</h2>
              <p className="text-slate-300 text-lg">Ready to make an impact? Start here</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <ActionButton
                title="Collect Trash"
                description="Start earning TAKA tokens"
                icon={<RecycleIconCustom className="h-8 w-8" />}
                onClick={() => handleAction("collect")}
                variant="primary"
              />
              
              <ActionButton
                title="Find Stations"
                description="Locate collection points"
                icon={<MapPinIcon className="h-8 w-8" />}
                onClick={() => handleAction("stations")}
                variant="secondary"
              />
              
              <ActionButton
                title="Redeem Tokens"
                description="Convert to real value"
                icon={<ShoppingBagIcon className="h-8 w-8" />}
                onClick={() => handleAction("redeem")}
                variant="accent"
              />
              
              <ActionButton
                title="View Analytics"
                description="Track your impact"
                icon={<ChartBarIcon className="h-8 w-8" />}
                onClick={() => handleAction("analytics")}
                variant="secondary"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Community Impact Section - Plain background */}
      <section className="py-20 bg-slate-900/50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto text-center">
            <div className="mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Community Impact</h2>
              <p className="text-slate-300 text-lg">Together, we're building a sustainable future</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="text-center">
                <div className="text-5xl lg:text-6xl font-bold text-emerald-400 mb-4">15,847</div>
                <div className="text-slate-300 text-lg">Active Collectors</div>
                <div className="text-slate-500 text-sm mt-2">Growing daily</div>
              </div>
              <div className="text-center">
                <div className="text-5xl lg:text-6xl font-bold text-teal-400 mb-4">2.4M kg</div>
                <div className="text-slate-300 text-lg">Trash Collected</div>
                <div className="text-slate-500 text-sm mt-2">This year</div>
              </div>
              <div className="text-center">
                <div className="text-5xl lg:text-6xl font-bold text-green-400 mb-4">₦45.7M</div>
                <div className="text-slate-300 text-lg">Tokens Distributed</div>
                <div className="text-slate-500 text-sm mt-2">To date</div>
              </div>
            </div>

            <div className="mt-12">
              <button className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-green-500 to-green-600 text-white font-medium rounded-full hover:from-green-600 hover:to-green-700 transition-all duration-300 group">
                Join the Community
                <ArrowRightIcon className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>

    {/* Waste Record Form Modal */}
    {/* <WasteRecordForm 
      isOpen={isWasteFormOpen}
      onClose={() => setIsWasteFormOpen(false)}
      onSubmit={handleWasteSubmit}
    /> */}

    {/* Quick Record Button */}
    {/* <QuickRecordButton onClick={() => setIsWasteFormOpen(true)} /> */}
    </>
  );
};

export default Dashboard;
