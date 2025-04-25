"use client";

import { LineChart, Line, ResponsiveContainer, Tooltip } from "recharts";

interface MiniChartProps {
  data?: number[]; // allow it to be undefined
  color: string;
}

export default function MiniChart({ data = [], color }: MiniChartProps) {
  const chartData = data.map((val, index) => ({
    time: index,
    value: val,
  }));

  return (
    <ResponsiveContainer width="100%" height={40}>
      <LineChart data={chartData}>
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
