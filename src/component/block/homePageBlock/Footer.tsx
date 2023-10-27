// import React from 'react'

import { AiFillLinkedin } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
// import { FaSquareXTwitter } from "react-icons/fa";
import pharmaWhite from "../../../assets/images/PharmaHubLogoWhite.png";

const Footer = () => {
  return (
    <div className="w-full  flex flex-col justify-center items-center bg-[#083845] font-mont pt-[40px] lg:pt-[50px] pb-[30px] text-white">

      <div className="w-[90%] flex flex-col lg:flex-row justify-between pb-[25px] gap-7">

        <div className=" flex flex-col gap-2 lg:gap-3">
          <img className="w-[100px] mb-[20px]" src={pharmaWhite} alt="" />

          <h6 className="text-[11px] mb-[15px] w-[250px]">
            PharmaHub is an online health platform which provides users; both medical profesional, medical students and non-medical professional with needed health services.
          </h6>

          <div className="flex items-center gap-4 text-[18px]">
            <a className="cursor-pointer text-white no-underline">
              <AiFillLinkedin />
            </a>

            <a className="cursor-pointer text-white no-underline">
              <BsFacebook />
            </a>

            <a className="cursor-pointer text-white no-underline">
              <BsFacebook />
            </a>
          </div>

        </div>

        <div className=" flex flex-col gap-2 lg:gap-3  ">
          <h5 className="text-[#7f9ca3] text-[13px] font-semibold">POPULAR SHOP CATEGORIES</h5>
          <a className="text-[12px] cursor-pointer text-white no-underline">Medical & Hospital Equipments</a>
          <a className="text-[12px] cursor-pointer text-white no-underline">Supplements</a>
          <a className="text-[12px] cursor-pointer text-white no-underline">Vitamins</a>
          <a className="text-[12px] cursor-pointer text-white no-underline">Fitness</a>
          <a className="text-[12px] cursor-pointer text-white no-underline">Wound Dressing Supplies</a>
        </div>

        <div className=" flex flex-col gap-2 lg:gap-3  ">
          <h5 className="text-[#7f9ca3] text-[13px] font-semibold">QUICK LINKS</h5>
          <a className="text-[12px] cursor-pointer text-white no-underline">Home</a>
          <a className="text-[12px] cursor-pointer text-white no-underline">About Us</a>
          <a className="text-[12px] cursor-pointer text-white no-underline">Shop</a>
          <a className="text-[12px] cursor-pointer text-white no-underline">Blog</a>
          <a className="text-[12px] cursor-pointer text-white no-underline">Contact Us</a>
        </div>


        <div className=" flex flex-col gap-2 lg:gap-3  ">
          <h5 className="text-[#7f9ca3] text-[13px] font-semibold">SERVICES</h5>
          <a className="text-[12px] cursor-pointer text-white no-underline">Shipping</a>
          <a className="text-[12px] cursor-pointer text-white no-underline">Medications</a>
          <a className="text-[12px] cursor-pointer text-white no-underline">Consultation</a>
          <a className="text-[12px] cursor-pointer text-white no-underline">BMI Checker</a>
          <a className="text-[12px] cursor-pointer text-white no-underline">Ovulation Checker</a>
          <a className="text-[12px] cursor-pointer text-white no-underline">Register your Pharmacy</a>
        </div>


        <div className=" flex flex-col gap-2 lg:gap-3  ">
          <h5 className="text-[#7f9ca3] text-[13px] font-semibold">ACCOUNT</h5>
          <a className="text-[12px] cursor-pointer text-white no-underline">My Account</a>
          <a className="text-[12px] cursor-pointer text-white no-underline">My Cart</a>
        </div>

      </div>


      <hr className="w-full border-[1px] border-[#0f3f4c]" />


      <div className="w-[90%] flex justify-center items-center text-[10px] sm:text-[13px] lg:text-[15px] pt-[30px]">
        Copyright C. 2022 PharmaHub | Powered by PIT Africa
      </div>      

    </div>
  )
}

export default Footer