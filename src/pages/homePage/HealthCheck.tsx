// import React from 'react'

import { FiArrowUpRight } from "react-icons/fi";
import bmi from "../../assets/images/bmi-checker.png";
import ovulation from "../../assets/images/ovulation-checker.png";

const HealthCheck = () => {
  return (
    <div className="w-full bg-[#f5f7f8] flex justify-center items-center pt-[30px] pb-[35px] lg:pb-[45px] font-mont overflow-hidden">

        <div className="w-[90%] flex flex-col justify-center items-center">

            <h6 className="text-[#0a4757] text-[17px] font-semibold lg:text-[20px]">Health Check</h6>

            <h6 className="text-[#0a4757] text-[10px] lg:text-[13px] w-[70%] text-center mb-[20px] mt-[10px]">Trust PharmaHub with your health and medicine needs.</h6>

            <div className="flex flex-wrap sm:flex justify-center sm:justify-between items-center gap-6 ">

                <div className="text-white flex flex-wrap bg-[#0a4757] justify-between w-[85%] rounded-md sm:w-[48%] h-[320px] sm:h-[160px] lg:h-[180px] overflow-hidden pt-[15px] sm:pt-0">

                    <div className="h-[43%] sm:w-[50%] sm:h-[100%] flex flex-col justify-around sm:justify-center">
                        <h6 className="text-[14px]  ml-[15px] font-semibold sm:mb-[12px]">
                            BMI Checker
                        </h6>

                        <h6 className="text-[10px]  ml-[15px] mt-[-0px] w-[90%] sm:mb-[12px]">
                            Calculate the amount of fatness in your body, and find out if you are over weight.
                        </h6>

                        <button className="text-white border-white border-[1px]  ml-[15px] mt-[-px] w-[150px] h-[40px] bg-transparent text-[11px] flex justify-center items-center">
                            <h6>Check my BMI</h6>
                            <div className="ml-[5px] text-[18px]"><FiArrowUpRight /></div>
                        </button>
                    </div>

                    <img className="w-full h-[55%] sm:w-[47%] lg:w-[40%] sm:h-[100%]" src={bmi} alt="" />
                </div>

                <div className="text-[#0a4757] flex flex-wrap bg-[#ffcc02] justify-between w-[85%] rounded-md sm:w-[48%] h-[320px] sm:h-[160px] lg:h-[180px] overflow-hidden pt-[15px] sm:pt-0">

                    <div className="h-[43%] sm:w-[50%] sm:h-[100%] flex flex-col justify-around sm:justify-center">
                        <h6 className="text-[14px]  ml-[15px] font-semibold sm:mb-[12px]">
                            Ovulation Checker
                        </h6>

                        <h6 className="text-[10px]  ml-[15px] mt-[-px] w-[90%] sm:mb-[12px]">
                            Calculate the amount of fatness in your body, and find out if you are over weight.
                        </h6>

                        <button className="text-[#0a4757] border-[#0a4757] border-[1px]  ml-[15px] mt-[-px] w-[150px] h-[40px] bg-transparent text-[11px] flex justify-center items-center">
                            <h6>Check my Status</h6>
                            <div className="ml-[5px] text-[18px]"><FiArrowUpRight /></div>
                        </button>
                    </div>

                    <img className="w-full h-[55%] sm:w-[47%] lg:w-[40%] sm:h-[100%]" src={ovulation} alt="" />
                </div>

            </div>

        </div>

    </div>
  )
}

export default HealthCheck