import React from 'react'; 
import HomeOne from './../components/homes/home/index';
import SEO from '../components/common/seo';
import Wrapper from '../layout/wrapper';

const index = () => {
  return (
    <Wrapper> 
    <SEO pageTitle={"Xisen"} />
     <HomeOne />
    </Wrapper>
  );
};

export default index; 