import Wrapper from "../layout/wrapper";
import SEO from "../components/common/seo";
import FooterElement from "../components/elements/footer-element";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={"Footer Element"} />
      <FooterElement />
    </Wrapper>
  );
};

export default index;
