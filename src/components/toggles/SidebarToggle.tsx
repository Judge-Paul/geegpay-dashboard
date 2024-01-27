import { cn } from "@/lib/utils";
import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useSidebar } from "@/hooks/useSidebar";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export default function SidebarToggle() {
  const { isOpen, toggle } = useSidebar();

  const handleToggle = () => {
    // setSwitchToggle(true);
    // toggle();
    // setTimeout(() => setSwitchToggle(false), 500);
  };
  return (
    <div className="flex h-full items-center">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button onClick={toggle} variant="ghost" asChild>
              <div
                className={cn(
                  "h-10 rounded-full bg-gray-700 px-0 transition-all hover:bg-gray-500 hover:duration-300 dark:bg-gray-300 dark:hover:bg-gray-400",
                  isOpen ? "w-1.5" : "w-2.5",
                )}
              ></div>
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>{isOpen ? "Close Sidebar" : "Open Sidebar"}</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
}
