import React from 'react'; 
import HomeOne from './../components/homes/home/index';
import SEO from '../components/common/seo';
import Wrapper from '../layout/wrapper';
import HomeSeven from '../components/homes/home-7';

const index = () => {
  return (
    <Wrapper> 
    <SEO pageTitle={"Fresh Spar"} />
     <HomeSeven />
    </Wrapper>
  );
};

export default index; 