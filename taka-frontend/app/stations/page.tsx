"use client";

import React, { useState } from "react";
import type { NextPage } from "next";
import { 
  MapPinIcon, 
  CheckCircleIcon, 
  ClockIcon,
  StarIcon,
  PhoneIcon,
  InformationCircleIcon
} from "@heroicons/react/24/outline";
import { DashboardCard } from "~~/components/taka/DashboardCard";

interface CollectionStation {
  id: string;
  name: string;
  address: string;
  distance: number;
  rating: number;
  status: "open" | "closed" | "full";
  hours: string;
  acceptedTypes: string[];
  contact?: string;
  capacity: number;
  currentLoad: number;
}

const mockStations: CollectionStation[] = [
  {
    id: "1",
    name: "EcoHub Central",
    address: "123 Recycleway Ave, Green District",
    distance: 0.8,
    rating: 4.8,
    status: "open",
    hours: "6:00 AM - 10:00 PM",
    acceptedTypes: ["Plastic", "Glass", "Metal", "Paper"],
    contact: "+234 123 456 7890",
    capacity: 100,
    currentLoad: 45,
  },
  {
    id: "2",
    name: "Sustainable Solutions Hub",
    address: "456 Green Street, Eco Valley",
    distance: 1.2,
    rating: 4.6,
    status: "open",
    hours: "24/7",
    acceptedTypes: ["Plastic", "Metal", "E-waste"],
    contact: "+234 123 456 7891",
    capacity: 150,
    currentLoad: 120,
  },
  {
    id: "3",
    name: "Community Recycle Point",
    address: "789 Environment Blvd, Clean City",
    distance: 2.1,
    rating: 4.4,
    status: "closed",
    hours: "7:00 AM - 6:00 PM",
    acceptedTypes: ["Paper", "Cardboard", "Glass"],
    capacity: 80,
    currentLoad: 25,
  },
  {
    id: "4",
    name: "WasteLess Station",
    address: "321 Recycle Road, Green Heights",
    distance: 3.5,
    rating: 4.9,
    status: "full",
    hours: "8:00 AM - 8:00 PM",
    acceptedTypes: ["All Types"],
    contact: "+234 123 456 7892",
    capacity: 200,
    currentLoad: 200,
  },
];

