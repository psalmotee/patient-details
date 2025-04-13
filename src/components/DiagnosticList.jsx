import React from "react";

export default function DiagnosticList() {
  const allDiagnostics = [
    {
      name: "Hypertension",
      description: "Chronic high blood pressure",
      status: "Under Observation",
    },
    {
      name: "Type 2 Diabetes",
      description: "Insulin resistance and elevated blood sugar",
      status: "Cured",
    },
    {
      name: "Asthma",
      description: "Recurrent episodes of bronchial constriction",
      status: "Inactive",
    },
    {
      name: "Migraine",
      description: "Severe recurring headaches",
      status: "Active",
    },
    {
      name: "Arthritis",
      description: "Joint inflammation and pain",
      status: "Under Treatment",
    },
    {
      name: "Anxiety Disorder",
      description: "Persistent feelings of anxiety and worry",
      status: "Under Observation",
    },
    {
      name: "Hypothyroidism",
      description: "Underactive thyroid gland",
      status: "Controlled",
    },
    {
      name: "Vitamin D Deficiency",
      description: "Low levels of vitamin D",
      status: "Under Treatment",
    },
    {
      name: "Iron Deficiency",
      description: "Low iron levels in blood",
      status: "Resolved",
    },
    {
      name: "Sleep Apnea",
      description: "Breathing interruptions during sleep",
      status: "Under Observation",
    },
  ];
  return (
    <div className="rounded-lg p-6 bg-[#fff] shadow-lg w-full">
      <h3 className="text-2xl font-bold mb-8">Diagnostic List</h3>
      <div className="overflow-y-auto max-h-[250px]">
        <table className="w-full mx-auto">
          <thead className="bg-[#F6F7F8] sticky top-0 rounded-full">
            <tr className="text-left font-bold text-sm text-gray-500">
              <th className="pb-4 pt-4 pl-4 first:rounded-l-full">
                Problem/Diagnosis
              </th>
              <th className="pb-4 pt-4">Description</th>
              <th className="pb-4 pt-4 pr-4 last:rounded-r-full">Status</th>
            </tr>
          </thead>
          <tbody>
            {allDiagnostics.map((diagnostic, index) => (
              <tr key={index} className="text-sm text-gray-700">
                <td className="py-4">{diagnostic.name}</td>
                <td className="py-4">{diagnostic.description}</td>
                <td className="py-4">{diagnostic.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
