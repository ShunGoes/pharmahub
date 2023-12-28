import { ProductList, TopHeader } from ".";

const ShopPage = () => {
  return (
    <div className="bg-white h-full w-full text-[#141414] font-mont py-32">
      <div className="flex flex-col lg:w-4/5 w-11/12 mx-auto overflow-hidden">
        <TopHeader />
        <ProductList />
      </div>
    </div>
  );
};

export default ShopPage;
