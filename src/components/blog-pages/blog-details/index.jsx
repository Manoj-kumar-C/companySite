import HeaderTwo from "@/src/layout/headers/header-2";
import BreadcrumbFive from "../../common/breadcrumb/breadcrumb-5";
import BlogDetailsArea from "./blog-details-area";
import Footer from "@/src/layout/footers/footer";

const BlogDetails = () => {
  return (
    <>
      <HeaderTwo />
      <main>
        <BreadcrumbFive top_title="Blog Details" title="Blog Details" />
        <BlogDetailsArea />
      </main>
      <Footer />
    </>
  );
};

export default BlogDetails;
