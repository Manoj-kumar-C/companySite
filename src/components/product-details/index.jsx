import Footer from "@/src/layout/footers/footer";
import HeaderTwo from "@/src/layout/headers/header-2";
import ProductDetailsItem from "./product-details-item"; 
import Breadcrumb from "../common/breadcrumb/breadcrumb";

const ProductDetailsArea = ({ product }) => {
  
  return (
    <>
      <HeaderTwo />
      <main>
        <Breadcrumb top_title="Product Details" title="Product Details" />
        <ProductDetailsItem sp_item={product}/>
      </main>
      <Footer />
    </>
  );
};

export default ProductDetailsArea;
