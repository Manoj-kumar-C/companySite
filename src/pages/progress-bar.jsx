import React from "react";
import Wrapper from "../layout/wrapper";
import SEO from "../components/common/seo";
import ProgressBar from "../components/elements/progress-bar";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={"Progress Bar"} />
      <ProgressBar />
    </Wrapper>
  );
};

export default index;
