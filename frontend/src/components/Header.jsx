import React from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <div className="px-4 py-10">
      <p className="text-center font-semibold text-6xl text-gray-700">
        Your AI-powered{" "}
        <span className="text-purple-900 font-bold">Investment Advisor</span>{" "}
        that makes angel investing smarter and easier 🚀
      </p>
      <p className="text-center font-semibold text-2xl my-10 text-gray-600">
        AI that provides insightful analysis, thorough research, and actionable
        recommendations for your angel investment decisions.
      </p>
      <div className="flex justify-center space-x-8">
        <Link to="/trial" className="text-2xl">
          <button className="bg-purple-600 text-white font-medium py-3 px-6 rounded-lg shadow-lg hover:bg-purple-800 transition duration-300">
            Start Free Trial
          </button>
        </Link>
        <button className="text-2xl bg-white text-purple-600 border border-purple-600 font-medium py-3 px-6 rounded-lg shadow-lg hover:bg-purple-200 transition duration-300">
          Watch the Demo
        </button>
      </div>
    </div>
  );
};
