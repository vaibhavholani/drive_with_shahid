import React from 'react'

export default function Book() {
  return (
    <div className="flex justify-center items-center relative h-[589px]">
            <img src="city_car.svg"/>
            <p className="absolute top-[5%] lg:top-[10%] md:top-[7%] right-[10%] [font-family:'Inter-Bold',Helvetica] font-bold text-transparent  text-[24px] sm:text-[32px] md:text-[42px] lg:text-[56px] tracking-[0] leading-[normal]">
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
  )
}
