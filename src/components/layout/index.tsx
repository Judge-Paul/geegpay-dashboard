import React from "react";
import Header from "@/components/layout/header";
import Sidebar from "@/components/layout/sidebar";
import SidebarToggle from "../toggles/SidebarToggle";

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      <div className="flex h-screen w-full border-collapse overflow-hidden">
        <Sidebar />
        <SidebarToggle />
        <div className="w-full overflow-y-scroll">{children}</div>
      </div>
    </>
  );
};
