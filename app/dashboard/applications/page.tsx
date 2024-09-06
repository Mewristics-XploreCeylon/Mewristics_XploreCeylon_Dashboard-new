"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import { ApplicantsTable } from "@/components/dashbaord/applicants-table";

interface Applicant {
  applicantNo: string;
  country: string;
  purpose: string;
  status: string;
  submitDate: string;
  reviewedBy: string;
}

const CrewManagement = () => {
  const [applicants, setApplicants] = useState<Applicant[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchApplicants = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3001/visa_app/applications"
        );

        console.log(response.data);

        // Transform the data to the expected format
        const transformedApplicants = response.data.map(
          (item: any, index: number) => ({
            applicantNo: item._id,
            country: item.nationality,
            purpose: item.visaObjective,
            status: "Pending Review",
            submitDate: item.dateOfIssue.split("T")[0],
            reviewedBy: "", 
          })
        );

        setApplicants(transformedApplicants);
        setLoading(false);
      } catch (error) {
        setError((error as any).message);
        setLoading(false);
      }
    };

    fetchApplicants();
  }, []);

  
  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="w-full flex flex-col justify-center pr-[30px] items-start">
      <h1 className="w-full font-semibold text-[36px] text-[#0B2567]">
        Xplore Ceylon - Applicant Management
      </h1>
      <ApplicantsTable applicants={applicants} />
    </div>
  );
};

export default CrewManagement;
