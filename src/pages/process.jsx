import React from "react";
import Wrapper from "../layout/wrapper";
import SEO from "../components/common/seo";
import Process from "../components/process";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={"Process"} />
      <Process />
    </Wrapper>
  );
};

export default index;
