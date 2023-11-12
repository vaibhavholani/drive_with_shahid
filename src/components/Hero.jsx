import React from "react";
import "./Hero.css";

export default function Hero() {
  return (
    <div className="bg-[#1a3d1e] relative flex flex-col w-[100vw] h-[600px] overflow-hidden">
      <div
        style={{ "margin-left": `calc(100vw - 1000px)` }}
        className="relative w-[1000px] h-[100%] "
      >
        <img
          src="https://file.rendit.io/n/xFXUqFTAhXBq6NeCTlTH.png"
          alt="PHOTO"
          id="PHOTO"
          className="w-[13%] absolute top-[4%] left-[40%]"
        />

        <img
          src="https://file.rendit.io/n/EpbWW8qlYfMsuFqmbwbJ.png"
          alt="PHOTO1"
          id="PHOTO1"
          className="w-[10%] absolute top-[7%] left-[5%]"
        />
        <img
          src="https://file.rendit.io/n/rqVEZaqKaavSZcB7kmjt.png"
          alt="PHOTO4"
          id="PHOTO4"
          className="w-[13%] absolute top-[85%] right-[5%]"
        />
        <img
          src="https://file.rendit.io/n/lAlxYdB69Mxf4E70tunU.png"
          alt="PHOTO5"
          id="PHOTO5"
          className="w-[12%] absolute top-[3%] left-[20%]"
        />

        <img
          src="https://file.rendit.io/n/27vHuDNrHLNJ7j9SRblB.png"
          alt="PHOTO8"
          id="PHOTO8"
          className="w-[13%]  absolute top-[23%] left-[25%]"
        />
        <img
          src="https://file.rendit.io/n/27vHuDNrHLNJ7j9SRblB.png"
          alt="PHOTO8"
          id="PHOTO8"
          className="w-[13%]  absolute top-[36%] left-[55%]"
        />

        <img
          src="https://file.rendit.io/n/VqmKajcPgWrnMkoQJC00.png"
          alt="PHOTO3"
          id="PHOTO3"
          className=" w-[27%] relative top-[7%] left-[75%]"
        />

        <img
          src="https://file.rendit.io/n/xFXUqFTAhXBq6NeCTlTH.png"
          alt="PHOTO3"
          id="PHOTO3"
          className=" w-[24%] absolute top-[40%] left-[32%]"
        />
        <img
          src="https://file.rendit.io/n/xFXUqFTAhXBq6NeCTlTH.png"
          alt="PHOTO3"
          id="PHOTO3"
          className=" w-[25%] absolute top-[57%] left-[57%]"
        />
        <img
          src="https://file.rendit.io/n/xFXUqFTAhXBq6NeCTlTH.png"
          alt="PHOTO3"
          id="PHOTO3"
          className=" w-[12%] absolute top-[85%] left-[38%]"
        />

        <img
          src="https://file.rendit.io/n/xFXUqFTAhXBq6NeCTlTH.png"
          alt="PHOTO3"
          id="PHOTO3"
          className=" w-[10%] absolute top-[65%] left-[87%]"
        />
        <img
          src="https://file.rendit.io/n/EpbWW8qlYfMsuFqmbwbJ.png"
          alt="PHOTO1"
          id="PHOTO1"
          className="w-[18%] absolute top-[4%] left-[57%]"
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
