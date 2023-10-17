// import React from 'react'
import { BiSearch } from "react-icons/bi"

const Search = () => {
  return (
    <div className="w-full flex items-center justify-center relative h-[100px] sm:h-[220px] font-mont">

        <div className="lg:hidden w-[90%] h-[45px] bg-[#f7f7fd] text-[#1f2035] border-[1px] rounded shadow-md mt-[px] flex items-center pl-[10px] font-mont">
            <div className="mr-[7px] text-[#1f2035]">
                <BiSearch />
            </div>

            <input type="text" placeholder="Search for medication" className="text-[#1f2035] bg-transparent w-[85%] h-[90%] outline-none text-[14px]" />
        </div>

        <div className="hidden sm:flex bg-white shadow-md w-[90%] h-[200px] rounded-lg absolute top-[-50px] justify-center items-center">
            <div className="flex flex-col justify-center sm:w-[90%]  w-[80%]  text-[#1f2035]">

                <div className="flex w-full h-[45px] items-center justify-center bg-[#f7f7fd]  border-[1px] rounded shadow-md pl-[12px] mb-[15px] mt-[10px]">
                    <input className="text-[#1f2035] bg-transparent w-[85%] h-[90%] outline-none text-[14px]" type="text" placeholder="Search for medication e.g. Omeprazoi" />
                    <button className="w-[15%] text-white bg-[#1f2035] rounded-none rounded-r-md hover:bg-white hover:text-[#1f2035] shadow-md transition duration-700 ease-out">Search</button>
                </div>

                <div className="mt-[1px]">
                    <h5>Popular searches</h5>

                    <div className="flex gap-3 mt-[10px]">
                        <button className="shadow-md text-[#1f2035] bg-transparent">Para 1000</button>
                        <button className="shadow-md text-[#1f2035] bg-transparent">Medik-55</button>
                        <button className="shadow-md text-[#1f2035] bg-transparent">Dolometa B</button>
                        <button className="shadow-md text-[#1f2035] bg-transparent">Dicflonac</button>
                        <button className="shadow-md text-[#1f2035] bg-transparent">See all</button>
                    </div>
                </div>

            </div>
        </div>

    </div>
  )
}

export default Search