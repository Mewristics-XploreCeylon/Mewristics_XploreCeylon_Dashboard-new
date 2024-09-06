"use client";

import React from "react";
import { PieChartDashboard } from "@/components/dashbaord/pie-chart";

const DashboardPage = () => {
  return (
    <div className="w-full flex flex-col gap-4 pr-[30px]">
      <h1 className="font-semibold text-[36px] text-[#0B2567] dark:text-white">
        Overview
      </h1>
      <div className="w-full flex-1 flex flex-wrap gap-4 items-start">
        <PieChartDashboard />
      </div>
      {/* <RecentUpdates updates={updates} /> */}
    </div>
  );
};

export default DashboardPage;
