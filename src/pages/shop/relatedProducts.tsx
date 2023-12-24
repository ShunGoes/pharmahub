import ProductData from "./data";
import Ratings from "./Ratings";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const RelatedProducts = () => {
  const settings = {
    autoplay: true,
    autoplaySpeed: 3000,
    dots: false,
    infinite: true,
    speed: 700,
    slidesToShow: 3,
    slidesToScroll: 1,
    rtl: true,
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 770,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidestoShow: 1,
        },
      },
      {
        breakpoint: 475,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="bg-white pb-24">
      <div className="w-[90%] mx-auto ">
      <h2 className="text-black text-[32px] font-medium pb-10 pl-6">Related Products</h2>

        <Slider {...settings}>
          {ProductData.map((item) => (
            <div className="px-6">
              <div className="border border-[#E2E2E2] h-full w-full px-6 pb-4 rounded-[10px]">
                <div className="flex justify-center relative mt-16 h-full">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="h-[200px] w-[200px]"
                  />
                  {item.isStock === false && (
                    <button className="absolute text-[#6D6D6D] text-xs bg-[#E4E4E4] p-3 -top-8 right-12 focus:outline-none">
                      Out of stock
                    </button>
                  )}
                </div>
                <span className="flex justify-between py-4">
                  <p className="text-sm text-[#A3A3A3] ">Uncategorized</p>

                  <Ratings star={item.star} />
                </span>
                <p className="text-2xl ">{item.title}</p>

                <span className="flex item-center gap-x-4 py-8">
                  {" "}
                  {item?.discount && (
                    <p className="font-bold text-2xl line-through text-[#9EA6A9]">
                      ₦{item?.discount?.toFixed(2)}
                    </p>
                  )}
                  <p className="font-bold text-2xl text-black">₦{item.price.toFixed(2)}</p>
                </span>
                <button className="text-[#9EA6A9] rounded-[10px] h-14 px-8 border border-[#9EA6A9] focus:outline-none">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default RelatedProducts;
