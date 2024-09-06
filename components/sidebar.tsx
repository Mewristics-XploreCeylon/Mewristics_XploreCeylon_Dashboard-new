"use client";

import React from "react";
import { SidebarDesktop } from "./sidebar-desktop";
import { GrOverview, GrUserExpert } from "react-icons/gr";
import { SiExpertsexchange, SiFormstack } from "react-icons/si";
import { SideBarItems } from "@/types";

const sideBarItems: SideBarItems = {
  links: [
    { label: "Overview", href: "/dashboard", icon: GrOverview },
    {
      label: "Applications",
      href: "/dashboard/applications",
      icon: SiFormstack,
    },
    {
      label: "Reviwers",
      href: "/dashboard/reviewers",
      icon: GrUserExpert,
    },
    {
      label: "Review Criteria",
      href: "/dashboard/review-criteria",
      icon: SiExpertsexchange,
    },
  ],
};

export function SideBar() {
  return <SidebarDesktop sideBarItems={sideBarItems} />;
}
