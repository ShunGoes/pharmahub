import { createContext, useState } from "react";
import PRODUCTS from "../data.json";

interface ProductOject {
  id: number;
  name: string;
  imageUrl: string;
  price: number ;
  sex: string;
}
interface Children {
  children: React.ReactNode;
}
interface CartContextProps {
    cartItems: ProductOject[],
    setCartItems: React.Dispatch<React.SetStateAction<ProductOject[]>>,
    addToCart: (id: ProductOject) => void,
    total:number
}

export const CartContext = createContext<CartContextProps | null>(null);

export const CartContextProvider = ({ children }: Children) => {
  const [cartItems, setCartItems] = useState<ProductOject[]>(PRODUCTS);

//    add items to cart
  const addToCart = (id: ProductOject) => {
    setCartItems([...cartItems, id]);
  };

  const total = cartItems.reduce((acc: number,val:ProductOject) => acc + val.price, 0)

  const value = { cartItems, setCartItems, addToCart,total };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
