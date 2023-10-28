import Wrapper from "../layout/wrapper";
import SEO from "../components/common/seo";
import Buttons from "../components/elements/buttons";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={"Buttons"} />
      <Buttons />
    </Wrapper>
  );
};

export default index;
