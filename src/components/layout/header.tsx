import { cn } from "@/lib/utils";
import { MobileSidebar } from "@/components/layout/mobile-sidebar";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Header() {
  return (
    <div className="supports-backdrop-blur:bg-background/60 fixed left-0 right-0 top-0 z-20 border-b bg-background/95 backdrop-blur">
      <nav className="flex h-16 items-center justify-between px-4">
        <div className={cn("block md:!hidden")}>
          <MobileSidebar />
        </div>
        Hi
      </nav>
    </div>
  );
}
