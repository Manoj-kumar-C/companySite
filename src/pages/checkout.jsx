import React from "react";
import Wrapper from "../layout/wrapper";
import SEO from "../components/common/seo";
import Checkout from "../components/checkout";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={"Checkout"} />
      <Checkout />
    </Wrapper>
  );
};

export default index;
