import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

export default function TopPlatforms() {
  return (
    <Card className="h-full w-full">
      <CardHeader>
        <div className="flex justify-between text-lg">
          <span className="">Top Platforms</span>
          <span className="text-[#34CAA5]">See All</span>
        </div>
      </CardHeader>
      <CardContent>
        <div>
          <h4 className="font-semibold">Book Bazaar</h4>
          <Progress
            className="mt-3 fill-current"
            barClassName="bg-[#6160DC]"
            value={50}
          />
          <p className="mt-3 flex justify-between text-[#898989] dark:text-[#6E6E6E]">
            <span>$2,500,000</span>
            <p>+15%</p>
          </p>
        </div>
        <div className="mt-4">
          <h4 className="font-semibold">Artisan Aisle</h4>
          <Progress
            className="mt-3 fill-current"
            barClassName="bg-[#54C5EB]"
            value={40}
          />
          <p className="mt-3 flex justify-between text-[#898989] dark:text-[#6E6E6E]">
            <span>$1,800,000</span>
            <p>+10%</p>
          </p>
        </div>
        <div className="mt-4">
          <h4 className="font-semibold">Toy Troop</h4>
          <Progress
            className="mt-3 fill-current"
            barClassName="bg-[#FFB74A]"
            value={30}
          />
          <p className="mt-3 flex justify-between text-[#898989] dark:text-[#6E6E6E]">
            <span>$1,200,000</span>
            <p>+8%</p>
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
