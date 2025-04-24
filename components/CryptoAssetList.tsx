"use client";

import { useEffect, useState } from "react";
import { mockAssets } from "../lib/mockData";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import MiniChart from "./MiniChart";
import { motion } from "framer-motion";

type FilterType =
  | "all"
  | "top_gainers"
  | "top_losers"
  | "market_cap"
  | "volume";

const FILTER_OPTIONS: { label: string; value: FilterType }[] = [
  { label: "All", value: "all" },
  { label: "Top Gainers", value: "top_gainers" },
  { label: "Top Losers", value: "top_losers" },
  { label: "Market Cap", value: "market_cap" },
  { label: "Volume", value: "volume" },
];

const filterAssets = (assets: typeof mockAssets, filter: FilterType) => {
  switch (filter) {
    case "top_gainers":
      return [...assets].sort((a, b) => b.change24h - a.change24h);
    case "top_losers":
      return [...assets].sort((a, b) => a.change24h - b.change24h);
    case "market_cap":
      return [...assets].sort((a, b) => b.marketCap - a.marketCap);
    case "volume":
      return [...assets].sort((a, b) => b.volume24h - a.volume24h);
    default:
      return assets;
  }
};

export default function CryptoAssetList() {
  const [assets, setAssets] = useState(mockAssets);
  const [filter, setFilter] = useState<FilterType>("all");
  const [search, setSearch] = useState("");

  useEffect(() => {
    const saved = localStorage.getItem("crypto_filter");
    if (saved) setFilter(saved as FilterType);
  }, []);

  useEffect(() => {
    localStorage.setItem("crypto_filter", filter);
  }, [filter]);

  useEffect(() => {
    const interval = setInterval(() => {
      setAssets((prev) =>
        prev.map((asset) => ({
          ...asset,
          price: asset.price * (1 + (Math.random() - 0.5) * 0.002),
        }))
      );
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const filtered = filterAssets(assets, filter).filter(
    (asset) =>
      asset.name.toLowerCase().includes(search.toLowerCase()) ||
      asset.symbol.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="w-full px-4 py-8 sm:px-6 lg:px-10 max-w-screen-xl mx-auto">
      {/* Heading */}
      <div className="mb-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
          🪙 Market Overview
        </h2>
        <p className="text-gray-500 text-sm sm:text-base mt-1">
          Explore top crypto assets with live price updates and performance.
        </p>
      </div>

      {/* Search + Filters */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
        <Input
          type="text"
          placeholder="Search assets..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full sm:w-64"
        />
        <ToggleGroup
          type="single"
          value={filter}
          onValueChange={(val: FilterType) => val && setFilter(val)}
          className="flex flex-wrap gap-2"
        >
          {FILTER_OPTIONS.map((option) => (
            <ToggleGroupItem
              key={option.value}
              value={option.value}
              className={`rounded-full border px-3 py-1.5 text-xs sm:text-sm font-medium transition-colors ${
                filter === option.value
                  ? "bg-indigo-600 text-white border-indigo-600"
                  : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
              }`}
            >
              {option.label}
            </ToggleGroupItem>
          ))}
        </ToggleGroup>
      </div>

      {/* Asset Cards */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {filtered.map((asset) => (
          <motion.div
            layout
            key={asset.id}
            className="flex items-center gap-4 p-4 bg-white border rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 cursor-pointer"
          >
            <Image
              src={asset.logo}
              alt={asset.symbol}
              width={40}
              height={40}
              className="rounded-full"
            />
            <div className="flex-1">
              <div className="text-sm font-semibold text-gray-800">
                {asset.name}
              </div>
              <div className="text-xs text-gray-500 mb-1">{asset.symbol}</div>
              <MiniChart data={asset.sparkline} color="#16a34a" />
            </div>
            <div className="text-right">
              <div className="text-sm font-semibold text-gray-900">
                ${asset.price.toFixed(2)}
              </div>
              <div
                className={`text-xs ${
                  asset.change24h >= 0 ? "text-green-600" : "text-red-500"
                }`}
              >
                {asset.change24h >= 0 ? "+" : ""}
                {asset.change24h.toFixed(2)}%
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
