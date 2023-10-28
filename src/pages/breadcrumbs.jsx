import Wrapper from "../layout/wrapper";
import SEO from "../components/common/seo";
import Breadcrumbs from "../components/elements/breadcrumbs";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={"Breadcrumbs"} />
      <Breadcrumbs />
    </Wrapper>
  );
};

export default index;
