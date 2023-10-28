import React from "react";
import Wrapper from "../layout/wrapper";
import SEO from "../components/common/seo";
import BlogThreeColumnMasonry from "../components/blog-pages/blog-3-column-masonry";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={"Blog 3 Column Masonry"} />
      <BlogThreeColumnMasonry />
    </Wrapper>
  );
};

export default index;
