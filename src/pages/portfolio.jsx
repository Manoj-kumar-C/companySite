import React from 'react';
import Wrapper from '../layout/wrapper';
import SEO from '../components/common/seo';
import Portfolio from '../components/portfolios/portfolio';

const index = () => {
    return (
        <Wrapper>
            <SEO pageTitle={"Portfolio"} />    
            <Portfolio />        
        </Wrapper>
    );
};

export default index;