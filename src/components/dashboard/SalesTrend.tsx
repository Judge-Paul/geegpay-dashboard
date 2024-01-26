import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Chart from "@/components/dashboard/Chart";
import { getDailyData, getWeeklyData, getMonthlyData } from "@/lib/utils";
import { useState } from "react";

const months = getMonthlyData();
const weeks = getWeeklyData();
const days = getDailyData();

export default function SalesTrend() {
  const [timeline, setTimeline] = useState(months);

  const handleValueChange = (e: string) => {
    if (e === "daily") {
      setTimeline(days);
      return;
    }

    if (e === "weekly") {
      setTimeline(weeks);
      return;
    }

    if (e === "monthly") {
      setTimeline(months);
      return;
    }
  };
  return (
    <Card>
      <CardHeader>
        <div className="flex justify-between">
          <h4 className="my-auto text-xs font-semibold md:text-xl">
            Sales Trends
          </h4>
          <span className="flex gap-2 text-xs md:text-lg">
            <span className="my-auto min-w-max">Sort by:</span>
            <Select onValueChange={handleValueChange}>
              <SelectTrigger className="rounded-full">
                <SelectValue placeholder="Monthly" />
              </SelectTrigger>
              <SelectContent align="end">
                <SelectItem value="daily">Daily</SelectItem>
                <SelectItem value="weekly">Weekly</SelectItem>
                <SelectItem value="monthly">Monthly</SelectItem>
              </SelectContent>
            </Select>
          </span>
        </div>
      </CardHeader>
      <CardContent>
        <Chart timeline={timeline} />
      </CardContent>
    </Card>
  );
}
