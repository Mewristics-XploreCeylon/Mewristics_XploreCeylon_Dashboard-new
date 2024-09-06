import * as React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "./ui/badge";
import { IoMdDownload } from "react-icons/io";
import { FilterDropDown } from "./filter-dropdown";
import { Separator } from "./ui/separator";

interface CrewMember {
  name: string;
  position: string;
  staffNumber: string;
  status: string;
  lastOnline: string;
}

interface DashboardProps {
  crewMembers: CrewMember[];
}

export const CrewTable: React.FC<DashboardProps> = ({ crewMembers }) => {
  return (
    <div className="flex w-full flex-col max-w-6xl mt-5">
      <main className="flex flex-col">
        <div className="grid auto-rows-max items-start gap-4 md:gap-8 lg:col-span-2">
          <Card x-chunk="dashboard-05-chunk-3">
            <CardHeader className="px-7">
              <div className="flex justify-between items-center">
                <div className="flex flex-col justify-start items-start gap-2">
                  <CardTitle>Cabin Crew Information</CardTitle>
                  <CardDescription>
                    A list of all cabin crew members.
                  </CardDescription>
                </div>
                <div className="flex justify-center items-center gap-2">
                  <FilterDropDown />
                  <Button
                    size="sm"
                    variant="default"
                    className="gap-1 text-sm bg-[#0B2567]"
                  >
                    <div className="w-full flex justify-center items-center px-2 py-2">
                      <IoMdDownload className="w-4 h-4" />
                      <span className="sr-only sm:not-sr-only">Export</span>
                    </div>
                  </Button>
                </div>
              </div>
            </CardHeader>
            <Separator className="my-2" />
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Crew Member</TableHead>
                    <TableHead className="hidden md:table-cell">
                      Position
                    </TableHead>
                    <TableHead className="hidden sm:table-cell">
                      Staff No.
                    </TableHead>
                    <TableHead className="hidden sm:table-cell">
                      Update Status
                    </TableHead>
                    <TableHead className="hidden md:table-cell">
                      Last Online
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {crewMembers.map((member, index) => (
                    <TableRow key={index}>
                      <TableCell>
                        <div className="font-medium">{member.name}</div>
                      </TableCell>
                      <TableCell className="hidden sm:table-cell">
                        {member.position}
                      </TableCell>
                      <TableCell className="hidden sm:table-cell">
                        {member.staffNumber}
                      </TableCell>
                      <TableCell className="hidden sm:table-cell">
                        <Badge
                          className={`text-xs ${
                            member.status === "Installed"
                              ? "bg-emerald-500"
                              : "bg-red-500"
                          }`}
                          variant="default"
                        >
                          {member.status}
                        </Badge>
                      </TableCell>
                      <TableCell className="hidden md:table-cell">
                        {member.lastOnline}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};
