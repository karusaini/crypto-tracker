// components/FilterSortBar.tsx
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type Props = {
  onSortChange: (value: string) => void;
  onFilterChange: (value: string) => void;
};

export default function FilterSortBar({ onSortChange, onFilterChange }: Props) {
  const [sort, setSort] = useState("marketCap");
  const [filter, setFilter] = useState("all");

  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-4">
      {/* Sort Dropdown */}
      <div className="w-48">
        <Select
          value={sort}
          onValueChange={(value) => {
            setSort(value);
            onSortChange(value);
          }}
        >
          <SelectTrigger>
            <SelectValue placeholder="Sort By" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="marketCap">Market Cap</SelectItem>
            <SelectItem value="price">Price</SelectItem>
            <SelectItem value="change24h">% Change (24h)</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Filter Toggle Group */}
      <ToggleGroup
        type="single"
        value={filter}
        onValueChange={(value) => {
          if (value) {
            setFilter(value);
            onFilterChange(value);
          }
        }}
      >
        <ToggleGroupItem value="all">All</ToggleGroupItem>
        <ToggleGroupItem value="gainers">Top Gainers</ToggleGroupItem>
        <ToggleGroupItem value="losers">Top Losers</ToggleGroupItem>
      </ToggleGroup>
    </div>
  );
}
