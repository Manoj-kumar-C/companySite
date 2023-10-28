import React from 'react';
import Wrapper from '../layout/wrapper';
import SEO from '../components/common/seo';
import Counter from '../components/elements/counter';

const index = () => {
    return (
        <Wrapper>
            <SEO pageTitle={"Counter"} />         
            <Counter />   
        </Wrapper>
    );
};

export default index;