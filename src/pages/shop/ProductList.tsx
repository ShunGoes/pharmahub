import { useState } from "react";
import ProductData from "./data";
import Paginate from "./Paginate";
import { useNavigate } from "react-router-dom";
import Ratings from "./Ratings";

const ProductList = () => {
  const [currentPage, setCurrentPage] = useState<number>(0);

  const PER_PAGE: number = 6;
  const pageCount: number = Math.ceil(ProductData.length / PER_PAGE);

  const offset: number = currentPage * PER_PAGE;

  const navigate = useNavigate();

  return (
    <>
      <div className="pt-8 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
        {ProductData.slice(offset, offset + PER_PAGE).map((item) => (
          <div
            key={item.id}
            onClick={() => navigate("/shopbyid")}
            className="rounded-[10px] border border-[#E2E2E2] pt-20 pb-4 px-8"
          >
            <div className="flex justify-center relative ">
              <img
                src={item.img}
                alt={item.title}
                className="h-[200px] w-[200px]"
              />
              {item.isStock === false && (
                <button className="absolute text-[#6D6D6D] text-xs bg-[#E4E4E4] p-3 -top-8 right-16">
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
                  #{item?.discount?.toFixed(2)}
                </p>
              )}
              <p className="font-bold text-2xl">#{item.price.toFixed(2)}</p>
            </span>
            <button className="text-[#9EA6A9] rounded-[10px] h-14 px-8 border border-[#9EA6A9] focus:outline-none">
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      <Paginate
        currentPage={currentPage}
        pageCount={pageCount}
        setCurrentPage={setCurrentPage}
      />
    </>
  );
};

export default ProductList;
