// import React from 'react'
import { FiArrowUpRight } from "react-icons/fi"

const Hero = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center bg-hero-img bg-cover bg-center relative">

        <div className="absolute w-[100%] h-[100%] bg-black opacity-50 top-0"></div>

        <div className="w-[90%] z-20 flex flex-col justify-center items-center">
            <h5 className="text-white w-[90%] lg:w-[60%] text-[23px] sm:text-[35px] sm:w-[70%] lg:text-[45px] font-bold text-center mt-[50px] animate-pulse ">
                Quality Medication and Healthcare at your Doorstep.
            </h5>

            <button className="mt-[40px] flex items-center cursor-pointer bg-[#ffcc02] text-[#1f2035] gap-2 hover:animate-pulse">
                <h5>Shop Medication</h5>
                <div>
                    <FiArrowUpRight />
                </div>
            </button>
        </div>

    </div>
  )
}

export default Hero