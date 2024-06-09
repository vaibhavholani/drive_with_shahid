import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const Header = ({ colorScheme = "green_base" }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const menuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  };

  const isWhiteBase = colorScheme === "white_base";

  return (
    <header className={`${isWhiteBase ? "bg-white" : "bg-[#1a3d1e]"}`}>
      <div className="flex justify-between items-center md:px-8 px-2">
        {/* Logo */}
        <div className="text-lg font-bold">
          <a href="/">
            <img
              src={`${
                isWhiteBase ? "full_logo_green.svg" : "full_white_logo.svg"
              }`}
              alt="Shahid's Driving School"
              className="h-14"
            />{" "}
            {/* Increased size */}
          </a>
        </div>

        {/* Navigation Links - Desktop View */}
        <nav
          className={`hidden md:flex space-x-4 md:mr-[2vw] md:pt-[1] ${
            isWhiteBase ? "text-[#2e6434]" : "text-white"
          }`}
        >
          <a
            href="/"
            className={`${
              isWhiteBase
                ? "hover:font-bold hover:underline"
                : "hover:underline"
            } ${isWhiteBase ? "text-[#2e6434]" : "text-white"}`}
          >
            Home
          </a>
          <a
            href="/course"
            className={`${
              isWhiteBase
                ? "hover:font-bold hover:underline"
                : "hover:underline"
            } ${isWhiteBase ? "text-[#2e6434]" : "text-white"}`}
          >
            Courses
          </a>
        </nav>

        {/* Hamburger Menu Icon - Mobile View */}
        <div className="md:hidden pt-2 pr-1">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`${isWhiteBase ? "text-gray-700" : "text-white"}`}
          >
            <FaBars size={24} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={menuVariants}
            transition={{ duration: 0.3 }}
            className={`md:hidden ${isWhiteBase ? "bg-white" : "bg-[#2e6434]"}`}
          >
            <nav
              className={`flex flex-col items-center space-y-2 p-4 ${
                isWhiteBase ? "text-[#2e6434]" : "text-white"
              }`}
            >
              <a
                href="/"
                className={`${
                  isWhiteBase ? "font-bold hover:underline" : "hover:underline"
                } ${isWhiteBase ? "text-[#2e6434]" : "text-white"}`}
              >
                Home
              </a>
              <a
                href="/course"
                className={`${
                  isWhiteBase ? "font-bold hover:underline" : "hover:underline"
                } ${isWhiteBase ? "text-[#2e6434]" : "text-white"}`}
              >
                Courses
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
