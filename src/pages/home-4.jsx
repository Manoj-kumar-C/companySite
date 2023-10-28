import React from 'react';
import Wrapper from '../layout/wrapper';
import SEO from '../components/common/seo';
import HomeFour from '../components/homes/home-4';

const index = () => {
    return (
        <Wrapper>
            <SEO pageTitle={"Home 4"} />
            <HomeFour />
        </Wrapper>
    );
};

export default index;