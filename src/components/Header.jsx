import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";

export const Header = () => {
  // Ref for the section to track when it's in view
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
    <div className="px-4 py-10" ref={sectionRef}>
      {/* Animated Heading */}
      <motion.p
        className="text-center font-semibold text-6xl text-[#E0E0E0]"
        variants={textVariant}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        transition={{ duration: 1, delay: 0.2 }}
      >
        Your AI-powered{" "}
        <span className="text-[#FFD700] font-bold">Investment Advisor</span>{" "}
        that makes angel investing smarter and easier 🚀
      </motion.p>

      {/* Animated Subheading */}
      <motion.p
        className="text-center font-semibold text-2xl my-10 text-[#D1D5DB]"
        variants={textVariant}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        transition={{ duration: 1, delay: 0.5 }}
      >
        AI that provides insightful analysis, thorough research, and actionable
        recommendations for your angel investment decisions.
      </motion.p>

      {/* Animated Buttons */}
      <motion.div
        className="flex justify-center space-x-8"
        variants={buttonVariant}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        transition={{ duration: 1, delay: 1 }}
      >
        <Link to="/trial" className="text-2xl">
          <button className="bg-[#FFD700] text-gray-900 font-medium py-3 px-6 rounded-lg shadow-lg hover:bg-[#E6B400] transition duration-300">
            Start Free Trial
          </button>
        </Link>
        <button className="text-2xl bg-transparent text-[#FFD700] border border-[#FFD700] font-medium py-3 px-6 rounded-lg shadow-lg hover:bg-[#FFD700] hover:text-gray-900 transition duration-300">
          Watch the Demo
        </button>
      </motion.div>
    </div>
  );
};
