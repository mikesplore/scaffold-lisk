"use client";

import React, { useState } from "react";
import { PlusIcon, CameraIcon, ScaleIcon } from "@heroicons/react/24/outline";

interface WasteRecord {
  type: string;
  weight: number;
  location: string;
  photo?: string;
}

interface WasteRecordFormProps {
  onSubmit: (record: WasteRecord) => void;
  isOpen: boolean;
  onClose: () => void;
}

const wasteTypes = [
  { id: "plastic", name: "Plastic Bottles", tokens: 5, icon: "🍼" },
  { id: "metal", name: "Metal Cans", tokens: 8, icon: "🥫" },
  { id: "glass", name: "Glass Bottles", tokens: 6, icon: "🍾" },
  { id: "paper", name: "Paper/Cardboard", tokens: 3, icon: "📄" },
  { id: "electronics", name: "Electronics", tokens: 15, icon: "📱" },
  { id: "textiles", name: "Textiles", tokens: 4, icon: "👕" },
];

export const WasteRecordForm: React.FC<WasteRecordFormProps> = ({
  onSubmit,
  isOpen,
  onClose,
}) => {
  const [formData, setFormData] = useState<WasteRecord>({
    type: "",
    weight: 0,
    location: "",
  });

  const [selectedType, setSelectedType] = useState<typeof wasteTypes[0] | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.type && formData.weight > 0) {
      onSubmit(formData);
      setFormData({ type: "", weight: 0, location: "" });
      setSelectedType(null);
      onClose();
    }
  };

  const handleTypeSelect = (type: typeof wasteTypes[0]) => {
    setSelectedType(type);
    setFormData({ ...formData, type: type.id });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="clean-card max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-white flex items-center gap-3">
              <PlusIcon className="h-8 w-8 text-green-400" />
              Record New Waste
            </h2>
            <button
              onClick={onClose}
              className="text-slate-400 hover:text-white transition-colors"
            >
              ✕
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Waste Type Selection */}
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-4">
                Select Waste Type
              </label>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {wasteTypes.map((type) => (
                  <button
                    key={type.id}
                    type="button"
                    onClick={() => handleTypeSelect(type)}
                    className={`p-4 rounded-xl border transition-all ${
                      selectedType?.id === type.id
                        ? "border-green-400 bg-green-400/10"
                        : "border-slate-600 bg-slate-700/30 hover:border-slate-500"
                    }`}
                  >
                    <div className="text-2xl mb-2">{type.icon}</div>
                    <div className="text-sm font-medium text-white">{type.name}</div>
                    <div className="text-xs text-green-400">{type.tokens} TAKA/kg</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Weight Input */}
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">
                Weight (kg)
              </label>
              <div className="relative">
                <ScaleIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-slate-400" />
                <input
                  type="number"
                  step="0.1"
                  min="0.1"
                  value={formData.weight || ""}
                  onChange={(e) => setFormData({ ...formData, weight: parseFloat(e.target.value) || 0 })}
                  className="w-full pl-10 pr-4 py-3 bg-slate-700/50 border border-slate-600 rounded-xl text-white placeholder-slate-400 focus:border-green-400 focus:outline-none"
                  placeholder="Enter weight in kg"
                  required
                />
              </div>
            </div>

            {/* Location Input */}
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">
                Collection Location
              </label>
              <input
                type="text"
                value={formData.location}
                onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-xl text-white placeholder-slate-400 focus:border-green-400 focus:outline-none"
                placeholder="e.g., Home, Office, Park"
                required
              />
            </div>

            {/* Photo Upload (Optional) */}
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">
                Photo (Optional)
              </label>
              <div className="border-2 border-dashed border-slate-600 rounded-xl p-8 text-center hover:border-slate-500 transition-colors">
                <CameraIcon className="h-12 w-12 text-slate-400 mx-auto mb-4" />
                <p className="text-slate-400 text-sm">
                  Tap to add photo verification
                </p>
                <input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={(e) => {
                    // Handle photo upload
                  }}
                />
              </div>
            </div>

            {/* Token Estimate */}
            {selectedType && formData.weight > 0 && (
              <div className="bg-green-500/10 border border-green-400/30 rounded-xl p-4">
                <div className="flex items-center justify-between">
                  <span className="text-slate-300">Estimated Tokens:</span>
                  <span className="text-2xl font-bold text-green-400">
                    {Math.round(selectedType.tokens * formData.weight)} TAKA
                  </span>
                </div>
              </div>
            )}

            {/* Submit Button */}
            <div className="flex gap-4 pt-4">
              <button
                type="button"
                onClick={onClose}
                className="flex-1 py-3 px-6 bg-slate-700 text-white rounded-xl hover:bg-slate-600 transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={!formData.type || formData.weight <= 0}
                className="flex-1 py-3 px-6 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-xl hover:from-green-600 hover:to-green-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Record Waste
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
