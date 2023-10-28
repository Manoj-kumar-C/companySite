import SEO from "../components/common/seo";
import PortfolioMasonryTwo from "../components/portfolios/portfolio-masonry-2";
import Wrapper from "../layout/wrapper"; 

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle="Portfolio Masonry 2" />
      <PortfolioMasonryTwo />
    </Wrapper>
  );
};

export default index;
