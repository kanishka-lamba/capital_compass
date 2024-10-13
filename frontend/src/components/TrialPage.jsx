import React, { useState } from "react";
import UploadDocument from "./UploadDocument";
import SummaryReport from "./SummaryReport";
import ProcessingCard from "./ProcessingCard";

function TrialPage() {
  const [file, setFile] = useState(null);
  const [summary, setSummary] = useState("");
  const [fileUploaded, setFileUploaded] = useState(false);
  const [loading, setLoading] = useState(false); // State for tracking loading

  const handleFileChange = (event) => {
    setFileUploaded(true);
    setFile(event.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true); // Set loading to true when submitting

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
      setLoading(false); // Set loading to false when response is received
    }
  };

  const newSum = {
    task_1: {
      summary_of_documents: {
        business_model: {
          revenue_model:
            "PensionBox generates revenue primarily through transaction fees on every investment and a one-time NPS account opening charge. They also have a B2B revenue model charging corporates a premium per employee per month.",
          target_market:
            "The target market includes Indians entering retirement without sufficient pension savings, broadly ranging from age 28 to 65, including both B2C and B2B segments.",
          distribution_channels:
            "PensionBox operates through a paperless, instant, and transparent platform, facilitating individuals to create, track, and manage pensions online. They also engage corporates through B2B2C channels.",
        },
        product_service_offering: {
          unique_features:
            "Paperless pension management, the ability to create your own pension plan, track existing pension savings, and invest and withdraw online.",
          benefits:
            "Improves the way Indians retire by providing a transparent, instant, and user-friendly way to manage pension savings.",
          value_proposition:
            "PensionBox offers India's fastest NPS journey, allowing users to facilitate their retirement savings in a streamlined and efficient manner.",
        },
        market_opportunity: {
          market_size:
            "India's total pension savings are valued at $280 Billion, with a significant portion of the workforce not penetrated by pension services.",
          growth_potential:
            "186 Million Indians will enter retirement in the next 25 years without enough pension savings, highlighting a growing demand for pension management solutions.",
          trends_and_forecasts:
            "The Indian pension industry has seen a 30x growth in NPS users and 10x in assets under management (AUM) over the last 10 years.",
        },
        financials: {
          projections:
            "Expected revenue to hit 2 Crore in 2023 with a target of achieving $100 million revenue in 7 years and 12 Crore revenue by the Financial Year 2024-2025.",
          funding_requirements:
            "Seeking a Seed investment of 4 Crore for a 10% equity stake at 40 Crore post-money valuation.",
          relevant_financial_data:
            "Previous fundraising included a Pre-Seed round of $275,000, backed by leading early-stage investors and angel investors.",
        },
        team: {
          founders_background:
            "Kuldeep Parashar (Co-founder & CEO) is a Certified Retirement Adviser. Shivam Parashar (Co-founder & CTO) is a Full Stack Developer & AWS Certified.",
          key_team_members:
            "The team consists of over 13 members with expertise in tech, design, marketing, and sales.",
        },
        competitive_landscape: {
          competitors:
            "Comparatively fewer direct competitors in India, but global retirement solution providers like Fidelity Investments, Vanguard, Betterment, Wealthsimple, Penfold, and SigFig are noted. Emerging Indian WealthTech startups like Fisdom, Paytm Money, ET Money, and 5nance are potential competitors.",
          differentiation_strategy:
            "PensionBox differentiates by offering a user-friendly, efficient, and transparent platform for managing pension savings, coupled with India's fastest NPS journey.",
        },
      },
    },
    task_2: {
      independent_market_research: {
        fact_check: {
          verified_information:
            "Verified the growing problem of inadequate pension savings among Indians and the substantial market opportunity in India's pension sector, corroborated by sources like PFRDA & OASIS Report.",
          discrepancies_found:
            "No significant discrepancies found between provided documents and independent research.",
        },
        new_insights: {
          market_opportunity:
            "Independent research confirms the massive untapped potential in India's pension market, particularly given the demographic trend of an aging population and increasing longevity.",
          competitors_analysis:
            "Emerging domestic competitors in the WealthTech space could pivot or expand their offerings to include pension management, indicating a need for PensionBox to solidify its first-mover advantage.",
          commentary_on_impact:
            "PensionBox's focus on transparency, efficiency, and a user-friendly platform positions it well to capture a significant share of India's growing pension management market.",
        },
      },
    },
    task_3: {
      company_profile: {
        number_of_employees: {
          full_time:
            "13+ employees, with the exact breakdown between full-time, part-time, and contractors not provided.",
          part_time: "Not specified",
          contractors: "Not specified",
        },
        market_size: {
          percentage: "Not specified",
          monetary_value:
            "$280 Billion in total pension savings in India, indicating a significant market potential.",
        },
        founders_background: {
          education: "Not specified",
          previous_experience:
            "Kuldeep Parashar has expertise as a Certified Retirement Adviser. Shivam Parashar has a technical background as a Full Stack Developer & AWS Certified.",
          key_achievements:
            "Successfully led PensionBox to secure regulatory approvals, partnership integrations, and a rapid user growth trajectory in a short span.",
        },
        potential_competitors: {
          competitors_list: [
            {
              name: "Not specified directly",
              strengths:
                "Global players have established brand recognition and robust platforms.",
              weaknesses:
                "Possible lack of a customized solution specifically for the Indian market.",
              market_position:
                "Emerging Indian WealthTech startups are potential competitors with an existing user base that could be leveraged.",
            },
          ],
          differentiation_strategy:
            "PensionBox's differentiation lies in its focus on the Indian market's unique needs, speed of NPS processing, and ease of use.",
        },
      },
    },
    investment_recommendation: {
      recommendation:
        "Considering the vast market opportunity, PensionBox's unique value proposition, and the founders' vision and expertise, a strategic investment in PensionBox could be highly promising. However, investors should closely monitor the competitive landscape and the startup's execution of its B2B2C expansion and product development strategies.",
      justification:
        "The clear market need, combined with PensionBox's innovative platform and early traction, suggests a strong growth potential. Yet, the emerging competitive landscape and the execution risks inherent in scaling and diversifying the product offering highlight the need for diligent oversight and potential for strategic guidance from investors.",
    },
  };

  return (
    <div className="mx-40 mt-10 flex flex-col items-center justify-between">
      <h2 className="text-4xl font-bold mt-10 text-gray-700">
        Upload Your Document
      </h2>
      <p className="text-xl text-gray-500 mt-2 mb-4">
        Get instant summaries and key insights from your PDFs.
      </p>
      <div className="w-full px-4">
        <UploadDocument
          handleSubmit={handleSubmit}
          handleFileChange={handleFileChange}
          file={file}
          loading={loading}
          fileUploaded={fileUploaded}
        />
      </div>

      {/* Right side: displaying the summary */}
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
