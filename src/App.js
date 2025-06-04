import HomePage from "./components/HomePage";
import NavBar from "./components/NavBar";
import { Header } from "./components/Header";
import { useRef } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import TrialPage from "./components/TrialPage";
import Footer from "./components/Footer";

function App() {
  // Refs for each section
  const headerRef = useRef(null);
  const demoRef = useRef(null);

  // Function to handle scrolling
  const handleScroll = (section) => {
    if (section === "header-section" && headerRef.current) {
      headerRef.current.scrollIntoView({ behavior: "smooth" });
    } else if (section === "demo-section" && demoRef.current) {
      demoRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Router>
      <div className="App scroll-smooth bg-gradient-to-r from-indigo-950 via-purple-950 to-pink-950">
        <NavBar handleScroll={handleScroll} />
        <Routes>
          {/* The Home route includes NavBar and Header */}
          <Route
            path="/"
            element={
              <div>
                <div>
                  <section
                    id="header-section"
                    ref={headerRef}
                    className="min-h-screen flex items-center justify-center pt-20 mx-36"
                  >
                    <Header />
                  </section>
                  <section
                    id="demo-section"
                    ref={demoRef}
                    className="min-h-screen flex items-center justify-center pt-2 w-full"
                  >
                    <HomePage />
                  </section>
                </div>
              </div>
            }
          />
          <Route path="/trial" element={<TrialPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
