import React from "react";
import Wrapper from "../layout/wrapper";
import SEO from "../components/common/seo";
import LightBox from "../components/elements/light-box";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={"Light Box"} />
      <LightBox />
    </Wrapper>
  );
};

export default index;
