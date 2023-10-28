import Wrapper from "../layout/wrapper";
import SEO from "../components/common/seo";
import BlogDetailsGallery from "../components/blog-pages/blog-details-gallery";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={"Blog Details Gallery"} />
      <BlogDetailsGallery />
    </Wrapper>
  );
};

export default index;
