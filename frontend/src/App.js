import HomePage from "./components/HomePage";
import NavBar from "./components/NavBar";
import { Header } from "./components/Header";
import { useRef } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import TrialPage from "./components/TrialPage";

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
    <Router>
      <div className="App scroll-smooth bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-200">
        <NavBar handleScroll={handleScroll} />
        <Routes>
          {/* The Home route includes NavBar and Header */}
          <Route
            path="/"
            element={
              <div>
                <div className="mx-36">
                  {/* Section 1: Header */}
                  <section
                    id="header-section"
                    ref={headerRef}
                    className="min-h-screen flex items-center justify-center pt-20"
                  >
                    <Header />
                  </section>

                  {/* Section 2: Demo */}
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
                  >
                    {/* Add content for your about section here */}
                  </section>
                </div>
              </div>
            }
          />
          {/* The Trial route displays only the TrialPage */}
          <Route path="/trial" element={<TrialPage />} />
        </Routes>
        <footer className="bg-purple-600 py-12 mt-16 text-white">
          <div className="container mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="mb-8">
              Upload your documents and let our AI provide you with insights in
              seconds.
            </p>
            <button className="bg-white text-purple-700 py-3 px-6 rounded-lg shadow-lg hover:bg-gray-100 transition">
              Upload Now
            </button>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
