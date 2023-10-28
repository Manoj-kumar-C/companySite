import React from 'react';
import Wrapper from '../layout/wrapper';
import SEO from '../components/common/seo';
import PortfolioThree from '../components/portfolios/portfolio-3';

const index = () => {
    return (
        <Wrapper>
            <SEO pageTitle={"Portfolio 3"} /> 
            <PortfolioThree />           
        </Wrapper>
    );
};

export default index;