"use client";

import React, { useState, useEffect, useRef } from "react";
import type { NextPage } from "next";
import { useAccount } from "wagmi";
import { 
  CurrencyDollarIcon, 
  TrophyIcon, 
  GlobeAltIcon,
  MapPinIcon,
  ShoppingBagIcon,
  ChartBarIcon,
  ArrowRightIcon,
  GiftIcon,
  UsersIcon,
  HeartIcon,
  SparklesIcon,
  CalendarIcon,
  StarIcon
} from "@heroicons/react/24/outline";
import { WasteRecordForm } from "~~/components/taka/WasteRecordForm";
import { TransactionHistory } from "~~/components/taka/TransactionHistory";
import { Address } from "~~/components/scaffold-eth";

// Custom Recycle Icon Component
const RecycleIconCustom = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.5 6.5L18.5 5.5L12 12L5.5 5.5L4.5 6.5L11 13L4.5 19.5L5.5 20.5L12 14L18.5 20.5L19.5 19.5L13 13L19.5 6.5Z"/>
    <path d="M12 2C10.7 2 9.5 2.3 8.4 2.9L7.1 1.6C8.7 0.6 10.3 0 12 0C17.5 0 22 4.5 22 10C22 15.5 17.5 20 12 20C6.5 20 2 15.5 2 10"/>
  </svg>
);

// Navigation Component
const StickyNavigation = ({ activeSection }: { activeSection: string }) => {
  const navItems = [
    { id: "hero", label: "Home" },
    { id: "pillars", label: "Impact" },
    { id: "stats", label: "Numbers" },
    { id: "programs", label: "Programs" },
    { id: "events", label: "Events" },
    { id: "testimonials", label: "Stories" },
    { id: "action", label: "Get Involved" }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-green-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center">
              <span className="text-white font-bold text-sm">T</span>
            </div>
            <span className="font-bold text-gray-800">Taka</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-sm font-medium transition-colors ${
                  activeSection === item.id
                    ? "text-green-600"
                    : "text-gray-600 hover:text-green-500"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
          
          <div className="flex items-center space-x-4">
            <Address address={connectedAddress} />
          </div>
        </div>
      </div>
    </nav>
  );
};

// Hero Banner Component
const HeroBanner = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient and patterns */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-white to-emerald-50"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(34,197,94,0.1)_0%,transparent_50%),radial-gradient(circle_at_80%_80%,rgba(16,185,129,0.1)_0%,transparent_50%)]"></div>
      
      {/* Floating elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-radial from-green-100/40 to-transparent rounded-full blur-xl animate-float"></div>
        <div className="absolute bottom-1/3 right-1/3 w-40 h-40 bg-gradient-radial from-emerald-100/30 to-transparent rounded-full blur-2xl animate-float-delayed"></div>
        <div className="absolute top-3/4 left-3/4 w-24 h-24 bg-gradient-radial from-green-200/50 to-transparent rounded-full blur-lg animate-pulse"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Eco icon */}
        <div className="mb-8 flex justify-center">
          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-green-100 via-emerald-100 to-green-200 flex items-center justify-center border border-green-300/50 shadow-lg">
            <svg className="w-10 h-10 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
          </div>
        </div>
        
        {/* Title */}
        <h1 className="text-6xl lg:text-8xl font-bold bg-gradient-to-br from-gray-800 via-gray-700 to-green-800 bg-clip-text text-transparent mb-6 leading-tight">
          Welcome to Taka
        </h1>
        
        {/* Subtitle */}
        <h2 className="text-2xl lg:text-3xl font-medium mb-8 bg-gradient-to-r from-green-600 via-emerald-500 to-green-700 bg-clip-text text-transparent">
          Eco Dashboard
        </h2>
        
        {/* Tagline */}
        <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
          Track your impact, earn rewards, and build a sustainable future one action at a time.
        </p>
        
        {/* CTA Button */}
        <div className="flex justify-center">
          <button 
            onClick={() => document.getElementById('pillars')?.scrollIntoView({ behavior: 'smooth' })}
            className="group bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 flex items-center space-x-2"
          >
            <span>Explore Your Impact</span>
            <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};

