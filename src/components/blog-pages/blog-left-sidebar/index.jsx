import HeaderTwo from "@/src/layout/headers/header-2";
import React from "react";
import Breadcrumb from "../../common/breadcrumb/breadcrumb";
import Footer from "@/src/layout/footers/footer";
import BlogArea from "../blog/blog-area";

const BlogLeftSidebar = () => {
  return (
    <>
      <HeaderTwo />
      <main>
        <Breadcrumb top_title="Blog Left Sidebar" title="Blog Left Sidebar" />
        <BlogArea style_blog={true} />
      </main>
      <Footer />
    </>
  );
};

export default BlogLeftSidebar;
