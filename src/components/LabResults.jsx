import React from "react";
import download from "../assets/images/Download.png";

export default function LabResults() {
    const allResults = [
      "Blood Tests",
      "CT Scans",
      "Radiology Reports",
      "X-Rays",
      "Urine Test",
      "MRI Results",
      "EKG Report",
      "Cholesterol Panel",
      "Complete Blood Count",
      "Thyroid Function Test",
      "Liver Function Test",
      "Kidney Function Test",
    ];

  return (
    <div className="bg-[#fff] rounded-lg p-6 mt-6 ml-4 shadow-lg w-[300px]">
      <h3 className="text-2xl font-semibold mb-6">Lab Results</h3>
      <div className="space-y-4 max-h-[245px] overflow-y-auto">
        {allResults.map((result, index) => (
          <div key={index} className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <span className="text-sm">{result}</span>
            </div>
            <button className="text-primary hover:text-primary/80">
              <img src={download} alt="Dowload button icon" className="w-4" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}