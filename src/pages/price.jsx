import React from 'react';
import Wrapper from '../layout/wrapper';
import SEO from '../components/common/seo';
import Price from '../components/price';

const index = () => {
    return (
        <Wrapper>
            <SEO pageTitle={"Price"} />   
            <Price />         
        </Wrapper>
    );
};

export default index;