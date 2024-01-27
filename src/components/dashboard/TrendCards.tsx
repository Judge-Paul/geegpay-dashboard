import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Chart from "@/components/dashboard/AreaChart";
import { cards } from "@/lib/data";
import { cn } from "@/lib/utils";

export default function TrendCards() {
  return (
    <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:mt-0">
      {cards.map((card, index) => {
        const { name, amount, data, icon } = card;
        const change =
          ((data[data.length - 1].value - data[0].value) / data[0].value) * 100;

        const madeProfit = change > 0;
        return (
          <Card key={name} className="py-4 shadow-lg sm:py-0">
            <CardHeader className="grid grid-cols-2 space-y-0 pb-2 sm:pb-0">
              {icon}
              <Chart
                data={data}
                stroke={madeProfit ? "#66C87B" : "#ED544E"}
                fill={madeProfit ? "#77B900" : "#EF716C"}
              />
            </CardHeader>
            <CardContent>
              <p className="mt-5 text-2xl text-[#898989] dark:text-[#6E6E6E] sm:text-lg">
                {name}
              </p>
              <p className="mt-1 text-3xl font-semibold sm:text-xl">{amount}</p>
            </CardContent>
            <CardFooter className="gap-1 text-lg sm:text-sm xl:text-[0.68rem]">
              <span
                className={cn(
                  "flex rounded-full px-2 py-1.5 font-semibold",
                  madeProfit
                    ? "bg-[#34CAA5]/10 text-[#34CAA5]"
                    : "bg-[#EF716C]/10 text-[#EF716C]",
                )}
              >
                <svg
                  className="my-auto mr-2 size-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="12"
                  fill="none"
                  viewBox="0 0 12 12"
                >
                  <path
                    stroke={madeProfit ? "#66C87B" : "#ED544E"}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M1.5 8.5l3-3 2 2 4-4"
                  ></path>
                  <path
                    stroke={madeProfit ? "#66C87B" : "#ED544E"}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M7 3.5h3.5V7"
                  ></path>
                </svg>
                {change.toFixed(2)}%
              </span>
              vs. previous month
            </CardFooter>
          </Card>
        );
      })}
    </div>
  );
}
