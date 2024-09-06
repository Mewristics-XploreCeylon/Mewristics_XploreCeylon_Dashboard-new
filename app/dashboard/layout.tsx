import React from "react";
import { SideBar } from "../../components/sidebar";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col">
      <nav className="flex flex-col justify-between items-center gap-2">
        <SideBar />
      </nav>
      <main className="ml-[300px] mt-3"> 
      {children}
      </main>
    </div>
  );
};

export default DashboardLayout;
