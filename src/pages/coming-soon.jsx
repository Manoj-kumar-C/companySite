import React from "react";
import Wrapper from "../layout/wrapper";
import SEO from "../components/common/seo";
import ComingSoon from "../components/coming-soon";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={"Coming Soon"} />
      <ComingSoon />
    </Wrapper>
  );
};

export default index;
