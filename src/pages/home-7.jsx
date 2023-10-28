import React from 'react';
import Wrapper from '../layout/wrapper';
import SEO from '../components/common/seo';
import HomeSeven from '../components/homes/home-7';

const index = () => {
    return (
        <Wrapper>
            <SEO pageTitle={"Home 07"} />  
            <HomeSeven />          
        </Wrapper>
    );
};

export default index;