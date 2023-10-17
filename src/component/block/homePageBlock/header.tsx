import React from 'react'
import logo from "../../../assets/images/pharmaHubLogo.png";
import { BsTelephoneFill } from "react-icons/bs"
import { HiMenuAlt3 } from "react-icons/hi";
import { GiBeachBag } from "react-icons/gi"



const Header = () => {

    const [dropdown, setDropdown] = React.useState(false)

    const showDropdown = () => {
        setDropdown(!dropdown)
    }


  return (
    <div className="w-full h-[65px] flex justify-center items-center bg-white font-mont shadow-md relative" >

        <div className="w-[90%] flex justify-between items-center">

            <div className="flex items-center">
                <img src={logo} alt="pharmaHubLogo" className="w-[70px] mr-[5px]" />

                <div className="flex items-center">
                    <div className="text-[13px]">
                        <BsTelephoneFill />
                    </div>
                    <h5 className="text-[11px] text-[#1f2035]">+234 802 464 0699</h5>
                </div>
            </div>

            <div className="flex items-center">

                <div className="hidden lg:flex gap-6 mr-[30px] items-center">
                    <ol className="cursor-pointer text-[14px] text-[#1f2035]  hover:text-red-500  transition ease-out duration-300 hover:animate-pulse transform hover:scale-125">Home</ol>
                    <ol className="cursor-pointer text-[14px] text-[#1f2035]  hover:text-red-500  transition ease-out duration-300 hover:animate-pulse transform hover:scale-125">Shop</ol>
                    <ol className="cursor-pointer text-[14px] text-[#1f2035]  hover:text-red-500  transition ease-out duration-300 hover:animate-pulse transform hover:scale-125">About</ol>
                    <ol className="cursor-pointer text-[14px] text-[#1f2035]  hover:text-red-500 transition ease-out duration-300 hover:animate-pulse transform hover:scale-125">Blog</ol>
                    <ol className="cursor-pointer text-[14px] text-[#1f2035]  hover:text-red-500 transition ease-out duration-300 hover:animate-pulse transform hover:scale-125">Glasses</ol>

                    <button className="bg-[#1f2035] text-white pl-[25px] pr-[25px] hover:border-[1px] border-[#1f2035] hover:bg-transparent hover:text-[#1f2035] transition-all ease-in-out">Log in</button>
                </div>

                <div className="mr-[7px] lg:ml:0 text-[20px] cursor-pointer relative text-[#1f2035]">
                    <GiBeachBag />

                    <h6 className="absolute w-[15px] h-15px] bg-red-600 rounded-full text-white text-[10px] flex justify-center items-center top-[-5px] right-[-6px]">0</h6>
                </div>

                <div className="lg:hidden text-[22px] cursor-pointer text-[#1f2035] ml-[6px]" onClick={showDropdown}>
                    <HiMenuAlt3 /> 
                </div>
            </div>

        </div>

        { dropdown ? 

            <div className="lg:hidden w-full h-[100vh] absolute top-[65px]  transition ease-in-out duration-100 " onClick={showDropdown}>
                <div className="w-full h-[320px] bg-[#1f2035] flex flex-col pl-[15px] pt-[25px] gap-3">
                    <ol className="cursor-pointer text-[14px] text-white">Home</ol>
                    <ol className="cursor-pointer text-[14px] text-white">Shop</ol>
                    <ol className="cursor-pointer text-[14px] text-white">About</ol>
                    <ol className="cursor-pointer text-[14px] text-white">Blog</ol>
                    <ol className="cursor-pointer text-[14px] text-white">Glasses</ol>

                    <button className="bg-red-500 text-white w-[150px] hover:border-[1px] border-[#1f2035] hover:bg-transparent hover:text-red-500 transition ease-in-out dorution-500 mt-[15px]">Log in</button>
                </div>

            </div>

        :
            null
        }

    </div>
  )
}

export default Header