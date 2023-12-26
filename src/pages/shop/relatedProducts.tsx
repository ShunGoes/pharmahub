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
        breakpoint: 4000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1040,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="bg-white pb-24">
      <div className="px-3">
        <h2 className="text-black text-[32px] font-medium pb-10 lg:pl-6 lg:text-left text-center">
          Related Products
        </h2>

        <Slider {...settings} arrows={false}>
          {ProductData.map((item) => (
            <div className="lg:px-6">
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

                <span className="flex item-center flex-wrap gap-x-4 py-8">
                  {" "}
                  {item?.discount && (
                    <p className="font-bold text-2xl line-through text-[#9EA6A9]">
                      ₦{item?.discount?.toFixed(2)}
                    </p>
                  )}
                  <p className="font-bold text-2xl text-black">
                    ₦{item.price.toFixed(2)}
                  </p>
                </span>
                <button className="text-[#CCA501] rounded-[10px] h-14 px-8 border border-[#CCA501] focus:outline-none">
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
