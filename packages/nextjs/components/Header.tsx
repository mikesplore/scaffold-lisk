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
  DappConsoleButton,
  FaucetButton,
  RainbowKitCustomConnectButton,
  SuperchainFaucetButton,
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
    label: "Collection Stations",
    href: "/stations",
    icon: <MapPinIcon className="h-4 w-4" />,
  },
  {
    label: "Marketplace",
    href: "/marketplace",
    icon: <CurrencyDollarIcon className="h-4 w-4" />,
  },
  {
    label: "Analytics",
    href: "/analytics",
    icon: <ChartBarIcon className="h-4 w-4" />,
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
                "relative flex items-center gap-3 px-4 py-3 rounded-2xl text-sm font-medium transition-all duration-300",
                isActive 
                  ? "glass-strong text-white shadow-glow-emerald" 
                  : "text-white/70 hover:text-white hover:glass-subtle",
              )}
            >
              {icon}
              <span className="hidden sm:inline">{label}</span>
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
    <header className="sticky top-0 z-50 glass border-b border-white/5">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo and Brand */}
          <div className="flex items-center space-x-6">
            <div className="lg:hidden" ref={burgerMenuRef}>
              <button
                className="glass-subtle p-3 rounded-2xl text-white hover:glass transition-all duration-300 hover:scale-105"
                onClick={() => setIsDrawerOpen(!isDrawerOpen)}
              >
                <Bars3Icon className="h-6 w-6" />
              </button>
              
              {isDrawerOpen && (
                <div className="absolute top-20 left-6 right-6 glass-strong rounded-2xl p-6 border border-white/10 shadow-glass-strong">
                  <ul className="space-y-3">
                    <HeaderMenuLinks />
                  </ul>
                </div>
              )}
            </div>
            
            <Link href="/" className="flex items-center space-x-4 group">
              <TakaLogo size={48} className="group-hover:scale-110 transition-transform duration-300" />
              <div className="hidden sm:block">
                <div className="text-2xl font-bold text-white">Taka</div>
                <div className="text-sm text-slate-300 font-medium">Recycle • Earn • Impact</div>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:block">
            <ul className="flex items-center space-x-3">
              <HeaderMenuLinks />
            </ul>
          </nav>

          {/* Wallet Connection and Actions */}
          <div className="flex items-center space-x-4">
            <div className="hidden sm:flex items-center space-x-3">
              <FaucetButton />
              <SuperchainFaucetButton />
              <DappConsoleButton />
            </div>
            <div className="glass-subtle rounded-2xl p-1">
              <RainbowKitCustomConnectButton />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
