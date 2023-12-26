import React from 'react'
import logo from "../../../assets/images/pharmaHubLogo.png";
import { BsHeadphones } from "react-icons/bs"
import { PiShoppingCartSimpleBold } from "react-icons/pi"
// import { BsPerson }
import { BiSearch } from "react-icons/bi"
import { HiMenuAlt3 } from "react-icons/hi";
import { MdClose } from "react-icons/md"
import { NavLink } from 'react-router-dom';


const Header = () => {

    const [dropdown, setDropdown] = React.useState(false)

    const showDropdown = () => {
        setDropdown(!dropdown)
    }

  return (
    <div className="w-full h-[115px] flex flex-col justify-center items-center bg-white font-mont fixed z-50 shadow-md">

        <div className="w-[90%] h-[55%] flex justify-between items-center">

            <img src={logo} alt="pharmaHubLogo" className="w-[80px] lg:w-[100px] mr-[5px]" />

            <div className="hidden lg:flex w-[550px] h-[45px] items-center justify-center bg-[#f7f7fd]  border-[1px] rounded shadow-md pl-[12px] ">
                    <input className="text-[#1f2035] bg-transparent w-[90%] h-[90%] outline-none text-[14px]" type="text" placeholder="Search for medication" />
                    <button className="w-[10%] text-white h-[100%]  bg-[#1f2035] rounded-none rounded-r-md hover:bg-white hover:text-[#1f2035] shadow-md transition duration-700 ease-out">
                        <BiSearch />
                    </button>
            </div>

            <div className='flex gap-4 items-center'>
                <NavLink to="/selectSignin"><button className="hidden bg-[#1f2035] text-white lg:flex justify-center items-center pl-[20px] pr-[20px] hover:border-[1px] border-[#1f2035] hover:bg-transparent hover:text-[#1f2035] transition-all ease-in-out duration-700">Log in</button></NavLink>

                <NavLink to='/cart' className="lg:hidden w-[35px]  h-[35px]  bg-[#d6e0e2] border-[#bdcfd2] border-[0.5px] rounded flex justify-center items-center mr-[px] lg:ml:0 text-[17px] lg:text-[21px] cursor-pointer relative text-[#1f2035]">
                    <PiShoppingCartSimpleBold />

                    <h6 className="absolute w-[15px] h-[15px] bg-red-600 rounded-full text-white text-[10px] flex justify-center items-center top-[2px] right-[2px]">0</h6>
                </NavLink>

                <NavLink to='/cart' className="hidden lg:flex justify-around items-center w-[125px]  h-[45px]  bg-[#d6e0e2] border-[#bdcfd2] border-[0.5px] rounded font-semibold pl-[px] cursor-pointer">
                    <div className="flex border-r-[0.5px] border-r-[#1f2035] pr-[px] text-[15px] items-center ml-[10px] w-[70%]">
                        <PiShoppingCartSimpleBold />
                        <h6 className="ml-[5px]">My cart</h6>
                    </div>

                    <h5 className="w-[20%] flex justify-center items-center">0</h5>
                </NavLink>

            </div>

        </div>


        <hr className="w-full border-[1px] border-gray-200" />


        <div className="w-[90%] h-[45%] flex justify-between items-center">

            <div className="hidden lg:flex gap-6 mr-[30px] items-center">
                    <ol className="cursor-pointer text-[14px] text-[#1f2035]  hover:text-red-500  transition ease-out duration-300 hover:animate-pulse transform hover:scale-125">Home</ol>
                    <ol className="cursor-pointer text-[14px] text-[#1f2035]  hover:text-red-500  transition ease-out duration-300 hover:animate-pulse transform hover:scale-125">Shop</ol>
                    <ol className="cursor-pointer text-[14px] text-[#1f2035]  hover:text-red-500  transition ease-out duration-300 hover:animate-pulse transform hover:scale-125">About Us</ol>
                    <ol className="cursor-pointer text-[14px] text-[#1f2035]  hover:text-red-500 transition ease-out duration-300 hover:animate-pulse transform hover:scale-125">Blog</ol>
                    <ol className="cursor-pointer text-[14px] text-[#1f2035]  hover:text-red-500 transition ease-out duration-300 hover:animate-pulse transform hover:scale-125">Contact US</ol>
            </div>

            <div className='flex items-center'>
                <div className='text-[23px] font-semibold text-[#1f2035] mr-[3px]'>
                    <BsHeadphones />
                </div>

                <div className='text-[#1f2035] flex flex-col justify-center'>
                    <h5 className='text-[15px] font-semibold mb-[-5px] lg:mb-[-2px]'>0802-464-0699</h5>
                    <h6 className='text-[9px]'>9/5 Support Center</h6>
                </div>
            </div>

            { dropdown ?

                <div className="lg:hidden text-[22px] cursor-pointer text-[#1f2035] ml-[6px]" onClick={showDropdown}>
                    <MdClose /> 
                </div>
            :
                <div className="lg:hidden text-[22px] cursor-pointer text-[#1f2035] ml-[6px]" onClick={showDropdown}>
                    <HiMenuAlt3 /> 
                </div>
            }
            
        </div>

        { dropdown ? 

            <div className="lg:hidden w-full h-[100vh] absolute top-[115px] bg-white transition ease-in-out duration-100 " onClick={showDropdown}>
                <div className="w-full h-[320px]  flex flex-col pl-[15px] sm:pl-[35px] pt-[25px] gap-4 text-[#1f2035]">
                    <ol className="cursor-pointer text-[14px] ">Home</ol>
                    <ol className="cursor-pointer text-[14px] ">Shop</ol>
                    <ol className="cursor-pointer text-[14px] ">About US</ol>
                    <ol className="cursor-pointer text-[14px] ">Blog</ol>
                    <ol className="cursor-pointer text-[14px] ">Contact US</ol>

                    <NavLink to="/selectSigin"><button className="text-white w-[150px] bg-[#1f2035] hover:bg-transparent hover:text-[#1f2035] hover:border-[1px] hover:border-[#1f2035] transition ease-in-out duration-500 mt-[px]">
                        Log in
                    </button></NavLink>
                </div>

{/*                 
     
                <hr className="w-full border-[1px] border-gray-200" />

                <h5 className=" text-[12px]">NEED HELP?</h5> */}

            </div>

        :
            null
        }

    </div>
  )
}

export default Header;