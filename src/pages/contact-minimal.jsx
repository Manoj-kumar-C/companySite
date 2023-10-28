import React from "react";
import Wrapper from "../layout/wrapper";
import SEO from "../components/common/seo";
import ContactMinimal from "../components/contact-minimal";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={"Contact Minimal"} />
      <ContactMinimal />
    </Wrapper>
  );
};

export default index;
