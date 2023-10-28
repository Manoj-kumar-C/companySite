import React from 'react';
import Wrapper from '../layout/wrapper';
import SEO from '../components/common/seo';
import Testimonials from '../components/elements/testimonials';

const index = () => {
    return (
        <Wrapper>
            <SEO pageTitle={"Testimonials"} />
            <Testimonials />
        </Wrapper>
    );
};

export default index;