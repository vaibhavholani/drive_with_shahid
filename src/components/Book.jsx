import React from 'react'

export default function Book() {
  return (
    <div className="w-[1348px] h-[589px]">
    <div className=" w-[1348px] h-[589px]">
      <div className="relative h-[589px]">
        <div className="absolute w-[1348px] h-[589px] top-0 left-0">
          <div className="relative h-[589px]">
            <img src="city_car.svg"/>
            <p className="absolute top-[54px] left-[840px] [font-family:'Inter-Bold',Helvetica] font-bold text-transparent text-[56px] tracking-[0] leading-[normal]">
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
        </div>
        <img
          className="absolute w-[500px] h-[539px] top-[22px] left-[108px]"
          alt="Datepicker"
          src="datepicker-1-1.png"
        />
      </div>
    </div>
  </div>
  )
}
