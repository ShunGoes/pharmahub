import { MdArrowBack } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import alive_b_complex from "../../assets/images/B complex.png";
import { AiFillStar } from "react-icons/ai";
import { FiCheckCircle } from "react-icons/fi";
import { BiMinus, BiPlus } from "react-icons/bi";
import { useState } from "react";
import Shoptab from "./Shoptab";
import RelatedProducts from "./relatedProducts";

const ShopById = () => {
  const [counter, setCounter] = useState(1);
  const navigate = useNavigate();

  return (
    <>
    <div className="bg-[#FCFCFC] h-full text-[#141414] font-mont pt-32 pb-8">
      <div className="w-[90%] mx-auto">
        <section className="py-8">
          <button
            className="flex items-center gap-x-2 border border-[#0A4757] rounded-[10px] px-8 py-4 focus:outline-none"
            onClick={() => navigate(-1)}
          >
            <MdArrowBack className="w-[30px] h-[30px] text-[#0A4757]" />
            <p className="text-[#0A4757] text-lg">Go Back</p>
          </button>
        </section>

        <section className="text-black">
          <div className="flex gap-x-8">
            <div className="flex justify-center py-[50px] px-10 border border-[#E2E2E2] w-2/5 rounded-[10px]">
              <div className="bg-white w-[400px] h-[400px]">
                <img src={alive_b_complex} alt="" className="w-full h-full" />
              </div>
            </div>
            <div className="w-3/5">
              <div className="w-2/3 h-full flex flex-col justify-between">
                <div className="w-4/5 flex flex-col items-start">
                  <h2 className="text-4xl  font-medium pb-4">
                    Alive B-Complex
                  </h2>
                  <p className=" leading-6">
                    A special formulation of B-Vitamins and Vitamin C to support
                    normal energy release 60 Gummies (Adults and children age
                    12yrs+ 2 to be taken once daily)
                  </p>
                  <div className="flex items-center justify-center mt-4">
                    {[...Array(5)].map((_, index) => {
                      index += 1;

                      return (
                        <AiFillStar
                          key={index}
                          className={`bg-transparent border-0 outline-0 text-[32px]
                        ${index <= 4 ? "text-[#FFCC02]" : "text-[#ccc]"}`}
                        />
                      );
                    })}
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <h2 className="font-medium text-5xl ">#2500</h2>
                  <span className="flex items-center gap-x-2">
                    <FiCheckCircle className="text-2xl text-[#0A4757]" />
                    <p className="text-[#0A4757] text-2xl">Out of Stock</p>
                  </span>
                </div>
                <div>
                  <h5>Quantity:</h5>
                  <div className="flex items-center gap-x-8 mt-4">
                    <button
                      className={`${counter <= 1 ? 'bg-[#9EA6A9] cursor-default' : 'bg-[#0A4757]'} focus:outline-none rounded-full text-white w-[50px] h-[50px] relative`}
                      onClick={() => {
                        counter <= 1 ? setCounter(1) : setCounter(counter - 1);
                      }}
                    >
                      <BiMinus className="absolute top-0 bottom-0 right-0 left-0 h-full w-full px-1" />
                    </button>
                    <h2 className="text-[32px] font-medium">{counter}</h2>
                    <button
                      className="focus:outline-none rounded-full bg-[#0A4757] text-white w-[50px] h-[50px] relative"
                      onClick={() => setCounter(counter + 1)}
                    >
                      <BiPlus className="absolute top-0 bottom-0 right-0 left-0 h-full w-full px-1" />
                    </button>
                  </div>
                </div>
                <div className="flex items-center gap-x-8 w-full">
                  <button className="focus:outline-none text-lg text-[#9EA6A9] font-medium h-[60px] w-full rounded-[10px] border border-[#9EA6A9]">
                    Add To Cart
                  </button>
                  <button className="focus:outline-none text-lg text-white bg-[#9EA6A9] font-medium h-[60px] w-full rounded-[10px] border border-[#9EA6A9]">
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-6 w-3/5">
          <div className="w-2/3 flex justify-center gap-6">
          <div className="w-[100px] h-[100px] p-[10px] border hover:border-[#FFCC02] rounded-[5px]">
            <img src={alive_b_complex} alt='' className="" />
          </div>
          <div className="w-[100px] h-[100px] p-[10px] border hover:border-[#FFCC02] rounded-[5px]">
            <img src={alive_b_complex} alt='' className="" />
          </div>
          <div className="w-[100px] h-[100px] p-[10px] border hover:border-[#FFCC02] rounded-[5px]">
            <img src={alive_b_complex} alt='' className="" />
          </div></div>
        </section>
      </div>
    </div>
    <Shoptab />
    <RelatedProducts />

    </>
  );
};

export default ShopById;
