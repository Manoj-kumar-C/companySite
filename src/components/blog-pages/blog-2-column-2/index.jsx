import HeaderTwo from "@/src/layout/headers/header-2"; 
import BreadcrumbThree from "../../common/breadcrumb/breadcrumb-3";
import BlogTwoColumnTwoArea from "./blog-2-column-2-area";
import Footer from "@/src/layout/footers/footer";

const BlogTwoColumnTwo = () => {
  return (
    <>
      <HeaderTwo />
      <main>
        <BreadcrumbThree />
        <BlogTwoColumnTwoArea />
      </main>
      <Footer />
    </>
  );
};

export default BlogTwoColumnTwo;
