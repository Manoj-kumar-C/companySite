import React from 'react';
import Wrapper from '../layout/wrapper';
import SEO from '../components/common/seo';
import HomeSix from '../components/homes/home-6';

const index = () => {
    return (
        <Wrapper>
            <SEO pageTitle={"Home 06"} />
            <HomeSix />
        </Wrapper>
    );
};

export default index;