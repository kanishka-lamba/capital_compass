import React, { useState, useRef } from "react";
import UploadDocument from "./UploadDocument";
import SummaryReport from "./SummaryReport";
import ProcessingCard from "./ProcessingCard";

function TrialPage() {
  const [file, setFile] = useState(null);
  const [summary, setSummary] = useState("");
  const [fileUploaded, setFileUploaded] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleFileChange = (event) => {
    setFileUploaded(true);
    setFile(event.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await fetch("http://127.0.0.1:8000/api/process-pdf/", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      setSummary(data.summary);
    } catch (error) {
      console.error("Error processing PDF:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mx-40 mt-16 flex flex-col items-center justify-between mb-10">
      {/* Heading */}
      <h2 className="text-4xl font-bold mt-10 text-[#F0F0F0]">
        Upload Your Document
      </h2>

      {/* Subheading */}
      <p className="text-xl text-[#FFD700] mt-2 mb-10">
        Get instant summaries and key insights from your PDFs.
      </p>

      {/* File Upload Section */}
      <div className="w-full px-4">
        <UploadDocument
          handleSubmit={handleSubmit}
          handleFileChange={handleFileChange}
          file={file}
          loading={loading}
          fileUploaded={fileUploaded}
        />
      </div>

      {/* Summary or Processing Section */}
      <div className="w-full px-4 overflow-x-hidden">
        {loading ? (
          <ProcessingCard />
        ) : (
          summary && (
            <div>
              <SummaryReport analysisData={summary} />
            </div>
          )
        )}
      </div>
    </div>
  );
}

export default TrialPage;
