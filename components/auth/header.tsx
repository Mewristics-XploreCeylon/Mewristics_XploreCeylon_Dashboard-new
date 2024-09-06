import { Montserrat } from "next/font/google";

import { cn } from "@/lib/utils";

const font = Montserrat({
  subsets: ["latin"],
  weight: ["600"],
});

interface HeaderProps {
  label: string;
}

export const Header = ({ label }: HeaderProps) => {
  return (
    <div className={`w-full flex-col gap-y-4 justify-center items-center`}>
      <h1 className={cn("text-3xl font-semibold text-[#0B2567]", font.className)}>LogIn</h1>

      <p className="text-muted-foreground text-sm">{label}</p>
    </div>
  );
};
