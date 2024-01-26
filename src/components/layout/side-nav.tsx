"use client";
import Link from "next/link";
import { type NavItem } from "@/components/layout/nav-items";
import { cn } from "@/lib/utils";
import { useSidebar } from "@/hooks/useSidebar";
import { buttonVariants } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { Toggle } from "@/components/Toggle";
import { useTheme } from "next-themes";

interface SideNavProps {
  items: NavItem[];
  setOpen?: (open: boolean) => void;
  className?: string;
}

export function SideNav({ items, setOpen, className }: SideNavProps) {
  const [mounted, setMounted] = useState(false);
  const [active, setActive] = useState("Dashboard");
  const { isOpen } = useSidebar();
  const { theme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <nav className="space-y-1">
      {items.map((item, index) => {
        const { title, href } = item;
        const isActive = active === title;
        let color: string;
        console.log(active, title);
        if (theme === "light") {
          color = isActive ? "#0D062D" : "#B2ABAB";
        } else {
          color = isActive ? "#BF40BF" : "#8A7E8A";
        }
        return (
          <span key={index} className="flex">
            <Link
              href={href}
              onClick={() => {
                setActive(title);
                if (setOpen) setOpen(false);
              }}
              className={cn(
                buttonVariants({ variant: "link" }),
                "group relative flex justify-start",
                isActive && "font-bold",
                `hover:font-bold`,
              )}
            >
              <item.icon
                className={cn("size-6", "duration-200")}
                color={color}
              />
              <span
                className={cn(
                  "absolute left-[50px] flex w-36 justify-between text-base duration-200",
                  !isOpen && className,
                )}
              >
                {title}
                {isActive && isOpen && (
                  <span
                    className={cn(
                      `rounded-l border-r-4 border-[${color}]`,
                      "hidden sm:flex",
                    )}
                  ></span>
                )}
              </span>
            </Link>
            {isActive && !isOpen && (
              <span
                className={cn(
                  `rounded-l border-r-4 border-[${color}]`,
                  "hidden sm:flex",
                )}
              ></span>
            )}
          </span>
        );
      })}
      <Toggle />
    </nav>
  );
}
