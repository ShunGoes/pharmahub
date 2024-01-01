import blog_img1 from "../../assets/images/blog_img1.png";
import blog_img2 from "../../assets/images/blog_img2.png";
import blog_img3 from "../../assets/images/blog_img3.png";

import { PiDotsThree } from "react-icons/pi";
import { FaRegComment, FaRegHeart } from "react-icons/fa";

const blogData = [
  {
    id: 1,
    image: blog_img1,
    title: "How to stay healthy during harmattan",
    body: "Harmattan, defined as “a dry, dusty easterly or north-easterly wind on the West African coast, occurring from December to February,” is here! And the dry cold, and dusty weather can make you sick. We should take  the following necessary steps to cope with this season: Drink plenty of water to prevent dehydration",
    likes: 3,
    comment: 20,
    date: "Posted on 21 Jan",
  },
  {
    id: 2,
    image: blog_img2,
    title: "How to stay healthy during harmattan",
    body: "Harmattan, defined as “a dry, dusty easterly or north-easterly wind on the West African coast, occurring from December to February,” is here! And the dry cold, and dusty weather can make you sick. We should take  the following necessary steps to cope with this season: Drink plenty of water to prevent dehydration",
    likes: 100,
    comment: 57,
    date: "Posted on 18 Jan",
  },
  {
    id: 3,
    image: blog_img3,
    title: "How to stay healthy during harmattan",
    body: "Harmattan, defined as “a dry, dusty easterly or north-easterly wind on the West African coast, occurring from December to February,” is here! And the dry cold, and dusty weather can make you sick. We should take  the following necessary steps to cope with this season: Drink plenty of water to prevent dehydration",
    likes: 200,
    comment: 128,
    date: "Posted on 16 Jan",
  },
];

const My_blog_post = () => {
  return (
    <div className="mt-8 px-8">
      <p className="text-[#6D7A7F] text-sm font-semibold">JANUARY 2023</p>
      {blogData.map((data) => (
        <div
          key={data.id}
          className="py-6 flex gap-x-4 border-b border-[#E5E5E5]"
        >
          <img
            src={data.image}
            className="xl:h-32 lg:h-24 h-10 xl:w-32 lg:w-24 w-10 rounded-[4px]"
          />
          <div>
            <span className="text-[#0C2129] flex items-center justify-between">
              <p className="text-lg font-mont font-semibold">{data.title}</p>
              <PiDotsThree className="cursor-pointer" />
            </span>
            <p className="text-[#083845] text-sm font-medium py-3">
              {" "}
              {data.body.length > 290
                ? `${data.body.substring(0, 290)}...`
                : data.body}
            </p>
            <div className="flex items-center justify-between lg:gap-x-0 gap-x-4 flex-wrap">
              <span className="flex items-center gap-x-4">
                <span className="text-[#6D7A7F] flex items-center gap-x-2">
                  <FaRegHeart className="cursor-pointer" />
                  <p className="text-sm font-medium flex items-center gap-x-1">
                    {data.likes} <span className="lg:block hidden">Likes</span>
                  </p>
                </span>
                <span className="text-[#6D7A7F] flex items-center gap-x-2">
                  <FaRegComment className="cursor-pointer" />
                  <p className="text-sm font-medium flex items-center gap-x-1">
                    {data.comment}
                    <span className="lg:block hidden">Comments</span>
                  </p>
                </span>
              </span>
              <p className="text-sm font-medium text-[#6D7A7F]">{data.date}</p>
            </div>
          </div>
        </div>
      ))}
      <p className="text-[#6D7A7F] text-sm font-semibold pt-6">DECEMBER 2022</p>
      {blogData.map((data) => (
        <div
          key={data.id}
          className="py-6 flex gap-x-4 border-b border-[#E5E5E5] last:border-0"
        >
          <img
            src={data.image}
            className="xl:h-32 lg:h-24 h-10 xl:w-32 lg:w-24 w-10 rounded-[4px]"
          />
          <div>
            <span className="text-[#0C2129] flex items-center justify-between">
              <p className="text-lg font-mont font-semibold">{data.title}</p>
              <PiDotsThree className="cursor-pointer" />
            </span>
            <p className="text-[#083845] text-sm font-medium py-3">
              {" "}
              {data.body.length > 290
                ? `${data.body.substring(0, 290)}...`
                : data.body}
            </p>
            <div className="flex items-center justify-between lg:gap-x-0 gap-x-4 flex-wrap">
              <span className="flex items-center gap-x-4">
                <span className="text-[#6D7A7F] flex items-center gap-x-2">
                  <FaRegHeart className="cursor-pointer" />
                  <p className="text-sm font-medium flex items-center gap-x-1">
                    {data.likes} <span className="lg:block hidden">Likes</span>
                  </p>
                </span>
                <span className="text-[#6D7A7F] flex items-center gap-x-2">
                  <FaRegComment className="cursor-pointer" />
                  <p className="text-sm font-medium flex items-center gap-x-1">
                    {data.comment}
                    <span className="lg:block hidden">Comments</span>
                  </p>
                </span>
              </span>
              <p className="text-sm font-medium text-[#6D7A7F]">{data.date}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default My_blog_post;
