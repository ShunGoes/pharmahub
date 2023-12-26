import Cart_Item_1 from "./../../../../assets/cart-assets/cart-item-1.svg";
import AddBtn from "./../../../../assets/cart-assets/cart-plus.svg";
import SubtractBtn from "./../../../../assets/cart-assets/cart-minus.svg";
import { useState, useContext } from "react";
import { CartContext } from "../../../../context/cart-context";

interface ProductOject {
  id: number;
  name: string;
  imageUrl: string;
  price: number | string;
  sex: string;
}
interface CartItemProps {
  obj: ProductOject;
}

const CartItem: React.FC<CartItemProps> = ({ obj }) => {
  const [quantity, setQuantity] = useState(1);
  const { cartItems, setCartItems } = useContext(CartContext)!;

  const { imageUrl, price, id } = obj;
  const handleIncrement = () => {
    setQuantity((prev) => prev + 1);
  };

  const handleDecrement = () => {
    if (quantity === 1) return;
    setQuantity((prev) => prev - 1);
  };
  const deleteFromCart = (id: number) => {
    const filtered_items = cartItems.filter((item) => item.id !== id);
    setCartItems(filtered_items);
  };

  return (
    <div className="h-[178px] w-full lg:h-[150px]  my-2 py-5 lg:py-0 lg:flex lg:items-center ">
      <div className=" w-11/12 mx-auto h-4/5 grid grid-cols-12 gap-5 lg:h-[120px] lg:w-[481px] lg:mx-0 lg:pl-[32px]  ">
        <div className="col-span-3  h-[100px] flex justify-center items-center  lg:col-span-4 lg:h-[120px]  ">
          <img
            src={imageUrl}
            alt="cart item 1"
            className="object-cover h-4/5  rounded-lg w-full"
          />
        </div>
        <div className="col-span-9 flex flex-col lg:flex-row lg:col-span-8 gap-1 ">
          <div className="flex flex-col gap-1 justify-center">
            <p className="text-[#818181] text-[10px] font-[600]">
              MEDICAL EQUIPMENTS{" "}
            </p>
            <h3 className="text-[#0C2129] text-[15px]  font-[600] w-[231px] lg:w-[283px]">
              {" "}
              Accu-Chek Active Blood Glucose Monitor
            </h3>
            <p className="text-[#818181] text-[15px] font-[600] lg:font-[500] lg:text-[14px]">
              N {price}
            </p>
          </div>
        </div>
      </div>
      <div className="w-7/12 mx-auto  flex items-center lg:flex-col lg:justify-center lg:items-center gap-4  lg:w-[156px] lg:mx-0 lg:h-[120px] l">
        <div className="w-full   lg:w-full flex justify-around items-center">
          <img
            src={SubtractBtn}
            alt="decrease product quantity"
            onClick={handleDecrement}
            className="cursor-pointer"
          />
          <p className="text-[#0C2129] text-[15px] font-[600]">{quantity}</p>
          <img
            src={AddBtn}
            alt="increase product quantity"
            onClick={handleIncrement}
            className="cursor-pointer"
          />
        </div>
        <p
          className="text-[#818181] text-[14px] cursor-pointer font-[400]"
          onClick={() => deleteFromCart(id)}
        >
          Remove
        </p>
      </div>
      <div className="hidden lg:block h-[120px] w-[150px] ">
      <div className="flex justify-center items-center h-full w-full">
        N{price}
      </div>
      </div>
    </div>
  );
};

export default CartItem;

// <div className="w-10/12 lg:w-[793px]  mx-auto py-6 border-2 grid grid-cols-12 gap-3 h-full">
//
//
//                 <div className='w-[150px] hidden lg:block h-full border-2'>

//                 </div>
//             </div>
//         </div>
