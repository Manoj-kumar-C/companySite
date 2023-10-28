import React from "react";
import BlogMainArea from "./../blog-common/blog-main-area";

const BlogNoSidebarArea = () => {
  return (
    <>
      <section className="blog-area pt-120 pb-80">
        <div className="container">
          <div className="row">
            <div className="col-xl-8 offset-xl-2 col-lg-10 offset-lg-1">
              <BlogMainArea />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogNoSidebarArea;
