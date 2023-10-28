import React from "react";
import Wrapper from "../layout/wrapper";
import SEO from "../components/common/seo";
import BlogDetailsVideo from "../components/blog-pages/blog-details-video";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={"Blog Details Video"} />
      <BlogDetailsVideo />
    </Wrapper>
  );
};

export default index;
