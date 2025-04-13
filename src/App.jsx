import { useState, useEffect } from "react";
import axios from "axios";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

import Header from "./components/Header";
import PatientsList from "./components/PatientsList";
import PatientInfo from "./components/PatientInfo";
import DiagnosisHistory from "./components/DiagnosisHistory";
import DiagnosticList from "./components/DiagnosticList";
import LabResults from "./components/LabResults";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function App() {
  const [patientData, setPatientData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://fedskillstest.coalitiontechnologies.workers.dev",
          {
            auth: {
              username: "coalition",
              password: "skills-test",
            },
          }
        );
        const jessicaData = response.data.find(
          (patient) => patient.name === "Jessica Taylor"
        );
        setPatientData(jessicaData);
      } catch (err) {
        setError("Failed to fetch patient data");
        console.error("API Error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading)
    return (
      <div className="flex items-center justify-center h-screen">
        Loading...
      </div>
    );
  if (error)
    return (
      <div className="flex items-center justify-center h-screen text-red-500">
        {error}
      </div>
    );

  return (
    <div className="min-h-screen  bg-[#F6F7F8] p-2">
      <Header />
      <div className="flex w-full mt-20">
        <PatientsList />
        <div className="flex-1 p- space-y-6 ">
          <DiagnosisHistory diagnosis_history={patientData.diagnosis_history} />
          <DiagnosticList diagnostics={patientData.diagnostic_list} />
        </div>
        <div className="flex flex-col">
          <PatientInfo patient={patientData} />
          <LabResults results={patientData.lab_results} />
        </div>
      </div>
    </div>
  );
}

export default App;
