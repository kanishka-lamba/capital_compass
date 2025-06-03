import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div>
      {" "}
      <footer className="bg-[#F0F0F0] py-4 text-[#1A1A1A]">
        <div className="px-24 md:text-left flex justify-between">
          <div>
            {/* Copyright Section */}
            <div className="mb-2">
              <p className="text-sm">
                &copy; 2025 Capital Compass. All rights reserved.
              </p>
            </div>

            {/* Links Section */}
            <div className="flex gap-8 mb-2 text-purple-950 font-medium">
              <Link to="/privacy" className="hover:text-pink-950">
                Privacy Policy
              </Link>
              <Link to="/terms" className="hover:text-pink-950">
                Terms of Service
              </Link>
            </div>

            {/* Legal Disclaimer Section */}
            <div>
              <p className="text-xs">
                Investment decisions should be made with care. We do not offer
                financial advice. Please consult a professional.
              </p>
            </div>
          </div>

          <div>
            {/* Contact Info Section */}
            <div className="mb-2">
              <p className="text-sm">
                For inquiries, reach us at{" "}
                <a
                  href="mailto:support@capitalcompass.com"
                  className="text-purple-950 hover:text-pink-950"
                >
                  support@capitalcompass.com
                </a>
              </p>
            </div>

            {/* Social Media Section */}
            <div className="flex gap-6 mb-2">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faFacebookF}
                  className="text-purple-950 hover:text-pink-950 text-xl"
                />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faTwitter}
                  className="text-purple-950 hover:text-pink-950 text-xl"
                />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faLinkedin}
                  className="text-purple-950 hover:text-pink-950 text-xl"
                />
              </a>
            </div>

            {/* Back to Top Section */}
            <div>
              <a href="#top" className="text-purple-950 hover:text-pink-950">
                Back to Top
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
