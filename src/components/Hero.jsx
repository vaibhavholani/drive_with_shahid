import React from "react";

export default function Hero() {
  return (
    <div className="w-[1440px] h-[782px] bg-[#1a3c1e] overflow-hidden">
      <div className="relative w-[2161px] h-[1608px] left-[-721px]">
        <div className="absolute w-[1440px] h-[43px] top-0 left-[721px] bg-[#1a3c1e]" />
        <img className="absolute w-[1223px] h-[754px] top-[28px] left-[938px]" alt="Images" src="sample.png" />
        <div className="absolute w-[1578px] h-[1511px] top-[97px] left-0">
          <div className="relative w-[1576px] h-[1511px]">
            <div className="absolute w-[1555px] h-[1511px] top-0 left-0 bg-white rounded-[777.5px/755.5px]" />
            <div className="absolute w-[755px] top-[97px] left-[821px] [font-family:'Inter-Bold',Helvetica] font-bold text-[#2e6434] text-[80px] tracking-[0] leading-[normal]">
              Start.
              <br />
              your.
              <br />
              Driving <br />
              Journey
              <br />
              with Shahid
            </div>
          </div>
        </div>
        <div className="absolute w-[176px] h-[64px] top-[11px] left-[721px]">
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
    </div>

  );
};
