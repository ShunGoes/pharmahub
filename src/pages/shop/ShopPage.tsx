import { ProductList, TopHeader } from ".";

const ShopPage = () => {
  return (
    <div className="bg-white h-screen text-[#141414] font-mont pt-32">
      <div className="w-4/5 mx-auto">
      <TopHeader />
      <ProductList />
    </div></div>
  )
}

export default ShopPage;