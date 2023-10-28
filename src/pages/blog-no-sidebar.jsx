import React from "react";
import Wrapper from "../layout/wrapper";
import SEO from "../components/common/seo";
import BlogNoSidebar from "../components/blog-pages/blog-no-sidebar";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={"Blog No Sidebar"} />
      <BlogNoSidebar />
    </Wrapper>
  );
};

export default index;
