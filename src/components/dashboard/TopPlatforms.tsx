import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

export default function TopPlatforms() {
  return (
    <Card className="h-full w-full shadow-lg">
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
            barClassName="rounded-full bg-[#6160DC]"
            value={50}
          />
          <span className="mt-3 flex justify-between text-[#898989] dark:text-[#6E6E6E]">
            <span>$2,500,000</span>
            <span>+15%</span>
          </span>
        </div>
        <div className="mt-4">
          <h4 className="font-semibold">Artisan Aisle</h4>
          <Progress
            className="mt-3 fill-current"
            barClassName="rounded-full bg-[#54C5EB]"
            value={40}
          />
          <span className="mt-3 flex justify-between text-[#898989] dark:text-[#6E6E6E]">
            <span>$2,500,000</span>
            <span>+10%</span>
          </span>
        </div>
        <div className="mt-4">
          <h4 className="font-semibold">Toy Troop</h4>
          <Progress
            className="mt-3 fill-current"
            barClassName="rounded-full bg-[#FFB74A]"
            value={30}
          />
          <span className="mt-3 flex justify-between text-[#898989] dark:text-[#6E6E6E]">
            <span>$2,500,000</span>
            <span>+8%</span>
          </span>
        </div>
        <div className="mt-4">
          <h4 className="font-semibold">X Store</h4>
          <Progress
            className="mt-3 fill-current"
            barClassName="rounded-full bg-[#FF4A55]"
            value={30}
          />
          <span className="mt-3 flex justify-between text-[#898989] dark:text-[#6E6E6E]">
            <span>$1,200,000</span>
            <span>+5%</span>
          </span>
        </div>
      </CardContent>
    </Card>
  );
}
