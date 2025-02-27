"use client";

import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface Report {
  id: number;
  location: string;
  wasteType: string;
  amount: number;
  createdAt: string;
}

interface DownloadReportProps {
  reports: Report[];
}

const DownloadReport: React.FC<DownloadReportProps> = ({ reports }) => {
  const handleDownloadReport = () => {
    if (!reports || reports.length === 0) {
      toast.error("No reports available to download.");
      return;
    }

    console.log("Downloading reports:", reports); // Debugging log

    // Convert amount to number if necessary
    const formattedReports = reports.map((report) => ({
      ...report,
      amount: Number(report.amount), // Ensure amount is a number
      createdAt: new Date(report.createdAt).toLocaleDateString(), // Format date
    }));

    const doc = new jsPDF();
    doc.setFontSize(18);
    doc.text("Waste Report Summary", 14, 20);

    const tableColumn = ["Location", "Type", "Amount", "Date"];
    const tableRows: string[][] = [];

    formattedReports.forEach((report) => {
      const reportData = [
        report.location,
        report.wasteType,
        report.amount.toString(), // Ensure amount is a string for PDF
        report.createdAt, // Already formatted above
      ];
      tableRows.push(reportData);
    });

    autoTable(doc, {
      startY: 30,
      head: [tableColumn],
      body: tableRows,
    });

    doc.save("Waste_Report.pdf");
  };

  return (
    <div className="flex justify-end my-4">
      <button
        onClick={handleDownloadReport}
        className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg transition-all"
      >
        Download Report
      </button>
    </div>
  );
};

export default DownloadReport;
