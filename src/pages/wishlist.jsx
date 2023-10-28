import React from "react";
import Wrapper from "../layout/wrapper";
import SEO from "../components/common/seo";
import Wishlist from "../components/wishlist";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={"Wishlist"} />
      <Wishlist />
    </Wrapper>
  );
};

export default index;
