// import React from 'react'

import { ProductsCardProps } from "../../component"
import bComplex from "../../assets/images/B complex.png"
import ashwa from "../../assets/images/Ashwagandha.png"
import benylin from "../../assets/images/Benylin.png"
import natroe from "../../assets/images/Natroe Biotin.png"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Products = () => {

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
    <div className="w-full flex justify-center items-center pt-[35px] pb-[45px] lg:pb-[65px] font-mont overflow-hidden">

        <div className="w-[90%] flex flex-col justify-center items-center">

            <h6 className="text-[#0a4757] bg-[#e6ecee] text-[12px] mb-[15px] lg:text-[14px] p-[5px] rounded-xl">Products</h6>

            <h5 className="text-[#0a4757] text-[14px] w-[65%] lg:w-[85%] font-semibold text-center mb-[15px]">
                Browse through collection of our products
            </h5>

            <div className="w-[80%] flex justify-between items-center mb-[20px]">
                <h6 className="text-[#0a4757] text-[13px]">Featured</h6>
                <h6 className="text-[#0a4757] text-[13px]">See all</h6>
            </div>

            <div className="w-full ml-[0px] ">

                <Slider {...settings} className="ml-[15px] sm:ml-[30px] lg:ml-[30px]">

                    <ProductsCardProps 
                            productImage={bComplex}
                            productName="Alive B-complex"
                            productPrice="#2500"
                        />

                    <ProductsCardProps 
                            productImage={ashwa}
                            productName="Ashwagandha"
                            productPrice="#2500"
                        />

                    <ProductsCardProps 
                            productImage={benylin}
                            productName="Benylin"
                            productPrice="#2500"
                        />
                        
                    <ProductsCardProps 
                            productImage={bComplex}
                            productName="Alive B-complex"
                            productPrice="#2500"
                        />

                    <ProductsCardProps 
                            productImage={natroe}
                            productName="Natroe Biotin"
                            productPrice="#2500"
                        />

                </Slider>

            </div>

        </div>

    </div>
  )
}

export default Products