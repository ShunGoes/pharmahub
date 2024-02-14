import CartItem from "../cart-item/cart-item"

import { useContext } from "react"

import { CartContext } from "../../../../context/cart-context"

const CartItemsContainer = () => {
    const {cartItems} = useContext(CartContext)!
    

  return (
    <div className="x lg:w-[793px] ">
        <div className="hidden lg:block ">
            <div className="flex  text-[15px] font-[500]">
                <p className="w-[481px] py-[16px] pl-[32px]">Product</p>
                <p className="w-[156px] py-[16px] pl-[32px]">Quantity</p>
                <p className="w-[156px] py-[16px] pl-[32px]">Total</p>
            </div>
        </div>
        {
            cartItems.map(item => <CartItem key={item.id} obj ={item} />)
        }
        
    </div>
  )
}

export default CartItemsContainer