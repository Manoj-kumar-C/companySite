import HeaderTwo from "@/src/layout/headers/header-2";
import Breadcrumb from "../../common/breadcrumb/breadcrumb";
import Footer from "@/src/layout/footers/footer";
import ThreeColumnMasonryArea from "./three-column-masonry-area";

const BlogThreeColumnMasonry = () => {
  return (
    <>
      <HeaderTwo />
      <main>
        <Breadcrumb top_title="Blog 3 Columns Masonry" title="Blog 3 Columns Masonry"/>
        <ThreeColumnMasonryArea />
      </main>
      <Footer />
    </>
  );
};

export default BlogThreeColumnMasonry;
