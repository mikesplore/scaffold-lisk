"use client";

import React, { useState } from "react";
import type { NextPage } from "next";
import { 
  UserGroupIcon, 
  TrophyIcon, 
  FireIcon,
  GlobeAltIcon,
  ChartBarIcon,
  CalendarDaysIcon,
  StarIcon,
  HeartIcon
} from "@heroicons/react/24/outline";
import { DashboardCard } from "~~/components/taka/DashboardCard";
import { ProgressBar } from "~~/components/taka/ProgressBar";

interface LeaderboardUser {
  rank: number;
  name: string;
  avatar: string;
  takaEarned: number;
  wasteCollected: number;
  streak: number;
  location: string;
}

interface Challenge {
  id: string;
  title: string;
  description: string;
  target: number;
  current: number;
  reward: number;
  endDate: string;
  participants: number;
  type: "individual" | "community";
}

interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string;
  rarity: "common" | "rare" | "epic" | "legendary";
  unlockedAt?: string;
}

const mockLeaderboard: LeaderboardUser[] = [
  { rank: 1, name: "EcoWarrior Sarah", avatar: "👩", takaEarned: 15420, wasteCollected: 234.5, streak: 45, location: "Lagos" },
  { rank: 2, name: "GreenKing Mike", avatar: "👨", takaEarned: 12350, wasteCollected: 198.7, streak: 32, location: "Abuja" },
  { rank: 3, name: "RecycleQueen Jane", avatar: "👩", takaEarned: 11200, wasteCollected: 187.3, streak: 28, location: "Kano" },
  { rank: 4, name: "CleanEarth David", avatar: "👨", takaEarned: 9800, wasteCollected: 156.8, streak: 25, location: "Ibadan" },
  { rank: 5, name: "PlanetSaver Lisa", avatar: "👩", takaEarned: 8950, wasteCollected: 142.3, streak: 22, location: "Kaduna" },
];

const mockChallenges: Challenge[] = [
  {
    id: "1",
    title: "Plastic Free Week",
    description: "Collect 50kg of plastic waste this week",
    target: 50,
    current: 32,
    reward: 500,
    endDate: "2024-02-15",
    participants: 1247,
    type: "individual",
  },
  {
    id: "2",
    title: "Community Clean-Up",
    description: "Lagos community goal: 5000kg total waste",
    target: 5000,
    current: 3420,
    reward: 10000,
    endDate: "2024-02-28",
    participants: 342,
    type: "community",
  },
  {
    id: "3",
    title: "E-Waste Champion",
    description: "Recycle 10 electronic devices",
    target: 10,
    current: 6,
    reward: 800,
    endDate: "2024-02-20",
    participants: 89,
    type: "individual",
  },
];

const mockAchievements: Achievement[] = [
  { id: "1", title: "First Steps", description: "Collect your first 1kg of waste", icon: "🏃", rarity: "common", unlockedAt: "2024-01-15" },
  { id: "2", title: "Eco Warrior", description: "Collect 100kg of waste", icon: "⚔️", rarity: "rare", unlockedAt: "2024-01-28" },
  { id: "3", title: "Planet Protector", description: "Save 500kg of CO₂", icon: "🛡️", rarity: "epic", unlockedAt: "2024-02-05" },
  { id: "4", title: "Sustainability Legend", description: "Maintain a 30-day streak", icon: "👑", rarity: "legendary" },
  { id: "5", title: "Recycling Master", description: "Recycle all waste types", icon: "♻️", rarity: "rare" },
  { id: "6", title: "Community Leader", description: "Refer 10 new collectors", icon: "🌟", rarity: "epic" },
];

