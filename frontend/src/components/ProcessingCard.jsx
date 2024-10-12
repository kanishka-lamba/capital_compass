import React, { useEffect, useState } from "react";

const facts = [
  "Did you know? The average angel investment is around $25,000.",
  "Angel investors often invest in startups in exchange for equity ownership.",
  "The most successful startups often receive angel investments before seeking venture capital.",
  "Approximately 40% of angel investments fail, but successful investments can lead to significant returns.",
  "Angel investors not only provide funds but also mentorship and connections to help startups grow.",
];

const ProcessingCard = () => {
  const [currentFactIndex, setCurrentFactIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentFactIndex((prevIndex) => (prevIndex + 1) % facts.length);
    }, 4000); // Change fact every 4 seconds

    // Stop the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center p-8 bg-gray-50 rounded-lg shadow-lg mt-10">
      {/* Loading Spinner */}
      <div className="loader mb-4">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-purple-500 border-8"></div>
      </div>

      {/* Engaging Message */}
      <p className="text-xl text-gray-600 mb-4">
        Please wait while we gather insights for you.
      </p>

      {/* Interesting Fact */}
      <div className="bg-white p-2 max-w-2xl w-full">
        <p className="text-2xl italic text-gray-800">
          "{facts[currentFactIndex]}"
        </p>
      </div>
    </div>
  );
};

export default ProcessingCard;
