import React from "react";
import { BsThreeDots } from "react-icons/bs";
import { AiOutlineSearch } from "react-icons/ai";

const patients = [
  {
    name: "Emily Williams",
    gender: "Female",
    age: 18,
    image: "https://fedskillstest.ct.digital/1.png",
  },
  {
    name: "Ryan Johnson",
    gender: "Male",
    age: 45,
    image: "https://fedskillstest.ct.digital/2.png",
  },
  {
    name: "Brandon Mitchell",
    gender: "Male",
    age: 36,
    image: "https://fedskillstest.ct.digital/3.png",
  },
  {
    name: "Jessica Taylor",
    gender: "Female",
    age: 28,
    image: "https://fedskillstest.ct.digital/4.png",
  },
  {
    name: "Samantha Johnson",
    gender: "Female",
    age: 56,
    image: "https://fedskillstest.ct.digital/5.png",
  },
  {
    name: "Ashley Martinez",
    gender: "Female",
    age: 54,
    image: "https://fedskillstest.ct.digital/6.png",
  },
  {
    name: "Olivia Brown",
    gender: "Female",
    age: 32,
    image: "https://fedskillstest.ct.digital/7.png",
  },
  {
    name: "Tyler Davis",
    gender: "Male",
    age: 19,
    image: "https://fedskillstest.ct.digital/8.png",
  },
  {
    name: "Kevin Anderson",
    gender: "Male",
    age: 30,
    image: "https://fedskillstest.ct.digital/9.png",
  },
  {
    name: "Dylan Thompson",
    gender: "Male",
    age: 36,
    image: "https://fedskillstest.ct.digital/10.png",
  },
  {
    name: "Nathan Evans",
    gender: "Male",
    age: 58,
    image: "https://fedskillstest.ct.digital/11.png",
  },
  {
    name: "Mike Nolan",
    gender: "Male",
    age: 31,
    image: "https://fedskillstest.ct.digital/12.png",
  },
  {
    name: "Emily Williams",
    gender: "Female",
    age: 18,
    image: "https://fedskillstest.ct.digital/1.png",
  },
  {
    name: "Ryan Johnson",
    gender: "Male",
    age: 45,
    image: "https://fedskillstest.ct.digital/2.png",
  },
  {
    name: "Brandon Mitchell",
    gender: "Male",
    age: 36,
    image: "https://fedskillstest.ct.digital/3.png",
  },
  {
    name: "Jessica Taylor",
    gender: "Female",
    age: 28,
    image: "https://fedskillstest.ct.digital/4.png",
  },
  {
    name: "Samantha Johnson",
    gender: "Female",
    age: 56,
    image: "https://fedskillstest.ct.digital/5.png",
  },
  {
    name: "Ashley Martinez",
    gender: "Female",
    age: 54,
    image: "https://fedskillstest.ct.digital/6.png",
  },
  {
    name: "Olivia Brown",
    gender: "Female",
    age: 32,
    image: "https://fedskillstest.ct.digital/7.png",
  },
  {
    name: "Tyler Davis",
    gender: "Male",
    age: 19,
    image: "https://fedskillstest.ct.digital/8.png",
  },
  {
    name: "Kevin Anderson",
    gender: "Male",
    age: 30,
    image: "https://fedskillstest.ct.digital/9.png",
  },
  {
    name: "Dylan Thompson",
    gender: "Male",
    age: 36,
    image: "https://fedskillstest.ct.digital/10.png",
  },
  {
    name: "Nathan Evans",
    gender: "Male",
    age: 58,
    image: "https://fedskillstest.ct.digital/11.png",
  },
  {
    name: "Mike Nolan",
    gender: "Male",
    age: 31,
    image: "https://fedskillstest.ct.digital/12.png",
  },
];

export default function PatientsList() {
  return (
    <div className="w-[300px] bg-[#fff] rounded-lg shadow-lg mr-4 flex flex-col">
      <div className="p-4">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold">Patients</h2>
          <AiOutlineSearch className="text-xl" />
        </div>
        <div className="space-y-2 max-h-[950px] overflow-y-auto">
          {patients.map((patient) => (
            <div
              key={patient.name}
              className={`flex items-center justify-between space-x-3 mt-6 rounded-lg cursor-pointer ${
                patient.name === "Jessica Taylor"
                  ? "bg-primary/10"
                  : "hover:bg-gray-50"
              }`}
            >
              <img
                src={patient.image}
                alt={patient.name}
                className="w-10 h-10 rounded-full"
              />
              <div className="flex-1">
                <p className="font-bold text-[14px]">{patient.name}</p>
                <p className="text-sm text-gray-500">
                  {patient.gender}, {patient.age}
                </p>
              </div>
              <BsThreeDots className="text-gray-900 text-xl" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
