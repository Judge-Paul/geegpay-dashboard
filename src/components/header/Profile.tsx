import {
  PopoverTrigger,
  PopoverContent,
  Popover,
} from "@/components/ui/popover";
import { ProfilePic } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { Separator } from "@/components/ui/separator";

export default function Profile() {
  return (
    <Popover>
      <PopoverTrigger>
        <Button variant="outline" className="flex rounded-full px-2 py-1">
          <ProfilePic />
          <div className="my-auto ml-1 text-xs">
            <h4 className="font-semibold">Judge-Paul</h4>
            <p className="text-[0.65rem] font-light text-secondary-foreground">
              Justin@gmail.com
            </p>
          </div>
          <ChevronDown className="my-auto" />
        </Button>
      </PopoverTrigger>
      <PopoverContent align="end" className="w-48 px-1 py-2">
        <div className="my-auto ml-1 p-1 pb-0.5 text-sm">
          <h4 className="font-semibold">Judge-Paul</h4>
          <p className="text-xs font-light text-secondary-foreground">
            Justin@gmail.com
          </p>
        </div>
        <Separator />
        <Button variant="ghost" className="w-full justify-start px-2">
          Profile
        </Button>
        <Button variant="ghost" className="w-full justify-start px-2">
          Settings
        </Button>
        <Separator />
        <Button variant="ghost" className="w-full justify-start px-2">
          Log out
        </Button>
      </PopoverContent>
    </Popover>
  );
}
