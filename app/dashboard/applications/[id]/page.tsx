"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Button } from "@/components/ui/button";

interface ApplicantDetailPageProps {
  params: {
    applicantNo: string;
  };
}

interface Applicant {
  applicantNo: string;
  country: string;
  purpose: string;
  status: string;
  submitDate: string;
  reviewedBy: string;
  addressStay: string;
  cardName: string;
  currentAddress: string;
  dateOfExpiry: string;
  dateOfIssue: string;
  emailAddress: string;
  emergencyContactAddress: string;
  emergencyContactName: string;
  emergencyContactOpAddress: string;
  emergencyContactOpName: string;
  emergencyContactOpPhone: string;
  emergencyContactOpRelationship: string;
  emergencyContactPhone: string;
  emergencyContactRelationship: string;
  employerAddress: string;
  fingerprint: string;
  gender: string;
  mobileNumber: string;
  money: number;
  nationality: string;
  passportImage: string;
  passportNumber: string;
  periodOfStay: string;
  placeOfBirth: string;
  placeOfIssue: string;
  prevDateOfExpiry: string;
  prevDateOfIssue: string;
  prevPassportNumber: string;
  prevPlaceOfIssue: string;
  profession: string;
  rejectedPermission: string;
  routeAndMode: string;
  visaObjective: string;
}

const ApplicantDetailPage: React.FC<ApplicantDetailPageProps> = ({
  params,
}) => {
  const { applicantNo } = params;
  const [applicant, setApplicant] = useState<Applicant | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [passportImageUrl, setPassportImageUrl] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const fetchApplicant = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3001/visa_app/applications/${applicantNo}`
        );
        setApplicant(response.data);
        setLoading(false);
      } catch (err) {
        setError("Failed to load applicant data.");
        setLoading(false);
      }
    };

    // const fetchPassportImage = async () => {
    //   try {
    //     const imageResponse = await axios.get(
    //       `http://localhost:3001/visa_app/images/${applicantNo}`
    //     );
    //     setPassportImageUrl(imageResponse.data.imagePath);
    //   } catch (err) {
    //     setError("Failed to load passport image.");
    //   }
    // };

    fetchApplicant();
    // fetchPassportImage();
  }, [applicantNo]);

  const handleApproval = async (status: string) => {
    try {
      await axios.post(
        `http://localhost:3001/visa_app/applications/${applicantNo}/status`,
        {
          status,
        }
      );
      setApplicant((prevApplicant) =>
        prevApplicant ? { ...prevApplicant, status } : null
      );
    } catch (err) {
      setError("Failed to update applicant status.");
    }
  };

  if (loading) return <div>Loading...</div>;
  // if (error) return <div>Error: {error}</div>;

  console.log(applicant);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold text-[#0B2567]">Applicant Details</h1>
      {applicant && (
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
            <strong>Reviewed By:</strong> {applicant.reviewedBy || "N/A"}
          </p>
          <p>
            <strong>Address Stay:</strong> {applicant.addressStay}
          </p>
          <p>
            <strong>Card Name:</strong> {applicant.cardName}
          </p>
          <p>
            <strong>Current Address:</strong> {applicant.currentAddress}
          </p>
          <p>
            <strong>Date of Expiry:</strong>{" "}
            {new Date(applicant.dateOfExpiry).toLocaleDateString()}
          </p>
          <p>
            <strong>Date of Issue:</strong>{" "}
            {new Date(applicant.dateOfIssue).toLocaleDateString()}
          </p>
          <p>
            <strong>Email Address:</strong> {applicant.emailAddress}
          </p>
          <p>
            <strong>Emergency Contact Address:</strong>{" "}
            {applicant.emergencyContactAddress}
          </p>
          <p>
            <strong>Emergency Contact Name:</strong>{" "}
            {applicant.emergencyContactName}
          </p>
          <p>
            <strong>Emergency Contact Operation Address:</strong>{" "}
            {applicant.emergencyContactOpAddress}
          </p>
          <p>
            <strong>Emergency Contact Operation Name:</strong>{" "}
            {applicant.emergencyContactOpName}
          </p>
          <p>
            <strong>Emergency Contact Operation Phone:</strong>{" "}
            {applicant.emergencyContactOpPhone}
          </p>
          <p>
            <strong>Emergency Contact Operation Relationship:</strong>{" "}
            {applicant.emergencyContactOpRelationship}
          </p>
          <p>
            <strong>Emergency Contact Phone:</strong>{" "}
            {applicant.emergencyContactPhone}
          </p>
          <p>
            <strong>Emergency Contact Relationship:</strong>{" "}
            {applicant.emergencyContactRelationship}
          </p>
          <p>
            <strong>Employer Address:</strong> {applicant.employerAddress}
          </p>
          <p>
            <strong>Gender:</strong> {applicant.gender}
          </p>
          <p>
            <strong>Mobile Number:</strong> {applicant.mobileNumber}
          </p>
          <p>
            <strong>Money:</strong> ${applicant.money}
          </p>
          <p>
            <strong>Nationality:</strong> {applicant.nationality}
          </p>
          <p>
            <strong>Passport Image:</strong>
            {passportImageUrl ? (
              <Image
                src={`http://localhost:3001${passportImageUrl}`} // Assuming the image path is returned relative to the base URL
                alt="Passport"
                width={200}
                height={300}
              />
            ) : (
              "Loading image..."
            )}
          </p>
          <p>
            <strong>Passport Number:</strong> {applicant.passportNumber}
          </p>
          <p>
            <strong>Period of Stay:</strong> {applicant.periodOfStay}
          </p>
          <p>
            <strong>Place of Birth:</strong> {applicant.placeOfBirth}
          </p>
          <p>
            <strong>Place of Issue:</strong> {applicant.placeOfIssue}
          </p>
          <p>
            <strong>Previous Date of Expiry:</strong>{" "}
            {new Date(applicant.prevDateOfExpiry).toLocaleDateString()}
          </p>
          <p>
            <strong>Previous Date of Issue:</strong>{" "}
            {new Date(applicant.prevDateOfIssue).toLocaleDateString()}
          </p>
          <p>
            <strong>Previous Passport Number:</strong>{" "}
            {applicant.prevPassportNumber}
          </p>
          <p>
            <strong>Previous Place of Issue:</strong>{" "}
            {applicant.prevPlaceOfIssue}
          </p>
          <p>
            <strong>Profession:</strong> {applicant.profession}
          </p>
          <p>
            <strong>Rejected Permission:</strong> {applicant.rejectedPermission}
          </p>
          <p>
            <strong>Route and Mode:</strong> {applicant.routeAndMode}
          </p>
          <p>
            <strong>Visa Objective:</strong> {applicant.visaObjective}
          </p>

          <div className="mt-6">
            <Button
              variant={"default"}
              className="px-4 py-2 bg-green-600 text-white rounded-md mr-4"
              onClick={() => handleApproval("Approved")}
            >
              Approve
            </Button>
            <Button
              variant={"outline"}
              className="px-4 py-2 bg-red-600 text-white rounded-md"
              onClick={() => handleApproval("Not Approved")}
            >
              Not Approve
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ApplicantDetailPage;
