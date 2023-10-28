import React from 'react';
import Wrapper from '../layout/wrapper';
import SEO from '../components/common/seo';
import ContactStandard from '../components/contact-standard';

const index = () => {
    return (
        <Wrapper>
            <SEO pageTitle={"Contact Standard"} />
            <ContactStandard />            
        </Wrapper>
    );
};

export default index;