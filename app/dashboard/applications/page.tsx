import { ApplicantsTable } from "@/components/dashbaord/applicants-table";
import React from "react";

const CrewManagement = () => {
  const applicants = [
    {
      applicantNo: "66db2d5d12f86ab9c889ab8e",
      country: "USA",
      purpose: "Tourism",
      status: "Pending Review",
      submitDate: "2020-01-01",
      reviewedBy: "Jane Doe",
    },
    {
      applicantNo: "2",
      country: "China",
      purpose: "Business",
      status: "Not Approved",
      submitDate: "2023-06-23",
      reviewedBy: "Visuka JM",
    },
    {
      applicantNo: "3",
      country: "India",
      purpose: "Vacation",
      status: "Approved",
      submitDate: "2023-06-23",
      reviewedBy: "Samantha",
    },
    {
      applicantNo: "4",
      country: "USA",
      purpose: "Vacation",
      status: "Pending Review",
      submitDate: "2023-06-23",
      reviewedBy: "",
    },
    {
      applicantNo: "5",
      country: "Canada",
      purpose: "Education",
      status: "Not Approved",
      submitDate: "2023-06-23",
      reviewedBy: "Quincy",
    },
  ];

  return (
    <div className="w-full flex flex-col justify-center pr-[30px] items-start">
      <h1 className="w-full font-semibold text-[36px] text-[#0B2567]">
        Xplore Ceylon - Applicant Management
      </h1>

      {/* <CrewData /> */}

      <ApplicantsTable applicants={applicants} />
    </div>
  );
};

export default CrewManagement;
