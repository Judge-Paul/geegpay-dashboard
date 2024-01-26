import React from "react";
import Header from "@/components/layout/header";
import Sidebar from "@/components/layout/sidebar";

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      <div className="flex h-screen border-collapse overflow-hidden">
        <Sidebar />
        {children}
      </div>
    </>
  );
};
