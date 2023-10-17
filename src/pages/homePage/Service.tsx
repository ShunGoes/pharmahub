// import React from 'react'

import { ServiceCard } from "../../component";
import speed from "../../assets/images/speed.png"
import community from "../../assets/images/community.png"
import quality from "../../assets/images/quality.png"

const Service = () => {
  return (
    <div className="w-full flex justify-center items-center">
        <div className="font-mont w-[90%] lg:[85%] flex flex-col lg:flex-row flex-wrap pb-[35px] pt-[35px] bg-[#0a4757] justify-around items-center rounded-lg">

            <ServiceCard
                    icon={speed}
                    title="Service Speed"
                    description="Fast delivery of your order with the speed of light anywhere, anytime."
                 />
            
            <hr className="lg:hidden border-[0.5px] border-white w-[80%] mt-[25px] mb-[25px]" />

            <div className="hidden lg:block border-white border-[1px] h-[150px]"></div>

            <ServiceCard
                    icon={quality}
                    title="Quality"
                    description="Our products are of good quality, tested and trusted by many."
                />

            <hr className="lg:hidden border-[0.5px] border-white w-[80%] mt-[25px] mb-[25px]" />
            
            <div className="hidden lg:block border-white border-[1px] h-[150px]"></div>


            <ServiceCard
                    icon={community}
                    title="Community"
                    description="A community of health professionals here for you."
                />

        </div>
    </div>
  )
}

export default Service