const CommunityPage: NextPage = () => {
  const [activeTab, setActiveTab] = useState<"leaderboard" | "challenges" | "achievements">("leaderboard");

  const getRarityColor = (rarity: string) => {
    switch (rarity) {
      case "common": return "text-gray-400 border-gray-400/50";
      case "rare": return "text-blue-400 border-blue-400/50";
      case "epic": return "text-purple-400 border-purple-400/50";
      case "legendary": return "text-yellow-400 border-yellow-400/50";
      default: return "text-gray-400 border-gray-400/50";
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-taka-primary-500/20 rounded-full blur-3xl float-animation"></div>
        <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-taka-accent-500/20 rounded-full blur-3xl float-animation" style={{ animationDelay: "2s" }}></div>
        <div className="absolute top-1/2 right-1/4 w-60 h-60 bg-taka-secondary-500/15 rounded-full blur-3xl float-animation" style={{ animationDelay: "4s" }}></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-8 space-y-8">
        {/* Header */}
        <div className="glass p-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Community <span className="bg-gradient-emerald-cyan bg-clip-text text-transparent">Hub</span>
          </h1>
          <p className="text-xl text-white/80 mb-6 max-w-2xl mx-auto">
            Connect with fellow eco-warriors, compete in challenges, and celebrate your environmental achievements.
          </p>
        </div>

        {/* Community Stats */}
                {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <DashboardCard
            title="Total Members"
            value="15,847"
            subtitle="Active collectors"
            icon={<UserGroupIcon className="h-8 w-8 text-taka-primary-400" />}
            trend={{ value: 12.3, isPositive: true }}
            glowColor="emerald"
            variant="subtle"
          />
          
          <DashboardCard
            title="Global Impact"
            value="2.4M kg"
            subtitle="Waste collected"
            icon={<GlobeAltIcon className="h-8 w-8 text-taka-secondary-400" />}
            trend={{ value: 12.3, isPositive: true }}
            glowColor="cyan"
            variant="subtle"
          />
          
          <DashboardCard
            title="Active Challenges"
            value="24"
            subtitle="This month"
            icon={<TrophyIcon className="h-8 w-8 text-taka-accent-400" />}
            glowColor="amber"
            variant="subtle"
          />
          
          <DashboardCard
            title="Top Streak"
            value="156 days"
            subtitle="Community record"
            icon={<FireIcon className="h-8 w-8 text-red-400" />}
            glowColor="emerald"
            variant="subtle"
          />
        </div>

        {/* Navigation Tabs */}
        <div className="glass p-6">
          <div className="flex flex-wrap gap-4 justify-center">
            {[
              { key: "leaderboard", label: "Leaderboard", icon: <ChartBarIcon className="h-5 w-5" /> },
              { key: "challenges", label: "Challenges", icon: <TrophyIcon className="h-5 w-5" /> },
              { key: "achievements", label: "Achievements", icon: <StarIcon className="h-5 w-5" /> },
            ].map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key as any)}
                className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                  activeTab === tab.key
                    ? "glass-strong text-white shadow-glow-emerald"
                    : "glass-subtle text-white/70 hover:text-white hover:glass"
                }`}
              >
                {tab.icon}
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Leaderboard Tab */}
        {activeTab === "leaderboard" && (
          <div className="space-y-6">
            <div className="glass p-6">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <TrophyIcon className="h-8 w-8 text-taka-accent-400" />
                Global Leaderboard
              </h2>
              
              <div className="space-y-4">
                {mockLeaderboard.map((user, index) => (
                  <div
                    key={user.rank}
                    className={`glass-subtle p-4 rounded-xl hover:glass transition-all duration-300 ${
                      index < 3 ? "border border-taka-accent-500/30" : ""
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className={`w-12 h-12 rounded-full flex items-center justify-center text-2xl font-bold ${
                          index === 0 ? "bg-yellow-500/20 text-yellow-400" :
                          index === 1 ? "bg-gray-400/20 text-gray-300" :
                          index === 2 ? "bg-orange-500/20 text-orange-400" :
                          "bg-white/10 text-white"
                        }`}>
                          {index < 3 ? (index === 0 ? "🥇" : index === 1 ? "🥈" : "🥉") : user.rank}
                        </div>
                        
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="text-lg font-bold text-white">{user.name}</span>
                            <span className="text-2xl">{user.avatar}</span>
                          </div>
                          <div className="text-sm text-white/60">{user.location}</div>
                        </div>
                      </div>
                      
                      <div className="text-right">
                        <div className="text-lg font-bold text-taka-primary-400">
                          {user.takaEarned.toLocaleString()} TAKA
                        </div>
                        <div className="text-sm text-white/70">
                          {user.wasteCollected}kg collected
                        </div>
                        <div className="flex items-center gap-1 text-sm text-orange-400">
                          <FireIcon className="h-4 w-4" />
                          {user.streak} day streak
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Challenges Tab */}
        {activeTab === "challenges" && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {mockChallenges.map((challenge) => (
                <div key={challenge.id} className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/8 transition-all duration-300 backdrop-blur-md">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">{challenge.title}</h3>
                      <p className="text-white/70 text-sm mb-3">{challenge.description}</p>
                      <div className="flex items-center gap-4 text-sm text-white/60">
                        <span className="flex items-center gap-1">
                          <UserGroupIcon className="h-4 w-4" />
                          {challenge.participants} participants
                        </span>
                        <span className="flex items-center gap-1">
                          <CalendarDaysIcon className="h-4 w-4" />
                          Ends {challenge.endDate}
                        </span>
                      </div>
                    </div>
                    
                    <div className={`px-3 py-1 rounded-lg text-xs font-medium ${
                      challenge.type === "individual" 
                        ? "bg-blue-500/20 text-blue-400" 
                        : "bg-green-500/20 text-green-400"
                    }`}>
                      {challenge.type}
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <ProgressBar
                      label="Progress"
                      current={challenge.current}
                      target={challenge.target}
                      unit={challenge.type === "community" ? " kg" : " kg"}
                      color="emerald"
                    />
                    
                    <div className="flex items-center justify-between">
                      <span className="text-white/70">Reward:</span>
                      <span className="text-taka-accent-400 font-bold">
                        {challenge.reward.toLocaleString()} TAKA
                      </span>
                    </div>
                    
                    <button className="w-full bg-gradient-emerald-cyan text-white py-3 rounded-xl font-medium hover:shadow-glow-emerald transition-all duration-300">
                      Join Challenge
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Achievements Tab */}
        {activeTab === "achievements" && (
          <div className="space-y-6">
            <div className="glass p-6">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <StarIcon className="h-8 w-8 text-taka-accent-400" />
                Your Achievements
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {mockAchievements.map((achievement) => (
                  <div
                    key={achievement.id}
                    className={`glass-subtle p-6 rounded-xl border-2 transition-all duration-300 ${
                      achievement.unlockedAt 
                        ? `${getRarityColor(achievement.rarity)} hover:shadow-glow-emerald` 
                        : "border-white/10 opacity-50"
                    }`}
                  >
                    <div className="text-center">
                      <div className="text-4xl mb-3">{achievement.icon}</div>
                      <h3 className="text-lg font-bold text-white mb-2">{achievement.title}</h3>
                      <p className="text-white/70 text-sm mb-3">{achievement.description}</p>
                      
                      <div className="flex items-center justify-center gap-2 mb-3">
                        <span className={`px-2 py-1 rounded-lg text-xs font-medium border ${getRarityColor(achievement.rarity)}`}>
                          {achievement.rarity.toUpperCase()}
                        </span>
                      </div>
                      
                      {achievement.unlockedAt ? (
                        <div className="text-sm text-taka-primary-400">
                          Unlocked {achievement.unlockedAt}
                        </div>
                      ) : (
                        <div className="text-sm text-white/50">
                          🔒 Locked
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Community Feed */}
        <div className="glass p-6">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
            <HeartIcon className="h-8 w-8 text-red-400" />
            Recent Activity
          </h2>
          
          <div className="space-y-4">
            {[
              { user: "EcoWarrior Sarah", action: "completed the Plastic Free Week challenge", time: "2 hours ago", avatar: "👩" },
              { user: "GreenKing Mike", action: "collected 15kg of e-waste", time: "5 hours ago", avatar: "👨" },
              { user: "RecycleQueen Jane", action: "reached a 30-day collection streak", time: "1 day ago", avatar: "👩" },
              { user: "CleanEarth David", action: "joined the Community Clean-Up challenge", time: "2 days ago", avatar: "👨" },
            ].map((activity, index) => (
              <div key={index} className="glass-subtle p-4 rounded-xl">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{activity.avatar}</span>
                  <div className="flex-1">
                    <span className="text-white font-medium">{activity.user}</span>
                    <span className="text-white/70"> {activity.action}</span>
                  </div>
                  <span className="text-white/50 text-sm">{activity.time}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunityPage;
