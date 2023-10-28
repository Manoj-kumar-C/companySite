import HeaderTwo from "@/src/layout/headers/header-2";
import React from "react";
import Breadcrumb from "../common/breadcrumb/breadcrumb";
import ServiceArea from "../homes/home-6/service-area";
import HIWArea from "../homes/home-6/hiw-area";
import BrandArea from "../about/brand-area";
import Footer from "@/src/layout/footers/footer";

const AboutTwo = () => {
  return (
    <>
      <HeaderTwo />
      <main>
        <Breadcrumb top_title="About Style 02" title="About 2" />
        <ServiceArea />
        <HIWArea />
        <BrandArea />
        <Footer />
      </main>
    </>
  );
};

export default AboutTwo;
