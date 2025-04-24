import { TableCell, TableRow } from "@/components/ui/table";
import PercentageChange from "./PercentageChange";
import CryptoChart from "./CryptoChart";
import Image from "next/image";

export default function CryptoRow({
  asset,
  index,
}: {
  asset: any;
  index: number;
}) {
  return (
    <TableRow className={index % 2 === 1 ? "bg-muted/50" : ""}>
      <TableCell className="text-muted-foreground">{index}</TableCell>

      {/* Logo + Name + Symbol */}
      <TableCell className="flex items-center gap-3">
        <Image
          src={asset.logo}
          alt={asset.name}
          width={24}
          height={24}
          className="rounded-full"
        />
        <div className="flex flex-col">
          <span className="font-medium">{asset.name}</span>
          <span className="text-sm text-muted-foreground uppercase">
            {asset.symbol}
          </span>
        </div>
      </TableCell>

      {/* Price */}
      <TableCell className="font-medium">
        ${Number(asset.price).toLocaleString()}
      </TableCell>

      {/* % changes */}
      <TableCell>
        <PercentageChange value={asset.change1h} />
      </TableCell>
      <TableCell>
        <PercentageChange value={asset.change24h} />
      </TableCell>
      <TableCell>
        <PercentageChange value={asset.change7d} />
      </TableCell>

      {/* Market Cap */}
      <TableCell className="text-right">
        ${Number(asset.marketCap).toLocaleString()}
      </TableCell>

      {/* Volume with sub asset */}
      <TableCell className="text-right">
        ${Number(asset.volume24h).toLocaleString()}
        <div className="text-xs text-muted-foreground">{asset.volumeAsset}</div>
      </TableCell>

      {/* Circulating Supply */}
      <TableCell className="text-right">
        {asset.circulating}
        <div className="h-1 bg-muted rounded mt-1 overflow-hidden">
          <div
            className="bg-primary h-full"
            style={{ width: `${asset.circulatingPercent}%` }}
          />
        </div>
      </TableCell>

      {/* Chart */}
      <TableCell>
        <CryptoChart symbol={asset.symbol} />
      </TableCell>
    </TableRow>
  );
}
