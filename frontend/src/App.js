// import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import HomePage from "./components/HomePage";
import NavBar from "./components/NavBar";
import { Header } from "./components/Header";
import { useRef } from "react";

function App() {
  // Refs for each section
  const headerRef = useRef(null);
  const demoRef = useRef(null);
  const aboutRef = useRef(null);

  // Function to handle scrolling
  const handleScroll = (section) => {
    if (section === "header-section" && headerRef.current) {
      headerRef.current.scrollIntoView({ behavior: "smooth" });
    } else if (section === "demo-section" && demoRef.current) {
      demoRef.current.scrollIntoView({ behavior: "smooth" });
    } else if (section === "about-section" && aboutRef.current) {
      aboutRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="App scroll-smooth bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-200">
      {/* Pass the handleScroll function to NavBar */}
      <NavBar handleScroll={handleScroll} />

      <div className="mx-36">
        {/* Section 1: Header */}
        <section
          id="header-section"
          ref={headerRef}
          className="min-h-screen flex items-center justify-center pt-20"
        >
          <Header />
        </section>

        {/* Section 2: Demo (Placeholder for HomePage or any Demo content) */}
        <section
          id="demo-section"
          ref={demoRef}
          className="min-h-screen flex items-center justify-center pt-20"
        >
          <HomePage />
        </section>

        {/* Section 3: About */}
        <section
          id="about-section"
          ref={aboutRef}
          className="min-h-screen flex items-center justify-center pt-20"
        ></section>
      </div>
    </div>
  );
}

export default App;
