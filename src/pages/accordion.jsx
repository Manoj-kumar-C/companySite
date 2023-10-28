import React from 'react';
import Wrapper from '../layout/wrapper';
import SEO from '../components/common/seo';
import Accordion from '../components/elements/accordion';

const index = () => {
    return (
        <Wrapper>
            <SEO pageTitle={"Accordion"} />
            <Accordion />            
        </Wrapper>
    );
};

export default index;