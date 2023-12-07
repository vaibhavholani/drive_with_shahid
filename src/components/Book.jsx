import React, { useEffect } from "react";
import Cal, { getCalApi } from "@calcom/embed-react";

export default function Book() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi();
      cal("ui", {
        theme: "light",
        styles: { branding: { brandColor: "#2e6434" } },
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    })();
  }, []);

  return (
    // bg-svg-pattern bg-contain bg-no-repeat
    <div className=" flex flex-col sm:flex-row  justify-around items-around relative m-[5vw]">
      
      <div  className="w-full sm:w-[40%] flex-row md:flex-col flex justify-start pl-[20px] md:pl-0 md:justify-start items-center my-[30px] md:my-0">
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
    

      <Cal
        calLink="drivewithshahid/1-hour-in-person-driving-lesson"
        style={{ width: "100%", height: "100%", overflow: "scroll" }}
        config={{ layout: "month_view" }}
      />

    
      {/* <img src="city_car.svg"/> */}
      <div>
        
      </div>
            
    </div>
  );
}
