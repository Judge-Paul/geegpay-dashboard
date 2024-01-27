import React, { useEffect, useState } from "react";
import { Moon, Sun } from "@/components/icons";
import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";
import { useSidebar } from "@/hooks/useSidebar";

export const Toggle = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const { isOpen } = useSidebar();
  const isDark = theme === "dark";

  const handleToggle = () => {
    isDark && setTheme("light");
    !isDark && setTheme("dark");
  };
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <label className={cn("flex cursor-pointer flex-col pl-3.5")}>
      <input
        type="checkbox"
        className="hidden"
        onChange={handleToggle}
        checked={isDark}
      />
      <div
        className={cn(
          "relative mb-2 rounded-full border border-secondary bg-secondary",
          isOpen ? "h-8 w-16" : "h-16 w-8",
        )}
      >
        <div
          className={cn(
            "absolute left-0 top-0 h-full w-full transform rounded-full p-1.5 transition-transform duration-300 ease-in-out",
            isOpen && isDark ? "translate-x-7" : "translate-x-0",
            !isOpen && isDark ? "translate-y-7" : "translate-y-0",
          )}
        >
          <div className="flex h-5 w-5 items-center justify-center rounded-full bg-[#34CAA5] dark:bg-[#2C3E50]">
            {isDark ? <Moon color="#ffffff" /> : <Sun color="#ffffff" />}
          </div>
        </div>
      </div>
    </label>
  );
};
