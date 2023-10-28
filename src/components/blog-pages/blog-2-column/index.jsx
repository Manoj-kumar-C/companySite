import HeaderTwo from "@/src/layout/headers/header-2";
import React from "react";
import Breadcrumb from "../../common/breadcrumb/breadcrumb";
import BlogTwoColumnArea from "./blog-2-column-area";
import Footer from "@/src/layout/footers/footer";

const BlogTwoColumn = () => {
  return (
    <>
      <HeaderTwo />
      <main>
        <Breadcrumb top_title="Blog 2 Columns" title="Blog 2 Columns" />
        <BlogTwoColumnArea />
      </main>
      <Footer />
    </>
  );
};

export default BlogTwoColumn;
