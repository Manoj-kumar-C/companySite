import Wrapper from "../layout/wrapper";
import SEO from "../components/common/seo";
import PortfolioMasonry from "../components/portfolios/portfolio-masonry";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={"Portfolio Masonry"} />
      <PortfolioMasonry />
    </Wrapper>
  );
};

export default index;
