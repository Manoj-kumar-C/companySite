import HeaderTwo from "@/src/layout/headers/header-2";
import Breadcrumb from "../common/breadcrumb/breadcrumb";
import Footer from "@/src/layout/footers/footer";
import WishlistArea from "./wishlist-area";

const Wishlist = () => {
  return (
    <>
      <HeaderTwo />
      <main>
        <Breadcrumb top_title="Wishlist" title="Wishlist" />
        <WishlistArea />
      </main>
      <Footer />
    </>
  );
};

export default Wishlist;
