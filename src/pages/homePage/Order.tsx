// import React from 'react'

import step1 from "../../assets/images/medication.png"
import step2 from "../../assets/images/prescriptions.png"
import step3 from "../../assets/images/local_shipping.png"

import OrderCardProps from "../../component/static/OrderCardProps"

const Order = () => {
  return (
    <div className="w-full flex justify-center items-center">

        <div className="font-mont w-[90%] lg:[85%] flex flex-col lg:flex-row flex-wrap pb-[25px] pt-[25px] justify-around items-center">

            <h5 className="text-[#0a4757] w-[60%] text-center font-bold mt-[20px] lg:text-[17px]">How to order with pharmaHub</h5>

            <div className="w-full flex flex-col lg:flex-row flex-wrap justify-between items-center mt-[20px] gap-7">

                <OrderCardProps
                        iconLogo={step1}
                        step="Step 1"
                        description="Search for your medication and compare prices." 
                    />

                <OrderCardProps
                        iconLogo={step2}
                        step="Step 2"
                        description="Place your order and we will handle the rest." 
                        />

                <OrderCardProps
                        iconLogo={step3}
                        step="Step 3"
                        description="Your meds are delivered to your doorstep while you relax." 
                            />

            </div>

        </div>

    </div>
  )
}

export default Order