import HeaderTwo from "@/src/layout/headers/header-2";
import React from "react";
import Breadcrumb from "../../common/breadcrumb/breadcrumb";
import PortfolioSingleTwoArea from "./portfolio-single-2-area";
import PortfolioPagination from "../portfolio-single/portfolio-pagination";
import FooterTwo from "@/src/layout/footers/footer-2";

const PortfolioSingleTwo = () => {
  return (
    <>
      <HeaderTwo />
      <main>
        <Breadcrumb top_title="Portfolio Single 02"  title="Portfolio Single 02" />
        <PortfolioSingleTwoArea />
        <PortfolioPagination  style_single_2={true} />
      </main>
      <FooterTwo />
    </>
  );
};

export default PortfolioSingleTwo;
