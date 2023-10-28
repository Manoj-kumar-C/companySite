import React from 'react';
import Wrapper from '../layout/wrapper';
import SEO from '../components/common/seo';
import PortfolioSingleFour from '../components/portfolios/portfolio-single-4';

const index = () => {
    return (
        <Wrapper>
            <SEO pageTitle={"Portfolio Single 4"} /> 
            <PortfolioSingleFour />           
        </Wrapper>
    );
};

export default index;