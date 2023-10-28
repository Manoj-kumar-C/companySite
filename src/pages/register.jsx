import React from "react";
import Wrapper from "../layout/wrapper";
import SEO from "../components/common/seo";
import Register from "../components/register";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={"Register"} />
      <Register />
    </Wrapper>
  );
};

export default index;
