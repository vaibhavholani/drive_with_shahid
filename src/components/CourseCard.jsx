import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import ReactGA from 'react-ga4';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from "framer-motion";
import { packageCards } from "./PackageCardData";
import { getCalApi } from "@calcom/embed-react";
import "./CourseCard.css";

export default function CourseCard() {
  const [numSlides, setNumSlides] = useState(2);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  
  const updateSlidesToShow = () => {
    const vw = Math.max(
      document.documentElement.clientWidth || 0,
      window.innerWidth || 0
    );
    let maxContainerWidth = vw;
    if (vw > 750) {
      maxContainerWidth = vw * 0.6; // 60vw
    }
    const maxCards = Math.floor(maxContainerWidth / (350 + 20));
    setNumSlides(Math.min(maxCards, 4)); // Ensure it doesn't exceed 4
  };

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
      updateSlidesToShow();
    };

    handleResize(); // Call it initially
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: numSlides,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  return (
    <div>
    <div
      style={{ flexDirection: screenWidth > 750 ? "row" : "column" }}
      className="flex items-center justify-center overflow-visible p-[3vw] gap-[2vw]"
    >
      {FirstCard({ screenWidth })}

      <div>
        <div
          className="sliderContainer"
          style={{
            maxWidth: screenWidth > 750 ? "60vw" : "100vw",
            marginLeft: screenWidth > 750 ? "4vw" : "0px",
          }}
        >
          <Slider {...settings}>
            {packageCards.map((card, index) => (
              <div key={index}>
                <PackageCard info={card} />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
    {/* <div className="flex items-center justify-center p-5">
   <p>*package prices are given for <a href="https://maps.app.goo.gl/HTfFY8zBKdebAc5g6" target="_blank"> <b> Metro East Driving Test Center </b> </a></p> 
    </div> */}
    </div>
  );
}

export const FirstCard = ({ screenWidth }) => {
  const cardVariants = {
    initial: {
      boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
      // other initial styles
    },
    // hover: {
    //   boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.2)',
    //   scale: 1.05,
    //   zIndex: 100,
    //   // other hover styles
    // }
  };

  return (
    <motion.div
      style={{ marginBottom: screenWidth > 750 ? "0" : "30px" }}
      className="relative w-[350px] h-[550px] bg-[#2e6333] rounded-[20px]  overflow-hidden"
      variants={cardVariants}
      initial="initial"
      whileHover="hover"
    >
      <div style={{ padding: "40px" }}>
        <p className="w-[296px] font-light text-white text-[24px] leading-normal mb-[1vw] [font-family:'Inter',Helvetica] tracking-[0]">
          <span className="[font-family:'Inter',Helvetica] font-light text-white">
            Save More
            <br />
          </span>
          <span className="font-bold">With Shahid.</span>
        </p>
        <p className=" w-[90%] [font-family:'Inter',Helvetica] font-light text-white text-[16px] tracking-[0] leading-normal mb-[2vw]">
          Choose a plan to get started and get your last class free!
        </p>

        <img
          className="w-[40px] h-[40px]"
          alt="Arrow right line"
          id="saveMoreArrow"
          src="https://c.animaapp.com/b1HQWZeJ/img/arrow-right-line-1.svg"
        />
      </div>

      <img
        className="absolute bottom-0 left-0"
        alt="Shahid photo"
        src="course_teaser.png"
      />
    </motion.div>
  );
};

export function PackageCard({ info }) {
  const { icon, title, features, totalPrice, pricePerHour } = info;

  useEffect(() => {
    (async function () {
      const cal = await getCalApi();
      cal("ui", {
        theme : "light",
        styles: { branding: { brandColor: "#2e6434" } },
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    })();
  }, []);

  const handleCallClick = () => {
      ReactGA.event({
        category: 'Button Clicks',
        action: 'Click',
        label: 'CourseCard Choose Button'
      });
    // window.location.href = "tel:+16474009353"; // Use the phone number in the format 'tel:+[country code][number]'
  };

  const cardVariants = {
    initial: {
      boxShadow: "0px 6px 10px rgba(0, 0, 0, 0.2)",
      // other initial styles
    },
    hover: {
      boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.4)", // You can adjust this as well if needed
      scale: 1.05,
      zIndex: 100,
      // other hover styles
    },
  };

  return (
    <motion.div
      className="flex flex-col m-[2vw] items-start relative w-[350px] h-[550px] bg-white rounded-[20px] z-40"
      id="cardTemplateHolder"
      variants={cardVariants}
      initial="initial"
      whileHover="hover"
    >
      <div className="CardHeader items-center grid grid-cols-4 p-[20px] gap-2 leading-normal">
        <img
          className=" w-[57px] h-[56px] object-cover"
          alt="Driving icon"
          src={icon}
        />
        <div className="col-span-3 [font-family:'Inter-Bold',Helvetica] font-bold text-[#0a0914] text-[28px] tracking-[0] leading-[40px]">
          {title}
        </div>
      </div>

      <div className="Features [font-family:'Inter-Regular',Helvetica] px-[10%] py-3 text font-light">
        <div className="inline-flex flex-col items-start gap-[24px] text-[17px] p">
          <div className="relative [font-family:'Inter-Regular',Helvetica] font-light text-[#a9a9aa] text-[20px] tracking-[0] leading-[normal]">
            What You’ll Get
          </div>
          {features.map((feature) => {
            return (
              <div className="inline-flex items-start gap-[8px] relative flex-[0_0_auto]">
                <img
                  className=" w-[24px] h-[24px]"
                  alt="bx_check_circle"
                  src="check_circle.svg"
                />
                <p className="flex items-start text-[#34343e] tracking-[0] leading-[normal]">
                  {feature}
                </p>
              </div>
            );
          })}
        </div>

        <div
          className="w-full h-[0.0625rem] mt-[5%] bg-[#A9A9AA] object-cover"
          alt="Divider"
          src="divider.svg"
        />

        <p className="mt-[5%] [font-family:'Inter-Bold',Helvetica] font-light text-[#0b0914] text-[32px] tracking-[0] leading-[40px] whitespace-nowrap">
          <span className="font-bold"> ${totalPrice} </span>
          <span className="[font-family:'Inter-Regular',Helvetica] text-[20px]">
            or
          </span>
          <span className="[font-family:'Inter-Regular',Helvetica]">
            &nbsp;&nbsp;
          </span>
          <span className="font-bold">${pricePerHour}</span>
          <span className="[font-family:'Inter-Light',Helvetica] text-[15px]">
            /hour
          </span>
          <span className="[font-family:'Inter-Light',Helvetica] text-[15px] text-[#adadad]">
            {" "}
            (+ taxes)
          </span>
        </p>
      </div>

      <button
        onClick={handleCallClick}
        data-cal-link="drivewithshahid/1-hour-in-person-driving-lesson"
        data-cal-config='{"layout":"month_view"}'
        className=" w-[90%] mx-[5%] h-[10%] text-center bg-[#2e6434] rounded-[12px] [font-family:'Inter-SemiBold',Helvetica] font-semibold text-white text-[20px] tracking-[0] leading-[40px] "
      >
        Choose
      </button>
    </motion.div>
  );
}
