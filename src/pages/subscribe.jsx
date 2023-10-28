import React from "react";
import Wrapper from "../layout/wrapper";
import SEO from "../components/common/seo";
import Subscribe from "../components/elements/subscribe";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={"subscribe"} />
      <Subscribe />
    </Wrapper>
  );
};

export default index;
