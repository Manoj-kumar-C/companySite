import React from "react";
import Wrapper from "../layout/wrapper";
import SEO from "../components/common/seo";
import Shop from "../components/shop";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={"Shop Page"} />
      <Shop />
    </Wrapper>
  );
};

export default index;
