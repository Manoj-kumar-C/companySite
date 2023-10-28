import React from "react";
import Wrapper from "../layout/wrapper";
import SEO from "../components/common/seo";
import Tab from "../components/elements/tab";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={"Tab"} />
      <Tab />
    </Wrapper>
  );
};

export default index;
