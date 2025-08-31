"use client";

import React, { useCallback, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { TakaLogo } from "./taka/TakaLogo";
import { 
  Bars3Icon, 
  HomeIcon, 
  MapPinIcon, 
  CurrencyDollarIcon, 
  ChartBarIcon, 
  UserGroupIcon,
  CogIcon 
} from "@heroicons/react/24/outline";
import {
  RainbowKitCustomConnectButton,
} from "~~/components/scaffold-eth";
import { useOutsideClick } from "~~/hooks/scaffold-eth";
import { cn } from "~~/utils/cn";

type HeaderMenuLink = {
  label: string;
  href: string;
  icon?: React.ReactNode;
};

export const menuLinks: HeaderMenuLink[] = [
  {
    label: "Dashboard",
    href: "/",
    icon: <HomeIcon className="h-4 w-4" />,
  },
  {
    label: "Stations",
    href: "/stations",
    icon: <MapPinIcon className="h-4 w-4" />,
  },
  {
    label: "Marketplace",
    href: "/marketplace",
    icon: <CurrencyDollarIcon className="h-4 w-4" />,
  },
  {
    label: "Community",
    href: "/community",
    icon: <UserGroupIcon className="h-4 w-4" />,
  },
];

export const HeaderMenuLinks = () => {
  const pathname = usePathname();

  return (
    <>
      {menuLinks.map(({ label, href, icon }) => {
        const isActive = pathname === href;
        return (
          <li key={href}>
            <Link
              href={href}
              passHref
              className={cn(
                "relative flex items-center gap-3 px-4 py-3 text-sm font-medium transition-all duration-300 rounded-lg group",
                isActive 
                  ? "bg-white/20 text-white shadow-glow backdrop-blur-sm" 
                  : "text-white/80 hover:text-white hover:bg-white/10 hover:shadow-primary",
              )}
            >
              <div className={cn(
                "transition-colors duration-300",
                isActive ? "text-white" : "text-white/60 group-hover:text-white"
              )}>
                {icon}
              </div>
              <span className="hidden sm:inline">{label}</span>
              {isActive && (
                <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent rounded-lg pointer-events-none" />
              )}
            </Link>
          </li>
        );
      })}
    </>
  );
};

/**
 * Taka Platform Header with Glassmorphism
 */
export const Header = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const burgerMenuRef = useRef<HTMLDivElement>(null);
  useOutsideClick(
    burgerMenuRef,
    useCallback(() => setIsDrawerOpen(false), []),
  );

  return (
    <header className="sticky top-0 z-50 bg-primary-gradient backdrop-blur-md border-b border-white/20 shadow-vibrant">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo and Brand */}
          <div className="flex items-center space-x-4">
            <div className="lg:hidden" ref={burgerMenuRef}>
              <button
                className="bg-white/10 hover:bg-white/20 p-2 text-white transition-all duration-300 rounded-lg backdrop-blur-sm border border-white/20 shadow-glow"
                onClick={() => setIsDrawerOpen(!isDrawerOpen)}
              >
                <div className="w-6 h-6 relative">
                  <span
                    className={`absolute top-1 left-0 w-6 h-0.5 bg-white transition-all duration-300 transform origin-center ${
                      isDrawerOpen ? "rotate-45 translate-y-2" : ""
                    }`}
                  />
                  <span
                    className={`absolute top-3 left-0 w-6 h-0.5 bg-white transition-all duration-300 ${
                      isDrawerOpen ? "opacity-0" : ""
                    }`}
                  />
                  <span
                    className={`absolute top-5 left-0 w-6 h-0.5 bg-white transition-all duration-300 transform origin-center ${
                      isDrawerOpen ? "-rotate-45 -translate-y-2" : ""
                    }`}
                  />
                </div>
              </button>
              
              {isDrawerOpen && (
                <div className="absolute top-16 left-4 right-4 glass-gradient rounded-xl p-6 shadow-vibrant">
                  <ul className="space-y-2">
                    <HeaderMenuLinks />
                  </ul>
                </div>
              )}
            </div>
            
            <Link href="/" className="flex items-center space-x-3 group">
              <TakaLogo size={40} className="group-hover:scale-110 transition-transform duration-300 drop-shadow-lg" />
              <div className="hidden sm:block">
                <div className="text-xl font-bold text-white drop-shadow-sm">Taka</div>
                <div className="text-xs text-white/80 font-medium">Recycle • Earn • Impact</div>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:block">
            <ul className="flex items-center space-x-2">
              <HeaderMenuLinks />
            </ul>
          </nav>

          {/* Wallet Connection and Actions */}
          <div className="flex items-center space-x-3">
            <RainbowKitCustomConnectButton />
          </div>
        </div>
      </div>
    </header>
  );
};
