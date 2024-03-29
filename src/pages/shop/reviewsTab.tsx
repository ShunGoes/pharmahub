import { useState } from "react";
import { AiFillStar } from "react-icons/ai";

const ReviewsTab = () => {
  const [hover, setHover] = useState(0);
  const [rating, setRating] = useState(0);

  return (
    <div className="border border-[#E2E2E2] rounded-[10px] py-12 lg:px-24 px-3">
      <span className="leading-7 text-lg text-black">
        <h3 className="text-lg text-center pb-6">
          No reviews yet for this product.
        </h3>
        <h1 className="text-2xl py-2">Write a review:</h1>
        <form>
          <div className="lg:flex justify-between w-full gap-x-8">
            <div className="flex flex-col gap-y-6 g:w-1/3">
              <span className="flex flex-col gap-y-2">
                <label htmlFor="Name">Name:</label>
                <input
                  type="text"
                  placeholder="Enter Name"
                  className="bg-[#F2F2F2] rounded-[5px] text-[#A4A4A4] px-4 h-14 outline-none"
                />
              </span>
              <span className="flex flex-col gap-y-2">
                <label htmlFor="Email">Email:</label>
                <input
                  type="email"
                  placeholder="Enter Email"
                  className="bg-[#F2F2F2] rounded-[5px] text-[#A4A4A4] px-4 h-14 outline-none"
                />
              </span>
            </div>
            <div className="lg:w-1/3 lg:my-0 my-4">
              <textarea
                id=""
                placeholder="Write your review...."
                className="bg-[#F2F2F2] w-full h-full rounded-[10px] p-6 outline-none resize-none"
              />
            </div>
            <div className="lg:w-1/5 flex flex-col justify-center items-center">
              <h3>Rate the product:</h3>
              <div className="flex items-center mb-4 px-6">
                {[...Array(5)].map((__, index) => {
                  index += 1;

                  return (
                    <AiFillStar
                      key={index}
                      className={`bg-transparent border-0 outline-0 cursor-pointer text-[32px]
                         ${
                           index <= (hover || rating)
                             ? "text-[#FFCC02]"
                             : "text-[#ccc]"
                         }`}
                      onClick={() => setRating(index)}
                      onMouseEnter={() => setHover(index)}
                      onMouseLeave={() => setHover(rating)}
                    />
                  );
                })}
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center mt-10">
            <button className="focus:outline-none text-lg text-white bg-[#0A4757] disabled:bg-[#9EA6A9] font-medium h-[56px] px-12  rounded-[10px] border border-[#9EA6A9]">
              {" "}
              Submit
            </button>
          </div>
        </form>
      </span>
    </div>
  );
};

export default ReviewsTab;
