 import React from 'react';
import Wrapper from '../layout/wrapper';
import SEO from '../components/common/seo';
import TeamTwo from '../components/team-2';
 
 const index = () => {
    return (
        <Wrapper>
            <SEO pageTitle={"team 2"} />
            <TeamTwo />            
        </Wrapper>
    );
 };
 
 export default index;