import HeaderTwo from "@/src/layout/headers/header-2";
import React from "react";
import Breadcrumb from "../../common/breadcrumb/breadcrumb";
import PortfolioSliderBoxArea from "./portfolio-slider-box-area";
import FooterTwo from "@/src/layout/footers/footer-2";

const PortfolioSliderBox = () => {
  return (
    <>
      <HeaderTwo />
      <main>
        <Breadcrumb top_title="Portfolio Slider Box" title="Slider Box" />
        <PortfolioSliderBoxArea />
      </main>
      <FooterTwo />
    </>
  );
};

export default PortfolioSliderBox;
