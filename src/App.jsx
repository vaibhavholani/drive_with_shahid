import React, {useEffect} from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ReactGA from "react-ga4";

import Hero from "./components/Hero";
import CourseCard from "./components/CourseCard";
import Book from "./components/Book";
import GoogleReviews from "./components/GoogleReviews";
import FloatingCallButton from "./components/FloatingCallButton";
import Dropdown from "./components/LocationDropdown";
import CallSection from "./components/CallSection";
import { decryptNumber, encryptNumber } from "./components/shahidSecret";
import { eNum, eNumVaibhav} from "./const";
import Navbar from "./components/Navbar";

const measurement_id = "G-NWZD4BW690";
ReactGA.initialize(measurement_id);


export default function App() {
  const items = ["Item 1", "Item 2", "Item 3"];

  const decryptedNumber = decryptNumber(eNumVaibhav);

  // const encryptedNumber = encryptNumber("1{number_here}}");
  
  // Setting Up Google Page Events
  useEffect(() => {
    // ReactGA.pageview(window.location.pathname);
  }, []);

  return (
    <Router>
      <Routes>
        {/* Route for /book */}
        <Route path="/book" element={
        <>
        <Navbar absolute={false}/>
        <Book />
        </>
        
        } />

        {/* Default route for all other paths */}
        <Route
          path="/"
          element={
            <>
              <Hero />
              <GoogleReviews />
              <CourseCard />
              <Book />
              {/* <Dropdown items={items} /> */}
              {/* <CallSection number={decryptedNumber} /> */}
            </>
          }
        />
      </Routes>
      <FloatingCallButton number={decryptedNumber} />
    </Router>
  );
}
