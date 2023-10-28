import HeaderTwo from "@/src/layout/headers/header-2";
import Breadcrumb from "../common/breadcrumb/breadcrumb";
import Footer from "@/src/layout/footers/footer";
import ShopArea from "../shop/shop-area";

const ShopList = () => {
  return (
    <>
      <HeaderTwo />
      <main>
        <Breadcrumb top_title="Shop List" title="Shop List" />
        <ShopArea shop_list={true} />
      </main>
      <Footer />
    </>
  );
};

export default ShopList;
