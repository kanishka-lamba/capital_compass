import React, { useState } from "react";
import { UploadIcon } from "@heroicons/react/solid"; // Make sure to install Heroicons

const UploadDocument = ({
  handleSubmit,
  handleFileChange,
  file,
  loading,
  fileUploaded,
}) => {
  const [dragActive, setDragActive] = useState(false); // State to track drag activity

  const handleDragOver = (event) => {
    event.preventDefault();
    event.stopPropagation();
    setDragActive(true); // Set drag active on drag over
  };

  const handleDragLeave = (event) => {
    event.preventDefault();
    event.stopPropagation();
    setDragActive(false); // Set drag inactive on drag leave
  };

  const handleDrop = (event) => {
    event.preventDefault();
    event.stopPropagation();
    setDragActive(false); // Remove drag active state on drop
    const droppedFile = event.dataTransfer.files[0];
    if (droppedFile) {
      handleFileChange({ target: { files: [droppedFile] } }); // Mimic input file change
    }
  };

  return (
    <div
      className="flex flex-col items-center bg-white shadow-lg py-20 px-10 rounded-lg w-full mx-auto transition-transform transform hover:scale-105"
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      <form
        onSubmit={handleSubmit}
        className={`flex flex-col items-center w-full space-y-8 transition duration-300 ${
          dragActive ? "border-2 border-dashed border-purple-500" : ""
        }`}
      >
        {/* File input with drag-and-drop functionality */}
        <label
          htmlFor="file-upload"
          className={`w-full flex flex-col items-center justify-center rounded-lg p-6 cursor-pointer transition duration-300 h-36 ${
            dragActive
              ? "bg-purple-100 border-purple-400"
              : "bg-gray-100 border-gray-300 hover:bg-gray-200"
          } border`}
        >
          <UploadIcon className="h-12 w-12 text-purple-600 mb-2" />
          <span className="text-gray-500 text-xl font-medium text-center">
            {file
              ? `Selected File: ${file.name}`
              : "Click or Drag & Drop to upload your PDF file"}
          </span>
          <input
            id="file-upload"
            type="file"
            accept=".pdf"
            onChange={handleFileChange}
            className="hidden"
          />
        </label>

        {/* Submit button */}
        <button
          type="submit"
          disabled={!file || loading}
          className={`bg-purple-800 text-white text-xl font-medium py-3 px-6 rounded-lg transition duration-300 ease-in-out ${
            loading
              ? "cursor-not-allowed opacity-50"
              : "hover:bg-purple-900 hover:shadow-lg"
          }`}
        >
          {loading ? (
            <div className="flex items-center justify-center space-x-2">
              {/* Tailwind spinner */}
              <svg
                className="animate-spin h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                ></path>
              </svg>
              <span>Processing...</span>
            </div>
          ) : (
            "Generate Summary"
          )}
        </button>
      </form>

      {/* Success message */}
      {fileUploaded && (
        <p className="mt-4 text-purple-700 text-xl font-medium">
          File uploaded successfully: {file.name}
        </p>
      )}
    </div>
  );
};

export default UploadDocument;
