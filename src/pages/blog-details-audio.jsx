
import React from 'react';
import Wrapper from '../layout/wrapper';
import SEO from '../components/common/seo';
import BlogDetailsAudio from '../components/blog-pages/blog-details-audio';

const index = () => {
    return (
        <Wrapper>
            <SEO pageTitle={"Blog Details Audio"} /> 
            <BlogDetailsAudio />           
        </Wrapper>
    );
};

export default index;