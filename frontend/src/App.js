// import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import HomePage from "./components/HomePage";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      {/* <Router>
        <Routes>
          <Route exact path="/" element={<p>this is test</p>} />
          <Route path="/home" element={<HomePage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router> */}

      <NavBar />
      <HomePage />

      <Footer />
    </div>
  );
}

export default App;
