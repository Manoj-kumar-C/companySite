import Footer from "@/src/layout/footers/footer";
import HeaderTwo from "@/src/layout/headers/header-2";
import Breadcrumb from "../common/breadcrumb/breadcrumb";
import CheckoutArea from "./checkout-area";

const Checkout = () => {
  return (
    <>
      <HeaderTwo />
      <main>
        <Breadcrumb top_title="Checkout" title="Checkout" />
        <CheckoutArea />
      </main>
      <Footer />
    </>
  );
};

export default Checkout;
