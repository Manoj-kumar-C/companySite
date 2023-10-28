import HeaderTwo from "@/src/layout/headers/header-2";
import React from "react";
import Breadcrumb from "../../common/breadcrumb/breadcrumb";
import PortfolioMasonryArea from "./portfolio-masonry-area";
import FooterTwo from "@/src/layout/footers/footer-2";

const PortfolioMasonry = () => {
  return (
    <>
      <HeaderTwo />
      <main>
        <Breadcrumb top_title="Portfolio Masonry" title="Masonry" />
        <PortfolioMasonryArea />
      </main>
      <FooterTwo />
    </>
  );
};

export default PortfolioMasonry;
