// import React from 'react'


import { FiArrowUpRight } from "react-icons/fi";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import NewsCardProps from "../../component/static/NewsCardProps";
import headache from "../../assets/images/dislip.png";
import pills from "../../assets/images/pills.png";
import doctor from "../../assets/images/female-doctor.png";


const News = () => {

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
    <div className="w-full flex justify-center items-center pt-[30px] pb-[35px] lg:pb-[45px] font-mont overflow-hidden">

      <div className="w-[90%] flex flex-col justify-center items-center">

        <h6 className="text-[#0a4757] text-[12px] mb-[15px] lg:text-[14px]">Our Blog</h6>

        <h5 className="text-[#0a4757] text-[15px] lg:text-[18px] text-center mb-[10px] font-bold">News and Blog</h5>

        <h6 className="text-[#0a4757] text-[12px] lg:text-[14px] text-center w-[75%] mb-[15px] lg:mb-[40px] ">Trust PharmHub with your health and medicines needs.</h6>

        <div className="w-full">

          <Slider {...settings} className="ml-[10px] sm:ml-[30px] lg:ml-[30px]">

            <div className="">
              <NewsCardProps 
                    newsImage={headache}
                    newsHeadline="What is the treatment for diabetic dyslipidemia?"
                    newsDetails="According to one source, it is not that profitable The Frustrating Life of a McDonald’s Franchisee, given that you earn only $153k per year after..."
                />
            </div>

            <div className="">
              <NewsCardProps 
                    newsImage={pills}
                    newsHeadline="Caregivers and Guardians"
                    newsDetails="According to one source, it is not that profitable. The Frustrating Life of a McDonald’s Franchisee, given that you earn only $153k per year after..."
                />
           </div>

            <div className="">
              <NewsCardProps 
                    newsImage={doctor}
                    newsHeadline="What is the treatment for diabetic dyslipidemia?"
                    newsDetails="According to one source, it is not that profitable The Frustrating Life of a McDonald’s Franchisee, given that you earn only $153k per year after..."
                />
           </div>

            <div className="">
              <NewsCardProps 
                    newsImage={headache}
                    newsHeadline="What is the treatment for diabetic dyslipidemia?"
                    newsDetails="According to one source, it is not that profitable The Frustrating Life of a McDonald’s Franchisee, given that you earn only $153k per year after..."
                />
           </div>

            <div className="">
              <NewsCardProps 
                    newsImage={pills}
                    newsHeadline="What is the treatment for diabetic dyslipidemia?"
                    newsDetails="According to one source, it is not that profitable The Frustrating Life of a McDonald’s Franchisee, given that you earn only $153k per year after..."
                />
           </div>

          </Slider>

        </div>

        <button className="bg-[#f5f7f8] border-[#f0f3f5] border-[0.5px] flex justify-center items-center text-[#0a4757] mt-[20px]">
          <h6 className="text-[13px] font-semibold mr-[5px]">Explore all Topics</h6>
          <div className="text-[17px]">
            <FiArrowUpRight />
          </div>
        </button>

      </div>

    </div>
  )
}

export default News