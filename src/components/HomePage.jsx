import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";

function HomePage() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, {
    triggerOnce: false,
    margin: "-100px",
  });

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
      className="mb-14 flex flex-col items-center justify-between"
      ref={sectionRef}
    >
      <div className="hero-section text-center py-20">
        <motion.h1
          className="text-5xl font-bold text-[#E0E0E0] mb-4"
          variants={textVariant}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          transition={{ duration: 1, delay: 0.2 }}
        >
          Analyze Your Pitch Deck Effortlessly
        </motion.h1>
        <motion.p
          className="text-lg text-[#D1D5DB] mb-8"
          variants={textVariant}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          transition={{ duration: 1, delay: 0.4 }}
        >
          Upload your pitch deck and get insightful, efficient, and data-driven
          angel investment decisions.
        </motion.p>
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
