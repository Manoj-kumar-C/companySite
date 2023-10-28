import React from "react";
import Wrapper from "../layout/wrapper";
import SEO from "../components/common/seo";
import Blog from "../components/blog-pages/blog";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={"Blog"} />
      <Blog />
    </Wrapper>
  );
};

export default index;
