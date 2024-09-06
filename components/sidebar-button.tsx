import React from "react";
import { Button, ButtonProps } from "./ui/button";
import { IconType } from "react-icons";
import { cn } from '../lib/utils'

interface SidebarButtonProps extends ButtonProps {
  icon: IconType; 
}

export const SidebarButton: React.FC<SidebarButtonProps> = ({ icon: Icon, children, className, ...props }) => {
  return (
    <Button variant="ghost" className={cn("gap-2 justify-start", className)} {...props}>
      <Icon className="mr-2 text-[20px]" /> 
      <span>{children}</span>
    </Button>
  );
};
