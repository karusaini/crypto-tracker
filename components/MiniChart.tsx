"use client";

import { LineChart, Line, ResponsiveContainer, Tooltip } from "recharts";

const generateFakeSparkline = () =>
  Array.from({ length: 20 }, (_, i) => ({
    time: i,
    value: 100 + Math.sin(i / 2) * 5 + Math.random() * 2,
  }));

export default function MiniChart({ symbol }: { symbol: string }) {
  const data = generateFakeSparkline();
  const isUp = data[data.length - 1].value >= data[0].value;
  const color = isUp ? "#16a34a" : "#dc2626"; // green or red

  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart data={data}>
        <Line
          type="monotone"
          dataKey="value"
          stroke={color}
          strokeWidth={2}
          dot={false}
        />
        <Tooltip contentStyle={{ display: "none" }} cursor={false} />
      </LineChart>
    </ResponsiveContainer>
  );
}
