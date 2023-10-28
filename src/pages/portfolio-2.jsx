import Wrapper from '../layout/wrapper';
import SEO from '../components/common/seo';
import PortfolioTwo from '../components/portfolios/portfolio-2';

const index = () => {
    return (
        <Wrapper>
            <SEO pageTitle={"Portfolio 2"} />   
            <PortfolioTwo />         
        </Wrapper>
    );
};

export default index;