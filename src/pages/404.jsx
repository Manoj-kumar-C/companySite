import React from 'react';
import Wrapper from '../layout/wrapper';
import SEO from '../components/common/seo';
import Error from '../components/error';

const indx = () => {
    return (
        <Wrapper>
            <SEO pageTitle="error" />
            <Error />            
        </Wrapper>
    );
};

export default indx;