import React from "react";
import Wrapper from "../layout/wrapper";
import SEO from "../components/common/seo";
import CallToAction from "../components/elements/call-to-action";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={"Call To Action"} />
      <CallToAction />
    </Wrapper>
  );
};

export default index;
