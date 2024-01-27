import React, { useState } from "react";
import { SideNav } from "@/components/layout/side-nav";
import { NavItems } from "@/components/layout/nav-items";
import { cn } from "@/lib/utils";
import { useSidebar } from "@/hooks/useSidebar";

interface SidebarProps {
  className?: string;
}

export default function Sidebar({ className }: SidebarProps) {
  const { isOpen } = useSidebar();

  return (
    <nav
      className={cn(
        `relative hidden h-screen border-r bg-secondary/10 pt-10 md:block`,
        isOpen ? "w-48" : "w-[76px]",
        className,
      )}
    >
      <div className="space-y-4 py-4">
        <div className="px-2 py-2">
          <div className="mt-3 space-y-1">
            <SideNav className="text-background" items={NavItems} />
          </div>
        </div>
      </div>
      <div className="mt-30 absolute bottom-5 w-full space-y-2 px-3"></div>
    </nav>
  );
}
