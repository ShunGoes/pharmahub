import { useState, ChangeEvent, useContext } from "react";

import { CartContext } from "../../../../context/cart-context";

interface StateShape {
  coupon_code: string
}

const CartSummary = () => {
  const [coupon,setCoupon] = useState<StateShape>({
    coupon_code: ''
  })
  
  const {total} = useContext(CartContext)!

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const {name,value} = e.target
    setCoupon({...coupon, [name] : value})
  }
  
  
  return (
    <section className=" h-auto  mx-auto flex flex-col gap-10 border p-3 lg:p-7 lg:mx-0">
      <h3 className="text-[#0A4757] text-[18px] font-[700]">Cart SUmmary</h3>
      <div className="flex w-full ">
        <div className="flex flex-col  w-full lg:w-full  gap-3">
          <label
            htmlFor="coupon_code"
            className="text-[#818181] text-[13px] font-[ 600;]"
          >
            {" "}
            Coupon Code
          </label>
          <div className="flex justify-between  w-full lg:gap-2">
            <input
              type="text"
              id="coupon_code"
              value={coupon.coupon_code}
              name="coupon_code"
              onChange={handleChange}
              className="w-[231px] h-[44px] shrink-0 rounded-[8px] border border-[#9EA6A9] bg-[#F9F9F9] lg:w-8/12 "
            />
            <button
              type="submit"
              className="   rounded-[8px] bg-[#FFCC02] w-[100px] text-[#0A4757] text-[15px] font-[600] lg:w-4/12 "
            >
              {" "}
              Apply{" "}
            </button>
          </div>
        </div>
      </div>

      <div>
        <div className="flex justify-between items-center mb-2">
          <span className="text-[#818181] text-[15px] font-[400] ">
            {" "}
            Sub total:{" "}
          </span>
          <strong className="text-[#0A4757] text-[15px] font-[600]">
            N{total}
          </strong>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-[#818181] text-[15px] font-[400] ">
            {" "}
            Coupon discount::{" "}
          </span>
          <strong className="text-[#0A4757] text-[15px] font-[600]">
            N0.00
          </strong>
        </div>
      </div>

      <div>
        <div className="flex justify-between items-center mb-1">
          <span className="text-[#3B6B78] text-[15px] font-[400] ">
            {" "}
            Total:{" "}
          </span>
          <strong className="text-[#0A4757] text-[18px] font-[600]">
            N{total}
          </strong>
        </div>
        <p className="text-[#818181] text-[12px] font-[400] ">
          Delivery fees not included yet
        </p>
      </div>

      <button className="h-[52px] shrink-0 bg-[#0A4757] border border-[#0A4757] text-[#FFF] text-[14px] font-[600] "> Proceed to Checkout</button>
    </section>
  );
};

export default CartSummary;
