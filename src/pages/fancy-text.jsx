import React from "react";
import Wrapper from "../layout/wrapper";
import SEO from "../components/common/seo";
import FancyText from "../components/elements/fancy-text";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={"Fancy Text"} />
      <FancyText r />
    </Wrapper>
  );
};

export default index;
