"use client";
import Link from "next/link";
import { type NavItem } from "@/components/layout/nav-items";
import { useTheme } from "next-themes";
import { useRouter } from "next/router";
import { cn } from "@/lib/utils";
import { useSidebar } from "@/hooks/useSidebar";
import { buttonVariants } from "@/components/ui/button";
import { useEffect, useState } from "react";

interface SideNavProps {
  items: NavItem[];
  setOpen?: (open: boolean) => void;
  className?: string;
}

export function SideNav({ items, setOpen, className }: SideNavProps) {
  const router = useRouter();
  const { isOpen } = useSidebar();
  const { theme } = useTheme();
  const [active, setActive] = useState("dashboard");
  const [currentTheme, setCurrentTheme] = useState(theme);

  useEffect(() => {
    const hash = router.asPath.split("#")[1];
    setActive(hash);
  }, [router.asPath]);

  useEffect(() => {
    setCurrentTheme(theme);
  }, [theme]);

  return (
    <nav className="space-y-1">
      {items.map((item, index) => {
        const isActive = active === item.title.toLowerCase();
        let color: string;
        if (currentTheme === "light") {
          color = isActive ? "#0D062D" : "#B2ABAB";
        } else {
          color = isActive ? "#BF40BF" : "#8A7E8A";
        }
        return (
          <span key={index} className="flex">
            <Link
              href={item.href}
              onClick={() => {
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
                  "absolute left-[50px] text-base duration-200 flex justify-between w-36",
                  !isOpen && className,
                )}
              >
                {item.title}
                {isActive && isOpen && (
                  <span
                    className={cn(
                      `border-r-4 rounded-l border-[${color}]`,
                      "hidden sm:flex",
                    )}
                  ></span>
                )}
              </span>
            </Link>
            {isActive && !isOpen && (
              <span
                className={cn(
                  `border-r-4 rounded-l border-[${color}]`,
                  "hidden sm:flex",
                )}
              ></span>
            )}
          </span>
        );
      })}
    </nav>
  );
}
