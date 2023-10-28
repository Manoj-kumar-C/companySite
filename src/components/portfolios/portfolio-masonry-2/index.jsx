import HeaderTwo from "@/src/layout/headers/header-2";
import React from "react";
import Breadcrumb from "../../common/breadcrumb/breadcrumb";
import PortfolioMasonryTwoArea from "./portfolio-masonry-2-area";
import FooterTwo from "@/src/layout/footers/footer-2";

const PortfolioMasonryTwo = () => {
  return (
    <>
      <HeaderTwo />
      <main>
        <Breadcrumb top_title="Portfolio Masonry"  title="Portfolio Masonry" />
        <PortfolioMasonryTwoArea />
      </main>
      <FooterTwo />
    </>
  );
};

export default PortfolioMasonryTwo;
