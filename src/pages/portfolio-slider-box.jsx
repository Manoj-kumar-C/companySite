import React from "react";
import Wrapper from "../layout/wrapper";
import SEO from "../components/common/seo";
import PortfolioSliderBox from "../components/portfolios/portfolio-slider-box";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={"Portfolio Slider Box"} />
      <PortfolioSliderBox />
    </Wrapper>
  );
};

export default index;
