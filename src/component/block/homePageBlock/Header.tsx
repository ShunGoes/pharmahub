// import React from 'react'
import logo from "../../../assets/images/pharmaHubLogo.png";
// import { BsHeadphones }
import { PiShoppingCartSimpleBold } from "react-icons/pi"
// import { BsPerson }
import { BiSearch } from "react-icons/bi"


const Header = () => {
  return (
    <div className="w-full h-[115px] flex flex-col justify-center items-center bg-white font-mont fixed z-50">

        <div className="w-[90%] h-[55%] flex justify-between items-center">

            <img src={logo} alt="pharmaHubLogo" className="w-[80px] lg:w-[100px] mr-[5px]" />

            <div className="hidden lg:flex w-[550px] h-[45px] items-center justify-center bg-[#f7f7fd]  border-[1px] rounded shadow-md pl-[12px] ">
                    <input className="text-[#1f2035] bg-transparent w-[90%] h-[90%] outline-none text-[14px]" type="text" placeholder="Search for medication" />
                    <button className="w-[10%] text-white h-[100%]  bg-[#1f2035] rounded-none rounded-r-md hover:bg-white hover:text-[#1f2035] shadow-md transition duration-700 ease-out">
                        <BiSearch />
                    </button>
            </div>

            <div>
                <div className="lg:hidden w-[35px]  h-[35px]  bg-[#d6e0e2] border-[#bdcfd2] border-[0.5px] rounded flex justify-center items-center mr-[7px] lg:ml:0 text-[17px] lg:text-[21px] cursor-pointer relative text-[#1f2035]">
                    <PiShoppingCartSimpleBold />

                    <h6 className="absolute w-[15px] h-[15px] bg-red-600 rounded-full text-white text-[10px] flex justify-center items-center top-[2px] right-[2px]">0</h6>
                </div>
            </div>

            <div className="hidden lg:flex justify-around items-center w-[125px]  h-[45px]  bg-[#d6e0e2] border-[#bdcfd2] border-[0.5px] rounded font-semibold pl-[px]">
                <div className="flex border-r-[0.5px] border-r-[#1f2035] pr-[px] text-[15px] items-center ml-[10px] w-[70%]">
                    <PiShoppingCartSimpleBold />
                    <h6 className="ml-[5px]">My cart</h6>
                </div>

                <h5 className="w-[20%] flex justify-center items-center">0</h5>
            </div>

        </div>

        <hr className="w-full border-[1px] border-gray-200" />

        <div className="w-[90%] h-[45%] flex justify-center items-center"></div>

    </div>
  )
}

export default Header;