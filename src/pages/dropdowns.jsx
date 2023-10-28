import React from 'react';
import Wrapper from '../layout/wrapper';
import SEO from '../components/common/seo';
import Dropdowns from '../components/elements/dropdowns';

const index = () => {
    return (
        <Wrapper>
            <SEO pageTitle={"Dropdowns"} />
            <Dropdowns />
        </Wrapper>
    );
};

export default index;