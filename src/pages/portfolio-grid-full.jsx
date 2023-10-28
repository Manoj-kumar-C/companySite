import React from 'react';
import Wrapper from '../layout/wrapper';
import SEO from '../components/common/seo';
import PortfolioGridFull from '../components/portfolios/portfolio-grid-full';

const index = () => {
    return (
        <Wrapper>
            <SEO pageTitle={"Portfolio Grid Full"} />
            <PortfolioGridFull />
        </Wrapper>
    );
};

export default index;