export default function PercentageChange({
  value,
}: {
  value: number | string;
}) {
  const num = typeof value === "string" ? parseFloat(value) : value;
  const color =
    num > 0 ? "text-green-500" : num < 0 ? "text-red-500" : "text-gray-500";

  return <span className={`${color}`}>{num.toFixed(2)}%</span>;
}
