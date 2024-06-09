import React, { useState, useEffect } from "react";
import "./CoursesTable.css";
import {packageCards} from "./PackageCardData"

export default function CoursesTable() {
  const [isPhoneView, setIsPhoneView] = useState(window.innerWidth <= 768);

  const handleResize = () => {
    setIsPhoneView(window.innerWidth <= 768);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    // Cleanup function to remove the event listener
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className={`overflow-x-auto max-w-screen-lg mx-auto ${isPhoneView ? 'px-7' : 'px-0'}`}>
      <div className="max-w-full mx-auto">
        <table className="min-w-full bg-[#c4ddc7] md:bg-white">
          <thead className="bg-[#2E6434] text-white">
            <tr>
              <th
                className={`py-2 mr-2 font-bold ${isPhoneView ? 'text-sm' : 'text-base'}`}
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                {isPhoneView ? "Course" : "Course"}
              </th>
              <th className="md:m-0.5 hidden md:table-cell bg-white"></th>
              <th
                className={`py-2 font-bold ${isPhoneView ? 'text-sm' : 'text-base'}`}
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                {isPhoneView ? "Hours" : "In-Class Hours"}
              </th>
              <th className="md:m-0.5 hidden md:table-cell bg-white"></th>
              <th
                className={`py-2 pl-2 md:pl-0 font-bold ${isPhoneView ? 'text-sm' : 'text-base'}`}
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                {isPhoneView ? "Car" : "Road Test Car"}
              </th>
              <th className="md:m-0.5 hidden md:table-cell bg-white"></th>
              <th
                className={`py-2 px-6 md:px-0 font-bold ${isPhoneView ? 'text-sm' : 'text-base'}`}
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                Price
              </th>
              <th
                className="py-2 font-bold bg-[#c4ddc7] md:bg-white"
                style={{ fontFamily: "Inter, sans-serif" }}
              ></th>
            </tr>
          </thead>
          <tbody
            className="text-[#2E6434]"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            {packageCards.map((pkg, index) => (
              <tr key={index} className="border-none">
                <td className={`py-2 text-center ${isPhoneView ? 'text-sm' : 'text-base'}`}>{pkg.title}</td>
                <td className="md:m-0.5 hidden md:table-cell bg-white"></td>
                <td className={`py-2 text-center ${isPhoneView ? 'text-sm' : 'text-base'}`}>{pkg.features[0].split(' ')[0]}</td>
                <td className="md:m-0.5 hidden md:table-cell bg-white"></td>
                <td className={`py-2 text-center ${isPhoneView ? 'text-sm' : 'text-base'}`}>
                  <svg
                    className="w-6 h-6 mx-auto pl-1 md:pl-0"
                    fill="black"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-10.707a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 10-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </td>
                <td className="md:m-0.5 hidden md:table-cell bg-white"></td>
                <td className={`py-2 text-center ${isPhoneView ? 'text-sm' : 'text-base'}`}>${pkg.totalPrice}</td>
                <td className={`py-2 text-center ${isPhoneView ? 'text-sm' : 'text-base'}`}>
                  <button 
                  data-cal-link="drivewithshahid/1-hour-in-person-driving-lesson"
                  data-cal-config='{"layout":"month_view"}'
                  className="border border-[#2E6434] text-[#2E6434] px-[10px] py-[4px] rounded-[10px] hover:bg-[#2E6434] hover:text-white transition duration-200"
                  >
                    Select
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
