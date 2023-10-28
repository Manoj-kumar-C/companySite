
import React from 'react';
import Wrapper from '../layout/wrapper';
import SEO from '../components/common/seo';
import PageTitles from '../components/elements/page-titles';

const index = () => {
    return (
        <Wrapper>
            <SEO pageTitle={"Page Titles"} />     
            <PageTitles />       
        </Wrapper>
    );
};

export default index;