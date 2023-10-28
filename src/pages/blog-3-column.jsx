import React from "react";
import Wrapper from "../layout/wrapper";
import SEO from "../components/common/seo";
import BlogThreeColumn from "../components/blog-pages/blog-3-column";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={"Blog 3 Column"} />
      <BlogThreeColumn />
    </Wrapper>
  );
};

export default index;
