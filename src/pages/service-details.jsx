import React from "react";
import Wrapper from "../layout/wrapper";
import SEO from "../components/common/seo";
import ServiceDetails from "../components/service-details";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={"Service Details"} />
      <ServiceDetails />
    </Wrapper>
  );
};

export default index;
