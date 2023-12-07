import React from 'react';
// import './Navbar.css'; // If you have specific CSS for Navbar

const Navbar = ({absolute}) => {

    // Construct class string
  let classList = "bg-[#1a3d1e]  h-[64px] left-[10px]";
  if (absolute == true) {
    classList += " w-[176px] absolute"; // Only add 'absolute' if mode is false or not defined
  }

  return (
    <div className={classList}>
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
          <div className="rounded-full absolute top-0 left-0 [font-family:'Inter-Black',Helvetica] font-black text-white text-[20px] tracking-[0] leading-[normal] whitespace-nowrap">
            SHAHID’S
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
