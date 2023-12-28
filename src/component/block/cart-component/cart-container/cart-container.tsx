import CartItemsContainer from "../cart-items-container/cart-items-container";
import CartSummary from "../cart-summary/cart-summary";

const CartContainer = () => {
  return (
    <section className="grid grid-cols-10 gap-3">
      <div className="col-span-10 lg:col-span-7 border-2">
        <h2 className="text-[#0A4757] text-[24px] font-[700] mb-[1.5rem] w-11/12 mx-auto ">My Cart</h2>
        <CartItemsContainer />
      </div>
      <div className="col-span-10 lg:col-span-3  h-auto">
        <CartSummary />
      </div>
    </section>
  );
};

export default CartContainer;
