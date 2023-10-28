import React from 'react';
import Wrapper from '../layout/wrapper';
import SEO from '../components/common/seo';
import HomeFive from '../components/homes/home-5';

const inde = () => {
    return (
        <Wrapper>
            <SEO pageTitle={"Home 05"} />
            <HomeFive />
        </Wrapper>
    );
};

export default inde;