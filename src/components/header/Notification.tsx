import {
  PopoverTrigger,
  PopoverContent,
  Popover,
} from "@/components/ui/popover";
import { Bell } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export default function Notification() {
  return (
    <Popover>
      <PopoverTrigger>
        <Button variant="outline" className="rounded-full px-3 py-0">
          <Bell size="16px" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-56 pt-3" align="end">
        <h2 className="pb-1 font-semibold">Notifications</h2>
        <Separator />
        <div className="flex h-40 items-center justify-center text-sm">
          No new notifications
        </div>
      </PopoverContent>
    </Popover>
  );
}
