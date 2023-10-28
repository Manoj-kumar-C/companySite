import HeaderTwo from "@/src/layout/headers/header-2"; 
import PortfolioSingleArea from "./portfolio-single-area";
import Breadcrumb from "../../common/breadcrumb/breadcrumb";
import PortfolioSliderBoxArea from "../portfolio-slider-box/portfolio-slider-box-area";
import FooterTwo from "@/src/layout/footers/footer-2";
import PortfolioPagination from "./portfolio-pagination";

const PortfolioSingle = () => {
  return (
    <>
      <HeaderTwo />
      <main>
        <Breadcrumb top_title="Portfolio Single 01" title="Portfolio Single" />
        <PortfolioSingleArea />
        <PortfolioPagination />
        <PortfolioSliderBoxArea style_box={true} />
      </main>
      <FooterTwo />
    </>
  );
};

export default PortfolioSingle;
