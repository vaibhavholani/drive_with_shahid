import React, { useState, useEffect } from "react";
import Navbar from './Navbar'; 
import "./Video.css";

export default function Video() {

  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  
  return (
    <div id="VideoContainer" className="bg-white relative flex flex-col w-[100vw] overflow-hidden">

      <div
        id="VideoCircle"
        style={{ minWidth: screenWidth > 1000 ? '1000px' : 'auto' }}
        className="bg-[#2E6434] h-[100vw] w-[100vw] rounded-full absolute rounded-[100%] z-20 overflow-hidden"
      />

      <div id="VideoText" className="text-[60px] rounded-full absolute top-[25%]  font-family-['Inter-Regular'] leading-tight font-bold text-[#2e6434] z-30">
        
        <span className="text-[#C1FFC4] opacity-50">Learn</span>
        <br />
        <span className="text-white">Faster.</span> 
        <br />
        <span className="text-[#C1FFC4] opacity-50">Save</span> 
        <br />
        <span className="text-white">More.</span> 
        <br />
        <a
          href="https://www.youtube.com/watch?v=S2m_h8g2KNU&ab_channel=DriveWithShahid"
          target="_blank"
          rel="noopener noreferrer"
          id="VideoButtonContainer"
          className="flex items-center justify-center border border-white rounded-md p-2 mt-[25px] no-underline"
        >
          <img
          className="w-[40px] h-[40px] rotate-180 inline-block mr-[3px]"
          alt="Arrow right line"
          id="VideoArrow"
          src="https://c.animaapp.com/b1HQWZeJ/img/arrow-right-line-1.svg"
        />
          <span className="font-light text-white text-[18px] [font-family:'Inter',Helvetica]" id="VideoSeriesButtonText">
        Watch Shahid's Video Series
          </span>
        </a>
      </div>

      <div className="absolute z-10" id="VideoClip">
        <video
          autoPlay
          loop
          muted
          className="w-full h-full object-cover"
        >
          <source src="sb_bp_vid.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

    </div>
  );
}
