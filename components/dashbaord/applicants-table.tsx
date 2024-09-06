"use client";

import { useRouter } from "next/navigation";
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
import { Badge } from "@/components/ui/badge";
import { IoMdDownload } from "react-icons/io";
import { Separator } from "@/components/ui/separator";
import { FilterDropDown } from "./filter-dropdown";

interface Applicant {
  applicantNo: string;
  country: string;
  purpose: string;
  status: string;
  submitDate: string;
  reviewedBy: string;
}

interface DashboardProps {
  applicants: Applicant[];
}

export const ApplicantsTable: React.FC<DashboardProps> = ({ applicants }) => {
  const router = useRouter();

  const handleRowClick = (applicantNo: string) => {
    router.push(`/dashboard/applications/${applicantNo}`);
  };

  return (
    <div className="flex w-full flex-col max-w-6xl mt-5">
      <main className="flex flex-col">
        <div className="grid auto-rows-max items-start gap-4 md:gap-8 lg:col-span-2">
          <Card x-chunk="dashboard-05-chunk-3">
            <CardHeader className="px-7">
              <div className="flex justify-between items-center">
                <div className="flex flex-col justify-start items-start gap-2">
                  <CardTitle>Application Information</CardTitle>
                  <CardDescription>A list of all Applications.</CardDescription>
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
                    <TableHead>Applicant No.</TableHead>
                    <TableHead className="hidden md:table-cell">
                      Country
                    </TableHead>
                    <TableHead className="hidden sm:table-cell">
                      Purpose
                    </TableHead>
                    <TableHead className="hidden md:table-cell">
                      Submitted Date
                    </TableHead>
                    <TableHead className="hidden sm:table-cell">
                      Visa Status
                    </TableHead>
                    <TableHead className="hidden sm:table-cell">
                      Reviewed by
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {applicants.map((applicant, index) => (
                    <TableRow
                      key={index}
                      className="cursor-pointer"
                      onClick={() => handleRowClick(applicant.applicantNo)}
                    >
                      <TableCell>
                        <div className="font-medium">
                          {applicant.applicantNo}
                        </div>
                      </TableCell>
                      <TableCell className="hidden sm:table-cell">
                        {applicant.country}
                      </TableCell>
                      <TableCell className="hidden sm:table-cell">
                        {applicant.purpose}
                      </TableCell>
                      <TableCell className="hidden md:table-cell">
                        {applicant.submitDate}
                      </TableCell>
                      <TableCell className="hidden sm:table-cell">
                        <Badge
                          className={`text-xs ${
                            applicant.status === "Approved"
                              ? "bg-emerald-500"
                              : applicant.status === "Pending Review"
                              ? "bg-yellow-500"
                              : "bg-red-500"
                          }`}
                          variant="default"
                        >
                          {applicant.status}
                        </Badge>
                      </TableCell>
                      <TableCell className="hidden sm:table-cell">
                        {applicant.reviewedBy === ""
                          ? "N/A"
                          : applicant.reviewedBy}
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
