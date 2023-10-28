import React from "react";
import Wrapper from "../layout/wrapper";
import SEO from "../components/common/seo";
import BlogTwoColumn from "../components/blog-pages/blog-2-column";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={"Blog 2 Column"} />
      <BlogTwoColumn />
    </Wrapper>
  );
};

export default index;
