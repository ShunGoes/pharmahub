import { AiFillStar } from "react-icons/ai";

type Props = {
  star: number;
}

const Ratings = ({star}: Props) => {
  return (
    <div className="flex items-center justify-center px-2">
    {[...Array(5)].map((_, index) => {
      index += 1;

      return (
        <AiFillStar
          key={index}
          className={`bg-transparent border-0 outline-0 text-xl
            ${
              index <= star ? "text-[#FFCC02]" : "text-[#ccc]"
            }`}
        />
      );
    })}
  </div>
  )
}

export default Ratings