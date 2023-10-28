import React from "react";
import Wrapper from "../layout/wrapper";
import SEO from "../components/common/seo";
import BlogLeftSidebar from "../components/blog-pages/blog-left-sidebar";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={"Blog- Left Sidebar"} />
      <BlogLeftSidebar />
    </Wrapper>
  );
};

export default index;
