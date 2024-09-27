import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { PhoneIcon } from "@heroicons/react/24/solid";
import axios from "axios"; // Import axios for making HTTP requests
import "./FloatingCallButton.css";

export default function FloatingCallButton({ number }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isTextVisible, setIsTextVisible] = useState(true);
  const [displayText, setDisplayText] = useState("block");

  const handleCallClick = () => {
    // Collect current date and time
    const currentDateTime = new Date().toLocaleString();

    // Collect browser and device information
    const userAgent = navigator.userAgent;
    const platform = navigator.platform;
    const browserName = navigator.appName;
    const browserVersion = navigator.appVersion;

    // Prepare the data payload
    const data = {
      message: "Hey Vaibhav, a call has been initiated from the website!",
      dateTime: currentDateTime,
      userAgent: userAgent,
      platform: platform,
      browserName: browserName,
      browserVersion: browserVersion,
    };

    // Send the POST request with 'no-cors' mode
    fetch("https://hooks.zapier.com/hooks/catch/20246608/2dp763j/", {
      method: "POST",
      mode: "no-cors", // Set the mode to 'no-cors'
      headers: {
        "Content-Type": "application/json", // Note: This header will be ignored in 'no-cors' mode
      },
      body: JSON.stringify(data),
    })
      .then(() => {
        console.log("Notification sent (no-cors mode, no response available)");
      })
      .catch((error) => {
        console.error("Error sending notification:", error);
      });

    // Initiate the phone call
    window.location.href = `tel:${number}`;
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setIsExpanded((prev) => !prev);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const variants = {
    expanded: { width: "200px", height: "50px", transition: { duration: 0.5 } },
    collapsed: { width: "50px", height: "50px", transition: { duration: 0.5 } },
  };

  useEffect(() => {
    if (!isExpanded) {
      const timer = setTimeout(() => {
        setDisplayText("none");
      }, 450); // Set this to half the duration of your animation

      // return () => clearTimeout(timer);
    } else {
      setDisplayText("block");
    }
  }, [isExpanded]);

  const textVariants = {
    show: {
      opacity: 1,
      x: 0, // Text slides in from left to its original position
      transition: {
        x: { type: "spring", stiffness: 100 },
        duration: 0.5,
        when: "beforeChildren",
      },
    },
    hide: {
      opacity: 0,
      x: -20, // Text slides out to the left
      transition: {
        x: { type: "spring", stiffness: 100 },
        duration: 0.5,
      },
    },
  };

  return (
    <div className="fixed bottom-[5px] right-[5px] z-50">
      <motion.button
        className="flex justify-center items-center space-x-4 call-shahid-button bg-primary overflow-visible rounded-full p-[1vw]"
        animate={isExpanded ? "expanded" : "collapsed"}
        onClick={handleCallClick}
        variants={variants}
      >
        <div>
          <PhoneIcon className="phone-icon text-white h-[25px] w-[25px]" />
        </div>

        <motion.span
          className="call-text [font-family:'Inter-SemiBold',Helvetica] font-bold text-white whitespace-nowrap overflow-hidden"
          animate={isExpanded ? "show" : "hide"}
          variants={textVariants}
          style={{ display: displayText }}
        >
          Call Shahid!
        </motion.span>
      </motion.button>
    </div>
  );
}
