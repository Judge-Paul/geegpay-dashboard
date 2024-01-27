import {
  Bar,
  BarChart,
  ResponsiveContainer,
  CartesianGrid,
  XAxis,
  YAxis,
} from "recharts";
import { chartData } from "@/types";

export default function Chart({ data }: { data: chartData[] }) {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="4" vertical={false} />
        <XAxis
          dataKey="name"
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
        />
        <YAxis
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
          tickFormatter={(value) => `$${value}`}
        />
        <Bar
          dataKey="total"
          fill="currentColor"
          radius={[9999, 9999, 0, 0]}
          className="w-2 text-[#34CAA5] dark:text-[#b2e9d6]"
          barSize={28}
        />
      </BarChart>
    </ResponsiveContainer>
  );
}
