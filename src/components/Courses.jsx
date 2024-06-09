import React from "react";
import HeroSectionCoursePage from "./HeroSectionCoursePage";
import CoursesTable from "./CoursesTable";
import GoogleReviews from "./GoogleReviews";

export default function Courses() {
  return (
    <div className="flex">
       <div className="md:w-[30vw] w-full">
        <HeroSectionCoursePage />
      </div>
      <div className="w-[65vw] px-[2.5vw] hidden md:flex flex-col ">
        <div className="flex-row md:flex-col flex justify-start pl-[20px] md:pl-0 md:justify-start items-start my-[30px] md:my-0">
          <p className=" [font-family:'Inter-Bold',Helvetica] font-bold text-transparent  text-[36px] sm:text-[36px] lg:text-[46px] tracking-[0] leading-[normal]">
            <span className="text-black">
              Book. <br />
            </span>
            <span className="text-[#2e6434]">
              Appointment.
              <br />
            </span>
            <span className="text-black">Today.</span>
          </p>
        </div>
        <div className="w-[65vw] my-[30px]">
        <CoursesTable />
        </div>
        <div className="bg-white z-30 flex-row md:flex-col flex justify-start pl-[20px] items-start mt-[30px] md:my-0">
          <p className=" [font-family:'Inter-Bold',Helvetica] font-bold text-transparent  text-[24px] sm:text-[24px] lg:text-[24px] tracking-[0] leading-[normal]">
            <span className="text-black">
                What <nbsp />
            </span>
            
            <span className="text-[#2e6434]">
             Shahid's <nbsp />
            </span>
            <span className="text-black">Students say</span>
          </p>
        </div>
        <GoogleReviews mode="light"/>
      </div>
    </div>
  );
}
