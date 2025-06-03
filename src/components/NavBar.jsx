import React from "react";
import { Link } from "react-router-dom";

function NavBar({ handleScroll }) {
  return (
    <div
      className={`bg-[#F0F0F0] fixed top-0 w-full h-16 z-50 transition-shadow duration-500 shadow-slate-100 shadow-md`}
    >
      <div>
        <nav className="flex justify-between p-2">
          <p className="text-2xl font-semibold text-gray-900 rounded-lg ml-8 mt-2">
            Capital Compass
          </p>
          <ul className="flex text-2xl font-normal gap-6 text-gray-900 mr-8">
            <li className="py-2 px-4 hover:bg-[#FFD700] hover:text-900 rounded-md">
              <button onClick={() => handleScroll("header-section")}>
                <Link to="/">Home</Link>
              </button>
            </li>
            <li className="py-2 px-4 hover:bg-[#FFD700] hover:text-gray-900 rounded-md">
              <button onClick={() => handleScroll("demo-section")}>Demo</button>
            </li>
            <li className="py-2 px-4 hover:bg-[#FFD700] hover:text-gray-900 rounded-md">
              <button onClick={() => handleScroll("about-section")}>
                About
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default NavBar;
