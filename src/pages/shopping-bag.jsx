import Wrapper from "../layout/wrapper";
import SEO from "../components/common/seo";
import ShoppingBag from "../components/shopping-bag";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={"Shopping Bag"} />
      <ShoppingBag />
    </Wrapper>
  );
};

export default index;
