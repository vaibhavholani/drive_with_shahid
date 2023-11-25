import React, { useState, useEffect } from "react";
import "./Hero.css";

export default function Hero() {
  const images = [
    "https://file.rendit.io/n/xFXUqFTAhXBq6NeCTlTH.png",
    "https://file.rendit.io/n/EpbWW8qlYfMsuFqmbwbJ.png",
    "https://file.rendit.io/n/rqVEZaqKaavSZcB7kmjt.png",
    "https://file.rendit.io/n/lAlxYdB69Mxf4E70tunU.png",
    "https://file.rendit.io/n/27vHuDNrHLNJ7j9SRblB.png",
    "https://file.rendit.io/n/EpbWW8qlYfMsuFqmbwbJ.png"
  ];

  // could be made dynamic
  const curImages = [0, 1, 2, 3, 4, 0, 1, 2, 3, 4, 0, 1];

  useEffect(() => {
    const flipElements = document.querySelectorAll('.flip');

    flipElements.forEach((element, index) => {
      let interval;
      element.style.animationDelay = `${index * 5}s`;

      element.addEventListener("animationstart", () => {
        interval = setInterval(() => {
          curImages[index] = Math.floor(Math.random() * images.length);
          element.src = images[curImages[index]];
        }, 1000);
      });

      // this is triggered four times for some reason, hence it really adds a 60s delay every iteration
      element.addEventListener("animationend", (e) => {
        clearInterval(interval);
        element.style.animationDelay = `${parseInt(element.style.animationDelay)+15}s`;
      })
    });

    // Clear event listener on component unmount
    return () => {
      flipElements.forEach((element) => {
        element.removeEventListener("animationstart", () => {});
        element.removeEventListener("animationend", () => {});
      });
    };
  }, []);
  
  return (
    <div className="bg-[#1a3d1e] relative flex flex-col w-[100vw] h-[600px] overflow-hidden">
      <div
        style={{ "margin-left": `calc(100vw - 1000px)` }}
        className="relative w-[1000px] h-[100%] "
      >
        <img
          src={images[curImages[0]]}
          alt="PHOTO"
          id="PHOTO"
          className="w-[13%] absolute top-[4%] left-[40%] flip"
        />

        <img
          src={images[curImages[1]]}
          alt="PHOTO1"
          id="PHOTO1"
          className="w-[10%] absolute top-[7%] left-[5%] flip"
        />
        <img
          src={images[curImages[2]]}
          alt="PHOTO4"
          id="PHOTO4"
          className="w-[13%] absolute top-[85%] right-[5%] flip"
        />
        <img
          src={images[curImages[3]]}
          alt="PHOTO5"
          id="PHOTO5"
          className="w-[12%] absolute top-[3%] left-[20%] flip"
        />

        <img
          src={images[curImages[4]]}
          alt="PHOTO8"
          id="PHOTO8"
          className="w-[13%]  absolute top-[23%] left-[25%] flip"
        />
        <img
          src={images[curImages[5]]}
          alt="PHOTO8"
          id="PHOTO8"
          className="w-[13%]  absolute top-[36%] left-[55%] flip"
        />

        <img
          src={images[curImages[6]]}
          alt="PHOTO3"
          id="PHOTO3"
          className=" w-[27%] relative top-[7%] left-[75%] flip"
        />

        <img
          src={images[curImages[7]]}
          alt="PHOTO3"
          id="PHOTO3"
          className=" w-[24%] absolute top-[40%] left-[32%] flip"
        />
        <img
          src={images[curImages[8]]}
          alt="PHOTO3"
          id="PHOTO3"
          className=" w-[25%] absolute top-[57%] left-[57%] flip"
        />
        <img
          src={images[curImages[9]]}
          alt="PHOTO3"
          id="PHOTO3"
          className=" w-[12%] absolute top-[85%] left-[38%] flip"
        />

        <img
          src={images[curImages[10]]}
          alt="PHOTO3"
          id="PHOTO3"
          className=" w-[10%] absolute top-[65%] left-[87%] flip"
        />
        <img
          src={images[curImages[11]]}
          alt="PHOTO1"
          id="PHOTO1"
          className="w-[18%] absolute top-[4%] left-[57%] flip"
        />
      </div>

      <div
        id="circle"
        className="bg-white h-[100vw] w-[100vw] min-w-[1000px] absolute top-[10%] rounded-[100%] z-10"
      ></div>
      <div className="text-[60px] absolute top-[25%] left-[7vw] font-family-['Inter-Regular'] leading-tight font-bold text-[#2e6434] z-20">
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

      <div className=" bg-[#1a3d1e] absolute w-[176px] h-[64px] left-[10px]">
        <div className="relative w-[180px] h-[64px]">
          <img
            className="absolute w-[119px] h-[64px] top-0 left-0"
            alt="Undraw order ride re"
            src="car.svg"
          />
          <div className="absolute w-[117px] h-[39px] top-[16px] left-[63px]">
            <div className="absolute w-[113px] top-[24px] left-0 [font-family:'Inter-Regular',Helvetica] font-normal text-white text-[12px] tracking-[0] leading-[normal]">
              DRIVING SCHOOL
            </div>
            <div className="absolute top-0 left-0 [font-family:'Inter-Black',Helvetica] font-black text-white text-[20px] tracking-[0] leading-[normal] whitespace-nowrap">
              SHAHID’S
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
