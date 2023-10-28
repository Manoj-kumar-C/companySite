import React from "react";
import Wrapper from "../layout/wrapper";
import SEO from "../components/common/seo";
import Service from "../components/service";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={"Service"} />
      <Service />
    </Wrapper>
  );
};

export default index;
