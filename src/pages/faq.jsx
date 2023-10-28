import React from 'react';
import Wrapper from '../layout/wrapper';
import SEO from '../components/common/seo';
import Faq from '../components/faq';

const index = () => {
    return (
        <Wrapper>
            <SEO pageTitle={"Faq"} />    
            <Faq />        
        </Wrapper>
    );
};

export default index;