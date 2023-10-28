import React from 'react';
import Wrapper from '../layout/wrapper';
import SEO from '../components/common/seo';
import Badges from '../components/elements/badges';

const index = () => {
    return (
        <Wrapper>
            <SEO pageTitle={"Badges"} />  
            <Badges />          
        </Wrapper>
    );
};

export default index;