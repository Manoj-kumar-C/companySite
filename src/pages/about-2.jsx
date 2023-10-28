import React from 'react';
import Wrapper from '../layout/wrapper';
import SEO from '../components/common/seo';
import AboutTwo from '../components/about-2';

const index = () => {
    return (
        <Wrapper>
            <SEO pageTitle={"About 2"} />
            <AboutTwo />            
        </Wrapper>
    );
};

export default index;