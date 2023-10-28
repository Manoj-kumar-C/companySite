import React from "react";
import HomeTwo from "../components/homes/home-2";
import SEO from "../components/common/seo";
import Wrapper from "../layout/wrapper";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={"Home 2"} />
      <HomeTwo />
    </Wrapper>
  );
};

export default index;
