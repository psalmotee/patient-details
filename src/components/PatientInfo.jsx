import React from "react";
import birthIcon from "../assets/images/BirthIcon.png";
import femaleIcon from "../assets/images/FemaleIcon.png";
import phoneIcon from "../assets/images/PhoneIcon.png";
import insuranceIcon from "../assets/images/InsuranceIcon.png";

export default function PatientInfo({ patient }) {
  return (
    <div className="w-[300px] bg-[#fff] ml-4 rounded-lg p-6 items-start space-x-6">
      <div className="flex flex-col items-center justify-center m-auto mb-6">
        <img
          src={patient.profile_picture}
          alt={patient.name}
          className="w-40 h-40 rounded-full"
        />
        <h2 className="text-2xl font-bold mb-4 mt-4">{patient.name}</h2>
      </div>
      <div className="flex flex-col space-y-6">
        <div className="flex items-center space-x-4">
          <img src={birthIcon} alt="" className="w-10 h-10 rounded-full" />
          <div>
            <p className="text-sm text-gray-900">Date of Birth</p>
            <p className="font-semibold text-sm">{patient.date_of_birth}</p>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <img src={femaleIcon} alt="" className="w-10 h-10 rounded-full" />
          <div>
            <p className="text-sm text-gray-900">Gender</p>
            <p className="font-semibold text-sm">{patient.gender}</p>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <img src={phoneIcon} alt="" className="w-10 h-10 rounded-full" />
          <div>
            <p className="text-sm text-gray-900">Contact Info</p>
            <p className="font-semibold text-sm">{patient.phone_number}</p>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <img src={phoneIcon} alt="" className="w-10 h-10 rounded-full" />
          <div>
            <p className="text-sm text-gray-900">Emergency Contacts</p>
            <p className="font-semibold text-sm">{patient.emergency_contact}</p>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <img src={insuranceIcon} alt="" className="w-10 h-10 rounded-full" />
          <div>
            <p className="text-sm text-gray-900">Insurance Provider</p>
            <p className="font-semibold text-sm">{patient.insurance_type}</p>
          </div>
        </div>
      </div>
      <div>
        <button className="mt-12 ml-14 w-45 bg-[#01F0D0] text-white rounded-full py-2 px- hover:bg-primary/90">
          Show All Information
        </button>
      </div>
    </div>
  );
}
