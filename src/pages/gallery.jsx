import React from 'react';
import Wrapper from '../layout/wrapper';
import SEO from '../components/common/seo';
import Gallery from '../components/elements/gallery';

const index = () => {
    return (
        <Wrapper>
            <SEO pageTitle={"Gallery"} />  
            <Gallery />          
        </Wrapper>
    );
};

export default index;