import HeaderTwo from "@/src/layout/headers/header-2";
import React from "react";
import Breadcrumb from "../../common/breadcrumb/breadcrumb";
import PostOneArea from "./post-one-area";
import PostTwoArea from "./post-two-area";
import PostThreeArea from "./post-three-area";
import Footer from "@/src/layout/footers/footer";

const Post = () => {
  return (
    <>
      <HeaderTwo />
      <main>
        <Breadcrumb top_title="Elements Post" title="Post" />
        <PostOneArea />
        <PostTwoArea />
        <PostThreeArea />
      </main>
      <Footer />
    </>
  );
};

export default Post;
