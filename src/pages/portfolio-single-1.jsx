import React from "react";
import Wrapper from "../layout/wrapper";
import SEO from "../components/common/seo";
import PortfolioSingle from "./../components/portfolios/portfolio-single/index";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={"Portfolio Single"} />
      <PortfolioSingle />
    </Wrapper>
  );
};

export default index;
