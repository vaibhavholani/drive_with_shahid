import React, { useState, useEffect } from "react";
import Navbar from './Navbar'; 
import "./Hero.css";

export default function Hero() {
  const images = [
    "heroImages/good2.png",
    "heroImages/cc.png",
    "heroImages/good3.png",
    "heroImages/good3.png",
    "heroImages/good5.png",
    "heroImages/good3.png",
    "heroImages/good3.png",
    "heroImages/good2.png",
    "heroImages/good3.png",
    "heroImages/good1.png",
  ];

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


  // useEffect(() => {
  //   const flipElements = document.querySelectorAll('.flip');

  //   flipElements.forEach((element, index) => {
  //     let interval;
  //     element.style.animationDelay = `${index * 5}s`;

  //     element.addEventListener("animationstart", () => {
  //       interval = setInterval(() => {
  //         curImages[index] = Math.floor(Math.random() * images.length);
  //         element.src = images[curImages[index]];
  //       }, 1000);
  //     });

  //     // this is triggered four times for some reason, hence it really adds a 60s delay every iteration
  //     element.addEventListener("animationend", (e) => {
  //       clearInterval(interval);
  //       element.style.animationDelay = `${parseInt(element.style.animationDelay)+15}s`;
  //     })
  //   });

  //   // Clear event listener on component unmount
  //   return () => {
  //     flipElements.forEach((element) => {
  //       element.removeEventListener("animationstart", () => {});
  //       element.removeEventListener("animationend", () => {});
  //     });
  //   };
  // }, []);
  
  return (
    <div id="heroContainer" className="bg-[#1a3d1e] relative flex flex-col w-[100vw] h-[600px] overflow-hidden">
      <div
        id="heroImages"
        className="relative h-[100%] overflow-hidden"
      > 
          {/* TOP LEFT - SMALL */}   
          {/* <img
          src={images[4]}
          alt="TOP LEFT"
          id="top-left"
          className="w-[12%] rounded-full absolute top-[9%] left-[0%] flip"
        /> */}

        {/* TOP MIDDLE LEFT - SMALL (BESIDES TOP LEFT^^) */}
        <img
          src={"heroImages/good4.png"}
          alt="TOP MIDDLE LEFT"
          id="PHOTO8"
          className="w-[14%]  rounded-full absolute top-[4%] left-[14%]"
        />

        {/* MIDDLE RIGHT (BESIDE CIRCLE) - MEDIUM */}
      <img
          src={images[1]}
          alt="MIDDLE RIGHT BESIDE CIRCLE - MEDIUM"
          id="PHOTO3"
          className=" w-[17%] rounded-full absolute top-[27%] left-[26%] flip"
        />

        {/* TOP MIDDLE RIGHT - MEDIUM */}
        <img
          src={images[0]}
          alt="TOP MIDDLE RIGHT - MEDIUM"
          id="PHOTO1"
          className="w-[17%] rounded-full absolute top-[8%] left-[42%] flip"
        />

        {/*MIDDLE MIDDLE BIG */}
        <img
          src={images[4]}
          alt="LOWER MIDDLE MIDLEE BIG"
          id="LowerMiddleMiddle"
          className="w-[21%] rounded-full absolute top-[45%] left-[44%] flip"
          />

        {/* BOTTOM LEFT - SMALL */}
        <img
          src={images[9]}
          alt="BOTTOM MIDDLE"
          id="PHOTO3"
          className=" w-[16%] rounded-full absolute top-[78%] left-[35%] flip"
        />


        {/* TOP LESS LEFT - SMALL*/}
        {/* <img
        src={images[3]}
        alt="TOP LESS LEFT"
        id="PHOTO5"
        className="w-[12%] rounded-full absolute top-[3%] left-[20%] flip"
        /> */}

        {/* TOP MIDDLE - SMALL */}
        {/* <img
            src={images[0]}
            alt="TOP MIDDLE"
            id="PHOTO"
            className="w-[13%] rounded-full absolute top-[4%] left-[40%] flip rounded-full "
          /> */}

        {/* LOW MIDDLE RIGHT - SMALL */}
        <img
          src={"heroImages/low4.png"}
          alt="MIDDLE RIGHT"
          id="LowMiddleRight"
          className="w-[10%] rounded-full absolute top-[65%] left-[87%] flip"
        />

        
        {/* BOTTOM RIGHT - LARGE */}
        <img
          src={"heroImages/med1.png"}
          alt="BOTTOM RIGHT"
          id="BottomRight"
          className="w-[30%] rounded-full absolute top-[80%] right-[10%] flip"
        />

        

        {/* MIDDLE MIDDLE - SMALL */}
        {/* <img
          src={images[5]}
          alt="MIDDLE MIDDLE - SMALL"
          id="PHOTO8"
          className="w-[13%]  rounded-full absolute top-[36%] left-[55%] flip"
        /> */}

        
        {/*TOP RIGHT BIG */}
        <img
          src={images[6]}
          alt="TOP RIGHT "
          id="PHOTO3"
          className=" w-[35%] rounded-full relative top-[3%] left-[65%] flip"
        />

      </div>

      <div
        id="circle"
        style={{ minWidth: screenWidth > 1000 ? '1000px' : 'auto' }}
        className="bg-white h-[100vw] w-[100vw] rounded-full absolute top-[10%] rounded-[100%] z-20 overflow-hidden"
      />


      <div id="heroText" className="text-[60px] rounded-full absolute top-[25%] left-[7vw] font-family-['Inter-Regular'] leading-tight font-bold text-[#2e6434] z-30">
        Start.
        <br />
        your.
        <br />
        Driving <br />
        Journey
        <br />
        with Shahid
        <br />
      </div>

      <Navbar absolute={true}/>
    </div>
  );
}
