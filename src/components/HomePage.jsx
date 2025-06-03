import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";

function HomePage() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, {
    triggerOnce: false,
    margin: "-100px",
  });

  // Animation Variants
  const textVariant = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0 },
  };

  const buttonVariant = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <div
      className="mb-14 flex flex-col items-center justify-between" // Gradient background
      ref={sectionRef} // Attach ref to track scrolling
    >
      <div className="hero-section text-center py-20">
        {/* Animated Heading */}
        <motion.h1
          className="text-5xl font-bold text-[#E0E0E0] mb-4" // Light Gray text
          variants={textVariant}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          transition={{ duration: 1, delay: 0.2 }}
        >
          Analyze Your PDF Documents Effortlessly
        </motion.h1>

        {/* Animated Subheading */}
        <motion.p
          className="text-lg text-[#D1D5DB] mb-8" // Soft light gray for subheading
          variants={textVariant}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          transition={{ duration: 1, delay: 0.4 }}
        >
          Upload your PDF files and get instant summaries and insights with our
          AI-powered tool.
        </motion.p>

        {/* Animated Button */}
        <motion.div
          variants={buttonVariant}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <Link
            to="/trial"
            className="bg-[#FFD700] text-gray-900 py-3 px-6 rounded-lg shadow-lg hover:bg-[#E6B400] transition duration-300" // Gold button with hover effect
          >
            Get Started
          </Link>
        </motion.div>
      </div>
    </div>
  );
}

export default HomePage;
