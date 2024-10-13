import React from "react";
import { Link } from "react-router-dom";

function NavBar({ handleScroll }) {
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScrollEffect = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScrollEffect);
    return () => window.removeEventListener("scroll", handleScrollEffect);
  }, []);

  return (
    <div
      className={`bg-purple-600 fixed top-0 w-full h-16 z-50 transition-shadow duration-500 shadow-purple-400 ${
        scrolled ? "shadow-2xl" : "shadow-lg"
      }`}
    >
      <div>
        <nav className="flex justify-between p-2">
          <p className="text-xl text-white my-2 ml-8">Capital Compass</p>
          <ul className="flex text-xl gap-4 text-white mr-8">
            <li className="p-2 hover:bg-gray-200 rounded-md">
              {/* Call handleScroll function to scroll to the respective section */}
              <button onClick={() => handleScroll("header-section")}>
                <Link to="/">Home</Link>
              </button>
            </li>
            <li className="p-2 hover:bg-gray-200 rounded-md">
              <button onClick={() => handleScroll("demo-section")}>Demo</button>
            </li>
            <li className="p-2 hover:bg-gray-200 rounded-md">
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
