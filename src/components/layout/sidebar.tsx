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
      <div className="absolute bottom-0 mb-10 space-y-4 px-6">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke="#B2ABAB"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M8.5 12h6M12.5 15l3-3-3-3"
          ></path>
          <path
            stroke="#B2ABAB"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M4 6c-1.25 1.67-2 3.75-2 6 0 5.52 4.48 10 10 10s10-4.48 10-10S17.52 2 12 2c-1.43 0-2.8.3-4.03.85"
          ></path>
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke="#B2ABAB"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="10"
            strokeWidth="1.5"
            d="M15 12c0-1.66-1.34-3-3-3s-3 1.34-3 3a2.996 2.996 0 004.17 2.76"
          ></path>
          <path
            stroke="#B2ABAB"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="10"
            strokeWidth="1.5"
            d="M6.88 20.58l1.09.63c.79.47 1.81.19 2.28-.6l.11-.19c.9-1.57 2.38-1.57 3.29 0l.11.19c.47.79 1.49 1.07 2.28.6l1.73-.99c.91-.52 1.22-1.69.7-2.59-.91-1.57-.17-2.85 1.64-2.85 1.04 0 1.9-.85 1.9-1.9v-1.76c0-1.04-.85-1.9-1.9-1.9-1.01 0-1.69-.4-1.93-1.03-.19-.49-.11-1.13.29-1.82.52-.91.21-2.07-.7-2.59l-.81-.46M13.64 3.58c-.9 1.57-2.38 1.57-3.29 0l-.11-.19a1.655 1.655 0 00-2.27-.6l-1.73.99c-.91.52-1.22 1.69-.7 2.6.91 1.56.17 2.84-1.64 2.84-1.04 0-1.9.85-1.9 1.9v1.76c0 1.04.85 1.9 1.9 1.9 1.81 0 2.55 1.28 1.64 2.85"
          ></path>
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke="#B2ABAB"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="10"
            strokeWidth="1.5"
            d="M6.56 14.56L4 12l2.56-2.56M9.24 12H4.07M14.24 12h-1.96M18.01 6.48C19.25 7.84 20 9.71 20 12c0 5-3.58 8-8 8M12 4c1.05 0 2.05.17 2.97.49"
          ></path>
        </svg>
      </div>
    </nav>
  );
}
