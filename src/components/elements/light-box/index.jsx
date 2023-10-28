import HeaderTwo from "@/src/layout/headers/header-2";
import React from "react";
import Breadcrumb from "../../common/breadcrumb/breadcrumb";
import LightBoxArea from "./light-box-area";
import Footer from "@/src/layout/footers/footer";

const LightBox = () => {
  return (
    <>
      <HeaderTwo />
      <main>
        <Breadcrumb top_title="Elements Light Box" title="Light Box" />
        <LightBoxArea />
      </main>
      <Footer />
    </>
  );
};

export default LightBox;        
