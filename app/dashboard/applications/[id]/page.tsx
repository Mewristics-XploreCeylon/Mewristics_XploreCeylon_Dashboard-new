// /app/applicants/[applicantNo]/page.tsx
import React from "react";

interface ApplicantDetailPageProps {
  params: {
    applicantNo: string;
  };
}

const ApplicantDetailPage: React.FC<ApplicantDetailPageProps> = ({
  params,
}) => {
  const { applicantNo } = params;

  // Fetch applicant data from the API or database
  const applicant = {
    applicantNo,
    country: "USA",
    purpose: "Vacation",
    status: "Pending Review",
    submitDate: "2024-01-01",
    reviewedBy: "",
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold text-[#0B2567]">Applicant Details</h1>
      <div className="mt-4">
        <p>
          <strong>Applicant No:</strong> {applicant.applicantNo}
        </p>
        <p>
          <strong>Country:</strong> {applicant.country}
        </p>
        <p>
          <strong>Purpose:</strong> {applicant.purpose}
        </p>
        <p>
          <strong>Status:</strong> {applicant.status}
        </p>
        <p>
          <strong>Submitted Date:</strong> {applicant.submitDate}
        </p>
        <p>
          <strong>Reviewed By:</strong> {applicant.reviewedBy}
        </p>
      </div>
    </div>
  );
};

export default ApplicantDetailPage;
