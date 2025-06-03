import React, { useState } from "react";
import { CloudUploadIcon, CheckCircleIcon } from "@heroicons/react/solid";
import { CircularProgress } from "@mui/material"; // For loading spinner

const UploadDocument = ({
  handleSubmit,
  handleFileChange,
  file,
  loading,
  fileUploaded,
}) => {
  const [dragging, setDragging] = useState(false);

  const handleDragOver = (e) => {
    e.preventDefault();
    setDragging(true);
  };

  const handleDragLeave = () => {
    setDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setDragging(false);
    const files = e.dataTransfer.files;
    handleFileChange({ target: { files } });
  };

  return (
    <div className="bg-white pt-2 pb-10 px-20 rounded-lg shadow-xl w-full mx-auto text-center transition-all duration-300 ease-in-out hover:shadow-2xl relative">
      <div className="steps-section grid grid-cols-1 sm:grid-cols-3 gap-8 my-12">
        <div className="step-card text-center p-6 shadow-lg rounded-lg">
          <img src="/upload.png" alt="Upload" className="h-16 mx-auto mb-4" />
          <h3 className="text-xl font-bold">1. Upload Your Document</h3>
          <p className="text-gray-600 mt-2">
            Drag and drop your PDF or use the upload button to select a file.
          </p>
        </div>
        <div className="step-card text-center p-6 shadow-lg rounded-lg">
          <img src="/process.png" alt="Process" className="h-16 mx-auto mb-4" />
          <h3 className="text-xl font-bold">2. AI Analyzes the Content</h3>
          <p className="text-gray-600 mt-2">
            Our AI processes the document and extracts valuable insights in
            seconds.
          </p>
        </div>
        <div className="step-card text-center p-6 shadow-lg rounded-lg">
          <img src="/report.png" alt="Report" className="h-16 mx-auto mb-4" />
          <h3 className="text-xl font-bold">3. Get Your Summary</h3>
          <p className="text-gray-600 mt-2">
            Receive a detailed summary, including key points, data, and more.
          </p>
        </div>
      </div>

      {/* File Upload Area and Form */}
      <form onSubmit={handleSubmit}>
        <div
          className={`border-dashed border-4 rounded-lg p-6 transition-all ${
            dragging ? "border-purple-950 bg-purple-50" : "border-gray-300"
          }`}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
        >
          <CloudUploadIcon className="h-16 w-16 text-purple-950 mx-auto mb-4" />
          <h2 className="text-2xl font-semibold mb-2 text-purple-950">
            Drag & Drop your PDF
          </h2>
          <p className="text-gray-600 mb-4 text-xl">
            or click to select a file
          </p>
          <input
            type="file"
            onChange={handleFileChange}
            className="hidden"
            id="file-upload"
          />
          <label
            htmlFor="file-upload"
            className="text-xl cursor-pointer bg-purple-100 text-purple-950 py-2 px-4 rounded-lg hover:bg-purple-200 transition"
          >
            Browse Files
          </label>
        </div>

        {/* Upload button */}
        <button
          type="submit"
          className={`py-3 px-6 mt-6 text-xl bg-purple-950 text-white rounded-lg shadow-lg hover:bg-purple-800 transition-all duration-300 flex items-center justify-center mx-auto ${
            !fileUploaded && "opacity-50 cursor-not-allowed"
          }`}
          disabled={!fileUploaded || loading}
        >
          {loading ? (
            <div className="flex items-center space-x-2">
              <CircularProgress color="inherit" size={20} />
              <span>Processing...</span>{" "}
              {/* Add Loading text next to spinner */}
            </div>
          ) : (
            "Submit Document"
          )}
        </button>
      </form>

      {/* Feedback: Success or Error */}
      {fileUploaded && !loading && (
        <div className="mt-4">
          <CheckCircleIcon className="text-purple-950 h-8 w-8 inline-block" />
          <span className="ml-2 text-purple-950 font-semibold text-xl">
            File uploaded successfully! Your document is being processed.
          </span>
        </div>
      )}
    </div>
  );
};

export default UploadDocument;
