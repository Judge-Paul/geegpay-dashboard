import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight } from "lucide-react";
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

  return (
    <div className="hidden h-full items-center sm:flex">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button onClick={toggle} variant="ghost" className="px-0" asChild>
              <div
                className={cn(
                  "h-10 w-2 rounded-full bg-gray-700 px-0 transition-all hover:bg-gray-500 hover:duration-300 dark:bg-gray-300 dark:hover:bg-gray-400",
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
