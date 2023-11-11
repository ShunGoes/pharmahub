import { Outlet } from "react-router-dom";
import { Footer, Header } from "../../component";

const ShopLayout = () => {
  return (
    <div>
      <Header />

      <Outlet />

      <Footer />
    </div>
  );
};

export default ShopLayout;
