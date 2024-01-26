import { cn } from "@/lib/utils";
import { MobileSidebar } from "@/components/layout/mobile-sidebar";
import { Button } from "@/components/ui/button";
import { Logo } from "../icons";
import { Bell } from "lucide-react";
import Searchbar from "@/components/header/Searchbar";
import CalendarDate from "@/components/header/CalendarDate";
import Profile from "@/components/header/Profile";

export default function Header() {
  return (
    <div className="supports-backdrop-blur:bg-background/60 fixed left-0 right-0 top-0 z-20 border-b bg-background/95 backdrop-blur">
      <nav className="flex h-16 items-center justify-between px-4">
        <div className={cn("block md:!hidden")}>
          <MobileSidebar />
        </div>
        <div className="flex w-full justify-between text-xl">
          <div className="flex">
            <Logo className="hidden md:block" color="#34CAA5" />
            <h2 className="my-auto ml-10 text-xl font-semibold">Dashboard</h2>
          </div>
          <div className="flex gap-5">
            <Searchbar />
            <CalendarDate />
            <Button variant="outline" className="rounded-full px-3 py-0">
              <Bell size="16px" />
            </Button>
            <Profile />
          </div>
        </div>
      </nav>
    </div>
  );
}
