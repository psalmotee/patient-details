import React from "react";
import logo from "../assets/images/TestLogo.svg";
import home from "../assets/images/home.png";
import patients from "../assets/images/patients.png";
import schedule from "../assets/images/schedule.png";
import message from "../assets/images/message.png";
import transactions from "../assets/images/transactions.png";
import doctorImage from "../assets/images/senior-woman-doctor.png";
import { RiSettings3Line } from "react-icons/ri";
import { BsThreeDotsVertical } from "react-icons/bs";



export default function Header() {
  return (
    <header className="bg-[#fff] rounded-full shadow-md fixed top-2 left- w-334 z-10">
      <div className="mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center w-40 space-x-2">
            <img src={logo} alt="Tech Care Logo" />
          </div>
          <nav className="flex items-center space-x-6">
            <div className="flex flex-col justify-center items-center hover:bg-[#01F0D0]  rounded-full p-2 transition duration-300 ease-in-out">
              <a
                href="#"
                className="text-gray-900 hover:text-gray-900 flex items-center space-x-2"
              >
                <img src={home} alt="Home Icon" />
                <span>Overview</span>
              </a>
            </div>
            <div className="flex flex-col justify-center items-center rounded-full bg-[#01F0D0]  p-2 hover:bg-[#01F0D5] transition duration-300 ease-in-out">
              <a
                href="#"
                className="text-gray-900 hover:text-gray-900 flex items-center space-x-2"
              >
                <img src={patients} alt="Home Icon" />
                <span>Patients</span>
              </a>
            </div>
            <div className="flex flex-col justify-center items-center hover:bg-[#01F0D0]  rounded-full p-2 transition duration-300 ease-in-out">
              <a
                href="#"
                className="text-gray-900 hover:text-gray-900 flex items-center space-x-2"
              >
                <img src={schedule} alt="Home Icon" />
                <span>Schedule</span>
              </a>
            </div>
            <div className="flex flex-col justify-center items-center hover:bg-[#01F0D0]  rounded-full p-2 transition duration-300 ease-in-out">
              <a
                href="#"
                className="text-gray-900 hover:text-gray-900 flex items-center space-x-2"
              >
                <img src={message} alt="Home Icon" />
                <span> Message</span>
              </a>
            </div>
            <div className="flex flex-col justify-center items-center hover:bg-[#01F0D0]  rounded-full p-2 transition duration-300 ease-in-out">
              <a
                href="#"
                className="text-gray-900 hover:text-gray-900 flex items-center space-x-2"
              >
                <img src={transactions} alt="Home Icon" />
                <span> Transactions</span>
              </a>
            </div>
          </nav>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2 border-r-2 pr-4 border-gray-300">
              <img
                src={doctorImage}
                alt="senior woman doctor"
                className="w-10 h-10 rounded-full"
              />
              <div>
                <p className="text-sm font-medium">Dr. Jose Simmons</p>
                <p className="text-xs text-gray-500">General Practitioner</p>
              </div>
            </div>
            <button className="text-gray-600 hover:text-gray-900 cursor-pointer">
              <RiSettings3Line className="w-6 h-6" />
            </button>
            <button className="cursor-pointer">
              <BsThreeDotsVertical />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
