import HeaderTwo from "@/src/layout/headers/header-2";
import Breadcrumb from "../../common/breadcrumb/breadcrumb";
import BlogTwoColumnMasonryArea from "./blog-2-column-masonry-area";
import Footer from "@/src/layout/footers/footer";

const BlogTwoColumnMasonry = () => {
  return (
    <>
      <HeaderTwo />
      <main>
        <Breadcrumb top_title="Blog 2 Columns Masonry" title="Blog Masonry" />
        <BlogTwoColumnMasonryArea />
      </main>
      <Footer />
    </>
  );
};

export default BlogTwoColumnMasonry;
