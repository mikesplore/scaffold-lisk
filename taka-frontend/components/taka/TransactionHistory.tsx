"use client";

import React from "react";
import { ClockIcon, CurrencyDollarIcon, ArrowPathIcon, TrophyIcon } from "@heroicons/react/24/outline";

interface Transaction {
  id: string;
  type: "waste_recorded" | "tokens_earned" | "tokens_redeemed" | "bonus";
  amount: number;
  description: string;
  timestamp: Date;
  wasteType?: string;
  weight?: number;
  location?: string;
}

interface TransactionHistoryProps {
  transactions?: Transaction[];
  className?: string;
}

const mockTransactions: Transaction[] = [
  {
    id: "1",
    type: "waste_recorded",
    amount: 25,
    description: "Plastic bottles recorded",
    timestamp: new Date("2025-08-30T10:30:00"),
    wasteType: "plastic",
    weight: 5.2,
    location: "Home"
  },
  {
    id: "2",
    type: "tokens_earned",
    amount: 40,
    description: "Metal cans collection",
    timestamp: new Date("2025-08-29T15:20:00"),
    wasteType: "metal",
    weight: 3.8,
    location: "Office"
  },
  {
    id: "3",
    type: "bonus",
    amount: 15,
    description: "Weekly challenge completed",
    timestamp: new Date("2025-08-28T09:00:00"),
  },
  {
    id: "4",
    type: "tokens_redeemed",
    amount: -50,
    description: "Redeemed for coffee voucher",
    timestamp: new Date("2025-08-27T14:45:00"),
  },
  {
    id: "5",
    type: "waste_recorded",
    amount: 18,
    description: "Glass bottles recorded",
    timestamp: new Date("2025-08-26T11:15:00"),
    wasteType: "glass",
    weight: 2.1,
    location: "Park cleanup"
  },
];

export const TransactionHistory: React.FC<TransactionHistoryProps> = ({
  transactions = mockTransactions,
  className = "",
}) => {
  const getTransactionIcon = (type: Transaction["type"]) => {
    switch (type) {
      case "waste_recorded":
        return <ArrowPathIcon className="h-5 w-5 text-[var(--primary-start)]" />;
      case "tokens_earned":
        return <CurrencyDollarIcon className="h-5 w-5 text-[var(--primary-start)]" />;
      case "tokens_redeemed":
        return <CurrencyDollarIcon className="h-5 w-5 text-red-400" />;
      case "bonus":
        return <TrophyIcon className="h-5 w-5 text-[var(--primary-mid)]" />;
      default:
        return <ClockIcon className="h-5 w-5 text-white/40" />;
    }
  };

  const getTransactionColor = (type: Transaction["type"]) => {
    switch (type) {
      case "tokens_redeemed":
        return "text-red-400";
      default:
        return "text-[var(--primary-start)]";
    }
  };

  const formatDate = (date: Date) => {
    const now = new Date();
    const diffInHours = (now.getTime() - date.getTime()) / (1000 * 60 * 60);
    
    if (diffInHours < 24) {
      return `${Math.floor(diffInHours)}h ago`;
    } else if (diffInHours < 48) {
      return "Yesterday";
    } else {
      return date.toLocaleDateString();
    }
  };

  return (
    <div className={`glass-gradient p-6 rounded-2xl border border-white/20 shadow-vibrant backdrop-blur-md ${className}`}>
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-bold text-white flex items-center gap-3">
          <ClockIcon className="h-6 w-6 text-[var(--primary-start)]" />
          Recent Activity
        </h3>
        <button className="text-sm text-[var(--primary-start)] hover:text-[var(--primary-mid)] transition-colors font-medium">
          View All
        </button>
      </div>

      <div className="space-y-4">
        {transactions.slice(0, 8).map((transaction) => (
          <div
            key={transaction.id}
            className="flex items-center justify-between p-4 bg-white/10 rounded-xl hover:bg-white/15 transition-all duration-300 backdrop-blur-sm border border-white/10 hover:border-white/20"
          >
            <div className="flex items-center gap-4">
              <div className="p-2 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20">
                {getTransactionIcon(transaction.type)}
              </div>
              <div>
                <div className="font-medium text-white text-sm">
                  {transaction.description}
                </div>
                <div className="text-xs text-white/60 mt-1">
                  {formatDate(transaction.timestamp)}
                  {transaction.location && ` • ${transaction.location}`}
                  {transaction.weight && ` • ${transaction.weight}kg`}
                </div>
              </div>
            </div>
            <div className="text-right">
              <div className={`font-bold ${getTransactionColor(transaction.type)}`}>
                {transaction.amount > 0 ? "+" : ""}{transaction.amount} TAKA
              </div>
              {transaction.wasteType && (
                <div className="text-xs text-white/60 capitalize">
                  {transaction.wasteType}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {transactions.length === 0 && (
        <div className="text-center py-12">
          <ArrowPathIcon className="h-16 w-16 text-white/40 mx-auto mb-4" />
          <h4 className="text-lg font-medium text-white/80 mb-2">No Activity Yet</h4>
          <p className="text-white/60">
            Start recording waste to see your transaction history
          </p>
        </div>
      )}
    </div>
  );
};
