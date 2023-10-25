// import React from 'react'

import headache from "../../assets/images/headache.png"
import depression from "../../assets/images/depression.png"
import anxiety from "../../assets/images/anxiety.png"
import cold from "../../assets/images/cold.png"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ShopByConditionProps from "../../component/static/ShopByConditionProps"

const ShopByCondition = () => {

    const settings = {
        autoplay: true,
        autoplaySpeed: 3000,
        dots: false,
        infinite: true,
        speed: 700,
        slidesToShow: 4,
        slidesToScroll: 1,
        rtl: true,
        responsive: [
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 770,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidestoShow: 1,
                }
            },
            {
                breakpoint: 475,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    }

  return (
    <div className="w-full flex justify-center items-center pt-[5px] pb-[45px] lg:pb-[65px] font-mont overflow-hidden">

        <div className="w-[90%] flex flex-col justify-center items-center">

            <div className="w-[100%] flex justify-between items-center mb-[20px]">
                <h6 className="text-[#0a4757] text-[13px]">Shop by condition</h6>
                <h6 className="text-[#0a4757] text-[13px] cursor-pointer p-[5px] pl-[10px] pr-[10px] bg-[#f5f7f8]">See All</h6>
            </div>

            <div className="w-full ml-[0px] ">

                <Slider {...settings} className="ml-[15px] sm:ml-[30px] lg:ml-[30px]">

                    <ShopByConditionProps 
                            conditionImage={headache}
                            conditionName="Headache"
                        />

                    <ShopByConditionProps 
                            conditionImage={depression}
                            conditionName="Depression"
                        />
                        
                    <ShopByConditionProps 
                            conditionImage={anxiety}
                            conditionName="Anxiety"
                        />
    
                    <ShopByConditionProps 
                            conditionImage={cold}
                            conditionName="Cold"
                        />
    
                    <ShopByConditionProps 
                            conditionImage={anxiety}
                            conditionName="Anxiety"
                        />

                </Slider>

            </div>

        </div>

    </div>
  )
}

export default ShopByCondition;