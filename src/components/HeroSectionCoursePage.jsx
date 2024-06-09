import React from "react";
import CoursesTable from "./CoursesTable";
import "./HeroSectionCoursePage.css";

const HeroSectionCoursePage = () => {
  return (
    <section className="CourseHeroContainer">
      <div className="container mx-auto flex flex-col justify-center md:justify-between h-full max-w-full md:max-w-[492px] bg-[#c4ddc7] md:bg-[#2e6434]">
        <div className="text-left text-[#2e6434] md:text-white p-5 md:p-10">
          <h1 className="text-xl md:text-2xl font-light">
            Drive Better <br />
            <span className="font-bold">With Shahid.</span>
          </h1>
          <p className="text-md mt-4">
            Here are 4 G/G2 Driving Courses specially designed to fit all your
            needs
          </p>
          <img
            className="hidden md:block mt-10 w-[40px] h-[40px]"
            alt="Arrow right line"
            id="saveMoreArrow"
            src="https://c.animaapp.com/b1HQWZeJ/img/arrow-right-line-1.svg"
          />
        </div>
        {/* Mobile Placeholder */}
        <div className="md:hidden ">
          <CoursesTable />
        </div>
        {/* Image with lady */}
        <div className="flex justify-center">
          <img src="sb_with_lady.png" alt="Lady" className="w-full md:w-auto" />
        </div>
      </div>
    </section>
  );
};

export default HeroSectionCoursePage;
