import HeaderTwo from "@/src/layout/headers/header-2"; 
import Breadcrumb from "../../common/breadcrumb/breadcrumb";
import PortfolioArea from "../../portfolios/portfolio/portfolio-area";
import PortfolioTwoArea from "../../portfolios/portfolio-2/portfolio-2-area";
import PortfolioSliderFullArea from "../../portfolios/portfolio-slider-full/portfolio-slider-full-area";
import PortfolioMasonryArea from "../../portfolios/portfolio-masonry/portfolio-masonry-area";
import PortfolioThreeArea from "../../portfolios/portfolio-3/portfolio-3-area";
import PortfolioSliderBoxArea from "../../portfolios/portfolio-slider-box/portfolio-slider-box-area";
import Footer from "@/src/layout/footers/footer";

const Gallery = () => {
  return (
    <>
      <HeaderTwo />
      <main>
        <Breadcrumb top_title="Elements Gallery"  title="Gallery" />
        <PortfolioArea style_gallery={true} />
        <hr />
        <PortfolioTwoArea style_gallery={true} />
        <hr />
        <PortfolioSliderFullArea style_gallery={true} />
        <hr />
        <PortfolioMasonryArea style_gallery={true} />
        <hr />
        <PortfolioThreeArea style_gallery={true} />
        <hr />
        <PortfolioSliderBoxArea style_gallery={true} />
      </main>
      <Footer />
    </>
  );
};

export default Gallery;
 