const StationsPage: NextPage = () => {
  const [selectedStation, setSelectedStation] = useState<CollectionStation | null>(null);
  const [filterStatus, setFilterStatus] = useState<string>("all");

  const getStatusColor = (status: string) => {
    switch (status) {
      case "open": return "text-green-400";
      case "closed": return "text-yellow-400";
      case "full": return "text-red-400";
      default: return "text-gray-400";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "open": return <CheckCircleIcon className="h-5 w-5" />;
      case "closed": return <ClockIcon className="h-5 w-5" />;
      case "full": return <InformationCircleIcon className="h-5 w-5" />;
      default: return <ClockIcon className="h-5 w-5" />;
    }
  };

  const filteredStations = mockStations.filter(station => 
    filterStatus === "all" || station.status === filterStatus
  );

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-taka-secondary-500/20 rounded-full blur-3xl float-animation"></div>
        <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-taka-primary-500/20 rounded-full blur-3xl float-animation" style={{ animationDelay: "3s" }}></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-8 space-y-8">
        {/* Header */}
        <div className="glass p-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Collection <span className="bg-gradient-emerald-cyan bg-clip-text text-transparent">Stations</span>
          </h1>
          <p className="text-xl text-white/80 mb-6 max-w-2xl mx-auto">
            Find the nearest collection points to deposit your recyclable materials and earn TAKA tokens.
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <DashboardCard
            title="Nearest Station"
            value="0.8 km"
            subtitle="EcoHub Central"
            icon={<MapPinIcon className="h-8 w-8 text-taka-primary-400" />}
            glowColor="emerald"
            variant="subtle"
          />
          
          <DashboardCard
            title="Open Stations"
            value="12"
            subtitle="Available now"
            icon={<CheckCircleIcon className="h-8 w-8 text-green-400" />}
            glowColor="cyan"
            variant="subtle"
          />
          
          <DashboardCard
            title="Average Rating"
            value="4.7★"
            subtitle="User satisfaction"
            icon={<StarIcon className="h-8 w-8 text-taka-accent-400" />}
            glowColor="amber"
            variant="subtle"
          />
        </div>

        {/* Filters */}
        <div className="glass p-6">
          <div className="flex flex-wrap gap-4 items-center">
            <span className="text-white font-medium">Filter by status:</span>
            {["all", "open", "closed", "full"].map((status) => (
              <button
                key={status}
                onClick={() => setFilterStatus(status)}
                className={`px-4 py-2 rounded-xl font-medium transition-all duration-300 capitalize ${
                  filterStatus === status
                    ? "glass-strong text-white shadow-glow-emerald"
                    : "glass-subtle text-white/70 hover:text-white hover:glass"
                }`}
              >
                {status === "all" ? "All Stations" : status}
              </button>
            ))}
          </div>
        </div>

        {/* Station List */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredStations.map((station) => (
            <div
              key={station.id}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 cursor-pointer hover:bg-white/8 transition-all duration-300 backdrop-blur-md"
              onClick={() => setSelectedStation(station)}
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">{station.name}</h3>
                  <p className="text-white/70 text-sm mb-2">{station.address}</p>
                  <p className="text-white/60 text-sm">{station.distance} km away</p>
                </div>
                
                <div className="text-right">
                  <div className={`flex items-center gap-2 mb-2 ${getStatusColor(station.status)}`}>
                    {getStatusIcon(station.status)}
                    <span className="capitalize font-medium">{station.status}</span>
                  </div>
                  <div className="flex items-center gap-1 text-taka-accent-400">
                    <StarIcon className="h-4 w-4" />
                    <span className="text-sm">{station.rating}</span>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <div>
                  <span className="text-white/70 text-sm">Hours: </span>
                  <span className="text-white text-sm">{station.hours}</span>
                </div>
                
                <div>
                  <span className="text-white/70 text-sm">Accepts: </span>
                  <div className="flex flex-wrap gap-2 mt-1">
                    {station.acceptedTypes.map((type) => (
                      <span
                        key={type}
                        className="px-2 py-1 bg-taka-primary-500/20 text-taka-primary-400 text-xs rounded-lg"
                      >
                        {type}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-white/70 text-sm">Capacity: </span>
                    <span className="text-white text-sm">{station.currentLoad}/{station.capacity} tons</span>
                  </div>
                  <div className="w-24 bg-white/10 rounded-full h-2">
                    <div
                      className="h-2 bg-gradient-emerald-cyan rounded-full transition-all duration-500"
                      style={{ width: `${(station.currentLoad / station.capacity) * 100}%` }}
                    ></div>
                  </div>
                </div>

                {station.contact && (
                  <div className="flex items-center gap-2 text-taka-secondary-400">
                    <PhoneIcon className="h-4 w-4" />
                    <span className="text-sm">{station.contact}</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Station Details Modal */}
        {selectedStation && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="glass-strong max-w-2xl w-full p-8 border border-white/20">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h2 className="text-2xl font-bold text-white mb-2">{selectedStation.name}</h2>
                  <p className="text-white/70">{selectedStation.address}</p>
                </div>
                <button
                  onClick={() => setSelectedStation(null)}
                  className="text-white/70 hover:text-white text-xl"
                >
                  ✕
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="space-y-4">
                  <div>
                    <h4 className="text-white font-medium mb-2">Status</h4>
                    <div className={`flex items-center gap-2 ${getStatusColor(selectedStation.status)}`}>
                      {getStatusIcon(selectedStation.status)}
                      <span className="capitalize">{selectedStation.status}</span>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-white font-medium mb-2">Operating Hours</h4>
                    <p className="text-white/70">{selectedStation.hours}</p>
                  </div>
                  
                  <div>
                    <h4 className="text-white font-medium mb-2">Distance</h4>
                    <p className="text-white/70">{selectedStation.distance} km away</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="text-white font-medium mb-2">Rating</h4>
                    <div className="flex items-center gap-1 text-taka-accent-400">
                      <StarIcon className="h-5 w-5" />
                      <span>{selectedStation.rating} / 5.0</span>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-white font-medium mb-2">Current Capacity</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-white/70">{selectedStation.currentLoad} tons</span>
                        <span className="text-white/70">{selectedStation.capacity} tons</span>
                      </div>
                      <div className="w-full bg-white/10 rounded-full h-3">
                        <div
                          className="h-3 bg-gradient-emerald-cyan rounded-full transition-all duration-500"
                          style={{ width: `${(selectedStation.currentLoad / selectedStation.capacity) * 100}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                  
                  {selectedStation.contact && (
                    <div>
                      <h4 className="text-white font-medium mb-2">Contact</h4>
                      <div className="flex items-center gap-2 text-taka-secondary-400">
                        <PhoneIcon className="h-4 w-4" />
                        <span>{selectedStation.contact}</span>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              <div className="mb-6">
                <h4 className="text-white font-medium mb-3">Accepted Materials</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedStation.acceptedTypes.map((type) => (
                    <span
                      key={type}
                      className="px-3 py-2 bg-taka-primary-500/20 text-taka-primary-400 rounded-xl border border-taka-primary-500/30"
                    >
                      {type}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex gap-4">
                <button className="flex-1 bg-gradient-emerald-cyan text-white py-3 rounded-xl font-medium hover:shadow-glow-emerald transition-all duration-300">
                  Get Directions
                </button>
                <button className="flex-1 glass text-white py-3 rounded-xl font-medium hover:glass-strong transition-all duration-300">
                  Report Issue
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default StationsPage;
