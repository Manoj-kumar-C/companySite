import React from 'react';
import Wrapper from '../layout/wrapper';
import SEO from '../components/common/seo';
import Columns from '../components/elements/columns';

const index = () => {
    return (
        <Wrapper>
            <SEO pageTitle={"Columns"} />  
            <Columns />          
        </Wrapper>
    );
};

export default index;