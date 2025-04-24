"use client";

import CryptoTable from "@/components/CryptoTable";
import { useMockCryptoUpdates } from "@/lib/useMockCryptoUpdates";
import CryptoAssetList from "@/components/CryptoAssetList";

export default function Home() {
  useMockCryptoUpdates();
  return (
    <main className="max-w-screen-xl mx-auto p-4">
      {/* <h1 className="text-2xl font-bold mb-4">Crypto Tracker</h1> */}
      <CryptoAssetList />
      <CryptoTable />
    </main>
  );
}
