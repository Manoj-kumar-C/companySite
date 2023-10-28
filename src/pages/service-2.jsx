import React from 'react';
import Wrapper from '../layout/wrapper';
import SEO from '../components/common/seo';
import ServiceTwo from '../components/service-2';

const index = () => {
    return (
        <Wrapper>
            <SEO pageTitle={"Service 2"} />
            <ServiceTwo />            
        </Wrapper>
    );
};

export default index;