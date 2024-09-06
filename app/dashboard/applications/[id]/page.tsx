"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

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
  const router = useRouter();

  useEffect(() => {
    // Mocking the API response with dummy data
    const mockApplicantData: Applicant = {
      applicantNo: "66db2d5d12f86ab9c889ab8e",
      country: "USA",
      purpose: "Tourism",
      status: "Pending",
      submitDate: "2024-09-01",
      reviewedBy: "",
      addressStay: "789 Oak Street, Springfield, USA",
      cardName: "Visa Platinum",
      currentAddress: "123 Elm Street, Springfield, USA",
      dateOfExpiry: "2030-01-01T00:00:00.000Z",
      dateOfIssue: "2020-01-01T00:00:00.000Z",
      emailAddress: "johndoe@example.com",
      emergencyContactAddress: "789 Oak Street, Springfield, USA",
      emergencyContactName: "Jane Doe",
      emergencyContactOpAddress: "101 Health Center, Springfield, USA",
      emergencyContactOpName: "Dr. Smith",
      emergencyContactOpPhone: "+1-234-567-8903",
      emergencyContactOpRelationship: "Doctor",
      emergencyContactPhone: "+1-234-567-8902",
      emergencyContactRelationship: "Sister",
      employerAddress: "456 Tech Park, Silicon Valley, USA",
      fingerprint: "fingerprint_data_here",
      gender: "Male",
      mobileNumber: "+1-234-567-8901",
      money: 5000,
      nationality: "American",
      passportImage: "/path/to/passport/image.jpg", // Replace with actual image path if you want to see an image
      passportNumber: "123456789",
      periodOfStay: "2 weeks",
      placeOfBirth: "New York, USA",
      placeOfIssue: "New York, USA",
      prevDateOfExpiry: "2020-01-01T00:00:00.000Z",
      prevDateOfIssue: "2010-01-01T00:00:00.000Z",
      prevPassportNumber: "987654321",
      prevPlaceOfIssue: "Los Angeles, USA",
      profession: "Software Developer",
      rejectedPermission: "No",
      routeAndMode: "Flight",
      visaObjective: "Tourism",
    };

    // Simulating loading delay
    setTimeout(() => {
      setApplicant(mockApplicantData);
      setLoading(false);
    }, 1000); // Mock 1-second loading time
  }, [applicantNo]);

  const handleApproval = (status: string) => {
    // Updating the mock applicant status
    if (applicant) {
      setApplicant({ ...applicant, status });
    }
  };

  if (loading) return <div>Loading...</div>;

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
            <Image
              src={applicant.passportImage}
              alt="Passport"
              width={200}
              height={300}
            />
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

          <div className="mt-6">
            <button
              className="px-4 py-2 bg-green-600 text-white rounded-md mr-4"
              onClick={() => handleApproval("Approved")}
            >
              Approve
            </button>
            <button
              className="px-4 py-2 bg-red-600 text-white rounded-md"
              onClick={() => handleApproval("Not Approved")}
            >
              Not Approve
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ApplicantDetailPage;
