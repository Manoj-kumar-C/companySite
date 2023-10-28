import HeaderTwo from "@/src/layout/headers/header-2";
import Breadcrumb from "../../common/breadcrumb/breadcrumb";
import Brand from "../../homes/home/brand";
import BrandArea from "../../homes/home-2/brand-area";
import BrandAreaFour from "../../homes/home-4/brand-area";
import BrandAreaAbout from "../../about/brand-area";
import Footer from "@/src/layout/footers/footer";

const Brands = () => {
  return (
    <>
      <HeaderTwo />
      <main>
        <Breadcrumb top_title="Elements Brands" title="Brand" />
        <Brand style_brands={true} />
        <BrandArea />
        <BrandAreaFour style_brands={true} />
        <BrandAreaAbout team={true} />
      </main>
      <Footer />
    </>
  );
};

export default Brands;
