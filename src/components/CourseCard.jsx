import React from "react";

export default function CourseCard() {
  return (
    <div className="flex items-center justify-center overflow-hidden p-[3vw] gap-[3vw]">
      {FirstCard()}
      {secondCard()}
      {thirdCard()}
    </div>
  )

  
}

// CONTINUE BY FIXING HOW TEXT LOOKS ON PHONE SCREEN AND ACTUALLY CREATE A RULE OF THUMB FOR YOURSELF OR HOW TO STYLE TEXT
export const FirstCard = () => {
  return (
    <div className="relative">
      {/* Adding Shadow */}
      <div className="top-[64px] absolute w-[313px] h-[604px] left-[100px] bg-[#1b2547] blur-[200px] opacity-10" />

      <div className="relative w-[25vw] min-w-[250px] max-w-[350px] h-[40vw] min-h-[400px] max-h-[550px] bg-[#2e6333] rounded-[20px] overflow-hidden">
        <div className="p-[2.5vw]">
          <p className="w-[296px] font-light text-white text-[24px] leading-normal mb-[1vw] [font-family:'Inter',Helvetica] tracking-[0]">
            <span className="[font-family:'Inter',Helvetica] font-light text-white">
              Save More
              <br />
            </span>
            <span className="font-bold">With Shahid.</span>
          </p>
          <p className=" w-[90%] [font-family:'Inter',Helvetica] font-light text-white text-[16px] tracking-[0] leading-normal mb-[2vw]">
            Choose a plan to get started and get your first class free!
          </p>

          <img
            className="w-[40px] h-[40px]"
            alt="Arrow right line"
            src="https://c.animaapp.com/b1HQWZeJ/img/arrow-right-line-1.svg"
          />
        </div>

        <img
          className="absolute bottom-0 left-0"
          alt="Shahid photo"
          src="course_teaser.png"
        />
      </div>
    </div>
  );
};


