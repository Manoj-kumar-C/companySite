import Wrapper from '../layout/wrapper';
import SEO from '../components/common/seo';
import PortfolioSliderFull from './../components/portfolios/portfolio-slider-full/index';

const index = () => {
    return (
        <Wrapper>
            <SEO pageTitle={"Portfolio Slider Full"} />
            <PortfolioSliderFull />            
        </Wrapper>
    );
};

export default index;