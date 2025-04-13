import React from "react";
import { Line } from "react-chartjs-2";
import { IoMdArrowDropup } from "react-icons/io";
import { IoMdArrowDropdown } from "react-icons/io";
import res from "../assets/images/respiratory rate.png";
import temp from "../assets/images/temperature.png";
import heart from "../assets/images/heartBPM.png";

export default function DiagnosisHistory({ diagnosis_history }) {
  const months = [
    { month: "Oct", year: "2023" },
    { month: "Nov", year: "2023" },
    { month: "Dec", year: "2023" },
    { month: "Jan", year: "2024" },
    { month: "Feb", year: "2024" },
    { month: "Mar", year: "2024" },
  ];

  const chartData = {
    labels: months.map((d) => `${d.month} ${d.year}`),
    datasets: [
      {
        label: "Systolic",
        data: [120, 118, 160, 112, 148, 158],
        borderColor: "#E66FD2",
        backgroundColor: "#E66FD2",
        tension: 0.4,
        pointStyle: 'circle',
        pointRadius: 4,
        pointBackgroundColor: "#E66FD2",
      },
      {
        label: "Diastolic",
        data: [108, 64, 108, 92, 72, 78],
        borderColor: "#8C6FE6",
        backgroundColor: "#8C6FE6",
        tension: 0.4,
        pointStyle: 'circle',
        pointRadius: 4,
        pointBackgroundColor: "#8C6FE6",
      },
    ],
  };

  const latestDiagnosis = diagnosis_history[0];

  return (
    <div className="w-[700px]">
      <div className="bg-white rounded-lg p-6">
        <h1 className="text-2xl font-bold">Diagnosis History</h1>
        <div className="flex space-x-6 mt-8 mb-6 bg-[#F4F0FE] p-6 rounded-lg">
          <div className="flex-1">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-semibold">Blood Pressure</h3>
              <select className="text-sm mr-8 focus:outline-none bg-transparent">
                <option>Last 6 months</option>
                <option>Last year</option>
                <option>All time</option>
              </select>
            </div>
            <div className="h-[200px]">
              <Line
                data={{
                  ...chartData,
                  datasets: chartData.datasets.map((dataset, index) => ({
                    ...dataset,
                    borderColor: index === 0 ? "#C26EB4" : "#7E6CAB",
                  })),
                }}
                options={{
                  responsive: true,
                  maintainAspectRatio: false,
                  scales: {
                    y: {
                      beginAtZero: false,
                      min: 60,
                      max: 180,
                      grid: {
                        color: "rgba(0, 0, 0, 0.1)",
                      },
                    },
                    x: {
                      grid: {
                        display: false,
                      },
                    },
                  },
                  plugins: {
                    legend: {
                      display: false,
                    },
                  },
                  elements: {
                    line: {
                      borderWidth: 2,
                    },
                  },
                }}
              />
            </div>
          </div>
          <div className="w-48 space-y-4">
            <div>
              <div className="flex items-center space-x-2">
                <span className="w-3 h-3 rounded-full bg-[#FF3CD6]"></span>
                <span className="text-sm">Systolic</span>
              </div>
              <div className="mt-1">
                <span className="text-[22px] font-bold">
                  {latestDiagnosis.blood_pressure.systolic.value}
                </span>
                <p className="flex items-center text-sm text-gray-900">
                  <IoMdArrowDropup className="text-lg" />
                  <span>{latestDiagnosis.blood_pressure.systolic.levels}</span>
                </p>
              </div>
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <span className="w-3 h-3 rounded-full bg-[#4A3AFF]"></span>
                <span className="text-sm">Diastolic</span>
              </div>
              <div className="mt-1">
                <span className="text-[22px] font-bold">
                  {latestDiagnosis.blood_pressure.diastolic.value}
                </span>
                <p className="flex items-center text-sm text-gray-900">
                  <IoMdArrowDropdown className="text-lg" />
                  <span>{latestDiagnosis.blood_pressure.diastolic.levels}</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-6">
          <div className="bg-[#E0F3FA] rounded-lg p-6">
            <img src={res} alt="" className="w-[80px] h-[80px]" />
            <h3 className="font-medium mt-4">Respiratory Rate</h3>
            <p className="text-3xl font-bold mb-1">
              {latestDiagnosis.respiratory_rate.value} bpm
            </p>
            <p className="text-sm text-gray-600 mt-4">
              {latestDiagnosis.respiratory_rate.levels}
            </p>
          </div>

          <div className="bg-[#FFE6E9] rounded-lg p-6">
            <img src={temp} alt="" className="w-[80px] h-[80px]" />
            <h3 className="font-medium mt-4">Temperature</h3>
            <p className="text-3xl font-bold mb-1">
              {latestDiagnosis.temperature.value}°F
            </p>
            <p className="text-sm text-gray-600 mt-4">
              {latestDiagnosis.temperature.levels}
            </p>
          </div>

          <div className="bg-[#FFE6F1] rounded-lg p-6">
            <img src={heart} alt="" className="w-[80px] h-[80px]" />
            <h3 className="font-medium mt-4">Heart Rate</h3>
            <p className="text-3xl font-bold mb-1">
              {latestDiagnosis.heart_rate.value} bpm
            </p>
            <p className="text-sm text-gray-600 mt-4">
              {latestDiagnosis.heart_rate.levels}
            </p>
          </div>
        </div>

        
      </div>
    </div>
  );
}
