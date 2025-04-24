"use client";

import MiniChart from "./MiniChart";

export default function CryptoChart({ symbol }: { symbol: string }) {
  return (
    <div className="w-40 h-10">
      <MiniChart symbol={symbol} />
    </div>
  );
}
