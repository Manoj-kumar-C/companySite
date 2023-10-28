import HeaderTwo from "@/src/layout/headers/header-2";
import Breadcrumb from "../common/breadcrumb/breadcrumb";
import ShopArea from "./shop-area";

const Shop = () => {
  return (
    <>
      <HeaderTwo />
      <main>
        <Breadcrumb top_title="Shop Default" title="Shop" />
        <ShopArea />
      </main>
    </>
  );
};

export default Shop;
