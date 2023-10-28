import React from 'react';
import Wrapper from '../layout/wrapper';
import SEO from '../components/common/seo';
import Post from '../components/elements/post';

const index = () => {
    return (
        <Wrapper>
            <SEO pageTitle={"Post"} /> 
            <Post />           
        </Wrapper>
    );
};

export default index;