// import React from 'react'

import QualityCardProps from "../../component/static/QualityCardProps"
import pharmacy from "../../assets/images/pharmacy.png";
import pharmacist from "../../assets/images/pharmacist.png";

const Quality = () => {
  return (
    <div className="w-full flex justify-center items-center pt-[35px] pb-[45px] lg:pb-[65px] bg-[#f5f7f8] font-mont">
        <div  className="w-[90%] bg-[#f5f7f8] flex flex-col justify-center items-center">

            <h6 className="text-[#e3cf7b] text-[12px] mb-[15px] lg:text-[14px]">Services</h6>

            <h5 className="text-[#0a4757] text-[15px] lg:text-[18px] text-center mb-[10px] font-bold">Quality Health at Last</h5>

            <h6 className="text-[#0a4757] text-[12px] lg:text-[14px] text-center w-[75%] mb-[15px] lg:mb-[40px] ">Trust pharmHub with your health and medicines needs.</h6>

            <div className="flex flex-wrap lg:justify-between justify-center items-center gap-7">

                <QualityCardProps 
                        title="Buy Medications"
                        description="Get NAFDAC approved medications delivered to you."
                        buttonContent="Enter Pharmacy"
                        image={pharmacy}
                    />

                <QualityCardProps 
                        title="Consultation"
                        description="Talk to a world class Doctor or Pharmacist today."
                        buttonContent="Consult a Pharmacist"
                        image={pharmacist}
                        />

            </div>

        </div>
    </div>
  )
}

export default Quality