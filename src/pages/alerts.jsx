import React from "react";
import Wrapper from "../layout/wrapper";
import SEO from "../components/common/seo";
import Alerts from "../components/elements/alerts";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={"Alerts"} />
      <Alerts />
    </Wrapper>
  );
};

export default index;
