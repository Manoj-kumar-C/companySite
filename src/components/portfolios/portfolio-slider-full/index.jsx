import HeaderTwo from "@/src/layout/headers/header-2"; 
import Breadcrumb from "../../common/breadcrumb/breadcrumb";
import PortfolioSliderFullArea from './portfolio-slider-full-area';
import FooterTwo from "@/src/layout/footers/footer-2";

const PortfolioSliderFull = () => {
  return (
    <>
      <HeaderTwo />
      <main>
        <Breadcrumb top_title={"Portfolio Slider Full"} title={"Portfolio Slider"} />
        <PortfolioSliderFullArea />
      </main>
      <FooterTwo />
    </>
  );
};

export default PortfolioSliderFull;
