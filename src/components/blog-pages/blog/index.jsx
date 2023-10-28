import BlogArea from "./blog-area";
import Footer from "@/src/layout/footers/footer";
import HeaderTwo from "@/src/layout/headers/header-2";
import BreadcrumbTwo from "../../common/breadcrumb/breadcrumb-2";

const Blog = () => {
  return (
    <>
      <HeaderTwo /> 
      <main>
        <BreadcrumbTwo top_title="Blog Standard" title="Blog Standard" />
        <BlogArea />
      </main>
      <Footer />
    </>
  );
};

export default Blog;