// Three Pillars Section
const ThreePillars = () => {
  const pillars = [
    {
      icon: TrophyIcon,
      title: "Rewards",
      description: "Earn TAKA tokens for every piece of waste you collect and recycle responsibly.",
      stats: "2,847 tokens earned",
      color: "from-green-400 to-emerald-500"
    },
    {
      icon: UsersIcon,
      title: "Community Impact",
      description: "Join thousands of eco-warriors making a real difference in their neighborhoods.",
      stats: "156.7 kg recycled",
      color: "from-emerald-400 to-green-500"
    },
    {
      icon: GlobeAltIcon,
      title: "Global Goals",
      description: "Contribute to worldwide sustainability targets and climate action initiatives.",
      stats: "234.5 kg CO₂ saved",
      color: "from-green-500 to-emerald-600"
    }
  ];

  return (
    <section id="pillars" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            Your Impact Journey
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Three ways Taka transforms your environmental actions into meaningful change
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => (
            <div 
              key={index}
              className="group relative bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 border border-green-100 hover:border-green-200 transition-all duration-500 hover:scale-105 hover:shadow-xl"
            >
              {/* Icon */}
              <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${pillar.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <pillar.icon className="w-8 h-8 text-white" />
              </div>
              
              {/* Content */}
              <h3 className="text-2xl font-bold text-gray-800 mb-4">{pillar.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{pillar.description}</p>
              
              {/* Stats */}
              <div className={`inline-block bg-gradient-to-r ${pillar.color} bg-clip-text text-transparent font-semibold text-lg`}>
                {pillar.stats}
              </div>
              
              {/* Hover effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-green-100/20 to-emerald-100/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Community Stats Section
const CommunityStats = () => {
  const stats = [
    { label: "Total Recyclers", value: "24,567", icon: UsersIcon },
    { label: "Waste Collected", value: "1,234 tons", icon: GlobeAltIcon },
    { label: "CO₂ Prevented", value: "5,678 kg", icon: HeartIcon },
    { label: "Communities Served", value: "89 cities", icon: MapPinIcon }
  ];

  return (
    <section id="stats" className="py-24 bg-gradient-to-br from-green-50 via-white to-emerald-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            Impact in Numbers
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Together, we're creating measurable change for a sustainable future
          </p>
        </div>
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="text-center group"
            >
              <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-green-100 to-emerald-100 flex items-center justify-center border border-green-200 group-hover:scale-110 transition-transform duration-300">
                <stat.icon className="w-10 h-10 text-green-600" />
              </div>
              <div className="text-3xl lg:text-4xl font-bold text-gray-800 mb-2">{stat.value}</div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
// Current Programs Section
const CurrentPrograms = () => {
  const programs = [
    {
      title: "Ocean Cleanup Initiative",
      description: "Join our coastal cleanup program to protect marine life and earn bonus tokens.",
      participants: "1,234 active",
      reward: "50% bonus tokens",
      icon: GlobeAltIcon,
      status: "Active"
    },
    {
      title: "School Recycling Program",
      description: "Educational workshops and recycling drives in local schools and universities.",
      participants: "89 schools",
      reward: "Community certificates",
      icon: SparklesIcon,
      status: "Launching Soon"
    },
    {
      title: "Corporate Partnerships",
      description: "Partner with businesses to create workplace sustainability programs.",
      participants: "45 companies",
      reward: "Enterprise rewards",
      icon: UsersIcon,
      status: "Active"
    }
  ];

  return (
    <section id="programs" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            Current Programs
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover ongoing initiatives where you can make the biggest impact
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 border border-green-100 hover:border-green-200 transition-all duration-300 hover:shadow-lg"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center">
                  <program.icon className="w-6 h-6 text-white" />
                </div>
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                  program.status === "Active" 
                    ? "bg-green-100 text-green-700" 
                    : "bg-yellow-100 text-yellow-700"
                }`}>
                  {program.status}
                </span>
              </div>
              
              <h3 className="text-xl font-bold text-gray-800 mb-3">{program.title}</h3>
              <p className="text-gray-600 mb-6">{program.description}</p>
              
              <div className="space-y-2 mb-6">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Participants:</span>
                  <span className="font-medium text-gray-700">{program.participants}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Reward:</span>
                  <span className="font-medium text-green-600">{program.reward}</span>
                </div>
              </div>
              
              <button className="w-full bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white font-semibold py-3 rounded-lg transition-all duration-300">
                Join Program
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Upcoming Events Section
const UpcomingEvents = () => {
  const events = [
    {
      date: "Sep 5",
      title: "Community Beach Cleanup",
      location: "Coastal Park, Nairobi",
      participants: 156,
      time: "9:00 AM - 2:00 PM"
    },
    {
      date: "Sep 12",
      title: "Recycling Workshop",
      location: "Tech Hub, Westlands",
      participants: 89,
      time: "2:00 PM - 5:00 PM"
    },
    {
      date: "Sep 20",
      title: "Green Tech Conference",
      location: "KICC, Nairobi",
      participants: 234,
      time: "8:00 AM - 6:00 PM"
    }
  ];

  return (
    <section id="events" className="py-24 bg-gradient-to-br from-green-50 via-white to-emerald-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            Upcoming Events
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join us at exciting events and challenges to accelerate your impact
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-6 border border-green-100 hover:border-green-200 transition-all duration-300 hover:shadow-lg"
            >
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-green-100 to-emerald-100 flex flex-col items-center justify-center">
                  <span className="text-xs font-medium text-green-600">SEP</span>
                  <span className="text-lg font-bold text-green-700">{event.date.split(' ')[1]}</span>
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-gray-800">{event.title}</h3>
                  <div className="flex items-center text-sm text-gray-500 mt-1">
                    <CalendarIcon className="w-4 h-4 mr-1" />
                    {event.time}
                  </div>
                </div>
              </div>
              
              <div className="space-y-2 mb-4">
                <div className="flex items-center text-sm text-gray-600">
                  <MapPinIcon className="w-4 h-4 mr-2 text-green-500" />
                  {event.location}
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <UsersIcon className="w-4 h-4 mr-2 text-green-500" />
                  {event.participants} attending
                </div>
              </div>
              
              <button className="w-full bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white font-semibold py-2 rounded-lg transition-all duration-300">
                Register
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
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
              <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/80 backdrop-blur-sm border border-green-200 rounded-full shadow-sm">
                <span className="text-gray-600 text-sm">Connected Wallet:</span>
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
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">Dashboard Overview</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">Your environmental impact at a glance</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            <DashboardCard
              title="TAKA Balance"
              value={mockData.takaBalance}
              subtitle="Tokens earned"
              icon={<CurrencyDollarIcon className="h-8 w-8 text-green-500" />}
              trend={{ value: 12.5, isPositive: true }}
            />
            
            <DashboardCard
              title="Trash Collected"
              value={`${mockData.trashCollected} kg`}
              subtitle="This month"
              icon={<RecycleIconCustom className="h-8 w-8 text-green-400" />}
              trend={{ value: 8.3, isPositive: true }}
            />
            
            <DashboardCard
              title="Global Rank"
              value={mockData.globalRank}
              subtitle="Out of 15,847 collectors"
              icon={<TrophyIcon className="h-8 w-8 text-green-400" />}
              trend={{ value: 5.2, isPositive: true }}
            />
            
            <DashboardCard
              title="CO₂ Impact"
              value={`${mockData.co2Impact} kg`}
              subtitle="Carbon saved"
              icon={<GlobeAltIcon className="h-8 w-8 text-green-400" />}
              trend={{ value: 15.7, isPositive: true }}
            />
          </div>
        </div>
      </section>

      {/* Goals & Progress Section */}
      <section className="py-16 section-reveal">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
                        <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">Goals & Progress</h2>
              <p className="text-gray-600 text-lg">Track your weekly and monthly targets</p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="clean-card p-8">
                <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
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
              
              <div className="clean-card p-8">
                <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
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

      {/* Enhanced Dashboard Section */}
      <section className="py-16 section-reveal">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Token Summary */}
              <div className="lg:col-span-1">
                <TokenSummary />
              </div>
              
              {/* Transaction History */}
              <div className="lg:col-span-2">
                <TransactionHistory />
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
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">Take Action</h2>
              <p className="text-gray-600 text-lg">Ready to make an impact? Start here</p>
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

      {/* Community Impact Section - Light background */}
      <section className="py-20 bg-green-50/50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto text-center">
            <div className="mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">Community Impact</h2>
              <p className="text-gray-600 text-lg">Together, we're building a sustainable future</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="text-center">
                <div className="text-5xl lg:text-6xl font-bold text-green-500 mb-4">15,847</div>
                <div className="text-gray-700 text-lg">Active Collectors</div>
                <div className="text-gray-500 text-sm mt-2">Growing daily</div>
              </div>
              <div className="text-center">
                <div className="text-5xl lg:text-6xl font-bold text-green-400 mb-4">2.4M kg</div>
                <div className="text-gray-700 text-lg">Trash Collected</div>
                <div className="text-gray-500 text-sm mt-2">This year</div>
              </div>
              <div className="text-center">
                <div className="text-5xl lg:text-6xl font-bold text-green-400 mb-4">₦45.7M</div>
                <div className="text-gray-700 text-lg">Tokens Distributed</div>
                <div className="text-gray-500 text-sm mt-2">To date</div>
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
    <WasteRecordForm 
      isOpen={isWasteFormOpen}
      onClose={() => setIsWasteFormOpen(false)}
      onSubmit={handleWasteSubmit}
    />

    {/* Quick Record Button */}
    <QuickRecordButton onClick={() => setIsWasteFormOpen(true)} />
    </>
  );
};

export default Dashboard;
