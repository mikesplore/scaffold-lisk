"use client";

import React, { useState, useEffect } from "react";
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
  StarIcon,
  LeafIcon,
  RecyclingIcon
} from "@heroicons/react/24/outline";
import { WasteRecordForm } from "~~/components/taka/WasteRecordForm";
import { Address } from "~~/components/scaffold-eth";

// Navigation Component
const StickyNavigation = ({ activeSection }: { activeSection: string }) => {
  const navItems = [
    { id: "hero", label: "Home" },
    { id: "pillars", label: "Impact" },
    { id: "numbers", label: "Numbers" },
    { id: "programs", label: "Programs" },
    { id: "events", label: "Events" },
    { id: "testimonials", label: "Stories" },
    { id: "cta", label: "Get Started" }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 nav-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-full bg-green-blend flex items-center justify-center shadow-lg">
              <LeafIcon className="w-6 h-6 text-white" />
            </div>
            <span className="font-bold text-xl text-dark-grey">Taka</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-sm font-medium transition-colors ${
                  activeSection === item.id
                    ? "text-green-gradient font-semibold"
                    : "text-medium-grey hover:text-emerald-600"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
          
          <div className="flex items-center space-x-4">
            <Address address="" />
          </div>
        </div>
      </div>
    </nav>
  );
};

// Hero Banner Component
const HeroBanner = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Hero illustration */}
          <div className="mb-12 flex justify-center">
            <div className="hero-illustration w-32 h-32 flex items-center justify-center animate-gentle-glow">
              <div className="relative">
                <GlobeAltIcon className="w-16 h-16 text-emerald-600" />
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-blend rounded-full flex items-center justify-center">
                  <RecyclingIcon className="w-4 h-4 text-white" />
                </div>
              </div>
            </div>
          </div>
          
          {/* Main title */}
          <h1 className="text-5xl lg:text-7xl font-bold text-dark-grey mb-6 leading-tight">
            Welcome to{" "}
            <span className="text-green-gradient">Taka</span>{" "}
            Eco Dashboard
          </h1>
          
          {/* Subtitle tagline */}
          <p className="text-2xl lg:text-3xl font-medium text-medium-grey mb-8">
            Track your impact, earn rewards, save the planet.
          </p>
          
          {/* Description */}
          <p className="text-xl text-light-grey mb-12 max-w-3xl mx-auto leading-relaxed">
            Join the revolution of blockchain-powered recycling. Every piece of waste you collect 
            creates tokens, builds community, and helps heal our planet.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button 
              onClick={() => document.getElementById('pillars')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-green-blend px-8 py-4 text-lg"
            >
              <span>Start Your Journey</span>
              <ArrowRightIcon className="w-5 h-5 ml-2 inline" />
            </button>
            <button className="btn-earthy px-8 py-4 text-lg">
              Learn More
            </button>
          </div>
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
      description: "Earn TAKA tokens for every piece of waste you collect. Transform trash into digital treasure.",
      highlight: "2,847 tokens earned",
      color: "emerald"
    },
    {
      icon: UsersIcon,
      title: "Community Impact",
      description: "Join thousands of eco-warriors making real change in neighborhoods across the globe.",
      highlight: "24,567 active collectors",
      color: "green"
    },
    {
      icon: GlobeAltIcon,
      title: "Global Goals",
      description: "Contribute to worldwide sustainability targets and help achieve climate action goals.",
      highlight: "1,234 tons collected",
      color: "teal"
    }
  ];

  return (
    <section id="pillars" className="py-24 bg-gradient-to-br from-green-50/30 to-emerald-50/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fadeInUp">
          <h2 className="text-4xl lg:text-6xl font-bold text-dark-grey mb-6">
            Your Impact Journey
          </h2>
          <p className="text-xl text-medium-grey max-w-3xl mx-auto">
            Three powerful ways Taka transforms your environmental actions into meaningful change
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => (
            <div key={index} className="pillar-card p-8 text-center">
              {/* Icon with gradient background */}
              <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-green-blend flex items-center justify-center transform transition-transform hover:scale-110">
                <pillar.icon className="w-10 h-10 text-white" />
              </div>
              
              {/* Content */}
              <h3 className="text-2xl font-bold text-dark-grey mb-4">{pillar.title}</h3>
              <p className="text-medium-grey mb-6 leading-relaxed">{pillar.description}</p>
              
              {/* Highlight stat */}
              <div className="stats-number text-xl font-bold">
                {pillar.highlight}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Community Impact Numbers Section
const CommunityNumbers = () => {
  const stats = [
    { 
      number: "24,567", 
      label: "Total Collectors", 
      sublabel: "Growing daily",
      icon: UsersIcon 
    },
    { 
      number: "1,234 tons", 
      label: "Waste Collected", 
      sublabel: "This year",
      icon: GiftIcon 
    },
    { 
      number: "5,678 kg", 
      label: "CO₂ Prevented", 
      sublabel: "Environmental impact",
      icon: HeartIcon 
    },
    { 
      number: "89 cities", 
      label: "Communities Served", 
      sublabel: "Worldwide reach",
      icon: MapPinIcon 
    }
  ];

  return (
    <section id="numbers" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-6xl font-bold text-dark-grey mb-6">
            Impact in Numbers
          </h2>
          <p className="text-xl text-medium-grey max-w-3xl mx-auto">
            Together, we're creating measurable change for a sustainable future
          </p>
        </div>
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center clean-card p-8">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-green-blend flex items-center justify-center">
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <div className="stats-number text-3xl lg:text-4xl mb-2">{stat.number}</div>
              <div className="text-dark-grey font-semibold mb-1">{stat.label}</div>
              <div className="text-light-grey text-sm">{stat.sublabel}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Programs Section
const ProgramsSection = () => {
  const programs = [
    {
      title: "Ocean Cleanup Initiative",
      description: "Join coastal cleanup programs to protect marine life and earn bonus rewards.",
      participants: "1,234 active",
      status: "Active",
      buttonClass: "btn-green-blend"
    },
    {
      title: "School Recycling Program", 
      description: "Educational workshops and recycling drives in schools and universities.",
      participants: "89 schools",
      status: "Launching Soon",
      buttonClass: "btn-earthy"
    },
    {
      title: "Corporate Partnerships",
      description: "Partner with businesses to create workplace sustainability programs.",
      participants: "45 companies", 
      status: "Active",
      buttonClass: "btn-teal"
    }
  ];

  return (
    <section id="programs" className="py-24 bg-gradient-to-br from-emerald-50/40 to-green-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-6xl font-bold text-dark-grey mb-6">
            Current Programs
          </h2>
          <p className="text-xl text-medium-grey max-w-3xl mx-auto">
            Discover ongoing initiatives where you can make the biggest impact
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <div key={index} className="clean-card p-8">
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-lg bg-green-blend flex items-center justify-center">
                  <SparklesIcon className="w-6 h-6 text-white" />
                </div>
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                  program.status === "Active" 
                    ? "bg-green-100 text-green-700" 
                    : "bg-amber-100 text-amber-700"
                }`}>
                  {program.status}
                </span>
              </div>
              
              <h3 className="text-xl font-bold text-dark-grey mb-3">{program.title}</h3>
              <p className="text-medium-grey mb-6">{program.description}</p>
              
              <div className="mb-6">
                <div className="text-sm text-light-grey">Participants:</div>
                <div className="font-semibold text-dark-grey">{program.participants}</div>
              </div>
              
              <button className={`w-full ${program.buttonClass} py-3 px-6 rounded-lg`}>
                Join Program
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Events Section
const EventsSection = () => {
  const events = [
    {
      date: "Sep 5",
      title: "Community Beach Cleanup",
      location: "Coastal Park, Nairobi",
      time: "9:00 AM - 2:00 PM",
      attendees: 156
    },
    {
      date: "Sep 12", 
      title: "Recycling Workshop",
      location: "Tech Hub, Westlands",
      time: "2:00 PM - 5:00 PM",
      attendees: 89
    },
    {
      date: "Sep 20",
      title: "Green Tech Conference", 
      location: "KICC, Nairobi",
      time: "8:00 AM - 6:00 PM",
      attendees: 234
    }
  ];

  return (
    <section id="events" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-6xl font-bold text-dark-grey mb-6">
            Upcoming Events
          </h2>
          <p className="text-xl text-medium-grey max-w-3xl mx-auto">
            Join us at exciting events and challenges to accelerate your impact
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <div key={index} className="event-card p-6">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-green-100 to-emerald-100 flex flex-col items-center justify-center">
                  <span className="text-xs font-medium text-emerald-600">SEP</span>
                  <span className="text-lg font-bold text-emerald-700">{event.date.split(' ')[1]}</span>
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-dark-grey">{event.title}</h3>
                  <div className="flex items-center text-sm text-medium-grey mt-1">
                    <CalendarIcon className="w-4 h-4 mr-1" />
                    {event.time}
                  </div>
                </div>
              </div>
              
              <div className="space-y-2 mb-4">
                <div className="flex items-center text-sm text-medium-grey">
                  <MapPinIcon className="w-4 h-4 mr-2 text-emerald-500" />
                  {event.location}
                </div>
                <div className="flex items-center text-sm text-medium-grey">
                  <UsersIcon className="w-4 h-4 mr-2 text-emerald-500" />
                  {event.attendees} attending
                </div>
              </div>
              
              <button className="w-full btn-green-blend py-2 px-4 rounded-lg">
                Register
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Testimonials Section  
const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Sarah Mwangi",
      role: "Community Leader", 
      location: "Kibera, Nairobi",
      message: "Taka has transformed how our community thinks about waste. We've earned over 10,000 tokens while cleaning our neighborhood!",
      avatar: "SM",
      rating: 5
    },
    {
      name: "David Kiprop",
      role: "Student Activist",
      location: "University of Nairobi", 
      message: "The school program helped us establish a campus-wide recycling initiative. Amazing to see real impact!",
      avatar: "DK", 
      rating: 5
    },
    {
      name: "Grace Wanjiku",
      role: "Small Business Owner",
      location: "Westlands, Nairobi",
      message: "My customers love earning tokens for bringing recyclables. It's great for business and the environment!",
      avatar: "GW",
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="py-24 bg-gradient-to-br from-green-50/40 to-emerald-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-6xl font-bold text-dark-grey mb-6">
            Community Stories
          </h2>
          <p className="text-xl text-medium-grey max-w-3xl mx-auto">
            Real people making real impact with Taka across Kenya
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="profile-tile p-8">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-green-blend flex items-center justify-center">
                  <span className="text-white font-bold text-sm">{testimonial.avatar}</span>
                </div>
                <div>
                  <h4 className="font-bold text-dark-grey">{testimonial.name}</h4>
                  <p className="text-sm text-medium-grey">{testimonial.role}</p>
                  <p className="text-xs text-emerald-600">{testimonial.location}</p>
                </div>
              </div>
              
              <blockquote className="text-medium-grey mb-6 italic leading-relaxed">
                "{testimonial.message}"
              </blockquote>
              
              <div className="flex items-center space-x-2">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <StarIcon key={i} className="w-5 h-5 text-amber-400 fill-current" />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Call to Action Section
const CallToActionSection = () => {
  return (
    <section id="cta" className="py-24 bg-gradient-to-br from-emerald-500 via-green-500 to-teal-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            Ready to Make an Impact?
          </h2>
          <p className="text-xl text-green-100 mb-12 max-w-2xl mx-auto">
            Join thousands of eco-warriors transforming waste into rewards and creating a sustainable future.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <GiftIcon className="w-12 h-12 text-white mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Collect Trash</h3>
              <p className="text-green-100">Start earning tokens for every piece of waste you collect</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <MapPinIcon className="w-12 h-12 text-white mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Find Stations</h3>
              <p className="text-green-100">Locate recycling stations and collection points near you</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <ShoppingBagIcon className="w-12 h-12 text-white mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Redeem Tokens</h3>
              <p className="text-green-100">Exchange your TAKA tokens for rewards and benefits</p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-green-600 font-bold py-4 px-8 rounded-full hover:bg-green-50 transition-all duration-300 hover:scale-105 shadow-lg">
              Start Collecting Waste
            </button>
            <button className="bg-transparent border-2 border-white text-white font-bold py-4 px-8 rounded-full hover:bg-white hover:text-green-600 transition-all duration-300">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

// Main Dashboard Component
const Dashboard: NextPage = () => {
  const { address: connectedAddress } = useAccount();
  const [isWasteFormOpen, setIsWasteFormOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  // Handle scroll to update active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "pillars", "numbers", "programs", "events", "testimonials", "cta"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <StickyNavigation activeSection={activeSection} />
      
      <main className="relative">
        <HeroBanner />
        <ThreePillars />
        <CommunityNumbers />
        <ProgramsSection />
        <EventsSection />
        <TestimonialsSection />
        <CallToActionSection />
      </main>

      {/* Waste Record Form Modal */}
      {isWasteFormOpen && (
        <WasteRecordForm 
          isOpen={isWasteFormOpen}
          onClose={() => setIsWasteFormOpen(false)}
        />
      )}

      {/* Floating Action Button */}
      <button
        onClick={() => setIsWasteFormOpen(true)}
        className="fixed bottom-8 right-8 w-16 h-16 fab-light rounded-full flex items-center justify-center z-40"
      >
        <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
        </svg>
      </button>
    </>
  );
};

export default Dashboard;
