import React from "react";

// Customized component for rendering individual sections
const Section = ({ title, content, indentLevel }) => {
  return (
    <div className={`pl-${indentLevel * 4} mb-4`}>
      <p className="font-bold text-xl capitalize mb-2 text-purple-900 hover:text-purple-600 transition duration-300">
        {title.replace(/_/g, " ")}
      </p>
      <JsonDisplay data={content} indentLevel={indentLevel + 1} />
    </div>
  );
};

// Recursive component to display JSON content
const JsonDisplay = ({ data, indentLevel = 0 }) => {
  if (typeof data === "object" && data !== null) {
    return (
      <div style={{ marginLeft: indentLevel * 20 }}>
        {Array.isArray(data)
          ? data.map((item, index) => (
              <div key={index} className="pl-4 mb-2">
                <JsonDisplay data={item} indentLevel={indentLevel - 5} />
              </div>
            ))
          : Object.entries(data).map(([key, value]) => (
              <div key={key} className="mb-2">
                <strong className="text-lg capitalize text-purple-900">
                  {key.replace(/_/g, " ")}:
                </strong>
                <JsonDisplay data={value} indentLevel={indentLevel + 1} />
              </div>
            ))}
      </div>
    );
  }

  // Render primitive types (string, number, etc.)
  if (
    typeof data === "string" ||
    typeof data === "number" ||
    typeof data === "boolean"
  ) {
    return <span className="ml-2 text-gray-800">{String(data)}</span>;
  }

  return <span className="ml-2 text-gray-800">null</span>;
};

const SummaryReport = ({ analysisData }) => {
  return (
    <div className="p-6 min-h-screen mt-16">
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {/* Task 1: Summary of Documents */}
        <div className="task-section bg-white p-6 mb-6 rounded-lg shadow-lg transition transform hover:scale-105 hover:shadow-xl duration-300">
          <p className="text-3xl font-bold mb-4 text-purple-950">
            Summary of Documents
          </p>
          <Section
            title="Business Model"
            content={analysisData.task_1.summary_of_documents.business_model}
            indentLevel={1}
          />
          <Section
            title="Product/Service Offering"
            content={
              analysisData.task_1.summary_of_documents.product_service_offering
            }
            indentLevel={1}
          />
          <Section
            title="Market Opportunity"
            content={
              analysisData.task_1.summary_of_documents.market_opportunity
            }
            indentLevel={1}
          />
          <Section
            title="Financials"
            content={analysisData.task_1.summary_of_documents.financials}
            indentLevel={1}
          />
          <Section
            title="Team"
            content={analysisData.task_1.summary_of_documents.team}
            indentLevel={1}
          />
          <Section
            title="Competitive Landscape"
            content={
              analysisData.task_1.summary_of_documents.competitive_landscape
            }
            indentLevel={1}
          />
        </div>

        {/* Task 2: Independent Market Research */}
        <div className="task-section bg-white p-6 mb-6 rounded-lg shadow-lg transition transform hover:scale-105 hover:shadow-xl duration-300">
          <p className="text-3xl font-bold mb-4 text-purple-950">
            Independent Market Research
          </p>
          <Section
            title="Fact Check"
            content={analysisData.task_2.independent_market_research.fact_check}
            indentLevel={1}
          />
          <Section
            title="New Insights"
            content={
              analysisData.task_2.independent_market_research.new_insights
            }
            indentLevel={1}
          />
        </div>

        {/* Task 3: Company Profile */}
        <div className="task-section bg-white p-6 mb-6 rounded-lg shadow-lg transition transform hover:scale-105 hover:shadow-xl duration-300">
          <p className="text-3xl font-bold mb-4 text-purple-950">
            Company Profile
          </p>
          <Section
            title="Number of Employees"
            content={analysisData.task_3.company_profile.number_of_employees}
            indentLevel={1}
          />
          <Section
            title="Market Size"
            content={analysisData.task_3.company_profile.market_size}
            indentLevel={1}
          />
          <Section
            title="Founders' Background"
            content={analysisData.task_3.company_profile.founders_background}
            indentLevel={1}
          />
          <Section
            title="Potential Competitors"
            content={analysisData.task_3.company_profile.potential_competitors}
            indentLevel={1}
          />
        </div>
      </div>
      {/* Investment Recommendation */}
      <div className="investment-section bg-purple-50 border-l-4 border-purple-400 p-6 mb-6 rounded-lg shadow-xl transition transform hover:scale-105 hover:shadow-2xl duration-300 mt-16">
        <p className="text-3xl font-bold mb-4 text-purple-950">
          Investment Recommendation
        </p>
        <p className="text-lg mb-4 text-gray-800">
          Below are the key recommendations based on the analysis:
        </p>
        <JsonDisplay
          data={analysisData.investment_recommendation}
          indentLevel={1}
        />
      </div>
    </div>
  );
};

export default SummaryReport;
