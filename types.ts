import { ReactNode } from "react";

export interface SideBarItems {
    links: Array<{
        label: string;
        href: string;
        icon?: any;
    }>;
    extras?: ReactNode;
}