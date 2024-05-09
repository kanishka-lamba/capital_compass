import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import HomePage from "./HomePage";

function NavBar() {
  return (
    <div className="mx-24">
      <Router>
        <div>
          <nav className="flex justify-between p-2 my-4 mx-2">
            <p className="text-xl">Capital compass</p>
            <ul className="flex text-xl gap-4">
              <li className=" p-2 hover:bg-gray-200 rounded-md">
                <Link to="/">Demo</Link>
              </li>
              <li className=" p-2 hover:bg-gray-200 rounded-md">
                <Link to="#about">Features</Link>
              </li>
              <li className=" p-2 hover:bg-gray-200 rounded-md">
                <Link to="#services">Try out yourself</Link>
              </li>
            </ul>
          </nav>

          <Routes>
            <Route path="/about"></Route>
            <Route path="/services"></Route>
            <Route path="/contact"></Route>
            <Route path="/"></Route>
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default NavBar;
