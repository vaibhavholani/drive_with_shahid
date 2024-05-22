import React, {useEffect} from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ReactGA from "react-ga4";

import Hero from "./components/Hero";
import CourseCard from "./components/CourseCard";
import Book from "./components/Book";
import GoogleReviews from "./components/GoogleReviews";
import FloatingCallButton from "./components/FloatingCallButton";
import Video from "./components/Video"
import { decryptNumber, encryptNumber } from "./components/shahidSecret";
import { eNum, eNumVaibhav} from "./const";
import Navbar from "./components/Navbar";
import { Helmet } from 'react-helmet';

const measurement_id = "G-NWZD4BW690";
ReactGA.initialize(measurement_id);


export default function App() {
  const items = ["Item 1", "Item 2", "Item 3"];

  const decryptedNumber = decryptNumber(eNumVaibhav);

  // const encryptedNumber = encryptNumber("1{number_here}}");
  
  // Setting Up Google Page Events
  useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: "/", title: "Visited Home" });
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
              <Helmet>
                <meta charSet="utf-8" />
                <title>5-Star Toronto Driving Lessons | G & G2 Driver Classes | Drive with Shahid </title>
                <meta name="description" content="Get the best Toronto driving classes with Shahid, more than 1000+ G and G2 tests passed. Discover flexible packages tailored to your needs. Drive first, Pay Later!" />
              </Helmet>
              <Hero />
              <GoogleReviews />
              <Video />
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
