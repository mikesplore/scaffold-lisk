import React from "react";
import Link from "next/link";
import { hardhat } from "viem/chains";
import { 
  MagnifyingGlassIcon, 
  HeartIcon, 
  GlobeAltIcon,
  DocumentTextIcon,
  ShieldCheckIcon 
} from "@heroicons/react/24/outline";
import { TakaLogo } from "./taka/TakaLogo";
import { Faucet } from "~~/components/scaffold-eth";
import { useTargetNetwork } from "~~/hooks/scaffold-eth/useTargetNetwork";

/**
 * Taka Platform Footer
 */
export const Footer = () => {
  const { targetNetwork } = useTargetNetwork();
  const isLocalNetwork = targetNetwork.id === hardhat.id;

  return (
    <footer className="mt-16 border-t border-white/10">
      {/* Development Tools */}
      {isLocalNetwork && (
        <div className="fixed bottom-4 left-4 z-50 flex flex-col gap-2 pointer-events-auto">
          <Faucet />
          <Link href="/blockexplorer" passHref className="glass-subtle text-white px-4 py-2 rounded-xl flex items-center gap-2 hover:glass transition-all duration-300 text-sm">
            <MagnifyingGlassIcon className="h-4 w-4" />
            <span>Block Explorer</span>
          </Link>
        </div>
      )}

      {/* Main Footer */}
      <div className="glass-subtle">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Brand Section */}
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <TakaLogo size={48} />
                <div>
                  <div className="text-2xl font-bold text-white">Taka</div>
                  <div className="text-sm text-white/60">Recycle • Earn • Impact</div>
                </div>
              </div>
              <p className="text-white/70 mb-6 max-w-md">
                Transform waste into wealth while building a sustainable future. 
                Earn TAKA tokens for every kilogram of waste you collect and recycle.
              </p>
              <div className="flex items-center space-x-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-taka-primary-400">15,847</div>
                  <div className="text-xs text-white/60">Active Users</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-taka-secondary-400">2.4M kg</div>
                  <div className="text-xs text-white/60">Waste Collected</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-taka-accent-400">$45.7M</div>
                  <div className="text-xs text-white/60">Tokens Earned</div>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-white font-bold mb-4">Platform</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="text-white/70 hover:text-taka-primary-400 transition-colors">
                    Dashboard
                  </Link>
                </li>
                <li>
                  <Link href="/stations" className="text-white/70 hover:text-taka-primary-400 transition-colors">
                    Collection Stations
                  </Link>
                </li>
                <li>
                  <Link href="/marketplace" className="text-white/70 hover:text-taka-primary-400 transition-colors">
                    Marketplace
                  </Link>
                </li>
                <li>
                  <Link href="/community" className="text-white/70 hover:text-taka-primary-400 transition-colors">
                    Community
                  </Link>
                </li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h3 className="text-white font-bold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-white/70 hover:text-taka-primary-400 transition-colors flex items-center gap-2">
                    <DocumentTextIcon className="h-4 w-4" />
                    Documentation
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white/70 hover:text-taka-primary-400 transition-colors flex items-center gap-2">
                    <ShieldCheckIcon className="h-4 w-4" />
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white/70 hover:text-taka-primary-400 transition-colors flex items-center gap-2">
                    <GlobeAltIcon className="h-4 w-4" />
                    Environmental Impact
                  </a>
                </li>
                <li>
                  <a href="https://discord.com/invite/7EKWJ7b" target="_blank" rel="noreferrer" className="text-white/70 hover:text-taka-primary-400 transition-colors">
                    Discord Support
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-white/10 mt-8 pt-8 flex flex-col md:flex-row items-center justify-between">
            <div className="text-white/60 text-sm mb-4 md:mb-0">
              © 2024 Taka Platform. Built with 🌱 for a sustainable future.
            </div>
            
            <div className="flex items-center space-x-6 text-sm">
              <a 
                href="https://github.com/LiskHQ/scaffold-lisk" 
                target="_blank" 
                rel="noreferrer" 
                className="text-white/70 hover:text-taka-primary-400 transition-colors"
              >
                Built on Lisk
              </a>
              <span className="text-white/40">·</span>
              <div className="flex items-center gap-1 text-white/70">
                Made with <HeartIcon className="h-4 w-4 text-red-400" /> for Earth
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
