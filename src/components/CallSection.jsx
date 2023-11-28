import React from 'react';
import { motion } from 'framer-motion';
import './CallSection.css'; // Make sure to create this CSS file

const CallSection = ({number}) => {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const handleCallClick = () => {
    window.location.href = `tel:${number}`; // Use the phone number in the format 'tel:+[country code][number]'
  };

  return (
    <motion.div
      className="component-container mt-[20px] pb-[20px]"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      transition={{ duration: 0.8 }}
    >
      <div className="horizontal-line"></div>
      <div className="text-button-container">
        <motion.p
          className="responsive-text"
          initial={{ scale: 0 }}
          animate={{ rotate: 360, scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20
          }}
        >
         <span className=""> Call </span>  Shahid and Book Now!:
        </motion.p>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="call-button"
          onClick={handleCallClick}
        >
          Call
        </motion.button>
      </div>
    </motion.div>
  );
};

export default CallSection;
