import CartContainer from "../../component/block/cart-component/cart-container/cart-container"
import CartHeader from "../../component/block/cart-component/cart-header/cart-header"
import CartReview from "../../component/block/cart-component/cart-review/cart-review"

import { useContext } from "react"
import { CartContext } from "../../context/cart-context"

const CartPage = () => {
    const {cartItems} = useContext(CartContext)!

  return (
    <section className="h-auto bg-white flex justify-center items-center text-[#141414] font-mont pt-32 pb-8">

        <div className="w-full lg:w-[1200px] ">
            {
                cartItems.length >= 1 ? <CartContainer /> : <CartHeader />
            }
            <CartReview />
        </div>

    </section>
  )
}

export default CartPage