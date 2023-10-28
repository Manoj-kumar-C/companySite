import Wrapper from "../layout/wrapper";
import SEO from "../components/common/seo";
import PortfolioSingleThree from "../components/portfolios/portfolio-single-3";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={"Portfolio Single  3"} />
      <PortfolioSingleThree />
    </Wrapper>
  );
};

export default index;
