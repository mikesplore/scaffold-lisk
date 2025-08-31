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

export const MobileMenuLinks = ({ onLinkClick }: { onLinkClick: () => void }) => {
  const pathname = usePathname();

  return (
    <>
      {menuLinks.map(({ label, href, icon }) => {
        const isActive = pathname === href;
        return (
          <li key={href}>
            <Link
              href={href}
              onClick={onLinkClick}
              className={cn(
                "relative flex items-center gap-4 px-4 py-3 sm:py-4 text-sm sm:text-base font-medium transition-all duration-300 rounded-xl group w-full active:scale-95",
                isActive 
                  ? "bg-gradient-to-r from-emerald-500/20 to-teal-500/20 text-white shadow-lg backdrop-blur-sm border border-emerald-400/30" 
                  : "text-white/80 hover:text-white hover:bg-white/10 hover:shadow-lg",
              )}
            >
              <div className={cn(
                "flex-shrink-0 transition-all duration-300 w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center rounded-lg",
                isActive 
                  ? "text-emerald-400 bg-emerald-400/20" 
                  : "text-white/60 group-hover:text-white group-hover:bg-white/10"
              )}>
                {icon}
              </div>
              <span className="flex-1 font-medium">{label}</span>
              {isActive && (
                <>
                  <div className="w-2 h-2 bg-emerald-400 rounded-full shadow-glow animate-pulse" />
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/10 to-transparent rounded-xl pointer-events-none" />
                </>
              )}
              <div className="w-1 h-4 sm:h-6 bg-gradient-to-b from-emerald-400/0 via-emerald-400/50 to-emerald-400/0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Link>
          </li>
        );
      })}
      
      {/* Additional Mobile Menu Items */}
      <li className="pt-3 sm:pt-4 mt-3 sm:mt-4 border-t border-white/20">
        <Link
          href="/debug"
          onClick={onLinkClick}
          className="flex items-center gap-4 px-4 py-3 sm:py-4 text-sm sm:text-base font-medium text-white/80 hover:text-white hover:bg-white/10 rounded-xl transition-all duration-300 group active:scale-95"
        >
          <div className="flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center rounded-lg text-white/60 group-hover:text-white group-hover:bg-white/10 transition-all duration-300">
            <CogIcon className="h-4 w-4" />
          </div>
          <span className="flex-1 font-medium">Debug Contracts</span>
        </Link>
      </li>
      
      <li>
        <Link
          href="/blockexplorer"
          onClick={onLinkClick}
          className="flex items-center gap-4 px-4 py-3 sm:py-4 text-sm sm:text-base font-medium text-white/80 hover:text-white hover:bg-white/10 rounded-xl transition-all duration-300 group active:scale-95"
        >
          <div className="flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center rounded-lg text-white/60 group-hover:text-white group-hover:bg-white/10 transition-all duration-300">
            <ChartBarIcon className="h-4 w-4" />
          </div>
          <span className="flex-1 font-medium">Block Explorer</span>
        </Link>
      </li>
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
    <>
      <header className="sticky top-0 z-50 bg-primary-gradient backdrop-blur-md border-b border-white/20 shadow-vibrant">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo and Brand */}
            <div className="flex items-center space-x-4">
              <div className="lg:hidden" ref={burgerMenuRef}>
                <button
                  className="bg-white/10 hover:bg-white/20 p-2 text-white transition-all duration-300 rounded-lg backdrop-blur-sm border border-white/20 shadow-glow"
                  onClick={() => setIsDrawerOpen(!isDrawerOpen)}
                  aria-label="Toggle menu"
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
              <div className="bg-white/10 hover:bg-white/15 px-3 py-2 rounded-lg border border-white/20 shadow-glow backdrop-blur-sm transition-all duration-300">
                <RainbowKitCustomConnectButton />
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isDrawerOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden animate-in fade-in duration-300"
            onClick={() => setIsDrawerOpen(false)}
          />
          
          {/* Mobile Menu Drawer */}
          <div className={`fixed top-0 left-0 w-full max-w-xs sm:max-w-sm h-full bg-gradient-to-b from-slate-900/95 to-slate-800/95 backdrop-blur-xl border-r border-white/20 shadow-2xl z-50 lg:hidden transform transition-all duration-300 ease-out ${
            isDrawerOpen ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-95'
          }`}>
            {/* Mobile Menu Header */}
            <div className="flex items-center justify-between p-4 sm:p-6 border-b border-white/20">
              <div className="flex items-center space-x-3">
                <TakaLogo size={28} className="drop-shadow-lg sm:w-8 sm:h-8" />
                <div>
                  <div className="text-base sm:text-lg font-bold text-white">Taka</div>
                  <div className="text-xs text-white/70 hidden sm:block">Recycle • Earn • Impact</div>
                </div>
              </div>
              <button
                onClick={() => setIsDrawerOpen(false)}
                className="p-2 text-white/80 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-200 active:scale-95"
                aria-label="Close menu"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Mobile Menu Content */}
            <div className="flex flex-col h-full overflow-hidden">
              {/* Navigation Links */}
              <nav className="flex-1 px-4 sm:px-6 py-4 overflow-y-auto">
                <ul className="space-y-1 sm:space-y-2">
                  <MobileMenuLinks onLinkClick={() => setIsDrawerOpen(false)} />
                </ul>
              </nav>

              {/* Mobile Menu Footer */}
              <div className="p-4 sm:p-6 border-t border-white/20 bg-gradient-to-t from-slate-800/50 to-transparent">
                <div className="text-center">
                  <div className="text-xs sm:text-sm text-white/60 mb-2">Stay connected</div>
                  <div className="flex justify-center space-x-4">
                    <button className="p-2 text-white/60 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-200 active:scale-95">
                      <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                      </svg>
                    </button>
                    <button className="p-2 text-white/60 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-200 active:scale-95">
                      <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                      </svg>
                    </button>
                    <button className="p-2 text-white/60 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-200 active:scale-95">
                      <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.097.118.112.221.085.343-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.746-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001.012.001z"/>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};
