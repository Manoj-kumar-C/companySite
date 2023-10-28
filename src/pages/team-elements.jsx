import React from "react";
import Wrapper from "../layout/wrapper";
import SEO from "../components/common/seo";
import TeamElements from "../components/elements/team-elements";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={"Team Elements"} />
      <TeamElements />
    </Wrapper>
  );
};

export default index;
