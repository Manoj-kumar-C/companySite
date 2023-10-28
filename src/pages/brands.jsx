import React from 'react';
import Wrapper from '../layout/wrapper';
import SEO from '../components/common/seo';
import Brands from '../components/elements/brands';

const index = () => {
    return (
        <Wrapper>
            <SEO pageTitle={"Brand"} />    
            <Brands />       
        </Wrapper>
    );
};

export default index;