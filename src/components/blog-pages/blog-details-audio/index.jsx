import HeaderTwo from "@/src/layout/headers/header-2";
import BreadcrumbFive from "../../common/breadcrumb/breadcrumb-5";
import Footer from "@/src/layout/footers/footer";
import BlogDetailsAudioArea from "./blog-details-audio-area";

const BlogDetailsAudio = () => {
  return (
    <>
      <HeaderTwo />
      <main>
        <BreadcrumbFive top_title={"Blog Details"} title={"Blog Details"} />
        <BlogDetailsAudioArea />
      </main>
      <Footer />
    </>
  );
};

export default BlogDetailsAudio;
