import React from "react";
import { SidebarButton } from "./sidebar-button";
import Image from "next/image";
import { SideBarItems } from "../types";
import Link from "next/link";
import { Separator } from "./ui/separator";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Button } from "./ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { MdMoreHoriz } from "react-icons/md";
import { GoSignOut } from "react-icons/go";
import { IoSettingsOutline } from "react-icons/io5";
import { usePathname } from "next/navigation";
import { signOut } from "next-auth/react";

interface SidebarDesktopProps {
  sideBarItems: SideBarItems;
}

export const SidebarDesktop = (props: SidebarDesktopProps) => {
  const pathName = usePathname();

  return (
    <aside className="w-[270px] max-w-xs h-full fixed left-0 top-0 z-40 border-r">
      <div className="h-full px-3 py-4">
        {/* <h3 className="mx-3 text-lg font-semibold text-foreground">Fits Air</h3> */}
        <div className="flex justify-center items-center">
          <Image
            src="/logo.png"
            width={100}
            height={50}
            className="mx-3"
            alt="Logo"
          />
        </div>

        <div className="mt-5 flex flex-col justify-between">
          <div className="flex flex-col gap-1 w-full">
            {props.sideBarItems.links.map((link, index) => (
              <Link key={index} href={link.href}>
                <SidebarButton
                  icon={link.icon}
                  className="w-full"
                  variant={pathName === link.href ? "secondary" : "ghost"}
                >
                  {link.label}
                </SidebarButton>
              </Link>
            ))}

            {props.sideBarItems.extras}
          </div>

          <div className="absolute left-0 bottom-3 w-full px-3">
            <Separator className="absolute -top-3 left-0 w-full" />

            <Popover>
              <PopoverTrigger asChild>
                <Button variant="ghost" className="w-full justify-start">
                  <div className="flex justify-between items-center w-full">
                    <div className="flex gap-2">
                      <Avatar className="w-5 h-5">
                        <AvatarImage src="/avatars/me.png" alt="Fits air logo" />
                        <AvatarFallback>XploreCeylon</AvatarFallback>
                      </Avatar>

                      <span>Shakthi Warnakulasuriya</span>
                    </div>

                    <MdMoreHoriz />
                  </div>
                </Button>
              </PopoverTrigger>

              <PopoverContent className="mb-2 w-56 p-3 rounded-[1rem]">
                <div className="space-y-1">
                  <Link href="./dashboard/settings" className="">
                    <SidebarButton
                      size="sm"
                      icon={IoSettingsOutline}
                      className="w-full"
                    >
                      Account Settings
                    </SidebarButton>
                  </Link>
                  <Link href="./" className="">
                    <SidebarButton
                      size="sm"
                      icon={GoSignOut}
                      className="w-full"
                      onClick={() => signOut()}
                    >
                      Sign Out
                    </SidebarButton>
                  </Link>
                </div>
              </PopoverContent>
            </Popover>
          </div>
        </div>
      </div>
    </aside>
  );
};
