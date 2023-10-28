import React from "react";
import Wrapper from "../layout/wrapper";
import SEO from "../components/common/seo";
import PortfolioSingleTwo from "../components/portfolios/portfolio-single-2";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={"Portfolio Single 2"} />
      <PortfolioSingleTwo />
    </Wrapper>
  );
};

export default index;
