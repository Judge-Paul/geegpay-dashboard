import { Button } from "@/components/ui/button";
import {
  PopoverTrigger,
  PopoverContent,
  Popover,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { CalendarDays } from "lucide-react";

export default function CalendarDate() {
  const currentDate = new Date();
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const formattedDate = currentDate.toLocaleDateString("en-US", options);
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          className="justify-start text-left font-semibold md:w-[240px]"
          variant="ghost"
        >
          <CalendarDays className="h-4 w-4 md:mr-1 md:-translate-x-1" />
          <span className="hidden md:flex">{formattedDate}</span>
        </Button>
      </PopoverTrigger>
      <PopoverContent align="end" className="w-auto p-0">
        <Calendar initialFocus mode="single" />
      </PopoverContent>
    </Popover>
  );
}