export const secondCard = () => {
  return (
    <div className="relative z-30">
      {/* <div className="top-[64px] absolute w-[313px] h-[604px] left-[100px] bg-[#1b2547] blur-[200px] opacity-20" /> */}
      <div className=" absolute w-80 h-96 opacity-10 bg-indigo-950 blur-[200px] z-20" />
    <div className="flex flex-col items-start relative w-[25vw] min-w-[250px] max-w-[350px] h-[40vw] min-h-[400px] max-h-[550px] bg-white rounded-[20px] z-40">
      
      <div className="CardHeader items-center grid grid-cols-4 p-[1vw] gap-2 leading-normal">
      <img
        className=" w-[57px] h-[56px] object-cover"
        alt="Driving icon"
        src="driving_icon.svg"
      />

      <div className="col-span-3 [font-family:'Inter-Bold',Helvetica] font-bold text-[#0a0914] text-[28px] tracking-[0] leading-[40px]">
        G2 License
      </div>
      </div>

      <div className="Features [font-family:'Inter-Regular',Helvetica] px-[10%] py-3 text font-light">
      <div className="inline-flex flex-col items-start gap-[24px] text-[17px] p">
        <div className="relative [font-family:'Inter-Regular',Helvetica] font-light text-[#a9a9aa] text-[20px] tracking-[0] leading-[normal]">
          What You’ll Get
        </div>
        <div className="inline-flex items-start gap-[8px] relative flex-[0_0_auto]">
          <img className=" w-[24px] h-[24px]" alt="bx_check_circle" src="check_circle.svg" />
          <p className="  flex items-start text-[#34343e] tracking-[0] leading-[normal]">
            8 hours usage of our coworking space
          </p>
        </div>
        <div className="inline-flex items-center gap-[8px] relative flex-[0_0_auto]">
          <img className="relative w-[24px] h-[24px]" alt="bx_check_circle" src="check_circle.svg" />
          <div className="relative flex items-center  [font-family:'Inter-Regular',Helvetica] font-normal text-[#34343e] tracking-[0] leading-[normal]">
            Access to All our rooms
          </div>
        </div>
        <div className="inline-flex items-center gap-[8px] relative flex-[0_0_auto]">
          <img className="relative w-[24px] h-[24px]" alt="bx_check_circle" src="check_circle.svg" />
          <div className="relative  [font-family:'Inter-Regular',Helvetica] font-light text-[#34343e] tracking-[0] leading-[normal]">
            Dedicated Desk
          </div>
        </div>
        <div className="inline-flex items-center gap-[8px] relative flex-[0_0_auto]">
          <img className="relative w-[24px] h-[24px]" alt="bx_check_circle" src="check_circle.svg" />
          <div className="relative  [font-family:'Inter-Regular',Helvetica] font-light text-[#34343e] tracking-[0] leading-[normal]">
            Free Business Address
          </div>
        </div>
        <div className="inline-flex items-center gap-[8px] relative flex-[0_0_auto]">
          <img className="relative w-[24px] h-[24px]" alt="bx_check_circle" src="check_circle.svg" />
          <p className="relative  [font-family:'Inter-Regular',Helvetica] font-light text-[#34343e] tracking-[0] leading-[normal]">
            Free Lunch 1x a day
          </p>
        </div>
      </div>

      <div className="w-full h-[0.0625rem] mt-[5%] bg-[#A9A9AA] object-cover" alt="Divider" src="divider.svg" />

      <p className="mt-[5%] [font-family:'Inter-Bold',Helvetica] font-light text-[#0b0914] text-[32px] tracking-[0] leading-[40px] whitespace-nowrap">
        <span className="font-bold">$550 </span>
        <span className="[font-family:'Inter-Regular',Helvetica] text-[20px]">or</span>
        <span className="[font-family:'Inter-Regular',Helvetica]">&nbsp;&nbsp;</span>
        <span className="font-bold">$45</span>
        <span className="[font-family:'Inter-Light',Helvetica] text-[15px]">/hour</span>
      </p>

      </div>

      <button className=" w-[90%] mx-[5%] h-[10%] text-center bg-[#2e6434] rounded-[12px] [font-family:'Inter-SemiBold',Helvetica] font-semibold text-white text-[20px] tracking-[0] leading-[40px] ">
          Choose
      </button>
      
      
      
    </div>
    </div>
  )};


  export const thirdCard = () => {
    return (
      <div className="relative z-10">
        {/* <div className="top-[64px] absolute w-[313px] h-[604px] left-[100px] bg-[#1b2547] blur-[200px] opacity-20" /> */}
        <div className=" absolute w-80 h-96 opacity-10 bg-indigo-950 blur-[200px]" />
      <div className="flex flex-col items-start relative w-[25vw] min-w-[250px] max-w-[350px] h-[40vw] min-h-[400px] max-h-[550px] bg-white rounded-[20px]">
        
        <div className="CardHeader items-center grid grid-cols-4 p-[1vw] gap-2 leading-normal">
        <img
          className=" w-[57px] h-[56px] object-cover"
          alt="Driving icon"
          src="driving_icon.svg"
        />
  
        <div className="col-span-3 [font-family:'Inter-Bold',Helvetica] font-bold text-[#0a0914] text-[28px] tracking-[0] leading-[40px]">
          G2 License
        </div>
        </div>
  
        <div className="Features [font-family:'Inter-Regular',Helvetica] px-[10%] py-3 text font-light">
        <div className="inline-flex flex-col items-start gap-[24px] text-[17px] p">
          <div className="relative [font-family:'Inter-Regular',Helvetica] font-light text-[#a9a9aa] text-[20px] tracking-[0] leading-[normal]">
            What You’ll Get
          </div>
          <div className="inline-flex items-start gap-[8px] relative flex-[0_0_auto]">
            <img className=" w-[24px] h-[24px]" alt="bx_check_circle" src="check_circle.svg" />
            <p className="  flex items-start text-[#34343e] tracking-[0] leading-[normal]">
              8 hours usage of our coworking space
            </p>
          </div>
          <div className="inline-flex items-center gap-[8px] relative flex-[0_0_auto]">
            <img className="relative w-[24px] h-[24px]" alt="bx_check_circle" src="check_circle.svg" />
            <div className="relative flex items-center  [font-family:'Inter-Regular',Helvetica] font-normal text-[#34343e] tracking-[0] leading-[normal]">
              Access to All our rooms
            </div>
          </div>
          <div className="inline-flex items-center gap-[8px] relative flex-[0_0_auto]">
            <img className="relative w-[24px] h-[24px]" alt="bx_check_circle" src="check_circle.svg" />
            <div className="relative  [font-family:'Inter-Regular',Helvetica] font-light text-[#34343e] tracking-[0] leading-[normal]">
              Dedicated Desk
            </div>
          </div>
          <div className="inline-flex items-center gap-[8px] relative flex-[0_0_auto]">
            <img className="relative w-[24px] h-[24px]" alt="bx_check_circle" src="check_circle.svg" />
            <div className="relative  [font-family:'Inter-Regular',Helvetica] font-light text-[#34343e] tracking-[0] leading-[normal]">
              Free Business Address
            </div>
          </div>
          <div className="inline-flex items-center gap-[8px] relative flex-[0_0_auto]">
            <img className="relative w-[24px] h-[24px]" alt="bx_check_circle" src="check_circle.svg" />
            <p className="relative  [font-family:'Inter-Regular',Helvetica] font-light text-[#34343e] tracking-[0] leading-[normal]">
              Free Lunch 1x a day
            </p>
          </div>
        </div>
  
        <div className="w-full h-[0.0625rem] mt-[5%] bg-[#A9A9AA] object-cover" alt="Divider" src="divider.svg" />
  
        <p className="mt-[5%] [font-family:'Inter-Bold',Helvetica] font-light text-[#0b0914] text-[32px] tracking-[0] leading-[40px] whitespace-nowrap">
          <span className="font-bold">$550 </span>
          <span className="[font-family:'Inter-Regular',Helvetica] text-[20px]">or</span>
          <span className="[font-family:'Inter-Regular',Helvetica]">&nbsp;&nbsp;</span>
          <span className="font-bold">$45</span>
          <span className="[font-family:'Inter-Light',Helvetica] text-[15px]">/hour</span>
        </p>
  
        </div>
  
        <button className=" w-[90%] mx-[5%] h-[10%] text-center bg-[#2e6434] rounded-[12px] [font-family:'Inter-SemiBold',Helvetica] font-semibold text-white text-[20px] tracking-[0] leading-[40px] ">
            Choose
        </button>
        
        
        
      </div>
      </div>
    )};