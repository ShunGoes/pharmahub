import { ProductList, TopHeader } from ".";

const ShopPage = () => {
  return (
    <div className="bg-white h-full text-[#141414] font-mont py-32">
      <div className="w-4/5 mx-auto">
      <TopHeader />
      <ProductList />
    </div></div>
  )
}

export default ShopPage;