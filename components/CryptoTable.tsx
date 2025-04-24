"use client";

import { Card } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useAppSelector } from "@/lib/hooks";
import CryptoRow from "./CryptoRow";

export default function CryptoTable() {
  const assets = useAppSelector((state) => state.crypto.assets);

  return (
    <div className="px-4 py-8 sm:px-6 lg:px-10 max-w-screen-xl mx-auto">
      {/* Heading */}
      <div className="mb-6">
        <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900">
          📈 Crypto Tracker
        </h1>
        <p className="text-gray-500 text-sm sm:text-base mt-1">
          Live market overview of the top cryptocurrencies.
        </p>
      </div>

      {/* Table Wrapper */}
      <Card className="p-4 shadow-sm">
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>#</TableHead>
                <TableHead className="min-w-[160px]">Name</TableHead>
                <TableHead>Price</TableHead>
                <TableHead>1h %</TableHead>
                <TableHead>24h %</TableHead>
                <TableHead>7d %</TableHead>
                <TableHead className="text-right">Market Cap</TableHead>
                <TableHead className="text-right">24h Volume</TableHead>
                <TableHead className="text-right">Supply</TableHead>
                <TableHead>7D Chart</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {assets.map((asset, index) => (
                <CryptoRow key={asset.id} asset={asset} index={index + 1} />
              ))}
            </TableBody>
          </Table>
        </div>
      </Card>
    </div>
  );
}
