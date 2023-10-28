import HeaderTwo from "@/src/layout/headers/header-2";
import BreadcrumbSix from "../../common/breadcrumb/breadcrumb-6";
import BlogDetailsGalleryArea from "./blog-details-gallery-area";
import Footer from "@/src/layout/footers/footer";

const BlogDetailsGallery = () => {
  return (
    <>
      <HeaderTwo />
      <main>
        <BreadcrumbSix />
        <BlogDetailsGalleryArea />
      </main>
      <Footer />
    </>
  );
};

export default BlogDetailsGallery;
